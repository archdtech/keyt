"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Users, 
  Target, 
  TrendingUp, 
  Mail, 
  BarChart3, 
  Settings, 
  Plus,
  Search,
  Filter,
  Download,
  Eye,
  Edit,
  Trash2,
  CheckCircle,
  AlertCircle,
  Clock,
  Star,
  ArrowUp,
  ArrowDown,
  UserPlus,
  Building,
  DollarSign,
  Activity,
  Zap,
  Globe,
  Lightbulb,
  Award,
  Briefcase
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { Alert, AlertDescription } from '@/components/ui/alert';

interface DashboardStats {
  totalFounders: number;
  activeApplications: number;
  portfolioCompanies: number;
  avgMatchScore: number;
  totalRaised: number;
  activeEmailCampaigns: number;
}

interface RecentActivity {
  id: string;
  type: 'application' | 'match' | 'investment' | 'email';
  title: string;
  description: string;
  timestamp: string;
  status: 'success' | 'pending' | 'warning';
}

interface TopMatch {
  id: string;
  founderName: string;
  companyName: string;
  matchScore: number;
  keyStrengths: string[];
  gaps: string[];
  status: 'reviewing' | 'contacted' | 'interviewing' | 'accepted';
}

export default function VentureStudioDashboard() {
  const [stats, setStats] = useState<DashboardStats>({
    totalFounders: 0,
    activeApplications: 0,
    portfolioCompanies: 0,
    avgMatchScore: 0,
    totalRaised: 0,
    activeEmailCampaigns: 0
  });

  const [recentActivity, setRecentActivity] = useState<RecentActivity[]>([]);
  const [topMatches, setTopMatches] = useState<TopMatch[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      // Fetch dashboard stats
      const statsResponse = await fetch('/api/venture-studio/stats');
      if (statsResponse.ok) {
        const statsData = await statsResponse.json();
        setStats(statsData);
      }

      // Fetch recent activity
      const activityResponse = await fetch('/api/venture-studio/activity');
      if (activityResponse.ok) {
        const activityData = await activityResponse.json();
        setRecentActivity(activityData);
      }

      // Fetch top matches
      const matchesResponse = await fetch('/api/intelligent-matching/top-matches');
      if (matchesResponse.ok) {
        const matchesData = await matchesResponse.json();
        setTopMatches(matchesData);
      }
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
    } finally {
      setLoading(false);
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'success':
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case 'pending':
        return <Clock className="w-4 h-4 text-yellow-500" />;
      case 'warning':
        return <AlertCircle className="w-4 h-4 text-red-500" />;
      default:
        return null;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'success':
        return 'bg-green-100 text-green-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'warning':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getMatchStatusColor = (status: string) => {
    switch (status) {
      case 'reviewing':
        return 'bg-blue-100 text-blue-800';
      case 'contacted':
        return 'bg-purple-100 text-purple-800';
      case 'interviewing':
        return 'bg-orange-100 text-orange-800';
      case 'accepted':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-purple-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Venture Studio Dashboard</h1>
              <p className="text-gray-600 mt-2">Manage your intelligent venture studio operations</p>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" className="flex items-center gap-2">
                <Download className="w-4 h-4" />
                Export Report
              </Button>
              <Button className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700">
                <Plus className="w-4 h-4" />
                New Application
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 mb-8"
        >
          <Card className="bg-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Founders</p>
                  <p className="text-2xl font-bold text-gray-900">{stats.totalFounders}</p>
                </div>
                <Users className="w-8 h-8 text-purple-600" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Active Applications</p>
                  <p className="text-2xl font-bold text-gray-900">{stats.activeApplications}</p>
                </div>
                <Target className="w-8 h-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Portfolio</p>
                  <p className="text-2xl font-bold text-gray-900">{stats.portfolioCompanies}</p>
                </div>
                <Building className="w-8 h-8 text-green-600" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Avg Match Score</p>
                  <p className="text-2xl font-bold text-gray-900">{stats.avgMatchScore}%</p>
                </div>
                <Brain className="w-8 h-8 text-orange-600" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Raised</p>
                  <p className="text-2xl font-bold text-gray-900">${stats.totalRaised}M</p>
                </div>
                <DollarSign className="w-8 h-8 text-emerald-600" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Email Campaigns</p>
                  <p className="text-2xl font-bold text-gray-900">{stats.activeEmailCampaigns}</p>
                </div>
                <Mail className="w-8 h-8 text-pink-600" />
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Main Content */}
        <Tabs defaultValue="matches" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="matches">Intelligent Matches</TabsTrigger>
            <TabsTrigger value="applications">Applications</TabsTrigger>
            <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
            <TabsTrigger value="nurturing">Lead Nurturing</TabsTrigger>
          </TabsList>

          {/* Intelligent Matches Tab */}
          <TabsContent value="matches" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Top Matches */}
              <div className="lg:col-span-2">
                <Card className="bg-white">
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      <CardTitle className="flex items-center gap-2">
                        <Brain className="w-5 h-5 text-purple-600" />
                        Top Founder Matches
                      </CardTitle>
                      <Button variant="outline" size="sm">
                        View All
                      </Button>
                    </div>
                    <CardDescription>
                      AI-powered founder-company compatibility analysis
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {topMatches.map((match) => (
                        <div key={match.id} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                          <div className="flex justify-between items-start mb-3">
                            <div>
                              <h4 className="font-semibold text-gray-900">{match.founderName}</h4>
                              <p className="text-sm text-gray-600">{match.companyName}</p>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="text-2xl font-bold text-purple-600">{match.matchScore}%</span>
                              <Badge className={getMatchStatusColor(match.status)}>
                                {match.status}
                              </Badge>
                            </div>
                          </div>
                          
                          <div className="mb-3">
                            <Progress value={match.matchScore} className="h-2" />
                          </div>

                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <p className="text-sm font-medium text-gray-700 mb-1">Key Strengths</p>
                              <div className="flex flex-wrap gap-1">
                                {match.keyStrengths.map((strength, index) => (
                                  <Badge key={index} variant="secondary" className="text-xs">
                                    {strength}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                            <div>
                              <p className="text-sm font-medium text-gray-700 mb-1">Skill Gaps</p>
                              <div className="flex flex-wrap gap-1">
                                {match.gaps.map((gap, index) => (
                                  <Badge key={index} variant="outline" className="text-xs">
                                    {gap}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          </div>

                          <div className="flex gap-2 mt-4">
                            <Button size="sm" className="flex items-center gap-1">
                              <Eye className="w-3 h-3" />
                              View Profile
                            </Button>
                            <Button size="sm" variant="outline">
                              Schedule Interview
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Quick Actions */}
              <div className="space-y-6">
                <Card className="bg-white">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Zap className="w-5 h-5 text-yellow-600" />
                      Quick Actions
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Button className="w-full justify-start" variant="outline">
                      <UserPlus className="w-4 h-4 mr-2" />
                      Add New Founder
                    </Button>
                    <Button className="w-full justify-start" variant="outline">
                      <Brain className="w-4 h-4 mr-2" />
                      Run Matching Algorithm
                    </Button>
                    <Button className="w-full justify-start" variant="outline">
                      <BarChart3 className="w-4 h-4 mr-2" />
                      Generate Report
                    </Button>
                    <Button className="w-full justify-start" variant="outline">
                      <Settings className="w-4 h-4 mr-2" />
                      Matching Settings
                    </Button>
                  </CardContent>
                </Card>

                <Card className="bg-white">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <TrendingUp className="w-5 h-5 text-green-600" />
                      Matching Performance
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Success Rate</span>
                        <span className="font-semibold">78%</span>
                      </div>
                      <Progress value={78} className="h-2" />
                      
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Avg. Time to Match</span>
                        <span className="font-semibold">2.3 days</span>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Interview Rate</span>
                        <span className="font-semibold">65%</span>
                      </div>
                      <Progress value={65} className="h-2" />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Applications Tab */}
          <TabsContent value="applications" className="space-y-6">
            <Card className="bg-white">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle className="flex items-center gap-2">
                    <Target className="w-5 h-5 text-blue-600" />
                    Recent Applications
                  </CardTitle>
                  <div className="flex gap-2">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                      <Input
                        placeholder="Search applications..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10 w-64"
                      />
                    </div>
                    <Button variant="outline" size="sm">
                      <Filter className="w-4 h-4 mr-2" />
                      Filter
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-4">Founder</th>
                        <th className="text-left py-3 px-4">Company</th>
                        <th className="text-left py-3 px-4">Stage</th>
                        <th className="text-left py-3 px-4">Score</th>
                        <th className="text-left py-3 px-4">Status</th>
                        <th className="text-left py-3 px-4">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {topMatches.map((match) => (
                        <tr key={match.id} className="border-b hover:bg-gray-50">
                          <td className="py-3 px-4">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                                <span className="text-sm font-medium text-purple-600">
                                  {match.founderName.split(' ').map(n => n[0]).join('')}
                                </span>
                              </div>
                              <span className="font-medium">{match.founderName}</span>
                            </div>
                          </td>
                          <td className="py-3 px-4">{match.companyName}</td>
                          <td className="py-3 px-4">
                            <Badge variant="secondary">Pre-Seed</Badge>
                          </td>
                          <td className="py-3 px-4">
                            <div className="flex items-center gap-2">
                              <span className="font-semibold">{match.matchScore}%</span>
                              {match.matchScore > 80 ? (
                                <ArrowUp className="w-4 h-4 text-green-500" />
                              ) : (
                                <ArrowDown className="w-4 h-4 text-red-500" />
                              )}
                            </div>
                          </td>
                          <td className="py-3 px-4">
                            <Badge className={getMatchStatusColor(match.status)}>
                              {match.status}
                            </Badge>
                          </td>
                          <td className="py-3 px-4">
                            <div className="flex gap-2">
                              <Button size="sm" variant="outline">
                                <Eye className="w-3 h-3" />
                              </Button>
                              <Button size="sm" variant="outline">
                                <Edit className="w-3 h-3" />
                              </Button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Portfolio Tab */}
          <TabsContent value="portfolio" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="bg-white">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Building className="w-5 h-5 text-green-600" />
                    Portfolio Companies
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { name: "AI HealthTech", stage: "Series A", raised: "$5.2M", growth: "+45%" },
                      { name: "FinTech Solutions", stage: "Seed", raised: "$2.1M", growth: "+32%" },
                      { name: "EduTech Platform", stage: "Pre-Seed", raised: "$750K", growth: "+28%" }
                    ].map((company, index) => (
                      <div key={index} className="border rounded-lg p-4">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-semibold">{company.name}</h4>
                          <Badge variant="secondary">{company.stage}</Badge>
                        </div>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <span className="text-gray-600">Total Raised:</span>
                            <span className="ml-2 font-medium">{company.raised}</span>
                          </div>
                          <div>
                            <span className="text-gray-600">Growth:</span>
                            <span className="ml-2 font-medium text-green-600">{company.growth}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Activity className="w-5 h-5 text-orange-600" />
                    Portfolio Performance
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-600">+42%</div>
                      <p className="text-gray-600">Average Portfolio Growth</p>
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Total Value</span>
                        <span className="font-semibold">$45.8M</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Active Companies</span>
                        <span className="font-semibold">12</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Exits</span>
                        <span className="font-semibold">3</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Lead Nurturing Tab */}
          <TabsContent value="nurturing" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <Card className="bg-white">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Mail className="w-5 h-5 text-pink-600" />
                      Email Campaigns
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        { 
                          name: "Welcome Series", 
                          status: "Active", 
                          sent: 245, 
                          open: 68, 
                          click: 32 
                        },
                        { 
                          name: "Founder Matching", 
                          status: "Active", 
                          sent: 189, 
                          open: 72, 
                          click: 41 
                        },
                        { 
                          name: "Portfolio Updates", 
                          status: "Draft", 
                          sent: 0, 
                          open: 0, 
                          click: 0 
                        }
                      ].map((campaign, index) => (
                        <div key={index} className="border rounded-lg p-4">
                          <div className="flex justify-between items-start mb-3">
                            <div>
                              <h4 className="font-semibold">{campaign.name}</h4>
                              <Badge variant={campaign.status === 'Active' ? 'default' : 'secondary'}>
                                {campaign.status}
                              </Badge>
                            </div>
                            <Button size="sm" variant="outline">
                              <Settings className="w-3 h-3" />
                            </Button>
                          </div>
                          <div className="grid grid-cols-3 gap-4 text-sm">
                            <div>
                              <span className="text-gray-600">Sent:</span>
                              <span className="ml-2 font-medium">{campaign.sent}</span>
                            </div>
                            <div>
                              <span className="text-gray-600">Open:</span>
                              <span className="ml-2 font-medium">{campaign.open}%</span>
                            </div>
                            <div>
                              <span className="text-gray-600">Click:</span>
                              <span className="ml-2 font-medium">{campaign.click}%</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                <Card className="bg-white">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Lightbulb className="w-5 h-5 text-yellow-600" />
                      AI Insights
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <Alert>
                        <AlertCircle className="h-4 w-4" />
                        <AlertDescription>
                          3 founders show high matching potential this week
                        </AlertDescription>
                      </Alert>
                      <Alert>
                        <TrendingUp className="h-4 w-4" />
                        <AlertDescription>
                          Email engagement up 15% from last month
                        </AlertDescription>
                      </Alert>
                      <Alert>
                        <Award className="h-4 w-4" />
                        <AlertDescription>
                          2 portfolio companies reached milestones
                        </AlertDescription>
                      </Alert>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Globe className="w-5 h-5 text-blue-600" />
                      Global Reach
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Countries</span>
                        <span className="font-semibold">24</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Continents</span>
                        <span className="font-semibold">6</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Time Zones</span>
                        <span className="font-semibold">12</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}