"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { 
  Users, 
  Brain, 
  Target, 
  CheckCircle, 
  AlertCircle,
  Star,
  TrendingUp,
  ArrowRight
} from 'lucide-react';

interface FormData {
  founderName: string;
  email: string;
  companyName: string;
  description: string;
  stage: string;
  industry: string;
}

interface AnalysisResult {
  score: number;
  strengths: string[];
  recommendations: string[];
  marketFit: string;
  nextSteps: string[];
}

export default function LeadCaptureDemo() {
  const [formData, setFormData] = useState<FormData>({
    founderName: '',
    email: '',
    companyName: '',
    description: '',
    stage: 'idea',
    industry: ''
  });

  const [analysis, setAnalysis] = useState<AnalysisResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const analyzeApplication = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/venture-studio/applications', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ applicationData: formData }),
      });

      const result = await response.json();
      
      if (result.success) {
        setAnalysis({
          score: result.application.overallScore,
          strengths: result.application.strengths,
          recommendations: result.application.concerns.map((concern: string) => `Address: ${concern}`),
          marketFit: result.application.recommendation,
          nextSteps: [
            'Complete profile assessment',
            'Schedule initial interview',
            'Prepare pitch deck',
            'Connect with portfolio founders'
          ]
        });
        setSubmitted(true);
      }
    } catch (error) {
      console.error('Error analyzing application:', error);
    } finally {
      setLoading(false);
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getScoreLabel = (score: number) => {
    if (score >= 80) return 'High Potential';
    if (score >= 60) return 'Promising';
    return 'Needs Development';
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Intelligent Founder Matching
        </h1>
        <p className="text-xl text-gray-600">
          Apply to join our venture studio and get instant AI-powered insights
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Application Form */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card className="h-full">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="w-5 h-5 text-purple-600" />
                Founder Application
              </CardTitle>
              <CardDescription>
                Tell us about yourself and your venture
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Your Name *
                </label>
                <Input
                  value={formData.founderName}
                  onChange={(e) => handleInputChange('founderName', e.target.value)}
                  placeholder="John Doe"
                  disabled={submitted}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address *
                </label>
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  placeholder="john@example.com"
                  disabled={submitted}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Company Name *
                </label>
                <Input
                  value={formData.companyName}
                  onChange={(e) => handleInputChange('companyName', e.target.value)}
                  placeholder="Tech Startup Inc."
                  disabled={submitted}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Industry *
                </label>
                <Input
                  value={formData.industry}
                  onChange={(e) => handleInputChange('industry', e.target.value)}
                  placeholder="FinTech, HealthTech, etc."
                  disabled={submitted}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Current Stage *
                </label>
                <select
                  value={formData.stage}
                  onChange={(e) => handleInputChange('stage', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  disabled={submitted}
                >
                  <option value="idea">Idea Stage</option>
                  <option value="mvp">MVP Built</option>
                  <option value="early">Early Traction</option>
                  <option value="growth">Growth Stage</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Venture Description *
                </label>
                <Textarea
                  value={formData.description}
                  onChange={(e) => handleInputChange('description', e.target.value)}
                  placeholder="Describe your venture, problem you're solving, and vision..."
                  rows={4}
                  disabled={submitted}
                />
              </div>

              {!submitted && (
                <Button
                  onClick={analyzeApplication}
                  disabled={loading || !formData.founderName || !formData.email || !formData.companyName}
                  className="w-full bg-purple-600 hover:bg-purple-700"
                >
                  {loading ? (
                    'Analyzing...'
                  ) : (
                    <>
                      <Brain className="w-4 h-4 mr-2" />
                      Get AI Analysis
                    </>
                  )}
                </Button>
              )}
            </CardContent>
          </Card>
        </motion.div>

        {/* Analysis Results */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          {analysis ? (
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Brain className="w-5 h-5 text-purple-600" />
                  AI Analysis Results
                </CardTitle>
                <CardDescription>
                  Instant insights powered by our intelligent matching system
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Score */}
                <div className="text-center">
                  <div className={`text-5xl font-bold ${getScoreColor(analysis.score)}`}>
                    {analysis.score}%
                  </div>
                  <div className="text-lg font-medium text-gray-700 mt-2">
                    {getScoreLabel(analysis.score)}
                  </div>
                  <Badge variant="secondary" className="mt-2">
                    <Target className="w-3 h-3 mr-1" />
                    {analysis.marketFit.replace('_', ' ').toUpperCase()}
                  </Badge>
                </div>

                {/* Strengths */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Key Strengths
                  </h4>
                  <div className="space-y-2">
                    {analysis.strengths.map((strength, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <Star className="w-4 h-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{strength}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Recommendations */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-blue-600" />
                    Recommendations
                  </h4>
                  <div className="space-y-2">
                    {analysis.recommendations.map((recommendation, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <AlertCircle className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{recommendation}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Next Steps */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Next Steps</h4>
                  <div className="space-y-2">
                    {analysis.nextSteps.map((step, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-xs font-medium">
                          {index + 1}
                        </div>
                        <span className="text-sm text-gray-700">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Alert>
                  <CheckCircle className="h-4 w-4" />
                  <AlertDescription>
                    Your application has been received! Our team will review your profile and reach out within 48 hours.
                  </AlertDescription>
                </Alert>
              </CardContent>
            </Card>
          ) : (
            <Card className="h-full flex items-center justify-center">
              <CardContent className="text-center">
                <Brain className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  AI-Powered Analysis
                </h3>
                <p className="text-gray-600 mb-4">
                  Complete the form to receive instant insights about your venture's potential
                </p>
                <div className="text-left space-y-2 text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Compatibility scoring</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Strength assessment</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Personalized recommendations</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Next steps guidance</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </motion.div>
      </div>
    </div>
  );
}