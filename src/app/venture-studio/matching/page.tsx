'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { 
  Brain, 
  Users, 
  Target, 
  Star,
  TrendingUp,
  Search,
  Filter,
  Eye,
  MessageSquare,
  CheckCircle,
  Calendar,
  AlertCircle
} from 'lucide-react'

interface FounderMatch {
  id: string
  founderName: string
  companyName: string
  matchScore: number
  keyStrengths: string[]
  gaps: string[]
  status: 'reviewing' | 'contacted' | 'interviewing' | 'accepted' | 'rejected'
  industry: string
  stage: string
  location: string
  lastActive: string
}

export default function MatchingPage() {
  const [matches, setMatches] = useState<FounderMatch[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedFilter, setSelectedFilter] = useState('all')

  useEffect(() => {
    fetchMatches()
  }, [])

  const fetchMatches = async () => {
    try {
      const response = await fetch('/api/intelligent-matching/top-matches')
      const data = await response.json()
      setMatches(data.matches || [])
    } catch (error) {
      console.error('Failed to fetch matches:', error)
    } finally {
      setLoading(false)
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'reviewing': return 'bg-blue-100 text-blue-800'
      case 'contacted': return 'bg-purple-100 text-purple-800'
      case 'interviewing': return 'bg-orange-100 text-orange-800'
      case 'accepted': return 'bg-green-100 text-green-800'
      case 'rejected': return 'bg-red-100 text-red-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-600'
    if (score >= 80) return 'text-blue-600'
    if (score >= 70) return 'text-yellow-600'
    return 'text-red-600'
  }

  const filteredMatches = matches.filter(match => {
    if (selectedFilter === 'all') return true
    return match.status === selectedFilter
  })

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
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Intelligent Matching</h1>
              <p className="text-gray-600">AI-powered founder-company compatibility analysis</p>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" className="flex items-center gap-2">
                <Filter className="w-4 h-4" />
                Filters
              </Button>
              <Button className="flex items-center gap-2">
                <Brain className="w-4 h-4" />
                Run Analysis
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Stats Cards */}
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
                  <p className="text-sm text-gray-600">Total Matches</p>
                  <p className="text-2xl font-bold text-gray-900">{matches.length}</p>
                </div>
                <Users className="w-8 h-8 text-blue-500" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Avg Score</p>
                  <p className="text-2xl font-bold text-green-600">
                    {matches.length > 0 ? Math.round(matches.reduce((acc, m) => acc + m.matchScore, 0) / matches.length) : 0}%
                  </p>
                </div>
                <Target className="w-8 h-8 text-green-500" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Interviewing</p>
                  <p className="text-2xl font-bold text-purple-600">
                    {matches.filter(m => m.status === 'interviewing').length}
                  </p>
                </div>
                <Calendar className="w-8 h-8 text-purple-500" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Accepted</p>
                  <p className="text-2xl font-bold text-emerald-600">
                    {matches.filter(m => m.status === 'accepted').length}
                  </p>
                </div>
                <CheckCircle className="w-8 h-8 text-emerald-500" />
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
            {['all', 'reviewing', 'contacted', 'interviewing', 'accepted', 'rejected'].map((filter) => (
              <Button
                key={filter}
                variant={selectedFilter === filter ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedFilter(filter)}
                className="capitalize"
              >
                {filter} ({filter === 'all' ? matches.length : matches.filter(m => m.status === filter).length})
              </Button>
            ))}
          </div>
        </motion.div>

        {/* Matches Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6"
        >
          {filteredMatches.map((match, index) => (
            <motion.div
              key={match.id}
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
                        <AvatarImage src={`/api/one-pers/${match.id}.jpg`} />
                        <AvatarFallback>{match.founderName.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="text-lg">{match.founderName}</CardTitle>
                        <CardDescription className="text-sm">{match.companyName}</CardDescription>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <Badge className={getStatusColor(match.status)}>
                        {match.status}
                      </Badge>
                      <div className={`text-2xl font-bold ${getScoreColor(match.matchScore)}`}>
                        {match.matchScore}%
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="pt-0">
                  <div className="space-y-4">
                    {/* Match Score Progress */}
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-gray-700">Compatibility Score</span>
                        <span className={`text-sm font-semibold ${getScoreColor(match.matchScore)}`}>
                          {match.matchScore}%
                        </span>
                      </div>
                      <Progress value={match.matchScore} className="h-2" />
                    </div>

                    {/* Key Strengths */}
                    <div>
                      <h4 className="text-sm font-medium text-gray-700 mb-2">Key Strengths</h4>
                      <div className="flex flex-wrap gap-1">
                        {match.keyStrengths.map((strength, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">
                            <Star className="w-3 h-3 mr-1 text-yellow-500" />
                            {strength}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Gaps */}
                    {match.gaps && match.gaps.length > 0 && (
                      <div>
                        <h4 className="text-sm font-medium text-gray-700 mb-2">Areas for Development</h4>
                        <div className="flex flex-wrap gap-1">
                          {match.gaps.map((gap, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs">
                              {gap}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Additional Info */}
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-gray-600">Industry:</span>
                        <p className="font-medium">{match.industry}</p>
                      </div>
                      <div>
                        <span className="text-gray-600">Stage:</span>
                        <p className="font-medium">{match.stage}</p>
                      </div>
                      <div>
                        <span className="text-gray-600">Location:</span>
                        <p className="font-medium">{match.location}</p>
                      </div>
                      <div>
                        <span className="text-gray-600">Last Active:</span>
                        <p className="font-medium">{match.lastActive}</p>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2 pt-2">
                      <Button size="sm" className="flex-1">
                        <Eye className="w-4 h-4 mr-2" />
                        View Profile
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

        {filteredMatches.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <AlertCircle className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No matches found</h3>
            <p className="text-gray-600">Try adjusting your filter criteria or run a new analysis</p>
          </motion.div>
        )}
      </div>
    </div>
  )
}