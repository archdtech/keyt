import { z } from 'zod';

// API response schemas
const APIResponseSchema = z.object({
  success: z.boolean(),
  data: z.any(),
  message: z.string().optional(),
  error: z.string().optional(),
});

type APIResponse<T = any> = z.infer<typeof APIResponseSchema> & {
  data?: T;
};

// API client class
class APIClient {
  private baseURL: string;
  private defaultHeaders: Record<string, string>;

  constructor(baseURL: string = '/api') {
    this.baseURL = baseURL;
    this.defaultHeaders = {
      'Content-Type': 'application/json',
    };
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<APIResponse<T>> {
    const url = `${this.baseURL}${endpoint}`;
    
    const config: RequestInit = {
      ...options,
      headers: {
        ...this.defaultHeaders,
        ...options.headers,
      },
    };

    try {
      const response = await fetch(url, config);
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || `HTTP error! status: ${response.status}`);
      }
      
      return APIResponseSchema.parse(data);
    } catch (error) {
      console.error('API request failed:', error);
      throw error;
    }
  }

  // Portfolio API methods
  async getPortfolio(): Promise<APIResponse<PortfolioItem[]>> {
    return this.request<PortfolioItem[]>('/portfolio');
  }

  async getPortfolioItem(id: string): Promise<APIResponse<PortfolioItem>> {
    return this.request<PortfolioItem>(`/portfolio/${id}`);
  }

  async createPortfolioItem(item: Omit<PortfolioItem, 'id' | 'createdAt' | 'updatedAt'>): Promise<APIResponse<PortfolioItem>> {
    return this.request<PortfolioItem>('/portfolio', {
      method: 'POST',
      body: JSON.stringify(item),
    });
  }

  async updatePortfolioItem(id: string, updates: Partial<PortfolioItem>): Promise<APIResponse<PortfolioItem>> {
    return this.request<PortfolioItem>(`/portfolio/${id}`, {
      method: 'PUT',
      body: JSON.stringify(updates),
    });
  }

  async deletePortfolioItem(id: string): Promise<APIResponse<void>> {
    return this.request<void>(`/portfolio/${id}`, {
      method: 'DELETE',
    });
  }

  // Services API methods
  async getServices(): Promise<APIResponse<ServiceItem[]>> {
    return this.request<ServiceItem[]>('/services');
  }

  async getService(id: string): Promise<APIResponse<ServiceItem>> {
    return this.request<ServiceItem>(`/services/${id}`);
  }

  // Testimonials API methods
  async getTestimonials(): Promise<APIResponse<Testimonial[]>> {
    return this.request<Testimonial[]>('/testimonials');
  }

  // Blog API methods
  async getBlogPosts(): Promise<APIResponse<BlogPost[]>> {
    return this.request<BlogPost[]>('/blog');
  }

  async getBlogPost(slug: string): Promise<APIResponse<BlogPost>> {
    return this.request<BlogPost>(`/blog/${slug}`);
  }

  // User API methods
  async getUserProfile(): Promise<APIResponse<UserProfile>> {
    return this.request<UserProfile>('/user/profile');
  }

  async updateUserProfile(updates: Partial<UserProfile>): Promise<APIResponse<UserProfile>> {
    return this.request<UserProfile>('/user/profile', {
      method: 'PUT',
      body: JSON.stringify(updates),
    });
  }

  // Analytics API methods
  async trackEvent(event: {
    type: string;
    data: Record<string, any>;
  }): Promise<APIResponse<void>> {
    return this.request<void>('/analytics/track', {
      method: 'POST',
      body: JSON.stringify(event),
    });
  }

  async getAnalytics(filters?: {
    startDate?: Date;
    endDate?: Date;
    event?: string;
  }): Promise<APIResponse<AnalyticsData>> {
    const params = new URLSearchParams();
    if (filters?.startDate) params.append('startDate', filters.startDate.toISOString());
    if (filters?.endDate) params.append('endDate', filters.endDate.toISOString());
    if (filters?.event) params.append('event', filters.event);
    
    return this.request<AnalyticsData>(`/analytics?${params}`);
  }
}

// Create singleton instance
export const apiClient = new APIClient();

// Type definitions (reused from store)
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

interface AnalyticsData {
  pageViews: number;
  uniqueVisitors: number;
  conversions: number;
  topPages: Array<{
    path: string;
    views: number;
  }>;
  events: Array<{
    type: string;
    count: number;
  }>;
}