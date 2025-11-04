"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Clock, Users, Video, Target, Search, Mic, Laptop, CalendarDays, Shield, BarChart3, BookOpen, Eye, TrendingUp, FileText, Building2, DollarSign, Users2, AlertTriangle, Globe, PieChart, LineChart, Target as TargetIcon, Compass, Lightbulb, Settings, Award, Handshake, TrendingDown, Activity, Zap, Cog, Gauge, ArrowUp, Rocket, Navigation, Sprout, Brain, Database, Filter, Download, Upload, RefreshCw, ChevronRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function MarketAnalysis() {
  const [interest, setInterest] = useState<string | null>(null);
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const analysisServices = [
    {
      title: "Market Sizing & Opportunity Assessment",
      description: "Comprehensive analysis of market size, growth potential, and opportunity landscape for strategic decision-making",
      duration: "3-4 weeks",
      price: "Starting at $15,000",
      deliverables: ["TAM/SAM/SOM analysis", "Growth projections", "Competitive landscape", "Opportunity matrix"]
    },
    {
      title: "Competitive Intelligence",
      description: "Deep-dive analysis of competitors, their strategies, strengths, weaknesses, and market positioning",
      duration: "2-3 weeks",
      price: "Starting at $12,000", 
      deliverables: ["Competitor profiles", "SWOT analysis", "Positioning map", "Strategic recommendations"]
    },
    {
      title: "Customer Insights & Segmentation",
      description: "Advanced customer research to identify segments, behaviors, needs, and untapped opportunities",
      duration: "4-6 weeks",
      price: "Starting at $20,000",
      deliverables: ["Customer personas", "Segmentation framework", "Journey mapping", "Insights report"]
    },
    {
      title: "Industry Trend Analysis",
      description: "Forward-looking analysis of industry trends, disruptions, and emerging opportunities",
      duration: "2-3 weeks",
      price: "Starting at $10,000",
      deliverables: ["Trend report", "Impact assessment", "Scenario planning", "Strategic implications"]
    }
  ];

  const methodologies = [
    {
      name: "Primary Research",
      description: "Direct customer interviews, surveys, and focus groups",
      icon: <Users className="w-6 h-6 text-green-600"/>
    },
    {
      name: "Secondary Research", 
      description: "Comprehensive analysis of existing reports, databases, and publications",
      icon: <Database className="w-6 h-6 text-green-600"/>
    },
    {
      name: "Data Analytics",
      description: "Advanced statistical analysis and predictive modeling",
      icon: <BarChart3 className="w-6 h-6 text-green-600"/>
    },
    {
      name: "Market Modeling",
      description: "Sophisticated market sizing and forecasting models",
      icon: <LineChart className="w-6 h-6 text-green-600"/>
    }
  ];

  const caseStudies = [
    {
      company: "SaaS Startup",
      challenge: "Unclear market size and competitive positioning",
      solution: "Comprehensive market sizing and competitive intelligence analysis",
      outcome: "Identified $2.3B TAM, secured Series A funding, refined positioning",
      timeline: "6-week engagement"
    },
    {
      company: "Retail Chain",
      challenge: "Declining market share and changing customer preferences",
      solution: "Customer segmentation and trend analysis",
      outcome: "Identified 3 high-value segments, 15% revenue increase in 12 months",
      timeline: "8-week engagement"
    },
    {
      company: "Manufacturing Company",
      challenge: "Entering new geographic markets",
      solution: "Market opportunity assessment and entry strategy",
      outcome: "Successfully entered 2 new markets, 25% revenue growth",
      timeline: "10-week engagement"
    }
  ];

  return (
    <div className="bg-black text-white">
      <Header />
      
      {/* Navigation Breadcrumb */}
      <nav className="bg-black border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Link href="/scale" className="text-gray-400 hover:text-white transition-colors">
                ← Back to Scale Services
              </Link>
              <span className="text-gray-400">/</span>
              <span className="text-white">Market Analysis</span>
            </div>
            <div className="text-sm text-gray-400">
              Scale → Market Intelligence
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pt-16 pb-10">
        <div className="grid gap-8 md:grid-cols-2 items-center">
          <div>
            <Badge className="rounded-2xl px-3 py-1 text-sm bg-green-600 text-white hover:bg-green-700">Market Intelligence</Badge>
            <h1 className="mt-4 text-4xl md:text-5xl font-semibold leading-tight">
              Market Analysis & Intelligence
            </h1>
            <p className="mt-4 text-lg text-gray-400 leading-relaxed">
              Data-driven market insights to inform strategic decisions, identify growth opportunities, and gain competitive advantage. Our comprehensive analysis combines cutting-edge research methodologies with deep industry expertise.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Badge variant="secondary" className="px-3 py-1 bg-green-900/30 text-green-300 border-green-700">2-6 week engagements</Badge>
              <Badge variant="secondary" className="px-3 py-1 bg-green-900/30 text-green-300 border-green-700">Data-driven insights</Badge>
              <Badge variant="secondary" className="px-3 py-1 bg-green-900/30 text-green-300 border-green-700">Strategic recommendations</Badge>
            </div>
            <div className="mt-8 flex gap-3">
              <Button size="lg" className="rounded-2xl bg-green-600 hover:bg-green-700" onClick={() => setInterest("consultation")}>Schedule Consultation</Button>
              <Button size="lg" variant="outline" className="rounded-2xl border-green-600 text-green-600 hover:bg-green-50" onClick={() => setInterest("proposal")}>Request Proposal</Button>
              <Button size="lg" variant="outline" className="rounded-2xl border-green-600 text-green-600 hover:bg-green-50" onClick={() => window.open('/api/one-pagers/MARKET_ANALYSIS_ONE_PAGER.md', '_blank')}>Download One-Pager</Button>
            </div>
          </div>
          <div className="relative rounded-3xl border border-green-800 bg-gradient-to-br from-green-900/20 to-black p-6 shadow-lg">
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: <Search className="w-6 h-6 text-green-600"/>, title: "Deep Insights", text: "Comprehensive market intelligence" },
                { icon: <TrendingUp className="w-6 h-6 text-green-600"/>, title: "Growth Opportunities", text: "Identify untapped potential" },
                { icon: <Target className="w-6 h-6 text-green-600"/>, title: "Strategic Focus", text: "Data-driven decision making" },
                { icon: <Globe className="w-6 h-6 text-green-600"/>, title: "Market Scope", text: "Global and local analysis" },
              ].map((item, i) => (
                <Card key={i} className="rounded-2xl border-green-800 bg-black/50 hover:border-green-600 hover:shadow-md transition-all duration-200">
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-2 text-gray-300">{item.icon}<CardTitle className="text-base font-medium">{item.title}</CardTitle></div>
                  </CardHeader>
                  <CardContent className="text-sm text-gray-400">{item.text}</CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Analysis Services */}
      <section className="mx-auto max-w-6xl px-6 pb-12">
        <h2 className="text-2xl font-semibold text-white">Analysis Services</h2>
        <p className="mt-2 text-gray-400">Comprehensive market research and intelligence solutions</p>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {analysisServices.map((service, i) => (
            <Card key={i} className="rounded-2xl border-green-800 bg-black/50 hover:shadow-md transition-all duration-200 cursor-pointer" onClick={() => setSelectedService(service.title)}>
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg text-white">{service.title}</CardTitle>
                  <Badge variant="outline" className="border-green-700 text-green-300">{service.duration}</Badge>
                </div>
              </CardHeader>
              <CardContent className="text-sm text-gray-400 space-y-3">
                <p>{service.description}</p>
                <div>
                  <p className="font-medium text-white mb-2">Key Deliverables:</p>
                  <ul className="space-y-1">
                    {service.deliverables.map((deliverable, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0"/>
                        <span>{deliverable}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex items-center justify-between pt-2">
                  <span className="text-sm font-medium text-green-300">{service.price}</span>
                  <Button className="rounded-2xl bg-green-600 hover:bg-green-700 text-sm">Learn More</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Methodologies */}
      <section className="mx-auto max-w-6xl px-6 pb-12">
        <h2 className="text-2xl font-semibold text-white">Our Methodologies</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-4">
          {methodologies.map((method, i) => (
            <Card key={i} className="rounded-2xl border-green-800 bg-black/50 hover:shadow-md transition-all duration-200">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2">
                  {method.icon}
                  <CardTitle className="text-lg text-white">{method.name}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="text-sm text-gray-400">
                {method.description}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Case Studies */}
      <section className="mx-auto max-w-6xl px-6 pb-12">
        <h2 className="text-2xl font-semibold text-white">Success Stories</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {caseStudies.map((study, i) => (
            <Card key={i} className="rounded-2xl border-green-800 bg-black/50 hover:shadow-md transition-all duration-200">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-green-600"/>
                  <CardTitle className="text-base text-white">{study.company}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="text-sm text-gray-400 space-y-2">
                <p className="font-medium text-red-400">Challenge: {study.challenge}</p>
                <p className="text-green-400">Solution: {study.solution}</p>
                <p className="font-medium text-green-300">{study.outcome}</p>
                <p className="text-xs text-gray-500">{study.timeline}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="mx-auto max-w-6xl px-6 pb-12">
        <h2 className="text-2xl font-semibold text-white">Our Analysis Process</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-4">
          {[
            {
              step: "01",
              title: "Discovery",
              description: "Understand objectives, scope, and key questions"
            },
            {
              step: "02", 
              title: "Research",
              description: "Conduct primary and secondary research"
            },
            {
              step: "03",
              title: "Analysis",
              description: "Analyze data and extract actionable insights"
            },
            {
              step: "04",
              title: "Recommendations",
              description: "Provide strategic recommendations and action plans"
            }
          ].map((step, i) => (
            <Card key={i} className="rounded-2xl border-green-800 bg-black/50 hover:shadow-md transition-all duration-200 text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}