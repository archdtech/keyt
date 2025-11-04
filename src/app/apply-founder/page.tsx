"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { ArrowLeft, Send, CheckCircle, AlertCircle, Building, Users, Target, Lightbulb } from 'lucide-react';
import Link from 'next/link';

export default function ApplyFounderPage() {
  const [formData, setFormData] = useState({
    founderName: '',
    email: '',
    companyName: '',
    description: '',
    stage: '',
    industry: '',
    location: '',
    teamSize: '',
    fundingGoal: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const response = await fetch('/api/venture-studio/applications', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          applicationData: formData
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        // Reset form
        setFormData({
          founderName: '',
          email: '',
          companyName: '',
          description: '',
          stage: '',
          industry: '',
          location: '',
          teamSize: '',
          fundingGoal: ''
        });
      } else {
        setSubmitStatus('error');
        setErrorMessage(result.error || 'Failed to submit application');
      }
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage('Network error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFormValid = formData.founderName && formData.email && formData.companyName && 
                     formData.description && formData.stage && formData.industry && 
                     formData.location && formData.teamSize && formData.fundingGoal;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-12">
        {/* IMPROVED Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 sm:mb-12"
        >
          <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6 font-medium">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
              <Target className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Apply to Keymaster
              <span className="block text-lg sm:text-xl lg:text-2xl font-normal text-gray-600 mt-2">
                Venture Studio Program
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Join our exclusive program for founders building the next generation of category-defining companies. 
              Our AI will evaluate your application and provide instant feedback.
            </p>
          </div>
        </motion.div>

        {/* IMPROVED Application Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-2xl hover:shadow-3xl transition-all duration-300">
            <CardHeader className="pb-8 text-center">
              <CardTitle className="text-2xl sm:text-3xl text-gray-900 mb-2">
                Founder Application
              </CardTitle>
              <CardDescription className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
                Tell us about yourself and your vision. Our intelligent system will help evaluate your application.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6 sm:p-8 lg:p-12">
              {submitStatus === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12 sm:py-16"
                >
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                    Application Submitted Successfully!
                  </h3>
                  <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                    Thank you for your interest in Keymaster Venture Studio. Our team will review your application 
                    and get back to you within 48 hours with next steps.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/venture-studio">
                      <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-base font-medium shadow-lg hover:shadow-xl transition-all duration-200">
                        View Venture Studio
                      </Button>
                    </Link>
                    <Button 
                      onClick={() => setSubmitStatus('idle')}
                      variant="outline"
                      className="border-2 border-gray-300 hover:border-gray-400 px-8 py-3 text-base font-medium"
                    >
                      Submit Another Application
                    </Button>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Founder Information Section */}
                  <div className="space-y-6">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                        <Users className="w-5 h-5 text-blue-600" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900">Founder Information</h3>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="founderName" className="text-sm font-medium text-gray-700">
                          Founder Name *
                        </Label>
                        <Input
                          id="founderName"
                          value={formData.founderName}
                          onChange={(e) => handleInputChange('founderName', e.target.value)}
                          placeholder="John Doe"
                          className="h-12 text-base border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                          Email Address *
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          placeholder="john@company.com"
                          className="h-12 text-base border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* Company Information Section */}
                  <div className="space-y-6">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                        <Building className="w-5 h-5 text-purple-600" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900">Company Information</h3>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="companyName" className="text-sm font-medium text-gray-700">
                        Company Name *
                      </Label>
                      <Input
                        id="companyName"
                        value={formData.companyName}
                        onChange={(e) => handleInputChange('companyName', e.target.value)}
                        placeholder="Tech Innovations Inc."
                        className="h-12 text-base border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="description" className="text-sm font-medium text-gray-700">
                        Company Description *
                      </Label>
                      <Textarea
                        id="description"
                        value={formData.description}
                        onChange={(e) => handleInputChange('description', e.target.value)}
                        placeholder="Describe your company, mission, and what problem you're solving..."
                        rows={5}
                        className="text-base border-gray-300 focus:border-blue-500 focus:ring-blue-500 resize-none"
                        required
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="stage" className="text-sm font-medium text-gray-700">
                          Current Stage *
                        </Label>
                        <Select value={formData.stage} onValueChange={(value) => handleInputChange('stage', value)}>
                          <SelectTrigger className="h-12 text-base border-gray-300 focus:border-blue-500 focus:ring-blue-500">
                            <SelectValue placeholder="Select your stage" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="pre-seed">Pre-Seed</SelectItem>
                            <SelectItem value="seed">Seed</SelectItem>
                            <SelectItem value="series-a">Series A</SelectItem>
                            <SelectItem value="growth">Growth</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="industry" className="text-sm font-medium text-gray-700">
                          Industry *
                        </Label>
                        <Select value={formData.industry} onValueChange={(value) => handleInputChange('industry', value)}>
                          <SelectTrigger className="h-12 text-base border-gray-300 focus:border-blue-500 focus:ring-blue-500">
                            <SelectValue placeholder="Select your industry" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="fintech">FinTech</SelectItem>
                            <SelectItem value="healthcare">Healthcare</SelectItem>
                            <SelectItem value="edtech">EdTech</SelectItem>
                            <SelectItem value="saas">SaaS</SelectItem>
                            <SelectItem value="ecommerce">E-commerce</SelectItem>
                            <SelectItem value="ai">AI/ML</SelectItem>
                            <SelectItem value="blockchain">Blockchain</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  {/* Additional Details Section */}
                  <div className="space-y-6">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                        <Lightbulb className="w-5 h-5 text-green-600" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900">Additional Details</h3>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="location" className="text-sm font-medium text-gray-700">
                          Location *
                        </Label>
                        <Input
                          id="location"
                          value={formData.location}
                          onChange={(e) => handleInputChange('location', e.target.value)}
                          placeholder="San Francisco, CA"
                          className="h-12 text-base border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="teamSize" className="text-sm font-medium text-gray-700">
                          Team Size *
                        </Label>
                        <Input
                          id="teamSize"
                          type="number"
                          value={formData.teamSize}
                          onChange={(e) => handleInputChange('teamSize', e.target.value)}
                          placeholder="2"
                          min="1"
                          className="h-12 text-base border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="fundingGoal" className="text-sm font-medium text-gray-700">
                        Funding Goal ($) *
                      </Label>
                      <Input
                        id="fundingGoal"
                        type="number"
                        value={formData.fundingGoal}
                        onChange={(e) => handleInputChange('fundingGoal', e.target.value)}
                        placeholder="500000"
                        min="1000"
                        className="h-12 text-base border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                        required
                      />
                    </div>
                  </div>

                  {/* Error Message */}
                  {submitStatus === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-3 p-4 bg-red-50 border border-red-200 rounded-xl"
                    >
                      <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                      <p className="text-red-700 font-medium">{errorMessage}</p>
                    </motion.div>
                  )}

                  {/* Submit Button */}
                  <div className="flex justify-center pt-8">
                    <Button
                      type="submit"
                      disabled={!isFormValid || isSubmitting}
                      className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-12 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center">
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-3"></div>
                          Submitting Application...
                        </span>
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-3" />
                          Submit Application
                        </>
                      )}
                    </Button>
                  </div>
                </form>
              )}
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}