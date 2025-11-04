"use client";

import { motion } from 'framer-motion';
import { ArrowRight, Search, Target, Lightbulb, Lock, Key, CheckCircle, Compass, Map, Binoculars, AlertCircle, Zap } from 'lucide-react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export default function SystemDiscoveryPage() {
  const discoveryPrinciples = [
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Find the Bottleneck",
      description: "Identify the fundamental constraint holding your entire market back"
    },
    {
      icon: <Key className="w-6 h-6" />,
      title: "Design the Key",
      description: "Create the minimal system that dissolves the bottleneck completely"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Ecosystem Fit",
      description: "Test not just product-market fit, but ecosystem-system fit"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Cascading Impact",
      description: "Validate that your solution creates ripple effects across the industry"
    },
    {
      icon: <Compass className="w-6 h-6" />,
      title: "System Thinking",
      description: "Map the complete value chain, not just your piece of it"
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Architectural Innovation",
      description: "Focus on structural changes, not feature improvements"
    }
  ];

  const discoveryProcess = [
    {
      phase: "Phase 1",
      title: "Market Archaeology",
      duration: "Weeks 1-2",
      description: "Uncover the hidden constraints and inefficiencies in your market",
      activities: [
        "Value chain mapping",
        "Stakeholder interviews",
        "Constraint identification", 
        "Opportunity sizing"
      ],
      deliverables: ["Market map", "Constraint analysis", "Opportunity matrix"]
    },
    {
      phase: "Phase 2",
      title: "Bottleneck Validation",
      duration: "Weeks 3-4", 
      description: "Validate that you've found the true fundamental bottleneck",
      activities: [
        "Customer deep dives",
        "Expert interviews",
        "Data analysis",
        "Constraint testing"
      ],
      deliverables: ["Validated bottleneck", "Impact model", "Success metrics"]
    },
    {
      phase: "Phase 3",
      title: "Key Design",
      duration: "Weeks 5-6",
      description: "Design the minimal system that unlocks the bottleneck",
      activities: [
        "Solution architecture",
        "Business model design",
        "Network effect mapping",
        "Go-to-market strategy"
      ],
      deliverables: ["System blueprint", "Business model", "Launch plan"]
    },
    {
      phase: "Phase 4",
      title: "Ecosystem Validation",
      duration: "Weeks 7-8",
      description: "Test ecosystem-system fit before full investment",
      activities: [
        "Prototype testing",
        "Partner validation",
        "Ecosystem simulation",
        "Impact measurement"
      ],
      deliverables: ["Validated system", "Ecosystem plan", "Scale strategy"]
    }
  ];

  const discoveryTools = [
    {
      tool: "Constraint Mapping",
      description: "Systematic identification of bottlenecks across value chains",
      application: "Market analysis, opportunity identification",
      outcome: "Clear understanding of fundamental constraints"
    },
    {
      tool: "Ecosystem Simulation",
      description: "Model how your solution impacts the entire market system",
      application: "Impact validation, risk assessment",
      outcome: "Predictive understanding of ecosystem effects"
    },
    {
      tool: "Network Effect Design",
      description: "Design and test network effects before building",
      application: "Product architecture, growth modeling",
      outcome: "Validated network effect mechanisms"
    },
    {
      tool: "System Fit Testing",
      description: "Test not just product-market fit, but ecosystem-system fit",
      application: "Validation, market entry strategy",
      outcome: "Confidence in ecosystem positioning"
    }
  ];

  const caseStudies = [
    {
      company: "SupplyChainOS",
      bottleneck: "Manufacturing coordination across 50+ suppliers was manual and error-prone",
      solution: "Created real-time coordination platform that became industry standard",
      impact: "Reduced coordination costs by 80%, became essential infrastructure"
    },
    {
      company: "HealthData",
      bottleneck: "Medical data sharing between hospitals was fragmented and insecure",
      solution: "Built secure data exchange protocol with network effects",
      impact: "Adopted by 200+ hospitals, enabled new healthcare services"
    },
    {
      company: "EduConnect",
      bottleneck: "Educational content creation was siloed and inefficient",
      solution: "Created collaborative platform enabling educator ecosystem",
      impact: "10,000+ educators, 3x content creation efficiency"
    }
  ];

  return (
    <div className="bg-black text-white">
      <Header />

      {/* Hero Section */}
      <motion.section
        className="min-h-screen flex items-center relative border-b border-gray-800 overflow-hidden pt-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Background with gradient */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
            <div className="absolute top-1/4 right-0 w-64 h-64 bg-[#8B5CF6] rounded-full filter blur-[150px] opacity-20"></div>
            <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-[#8B5CF6] rounded-full filter blur-[150px] opacity-15"></div>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 md:py-32 z-10 relative">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-8 sm:mb-10 leading-tight tracking-tight">
                Find the<br className="hidden sm:block" />
                <span className="text-[#8B5CF6]">Fundamental</span><br className="hidden sm:block" />
                Bottleneck
              </h1>
              
              <p className="text-xl sm:text-2xl md:text-3xl text-white mb-10 sm:mb-12 font-light leading-relaxed">
                Stop testing product-market fit. Start testing ecosystem-system fit. 
                The smallest key that unlocks the largest market.
              </p>

              <div className="flex flex-wrap gap-5">
                <Link
                  href="/apply-founder"
                  className="inline-flex items-center px-8 py-4 bg-[#8B5CF6] text-white hover:bg-white hover:text-[#8B5CF6] hover:border-[#8B5CF6] border-2 border-[#8B5CF6] transition-all duration-300 rounded-full text-lg font-medium relative group overflow-hidden"
                >
                  <span className="relative z-10 flex items-center">
                    Start System Discovery
                    <ArrowRight className="ml-2" size={20} />
                  </span>
                  <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
                </Link>
                <Link
                  href="#process"
                  className="btn-outline rounded-full inline-flex items-center text-lg px-8 py-4 border-2 hover:border-white hover:bg-white/10 transition-all duration-300 relative group overflow-hidden"
                >
                  <span className="relative z-10">Discovery Process</span>
                  <span className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-all duration-300 transform scale-x-0 group-hover:scale-x-100 origin-left"></span>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Discovery Principles */}
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
              System Discovery <span className="text-[#8B5CF6]">Principles</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              The fundamental approach to finding and validating bottlenecks that hold entire markets back.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {discoveryPrinciples.map((principle, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#0D0D0D] border border-gray-800 rounded-lg p-6 hover:border-[#8B5CF6] transition-all duration-300 group"
              >
                <div className="text-[#8B5CF6] mb-4">
                  {principle.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-[#8B5CF6] transition-colors">
                  {principle.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {principle.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Discovery Process */}
      <section id="process" className="py-20 bg-black border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              8-Week <span className="text-[#8B5CF6]">Discovery Process</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              From market archaeology to ecosystem validation. A systematic approach to finding your key.
            </p>
          </motion.div>

          <div className="space-y-8">
            {discoveryProcess.map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-[#0D0D0D] to-[#1a1a1a] border border-gray-800 rounded-lg p-8 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#8B5CF6] rounded-full filter blur-[60px] opacity-10"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-[#8B5CF6]/20 border border-[#8B5CF6]/30 text-[#8B5CF6] px-3 py-1 rounded-full text-sm font-medium">
                      {phase.phase}
                    </span>
                    <span className="text-gray-500 text-sm">{phase.duration}</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {phase.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {phase.description}
                  </p>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-[#8B5CF6] font-medium mb-3">Activities:</h4>
                      <ul className="space-y-2">
                        {phase.activities.map((activity, activityIndex) => (
                          <li key={activityIndex} className="flex items-center text-gray-400 text-sm">
                            <CheckCircle className="w-3 h-3 mr-2 text-[#8B5CF6]" />
                            <span>{activity}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-[#8B5CF6] font-medium mb-3">Deliverables:</h4>
                      <ul className="space-y-2">
                        {phase.deliverables.map((deliverable, deliverableIndex) => (
                          <li key={deliverableIndex} className="flex items-center text-gray-400 text-sm">
                            <ArrowRight className="w-3 h-3 mr-2 text-[#8B5CF6]" />
                            <span>{deliverable}</span>
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

      {/* Discovery Tools */}
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
              Discovery <span className="text-[#8B5CF6]">Tools</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Proprietary methodologies for finding and validating fundamental bottlenecks.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {discoveryTools.map((tool, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#0D0D0D] border border-gray-800 rounded-lg p-8 hover:border-[#8B5CF6] transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <Search className="w-8 h-8 text-[#8B5CF6] mr-3" />
                  <h3 className="text-2xl font-bold text-white">{tool.tool}</h3>
                </div>
                
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {tool.description}
                </p>
                
                <div className="space-y-3">
                  <div>
                    <p className="text-[#8B5CF6] font-medium text-sm">Application:</p>
                    <p className="text-gray-400 text-sm">{tool.application}</p>
                  </div>
                  <div>
                    <p className="text-[#8B5CF6] font-medium text-sm">Outcome:</p>
                    <p className="text-gray-400 text-sm">{tool.outcome}</p>
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
              Bottleneck Discovery <span className="text-[#8B5CF6]">Success Stories</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Real examples of ventures that found and solved fundamental market constraints.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-[#8B5CF6]/10 to-transparent border border-[#8B5CF6]/30 rounded-lg p-8"
              >
                <div className="flex items-center mb-4">
                  <Lock className="w-6 h-6 text-[#8B5CF6] mr-2" />
                  <h3 className="text-xl font-bold text-white">{study.company}</h3>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-[#8B5CF6] font-semibold mb-2">Bottleneck Found:</h4>
                    <p className="text-gray-300 text-sm">{study.bottleneck}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-[#8B5CF6] font-semibold mb-2">Key Designed:</h4>
                    <p className="text-gray-300 text-sm">{study.solution}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-[#8B5CF6] font-semibold mb-2">Impact:</h4>
                    <p className="text-green-400 text-sm font-medium">{study.impact}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Traditional vs System Discovery */}
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
              Product Discovery vs<br />
              <span className="text-[#8B5CF6]">System Discovery</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              The fundamental difference between finding product features and finding market keys.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-red-900/10 border border-red-800/30 rounded-lg p-8"
            >
              <h3 className="text-2xl font-bold text-red-400 mb-6">Traditional Product Discovery</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-red-400 mr-3">✗</span>
                  <span className="text-gray-300">Focus on user problems and pain points</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-3">✗</span>
                  <span className="text-gray-300">Product-market fit as primary goal</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-3">✗</span>
                  <span className="text-gray-300">Feature validation and user testing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-3">✗</span>
                  <span className="text-gray-300">Competitive analysis and positioning</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-3">✗</span>
                  <span className="text-gray-300">Linear thinking and incremental improvements</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-green-900/10 border border-green-800/30 rounded-lg p-8"
            >
              <h3 className="text-2xl font-bold text-green-400 mb-6">System Discovery</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-green-400 mr-3">✓</span>
                  <span className="text-gray-300">Focus on market constraints and bottlenecks</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3">✓</span>
                  <span className="text-gray-300">Ecosystem-system fit as primary goal</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3">✓</span>
                  <span className="text-gray-300">System validation and ecosystem testing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3">✓</span>
                  <span className="text-gray-300">Category creation and market design</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3">✓</span>
                  <span className="text-gray-300">Systems thinking and architectural innovation</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Warning Section */}
      <section className="py-20 bg-black border-b border-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-[#8B5CF6]/10 border border-[#8B5CF6]/30 rounded-lg p-8"
          >
            <div className="flex items-start">
              <AlertCircle className="w-6 h-6 mr-3 text-[#8B5CF6] mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-white mb-3">Not for Everyone</h3>
                <p className="text-gray-300 mb-4">
                  System Discovery is for founders who want to build category-defining businesses, not just better products. 
                  If you're looking for quick wins or incremental improvements, this approach isn't for you.
                </p>
                <p className="text-gray-300">
                  But if you're ready to find the key that unlocks an entire market, that's exactly what we do.
                </p>
              </div>
            </div>
          </motion.div>
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
              Ready to Find<br />
              <span className="text-[#8B5CF6]">Your Key</span>?
            </h2>
            <p className="text-xl text-gray-400 mb-10 max-w-3xl mx-auto">
              Stop building features. Start finding the bottlenecks that hold entire industries back.
            </p>
            
            <div className="flex flex-wrap gap-5 justify-center">
              <Link
                href="/apply-founder"
                className="inline-flex items-center px-8 py-4 bg-[#8B5CF6] text-white hover:bg-white hover:text-[#8B5CF6] hover:border-[#8B5CF6] border-2 border-[#8B5CF6] transition-all duration-300 rounded-full font-medium"
              >
                Start System Discovery
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/venture-architecture"
                className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#8B5CF6] transition-all duration-300 rounded-full font-medium"
              >
                Explore Venture Architecture
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