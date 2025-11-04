'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Clock, User, TrendingUp, BarChart, Users, Zap, Target, Lightbulb, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export default function SystemsThatScalePage() {
  const keyMetrics = [
    {
      title: "Development Velocity",
      before: "2-3 features per month",
      after: "10+ features per month",
      improvement: "400% increase"
    },
    {
      title: "System Downtime",
      before: "8-12 hours monthly",
      after: "Under 30 minutes monthly",
      improvement: "95% reduction"
    },
    {
      title: "Team Productivity",
      before: "60% on new features",
      after: "85% on new features",
      improvement: "42% more innovation"
    },
    {
      title: "Customer Support Load",
      before: "200+ tickets/week",
      after: "50-70 tickets/week",
      improvement: "70% reduction"
    }
  ];

  const systemPatterns = [
    {
      title: "Microservices Architecture",
      description: "Breaking down monolithic applications into independent, scalable services",
      benefits: ["Independent scaling", "Fault isolation", "Technology flexibility", "Faster deployment"],
      financialImpact: "Reduced infrastructure costs by 40% while handling 5x load"
    },
    {
      title: "Event-Driven Systems",
      description: "Using asynchronous communication to decouple system components",
      benefits: ["Better resilience", "Improved scalability", "Real-time processing", "Easier debugging"],
      financialImpact: "Decreased operational costs by 35% and improved response times by 60%"
    },
    {
      title: "Automated Testing Pipelines",
      description: "Comprehensive automated testing from unit to integration levels",
      benefits: ["Early bug detection", "Consistent quality", "Faster releases", "Reduced manual testing"],
      financialImpact: "Saved $200K annually in testing costs and prevented 3 major outages"
    },
    {
      title: "Infrastructure as Code",
      description: "Managing infrastructure through version-controlled code",
      benefits: ["Reproducible environments", "Faster provisioning", "Better security", "Cost optimization"],
      financialImpact: "Reduced provisioning time by 80% and eliminated configuration drift"
    }
  ];

  const actionableSteps = [
    {
      step: "01",
      title: "Audit Current Architecture",
      description: "Map your existing systems and identify bottlenecks, single points of failure, and technical debt",
      actions: [
        "Document all system dependencies",
        "Measure current performance metrics",
        "Identify manual processes",
        "Calculate current operational costs"
      ],
      timeframe: "2-4 weeks",
      resources: "1-2 engineers, $5K-10K tools budget"
    },
    {
      step: "02", 
      title: "Design Scalable Patterns",
      description: "Create a roadmap for implementing scalable architectural patterns",
      actions: [
        "Choose appropriate patterns for your use case",
        "Design service boundaries and interfaces",
        "Plan data migration strategies",
        "Create monitoring and alerting framework"
      ],
      timeframe: "4-6 weeks",
      resources: "2-3 engineers, $10K-20K implementation budget"
    },
    {
      step: "03",
      title: "Implement Incrementally",
      description: "Roll out changes in phases to minimize risk and demonstrate value",
      actions: [
        "Start with non-critical services",
        "Implement comprehensive monitoring",
        "Create rollback procedures",
        "Train teams on new patterns"
      ],
      timeframe: "8-12 weeks",
      resources: "3-4 engineers, $25K-50K implementation budget"
    },
    {
      step: "04",
      title: "Optimize and Automate",
      description: "Continuously improve and automate operational processes",
      actions: [
        "Implement auto-scaling policies",
        "Create automated recovery procedures",
        "Optimize for cost and performance",
        "Establish governance processes"
      ],
      timeframe: "Ongoing",
      resources: "2-3 engineers, $15K-30K monthly optimization budget"
    }
  ];

  return (
    <div className="bg-black text-white">
      <Header />

      {/* Hero Section */}
      <motion.section
        className="min-h-[60vh] flex items-center relative border-b border-gray-800 overflow-hidden pt-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Background with gradient */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
            <img
              src="/images/insights/systems-that-scale-hero.jpg"
              alt="Systems That Scale background"
              className="absolute inset-0 w-full h-full object-cover opacity-20"
            />
            <div className="absolute top-1/4 right-0 w-64 h-64 bg-[#8B5CF6] rounded-full filter blur-[150px] opacity-20"></div>
            <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-[#8B5CF6] rounded-full filter blur-[150px] opacity-15"></div>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 z-10 relative">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="bg-[#8B5CF6]/20 border border-[#8B5CF6]/30 text-[#8B5CF6] px-3 py-1 rounded-full text-sm font-medium">
                  Systems Architecture
                </span>
                <span className="text-gray-400 text-sm">8 min read</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8 leading-tight tracking-tight">
                Building Systems<br />
                <span className="text-[#8B5CF6]">That Scale</span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                From our experience building 20+ venture-backed startups, we've learned that scaling isn't about bigger servers - it's about smarter architecture. Here's what actually works, with real data and financial impact.
              </p>

              <div className="flex items-center gap-6 text-gray-400">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">November 2024</span>
                </div>
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span className="text-sm">Venture Studio Team</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Key Metrics */}
      <section className="py-20 bg-black border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Real <span className="text-[#8B5CF6]">Results</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Measured improvements from implementing scalable systems across our portfolio
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {keyMetrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#0D0D0D] border border-gray-800 rounded-lg p-6"
              >
                <div className="flex items-center justify-between mb-4">
                  <TrendingUp className="w-8 h-8 text-green-400" />
                  <span className="text-green-400 text-sm font-bold">{metric.improvement}</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{metric.title}</h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 text-sm">Before:</span>
                    <span className="text-red-400 text-sm">{metric.before}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 text-sm">After:</span>
                    <span className="text-green-400 text-sm">{metric.after}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* System Patterns */}
      <section className="py-20 bg-black border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Proven <span className="text-[#8B5CF6]">Patterns</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Architectural patterns that consistently deliver scalable results
            </p>
          </motion.div>

          <div className="space-y-8">
            {systemPatterns.map((pattern, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-[#0D0D0D] to-[#1a1a1a] border border-gray-800 rounded-lg p-8"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <h3 className="text-2xl font-bold text-white mb-4">{pattern.title}</h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">{pattern.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-3">Key Benefits:</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {pattern.benefits.map((benefit, benefitIndex) => (
                          <div key={benefitIndex} className="flex items-center">
                            <CheckCircle className="w-4 h-4 mr-2 text-[#8B5CF6]" />
                            <span className="text-gray-300 text-sm">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-[#8B5CF6]/10 border border-[#8B5CF6]/20 rounded-lg p-6">
                    <div className="flex items-center mb-3">
                      <BarChart className="w-5 h-5 mr-2 text-[#8B5CF6]" />
                      <span className="text-[#8B5CF6] font-semibold">Financial Impact</span>
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed">{pattern.financialImpact}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Actionable Steps */}
      <section className="py-20 bg-black border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-[#8B5CF6]">Implementation</span> Roadmap
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              A practical 4-step approach to implementing scalable systems in your organization
            </p>
          </motion.div>

          <div className="space-y-8">
            {actionableSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#0D0D0D] border border-gray-800 rounded-lg p-8"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-[#8B5CF6] rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">{step.step}</span>
                    </div>
                  </div>
                  
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">{step.description}</p>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3">Key Actions:</h4>
                        <ul className="space-y-2">
                          {step.actions.map((action, actionIndex) => (
                            <li key={actionIndex} className="flex items-start">
                              <Target className="w-4 h-4 mr-2 text-[#8B5CF6] mt-0.5 flex-shrink-0" />
                              <span className="text-gray-300 text-sm">{action}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="bg-gray-800/50 rounded-lg p-4">
                          <div className="flex items-center mb-2">
                            <Clock className="w-4 h-4 mr-2 text-[#8B5CF6]" />
                            <span className="text-[#8B5CF6] font-semibold">Timeframe</span>
                          </div>
                          <p className="text-gray-300 text-sm">{step.timeframe}</p>
                        </div>
                        
                        <div className="bg-gray-800/50 rounded-lg p-4">
                          <div className="flex items-center mb-2">
                            <Zap className="w-4 h-4 mr-2 text-[#8B5CF6]" />
                            <span className="text-[#8B5CF6] font-semibold">Resources</span>
                          </div>
                          <p className="text-gray-300 text-sm">{step.resources}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Takeaways */}
      <section className="py-20 bg-black border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Key <span className="text-[#8B5CF6]">Takeaways</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Start with Data",
                description: "Measure before you optimize. You can't improve what you don't measure.",
                icon: <BarChart className="w-6 h-6" />
              },
              {
                title: "Incremental Changes",
                description: "Big bang migrations fail. Small, incremental changes deliver real value.",
                icon: <Target className="w-6 h-6" />
              },
              {
                title: "Automate Everything",
                description: "Manual processes don't scale. Invest in automation from day one.",
                icon: <Zap className="w-6 h-6" />
              },
              {
                title: "Design for Failure",
                description: "Systems will fail. Design them to fail gracefully and recover automatically.",
                icon: <Users className="w-6 h-6" />
              },
              {
                title: "Monitor Continuously",
                description: "Visibility is crucial. Monitor everything and set up proactive alerts.",
                icon: <Lightbulb className="w-6 h-6" />
              },
              {
                title: "Financial Focus",
                description: "Every technical decision should have a clear financial justification.",
                icon: <TrendingUp className="w-6 h-6" />
              }
            ].map((takeaway, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#0D0D0D] border border-gray-800 rounded-lg p-6 hover:border-[#8B5CF6] transition-all duration-300"
              >
                <div className="text-[#8B5CF6] mb-4">
                  {takeaway.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{takeaway.title}</h3>
                <p className="text-gray-400 leading-relaxed">{takeaway.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Build<br />
              <span className="text-[#8B5CF6]">Scalable Systems</span>?
            </h2>
            <p className="text-xl text-gray-400 mb-10 max-w-3xl mx-auto">
              Apply these patterns to your venture with our hands-on systems architecture program.
            </p>
            
            <div className="flex flex-wrap gap-5 justify-center">
              <Link
                href="/apply-founder"
                className="inline-flex items-center px-8 py-4 bg-[#8B5CF6] text-white hover:bg-white hover:text-[#8B5CF6] hover:border-[#8B5CF6] border-2 border-[#8B5CF6] transition-all duration-300 rounded-full font-medium"
              >
                Apply to Work With Us
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/insights"
                className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#8B5CF6] transition-all duration-300 rounded-full font-medium"
              >
                Back to Insights
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}