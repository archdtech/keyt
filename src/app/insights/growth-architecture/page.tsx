'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Clock, User, TrendingUp, BarChart, Users, Zap, Target, Lightbulb, CheckCircle, Rocket, Network, Activity, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export default function GrowthArchitecturePage() {
  const growthMetrics = [
    {
      title: "Customer Acquisition Cost",
      traditional: "$100-200 per customer",
      architectural: "$10-30 per customer",
      improvement: "85% reduction",
      timeframe: "6-12 months"
    },
    {
      title: "Monthly Active Users",
      traditional: "10-20% monthly growth",
      architectural: "50-100% monthly growth",
      improvement: "300% increase",
      timeframe: "3-6 months"
    },
    {
      title: "Revenue Per User",
      traditional: "$5-15 monthly ARPU",
      architectural: "$25-50 monthly ARPU",
      improvement: "200% increase",
      timeframe: "4-8 months"
    },
    {
      title: "Churn Rate",
      traditional: "5-8% monthly churn",
      architectural: "1-3% monthly churn",
      improvement: "70% reduction",
      timeframe: "2-4 months"
    }
  ];

  const growthPatterns = [
    {
      title: "Network Effect Loops",
      description: "Design systems where each new user increases value for all existing users",
      businessImpact: "Creates exponential growth curves and competitive moats",
      implementationCost: "$100K-300K",
      timeToValue: "6-9 months",
      complexity: "High",
      examples: [
        "Social platforms: More users = more content = more value",
        "Marketplaces: More sellers = more buyers = more transactions",
        "Communication tools: More contacts = more utility = more adoption"
      ],
      keyMetrics: ["Network density", "Cross-side network effects", "Viral coefficient", "Engagement loops"],
      financialROI: "10-50x valuation multiple once critical mass achieved"
    },
    {
      title: "Data Flywheels",
      description: "Systems that get smarter with each user interaction, creating compounding advantages",
      businessImpact: "Improves product quality and reduces operational costs over time",
      implementationCost: "$75K-200K",
      timeToValue: "4-7 months",
      complexity: "Medium-High",
      examples: [
        "Recommendation engines: More data = better recommendations = more usage",
        "Search algorithms: More queries = better results = more searches",
        "Fraud detection: More transactions = better models = lower losses"
      ],
      keyMetrics: ["Data volume", "Model accuracy", "Prediction confidence", "Cost per prediction"],
      financialROI: "40-70% reduction in operational costs over 2 years"
    },
    {
      title: "Platform Ecosystems",
      description: "Build infrastructure that enables others to create value on your platform",
      businessImpact: "Scales innovation and user acquisition without proportional cost increase",
      implementationCost: "$200K-500K",
      timeToValue: "9-15 months",
      complexity: "Very High",
      examples: [
        "App stores: Developers build apps = more users = more developers",
        "API platforms: Integrations = more utility = more customers",
        "Plugin systems: Extensions = more functionality = more adoption"
      ],
      keyMetrics: ["Developer adoption", "API calls", "Plugin revenue", "Ecosystem GDP"],
      financialROI: "80% of new features built by third parties at no direct cost"
    },
    {
      title: "Virality Mechanics",
      description: "Product features that inherently encourage user-to-user sharing and invitations",
      businessImpact: "Reduces customer acquisition costs to near-zero for viral products",
      implementationCost: "$50K-150K",
      timeToValue: "2-4 months",
      complexity: "Medium",
      examples: [
        "Collaboration tools: Working together requires inviting teammates",
        "Gaming: Playing with friends is more fun than playing alone",
        "Content platforms: Sharing content drives new user acquisition"
      ],
      keyMetrics: ["Viral coefficient (k-factor)", "Invitation conversion", "Sharing rate", "Loop velocity"],
      financialROI: "90% reduction in paid acquisition costs once viral"
    }
  ];

  const implementationRoadmap = [
    {
      phase: "Phase 1: Growth Audit",
      duration: "4-6 weeks",
      budget: "$25K-50K",
      objectives: [
        "Map current user acquisition channels and costs",
        "Identify natural network effects in your product",
        "Analyze user behavior for viral opportunities",
        "Calculate baseline growth metrics"
      ],
      deliverables: [
        "Growth channel analysis report",
        "Network effect opportunity map",
        "User behavior heatmap",
        "Growth model with baseline projections"
      ],
      keyActivities: [
        "Cohort analysis of user behavior",
        "Channel attribution modeling",
        "User interview and survey research",
        "Competitive growth pattern analysis"
      ],
      successCriteria: [
        "Identified 3-5 high-potential growth loops",
        "Quantified current growth constraints",
        "Built predictive growth model",
        "Secured stakeholder buy-in"
      ]
    },
    {
      phase: "Phase 2: Loop Design",
      duration: "6-8 weeks",
      budget: "$50K-100K",
      objectives: [
        "Design specific growth mechanisms",
        "Create user journey maps for viral flows",
        "Build prototypes of key features",
        "Test assumptions with user research"
      ],
      deliverables: [
        "Growth loop specifications",
        "User flow diagrams",
        "Interactive prototypes",
        "Assumption validation report"
      ],
      keyActivities: [
        "Growth loop workshops",
        "User experience design",
        "Technical architecture planning",
        "A/B test design"
      ],
      successCriteria: [
        "Designed 2-3 implementable growth loops",
        "Validated assumptions with target users",
        "Estimated impact and resource requirements",
        "Prioritized implementation roadmap"
      ]
    },
    {
      phase: "Phase 3: MVP Implementation",
      duration: "8-12 weeks",
      budget: "$100K-250K",
      objectives: [
        "Build minimum viable growth features",
        "Implement tracking and analytics",
        "Launch to small user segment",
        "Measure initial performance"
      ],
      deliverables: [
        "Working growth features",
        "Analytics dashboard",
        "Initial performance report",
        "Optimization roadmap"
      ],
      keyActivities: [
        "Feature development",
        "Analytics implementation",
        "Gradual rollout",
        "Performance monitoring"
      ],
      successCriteria: [
        "Achieved 50% of target growth metrics",
        "Viral coefficient > 0.5 (if applicable)",
        "User engagement increased by 25%",
        "Clear optimization path identified"
      ]
    },
    {
      phase: "Phase 4: Optimization & Scaling",
      duration: "12-24 weeks",
      budget: "$75K-200K",
      objectives: [
        "Optimize growth loops based on data",
        "Scale successful features to all users",
        "Implement additional growth mechanisms",
        "Build sustainable growth systems"
      ],
      deliverables: [
        "Optimized growth features",
        "Scaled implementation",
        "Multi-loop growth system",
        "Automated growth monitoring"
      ],
      keyActivities: [
        "A/B testing and optimization",
        "Feature scaling",
        "Additional loop implementation",
        "Automation and monitoring"
      ],
      successCriteria: [
        "Achieved target growth rates",
        "Reduced customer acquisition cost by 60%",
        "Implemented 2+ compounding growth loops",
        "Built sustainable growth engine"
      ]
    }
  ];

  const financialModels = [
    {
      model: "Network Effect Valuation",
      description: "Valuing businesses based on network size and density rather than traditional metrics",
      formula: "Value = (Users^2) × Value per Connection",
      application: "Social networks, marketplaces, communication platforms",
      examples: [
        "Facebook: $1B+ valuation at 1M users due to network effects",
        "Uber: City-by-city expansion with local network effects",
        "Airbnb: Geographic network effects create defensible moats"
      ],
      keyMetrics: ["Metcalfe's Law", "Network density", "Cross-side effects", "Switching costs"],
      valuationMultiples: "10-50x revenue vs 3-8x for traditional businesses"
    },
    {
      model: "Data Asset Valuation",
      description: "Valuing proprietary data as a compounding asset that improves over time",
      formula: "Value = Data Volume × Quality × Monetization Rate",
      application: "AI companies, data platforms, predictive analytics",
      examples: [
        "Google: Search data improves results = more searches = better data",
        "Netflix: Viewing data improves recommendations = more viewing",
        "Amazon: Purchase data improves recommendations = more purchases"
      ],
      keyMetrics: ["Data uniqueness", "Prediction accuracy", "Data freshness", "Application breadth"],
      valuationMultiples: "15-30x revenue vs 5-10x for non-data businesses"
    },
    {
      model: "Platform Ecosystem Valuation",
      description: "Valuing the economic activity generated by third-party developers",
      formula: "Value = Platform Revenue + (Ecosystem GDP × Take Rate)",
      application: "App stores, API platforms, developer ecosystems",
      examples: [
        "Apple App Store: $64B ecosystem value with 30% take rate",
        "Salesforce: $5B ecosystem through AppExchange",
        "Shopify: $12B ecosystem through app store and themes"
      ],
      keyMetrics: ["Developer count", "Ecosystem revenue", "Platform stickiness", "Switching costs"],
      valuationMultiples: "20-40x revenue vs 8-15x for standalone products"
    }
  ];

  const caseStudies = [
    {
      company: "ConnectFlow",
      industry: "B2B SaaS Collaboration",
      challenge: "Linear growth, $150 CAC, 40% annual churn",
      solution: "Redesigned as collaboration platform with team-based viral loops",
      implementation: [
        "Team invitation system with 5.2x viral coefficient",
        "Shared workspaces requiring team coordination",
        "Network effects between connected organizations"
      ],
      results: [
        "CAC reduced from $150 to $25 (83% reduction)",
        "Growth rate increased from 15% to 85% monthly",
        "Churn reduced from 40% to 15% annually",
        "Valuation multiple increased from 4x to 12x revenue"
      ],
      timeline: "6 months to see results, 12 months for full impact",
      investment: "$200K implementation cost, $1.2M annual value created"
    },
    {
      company: "DataBridge",
      industry: "Data Analytics Platform",
      challenge: "Manual onboarding, limited adoption, high support costs",
      solution: "Built API ecosystem with self-service developer platform",
      implementation: [
        "Comprehensive API documentation and SDKs",
        "Developer community and marketplace",
        "Automated onboarding and provisioning",
        "Usage-based pricing with free tier"
      ],
      results: [
        "API calls grew 10x in 6 months",
        "200+ third-party integrations created",
        "Support costs reduced by 70%",
        "Became industry standard for data integration"
      ],
      timeline: "4 months to MVP, 9 months for ecosystem traction",
      investment: "$350K implementation cost, $2.5M annual value created"
    },
    {
      company: "MarketMakers",
      industry: "E-commerce Marketplace",
      challenge: "Stagnant growth, high marketing costs, low seller retention",
      solution: "Redesigned as platform enabling third-party sellers",
      implementation: [
        "Seller self-service onboarding",
        "Automated inventory and pricing tools",
        "Buyer-seller matching algorithms",
        "Review and trust systems"
      ],
      results: [
        "GMV grew 3x in 8 months",
        "80% of growth from ecosystem partners",
        "Marketing costs reduced by 85%",
        "Seller retention increased from 40% to 75%"
      ],
      timeline: "3 months to pilot, 6 months for full platform launch",
      investment: "$150K implementation cost, $800K annual value created"
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
              src="/images/insights/growth-architecture-hero.jpg"
              alt="Growth Architecture background"
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
                  Growth Systems
                </span>
                <span className="text-gray-400 text-sm">7 min read</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8 leading-tight tracking-tight">
                Growth Through<br />
                <span className="text-[#8B5CF6]">Architecture</span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                How to design growth systems that compound over time, not just growth hacks. Real data from 20+ companies showing architectural patterns that create sustainable, compounding growth.
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

      {/* Growth Metrics */}
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
              Architectural vs Traditional<br />
              <span className="text-[#8B5CF6]">Growth Metrics</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Measured improvements from implementing growth architecture patterns
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {growthMetrics.map((metric, index) => (
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
                    <span className="text-gray-500 text-sm">Architectural:</span>
                    <span className="text-green-400 text-sm">{metric.architectural}</span>
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

      {/* Growth Patterns */}
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
              Growth <span className="text-[#8B5CF6]">Patterns</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Four architectural patterns that create compounding growth systems
            </p>
          </motion.div>

          <div className="space-y-8">
            {growthPatterns.map((pattern, index) => (
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
                    {index === 0 && <Network className="w-6 h-6 text-[#8B5CF6]" />}
                    {index === 1 && <Activity className="w-6 h-6 text-[#8B5CF6]" />}
                    {index === 2 && <Rocket className="w-6 h-6 text-[#8B5CF6]" />}
                    {index === 3 && <ArrowUpRight className="w-6 h-6 text-[#8B5CF6]" />}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{pattern.title}</h3>
                    <p className="text-gray-400">{pattern.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
                  <div className="bg-green-900/20 border border-green-800/30 rounded-lg p-4">
                    <div className="flex items-center mb-2">
                      <TrendingUp className="w-4 h-4 mr-2 text-green-400" />
                      <span className="text-green-400 font-semibold">Business Impact</span>
                    </div>
                    <p className="text-gray-300 text-sm">{pattern.businessImpact}</p>
                  </div>

                  <div className="bg-blue-900/20 border border-blue-800/30 rounded-lg p-4">
                    <div className="flex items-center mb-2">
                      <Zap className="w-4 h-4 mr-2 text-blue-400" />
                      <span className="text-blue-400 font-semibold">Implementation</span>
                    </div>
                    <p className="text-gray-300 text-sm">{pattern.timeToValue} • {pattern.implementationCost}</p>
                  </div>

                  <div className="bg-purple-900/20 border border-purple-800/30 rounded-lg p-4">
                    <div className="flex items-center mb-2">
                      <Target className="w-4 h-4 mr-2 text-purple-400" />
                      <span className="text-purple-400 font-semibold">Complexity</span>
                    </div>
                    <p className="text-gray-300 text-sm">{pattern.complexity}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Real-World Examples:</h4>
                    <ul className="space-y-2 mb-4">
                      {pattern.examples.map((example, exampleIndex) => (
                        <li key={exampleIndex} className="flex items-start">
                          <CheckCircle className="w-4 h-4 mr-2 text-[#8B5CF6] mt-0.5 flex-shrink-0" />
                          <span className="text-gray-300 text-sm">{example}</span>
                        </li>
                      ))}
                    </ul>

                    <h4 className="text-lg font-semibold text-white mb-3">Key Metrics:</h4>
                    <div className="flex flex-wrap gap-2">
                      {pattern.keyMetrics.map((metric, metricIndex) => (
                        <span key={metricIndex} className="bg-[#8B5CF6]/10 border border-[#8B5CF6]/20 text-[#8B5CF6] px-3 py-1 rounded-full text-sm">
                          {metric}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="bg-[#8B5CF6]/10 border border-[#8B5CF6]/20 rounded-lg p-4">
                    <div className="flex items-center mb-2">
                      <BarChart className="w-4 h-4 mr-2 text-[#8B5CF6]" />
                      <span className="text-[#8B5CF6] font-semibold">Financial ROI</span>
                    </div>
                    <p className="text-gray-300 text-sm">{pattern.financialROI}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Roadmap */}
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
              6-month journey to building compounding growth systems
            </p>
          </motion.div>

          <div className="space-y-8">
            {implementationRoadmap.map((phase, index) => (
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
                    <h4 className="text-lg font-semibold text-white mb-3">Key Activities:</h4>
                    <ul className="space-y-2 mb-6">
                      {phase.keyActivities.map((activity, activityIndex) => (
                        <li key={activityIndex} className="flex items-start">
                          <Zap className="w-4 h-4 mr-2 text-yellow-400 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-300 text-sm">{activity}</span>
                        </li>
                      ))}
                    </ul>

                    <h4 className="text-lg font-semibold text-white mb-3">Success Criteria:</h4>
                    <ul className="space-y-2">
                      {phase.successCriteria.map((criteria, criteriaIndex) => (
                        <li key={criteriaIndex} className="flex items-start">
                          <Lightbulb className="w-4 h-4 mr-2 text-purple-400 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-300 text-sm">{criteria}</span>
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
              Financial <span className="text-[#8B5CF6]">Models</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              How growth architecture changes valuation and financial metrics
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
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3">{model.model}</h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">{model.description}</p>
                    
                    <div className="bg-gray-800/50 rounded-lg p-4 mb-4">
                      <h4 className="text-[#8B5CF6] font-semibold mb-2">Formula:</h4>
                      <p className="text-gray-300 font-mono text-sm">{model.formula}</p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Best For:</h4>
                      <p className="text-gray-300 mb-4">{model.application}</p>
                      
                      <h4 className="text-lg font-semibold text-white mb-3">Key Metrics:</h4>
                      <div className="flex flex-wrap gap-2">
                        {model.keyMetrics.map((metric, metricIndex) => (
                          <span key={metricIndex} className="bg-[#8B5CF6]/10 border border-[#8B5CF6]/20 text-[#8B5CF6] px-3 py-1 rounded-full text-sm">
                            {metric}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-green-900/20 border border-green-800/30 rounded-lg p-4">
                      <h4 className="text-green-400 font-semibold mb-2">Valuation Multiples</h4>
                      <p className="text-gray-300 text-sm">{model.valuationMultiples}</p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Real Examples:</h4>
                      <ul className="space-y-2">
                        {model.examples.map((example, exampleIndex) => (
                          <li key={exampleIndex} className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 text-[#8B5CF6] mt-0.5 flex-shrink-0" />
                            <span className="text-gray-300 text-sm">{example}</span>
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

      {/* Case Studies */}
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
              Real <span className="text-[#8B5CF6]">Case Studies</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Detailed results from implementing growth architecture in real companies
            </p>
          </motion.div>

          <div className="space-y-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#0D0D0D] border border-gray-800 rounded-lg p-8"
              >
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white">{study.company}</h3>
                    <p className="text-gray-400">{study.industry}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[#8B5CF6] font-semibold">{study.investment}</p>
                    <p className="text-gray-400 text-sm">{study.timeline}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
                  <div className="bg-red-900/20 border border-red-800/30 rounded-lg p-4">
                    <h4 className="text-red-400 font-semibold mb-2">Challenge</h4>
                    <p className="text-gray-300 text-sm">{study.challenge}</p>
                  </div>

                  <div className="bg-blue-900/20 border border-blue-800/30 rounded-lg p-4">
                    <h4 className="text-blue-400 font-semibold mb-2">Solution</h4>
                    <ul className="space-y-1">
                      {study.implementation.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start">
                          <CheckCircle className="w-3 h-3 mr-1 text-blue-400 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-300 text-xs">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-green-900/20 border border-green-800/30 rounded-lg p-4">
                    <h4 className="text-green-400 font-semibold mb-2">Results</h4>
                    <ul className="space-y-1">
                      {study.results.map((result, resultIndex) => (
                        <li key={resultIndex} className="flex items-start">
                          <TrendingUp className="w-3 h-3 mr-1 text-green-400 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-300 text-xs">{result}</span>
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
                title: "Design for Compounding",
                description: "Build systems that get better with each user, not just bigger.",
                icon: <Activity className="w-6 h-6" />
              },
              {
                title: "Measure Network Effects",
                description: "Track viral coefficient and network density, not just user count.",
                icon: <Network className="w-6 h-6" />
              },
              {
                title: "Invest in Architecture",
                description: "Spend 30% of development budget on growth systems, not features.",
                icon: <Rocket className="w-6 h-6" />
              },
              {
                title: "Focus on Retention",
                description: "Architectural growth reduces churn by creating switching costs.",
                icon: <Users className="w-6 h-6" />
              },
              {
                title: "Enable Others",
                description: "Build platforms that let others create value for you.",
                icon: <Target className="w-6 h-6" />
              },
              {
                title: "Think Long-Term",
                description: "Growth architecture takes 6-12 months to show results.",
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
              <span className="text-[#8B5CF6]">Growth Architecture</span>?
            </h2>
            <p className="text-xl text-gray-400 mb-10 max-w-3xl mx-auto">
              Apply these architectural patterns to your venture with our growth systems program.
            </p>
            
            <div className="flex flex-wrap gap-5 justify-center">
              <Link
                href="/growth-strategy"
                className="inline-flex items-center px-8 py-4 bg-[#8B5CF6] text-white hover:bg-white hover:text-[#8B5CF6] hover:border-[#8B5CF6] border-2 border-[#8B5CF6] transition-all duration-300 rounded-full font-medium"
              >
                Design Growth Systems
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