'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { 
  Mail, 
  Users, 
  Send,
  BarChart3,
  Eye,
  Edit,
  Plus,
  Calendar,
  TrendingUp,
  Target,
  Clock,
  CheckCircle,
  AlertCircle
} from 'lucide-react'

interface EmailCampaign {
  id: string
  name: string
  subject: string
  status: 'draft' | 'scheduled' | 'active' | 'completed' | 'paused'
  sentDate: string
  recipientCount: number
  openRate: number
  clickRate: number
  replyRate: number
  template: string
  description: string
}

export default function NurturingPage() {
  const [campaigns, setCampaigns] = useState<EmailCampaign[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedStatus, setSelectedStatus] = useState('all')

  useEffect(() => {
    fetchCampaigns()
  }, [])

  const fetchCampaigns = async () => {
    try {
      const response = await fetch('/api/email/campaigns')
      const data = await response.json()
      setCampaigns(data.campaigns || [])
    } catch (error) {
      console.error('Failed to fetch campaigns:', error)
    } finally {
      setLoading(false)
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'draft': return 'bg-gray-100 text-gray-800'
      case 'scheduled': return 'bg-blue-100 text-blue-800'
      case 'active': return 'bg-green-100 text-green-800'
      case 'completed': return 'bg-purple-100 text-purple-800'
      case 'paused': return 'bg-yellow-100 text-yellow-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getRateColor = (rate: number) => {
    if (rate >= 50) return 'text-green-600'
    if (rate >= 30) return 'text-yellow-600'
    return 'text-red-600'
  }

  const filteredCampaigns = campaigns.filter(campaign => {
    if (selectedStatus === 'all') return true
    return campaign.status === selectedStatus
  })

  const totalRecipients = campaigns.reduce((sum, c) => sum + c.recipientCount, 0)
  const avgOpenRate = campaigns.length > 0 ? campaigns.reduce((sum, c) => sum + c.openRate, 0) / campaigns.length : 0
  const avgClickRate = campaigns.length > 0 ? campaigns.reduce((sum, c) => sum + c.clickRate, 0) / campaigns.length : 0
  const totalReplies = campaigns.reduce((sum, c) => sum + Math.round(c.recipientCount * c.replyRate / 100), 0)

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
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Lead Nurturing</h1>
              <p className="text-gray-600">Automated email campaigns with AI-powered personalization</p>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" className="flex items-center gap-2">
                <BarChart3 className="w-4 h-4" />
                Analytics
              </Button>
              <Button className="flex items-center gap-2">
                <Plus className="w-4 h-4" />
                New Campaign
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Email Stats */}
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
                  <p className="text-sm text-gray-600">Total Campaigns</p>
                  <p className="text-2xl font-bold text-gray-900">{campaigns.length}</p>
                </div>
                <Mail className="w-8 h-8 text-blue-500" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Total Recipients</p>
                  <p className="text-2xl font-bold text-gray-900">{totalRecipients}</p>
                </div>
                <Users className="w-8 h-8 text-purple-500" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Avg Open Rate</p>
                  <p className="text-2xl font-bold text-green-600">{Math.round(avgOpenRate)}%</p>
                </div>
                <Eye className="w-8 h-8 text-green-500" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Total Replies</p>
                  <p className="text-2xl font-bold text-emerald-600">{totalReplies}</p>
                </div>
                <Send className="w-8 h-8 text-emerald-500" />
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6 mb-6"
        >
          <div className="flex gap-2">
            {['all', 'draft', 'scheduled', 'active', 'completed', 'paused'].map((status) => (
              <Button
                key={status}
                variant={selectedStatus === status ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedStatus(status)}
                className="capitalize"
              >
                {status} ({status === 'all' ? campaigns.length : campaigns.filter(c => c.status === status).length})
              </Button>
            ))}
          </div>
        </motion.div>

        {/* Campaigns Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6"
        >
          {filteredCampaigns.map((campaign, index) => (
            <motion.div
              key={campaign.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              whileHover={{ scale: 1.02 }}
              className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <Card className="border-0 shadow-none">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg">{campaign.name}</CardTitle>
                      <CardDescription className="text-sm">{campaign.description}</CardDescription>
                    </div>
                    <Badge className={getStatusColor(campaign.status)}>
                      {campaign.status}
                    </Badge>
                  </div>
                  <div className="mt-2">
                    <p className="text-sm font-medium text-gray-700">Subject: {campaign.subject}</p>
                  </div>
                </CardHeader>

                <CardContent className="pt-0">
                  <div className="space-y-4">
                    {/* Performance Metrics */}
                    <div className="grid grid-cols-3 gap-4 text-sm">
                      <div className="text-center">
                        <div className={`text-lg font-semibold ${getRateColor(campaign.openRate)}`}>
                          {campaign.openRate}%
                        </div>
                        <p className="text-xs text-gray-600">Open Rate</p>
                      </div>
                      <div className="text-center">
                        <div className={`text-lg font-semibold ${getRateColor(campaign.clickRate)}`}>
                          {campaign.clickRate}%
                        </div>
                        <p className="text-xs text-gray-600">Click Rate</p>
                      </div>
                      <div className="text-center">
                        <div className={`text-lg font-semibold ${getRateColor(campaign.replyRate)}`}>
                          {campaign.replyRate}%
                        </div>
                        <p className="text-xs text-gray-600">Reply Rate</p>
                      </div>
                    </div>

                    {/* Progress Bars */}
                    <div className="space-y-2">
                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-xs font-medium text-gray-700">Open Rate</span>
                          <span className="text-xs text-gray-600">{campaign.openRate}%</span>
                        </div>
                        <Progress value={campaign.openRate} className="h-1" />
                      </div>
                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-xs font-medium text-gray-700">Click Rate</span>
                          <span className="text-xs text-gray-600">{campaign.clickRate}%</span>
                        </div>
                        <Progress value={campaign.clickRate} className="h-1" />
                      </div>
                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-xs font-medium text-gray-700">Reply Rate</span>
                          <span className="text-xs text-gray-600">{campaign.replyRate}%</span>
                        </div>
                        <Progress value={campaign.replyRate} className="h-1" />
                      </div>
                    </div>

                    {/* Campaign Info */}
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-gray-600">Recipients:</span>
                        <p className="font-medium">{campaign.recipientCount}</p>
                      </div>
                      <div>
                        <span className="text-gray-600">Sent Date:</span>
                        <p className="font-medium">{campaign.sentDate}</p>
                      </div>
                      <div>
                        <span className="text-gray-600">Template:</span>
                        <p className="font-medium">{campaign.template}</p>
                      </div>
                      <div>
                        <span className="text-gray-600">Replies:</span>
                        <p className="font-medium">{Math.round(campaign.recipientCount * campaign.replyRate / 100)}</p>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2 pt-2">
                      <Button size="sm" className="flex-1">
                        <Eye className="w-4 h-4 mr-2" />
                        View Details
                      </Button>
                      <Button size="sm" variant="outline">
                        <Edit className="w-4 h-4 mr-2" />
                        Edit
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {filteredCampaigns.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <Mail className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No campaigns found</h3>
            <p className="text-gray-600">Create your first email campaign to start nurturing leads</p>
          </motion.div>
        )}
      </div>
    </div>
  )
}