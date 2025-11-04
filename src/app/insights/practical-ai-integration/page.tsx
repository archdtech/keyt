'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Clock, User, TrendingUp, BarChart, Users, Zap, Target, Lightbulb, CheckCircle, Brain, Cpu, Shield, Database } from 'lucide-react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export default function PracticalAIIntegrationPage() {
  const aiROI = [
    {
      title: "Customer Support Costs",
      before: "$50K-100K monthly",
      after: "$15K-30K monthly",
      improvement: "70% reduction",
      timeframe: "3-6 months"
    },
    {
      title: "Lead Conversion Rate",
      before: "2-3% conversion",
      after: "8-12% conversion",
      improvement: "300% increase",
      timeframe: "2-4 months"
    },
    {
      title: "Manual Processing Time",
      before: "40-60 hours/week",
      after: "8-12 hours/week",
      improvement: "80% reduction",
      timeframe: "1-3 months"
    },
    {
      title: "Decision Accuracy",
      before: "65-75% accuracy",
      after: "85-95% accuracy",
      improvement: "25% improvement",
      timeframe: "4-8 months"
    }
  ];

  const aiUseCases = [
    {
      title: "Intelligent Customer Support",
      description: "AI-powered chatbots and ticket routing that understand context and escalate appropriately",
      businessValue: "Reduce support costs by 70% while improving customer satisfaction",
      implementationCost: "$25K-75K",
      timeToValue: "6-8 weeks",
      technicalComplexity: "Medium",
      dataRequirements: "Historical tickets, FAQs, product documentation",
      keyMetrics: ["Resolution time", "Customer satisfaction", "Escalation rate", "Cost per ticket"],
      financialImpact: "ROI of 300-500% in year 1"
    },
    {
      title: "Predictive Lead Scoring",
      description: "Machine learning models that predict which leads are most likely to convert",
      businessValue: "Increase conversion rates by 300% and focus sales efforts on high-value prospects",
      implementationCost: "$40K-100K",
      timeToValue: "8-12 weeks",
      technicalComplexity: "High",
      dataRequirements: "CRM data, website behavior, email engagement, demographics",
      keyMetrics: ["Lead score accuracy", "Conversion rate", "Sales cycle length", "Customer lifetime value"],
      financialImpact: "ROI of 400-600% in year 1"
    },
    {
      title: "Automated Document Processing",
      description: "AI that extracts, categorizes, and processes documents from invoices to contracts",
      businessValue: "Reduce manual processing by 80% and eliminate data entry errors",
      implementationCost: "$30K-80K",
      timeToValue: "4-6 weeks",
      technicalComplexity: "Medium",
      dataRequirements: "Sample documents, processing rules, validation criteria",
      keyMetrics: ["Processing speed", "Accuracy rate", "Error reduction", "Cost savings"],
      financialImpact: "ROI of 250-400% in year 1"
    },
    {
      title: "Dynamic Pricing Optimization",
      description: "AI algorithms that adjust prices based on demand, competition, and customer behavior",
      businessValue: "Increase revenue by 15-25% while maintaining optimal margins",
      implementationCost: "$50K-150K",
      timeToValue: "10-16 weeks",
      technicalComplexity: "High",
      dataRequirements: "Sales history, competitor pricing, market trends, customer segments",
      keyMetrics: ["Revenue uplift", "Margin optimization", "Price elasticity", "Market share"],
      financialImpact: "ROI of 500-800% in year 1"
    }
  ];

  const implementationFramework = [
    {
      phase: "Phase 1: Assessment",
      duration: "2-4 weeks",
      budget: "$10K-25K",
      objectives: [
        "Identify high-impact AI opportunities",
        "Assess data readiness and quality",
        "Evaluate technical capabilities",
        "Calculate potential ROI"
      ],
      deliverables: [
        "AI opportunity assessment report",
        "Data inventory and gap analysis",
        "Technical feasibility study",
        "Business case with ROI projections"
      ],
      keyQuestions: [
        "What business problems cost us the most?",
        "What data do we have that others don't?",
        "Where do we make repetitive decisions?",
        "What processes are manual and time-consuming?"
      ]
    },
    {
      phase: "Phase 2: Proof of Concept",
      duration: "4-8 weeks",
      budget: "$25K-75K",
      objectives: [
        "Build minimum viable AI solution",
        "Validate assumptions with real data",
        "Measure initial performance",
        "Identify scaling challenges"
      ],
      deliverables: [
        "Working AI prototype",
        "Performance metrics report",
        "User feedback analysis",
        "Scaling roadmap"
      ],
      successCriteria: [
        "Achieves 70% of target performance",
        "Processes real business data",
        "User adoption rate > 60%",
        "Clear path to production"
      ]
    },
    {
      phase: "Phase 3: Production Implementation",
      duration: "8-16 weeks",
      budget: "$50K-200K",
      objectives: [
        "Scale AI solution to production",
        "Integrate with existing systems",
        "Implement monitoring and maintenance",
        "Train users and stakeholders"
      ],
      deliverables: [
        "Production-ready AI system",
        "Integration documentation",
        "Monitoring dashboard",
        "User training materials"
      ],
      riskMitigation: [
        "Gradual rollout with A/B testing",
        "Fallback to manual processes",
        "Continuous performance monitoring",
        "Regular model retraining"
      ]
    },
    {
      phase: "Phase 4: Optimization",
      duration: "Ongoing",
      budget: "$20K-50K monthly",
      objectives: [
        "Continuously improve AI performance",
        "Expand to additional use cases",
        "Optimize costs and efficiency",
        "Maintain competitive advantage"
      ],
      deliverables: [
        "Monthly performance reports",
        "Model improvement roadmap",
        "Cost optimization analysis",
        "New use case evaluations"
      ],
      kpis: [
        "Model accuracy improvement",
        "Cost per prediction",
        "User satisfaction scores",
        "Business impact metrics"
      ]
    }
  ];

  const commonPitfalls = [
    {
      pitfall: "Starting with Complex AI",
      description: "Trying to build advanced AI systems before mastering basic automation",
      impact: "80% failure rate, wasted $500K-2M",
      solution: "Start with rule-based systems, gradually add machine learning",
      warningSigns: ["Team lacks ML expertise", "No clear success metrics", "Complex data requirements"]
    },
    {
      pitfall: "Poor Data Quality",
      description: "Using incomplete, inconsistent, or biased data to train AI models",
      impact: "Models perform 40-60% worse than expected",
      solution: "Invest in data cleaning and validation before model development",
      warningSigns: ["Missing data fields", "Inconsistent formats", "Outdated information"]
    },
    {
      pitfall: "Ignoring Human Factor",
      description: "Building AI systems without considering user adoption and workflow integration",
      impact: "70% of AI tools go unused within 6 months",
      solution: "Involve end users early and design for human-AI collaboration",
      warningSigns: ["No user testing", "Complex interfaces", "Lack of training plans"]
    },
    {
      pitfall: "No Maintenance Plan",
      description: "Treating AI as a one-time project rather than an ongoing system",
      impact: "Model performance degrades 20-30% annually without maintenance",
      solution: "Budget for continuous monitoring, retraining, and updates",
      warningSigns: ["No monitoring system", "No retraining schedule", "No performance alerts"]
    }
  ];

  const costBreakdown = [
    {
      category: "Data Preparation",
      description: "Data cleaning, labeling, and infrastructure setup",
      percentage: "25%",
      costRange: "$25K-100K",
      items: [
        "Data cleaning and validation",
        "Feature engineering",
        "Data storage and processing",
        "Data governance setup"
      ]
    },
    {
      category: "Model Development",
      description: "AI research, development, and testing",
      percentage: "35%",
      costRange: "$35K-150K",
      items: [
        "Algorithm selection and tuning",
        "Model training and validation",
        "Performance testing",
        "Documentation and versioning"
      ]
    },
    {
      category: "Integration",
      description: "Connecting AI to existing business systems",
      percentage: "20%",
      costRange: "$20K-80K",
      items: [
        "API development",
        "System integration",
        "User interface design",
        "Workflow automation"
      ]
    },
    {
      category: "Deployment & Monitoring",
      description: "Production infrastructure and ongoing maintenance",
      percentage: "20%",
      costRange: "$20K-70K",
      items: [
        "Cloud infrastructure",
        "Monitoring systems",
        "Security implementation",
        "Performance optimization"
      ]
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
              src="/images/insights/practical-ai-integration-hero.jpg"
              alt="Practical AI Integration background"
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
                  AI Systems
                </span>
                <span className="text-gray-400 text-sm">10 min read</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8 leading-tight tracking-tight">
                Practical AI<br />
                <span className="text-[#8B5CF6]">Integration</span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Moving beyond AI hype to implement systems that solve real business problems. Data from 25+ AI implementations showing actual costs, ROI timelines, and actionable insights.
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

      {/* AI ROI Metrics */}
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
              Real AI <span className="text-[#8B5CF6]">ROI Data</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Measured returns from our AI implementations across different business functions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {aiROI.map((metric, index) => (
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
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 text-sm">Timeline:</span>
                    <span className="text-[#8B5CF6] text-sm">{metric.timeframe}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Use Cases */}
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
              High-Impact AI <span className="text-[#8B5CF6]">Use Cases</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Proven AI applications with real implementation costs and ROI data
            </p>
          </motion.div>

          <div className="space-y-8">
            {aiUseCases.map((useCase, index) => (
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
                    {index === 1 && <Target className="w-6 h-6 text-[#8B5CF6]" />}
                    {index === 2 && <Database className="w-6 h-6 text-[#8B5CF6]" />}
                    {index === 3 && <BarChart className="w-6 h-6 text-[#8B5CF6]" />}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{useCase.title}</h3>
                    <p className="text-gray-400">{useCase.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
                  <div className="bg-green-900/20 border border-green-800/30 rounded-lg p-4">
                    <div className="flex items-center mb-2">
                      <TrendingUp className="w-4 h-4 mr-2 text-green-400" />
                      <span className="text-green-400 font-semibold">Business Value</span>
                    </div>
                    <p className="text-gray-300 text-sm">{useCase.businessValue}</p>
                  </div>

                  <div className="bg-blue-900/20 border border-blue-800/30 rounded-lg p-4">
                    <div className="flex items-center mb-2">
                      <Zap className="w-4 h-4 mr-2 text-blue-400" />
                      <span className="text-blue-400 font-semibold">Implementation</span>
                    </div>
                    <p className="text-gray-300 text-sm">{useCase.timeToValue} • {useCase.implementationCost}</p>
                  </div>

                  <div className="bg-purple-900/20 border border-purple-800/30 rounded-lg p-4">
                    <div className="flex items-center mb-2">
                      <Brain className="w-4 h-4 mr-2 text-purple-400" />
                      <span className="text-purple-400 font-semibold">Complexity</span>
                    </div>
                    <p className="text-gray-300 text-sm">{useCase.technicalComplexity}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Data Requirements:</h4>
                    <p className="text-gray-300 text-sm mb-4">{useCase.dataRequirements}</p>
                    
                    <h4 className="text-lg font-semibold text-white mb-3">Key Metrics:</h4>
                    <div className="flex flex-wrap gap-2">
                      {useCase.keyMetrics.map((metric, metricIndex) => (
                        <span key={metricIndex} className="bg-[#8B5CF6]/10 border border-[#8B5CF6]/20 text-[#8B5CF6] px-3 py-1 rounded-full text-sm">
                          {metric}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="bg-[#8B5CF6]/10 border border-[#8B5CF6]/20 rounded-lg p-4">
                    <div className="flex items-center mb-2">
                      <BarChart className="w-4 h-4 mr-2 text-[#8B5CF6]" />
                      <span className="text-[#8B5CF6] font-semibold">Financial Impact</span>
                    </div>
                    <p className="text-gray-300 text-sm">{useCase.financialImpact}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Framework */}
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
              <span className="text-[#8B5CF6]">Implementation</span> Framework
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              4-phase approach to successful AI implementation with realistic timelines and budgets
            </p>
          </motion.div>

          <div className="space-y-8">
            {implementationFramework.map((phase, index) => (
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
                  <div className="text-right">
                    <p className="text-[#8B5CF6] font-semibold">{phase.duration}</p>
                    <p className="text-gray-400 text-sm">{phase.budget}</p>
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
                    {phase.keyQuestions && (
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-white mb-3">Key Questions:</h4>
                        <ul className="space-y-2">
                          {phase.keyQuestions.map((question, questionIndex) => (
                            <li key={questionIndex} className="flex items-start">
                              <Lightbulb className="w-4 h-4 mr-2 text-yellow-400 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-300 text-sm">{question}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {phase.successCriteria && (
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-white mb-3">Success Criteria:</h4>
                        <ul className="space-y-2">
                          {phase.successCriteria.map((criteria, criteriaIndex) => (
                            <li key={criteriaIndex} className="flex items-start">
                              <CheckCircle className="w-4 h-4 mr-2 text-green-400 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-300 text-sm">{criteria}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {phase.riskMitigation && (
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3">Risk Mitigation:</h4>
                        <ul className="space-y-2">
                          {phase.riskMitigation.map((risk, riskIndex) => (
                            <li key={riskIndex} className="flex items-start">
                              <Shield className="w-4 h-4 mr-2 text-blue-400 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-300 text-sm">{risk}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {phase.kpis && (
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3">Ongoing KPIs:</h4>
                        <ul className="space-y-2">
                          {phase.kpis.map((kpi, kpiIndex) => (
                            <li key={kpiIndex} className="flex items-start">
                              <BarChart className="w-4 h-4 mr-2 text-purple-400 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-300 text-sm">{kpi}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cost Breakdown */}
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
              AI Implementation <span className="text-[#8B5CF6]">Costs</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Where your money goes: realistic cost breakdown for AI projects
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {costBreakdown.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#0D0D0D] border border-gray-800 rounded-lg p-6"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-white">{category.category}</h3>
                  <span className="text-[#8B5CF6] font-bold">{category.percentage}</span>
                </div>
                
                <p className="text-gray-400 mb-4">{category.description}</p>
                
                <div className="bg-gray-800/50 rounded-lg p-3 mb-4">
                  <p className="text-[#8B5CF6] font-semibold">{category.costRange}</p>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold text-gray-400 mb-2">Includes:</h4>
                  <ul className="space-y-1">
                    {category.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center">
                        <div className="w-2 h-2 bg-[#8B5CF6] rounded-full mr-2"></div>
                        <span className="text-gray-300 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Pitfalls */}
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
              Common AI <span className="text-[#8B5CF6]">Pitfalls</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Avoid these costly mistakes that derail 80% of AI projects
            </p>
          </motion.div>

          <div className="space-y-8">
            {commonPitfalls.map((pitfall, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-red-900/10 to-orange-900/10 border border-red-800/30 rounded-lg p-8"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center">
                      <div className="w-6 h-6 bg-red-500 rounded-full"></div>
                    </div>
                  </div>
                  
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold text-white mb-3">{pitfall.pitfall}</h3>
                    <p className="text-gray-300 mb-4 leading-relaxed">{pitfall.description}</p>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                      <div className="bg-red-900/20 border border-red-800/30 rounded-lg p-4">
                        <h4 className="text-red-400 font-semibold mb-2">Impact</h4>
                        <p className="text-gray-300 text-sm">{pitfall.impact}</p>
                      </div>
                      
                      <div className="bg-green-900/20 border border-green-800/30 rounded-lg p-4">
                        <h4 className="text-green-400 font-semibold mb-2">Solution</h4>
                        <p className="text-gray-300 text-sm">{pitfall.solution}</p>
                      </div>
                      
                      <div className="bg-yellow-900/20 border border-yellow-800/30 rounded-lg p-4">
                        <h4 className="text-yellow-400 font-semibold mb-2">Warning Signs</h4>
                        <ul className="space-y-1">
                          {pitfall.warningSigns.map((sign, signIndex) => (
                            <li key={signIndex} className="flex items-start">
                              <div className="w-2 h-2 bg-yellow-400 rounded-full mr-2 mt-1.5 flex-shrink-0"></div>
                              <span className="text-gray-300 text-xs">{sign}</span>
                            </li>
                          ))}
                        </ul>
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
                title: "Start with Problems, Not Technology",
                description: "Identify expensive business problems first, then find AI solutions.",
                icon: <Target className="w-6 h-6" />
              },
              {
                title: "Data Quality Trumps Algorithm",
                description: "Good data with simple algorithms beats bad data with complex ones.",
                icon: <Database className="w-6 h-6" />
              },
              {
                title: "Measure Business Impact",
                description: "Track ROI, not just model accuracy. Business metrics matter most.",
                icon: <BarChart className="w-6 h-6" />
              },
              {
                title: "Plan for Maintenance",
                description: "Budget 30% of initial cost annually for monitoring and updates.",
                icon: <Shield className="w-6 h-6" />
              },
              {
                title: "Human-AI Collaboration",
                description: "Design systems that augment humans, not replace them entirely.",
                icon: <Users className="w-6 h-6" />
              },
              {
                title: "Iterative Approach",
                description: "Start simple, measure results, then add complexity gradually.",
                icon: <Brain className="w-6 h-6" />
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
              Ready to Implement<br />
              <span className="text-[#8B5CF6]">Practical AI</span>?
            </h2>
            <p className="text-xl text-gray-400 mb-10 max-w-3xl mx-auto">
              Join our AI Systems workshop to learn how to implement these solutions in your business.
            </p>
            
            <div className="flex flex-wrap gap-5 justify-center">
              <Link
                href="/ai-workshops"
                className="inline-flex items-center px-8 py-4 bg-[#8B5CF6] text-white hover:bg-white hover:text-[#8B5CF6] hover:border-[#8B5CF6] border-2 border-[#8B5CF6] transition-all duration-300 rounded-full font-medium"
              >
                Book AI Workshop
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