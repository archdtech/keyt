'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { 
  Building, 
  TrendingUp, 
  DollarSign,
  Users,
  Target,
  Eye,
  MessageSquare,
  Calendar,
  BarChart3,
  ArrowUpRight,
  ArrowDownRight,
  Minus
} from 'lucide-react'

interface PortfolioCompany {
  id: string
  name: string
  description: string
  industry: string
  stage: string
  foundedDate: string
  investmentDate: string
  investmentAmount: number
  currentValuation: number
  teamSize: number
  milestones: string[]
  performance: {
    revenue: number
    growth: number
    users: number
  }
  status: 'active' | 'paused' | 'exited'
  lastUpdate: string
}

export default function PortfolioPage() {
  const [companies, setCompanies] = useState<PortfolioCompany[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedMetric, setSelectedMetric] = useState('revenue')

  useEffect(() => {
    fetchPortfolio()
  }, [])

  const fetchPortfolio = async () => {
    try {
      // Mock data for now - would be replaced with actual API call
      const mockCompanies: PortfolioCompany[] = [
        {
          id: '1',
          name: 'HealthAI Solutions',
          description: 'AI-powered personalized healthcare recommendations platform',
          industry: 'Healthcare',
          stage: 'Series A',
          foundedDate: '2023-01-15',
          investmentDate: '2023-03-20',
          investmentAmount: 1500000,
          currentValuation: 12000000,
          teamSize: 15,
          milestones: ['Product Launch', '10K Users', 'First Revenue'],
          performance: {
            revenue: 850000,
            growth: 45,
            users: 25000
          },
          status: 'active',
          lastUpdate: '2024-01-10'
        },
        {
          id: '2',
          name: 'FinTech Innovations',
          description: 'Blockchain-based cross-border payment solution',
          industry: 'FinTech',
          stage: 'Seed',
          foundedDate: '2023-03-10',
          investmentDate: '2023-05-15',
          investmentAmount: 750000,
          currentValuation: 5000000,
          teamSize: 8,
          milestones: ['Beta Launch', 'Pilot Program', 'Regulatory Approval'],
          performance: {
            revenue: 320000,
            growth: 28,
            users: 12000
          },
          status: 'active',
          lastUpdate: '2024-01-08'
        },
        {
          id: '3',
          name: 'EduTech Platform',
          description: 'Adaptive learning platform for personalized education',
          industry: 'Education',
          stage: 'Pre-Seed',
          foundedDate: '2023-06-20',
          investmentDate: '2023-08-10',
          investmentAmount: 250000,
          currentValuation: 1500000,
          teamSize: 5,
          milestones: ['MVP Launch', 'First School Partnership'],
          performance: {
            revenue: 85000,
            growth: 65,
            users: 5000
          },
          status: 'active',
          lastUpdate: '2024-01-12'
        }
      ]
      setCompanies(mockCompanies)
    } catch (error) {
      console.error('Failed to fetch portfolio:', error)
    } finally {
      setLoading(false)
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800'
      case 'paused': return 'bg-yellow-100 text-yellow-800'
      case 'exited': return 'bg-blue-100 text-blue-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getStageColor = (stage: string) => {
    switch (stage) {
      case 'Pre-Seed': return 'bg-gray-100 text-gray-800'
      case 'Seed': return 'bg-blue-100 text-blue-800'
      case 'Series A': return 'bg-purple-100 text-purple-800'
      case 'Series B': return 'bg-emerald-100 text-emerald-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getGrowthIcon = (growth: number) => {
    if (growth > 0) return <ArrowUpRight className="w-4 h-4 text-green-500" />
    if (growth < 0) return <ArrowDownRight className="w-4 h-4 text-red-500" />
    return <Minus className="w-4 h-4 text-gray-500" />
  }

  const getGrowthColor = (growth: number) => {
    if (growth > 0) return 'text-green-600'
    if (growth < 0) return 'text-red-600'
    return 'text-gray-600'
  }

  const totalInvestment = companies.reduce((sum, c) => sum + c.investmentAmount, 0)
  const totalValuation = companies.reduce((sum, c) => sum + c.currentValuation, 0)
  const totalRevenue = companies.reduce((sum, c) => sum + c.performance.revenue, 0)
  const totalUsers = companies.reduce((sum, c) => sum + c.performance.users, 0)

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-6">
        <div className="max-w-7xl mx-auto">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-1/3 mb-8"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="h-64 bg-gray-200 rounded-lg"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Portfolio Management</h1>
              <p className="text-gray-600">Track and manage your venture studio portfolio companies</p>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" className="flex items-center gap-2">
                <BarChart3 className="w-4 h-4" />
                Export Report
              </Button>
              <Button className="flex items-center gap-2">
                <Building className="w-4 h-4" />
                Add Company
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Portfolio Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8"
        >
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Total Companies</p>
                  <p className="text-2xl font-bold text-gray-900">{companies.length}</p>
                </div>
                <Building className="w-8 h-8 text-blue-500" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Total Investment</p>
                  <p className="text-2xl font-bold text-gray-900">
                    ${(totalInvestment / 1000000).toFixed(1)}M
                  </p>
                </div>
                <DollarSign className="w-8 h-8 text-green-500" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Current Valuation</p>
                  <p className="text-2xl font-bold text-emerald-600">
                    ${(totalValuation / 1000000).toFixed(1)}M
                  </p>
                </div>
                <TrendingUp className="w-8 h-8 text-emerald-500" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Total Users</p>
                  <p className="text-2xl font-bold text-purple-600">
                    {(totalUsers / 1000).toFixed(0)}K
                  </p>
                </div>
                <Users className="w-8 h-8 text-purple-500" />
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Performance Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6 mb-6"
        >
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Portfolio Performance</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-gray-700">Total Revenue</span>
                <span className="text-sm font-semibold text-green-600">
                  ${(totalRevenue / 1000000).toFixed(2)}M
                </span>
              </div>
              <div className="text-xs text-gray-500">Annual recurring revenue across portfolio</div>
            </div>
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-gray-700">ROI</span>
                <span className="text-sm font-semibold text-emerald-600">
                  {totalInvestment > 0 ? Math.round(((totalValuation - totalInvestment) / totalInvestment) * 100) : 0}%
                </span>
              </div>
              <div className="text-xs text-gray-500">Return on investment to date</div>
            </div>
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-gray-700">Active Companies</span>
                <span className="text-sm font-semibold text-blue-600">
                  {companies.filter(c => c.status === 'active').length}/{companies.length}
                </span>
              </div>
              <div className="text-xs text-gray-500">Companies actively growing</div>
            </div>
          </div>
        </motion.div>

        {/* Companies Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6"
        >
          {companies.map((company, index) => (
            <motion.div
              key={company.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              whileHover={{ scale: 1.02 }}
              className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <Card className="border-0 shadow-none">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarImage src={`/api/one-pers/${company.id}.jpg`} />
                        <AvatarFallback>{company.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="text-lg">{company.name}</CardTitle>
                        <CardDescription className="text-sm">{company.industry}</CardDescription>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <Badge className={getStatusColor(company.status)}>
                        {company.status}
                      </Badge>
                      <Badge variant="outline" className={getStageColor(company.stage)}>
                        {company.stage}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="pt-0">
                  <div className="space-y-4">
                    <p className="text-sm text-gray-600 line-clamp-2">{company.description}</p>

                    {/* Performance Metrics */}
                    <div className="grid grid-cols-3 gap-4 text-sm">
                      <div className="text-center">
                        <div className="flex items-center justify-center gap-1">
                          <DollarSign className="w-3 h-3 text-green-500" />
                          <span className="font-semibold text-green-600">
                            ${(company.performance.revenue / 1000).toFixed(0)}K
                          </span>
                        </div>
                        <p className="text-xs text-gray-600">Revenue</p>
                      </div>
                      <div className="text-center">
                        <div className="flex items-center justify-center gap-1">
                          {getGrowthIcon(company.performance.growth)}
                          <span className={`font-semibold ${getGrowthColor(company.performance.growth)}`}>
                            {company.performance.growth}%
                          </span>
                        </div>
                        <p className="text-xs text-gray-600">Growth</p>
                      </div>
                      <div className="text-center">
                        <div className="flex items-center justify-center gap-1">
                          <Users className="w-3 h-3 text-blue-500" />
                          <span className="font-semibold text-blue-600">
                            {(company.performance.users / 1000).toFixed(0)}K
                          </span>
                        </div>
                        <p className="text-xs text-gray-600">Users</p>
                      </div>
                    </div>

                    {/* Investment Info */}
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-gray-600">Investment:</span>
                        <p className="font-medium">${(company.investmentAmount / 1000000).toFixed(2)}M</p>
                      </div>
                      <div>
                        <span className="text-gray-600">Valuation:</span>
                        <p className="font-medium">${(company.currentValuation / 1000000).toFixed(1)}M</p>
                      </div>
                      <div>
                        <span className="text-gray-600">Team Size:</span>
                        <p className="font-medium">{company.teamSize} members</p>
                      </div>
                      <div>
                        <span className="text-gray-600">Invested:</span>
                        <p className="font-medium">{new Date(company.investmentDate).toLocaleDateString()}</p>
                      </div>
                    </div>

                    {/* Milestones */}
                    <div>
                      <h4 className="text-sm font-medium text-gray-700 mb-2">Recent Milestones</h4>
                      <div className="flex flex-wrap gap-1">
                        {company.milestones.map((milestone, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">
                            <Target className="w-3 h-3 mr-1 text-green-500" />
                            {milestone}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2 pt-2">
                      <Button size="sm" className="flex-1">
                        <Eye className="w-4 h-4 mr-2" />
                        View Details
                      </Button>
                      <Button size="sm" variant="outline">
                        <MessageSquare className="w-4 h-4 mr-2" />
                        Contact
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {companies.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <Building className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No portfolio companies yet</h3>
            <p className="text-gray-600">Start building your portfolio by accepting founder applications</p>
          </motion.div>
        )}
      </div>
    </div>
  )
}