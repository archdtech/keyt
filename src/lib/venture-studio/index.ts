// Venture Studio Core System
// Purpose: Showcase portfolio companies and attract top-tier founders

export interface PortfolioCompany {
  id: string;
  name: string;
  tagline: string;
  description: string;
  category: 'fintech' | 'climate' | 'digital' | 'healthcare' | 'enterprise';
  stage: 'seed' | 'series-a' | 'series-b' | 'growth';
  founded: string;
  location: string;
  website: string;
  // Visual assets
  heroImage: string;
  logo: string;
  gallery: string[];
  // Team & leadership
  founders: Founder[];
  teamSize: string;
  keyHires: string[];
  // Metrics & traction
  funding: {
    total: string;
    rounds: FundingRound[];
    investors: string[];
  };
  traction: {
    users?: string;
    revenue?: string;
    growth?: string;
    keyMetrics: Record<string, string>;
  };
  // Studio involvement
  studioSupport: {
    equity: string;
    supportAreas: string[];
    teamMembers: string[];
    boardSeats: number;
  };
  // Market & opportunity
  market: {
    size: string;
    category: string;
    problem: string;
    solution: string;
  };
  // Status & timeline
  status: 'active' | 'acquired' | 'ipo' | 'closed';
  milestones: Milestone[];
  nextMilestones: string[];
  // Application process
  currentNeeds: string[];
  hiringRoles: string[];
  partnershipOpportunities: string[];
}

export interface Founder {
  name: string;
  role: string;
  bio: string;
  photo: string;
  linkedin?: string;
  twitter?: string;
  previousCompanies: string[];
  education: string[];
}

export interface FundingRound {
  type: 'seed' | 'series-a' | 'series-b' | 'series-c' | 'strategic';
  amount: string;
  date: string;
  lead: string;
  investors: string[];
}

export interface Milestone {
  date: string;
  title: string;
  description: string;
  impact: string;
}

// Venture Studio Services
export interface StudioService {
  id: string;
  name: string;
  category: 'strategy' | 'technology' | 'marketing' | 'operations' | 'fundraising';
  description: string;
  duration: string;
  deliverables: string[];
  caseStudies: string[];
  pricing: {
    model: 'equity' | 'retainer' | 'project' | 'success-based';
    range: string;
  };
  idealFor: string[];
}

// Application & Evaluation System
export interface FounderApplication {
  id: string;
  personalInfo: {
    name: string;
    email: string;
    phone: string;
    location: string;
    linkedin: string;
    website?: string;
  };
  background: {
    experience: string[];
    education: string[];
    achievements: string[];
    previousVentures: string[];
  };
  idea: {
    concept: string;
    problem: string;
    solution: string;
    market: string;
    differentiation: string;
    stage: 'idea' | 'prototype' | 'mvp' | 'revenue' | 'growth';
  };
  team: {
    cofounders: number;
    teamSize: number;
    keySkills: string[];
    gaps: string[];
  };
  funding: {
    amount: string;
    use: string[];
    timeline: string;
    runway: string;
  };
  studioFit: {
    whyStudio: string;
    supportNeeded: string[];
    timeline: string;
    commitment: string;
  };
  status: 'submitted' | 'review' | 'interview' | 'due-diligence' | 'accepted' | 'rejected';
  submittedAt: string;
  reviewedAt?: string;
  reviewer?: string;
  feedback?: string;
}

// Evaluation Criteria
export interface EvaluationCriteria {
  team: {
    weight: number;
    factors: string[];
    score: number;
    notes: string;
  };
  market: {
    weight: number;
    factors: string[];
    score: number;
    notes: string;
  };
  product: {
    weight: number;
    factors: string[];
    score: number;
    notes: string;
  };
  traction: {
    weight: number;
    factors: string[];
    score: number;
    notes: string;
  };
  fit: {
    weight: number;
    factors: string[];
    score: number;
    notes: string;
  };
  totalScore: number;
  recommendation: 'strong-pass' | 'pass' | 'maybe' | 'no';
}

// Core System Class
export class VentureStudioSystem {
  private companies: PortfolioCompany[] = [];
  private services: StudioService[] = [];
  private applications: FounderApplication[] = [];

  // Portfolio Management
  addCompany(company: PortfolioCompany) {
    this.companies.push(company);
  }

  getCompaniesByCategory(category: string): PortfolioCompany[] {
    return this.companies.filter(c => c.category === category);
  }

  getCompaniesByStage(stage: string): PortfolioCompany[] {
    return this.companies.filter(c => c.stage === stage);
  }

  getFeaturedCompanies(): PortfolioCompany[] {
    return this.companies.filter(c => c.status === 'active' && c.funding.total !== '');
  }

  // Application Processing
  submitApplication(application: FounderApplication) {
    application.status = 'submitted';
    application.submittedAt = new Date().toISOString();
    this.applications.push(application);
    
    // Trigger evaluation process
    this.evaluateApplication(application);
  }

  private evaluateApplication(application: FounderApplication) {
    // AI-powered evaluation logic
    const evaluation = this.evaluateAgainstCriteria(application);
    
    // Update application status based on score
    if (evaluation.totalScore >= 80) {
      application.status = 'interview';
    } else if (evaluation.totalScore >= 60) {
      application.status = 'review';
    } else {
      application.status = 'rejected';
    }
  }

  private evaluateAgainstCriteria(application: FounderApplication): EvaluationCriteria {
    // Scoring algorithm based on venture studio criteria
    const teamScore = this.scoreTeam(application);
    const marketScore = this.scoreMarket(application);
    const productScore = this.scoreProduct(application);
    const tractionScore = this.scoreTraction(application);
    const fitScore = this.scoreStudioFit(application);

    const totalScore = (teamScore + marketScore + productScore + tractionScore + fitScore) / 5;

    return {
      team: { weight: 30, factors: [], score: teamScore, notes: '' },
      market: { weight: 25, factors: [], score: marketScore, notes: '' },
      product: { weight: 25, factors: [], score: productScore, notes: '' },
      traction: { weight: 15, factors: [], score: tractionScore, notes: '' },
      fit: { weight: 5, factors: [], score: fitScore, notes: '' },
      totalScore,
      recommendation: this.getRecommendation(totalScore)
    };
  }

  private scoreTeam(application: FounderApplication): number {
    // Team scoring logic
    let score = 0;
    
    // Founder experience
    if (application.background.experience.length >= 3) score += 20;
    if (application.background.previousVentures.length > 0) score += 15;
    if (application.background.achievements.length >= 2) score += 10;
    
    // Team composition
    if (application.team.cofounders >= 1) score += 15;
    if (application.team.keySkills.length >= 4) score += 10;
    
    // Commitment
    if (application.studioFit.commitment === 'full-time') score += 20;
    if (application.studioFit.commitment === 'part-time') score += 10;
    
    return Math.min(score, 100);
  }

  private scoreMarket(application: FounderApplication): number {
    // Market scoring logic
    let score = 0;
    
    // Market size
    if (application.idea.market.includes('billion')) score += 25;
    if (application.idea.market.includes('million')) score += 15;
    
    // Problem-solution fit
    if (application.idea.problem.length > 100) score += 15;
    if (application.idea.solution.length > 100) score += 15;
    
    // Differentiation
    if (application.idea.differentiation.length > 50) score += 20;
    if (application.idea.differentiation.includes('unique')) score += 10;
    
    return Math.min(score, 100);
  }

  private scoreProduct(application: FounderApplication): number {
    // Product scoring logic
    let score = 0;
    
    // Stage
    if (application.idea.stage === 'revenue') score += 30;
    if (application.idea.stage === 'mvp') score += 20;
    if (application.idea.stage === 'prototype') score += 10;
    
    // Concept clarity
    if (application.idea.concept.length > 50) score += 20;
    if (application.idea.concept.includes('innovative')) score += 10;
    
    return Math.min(score, 100);
  }

  private scoreTraction(application: FounderApplication): number {
    // Traction scoring logic
    let score = 0;
    
    // Stage-based traction
    if (application.idea.stage === 'revenue') score += 40;
    if (application.idea.stage === 'mvp') score += 25;
    if (application.idea.stage === 'prototype') score += 15;
    
    // Team progress
    if (application.team.teamSize > 2) score += 20;
    if (application.team.keySkills.length > 3) score += 15;
    
    return Math.min(score, 100);
  }

  private scoreStudioFit(application: FounderApplication): number {
    // Studio fit scoring logic
    let score = 0;
    
    // Support needs alignment
    if (application.studioFit.supportNeeded.length >= 2) score += 25;
    if (application.studioFit.whyStudio.length > 100) score += 25;
    
    // Timeline alignment
    if (application.studioFit.timeline.includes('immediate')) score += 25;
    if (application.studioFit.timeline.includes('months')) score += 15;
    
    return Math.min(score, 100);
  }

  private getRecommendation(score: number): 'strong-pass' | 'pass' | 'maybe' | 'no' {
    if (score >= 85) return 'strong-pass';
    if (score >= 70) return 'pass';
    if (score >= 55) return 'maybe';
    return 'no';
  }

  // Search & Discovery
  searchCompanies(query: string): PortfolioCompany[] {
    const searchTerm = query.toLowerCase();
    return this.companies.filter(company => 
      company.name.toLowerCase().includes(searchTerm) ||
      company.description.toLowerCase().includes(searchTerm) ||
      company.category.toLowerCase().includes(searchTerm) ||
      company.market.category.toLowerCase().includes(searchTerm)
    );
  }

  getSimilarCompanies(companyId: string): PortfolioCompany[] {
    const company = this.companies.find(c => c.id === companyId);
    if (!company) return [];

    return this.companies.filter(c => 
      c.id !== companyId && 
      (c.category === company.category || c.stage === company.stage)
    ).slice(0, 3);
  }
}

// Create singleton instance
export const ventureStudio = new VentureStudioSystem();