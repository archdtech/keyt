"use client";

import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Users, 
  Target, 
  BarChart3, 
  Star,
  ArrowRight,
  CheckCircle,
  TrendingUp
} from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function VentureStudioPage() {
  const [stats, setStats] = useState({
    totalApplications: 0,
    pendingApplications: 0,
    underReviewApplications: 0,
    interviewingApplications: 0,
    approvedApplications: 0,
    rejectedApplications: 0
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const response = await fetch('/api/venture-studio/stats');
      const data = await response.json();
      setStats(data);
    } catch (error) {
      console.error('Failed to fetch stats:', error);
    } finally {
      setLoading(false);
    }
  };

  // IMPROVED STATS DESIGN with better visual hierarchy
  const statsData = [
    { 
      title: "Total Applications", 
      value: loading ? "..." : stats.totalApplications.toString(), 
      icon: <Users className="w-6 h-6 text-blue-600" />, 
      color: "blue",
      bgGradient: "from-blue-500 to-blue-600",
      textColor: "text-blue-600"
    },
    { 
      title: "Pending Review", 
      value: loading ? "..." : stats.pendingApplications.toString(), 
      icon: <Target className="w-6 h-6 text-yellow-600" />, 
      color: "yellow",
      bgGradient: "from-yellow-500 to-yellow-600",
      textColor: "text-yellow-600"
    },
    { 
      title: "Under Review", 
      value: loading ? "..." : stats.underReviewApplications.toString(), 
      icon: <BarChart3 className="w-6 h-6 text-purple-600" />, 
      color: "purple",
      bgGradient: "from-purple-500 to-purple-600",
      textColor: "text-purple-600"
    },
    { 
      title: "Interviewing", 
      value: loading ? "..." : stats.interviewingApplications.toString(), 
      icon: <Star className="w-6 h-6 text-green-600" />, 
      color: "green",
      bgGradient: "from-green-500 to-green-600",
      textColor: "text-green-600"
    }
  ];

  // COMMENTED OUT: AI matching not needed for core MVP
  // const topMatches = [
  //   {
  //     id: '1',
  //     founderName: 'Sarah Chen',
  //     companyName: 'HealthAI Solutions',
  //     matchScore: 92,
  //     keyStrengths: ['AI/ML', 'Healthcare', 'Leadership'],
  //     status: 'interviewing'
  //   },
  //   {
  //     id: '2',
  //     founderName: 'Michael Rodriguez',
  //     companyName: 'FinTech Innovations',
  //     matchScore: 88,
  //     keyStrengths: ['Blockchain', 'Finance', 'Product'],
  //     status: 'contacted'
  //   },
  //   {
  //     id: '3',
  //     founderName: 'Emily Johnson',
  //     companyName: 'EduTech Platform',
  //     matchScore: 85,
  //     keyStrengths: ['Education', 'UX', 'Pedagogy'],
  //     status: 'reviewing'
  //   }
  // ];

  // FOCUSED FEATURES: Only core application processing for MVP
  const features = [
    // COMMENTED OUT: AI matching not needed for core MVP
    // {
    //   title: "Intelligent Matching",
    //   description: "AI-powered founder-company compatibility analysis",
    //   icon: <Brain className="w-6 h-6" />,
    //   href: "/venture-studio/matching",
    //   badge: "AI"
    // },
    {
      title: "Application Management",
      description: "Streamlined application processing with automated scoring",
      icon: <Target className="w-6 h-6" />,
      href: "/venture-studio/applications",
      badge: "CORE"
    },
    // COMMENTED OUT: Portfolio tracking not needed for MVP
    // {
    //   title: "Portfolio Tracking",
    //   description: "Comprehensive portfolio management and performance metrics",
    //   icon: <Building className="w-6 h-6" />,
    //   href: "/venture-studio/portfolio"
    // },
    // COMMENTED OUT: Email campaigns not needed for MVP
    // {
    //   title: "Lead Nurturing",
    //   description: "Automated email campaigns with AI-powered personalization",
    //   icon: <Mail className="w-6 h-6" />,
    //   href: "/venture-studio/nurturing",
    //   badge: "3"
    // }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {/* IMPROVED Header with better spacing and typography */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 sm:mb-12"
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex-1">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-2 sm:mb-3">
                Venture Studio
                <span className="block text-lg sm:text-xl lg:text-2xl font-normal text-gray-600 mt-2">
                  Real-time Application Management
                </span>
              </h1>
              <p className="text-base sm:text-lg text-gray-600 max-w-2xl">
                Process founder applications with AI-powered scoring and real-time tracking
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link href="/apply-founder">
                <Button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 text-sm sm:text-base font-medium shadow-lg hover:shadow-xl transition-all duration-200">
                  <Target className="w-4 h-4 mr-2" />
                  Test Application
                </Button>
              </Link>
              <Link href="/venture-studio/applications">
                <Button variant="outline" className="w-full sm:w-auto border-2 border-gray-300 hover:border-gray-400 px-6 py-3 text-sm sm:text-base font-medium">
                  <BarChart3 className="w-4 h-4 mr-2" />
                  View All
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>

        {/* IMPROVED Stats Grid with better cards and responsive design */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12"
        >
          {statsData.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${stat.bgGradient} rounded-xl flex items-center justify-center shadow-md`}>
                      {stat.icon}
                    </div>
                    <div className={`text-3xl font-bold ${stat.textColor}`}>
                      {stat.value}
                    </div>
                  </div>
                  <h3 className="text-sm font-medium text-gray-600 uppercase tracking-wide">
                    {stat.title}
                  </h3>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* IMPROVED Main Content with better responsive layout */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 sm:gap-8">
          {/* Recent Applications Section */}
          <div className="xl:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
                <CardHeader className="pb-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                        <Target className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-xl sm:text-2xl text-gray-900">
                          Recent Applications
                        </CardTitle>
                        <CardDescription className="text-sm sm:text-base text-gray-600">
                          Real-time application submissions and status tracking
                        </CardDescription>
                      </div>
                    </div>
                    <Badge className="bg-green-100 text-green-800 border-green-200 px-3 py-1 text-sm font-medium">
                      Live Data
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="p-6 sm:p-8">
                  <div className="text-center py-12 sm:py-16">
                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Target className="w-8 h-8 text-gray-400" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                      No Applications Yet
                    </h3>
                    <p className="text-gray-600 mb-8 max-w-md mx-auto text-sm sm:text-base">
                      Start building your pipeline by receiving founder applications through our intelligent system
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Link href="/apply-founder">
                        <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-base sm:text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-200">
                          <Target className="w-5 h-5 mr-2" />
                          Test Application Form
                        </Button>
                      </Link>
                      <Link href="/venture-studio/applications">
                        <Button variant="outline" className="border-2 border-gray-300 hover:border-gray-400 px-8 py-3 text-base sm:text-lg font-medium">
                          <BarChart3 className="w-5 h-5 mr-2" />
                          View Management
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* IMPROVED Sidebar */}
          <div className="space-y-6 sm:space-y-8">
            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
                <CardHeader className="pb-6">
                  <CardTitle className="text-xl text-gray-900 flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
                      <Star className="w-4 h-4 text-white" />
                    </div>
                    Quick Actions
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {features.map((feature, index) => (
                    <Link key={index} href={feature.href}>
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 + index * 0.1 }}
                        whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                        className="flex items-center justify-between p-4 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-300 cursor-pointer border border-gray-100 hover:border-blue-200"
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-purple-100 rounded-xl flex items-center justify-center">
                            <div className="text-blue-600">
                              {feature.icon}
                            </div>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 text-base">
                              {feature.title}
                            </h4>
                            <p className="text-sm text-gray-600 mt-1">
                              {feature.description}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          {feature.badge && (
                            <Badge className="bg-blue-100 text-blue-800 border-blue-200 px-2 py-1 text-xs font-medium">
                              {feature.badge}
                            </Badge>
                          )}
                          <ArrowRight className="w-5 h-5 text-gray-400" />
                        </div>
                      </motion.div>
                    </Link>
                  ))}
                </CardContent>
              </Card>
            </motion.div>

            {/* CTA Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Card className="bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700 border-0 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden">
                <CardContent className="p-6 sm:p-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <Target className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
                      Ready to Get Started?
                    </h3>
                    <p className="text-blue-100 mb-8 text-sm sm:text-base leading-relaxed">
                      Our intelligent application processing system is ready to help you discover and evaluate the next generation of founders.
                    </p>
                    <Link href="/apply-founder">
                      <Button className="w-full bg-white text-blue-600 hover:bg-blue-50 font-semibold px-6 py-3 text-base shadow-lg hover:shadow-xl transition-all duration-200">
                        Submit Test Application
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>

        {/* COMMENTED OUT: Performance metrics not meaningful until we have real data */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-8"
        >
          <Card className="bg-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-green-600" />
                Platform Performance
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">78%</div>
                  <p className="text-sm text-gray-600">Success Rate</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">2.3</div>
                  <p className="text-sm text-gray-600">Avg. Days to Match</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">65%</div>
                  <p className="text-sm text-gray-600">Interview Rate</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-600">42%</div>
                  <p className="text-sm text-gray-600">Portfolio Growth</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div> */}
      </div>
    </div>
  );
}