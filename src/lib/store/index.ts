import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { devtools } from 'zustand/middleware';

// Global app state interface
interface AppState {
  // User state
  user: {
    profile: UserProfile | null;
    preferences: UserPreferences;
    session: UserSession | null;
  };
  
  // Application state
  ui: {
    theme: 'light' | 'dark' | 'system';
    sidebarOpen: boolean;
    notifications: Notification[];
    loading: Record<string, boolean>;
  };
  
  // Content state
  content: {
    portfolio: PortfolioItem[];
    services: ServiceItem[];
    testimonials: Testimonial[];
    blog: BlogPost[];
  };
  
  // Analytics state
  analytics: {
    pageViews: PageView[];
    userInteractions: UserInteraction[];
    conversions: Conversion[];
  };
}

// Type definitions
interface UserProfile {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  role: 'founder' | 'partner' | 'investor' | 'admin';
  company?: string;
  bio?: string;
  linkedIn?: string;
  website?: string;
}

interface UserPreferences {
  theme: 'light' | 'dark' | 'system';
  language: string;
  timezone: string;
  notifications: {
    email: boolean;
    push: boolean;
    marketing: boolean;
  };
  onboarding: {
    completed: boolean;
    step: number;
  };
}

interface UserSession {
  token: string;
  refreshToken: string;
  expiresAt: Date;
  lastActivity: Date;
}

interface Notification {
  id: string;
  type: 'info' | 'success' | 'warning' | 'error';
  title: string;
  message: string;
  timestamp: Date;
  read: boolean;
  action?: {
    label: string;
    url: string;
  };
}

interface PortfolioItem {
  id: string;
  name: string;
  description: string;
  category: string;
  tags: string[];
  image: string;
  website?: string;
  stats: {
    raised: string;
    founded: string;
    impact: string;
  };
  featured: boolean;
  createdAt: Date;
  updatedAt: Date;
}

interface ServiceItem {
  id: string;
  name: string;
  description: string;
  category: string;
  price: string;
  duration: string;
  features: string[];
  image: string;
  popular: boolean;
}

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
  rating: number;
  featured: boolean;
}

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  category: string;
  tags: string[];
  image: string;
  publishedAt: Date;
  readingTime: number;
}

interface PageView {
  id: string;
  path: string;
  timestamp: Date;
  duration: number;
  userAgent: string;
  referrer?: string;
}

interface UserInteraction {
  id: string;
  type: 'click' | 'scroll' | 'hover' | 'form_submit' | 'download';
  element: string;
  page: string;
  timestamp: Date;
  metadata: Record<string, any>;
}

interface Conversion {
  id: string;
  type: 'application' | 'contact' | 'newsletter' | 'demo_request';
  source: string;
  timestamp: Date;
  value?: number;
  metadata: Record<string, any>;
}

// Store actions
interface AppActions {
  // User actions
  setUser: (user: UserProfile | null) => void;
  updateUserPreferences: (preferences: Partial<UserPreferences>) => void;
  setSession: (session: UserSession | null) => void;
  
  // UI actions
  setTheme: (theme: 'light' | 'dark' | 'system') => void;
  toggleSidebar: () => void;
  setSidebarOpen: (open: boolean) => void;
  addNotification: (notification: Omit<Notification, 'id' | 'timestamp' | 'read'>) => void;
  removeNotification: (id: string) => void;
  markNotificationRead: (id: string) => void;
  setLoading: (key: string, loading: boolean) => void;
  
  // Content actions
  setPortfolio: (portfolio: PortfolioItem[]) => void;
  addPortfolioItem: (item: PortfolioItem) => void;
  updatePortfolioItem: (id: string, updates: Partial<PortfolioItem>) => void;
  removePortfolioItem: (id: string) => void;
  
  setServices: (services: ServiceItem[]) => void;
  setTestimonials: (testimonials: Testimonial[]) => void;
  setBlog: (blog: BlogPost[]) => void;
  
  // Analytics actions
  trackPageView: (pageView: Omit<PageView, 'id'>) => void;
  trackInteraction: (interaction: Omit<UserInteraction, 'id'>) => void;
  trackConversion: (conversion: Omit<Conversion, 'id'>) => void;
}

// Create store
export const useAppStore = create<AppState & AppActions>()(
  devtools(
    persist(
      (set, get) => ({
        // Initial state
        user: {
          profile: null,
          preferences: {
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
          },
          session: null,
        },
        
        ui: {
          theme: 'system',
          sidebarOpen: false,
          notifications: [],
          loading: {},
        },
        
        content: {
          portfolio: [],
          services: [],
          testimonials: [],
          blog: [],
        },
        
        analytics: {
          pageViews: [],
          userInteractions: [],
          conversions: [],
        },
        
        // Actions
        setUser: (profile) => set((state) => ({ 
          user: { ...state.user, profile } 
        })),
        
        updateUserPreferences: (preferences) => set((state) => ({
          user: {
            ...state.user,
            preferences: { ...state.user.preferences, ...preferences }
          }
        })),
        
        setSession: (session) => set((state) => ({ 
          user: { ...state.user, session } 
        })),
        
        setTheme: (theme) => set((state) => ({ 
          ui: { ...state.ui, theme } 
        })),
        
        toggleSidebar: () => set((state) => ({ 
          ui: { ...state.ui, sidebarOpen: !state.ui.sidebarOpen } 
        })),
        
        setSidebarOpen: (open) => set((state) => ({ 
          ui: { ...state.ui, sidebarOpen: open } 
        })),
        
        addNotification: (notification) => set((state) => ({
          ui: {
            ...state.ui,
            notifications: [
              {
                ...notification,
                id: crypto.randomUUID(),
                timestamp: new Date(),
                read: false,
              },
              ...state.ui.notifications,
            ]
          }
        })),
        
        removeNotification: (id) => set((state) => ({
          ui: {
            ...state.ui,
            notifications: state.ui.notifications.filter(n => n.id !== id)
          }
        })),
        
        markNotificationRead: (id) => set((state) => ({
          ui: {
            ...state.ui,
            notifications: state.ui.notifications.map(n => 
              n.id === id ? { ...n, read: true } : n
            )
          }
        })),
        
        setLoading: (key, loading) => set((state) => ({
          ui: {
            ...state.ui,
            loading: { ...state.ui.loading, [key]: loading }
          }
        })),
        
        setPortfolio: (portfolio) => set((state) => ({
          content: { ...state.content, portfolio }
        })),
        
        addPortfolioItem: (item) => set((state) => ({
          content: {
            ...state.content,
            portfolio: [...state.content.portfolio, item]
          }
        })),
        
        updatePortfolioItem: (id, updates) => set((state) => ({
          content: {
            ...state.content,
            portfolio: state.content.portfolio.map(item =>
              item.id === id ? { ...item, ...updates } : item
            )
          }
        })),
        
        removePortfolioItem: (id) => set((state) => ({
          content: {
            ...state.content,
            portfolio: state.content.portfolio.filter(item => item.id !== id)
          }
        })),
        
        setServices: (services) => set((state) => ({
          content: { ...state.content, services }
        })),
        
        setTestimonials: (testimonials) => set((state) => ({
          content: { ...state.content, testimonials }
        })),
        
        setBlog: (blog) => set((state) => ({
          content: { ...state.content, blog }
        })),
        
        trackPageView: (pageView) => set((state) => ({
          analytics: {
            ...state.analytics,
            pageViews: [
              { ...pageView, id: crypto.randomUUID() },
              ...state.analytics.pageViews,
            ]
          }
        })),
        
        trackInteraction: (interaction) => set((state) => ({
          analytics: {
            ...state.analytics,
            userInteractions: [
              { ...interaction, id: crypto.randomUUID() },
              ...state.analytics.userInteractions,
            ]
          }
        })),
        
        trackConversion: (conversion) => set((state) => ({
          analytics: {
            ...state.analytics,
            conversions: [
              { ...conversion, id: crypto.randomUUID() },
              ...state.analytics.conversions,
            ]
          }
        })),
      }),
      {
        name: 'app-store',
        storage: createJSONStorage(() => localStorage),
        partialize: (state) => ({
          user: state.user,
          ui: {
            theme: state.ui.theme,
            sidebarOpen: state.ui.sidebarOpen,
          },
        }),
      }
    )
  )
);

// Selectors for optimized re-renders
export const useUser = () => useAppStore((state) => state.user);
export const useUI = () => useAppStore((state) => state.ui);
export const useContent = () => useAppStore((state) => state.content);
export const useAnalytics = () => useAppStore((state) => state.analytics);

// Action selectors
export const useUserActions = () => useAppStore((state) => ({
  setUser: state.setUser,
  updateUserPreferences: state.updateUserPreferences,
  setSession: state.setSession,
}));

export const useUIActions = () => useAppStore((state) => ({
  setTheme: state.setTheme,
  toggleSidebar: state.toggleSidebar,
  setSidebarOpen: state.setSidebarOpen,
  addNotification: state.addNotification,
  removeNotification: state.removeNotification,
  markNotificationRead: state.markNotificationRead,
  setLoading: state.setLoading,
}));

export const useContentActions = () => useAppStore((state) => ({
  setPortfolio: state.setPortfolio,
  addPortfolioItem: state.addPortfolioItem,
  updatePortfolioItem: state.updatePortfolioItem,
  removePortfolioItem: state.removePortfolioItem,
  setServices: state.setServices,
  setTestimonials: state.setTestimonials,
  setBlog: state.setBlog,
}));

export const useAnalyticsActions = () => useAppStore((state) => ({
  trackPageView: state.trackPageView,
  trackInteraction: state.trackInteraction,
  trackConversion: state.trackConversion,
}));