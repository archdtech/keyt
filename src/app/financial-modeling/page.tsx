"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Clock, Users, Video, Target, Search, Mic, Laptop, CalendarDays, Shield, BarChart3, BookOpen, Eye, TrendingUp, FileText, Building2, DollarSign, Users2, AlertTriangle, Globe, PieChart, LineChart, Target as TargetIcon, Compass, Lightbulb, Settings, Award, Handshake, TrendingDown, Activity, Zap, Cog, Gauge, ArrowUp, Rocket, Navigation, Sprout, Brain, Database, Filter, Download, Upload, RefreshCw, ChevronRight, Calculator, PiggyBank, Receipt, CreditCard, Banknote, TrendingUp as TrendingUpIcon, Wallet } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function FinancialModeling() {
  const [interest, setInterest] = useState<string | null>(null);
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const modelingServices = [
    {
      title: "Financial Planning & Analysis (FP&A)",
      description: "Comprehensive financial modeling for budgeting, forecasting, and strategic financial planning",
      duration: "4-6 weeks",
      price: "Starting at $25,000",
      deliverables: ["3-statement financial model", "Budget templates", "Forecasting framework", "KPI dashboard"]
    },
    {
      title: "Valuation Modeling",
      description: "Advanced valuation models including DCF, comparable company analysis, and precedent transactions",
      duration: "3-4 weeks",
      price: "Starting at $20,000", 
      deliverables: ["DCF model", "Trading comps", "Transaction comps", "Valuation report"]
    },
    {
      title: "M&A Financial Modeling",
      description: "Merger and acquisition modeling including accretion/dilution and synergy analysis",
      duration: "4-5 weeks",
      price: "Starting at $30,000",
      deliverables: ["M&A model", "Accretion/dilution analysis", "Synergy analysis", "Sensitivity analysis"]
    },
    {
      title: "LBO Modeling",
      description: "Leveraged buyout modeling for private equity and investment analysis",
      duration: "3-4 weeks",
      price: "Starting at $22,000",
      deliverables: ["LBO model", "Returns analysis", "Debt schedule", "Exit scenarios"]
    }
  ];

  const modelTypes = [
    {
      name: "3-Statement Models",
      description: "Integrated income statement, balance sheet, and cash flow statement",
      icon: <FileText className="w-6 h-6 text-red-600"/>
    },
    {
      name: "DCF Valuation", 
      description: "Discounted cash flow valuation with scenario analysis",
      icon: <Calculator className="w-6 h-6 text-red-600"/>
    },
    {
      name: "Budget & Forecast",
      description: "Operating budgets and financial forecasting models",
      icon: <TrendingUpIcon className="w-6 h-6 text-red-600"/>
    },
    {
      name: "Transaction Models",
      description: "M&A, LBO, and other transaction-specific models",
      icon: <Handshake className="w-6 h-6 text-red-600"/>
    }
  ];

  const caseStudies = [
    {
      company: "Private Equity Firm",
      challenge: "Complex LBO modeling for potential acquisition",
      solution: "Comprehensive LBO model with multiple financing scenarios",
      outcome: "Successful acquisition with 25% IRR projection, model used for investor presentations",
      timeline: "4-week engagement"
    },
    {
      company: "Tech Startup",
      challenge: "Series B fundraising and valuation",
      solution: "DCF and comparable company analysis with detailed financial projections",
      outcome: "Raised $50M at 3x previous valuation, investor confidence in financial projections",
      timeline: "3-week engagement"
    },
    {
      company: "Manufacturing Company",
      challenge: "Financial planning and budgeting process optimization",
      solution: "Comprehensive FP&A model with rolling forecasts and variance analysis",
      outcome: "Improved forecasting accuracy by 40%, streamlined budgeting process",
      timeline: "6-week engagement"
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
              <span className="text-white">Financial Modeling</span>
            </div>
            <div className="text-sm text-gray-400">
              Scale → Financial Planning
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pt-16 pb-10">
        <div className="grid gap-8 md:grid-cols-2 items-center">
          <div>
            <Badge className="rounded-2xl px-3 py-1 text-sm bg-red-600 text-white hover:bg-red-700">Financial Excellence</Badge>
            <h1 className="mt-4 text-4xl md:text-5xl font-semibold leading-tight">
              Financial Modeling & Analysis
            </h1>
            <p className="mt-4 text-lg text-gray-400 leading-relaxed">
              Sophisticated financial modeling solutions for strategic decision-making, valuation, and transaction support. Our models combine technical excellence with business insight to drive informed financial decisions.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Badge variant="secondary" className="px-3 py-1 bg-red-900/30 text-red-300 border-red-700">3-6 week engagements</Badge>
              <Badge variant="secondary" className="px-3 py-1 bg-red-900/30 text-red-300 border-red-700">Advanced Excel & Power BI</Badge>
              <Badge variant="secondary" className="px-3 py-1 bg-red-900/30 text-red-300 border-red-700">CFAs & Finance Experts</Badge>
            </div>
            <div className="mt-8 flex gap-3">
              <Button size="lg" className="rounded-2xl bg-red-600 hover:bg-red-700" onClick={() => setInterest("consultation")}>Schedule Consultation</Button>
              <Button size="lg" variant="outline" className="rounded-2xl border-red-600 text-red-600 hover:bg-red-50" onClick={() => setInterest("proposal")}>Request Proposal</Button>
              <Button size="lg" variant="outline" className="rounded-2xl border-red-600 text-red-600 hover:bg-red-50" onClick={() => window.open('/api/one-pagers/FINANCIAL_MODELING_ONE_PAGER.md', '_blank')}>Download One-Pager</Button>
            </div>
          </div>
          <div className="relative rounded-3xl border border-red-800 bg-gradient-to-br from-red-900/20 to-black p-6 shadow-lg">
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: <Calculator className="w-6 h-6 text-red-600"/>, title: "Precision Models", text: "Accurate financial calculations" },
                { icon: <TrendingUpIcon className="w-6 h-6 text-red-600"/>, title: "Strategic Insights", text: "Data-driven decisions" },
                { icon: <PiggyBank className="w-6 h-6 text-red-600"/>, title: "Value Creation", text: "Maximize financial outcomes" },
                { icon: <Wallet className="w-6 h-6 text-red-600"/>, title: "Investment Ready", text: "Professional grade models" },
              ].map((item, i) => (
                <Card key={i} className="rounded-2xl border-red-800 bg-black/50 hover:border-red-600 hover:shadow-md transition-all duration-200">
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

      {/* Modeling Services */}
      <section className="mx-auto max-w-6xl px-6 pb-12">
        <h2 className="text-2xl font-semibold text-white">Modeling Services</h2>
        <p className="mt-2 text-gray-400">Comprehensive financial modeling solutions for all your business needs</p>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {modelingServices.map((service, i) => (
            <Card key={i} className="rounded-2xl border-red-800 bg-black/50 hover:shadow-md transition-all duration-200 cursor-pointer" onClick={() => setSelectedService(service.title)}>
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg text-white">{service.title}</CardTitle>
                  <Badge variant="outline" className="border-red-700 text-red-300">{service.duration}</Badge>
                </div>
              </CardHeader>
              <CardContent className="text-sm text-gray-400 space-y-3">
                <p>{service.description}</p>
                <div>
                  <p className="font-medium text-white mb-2">Key Deliverables:</p>
                  <ul className="space-y-1">
                    {service.deliverables.map((deliverable, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0"/>
                        <span>{deliverable}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex items-center justify-between pt-2">
                  <span className="text-sm font-medium text-red-300">{service.price}</span>
                  <Button className="rounded-2xl bg-red-600 hover:bg-red-700 text-sm">Learn More</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Model Types */}
      <section className="mx-auto max-w-6xl px-6 pb-12">
        <h2 className="text-2xl font-semibold text-white">Model Types</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-4">
          {modelTypes.map((type, i) => (
            <Card key={i} className="rounded-2xl border-red-800 bg-black/50 hover:shadow-md transition-all duration-200">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2">
                  {type.icon}
                  <CardTitle className="text-lg text-white">{type.name}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="text-sm text-gray-400">
                {type.description}
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
            <Card key={i} className="rounded-2xl border-red-800 bg-black/50 hover:shadow-md transition-all duration-200">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-red-600"/>
                  <CardTitle className="text-base text-white">{study.company}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="text-sm text-gray-400 space-y-2">
                <p className="font-medium text-red-400">Challenge: {study.challenge}</p>
                <p className="text-red-300">Solution: {study.solution}</p>
                <p className="font-medium text-green-300">{study.outcome}</p>
                <p className="text-xs text-gray-500">{study.timeline}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="mx-auto max-w-6xl px-6 pb-12">
        <h2 className="text-2xl font-semibold text-white">Our Modeling Process</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-4">
          {[
            {
              step: "01",
              title: "Requirements",
              description: "Define model scope, assumptions, and key drivers"
            },
            {
              step: "02", 
              title: "Structure",
              description: "Design model architecture and calculation logic"
            },
            {
              step: "03",
              title: "Build",
              description: "Develop model with error checking and validation"
            },
            {
              step: "04",
              title: "Test & Refine",
              description: "Scenario analysis and model optimization"
            }
          ].map((step, i) => (
            <Card key={i} className="rounded-2xl border-red-800 bg-black/50 hover:shadow-md transition-all duration-200 text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
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