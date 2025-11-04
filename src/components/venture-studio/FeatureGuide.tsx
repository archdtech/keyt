"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Brain, 
  Users, 
  Target, 
  Building, 
  Mail, 
  BarChart3, 
  Settings, 
  ArrowRight,
  CheckCircle,
  Star,
  TrendingUp,
  Globe,
  Lightbulb,
  Zap,
  Award,
  BookOpen,
  Play,
  Link as LinkIcon
} from 'lucide-react';
import Link from 'next/link';

interface Feature {
  title: string;
  description: string;
  path: string;
  icon: React.ReactNode;
  status: 'live' | 'beta' | 'coming-soon';
  highlights: string[];
}

const features: Feature[] = [
  {
    title: "Venture Studio Dashboard",
    description: "Central hub for managing all venture studio operations with real-time analytics and insights",
    path: "/venture-studio",
    icon: <BarChart3 className="w-6 h-6" />,
    status: 'live',
    highlights: ['Real-time stats', 'Activity monitoring', 'Quick actions', 'Performance metrics']
  },
  {
    title: "Intelligent Matching",
    description: "AI-powered founder-company compatibility analysis with advanced scoring algorithms",
    path: "/venture-studio/matching",
    icon: <Brain className="w-6 h-6" />,
    status: 'live',
    highlights: ['AI analysis', 'Compatibility scoring', 'Skill gap analysis', 'Market timing']
  },
  {
    title: "Application Management",
    description: "Streamlined application processing with automated screening and evaluation",
    path: "/venture-studio/applications",
    icon: <Target className="w-6 h-6" />,
    status: 'live',
    highlights: ['Automated scoring', 'Screening queue', 'Interview scheduling', 'Status tracking']
  },
  {
    title: "Portfolio Management",
    description: "Comprehensive portfolio tracking with performance metrics and success stories",
    path: "/venture-studio/portfolio",
    icon: <Building className="w-6 h-6" />,
    status: 'live',
    highlights: ['Performance tracking', 'Success stories', 'ROI analysis', 'Milestone monitoring']
  },
  {
    title: "Lead Nurturing",
    description: "Automated email campaigns with AI-powered personalization and engagement tracking",
    path: "/venture-studio/nurturing",
    icon: <Mail className="w-6 h-6" />,
    status: 'live',
    highlights: ['Email campaigns', 'Lead segmentation', 'Automation rules', 'Engagement analytics']
  },
  {
    title: "Analytics & Insights",
    description: "Advanced analytics platform with AI-driven insights and predictive analytics",
    path: "/venture-studio/analytics",
    icon: <TrendingUp className="w-6 h-6" />,
    status: 'beta',
    highlights: ['Predictive analytics', 'Conversion tracking', 'ROI analysis', 'Custom reports']
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'live':
      return 'bg-green-100 text-green-800';
    case 'beta':
      return 'bg-yellow-100 text-yellow-800';
    case 'coming-soon':
      return 'bg-gray-100 text-gray-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

export default function FeatureGuide() {
  const [selectedFeature, setSelectedFeature] = useState<Feature | null>(null);

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Venture Studio Platform
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Complete access to your intelligent venture studio operations. 
          Manage founders, applications, portfolio companies, and more with AI-powered insights.
        </p>
      </motion.div>

      {/* Quick Access */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <Card className="bg-gradient-to-r from-purple-50 to-blue-50 border-purple-200">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Quick Access to Dashboard
                </h2>
                <p className="text-gray-600">
                  Access the complete venture studio management platform
                </p>
              </div>
              <Link href="/venture-studio">
                <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                  <BarChart3 className="w-5 h-5 mr-2" />
                  Open Dashboard
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Features Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <h2 className="text-2xl font-bold text-gray-900 mb-6">All Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              whileHover={{ y: -5 }}
              className="cursor-pointer"
              onClick={() => setSelectedFeature(feature)}
            >
              <Card className="h-full hover:shadow-lg transition-shadow border-2 hover:border-purple-200">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600">
                        {feature.icon}
                      </div>
                      <div>
                        <CardTitle className="text-lg">{feature.title}</CardTitle>
                        <Badge className={getStatusColor(feature.status)} variant="secondary">
                          {feature.status.replace('-', ' ')}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <CardDescription className="text-sm">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex flex-wrap gap-1">
                      {feature.highlights.slice(0, 3).map((highlight, i) => (
                        <Badge key={i} variant="outline" className="text-xs">
                          {highlight}
                        </Badge>
                      ))}
                      {feature.highlights.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{feature.highlights.length - 3} more
                        </Badge>
                      )}
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-purple-600 font-medium">
                        {feature.path}
                      </span>
                      {feature.status === 'live' && (
                        <Button size="sm" variant="outline">
                          <Play className="w-3 h-3 mr-1" />
                          Access
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Feature Detail Modal */}
      {selectedFeature && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
          onClick={() => setSelectedFeature(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600">
                    {selectedFeature.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {selectedFeature.title}
                    </h3>
                    <Badge className={getStatusColor(selectedFeature.status)}>
                      {selectedFeature.status.replace('-', ' ')}
                    </Badge>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setSelectedFeature(null)}
                >
                  ×
                </Button>
              </div>

              <p className="text-gray-600 mb-6">
                {selectedFeature.description}
              </p>

              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Key Features</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {selectedFeature.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-gray-700">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex gap-3">
                {selectedFeature.status === 'live' ? (
                  <Link href={selectedFeature.path}>
                    <Button className="bg-purple-600 hover:bg-purple-700">
                      <Play className="w-4 h-4 mr-2" />
                      Access Feature
                    </Button>
                  </Link>
                ) : (
                  <Button disabled>
                    <Zap className="w-4 h-4 mr-2" />
                    Coming Soon
                  </Button>
                )}
                <Button variant="outline">
                  <BookOpen className="w-4 h-4 mr-2" />
                  Documentation
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Access Instructions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lightbulb className="w-5 h-5 text-yellow-600" />
              How to Access Features
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="navigation" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="navigation">Navigation</TabsTrigger>
                <TabsTrigger value="direct">Direct Access</TabsTrigger>
                <TabsTrigger value="api">API Access</TabsTrigger>
              </TabsList>

              <TabsContent value="navigation" className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">Via Dashboard Navigation</h4>
                  <ol className="list-decimal list-inside space-y-2 text-blue-800">
                    <li>Go to the main dashboard at <code className="bg-blue-100 px-2 py-1 rounded">/venture-studio</code></li>
                    <li>Use the sidebar navigation to browse different modules</li>
                    <li>Click on any feature to access its dedicated interface</li>
                    <li>Use the search and filter options to find specific data</li>
                  </ol>
                </div>
              </TabsContent>

              <TabsContent value="direct" className="space-y-4">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">Direct URL Access</h4>
                  <div className="space-y-2 text-green-800">
                    <div className="flex items-center gap-2">
                      <LinkIcon className="w-4 h-4" />
                      <code>/venture-studio</code> - Main Dashboard
                    </div>
                    <div className="flex items-center gap-2">
                      <LinkIcon className="w-4 h-4" />
                      <code>/venture-studio/matching</code> - Intelligent Matching
                    </div>
                    <div className="flex items-center gap-2">
                      <LinkIcon className="w-4 h-4" />
                      <code>/venture-studio/applications</code> - Applications
                    </div>
                    <div className="flex items-center gap-2">
                      <LinkIcon className="w-4 h-4" />
                      <code>/venture-studio/portfolio</code> - Portfolio
                    </div>
                    <div className="flex items-center gap-2">
                      <LinkIcon className="w-4 h-4" />
                      <code>/venture-studio/nurturing</code> - Lead Nurturing
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="api" className="space-y-4">
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">API Endpoints</h4>
                  <div className="space-y-2 text-purple-800">
                    <div><code>GET /api/venture-studio/stats</code> - Dashboard statistics</div>
                    <div><code>GET /api/venture-studio/activity</code> - Recent activity</div>
                    <div><code>GET /api/intelligent-matching/top-matches</code> - Top matches</div>
                    <div><code>POST /api/intelligent-matching/analyze</code> - Analyze compatibility</div>
                    <div><code>GET /api/venture-studio/applications</code> - All applications</div>
                    <div><code>POST /api/venture-studio/applications</code> - Submit application</div>
                    <div><code>GET /api/email/campaigns</code> - Email campaigns</div>
                    <div><code>POST /api/email/campaigns</code> - Create campaign</div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </motion.div>

      {/* Demo Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
      >
        <Card className="bg-gradient-to-r from-orange-50 to-red-50 border-orange-200">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Try the Lead Capture Demo
                </h3>
                <p className="text-gray-600">
                  Experience the AI-powered founder analysis firsthand
                </p>
              </div>
              <Link href="/demo">
                <Button variant="outline" className="border-orange-300 text-orange-700 hover:bg-orange-100">
                  <Play className="w-4 h-4 mr-2" />
                  Try Demo
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}