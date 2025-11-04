"use client";

import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Brain, 
  Users, 
  Target, 
  Building, 
  Mail, 
  BarChart3, 
  ArrowRight,
  CheckCircle,
  Star,
  TrendingUp,
  Play,
  Link as LinkIcon
} from 'lucide-react';
import Link from 'next/link';

const features = [
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
    title: "Interactive Demo",
    description: "Experience the AI-powered founder analysis firsthand with real-time scoring",
    path: "/demo",
    icon: <Play className="w-6 h-6" />,
    status: 'live',
    highlights: ['Real-time AI analysis', 'Instant scoring', 'Personalized insights', 'Interactive feedback']
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

export default function GuidePage() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto space-y-8">
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
              >
                <Link href={feature.path}>
                  <Card className="h-full hover:shadow-lg transition-shadow border-2 hover:border-purple-200 cursor-pointer">
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
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Access Instructions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-600" />
                How to Access Features
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">From Homepage</h4>
                  <ol className="list-decimal list-inside space-y-2 text-blue-800 text-sm">
                    <li>Go to <code className="bg-blue-100 px-2 py-1 rounded">http://localhost:3000</code></li>
                    <li>Click "Venture Studio Portal"</li>
                    <li>Explore the dashboard</li>
                    <li>Navigate using the sidebar</li>
                  </ol>
                </div>
                
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">Direct URLs</h4>
                  <div className="space-y-1 text-green-800 text-sm">
                    <div><code>/venture-studio</code> - Dashboard</div>
                    <div><code>/demo</code> - AI Demo</div>
                    <div><code>/guide</code> - This Guide</div>
                    <div><code>/venture-studio/matching</code> - Matching</div>
                    <div><code>/venture-studio/applications</code> - Applications</div>
                  </div>
                </div>
                
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">API Access</h4>
                  <div className="space-y-1 text-purple-800 text-sm">
                    <div><code>GET /api/venture-studio/stats</code></div>
                    <div><code>GET /api/intelligent-matching/top-matches</code></div>
                    <div><code>POST /api/intelligent-matching/analyze</code></div>
                    <div><code>GET /api/venture-studio/applications</code></div>
                    <div><code>GET /api/email/campaigns</code></div>
                  </div>
                </div>
              </div>
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
                    Try the AI-Powered Demo
                  </h3>
                  <p className="text-gray-600">
                    Experience real-time founder analysis and compatibility scoring
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
    </div>
  );
}