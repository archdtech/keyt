"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Clock, Users, Video, Target, Search, Mic, Laptop, CalendarDays, Shield, BarChart3, BookOpen, Eye, TrendingUp, FileText, Building2, DollarSign, Users2, AlertTriangle, Globe, PieChart, LineChart, Target as TargetIcon, Compass, Lightbulb, Settings, Award, Handshake, TrendingDown, Activity, Zap, Cog, Gauge, ArrowUp, Rocket, Navigation, Sprout, Brain, Database, Filter, Download, Upload, RefreshCw, ChevronRight, Wrench, Factory, Package, Truck, ClipboardList, Workflow, Timer, Layers, GitBranch, Archive } from "lucide-react";

export default function OperationalExcellence() {
  const [interest, setInterest] = useState<string | null>(null);
  const [selectedProgram, setSelectedProgram] = useState<string | null>(null);

  const excellencePrograms = [
    {
      title: "Process Optimization & Automation",
      description: "Comprehensive program to streamline operations, eliminate waste, and implement automation technologies for maximum efficiency",
      duration: "8-12 weeks",
      price: "Starting at $35,000",
      deliverables: ["Process maps", "Automation roadmap", "KPI framework", "Implementation plan"]
    },
    {
      title: "Supply Chain Excellence",
      description: "End-to-end supply chain optimization program focusing on inventory management, logistics, and supplier relationships",
      duration: "10-14 weeks",
      price: "Starting at $45,000", 
      deliverables: ["Supply chain audit", "Network optimization", "Inventory strategy", "Risk mitigation plan"]
    },
    {
      title: "Quality Management Systems",
      description: "Implementation of robust quality management systems including ISO standards and continuous improvement methodologies",
      duration: "6-10 weeks",
      price: "Starting at $30,000",
      deliverables: ["Quality framework", "Process controls", "Audit systems", "Training programs"]
    },
    {
      title: "Lean Transformation Program",
      description: "Complete lean transformation program including cultural change, waste elimination, and continuous improvement mindset",
      duration: "12-16 weeks",
      price: "Starting at $50,000",
      deliverables: ["Lean roadmap", "Value stream maps", "Kaizen events", "Culture framework"]
    }
  ];

  const methodologies = [
    {
      name: "Lean Manufacturing",
      description: "Eliminate waste and maximize value through lean principles",
      icon: <Factory className="w-6 h-6 text-yellow-600"/>
    },
    {
      name: "Six Sigma", 
      description: "Reduce defects and improve quality through statistical methods",
      icon: <Target className="w-6 h-6 text-yellow-600"/>
    },
    {
      name: "Kaizen",
      description: "Continuous improvement through small, incremental changes",
      icon: <TrendingUp className="w-6 h-6 text-yellow-600"/>
    },
    {
      name: "Theory of Constraints",
      description: "Identify and manage bottlenecks to improve throughput",
      icon: <Zap className="w-6 h-6 text-yellow-600"/>
    }
  ];

  const caseStudies = [
    {
      company: "Manufacturing Plant",
      challenge: "Low productivity and high operational costs",
      solution: "Comprehensive lean transformation and automation program",
      outcome: "40% productivity increase, 25% cost reduction, $2M annual savings",
      timeline: "12-week engagement"
    },
    {
      company: "Logistics Company",
      challenge: "Inefficient supply chain and high inventory costs",
      solution: "Supply chain optimization and inventory management program",
      outcome: "30% reduction in inventory costs, 20% improvement in delivery times",
      timeline: "10-week engagement"
    },
    {
      company: "Healthcare Provider",
      challenge: "Patient wait times and operational inefficiencies",
      solution: "Process optimization and quality management implementation",
      outcome: "50% reduction in wait times, improved patient satisfaction scores",
      timeline: "8-week engagement"
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
            <Badge className="rounded-2xl px-3 py-1 text-sm bg-yellow-600 text-white hover:bg-yellow-700">Operational Excellence</Badge>
            <h1 className="mt-4 text-4xl md:text-5xl font-semibold leading-tight">
              Operational Excellence Program
            </h1>
            <p className="mt-4 text-lg text-gray-400 leading-relaxed">
              Transform your operations with comprehensive excellence programs combining lean methodologies, automation, and continuous improvement. Drive efficiency, quality, and productivity across your entire organization.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Badge variant="secondary" className="px-3 py-1 bg-yellow-900/30 text-yellow-300 border-yellow-700">8-16 week programs</Badge>
              <Badge variant="secondary" className="px-3 py-1 bg-yellow-900/30 text-yellow-300 border-yellow-700">Hands-on implementation</Badge>
              <Badge variant="secondary" className="px-3 py-1 bg-yellow-900/30 text-yellow-300 border-yellow-700">Sustainable results</Badge>
            </div>
            <div className="mt-8 flex gap-3">
              <Button size="lg" className="rounded-2xl bg-yellow-600 hover:bg-yellow-700" onClick={() => setInterest("consultation")}>Schedule Assessment</Button>
              <Button size="lg" variant="outline" className="rounded-2xl border-yellow-600 text-yellow-600 hover:bg-yellow-50" onClick={() => setInterest("proposal")}>Request Program Details</Button>
              <Button size="lg" variant="outline" className="rounded-2xl border-yellow-600 text-yellow-600 hover:bg-yellow-50" onClick={() => window.open('/api/one-pagers/OPERATIONAL_EXCELLENCE_ONE_PAGER.md', '_blank')}>Download One-Pager</Button>
            </div>
          </div>
          <div className="relative rounded-3xl border border-yellow-800 bg-gradient-to-br from-yellow-900/20 to-black p-6 shadow-lg">
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: <Settings className="w-6 h-6 text-yellow-600"/>, title: "Process Optimization", text: "Streamline workflows" },
                { icon: <Zap className="w-6 h-6 text-yellow-600"/>, title: "Efficiency Boost", text: "Maximize productivity" },
                { icon: <Award className="w-6 h-6 text-yellow-600"/>, title: "Quality Focus", text: "Excellence standards" },
                { icon: <TrendingUp className="w-6 h-6 text-yellow-600"/>, title: "Continuous Improvement", text: "Ongoing optimization" },
              ].map((item, i) => (
                <Card key={i} className="rounded-2xl border-yellow-800 bg-black/50 hover:border-yellow-600 hover:shadow-md transition-all duration-200">
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

      {/* Excellence Programs */}
      <section className="mx-auto max-w-6xl px-6 pb-12">
        <h2 className="text-2xl font-semibold text-white">Excellence Programs</h2>
        <p className="mt-2 text-gray-400">Comprehensive programs to transform your operational capabilities</p>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {excellencePrograms.map((program, i) => (
            <Card key={i} className="rounded-2xl border-yellow-800 bg-black/50 hover:shadow-md transition-all duration-200 cursor-pointer" onClick={() => setSelectedProgram(program.title)}>
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg text-white">{program.title}</CardTitle>
                  <Badge variant="outline" className="border-yellow-700 text-yellow-300">{program.duration}</Badge>
                </div>
              </CardHeader>
              <CardContent className="text-sm text-gray-400 space-y-3">
                <p>{program.description}</p>
                <div>
                  <p className="font-medium text-white mb-2">Key Deliverables:</p>
                  <ul className="space-y-1">
                    {program.deliverables.map((deliverable, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-yellow-600 mt-0.5 flex-shrink-0"/>
                        <span>{deliverable}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex items-center justify-between pt-2">
                  <span className="text-sm font-medium text-yellow-300">{program.price}</span>
                  <Button className="rounded-2xl bg-yellow-600 hover:bg-yellow-700 text-sm">Learn More</Button>
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
            <Card key={i} className="rounded-2xl border-yellow-800 bg-black/50 hover:shadow-md transition-all duration-200">
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
            <Card key={i} className="rounded-2xl border-yellow-800 bg-black/50 hover:shadow-md transition-all duration-200">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-yellow-600"/>
                  <CardTitle className="text-base text-white">{study.company}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="text-sm text-gray-400 space-y-2">
                <p className="font-medium text-red-400">Challenge: {study.challenge}</p>
                <p className="text-yellow-300">Solution: {study.solution}</p>
                <p className="font-medium text-green-300">{study.outcome}</p>
                <p className="text-xs text-gray-500">{study.timeline}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Program Process */}
      <section className="mx-auto max-w-6xl px-6 pb-12">
        <h2 className="text-2xl font-semibold text-white">Program Implementation Process</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-4">
          {[
            {
              step: "01",
              title: "Assessment",
              description: "Comprehensive operational audit and gap analysis"
            },
            {
              step: "02", 
              title: "Design",
              description: "Custom program design and roadmap development"
            },
            {
              step: "03",
              title: "Implementation",
              description: "Hands-on implementation with team training"
            },
            {
              step: "04",
              title: "Sustain",
              description: "Continuous improvement and performance monitoring"
            }
          ].map((step, i) => (
            <Card key={i} className="rounded-2xl border-yellow-800 bg-black/50 hover:shadow-md transition-all duration-200 text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-yellow-600 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
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
        <Card className="rounded-3xl border-yellow-800 bg-black/50">
          <CardContent className="p-6 md:p-8">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="text-xl font-semibold text-white">Achieve Operational Excellence</h3>
                <p className="mt-2 text-sm text-gray-400 leading-relaxed">Transform your operations with proven methodologies and hands-on implementation. Our programs deliver sustainable efficiency gains and quality improvements.</p>
                <ul className="mt-3 text-sm text-gray-400 list-disc pl-5 space-y-1">
                  <li>Comprehensive operational assessment</li>
                  <li>Custom excellence program design</li>
                  <li>Hands-on implementation support</li>
                  <li>Continuous improvement framework</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-yellow-800 p-4 bg-yellow-900/20">
                <p className="text-sm font-medium text-white">Program Benefits</p>
                <ul className="mt-2 text-sm text-gray-400 list-disc pl-5 space-y-1">
                  <li>Reduced operational costs</li>
                  <li>Improved quality and consistency</li>
                  <li>Enhanced productivity</li>
                  <li>Sustainable competitive advantage</li>
                </ul>
              </div>
            </div>
            <div className="mt-6 flex gap-3">
              <Button className="rounded-2xl bg-yellow-600 hover:bg-yellow-700" onClick={() => setInterest("start")}>Start Program</Button>
              <Button variant="outline" className="rounded-2xl border-yellow-600 text-yellow-600 hover:bg-yellow-50" onClick={() => setInterest("contact")}>Contact Us</Button>
            </div>
          </CardContent>
        </Card>
      </footer>
    </div>
  );
}