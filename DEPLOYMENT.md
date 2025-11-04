# 🚀 Deployment Guide

This guide covers deploying the Keyt Venture Studio platform to various hosting environments.

## 📋 Prerequisites

- Node.js 18+ 
- npm or yarn
- Git
- Environment variables configured

## 🔧 Environment Setup

### 1. Clone the Repository
```bash
git clone https://github.com/archdtech/keyt.git
cd keyt
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Environment Variables
Create a `.env.local` file:
```env
DATABASE_URL="file:./dev.db"
NEXTAUTH_URL="https://yourdomain.com"
NEXTAUTH_SECRET="your-super-secret-key-here"
```

### 4. Database Setup
```bash
npm run db:push
npm run db:generate
```

### 5. Build and Test
```bash
npm run build
npm run start
```

## 🌐 Deployment Options

### 1. Vercel (Recommended)

#### Automatic Deployment
1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect it's a Next.js app
3. Configure environment variables in Vercel dashboard
4. Deploy!

#### Manual Deployment
```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel --prod
```

#### Environment Variables in Vercel
- `DATABASE_URL` - Use Vercel Postgres or external database
- `NEXTAUTH_URL` - Your Vercel domain
- `NEXTAUTH_SECRET` - Generate a secure secret

### 2. Netlify

#### Build Settings
```bash
# Build command: npm run build
# Publish directory: .next
# Node version: 18
```

#### Redirects
Create `netlify.toml`:
```toml
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### 3. Docker Deployment

#### Dockerfile
```dockerfile
FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm ci

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NEXT_TELEMETRY_DISABLED 1

RUN npm run build

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public

# Set the correct permission for prerender cache
RUN mkdir .next
RUN chown nextjs:nodejs .next

# Automatically leverage output traces to reduce image size
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

CMD ["node", "server.js"]
```

#### Build and Run
```bash
# Build image
docker build -t keymaster-venture-studio .

# Run container
docker run -p 3000:3000 keymaster-venture-studio
```

### 4. Traditional VPS/Cloud Server

#### Using PM2
```bash
# Install PM2 globally
npm install -g pm2

# Build the application
npm run build

# Start with PM2
pm2 start npm --name "keymaster" -- start

# Save PM2 configuration
pm2 save
pm2 startup
```

#### Nginx Configuration
```nginx
server {
    listen 80;
    server_name yourdomain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

### 5. Railway

#### Deploy with Railway CLI
```bash
# Install Railway CLI
npm install -g @railway/cli

# Login
railway login

# Initialize project
railway init

# Deploy
railway up
```

#### Environment Variables in Railway
Configure in Railway dashboard:
- `DATABASE_URL` - Railway provides PostgreSQL
- `NEXTAUTH_URL` - Your Railway domain
- `NEXTAUTH_SECRET` - Generate secure secret

## 🔧 Production Configuration

### Next.js Configuration
Update `next.config.ts` for production:
```typescript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  experimental: {
    serverComponentsExternalPackages: ['@prisma/client'],
  },
  images: {
    domains: ['yourdomain.com'],
  },
}

module.exports = nextConfig
```

### Package.json Scripts
Ensure these scripts are in `package.json`:
```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "db:push": "prisma db push",
    "db:generate": "prisma generate"
  }
}
```

## 🗄️ Database Setup

### Production Database

#### PostgreSQL (Recommended)
```env
DATABASE_URL="postgresql://username:password@host:port/database"
```

#### MySQL
```env
DATABASE_URL="mysql://username:password@host:port/database"
```

#### Prisma Setup
```bash
# Generate Prisma client
npm run db:generate

# Push schema to production database
npm run db:push

# (Optional) Seed database
npm run db:seed
```

## 🔒 Security Considerations

### Environment Variables
- Never commit `.env` files
- Use strong, unique secrets
- Rotate secrets regularly
- Use different secrets for development/production

### Next.js Security
```typescript
// next.config.ts
const nextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ]
  },
}
```

### HTTPS
- Always use HTTPS in production
- Configure SSL certificates
- Redirect HTTP to HTTPS

## 📊 Monitoring and Analytics

### Vercel Analytics
Built-in analytics for Vercel deployments.

### Custom Analytics
```typescript
// lib/analytics.ts
export const trackEvent = (eventName: string, properties?: any) => {
  if (typeof window !== 'undefined') {
    // Your analytics implementation
    console.log('Event:', eventName, properties)
  }
}
```

### Error Tracking
Consider integrating:
- Sentry for error tracking
- LogRocket for session replay
- Custom logging solutions

## 🚀 Performance Optimization

### Build Optimization
```typescript
// next.config.ts
const nextConfig = {
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  swcMinify: true,
}
```

### Caching
- Implement proper caching strategies
- Use CDN for static assets
- Optimize images and fonts

## 🔄 CI/CD Pipeline

### GitHub Actions Example
```yaml
name: Deploy to Production

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v2
    
    - name: Setup Node.js
      uses: actions/setup-node@v2
      with:
        node-version: '18'
        
    - name: Install dependencies
      run: npm ci
      
    - name: Run tests
      run: npm test
      
    - name: Build
      run: npm run build
      
    - name: Deploy
      run: # Your deployment command
```

## 🎯 Post-Deployment Checklist

### ✅ Technical
- [ ] Application builds successfully
- [ ] All pages load without errors
- [ ] Database connection working
- [ ] Environment variables configured
- [ ] SSL certificate installed
- [ ] Custom domain configured

### ✅ Content
- [ ] All navigation links working
- [ ] Images loading properly
- [ ] Forms submitting correctly
- [ ] Contact forms functional
- [ ] SEO meta tags present

### ✅ Performance
- [ ] Page load times under 3 seconds
- [ ] Mobile responsiveness verified
- [ ] Core Web Vitals passing
- [ ] No console errors

### ✅ Security
- [ ] HTTPS enforced
- [ ] Security headers configured
- [ ] Environment variables secure
- [ ] Authentication working

## 🆘 Troubleshooting

### Common Issues

#### Build Errors
```bash
# Clear Next.js cache
rm -rf .next

# Clear node modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

#### Database Issues
```bash
# Reset database
npm run db:reset

# Regenerate Prisma client
npm run db:generate
```

#### Deployment Issues
- Check environment variables
- Verify build logs
- Ensure Node.js version compatibility
- Check database connectivity

## 📞 Support

For deployment issues:
1. Check this guide first
2. Review error logs
3. Check GitHub Issues
4. Contact: founders@keymaster.vc

---

**Last Updated**: November 3, 2024
**Version**: 1.0.0