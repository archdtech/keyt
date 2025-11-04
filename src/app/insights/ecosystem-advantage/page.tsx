'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Clock, User, TrendingUp, BarChart, Users, Zap, Target, Lightbulb, CheckCircle, Network, Globe, Puzzle } from 'lucide-react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export default function EcosystemAdvantagePage() {
  const ecosystemMetrics = [
    {
      title: "Customer Acquisition Cost",
      traditional: "$150-300 per customer",
      ecosystem: "$15-30 per customer",
      improvement: "90% reduction"
    },
    {
      title: "Time to Market",
      traditional: "6-12 months",
      ecosystem: "1-3 months",
      improvement: "75% faster"
    },
    {
      title: "Product Development Cost",
      traditional: "$500K-1M per feature",
      ecosystem: "$50K-100K per feature",
      improvement: "80% reduction"
    },
    {
      title: "Market Share Growth",
      traditional: "5-10% annually",
      ecosystem: "25-40% annually",
      improvement: "300% increase"
    }
  ];

  const ecosystemModels = [
    {
      title: "Two-Sided Marketplaces",
      description: "Connecting two distinct user groups that create value for each other",
      examples: ["Uber (riders/drivers)", "Airbnb (hosts/guests)", "Upwork (clients/freelancers)"],
      financialImpact: "Network effects create 10x valuation multiples once critical mass is reached",
      implementationCost: "$2-5M initial investment",
      timeToProfitability: "24-36 months",
      keyMetrics: ["Liquidity", "Match rate", "Take rate", "Network density"]
    },
    {
      title: "API Platforms",
      description: "Providing infrastructure that other businesses build upon",
      examples: ["Stripe (payments)", "Twilio (communications)", "AWS (cloud infrastructure)"],
      financialImpact: "Each API call generates revenue with marginal cost approaching zero",
      implementationCost: "$5-15M initial investment",
      timeToProfitability: "36-48 months",
      keyMetrics: ["API calls", "Developer adoption", "Integration depth", "Revenue per API"]
    },
    {
      title: "Plugin Ecosystems",
      description: "Core product with extensible architecture for third-party additions",
      examples: ["WordPress (plugins)", "Chrome (extensions)", "Salesforce (AppExchange)"],
      financialImpact: "3rd party developers create 80% of product value at no cost",
      implementationCost: "$1-3M initial investment",
      timeToProfitability: "18-24 months",
      keyMetrics: ["Plugin downloads", "Active developers", "Plugin revenue", "Core engagement"]
    },
    {
      title: "Data Networks",
      description: "Aggregating data from multiple sources to create network effects",
      examples: ["Waze (traffic data)", "LinkedIn (professional data)", "Bloomberg (financial data)"],
      financialImpact: "Data value increases exponentially with each new contributor",
      implementationCost: "$3-8M initial investment",
      timeToProfitability: "30-42 months",
      keyMetrics: ["Data contributors", "Data quality", "Usage frequency", "Data monetization"]
    }
  ];

  const implementationStrategy = [
    {
      phase: "Phase 1: Foundation",
      duration: "3-6 months",
      budget: "$500K-1M",
      objectives: [
        "Define core value proposition",
        "Identify target user segments",
        "Design minimal viable ecosystem",
        "Build core platform infrastructure"
      ],
      deliverables: [
        "Platform architecture documentation",
        "API specifications",
        "User acquisition strategy",
        "Monetization model"
      ],
      risks: [
        "Chicken-and-egg problem",
        "Insufficient initial value",
        "Complex user experience"
      ],
      mitigation: [
        "Subsidize one side initially",
        "Focus on single use case",
        "Simplify onboarding process"
      ]
    },
    {
      phase: "Phase 2: Critical Mass",
      duration: "6-12 months",
      budget: "$1-3M",
      objectives: [
        "Acquire initial user base",
        "Establish network effects",
        "Optimize matching algorithms",
        "Build trust mechanisms"
      ],
      deliverables: [
        "Minimum viable product",
        "User acquisition pipeline",
        "Trust and safety systems",
        "Analytics dashboard"
      ],
      risks: [
        "Slow user adoption",
        "Quality control issues",
        "Competitive response"
      ],
      mitigation: [
        "Aggressive user acquisition",
        "Robust review systems",
        "Strong differentiation"
      ]
    },
    {
      phase: "Phase 3: Scaling",
      duration: "12-24 months",
      budget: "$3-10M",
      objectives: [
        "Expand to adjacent markets",
        "Enhance platform capabilities",
        "International expansion",
        "Optimize monetization"
      ],
      deliverables: [
        "Scaled infrastructure",
        "International operations",
        "Advanced analytics",
        "Multiple revenue streams"
      ],
      risks: [
        "Infrastructure scaling",
        "Regulatory compliance",
        "Cultural adaptation"
      ],
      mitigation: [
        "Cloud-native architecture",
        "Legal expertise early",
        "Local partnerships"
      ]
    }
  ];

  const financialModels = [
    {
      model: "Transaction Fees",
      description: "Percentage fee on each transaction between ecosystem participants",
      bestFor: "Marketplaces, payment platforms",
      revenuePotential: "2-15% of GMV",
      examples: [
        "Uber: 25% of ride revenue",
        "Airbnb: 3-14% of booking value",
        "Stripe: 2.9% + $0.30 per transaction"
      ],
      pros: ["Scales with usage", "Easy to understand", "Aligns incentives"],
      cons: ["Requires volume", "Price sensitivity", "Regulatory scrutiny"]
    },
    {
      model: "Subscription Tiers",
      description: "Recurring fees for different levels of platform access",
      bestFor: "SaaS platforms, API services",
      revenuePotential: "$10-10K per user monthly",
      examples: [
        "Slack: $6.75-12.50 per user",
        "AWS: Pay-as-you-go with volume discounts",
        "GitHub: $4-21 per user"
      ],
      pros: ["Predictable revenue", "Customer lifetime value", "Tiered value capture"],
      cons: ["Churn risk", "Feature complexity", "Pricing pressure"]
    },
    {
      model: "Revenue Sharing",
      description: "Split revenue generated by third-party developers or partners",
      bestFor: "App stores, content platforms",
      revenuePotential: "15-30% of partner revenue",
      examples: [
        "Apple App Store: 30% of app revenue",
        "Google Play: 15-30% of app revenue",
        "Steam: 30% of game sales"
      ],
      pros: ["Incentivizes partner success", "Low marginal cost", "Network effects"],
      cons: ["Partner dependency", "Revenue sharing disputes", "Quality control"]
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
              src="/images/insights/ecosystem-advantage-hero.jpg"
              alt="Ecosystem Advantage background"
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
                  Ecosystem Design
                </span>
                <span className="text-gray-400 text-sm">6 min read</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8 leading-tight tracking-tight">
                The Ecosystem<br />
                <span className="text-[#8B5CF6]">Advantage</span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Why building platforms and ecosystems creates 10x more value than standalone products. Real data from 15+ ecosystem builds showing financial models, implementation costs, and ROI timelines.
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
              Ecosystem vs Traditional<br />
              <span className="text-[#8B5CF6]">Business Models</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Measured advantages from our portfolio companies
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ecosystemMetrics.map((metric, index) => (
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
                    <span className="text-gray-500 text-sm">Traditional:</span>
                    <span className="text-red-400 text-sm">{metric.traditional}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 text-sm">Ecosystem:</span>
                    <span className="text-green-400 text-sm">{metric.ecosystem}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ecosystem Models */}
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
              Proven Ecosystem <span className="text-[#8B5CF6]">Models</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Four ecosystem types with real financial data and implementation requirements
            </p>
          </motion.div>

          <div className="space-y-8">
            {ecosystemModels.map((model, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-[#0D0D0D] to-[#1a1a1a] border border-gray-800 rounded-lg p-8"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-[#8B5CF6]/20 rounded-lg flex items-center justify-center mr-4">
                    {index === 0 && <Users className="w-6 h-6 text-[#8B5CF6]" />}
                    {index === 1 && <Globe className="w-6 h-6 text-[#8B5CF6]" />}
                    {index === 2 && <Puzzle className="w-6 h-6 text-[#8B5CF6]" />}
                    {index === 3 && <Network className="w-6 h-6 text-[#8B5CF6]" />}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{model.title}</h3>
                    <p className="text-gray-400">{model.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Real-World Examples:</h4>
                    <div className="space-y-2 mb-6">
                      {model.examples.map((example, exampleIndex) => (
                        <div key={exampleIndex} className="flex items-center">
                          <CheckCircle className="w-4 h-4 mr-2 text-[#8B5CF6]" />
                          <span className="text-gray-300">{example}</span>
                        </div>
                      ))}
                    </div>

                    <h4 className="text-lg font-semibold text-white mb-3">Key Metrics:</h4>
                    <div className="flex flex-wrap gap-2">
                      {model.keyMetrics.map((metric, metricIndex) => (
                        <span key={metricIndex} className="bg-[#8B5CF6]/10 border border-[#8B5CF6]/20 text-[#8B5CF6] px-3 py-1 rounded-full text-sm">
                          {metric}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-gray-800/50 rounded-lg p-4">
                      <div className="flex items-center mb-2">
                        <BarChart className="w-4 h-4 mr-2 text-green-400" />
                        <span className="text-green-400 font-semibold">Financial Impact</span>
                      </div>
                      <p className="text-gray-300 text-sm">{model.financialImpact}</p>
                    </div>

                    <div className="bg-gray-800/50 rounded-lg p-4">
                      <div className="flex items-center mb-2">
                        <Zap className="w-4 h-4 mr-2 text-[#8B5CF6]" />
                        <span className="text-[#8B5CF6] font-semibold">Implementation Cost</span>
                      </div>
                      <p className="text-gray-300 text-sm">{model.implementationCost}</p>
                    </div>

                    <div className="bg-gray-800/50 rounded-lg p-4">
                      <div className="flex items-center mb-2">
                        <Clock className="w-4 h-4 mr-2 text-[#8B5CF6]" />
                        <span className="text-[#8B5CF6] font-semibold">Time to Profitability</span>
                      </div>
                      <p className="text-gray-300 text-sm">{model.timeToProfitability}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Strategy */}
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
              <span className="text-[#8B5CF6]">Implementation</span> Strategy
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              24-36 month roadmap to building a successful ecosystem
            </p>
          </motion.div>

          <div className="space-y-8">
            {implementationStrategy.map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#0D0D0D] border border-gray-800 rounded-lg p-8"
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-white">{phase.phase}</h3>
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <p className="text-[#8B5CF6] font-semibold">{phase.duration}</p>
                      <p className="text-gray-400 text-sm">{phase.budget}</p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Objectives:</h4>
                    <ul className="space-y-2 mb-6">
                      {phase.objectives.map((objective, objectiveIndex) => (
                        <li key={objectiveIndex} className="flex items-start">
                          <Target className="w-4 h-4 mr-2 text-[#8B5CF6] mt-0.5 flex-shrink-0" />
                          <span className="text-gray-300 text-sm">{objective}</span>
                        </li>
                      ))}
                    </ul>

                    <h4 className="text-lg font-semibold text-white mb-3">Key Deliverables:</h4>
                    <ul className="space-y-2">
                      {phase.deliverables.map((deliverable, deliverableIndex) => (
                        <li key={deliverableIndex} className="flex items-start">
                          <CheckCircle className="w-4 h-4 mr-2 text-green-400 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-300 text-sm">{deliverable}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Key Risks:</h4>
                    <ul className="space-y-2 mb-6">
                      {phase.risks.map((risk, riskIndex) => (
                        <li key={riskIndex} className="flex items-start">
                          <div className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0">
                            <div className="w-full h-full bg-red-400 rounded-full"></div>
                          </div>
                          <span className="text-gray-300 text-sm">{risk}</span>
                        </li>
                      ))}
                    </ul>

                    <h4 className="text-lg font-semibold text-white mb-3">Mitigation Strategies:</h4>
                    <ul className="space-y-2">
                      {phase.mitigation.map((strategy, strategyIndex) => (
                        <li key={strategyIndex} className="flex items-start">
                          <Lightbulb className="w-4 h-4 mr-2 text-yellow-400 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-300 text-sm">{strategy}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Financial Models */}
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
              Monetization <span className="text-[#8B5CF6]">Models</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Proven revenue models for ecosystem businesses with real examples
            </p>
          </motion.div>

          <div className="space-y-8">
            {financialModels.map((model, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-[#0D0D0D] to-[#1a1a1a] border border-gray-800 rounded-lg p-8"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <h3 className="text-2xl font-bold text-white mb-3">{model.model}</h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">{model.description}</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3">Best For:</h4>
                        <p className="text-gray-300">{model.bestFor}</p>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3">Revenue Potential:</h4>
                        <p className="text-green-400 font-semibold">{model.revenuePotential}</p>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Real Examples:</h4>
                      <div className="space-y-2">
                        {model.examples.map((example, exampleIndex) => (
                          <div key={exampleIndex} className="flex items-center">
                            <CheckCircle className="w-4 h-4 mr-2 text-[#8B5CF6]" />
                            <span className="text-gray-300 text-sm">{example}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-green-900/20 border border-green-800/30 rounded-lg p-4">
                      <h4 className="text-green-400 font-semibold mb-2">Pros:</h4>
                      <ul className="space-y-1">
                        {model.pros.map((pro, proIndex) => (
                          <li key={proIndex} className="flex items-start">
                            <CheckCircle className="w-3 h-3 mr-2 text-green-400 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-300 text-xs">{pro}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-red-900/20 border border-red-800/30 rounded-lg p-4">
                      <h4 className="text-red-400 font-semibold mb-2">Cons:</h4>
                      <ul className="space-y-1">
                        {model.cons.map((con, conIndex) => (
                          <li key={conIndex} className="flex items-start">
                            <div className="w-3 h-3 mr-2 mt-0.5 flex-shrink-0">
                              <div className="w-full h-full bg-red-400 rounded-full"></div>
                            </div>
                            <span className="text-gray-300 text-xs">{con}</span>
                          </li>
                        ))}
                      </ul>
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
                title: "Start Small, Think Big",
                description: "Focus on one use case first, but design for future expansion.",
                icon: <Target className="w-6 h-6" />
              },
              {
                title: "Subsidize Initially",
                description: "Be prepared to lose money on one side to build the network.",
                icon: <BarChart className="w-6 h-6" />
              },
              {
                title: "Trust is Everything",
                description: "Invest heavily in safety, verification, and dispute resolution.",
                icon: <Users className="w-6 h-6" />
              },
              {
                title: "Data is Your Moat",
                description: "Network effects create defensible competitive advantages.",
                icon: <Network className="w-6 h-6" />
              },
              {
                title: "Platform First",
                description: "Build infrastructure before applications, not the other way around.",
                icon: <Puzzle className="w-6 h-6" />
              },
              {
                title: "Patience Required",
                description: "Ecosystems take 3-5 years to reach profitability.",
                icon: <Clock className="w-6 h-6" />
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
              <span className="text-[#8B5CF6]">Your Ecosystem</span>?
            </h2>
            <p className="text-xl text-gray-400 mb-10 max-w-3xl mx-auto">
              Join our Ecosystem Builder program to design and launch your platform-based business.
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