// Email Integration System for Venture Studio
// Purpose: Automated lead nurturing and communication

export interface EmailTemplate {
  id: string;
  name: string;
  subject: string;
  content: string;
  variables: string[];
  category: 'welcome' | 'nurturing' | 'application' | 'rejection' | 'acceptance';
}

export interface EmailSend {
  id: string;
  templateId: string;
  recipient: string;
  variables: Record<string, any>;
  status: 'pending' | 'sent' | 'delivered' | 'opened' | 'clicked' | 'bounced' | 'failed';
  sentAt?: string;
  deliveredAt?: string;
  openedAt?: string;
  clickedAt?: string;
  metadata: Record<string, any>;
}

// Email Service Class
export class EmailService {
  private templates: Map<string, EmailTemplate> = new Map();
  private sends: EmailSend[] = [];

  constructor() {
    this.initializeTemplates();
  }

  // Initialize default email templates
  private initializeTemplates() {
    const defaultTemplates: EmailTemplate[] = [
      {
        id: 'welcome_immediate',
        name: 'Immediate Welcome',
        subject: 'Welcome to {{studio_name}} - Your Venture Journey Starts Here!',
        content: `
Hi {{founder_name}},

Welcome to {{studio_name}}! We're thrilled to learn about your {{stage}} stage venture in the {{industry}} sector.

Based on your interests in {{interests}}, we believe you'll find great value in our community of successful founders.

What happens next:
1. We've sent you this personalized analysis of your venture
2. Our team will review your profile within 24 hours
3. You'll receive tailored recommendations and next steps

Best regards,
The {{studio_name}} Team
        `,
        variables: ['founder_name', 'studio_name', 'stage', 'industry', 'interests'],
        category: 'welcome'
      }
    ];

    defaultTemplates.forEach(template => {
      this.templates.set(template.id, template);
    });
  }

  // Send email with template
  async sendEmail(templateId: string, recipient: string, variables: Record<string, any> = {}): Promise<EmailSend> {
    const template = this.templates.get(templateId);
    if (!template) {
      throw new Error(`Template ${templateId} not found`);
    }

    // Process template variables
    const processedSubject = this.processTemplate(template.subject, variables);
    const processedContent = this.processTemplate(template.content, variables);

    const emailSend: EmailSend = {
      id: this.generateId(),
      templateId,
      recipient,
      variables,
      status: 'pending',
      metadata: {
        subject: processedSubject,
        content: processedContent,
        templateName: template.name,
        category: template.category
      }
    };

    this.sends.push(emailSend);

    try {
      await this.deliverEmail(emailSend);
      emailSend.status = 'sent';
      emailSend.sentAt = new Date().toISOString();
    } catch (error) {
      console.error('Failed to send email:', error);
      emailSend.status = 'failed';
    }

    return emailSend;
  }

  // Process template variables
  private processTemplate(template: string, variables: Record<string, any>): string {
    let processed = template;

    Object.entries(variables).forEach(([key, value]) => {
      const regex = new RegExp(`{{${key}}}`, 'g');
      processed = processed.replace(regex, String(value));
    });

    return processed;
  }

  // Deliver email (mock implementation)
  private async deliverEmail(emailSend: EmailSend): Promise<void> {
    console.log(`Sending email to ${emailSend.recipient}:`);
    console.log(`Subject: ${emailSend.metadata.subject}`);
    
    await new Promise(resolve => setTimeout(resolve, 1000));

    emailSend.status = 'delivered';
    emailSend.deliveredAt = new Date().toISOString();
  }

  private generateId(): string {
    return `email_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  getTemplate(id: string): EmailTemplate | undefined {
    return this.templates.get(id);
  }

  getEmailSends(templateId?: string): EmailSend[] {
    if (templateId) {
      return this.sends.filter(s => s.templateId === templateId);
    }
    return this.sends;
  }
}

// Create singleton instance
export const emailService = new EmailService();

// Integration with intelligent matching
export class LeadNurturingIntegration {
  private emailService: EmailService;

  constructor() {
    this.emailService = emailService;
  }

  async processNewLead(leadData: {
    email: string;
    name: string;
    stage: string;
    industry: string;
    interests: string[];
    challenges: string[];
    score: number;
  }): Promise<void> {
    await this.emailService.sendEmail('welcome_immediate', leadData.email, {
      founder_name: leadData.name,
      studio_name: 'Venture Studio',
      stage: leadData.stage,
      industry: leadData.industry,
      interests: leadData.interests.join(', ')
    });
  }
}

export const leadNurturing = new LeadNurturingIntegration();