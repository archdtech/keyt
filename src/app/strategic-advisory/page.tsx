"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Clock, Users, Video, Target, Search, Mic, Laptop, CalendarDays, Shield, BarChart3, BookOpen, Eye, TrendingUp, FileText, Building2, DollarSign, Users2, AlertTriangle, Globe, PieChart, LineChart, Target as TargetIcon, Compass, Lightbulb, Settings, Award, Handshake } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function StrategicAdvisory() {
  const [interest, setInterest] = useState<string | null>(null);
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const advisoryServices = [
    {
      title: "Business Strategy Development",
      description: "Comprehensive strategic planning to define vision, mission, and actionable roadmap for sustainable growth",
      duration: "4-6 weeks",
      price: "Custom pricing",
      deliverables: ["Strategic plan document", "Vision and mission framework", "Goal setting framework", "Implementation roadmap"]
    },
    {
      title: "Organizational Design",
      description: "Optimize organizational structure, roles, and processes to enhance efficiency and effectiveness",
      duration: "3-5 weeks", 
      price: "Custom pricing",
      deliverables: ["Organizational assessment", "Structure redesign", "Role definitions", "Process optimization"]
    },
    {
      title: "Change Management",
      description: "Guide organizations through transformation initiatives with structured change management approaches",
      duration: "6-12 weeks",
      price: "Custom pricing", 
      deliverables: ["Change strategy", "Communication plan", "Training programs", "Success metrics"]
    },
    {
      title: "Performance Optimization",
      description: "Enhance organizational and individual performance through targeted improvement initiatives",
      duration: "4-8 weeks",
      price: "Custom pricing",
      deliverables: ["Performance assessment", "Improvement roadmap", "KPI framework", "Monitoring system"]
    }
  ];

  const clientSuccess = [
    {
      company: "Fortune 500 Company",
      challenge: "Stagnant growth and market share decline",
      solution: "Comprehensive business strategy redesign and organizational restructuring",
      outcome: "Achieved 15% revenue growth and regained market leadership within 18 months",
      timeline: "6-month engagement"
    },
    {
      company: "Mid-sized Technology Firm", 
      challenge: "Rapid growth causing operational inefficiencies",
      solution: "Organizational redesign and process optimization",
      outcome: "Improved operational efficiency by 30%, reduced costs by 20%, maintained growth trajectory",
      timeline: "4-month engagement"
    },
    {
      company: "Family-owned Business",
      challenge: "Succession planning and modernization",
      solution: "Strategic advisory for transition and business transformation",
      outcome: "Successful leadership transition, 40% revenue increase, modernized operations",
      timeline: "8-month engagement"
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
              <span className="text-white">Strategic Advisory</span>
            </div>
            <div className="text-sm text-gray-400">
              Scale → Business Strategy
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pt-16 pb-10">
        <div className="grid gap-8 md:grid-cols-2 items-center">
          <div>
            <Badge className="rounded-2xl px-3 py-1 text-sm bg-indigo-600 text-white hover:bg-indigo-700">Strategic Guidance</Badge>
            <h1 className="mt-4 text-4xl md:text-5xl font-semibold leading-tight">
              Strategic Advisory
            </h1>
            <p className="mt-4 text-lg text-gray-400 leading-relaxed">
              Expert guidance on business strategy, operational improvement, and organizational development. Our advisory services help leaders navigate complex challenges and drive sustainable growth through strategic insights and practical solutions.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Badge variant="secondary" className="px-3 py-1 bg-indigo-900/30 text-indigo-300 border-indigo-700">4-12 week engagements</Badge>
              <Badge variant="secondary" className="px-3 py-1 bg-indigo-900/30 text-indigo-300 border-indigo-700">Business transformation</Badge>
              <Badge variant="secondary" className="px-3 py-1 bg-indigo-900/30 text-indigo-300 border-indigo-700">Leadership development</Badge>
            </div>
            <div className="mt-8 flex gap-3">
              <Button size="lg" className="rounded-2xl bg-indigo-600 hover:bg-indigo-700" onClick={() => setInterest("consultation")}>Schedule Consultation</Button>
              <Button size="lg" variant="outline" className="rounded-2xl border-indigo-600 text-indigo-600 hover:bg-indigo-50" onClick={() => setInterest("proposal")}>Request Proposal</Button>
              <Button size="lg" variant="outline" className="rounded-2xl border-indigo-600 text-indigo-600 hover:bg-indigo-50" onClick={() => window.open('/api/one-pagers/STRATEGIC_ADVISORY_ONE_PAGER.md', '_blank')}>Download One-Pager</Button>
            </div>
          </div>
          <div className="relative rounded-3xl border border-indigo-800 bg-gradient-to-br from-indigo-900/20 to-black p-6 shadow-lg">
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: <Lightbulb className="w-6 h-6 text-indigo-600"/>, title: "Strategic Insight", text: "Clear vision and direction" },
                { icon: <Settings className="w-6 h-6 text-indigo-600"/>, title: "Operational Excellence", text: "Optimized processes and structure" },
                { icon: <Award className="w-6 h-6 text-indigo-600"/>, title: "Performance Growth", text: "Sustainable business results" },
                { icon: <Handshake className="w-6 h-6 text-indigo-600"/>, title: "Partnership Approach", text: "Collaborative success journey" },
              ].map((item, i) => (
                <Card key={i} className="rounded-2xl border-indigo-800 bg-black/50 hover:border-indigo-600 hover:shadow-md transition-all duration-200">
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

      {/* Services Overview */}
      <section className="mx-auto max-w-6xl px-6 pb-12">
        <h2 className="text-2xl font-semibold text-white">Advisory Services</h2>
        <p className="mt-2 text-gray-400">Comprehensive strategic guidance to address your most critical business challenges</p>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {advisoryServices.map((service, i) => (
            <Card key={i} className="rounded-2xl border-indigo-800 bg-black/50 hover:shadow-md transition-all duration-200 cursor-pointer" onClick={() => setSelectedService(service.title)}>
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg text-white">{service.title}</CardTitle>
                  <Badge variant="outline" className="border-indigo-700 text-indigo-300">{service.duration}</Badge>
                </div>
              </CardHeader>
              <CardContent className="text-sm text-gray-400 space-y-3">
                <p>{service.description}</p>
                <div>
                  <p className="font-medium text-white mb-2">Key Deliverables:</p>
                  <ul className="space-y-1">
                    {service.deliverables.map((deliverable, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-indigo-600 mt-0.5 flex-shrink-0"/>
                        <span>{deliverable}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex items-center justify-between pt-2">
                  <span className="text-sm font-medium text-indigo-300">{service.price}</span>
                  <Button className="rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-sm">Learn More</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Advisory Process */}
      <section className="mx-auto max-w-6xl px-6 pb-12">
        <h2 className="text-2xl font-semibold text-white">Our Advisory Process</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-4">
          {[
            {
              step: "01",
              title: "Assessment",
              description: "Comprehensive evaluation of current state, challenges, and opportunities"
            },
            {
              step: "02", 
              title: "Strategy",
              description: "Develop tailored strategic recommendations and action plans"
            },
            {
              step: "03",
              title: "Implementation",
              description: "Support execution of initiatives with hands-on guidance"
            },
            {
              step: "04",
              title: "Optimization",
              description: "Monitor results and continuously refine strategies for maximum impact"
            }
          ].map((step, i) => (
            <Card key={i} className="rounded-2xl border-indigo-800 bg-black/50 hover:shadow-md transition-all duration-200 text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Client Success */}
      <section className="mx-auto max-w-6xl px-6 pb-12">
        <h2 className="text-2xl font-semibold text-white">Client Success Stories</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {clientSuccess.map((story, i) => (
            <Card key={i} className="rounded-2xl border-indigo-800 bg-black/50 hover:shadow-md transition-all duration-200">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-indigo-600"/>
                  <CardTitle className="text-base text-white">{story.company}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="text-sm text-gray-400 space-y-2">
                <p className="font-medium text-red-400">Challenge: {story.challenge}</p>
                <p className="text-indigo-400">Solution: {story.solution}</p>
                <p className="font-medium text-green-400">{story.outcome}</p>
                <p className="text-xs text-gray-500">{story.timeline}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Focus Areas */}
      <section className="mx-auto max-w-6xl px-6 pb-12">
        <h2 className="text-2xl font-semibold text-white">Focus Areas</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          <Card className="rounded-2xl border-indigo-800 bg-black/50 hover:shadow-md transition-all duration-200">
            <CardHeader className="pb-2"><div className="flex items-center gap-2"><TargetIcon className="w-5 h-5 text-indigo-600"/><CardTitle className="text-lg text-white">Business Strategy</CardTitle></div></CardHeader>
            <CardContent className="text-sm text-gray-400 space-y-2">
              <p>• Strategic planning and visioning</p>
              <p>• Market positioning and differentiation</p>
              <p>• Growth strategy development</p>
              <p>• Competitive advantage creation</p>
              <p>• Business model innovation</p>
            </CardContent>
          </Card>
          <Card className="rounded-2xl border-indigo-800 bg-black/50 hover:shadow-md transition-all duration-200">
            <CardHeader className="pb-2"><div className="flex items-center gap-2"><Users2 className="w-5 h-5 text-indigo-600"/><CardTitle className="text-lg text-white">Organizational Development</CardTitle></div></CardHeader>
            <CardContent className="text-sm text-gray-400 space-y-2">
              <p>• Organizational design and structure</p>
              <p>• Leadership development and coaching</p>
              <p>• Team effectiveness and collaboration</p>
              <p>• Culture transformation</p>
              <p>• Talent management strategy</p>
            </CardContent>
          </Card>
          <Card className="rounded-2xl border-indigo-800 bg-black/50 hover:shadow-md transition-all duration-200">
            <CardHeader className="pb-2"><div className="flex items-center gap-2"><TrendingUp className="w-5 h-5 text-indigo-600"/><CardTitle className="text-lg text-white">Operational Excellence</CardTitle></div></CardHeader>
            <CardContent className="text-sm text-gray-400 space-y-2">
              <p>• Process optimization and redesign</p>
              <p>• Performance management systems</p>
              <p>• Change management and transformation</p>
              <p>• Quality improvement initiatives</p>
              <p>• Cost optimization strategies</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
}