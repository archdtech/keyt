import { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';
import { db } from '@/lib/db';
import { compare } from 'bcryptjs';
import { z } from 'zod';

// User schema for validation
const UserSchema = z.object({
  id: z.string(),
  email: z.string().email(),
  name: z.string(),
  role: z.enum(['founder', 'partner', 'investor', 'admin']),
  company: z.string().optional(),
  bio: z.string().optional(),
  avatar: z.string().optional(),
  linkedIn: z.string().optional(),
  website: z.string().optional(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

// Credentials schema
const CredentialsSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

// Auth configuration
export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        try {
          // Validate credentials
          const { email, password } = CredentialsSchema.parse(credentials);

          // Find user in database
          const user = await db.user.findUnique({
            where: { email },
            include: {
              profile: true,
              preferences: true,
            }
          });

          if (!user || !user.password) {
            return null;
          }

          // Verify password
          const isPasswordValid = await compare(password, user.password);
          
          if (!isPasswordValid) {
            return null;
          }

          // Update last activity
          await db.user.update({
            where: { id: user.id },
            data: { lastActivity: new Date() }
          });

          return {
            id: user.id,
            email: user.email,
            name: user.name,
            role: user.role,
            image: user.profile?.avatar,
          };
        } catch (error) {
          console.error('Auth error:', error);
          return null;
        }
      }
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  
  callbacks: {
    async jwt({ token, user, account }) {
      // Initial sign in
      if (account && user) {
        token.accessToken = account.access_token;
        token.user = user;
        
        // Store user session in database
        if (user.id) {
          await db.session.create({
            data: {
              userId: user.id,
              token: token.accessToken || '',
              refreshToken: account.refresh_token || '',
              expiresAt: account.expires_at ? new Date(account.expires_at * 1000) : new Date(),
              provider: account.provider,
            }
          });
        }
      }

      // Return previous token if user data not available
      return token;
    },

    async session({ session, token }) {
      if (token.user) {
        session.user = {
          id: token.user.id,
          email: token.user.email,
          name: token.user.name,
          role: token.user.role,
          image: token.user.image,
        };
      }
      
      return session;
    },

    async signIn({ user, account, profile }) {
      if (account?.provider === 'google') {
        try {
          // Check if user exists
          const existingUser = await db.user.findUnique({
            where: { email: user.email! },
            include: {
              profile: true,
              preferences: true,
            }
          });

          if (!existingUser) {
            // Create new user
            const newUser = await db.user.create({
              data: {
                email: user.email!,
                name: user.name || '',
                role: 'founder', // Default role
                provider: account.provider,
                providerId: account.providerAccountId,
                profile: {
                  create: {
                    avatar: user.image,
                  }
                },
                preferences: {
                  create: {
                    theme: 'system',
                    language: 'en',
                    timezone: 'UTC',
                    notifications: {
                      email: true,
                      push: true,
                      marketing: false,
                    },
                    onboarding: {
                      completed: false,
                      step: 0,
                    },
                  }
                }
              },
              include: {
                profile: true,
                preferences: true,
              }
            });

            // Update user object
            user.id = newUser.id;
            user.role = newUser.role;
          } else {
            // Update existing user
            await db.user.update({
              where: { id: existingUser.id },
              data: {
                lastActivity: new Date(),
                profile: existingUser.profile ? {
                  update: {
                    avatar: user.image || existingUser.profile.avatar,
                  }
                } : {
                  create: {
                    avatar: user.image,
                  }
                }
              }
            });

            user.id = existingUser.id;
            user.role = existingUser.role;
          }
        } catch (error) {
          console.error('Google sign-in error:', error);
          return false;
        }
      }

      return true;
    },

    async redirect({ url, baseUrl }) {
      // Allows relative callback URLs
      if (url.startsWith('/')) return `${baseUrl}${url}`;
      // Allows callback URLs on the same origin
      else if (new URL(url).origin === baseUrl) return url;
      return baseUrl;
    },
  },

  pages: {
    signIn: '/auth/signin',
    signUp: '/auth/signup',
    error: '/auth/error',
  },

  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },

  jwt: {
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },

  secret: process.env.NEXTAUTH_SECRET,
};

// Role-based access control
export const hasRole = (userRole: string, requiredRole: string) => {
  const roleHierarchy = {
    admin: 4,
    investor: 3,
    partner: 2,
    founder: 1,
  };

  return roleHierarchy[userRole as keyof typeof roleHierarchy] >= 
         roleHierarchy[requiredRole as keyof typeof roleHierarchy];
};

// Permission checking middleware
export const requireAuth = (requiredRole?: string) => {
  return async (req: Request) => {
    const session = await getToken({ req });
    
    if (!session) {
      throw new Error('Authentication required');
    }

    if (requiredRole && !hasRole(session.user.role, requiredRole)) {
      throw new Error(`Insufficient permissions. Required role: ${requiredRole}`);
    }

    return session;
  };
};

// API route protection
export const withAuth = (handler: (req: Request, res: Response, session?: any) => Promise<Response>, requiredRole?: string) => {
  return async (req: Request, res: Response) => {
    try {
      const session = await requireAuth(requiredRole)(req);
      return handler(req, res, session);
    } catch (error) {
      return Response.json(
        { error: error.message },
        { status: 401 }
      );
    }
  };
};

// Client-side auth hooks
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export const useRequireAuth = (requiredRole?: string) => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'loading') return; // Still loading

    if (!session) {
      router.push('/auth/signin');
      return;
    }

    if (requiredRole && !hasRole(session.user.role, requiredRole)) {
      router.push('/unauthorized');
      return;
    }
  }, [session, status, requiredRole, router]);

  return { session, status };
};

// Custom hook for checking permissions
export const usePermissions = () => {
  const { data: session } = useSession();

  const can = (action: string, resource: string) => {
    if (!session?.user) return false;

    const permissions = {
      admin: ['*'],
      investor: ['read:portfolio', 'read:analytics', 'read:reports'],
      partner: ['read:portfolio', 'read:services', 'create:application'],
      founder: ['read:portfolio', 'read:services', 'create:application', 'update:profile'],
    };

    const userPermissions = permissions[session.user.role as keyof typeof permissions] || [];
    
    return userPermissions.includes('*') || 
               userPermissions.includes(`${action}:${resource}`);
  };

  return { can };
};

// Token helper for server-side
import { getToken } from 'next-auth/jwt';

export const getServerSession = async (req: Request) => {
  return await getToken({ req });
};