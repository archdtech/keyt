import { ventureStudio, PortfolioCompany, FounderApplication, Founder } from '@/lib/venture-studio';
import { ZAI } from 'z-ai-web-dev-sdk';

// Lead Capture & Intelligence System
export interface LeadCapture {
  id: string;
  email: string;
  name: string;
  company?: string;
  role: string;
  stage: 'idea' | 'prototype' | 'mvp' | 'revenue' | 'growth';
  industry: string;
  interests: string[];
  challenges: string[];
  timeline: string;
  source: string;
  capturedAt: string;
  nurtured: boolean;
  score: number;
}

export interface FounderProfile {
  id: string;
  personalInfo: {
    name: string;
    email: string;
    linkedin?: string;
    twitter?: string;
    location: string;
  };
  professional: {
    experience: Experience[];
    education: Education[];
    skills: string[];
    industry: string;
    role: string;
  };
  venture: {
    stage: string;
    industry: string;
    concept: string;
    teamSize: number;
    funding: string;
    timeline: string;
  };
  personality: {
    workStyle: string[];
    communication: string;
    riskTolerance: string;
    learningStyle: string;
  };
  needs: {
    immediate: string[];
    longTerm: string[];
    skills: string[];
    resources: string[];
  };
  score: number;
  matchScore: number;
  recommendations: Recommendation[];
}

export interface Experience {
  company: string;
  role: string;
  duration: string;
  achievements: string[];
  skills: string[];
}

export interface Education {
  institution: string;
  degree: string;
  field: string;
  year: string;
}

export interface Recommendation {
  type: 'founder' | 'resource' | 'service' | 'opportunity';
  title: string;
  description: string;
  relevanceScore: number;
  actionItems: string[];
  resources: string[];
}

export interface SkillGap {
  category: 'technical' | 'business' | 'industry' | 'leadership';
  missing: string[];
  existing: string[];
  priority: 'high' | 'medium' | 'low';
  solutions: SkillSolution[];
}

export interface SkillSolution {
  type: 'hire' | 'learn' | 'partner' | 'outsource';
  recommendation: string;
  timeline: string;
  cost: string;
  resources: string[];
}

export interface MarketTiming {
  market: string;
  readiness: number;
  competition: 'low' | 'medium' | 'high';
  trends: string[];
  opportunities: string[];
  risks: string[];
  window: string;
  recommendation: string;
}

export interface ResourceOptimization {
  category: 'funding' | 'talent' | 'technology' | 'marketing' | 'operations';
  current: string[];
  needed: string[];
  priority: number;
  allocation: ResourceAllocation[];
  efficiency: number;
}

export interface ResourceAllocation {
  resource: string;
  amount: string;
  timeline: string;
  impact: string;
  roi: number;
}

// Intelligent Matching Engine
export class IntelligentMatchingEngine {
  private zai: ZAI;
  private leads: LeadCapture[] = [];
  private profiles: FounderProfile[] = [];
  private companies: PortfolioCompany[] = [];

  constructor() {
    this.zai = null as any; // Will be initialized
    this.initializeSystem();
  }

  private async initializeSystem() {
    try {
      this.zai = await ZAI.create();
      this.loadPortfolioData();
    } catch (error) {
      console.error('Failed to initialize matching engine:', error);
    }
  }

  private loadPortfolioData() {
    // Load portfolio companies for matching
    this.companies = ventureStudio.getFeaturedCompanies();
  }

  // Lead Capture System
  async captureLead(data: Partial<LeadCapture>): Promise<LeadCapture> {
    const lead: LeadCapture = {
      id: this.generateId(),
      email: data.email || '',
      name: data.name || '',
      company: data.company,
      role: data.role || '',
      stage: data.stage || 'idea',
      industry: data.industry || '',
      interests: data.interests || [],
      challenges: data.challenges || [],
      timeline: data.timeline || '',
      source: data.source || 'website',
      capturedAt: new Date().toISOString(),
      nurtured: false,
      score: 0,
    };

    // Score the lead
    lead.score = await this.scoreLead(lead);
    
    this.leads.push(lead);
    
    // Trigger nurturing sequence
    await this.triggerNurturingSequence(lead);
    
    return lead;
  }

  private async scoreLead(lead: LeadCapture): Promise<number> {
    let score = 0;
    
    // Basic information completeness
    if (lead.name && lead.email) score += 10;
    if (lead.company) score += 10;
    if (lead.linkedin) score += 5;
    
    // Stage scoring
    const stageScores = {
      'idea': 10,
      'prototype': 20,
      'mvp': 30,
      'revenue': 40,
      'growth': 50,
    };
    score += stageScores[lead.stage] || 0;
    
    // Industry alignment
    const targetIndustries = ['fintech', 'climate', 'digital', 'healthcare'];
    if (targetIndustries.includes(lead.industry.toLowerCase())) {
      score += 20;
    }
    
    // Interest alignment
    const studioServices = ['strategy', 'technology', 'marketing', 'fundraising'];
    const alignedInterests = lead.interests.filter(interest => 
      studioServices.some(service => interest.toLowerCase().includes(service))
    );
    score += alignedInterests.length * 5;
    
    // Timeline urgency
    if (lead.timeline.includes('immediate')) score += 15;
    if (lead.timeline.includes('months')) score += 10;
    
    return Math.min(score, 100);
  }

  private async triggerNurturingSequence(lead: LeadCapture) {
    // Create personalized nurturing sequence
    const sequence = await this.generateNurturingSequence(lead);
    
    // Send initial email
    await this.sendNurturingEmail(lead, sequence[0]);
    
    // Schedule follow-ups
    this.scheduleFollowUps(lead, sequence.slice(1));
  }

  private async generateNurturingSequence(lead: LeadCapture): Promise<any[]> {
    const prompt = `
      Generate a personalized email nurturing sequence for a venture studio lead:
      
      Lead Info:
      - Name: ${lead.name}
      - Company: ${lead.company}
      - Role: ${lead.role}
      - Stage: ${lead.stage}
      - Industry: ${lead.industry}
      - Interests: ${lead.interests.join(', ')}
      - Challenges: ${lead.challenges.join(', ')}
      - Timeline: ${lead.timeline}
      - Score: ${lead.score}
      
      Create a 3-email sequence:
      1. Immediate welcome with relevant portfolio company stories
      2. Value proposition with specific resources
      3. Call to action for application or consultation
      
      Make each email personalized, valuable, and conversion-focused.
    `;

    try {
      const response = await this.zai.chat.completions.create({
        messages: [
          {
            role: 'system',
            content: 'You are an expert venture studio marketer who creates personalized, high-converting email sequences.'
          },
          {
            role: 'user',
            content: prompt
          }
        ],
        max_tokens: 1000,
        temperature: 0.7,
      });

      return this.parseEmailSequence(response.choices[0]?.message?.content || '');
    } catch (error) {
      console.error('Failed to generate nurturing sequence:', error);
      return this.getDefaultNurturingSequence(lead);
    }
  }

  private parseEmailSequence(content: string): any[] {
    // Parse AI response into structured email sequence
    const emails = content.split('\n\n').filter(section => section.trim());
    
    return emails.map((email, index) => ({
      id: index + 1,
      subject: this.extractSubject(email),
      content: email.trim(),
      delay: index * 3, // days between emails
      type: index === 0 ? 'welcome' : index === 1 ? 'value' : 'cta'
    }));
  }

  private extractSubject(email: string): string {
    const lines = email.split('\n');
    const subjectLine = lines.find(line => 
      line.toLowerCase().includes('subject:') || 
      line.toLowerCase().includes('re:')
    );
    return subjectLine?.replace(/^(subject:|re:)/i, '').trim() || 'Your Venture Studio Journey';
  }

  private getDefaultNurturingSequence(lead: LeadCapture): any[] {
    return [
      {
        id: 1,
        subject: 'Welcome to Our Venture Studio Community',
        content: `Hi ${lead.name}, welcome! We're excited to learn about your ${lead.stage} stage venture in ${lead.industry}.`,
        delay: 0,
        type: 'welcome'
      },
      {
        id: 2,
        subject: 'How We Help Founders Like You',
        content: `Based on your interests in ${lead.interests.join(', ')}, here are some resources...`,
        delay: 3,
        type: 'value'
      },
      {
        id: 3,
        subject: 'Ready to Take the Next Step?',
        content: `Let's discuss how we can help you achieve your goals in ${lead.timeline}...`,
        delay: 6,
        type: 'cta'
      }
    ];
  }

  private async sendNurturingEmail(lead: LeadCapture, email: any) {
    // This would integrate with your email service (SendGrid, etc.)
    console.log(`Sending email to ${lead.email}:`, email);
    
    // Track email sent
    await this.trackEmailSent(lead.id, email.id);
  }

  private scheduleFollowUps(lead: LeadCapture, emails: any[]) {
    emails.forEach(email => {
      setTimeout(() => {
        this.sendNurturingEmail(lead, email);
      }, email.delay * 24 * 60 * 60 * 1000); // Convert days to milliseconds
    });
  }

  private async trackEmailSent(leadId: string, emailId: number) {
    // Track email engagement
    console.log(`Email ${emailId} sent to lead ${leadId}`);
  }

  // Founder-Company Fit Analysis
  async analyzeFounderCompanyFit(founderProfile: FounderProfile): Promise<{
    matches: Array<{
      company: PortfolioCompany;
      score: number;
      reasons: string[];
      similarities: string[];
    }>;
    insights: string[];
    recommendations: string[];
  }> {
    const matches = [];
    
    for (const company of this.companies) {
      const matchScore = await this.calculateFounderCompanyMatch(founderProfile, company);
      if (matchScore.score > 60) {
        matches.push(matchScore);
      }
    }
    
    // Sort by match score
    matches.sort((a, b) => b.score - a.score);
    
    // Generate insights
    const insights = await this.generateFitInsights(founderProfile, matches.slice(0, 3));
    
    // Create recommendations
    const recommendations = await this.generateFitRecommendations(founderProfile, matches);
    
    return {
      matches: matches.slice(0, 5), // Top 5 matches
      insights,
      recommendations
    };
  }

  private async calculateFounderCompanyMatch(
    founder: FounderProfile, 
    company: PortfolioCompany
  ): Promise<{
    company: PortfolioCompany;
    score: number;
    reasons: string[];
    similarities: string[];
  }> {
    let score = 0;
    const reasons = [];
    const similarities = [];
    
    // Industry alignment
    if (founder.professional.industry.toLowerCase() === company.category.toLowerCase()) {
      score += 25;
      reasons.push('Strong industry alignment');
      similarities.push(`Both in ${company.category} sector`);
    }
    
    // Stage alignment
    if (founder.venture.stage === company.stage) {
      score += 20;
      reasons.push('Similar development stage');
      similarities.push(`Both at ${company.stage} stage`);
    }
    
    // Team size compatibility
    const founderTeamSize = founder.venture.teamSize;
    const companyTeamSize = parseInt(company.teamSize) || 0;
    if (Math.abs(founderTeamSize - companyTeamSize) <= 5) {
      score += 15;
      reasons.push('Compatible team size');
      similarities.push('Similar team scale');
    }
    
    // Skills overlap with company needs
    const companyNeeds = company.currentNeeds;
    const founderSkills = founder.professional.skills;
    const skillOverlap = founderSkills.filter(skill => 
      companyNeeds.some(need => need.toLowerCase().includes(skill.toLowerCase()))
    );
    score += skillOverlap.length * 5;
    if (skillOverlap.length > 0) {
      reasons.push(`Relevant skills: ${skillOverlap.join(', ')}`);
      similarities.push(`Shared expertise in ${skillOverlap[0]}`);
    }
    
    return {
      company,
      score: Math.min(score, 100),
      reasons,
      similarities
    };
  }

  private async generateFitInsights(
    founder: FounderProfile, 
    matches: any[]
  ): Promise<string[]> {
    const prompt = `
      Analyze this founder profile and their top company matches to generate insights:
      
      Founder Profile:
      - Name: ${founder.personalInfo.name}
      - Industry: ${founder.professional.industry}
      - Stage: ${founder.venture.stage}
      - Skills: ${founder.professional.skills.join(', ')}
      
      Top Matches:
      ${matches.map((match, i) => `
        ${i + 1}. ${match.company.name} (Score: ${match.score})
           - Category: ${match.company.category}
           - Stage: ${match.company.stage}
           - Similarities: ${match.similarities.join(', ')}
      `).join('\n')}
      
      Generate 3-5 key insights about this founder's fit with our portfolio.
      Focus on patterns, strengths, and potential success factors.
    `;

    try {
      const response = await this.zai.chat.completions.create({
        messages: [
          {
            role: 'system',
            content: 'You are an expert venture analyst who provides deep insights about founder-company fit.'
          },
          {
            role: 'user',
            content: prompt
          }
        ],
        max_tokens: 500,
        temperature: 0.7,
      });

      return this.parseInsights(response.choices[0]?.message?.content || '');
    } catch (error) {
      console.error('Failed to generate insights:', error);
      return [
        'Strong industry alignment with portfolio companies',
        'Similar career progression to successful founders',
        'Complementary skill set for current market opportunities'
      ];
    }
  }

  private parseInsights(content: string): string[] {
    return content
      .split('\n')
      .filter(line => line.trim() && !line.toLowerCase().includes('insight'))
      .map(line => line.replace(/^\d+\.\s*/, '').trim())
      .filter(line => line.length > 10);
  }

  private async generateFitRecommendations(
    founder: FounderProfile, 
    matches: any[]
  ): Promise<string[]> {
    const prompt = `
      Based on this founder's profile and their company matches, provide actionable recommendations:
      
      Founder: ${founder.personalInfo.name}
      Stage: ${founder.venture.stage}
      Industry: ${founder.professional.industry}
      Skills: ${founder.professional.skills.join(', ')}
      
      Top Company Matches: ${matches.map(m => m.company.name).join(', ')}
      
      Provide 3-5 specific recommendations for:
      1. Next steps in their journey
      2. Skills to develop
      3. People to connect with
      4. Resources to explore
      5. How to leverage similar success stories
    `;

    try {
      const response = await this.zai.chat.completions.create({
        messages: [
          {
            role: 'system',
            content: 'You are a venture studio advisor who provides actionable recommendations to founders.'
          },
          {
            role: 'user',
            content: prompt
          }
        ],
        max_tokens: 500,
        temperature: 0.7,
      });

      return this.parseRecommendations(response.choices[0]?.message?.content || '');
    } catch (error) {
      console.error('Failed to generate recommendations:', error);
      return [
        'Connect with founders from similar companies',
        'Focus on developing key skills identified in successful portfolio companies',
        'Apply to our venture studio program for personalized support'
      ];
    }
  }

  private parseRecommendations(content: string): string[] {
    return content
      .split('\n')
      .filter(line => line.trim() && !line.toLowerCase().includes('recommendation'))
      .map(line => line.replace(/^\d+\.\s*/, '').trim())
      .filter(line => line.length > 10);
  }

  // Utility methods
  private generateId(): string {
    return `lead_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  // Public API methods
  async processLead(email: string, additionalData?: any): Promise<{
    lead: LeadCapture;
    profile: FounderProfile;
    analysis: {
      founderCompanyFit: any;
      skillGaps: SkillGap[];
      marketTiming: MarketTiming;
      resourceOptimization: ResourceOptimization[];
    };
  }> {
    // Capture lead
    const lead = await this.captureLead({
      email,
      ...additionalData
    });
    
    // Create detailed profile
    const profile = await this.createFounderProfile(lead);
    
    // Run all analyses
    const analysis = {
      founderCompanyFit: await this.analyzeFounderCompanyFit(profile),
      skillGaps: await this.analyzeSkillGaps(profile),
      marketTiming: await this.analyzeMarketTiming(profile),
      resourceOptimization: await this.optimizeResources(profile)
    };
    
    return { lead, profile, analysis };
  }

  private async createFounderProfile(lead: LeadCapture): Promise<FounderProfile> {
    // Enrich lead data with additional research
    const profile: FounderProfile = {
      id: this.generateId(),
      personalInfo: {
        name: lead.name,
        email: lead.email,
        location: 'TBD', // Would be enriched via lookup
      },
      professional: {
        experience: [],
        education: [],
        skills: [],
        industry: lead.industry,
        role: lead.role,
      },
      venture: {
        stage: lead.stage,
        industry: lead.industry,
        concept: lead.interests[0] || 'TBD',
        teamSize: 1,
        funding: 'TBD',
        timeline: lead.timeline,
      },
      personality: {
        workStyle: [],
        communication: 'TBD',
        riskTolerance: 'TBD',
        learningStyle: 'TBD',
      },
      needs: {
        immediate: lead.challenges,
        longTerm: [],
        skills: [],
        resources: [],
      },
      score: lead.score,
      matchScore: 0,
      recommendations: [],
    };
    
    return profile;
  }

  // Simplified versions of other methods for brevity
  private async analyzeSkillGaps(profile: FounderProfile): Promise<SkillGap[]> {
    return [
      {
        category: 'technical',
        missing: ['React', 'Node.js'],
        existing: ['JavaScript'],
        priority: 'high',
        solutions: [
          {
            type: 'learn',
            recommendation: 'Take online courses',
            timeline: '2-3 months',
            cost: '$500-2000',
            resources: ['Coursera', 'Udemy']
          }
        ]
      }
    ];
  }

  private async analyzeMarketTiming(profile: FounderProfile): Promise<MarketTiming> {
    return {
      market: profile.professional.industry,
      readiness: 75,
      competition: 'medium',
      trends: ['Digital transformation', 'Remote work'],
      opportunities: ['Market gap', 'Technology advancement'],
      risks: ['Competition', 'Regulation'],
      window: '12-18 months',
      recommendation: 'Good timing with strong potential'
    };
  }

  private async optimizeResources(profile: FounderProfile): Promise<ResourceOptimization[]> {
    return [
      {
        category: 'funding',
        current: ['Bootstrapped'],
        needed: ['Seed funding', 'Angel investors'],
        priority: 90,
        allocation: [
          {
            resource: 'Seed funding',
            amount: '$500K-1M',
            timeline: '6 months',
            impact: 'Product development and hiring',
            roi: 85
          }
        ],
        efficiency: 60
      }
    ];
  }
}

// Create singleton instance
export const intelligentMatching = new IntelligentMatchingEngine();