"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Clock, Users, Video, Target, Search, Mic, Laptop, CalendarDays, Shield, BarChart3, BookOpen, Eye, TrendingUp, FileText, Building2, DollarSign, Users2, AlertTriangle, Globe, PieChart, LineChart, Target as TargetIcon, Compass, Lightbulb, Settings, Award, Handshake, TrendingDown, Activity, Zap, Cog, Gauge, ArrowUp, Rocket, Navigation, Sprout, Brain, Database, Filter, Download, Upload, RefreshCw, ChevronRight, Search as SearchIcon, FileSearch, ClipboardCheck, Scale as ScaleIcon, Briefcase, Building, Store, ShoppingCart, UserCheck, MapPin, Mail, Phone } from "lucide-react";

export default function CommercialDueDiligence() {
  const [interest, setInterest] = useState<string | null>(null);
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const diligenceServices = [
    {
      title: "Buy-Side Due Diligence",
      description: "Comprehensive commercial due diligence for acquisitions, investments, and partnerships to validate business assumptions and identify risks",
      duration: "4-6 weeks",
      price: "Starting at $40,000",
      deliverables: ["Market assessment", "Customer analysis", "Competitive landscape", "Risk register"]
    },
    {
      title: "Sell-Side Preparation",
      description: "Preparation of commercial due diligence materials and quality of earnings analysis to maximize transaction value",
      duration: "3-5 weeks",
      price: "Starting at $35,000", 
      deliverables: ["VDR preparation", "Commercial narrative", "Growth story", "Value drivers"]
    },
    {
      title: "Market Entry Due Diligence",
      description: "Comprehensive analysis for new market entry including regulatory, competitive, and operational considerations",
      duration: "3-4 weeks",
      price: "Starting at $30,000",
      deliverables: ["Market feasibility", "Entry strategy", "Risk assessment", "Implementation roadmap"]
    },
    {
      title: "Partnership Due Diligence",
      description: "Thorough evaluation of potential partners, joint ventures, and strategic alliances",
      duration: "2-3 weeks",
      price: "Starting at $25,000",
      deliverables: ["Partner assessment", "Synergy analysis", "Risk evaluation", "Partnership structure"]
    }
  ];

  const diligenceAreas = [
    {
      name: "Market Analysis",
      description: "Market size, growth trends, and competitive dynamics",
      icon: <Globe className="w-6 h-6 text-blue-600"/>
    },
    {
      name: "Customer Due Diligence", 
      description: "Customer base analysis, concentration, and satisfaction",
      icon: <Users className="w-6 h-6 text-blue-600"/>
    },
    {
      name: "Commercial Operations",
      description: "Sales processes, pricing, and go-to-market strategy",
      icon: <Target className="w-6 h-6 text-blue-600"/>
    },
    {
      name: "Financial Projections",
      description: "Validation of financial assumptions and growth drivers",
      icon: <TrendingUp className="w-6 h-6 text-blue-600"/>
    }
  ];

  const caseStudies = [
    {
      company: "Private Equity Firm",
      challenge: "Due diligence for $100M manufacturing acquisition",
      solution: "Comprehensive commercial due diligence including market analysis and customer validation",
      outcome: "Identified $15M synergies, deal completed with adjusted valuation, successful integration",
      timeline: "5-week engagement"
    },
    {
      company: "Venture Capital",
      challenge: "Pre-investment due diligence for SaaS startup",
      solution: "Market sizing, customer analysis, and competitive positioning assessment",
      outcome: "Investment proceeded with refined valuation, company achieved 3x growth in 2 years",
      timeline: "3-week engagement"
    },
    {
      company: "Corporate Development",
      challenge: "Market entry due diligence for European expansion",
      solution: "Comprehensive market analysis and regulatory assessment",
      outcome: "Successful market entry with localized strategy, 20% market share in 18 months",
      timeline: "4-week engagement"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="mx-auto max-w-6xl px-6 pt-6">
        <div className="flex justify-between items-center">
          <div className="text-xl font-semibold text-white">Keyteller Keyteller</div>
          <div className="flex gap-2">
            <Button variant="ghost" className="text-gray-400 hover:text-purple-600 text-sm px-3 py-1" onClick={() => window.location.href = '/'}>Workshops</Button>
            <Button variant="ghost" className="text-gray-400 hover:text-teal-600 text-sm px-3 py-1" onClick={() => window.location.href = '/mastermind'}>ThinkTank</Button>
            <Button variant="ghost" className="text-gray-400 hover:text-orange-600 text-sm px-3 py-1" onClick={() => window.location.href = '/product-discovery'}>Product</Button>
            <Button variant="ghost" className="text-gray-400 hover:text-blue-600 text-sm px-3 py-1" onClick={() => window.location.href = '/commercial-due-diligence'}>Due Diligence</Button>
            <Button variant="ghost" className="text-gray-400 hover:text-green-600 text-sm px-3 py-1" onClick={() => window.location.href = '/market-analysis'}>Market</Button>
            <Button variant="ghost" className="text-gray-400 hover:text-indigo-600 text-sm px-3 py-1" onClick={() => window.location.href = '/strategic-advisory'}>Advisory</Button>
            <Button variant="ghost" className="text-gray-400 hover:text-red-600 text-sm px-3 py-1" onClick={() => window.location.href = '/financial-modeling'}>Financial</Button>
            <Button variant="ghost" className="text-gray-400 hover:text-yellow-600 text-sm px-3 py-1" onClick={() => window.location.href = '/operational-excellence'}>Operations</Button>
            <Button variant="ghost" className="text-gray-400 hover:text-pink-600 text-sm px-3 py-1" onClick={() => window.location.href = '/growth-strategy'}>Growth</Button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pt-16 pb-10">
        <div className="grid gap-8 md:grid-cols-2 items-center">
          <div>
            <Badge className="rounded-2xl px-3 py-1 text-sm bg-blue-600 text-white hover:bg-blue-700">Due Diligence</Badge>
            <h1 className="mt-4 text-4xl md:text-5xl font-semibold leading-tight">
              Commercial Due Diligence
            </h1>
            <p className="mt-4 text-lg text-gray-400 leading-relaxed">
              Rigorous commercial due diligence programs to validate business assumptions, identify risks, and unlock value in transactions. Our comprehensive approach combines deep industry expertise with analytical rigor.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Badge variant="secondary" className="px-3 py-1 bg-blue-900/30 text-blue-300 border-blue-700">2-6 week engagements</Badge>
              <Badge variant="secondary" className="px-3 py-1 bg-blue-900/30 text-blue-300 border-blue-700">M&A specialists</Badge>
              <Badge variant="secondary" className="px-3 py-1 bg-blue-900/30 text-blue-300 border-blue-700">Risk mitigation</Badge>
            </div>
            <div className="mt-8 flex gap-3">
              <Button size="lg" className="rounded-2xl bg-blue-600 hover:bg-blue-700" onClick={() => setInterest("consultation")}>Schedule Consultation</Button>
              <Button size="lg" variant="outline" className="rounded-2xl border-blue-600 text-blue-600 hover:bg-blue-50" onClick={() => setInterest("proposal")}>Request Proposal</Button>
              <Button size="lg" variant="outline" className="rounded-2xl border-blue-600 text-blue-600 hover:bg-blue-50" onClick={() => window.open('/api/one-pagers/COMMERCIAL_DILIGENCE_ONE_PAGER.md', '_blank')}>Download One-Pager</Button>
            </div>
          </div>
          <div className="relative rounded-3xl border border-blue-800 bg-gradient-to-br from-blue-900/20 to-black p-6 shadow-lg">
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: <SearchIcon className="w-6 h-6 text-blue-600"/>, title: "Deep Analysis", text: "Thorough investigation" },
                { icon: <Shield className="w-6 h-6 text-blue-600"/>, title: "Risk Assessment", text: "Identify and mitigate risks" },
                { icon: <ScaleIcon className="w-6 h-6 text-blue-600"/>, title: "Value Validation", text: "Confirm business value" },
                { icon: <ClipboardCheck className="w-6 h-6 text-blue-600"/>, title: "Due Diligence", text: "Professional standards" },
              ].map((item, i) => (
                <Card key={i} className="rounded-2xl border-blue-800 bg-black/50 hover:border-blue-600 hover:shadow-md transition-all duration-200">
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

      {/* Diligence Services */}
      <section className="mx-auto max-w-6xl px-6 pb-12">
        <h2 className="text-2xl font-semibold text-white">Due Diligence Services</h2>
        <p className="mt-2 text-gray-400">Comprehensive due diligence solutions for all transaction types</p>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {diligenceServices.map((service, i) => (
            <Card key={i} className="rounded-2xl border-blue-800 bg-black/50 hover:shadow-md transition-all duration-200 cursor-pointer" onClick={() => setSelectedService(service.title)}>
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg text-white">{service.title}</CardTitle>
                  <Badge variant="outline" className="border-blue-700 text-blue-300">{service.duration}</Badge>
                </div>
              </CardHeader>
              <CardContent className="text-sm text-gray-400 space-y-3">
                <p>{service.description}</p>
                <div>
                  <p className="font-medium text-white mb-2">Key Deliverables:</p>
                  <ul className="space-y-1">
                    {service.deliverables.map((deliverable, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0"/>
                        <span>{deliverable}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex items-center justify-between pt-2">
                  <span className="text-sm font-medium text-blue-300">{service.price}</span>
                  <Button className="rounded-2xl bg-blue-600 hover:bg-blue-700 text-sm">Learn More</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Diligence Areas */}
      <section className="mx-auto max-w-6xl px-6 pb-12">
        <h2 className="text-2xl font-semibold text-white">Due Diligence Areas</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-4">
          {diligenceAreas.map((area, i) => (
            <Card key={i} className="rounded-2xl border-blue-800 bg-black/50 hover:shadow-md transition-all duration-200">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2">
                  {area.icon}
                  <CardTitle className="text-lg text-white">{area.name}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="text-sm text-gray-400">
                {area.description}
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
            <Card key={i} className="rounded-2xl border-blue-800 bg-black/50 hover:shadow-md transition-all duration-200">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-blue-600"/>
                  <CardTitle className="text-base text-white">{study.company}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="text-sm text-gray-400 space-y-2">
                <p className="font-medium text-red-400">Challenge: {study.challenge}</p>
                <p className="text-blue-300">Solution: {study.solution}</p>
                <p className="font-medium text-green-300">{study.outcome}</p>
                <p className="text-xs text-gray-500">{study.timeline}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="mx-auto max-w-6xl px-6 pb-12">
        <h2 className="text-2xl font-semibold text-white">Due Diligence Process</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-4">
          {[
            {
              step: "01",
              title: "Scoping",
              description: "Define diligence scope and key areas of focus"
            },
            {
              step: "02", 
              title: "Investigation",
              description: "Conduct comprehensive research and analysis"
            },
            {
              step: "03",
              title: "Validation",
              description: "Verify assumptions and identify risks"
            },
            {
              step: "04",
              title: "Reporting",
              description: "Deliver findings and recommendations"
            }
          ].map((step, i) => (
            <Card key={i} className="rounded-2xl border-blue-800 bg-black/50 hover:shadow-md transition-all duration-200 text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Footer / CTA */}
      <footer className="mx-auto max-w-6xl px-6 pb-20">
        <Card className="rounded-3xl border-blue-800 bg-black/50">
          <CardContent className="p-6 md:p-8">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="text-xl font-semibold text-white">Ensure Transaction Success</h3>
                <p className="mt-2 text-sm text-gray-400 leading-relaxed">Protect your investment with comprehensive commercial due diligence. Our expertise identifies risks and opportunities to maximize transaction value and ensure successful outcomes.</p>
                <ul className="mt-3 text-sm text-gray-400 list-disc pl-5 space-y-1">
                  <li>Comprehensive risk assessment</li>
                  <li>Market and customer validation</li>
                  <li>Financial assumption testing</li>
                  <li>Strategic fit analysis</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-blue-800 p-4 bg-blue-900/20">
                <p className="text-sm font-medium text-white">Due Diligence Benefits</p>
                <ul className="mt-2 text-sm text-gray-400 list-disc pl-5 space-y-1">
                  <li>Risk mitigation and avoidance</li>
                  <li>Value validation and enhancement</li>
                  <li>Informed decision making</li>
                  <li>Transaction optimization</li>
                </ul>
              </div>
            </div>
            <div className="mt-6 flex gap-3">
              <Button className="rounded-2xl bg-blue-600 hover:bg-blue-700" onClick={() => setInterest("start")}>Start Due Diligence</Button>
              <Button variant="outline" className="rounded-2xl border-blue-600 text-blue-600 hover:bg-blue-50" onClick={() => setInterest("contact")}>Contact Us</Button>
            </div>
          </CardContent>
        </Card>
      </footer>
    </div>
  );
}