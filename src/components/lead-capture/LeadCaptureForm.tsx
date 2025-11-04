'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { intelligentMatching } from '@/lib/intelligent-matching';
import { useToast } from '@/hooks/use-toast';
import { Mail, Building2, Users, TrendingUp, Calendar, Target, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';

interface LeadCaptureFormProps {
  source?: string;
  onSuccess?: (result: any) => void;
  variant?: 'default' | 'compact' | 'detailed';
  showAnalysis?: boolean;
}

const industries = [
  'Fintech',
  'Climate Tech', 
  'Digital Solutions',
  'Healthcare',
  'Enterprise SaaS',
  'E-commerce',
  'Education',
  'Other'
];

const stages = [
  { value: 'idea', label: 'Idea Stage', description: 'Just the concept, no product yet' },
  { value: 'prototype', label: 'Prototype', description: 'Working prototype or MVP' },
  { value: 'mvp', label: 'MVP Live', description: 'Product in market with early users' },
  { value: 'revenue', label: 'Revenue Generating', description: 'Paying customers and traction' },
  { value: 'growth', label: 'Growth Stage', description: 'Scaling with proven product-market fit' }
];

const interests = [
  'Strategy & Planning',
  'Technology Development',
  'Marketing & Growth',
  'Fundraising & Finance',
  'Team Building',
  'Operations & Scale',
  'Market Entry',
  'Product Development'
];

const challenges = [
  'Finding product-market fit',
  'Building the right team',
  'Securing funding',
  'Scaling operations',
  'Marketing & customer acquisition',
  'Technology decisions',
  'Competitive differentiation',
  'Regulatory compliance'
];

export const LeadCaptureForm: React.FC<LeadCaptureFormProps> = ({
  source = 'website',
  onSuccess,
  variant = 'default',
  showAnalysis = true
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    stage: '',
    industry: '',
    interests: [] as string[],
    challenges: [] as string[],
    timeline: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [analysis, setAnalysis] = useState<any>(null);
  const { toast } = useToast();

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleInterestToggle = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  const handleChallengeToggle = (challenge: string) => {
    setFormData(prev => ({
      ...prev,
      challenges: prev.challenges.includes(challenge)
        ? prev.challenges.filter(c => c !== challenge)
        : [...prev.challenges, challenge]
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Validate required fields
      if (!formData.name || !formData.email || !formData.stage || !formData.industry) {
        toast({
          title: 'Missing Information',
          description: 'Please fill in all required fields.',
          variant: 'destructive'
        });
        setIsSubmitting(false);
        return;
      }

      // Process lead through intelligent matching
      const result = await intelligentMatching.processLead(formData.email, {
        ...formData,
        source,
        linkedin: '',
        twitter: '',
      });

      setAnalysis(result.analysis);
      setSubmitted(true);

      toast({
        title: 'Welcome! 🎉',
        description: 'Your personalized analysis is ready. Check your email for next steps.',
      });

      onSuccess?.(result);

    } catch (error) {
      console.error('Lead capture error:', error);
      toast({
        title: 'Something went wrong',
        description: 'Please try again or contact us directly.',
        variant: 'destructive'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted && analysis) {
    return <AnalysisResult analysis={analysis} formData={formData} />;
  }

  if (variant === 'compact') {
    return (
      <Card className="w-full max-w-md mx-auto">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold">Get Started</CardTitle>
          <CardDescription>
            Join our venture studio community
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name *</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                placeholder="Your name"
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                placeholder="your@email.com"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="stage">Current Stage *</Label>
              <Select value={formData.stage} onValueChange={(value) => handleInputChange('stage', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select your stage" />
                </SelectTrigger>
                <SelectContent>
                  {stages.map(stage => (
                    <SelectItem key={stage.value} value={stage.value}>
                      {stage.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? 'Processing...' : 'Get Free Analysis'}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </form>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader className="text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full">
              <Sparkles className="h-8 w-8 text-white" />
            </div>
          </div>
          <CardTitle className="text-3xl font-bold mb-2">
            Get Your Personalized Venture Analysis
          </CardTitle>
          <CardDescription className="text-lg">
            Discover how our venture studio can help you succeed with AI-powered insights
          </CardDescription>
        </motion.div>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Basic Information */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  Name *
                </Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  placeholder="Your full name"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email" className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  Email *
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  placeholder="your@email.com"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="company" className="flex items-center gap-2">
                  <Building2 className="h-4 w-4" />
                  Company Name
                </Label>
                <Input
                  id="company"
                  value={formData.company}
                  onChange={(e) => handleInputChange('company', e.target.value)}
                  placeholder="Your company (if applicable)"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="role">Your Role</Label>
                <Input
                  id="role"
                  value={formData.role}
                  onChange={(e) => handleInputChange('role', e.target.value)}
                  placeholder="CEO, Founder, CTO, etc."
                />
              </div>
            </div>
          </motion.div>

          {/* Venture Information */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="stage" className="flex items-center gap-2">
                  <TrendingUp className="h-4 w-4" />
                  Current Stage *
                </Label>
                <Select value={formData.stage} onValueChange={(value) => handleInputChange('stage', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your current stage" />
                  </SelectTrigger>
                  <SelectContent>
                    {stages.map(stage => (
                      <SelectItem key={stage.value} value={stage.value}>
                        <div>
                          <div className="font-medium">{stage.label}</div>
                          <div className="text-sm text-muted-foreground">{stage.description}</div>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="industry">Industry *</Label>
                <Select value={formData.industry} onValueChange={(value) => handleInputChange('industry', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your industry" />
                  </SelectTrigger>
                  <SelectContent>
                    {industries.map(industry => (
                      <SelectItem key={industry} value={industry.toLowerCase()}>
                        {industry}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="timeline" className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                Timeline for Getting Help
              </Label>
              <Select value={formData.timeline} onValueChange={(value) => handleInputChange('timeline', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="When are you looking to get started?" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="immediate">Immediately</SelectItem>
                  <SelectItem value="1-3 months">1-3 months</SelectItem>
                  <SelectItem value="3-6 months">3-6 months</SelectItem>
                  <SelectItem value="6+ months">6+ months</SelectItem>
                  <SelectItem value="just-exploring">Just exploring options</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </motion.div>

          {/* Interests */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="space-y-4"
          >
            <Label className="text-base font-medium">Areas of Interest</Label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {interests.map(interest => (
                <div key={interest} className="flex items-center space-x-2">
                  <Checkbox
                    id={interest}
                    checked={formData.interests.includes(interest)}
                    onCheckedChange={() => handleInterestToggle(interest)}
                  />
                  <Label htmlFor={interest} className="text-sm font-normal">
                    {interest}
                  </Label>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Challenges */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="space-y-4"
          >
            <Label className="text-base font-medium">Current Challenges</Label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {challenges.map(challenge => (
                <div key={challenge} className="flex items-center space-x-2">
                  <Checkbox
                    id={challenge}
                    checked={formData.challenges.includes(challenge)}
                    onCheckedChange={() => handleChallengeToggle(challenge)}
                  />
                  <Label htmlFor={challenge} className="text-sm font-normal">
                    {challenge}
                  </Label>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Submit Button */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="pt-4"
          >
            <Button
              type="submit"
              size="lg"
              className="w-full text-lg py-6"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                  Analyzing Your Venture...
                </>
              ) : (
                <>
                  <Target className="mr-2 h-5 w-5" />
                  Get Your Free Analysis
                  <ArrowRight className="ml-2 h-5 w-5" />
                </>
              )}
            </Button>
            
            <p className="text-center text-sm text-muted-foreground mt-4">
              Get instant AI-powered analysis and personalized recommendations
            </p>
          </motion.div>
        </form>
      </CardContent>
    </Card>
  );
};

// Analysis Result Component
const AnalysisResult: React.FC<{ analysis: any; formData: any }> = ({ analysis, formData }) => {
  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader className="text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-green-100 rounded-full">
              <CheckCircle2 className="h-8 w-8 text-green-600" />
            </div>
          </div>
          <CardTitle className="text-3xl font-bold mb-2">
            Your Personalized Analysis is Ready!
          </CardTitle>
          <CardDescription className="text-lg">
            Hi {formData.name}, here are your insights and recommendations
          </CardDescription>
        </motion.div>
      </CardHeader>

      <CardContent className="space-y-8">
        {/* Founder-Company Fit */}
        {analysis.founderCompanyFit && (
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-semibold flex items-center gap-2">
              <Users className="h-5 w-5" />
              Founder-Company Fit Analysis
            </h3>
            
            {analysis.founderCompanyFit.matches.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {analysis.founderCompanyFit.matches.slice(0, 3).map((match: any, index: number) => (
                  <Card key={index} className="border-l-4 border-l-purple-500">
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold">{match.company.name}</h4>
                        <Badge variant="secondary">{match.score}% match</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">
                        {match.company.category} • {match.company.stage}
                      </p>
                      <div className="space-y-1">
                        {match.reasons.slice(0, 2).map((reason: string, i: number) => (
                          <p key={i} className="text-xs text-green-600">✓ {reason}</p>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}

            {analysis.founderCompanyFit.insights.length > 0 && (
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-medium mb-2">Key Insights:</h4>
                <ul className="space-y-1">
                  {analysis.founderCompanyFit.insights.map((insight: string, index: number) => (
                    <li key={index} className="text-sm">• {insight}</li>
                  ))}
                </ul>
              </div>
            )}
          </motion.div>
        )}

        {/* Call to Action */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-1 rounded-lg">
            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Ready to Take the Next Step?</h3>
              <p className="text-muted-foreground mb-4">
                Schedule a free consultation to discuss how we can help you succeed
              </p>
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600">
                Schedule Free Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </motion.div>
      </CardContent>
    </Card>
  );
};