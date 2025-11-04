"use client";

import { motion } from 'framer-motion';
import { ArrowRight, Zap, Target, TrendingUp, Network, Rocket, CheckCircle, BarChart, Users, Lightbulb, ArrowUpRight, Activity } from 'lucide-react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export default function CatalyticGrowthPage() {
  const growthPrinciples = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Catalytic, Not Competitive",
      description: "Create growth that enables others, rather than taking from competitors"
    },
    {
      icon: <Network className="w-6 h-6" />,
      title: "Network Effects",
      description: "Design growth loops that compound with each new user or interaction"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Leverage Points",
      description: "Find the small interventions that create disproportionate system-wide change"
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Cascading Impact",
      description: "Build growth that creates ripple effects across entire ecosystems"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Exponential Scaling",
      description: "Focus on architectures that enable significant growth, not incremental improvements"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Ecosystem Expansion",
      description: "Grow by enabling others to build and succeed on your platform"
    }
  ];

  const growthStrategies = [
    {
      title: "Network Effect Architecture",
      description: "Design systems that become more valuable as more people use them",
      examples: ["Two-sided marketplaces", "Social platforms", "Developer ecosystems", "Data networks"],
      impact: "Exponential growth after critical mass",
      complexity: "High"
    },
    {
      title: "Platform Expansion",
      description: "Grow by enabling third parties to create value on your infrastructure",
      examples: ["API platforms", "App stores", "Plugin ecosystems", "Integration marketplaces"],
      impact: "Sustainable compound growth",
      complexity: "Medium-High"
    },
    {
      title: "Viral Loop Design",
      description: "Build growth directly into your product's core functionality",
      examples: ["Referral programs", "Collaborative features", "Shared experiences", "Network tools"],
      impact: "Rapid user acquisition",
      complexity: "Medium"
    },
    {
      title: "Ecosystem Partnerships",
      description: "Create growth through strategic alliances and ecosystem integration",
      examples: ["Co-marketing partnerships", "Technology integrations", "Distribution alliances", "Joint ventures"],
      impact: "Accelerated market entry",
      complexity: "Low-Medium"
    }
  ];

  const growthProcess = [
    {
      step: "01",
      title: "Growth Architecture Audit",
      description: "Map your current growth systems and identify leverage points",
      activities: ["Growth loop mapping", "Network effect analysis", "Constraint identification", "Opportunity sizing"]
    },
    {
      step: "02",
      title: "Catalytic Strategy Design",
      description: "Design growth systems that create compounding returns",
      activities: ["Growth loop engineering", "Network effect design", "Partnership architecture", "Viral mechanism design"]
    },
    {
      step: "03",
      title: "Minimum Viable Growth",
      description: "Launch the smallest system that demonstrates compounding growth",
      activities: ["Core loop validation", "Network effect testing", "Partnership pilots", "Growth metric optimization"]
    },
    {
      step: "04",
      title: "Exponential Scaling",
      description: "Engineer and optimize for exponential, not linear, growth",
      activities: ["Growth loop optimization", "Network expansion", "Ecosystem development", "Compound growth systems"]
    }
  ];

  const caseStudies = [
    {
      company: "ConnectFlow",
      challenge: "SaaS company struggling with linear growth and high CAC",
      solution: "Redesigned product as collaboration platform with network effects",
      results: "Significant user growth in 6 months, CAC down 70%, improved viral sharing"
    },
    {
      company: "DataBridge",
      challenge: "Data platform with limited adoption and high churn",
      solution: "Built API ecosystem and developer community",
      results: "10x increase in API calls, 200+ integrations, became industry standard"
    },
    {
      company: "MarketMakers",
      challenge: "Traditional marketplace with stagnant growth",
      solution: "Redesigned as platform enabling third-party sellers",
      results: "3x increase in GMV, 80% of growth from ecosystem partners"
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
            <img
              src="/images/growth-strategy-hero.jpg"
              alt="Growth Strategy background"
              className="absolute inset-0 w-full h-full object-cover opacity-30"
            />
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
                Growth Through<br className="hidden sm:block" />
                <span className="text-[#8B5CF6]">Architecture</span><br className="hidden sm:block" />
                Not Aggression
              </h1>
              
              <p className="text-xl sm:text-2xl md:text-3xl text-white mb-10 sm:mb-12 font-light leading-relaxed">
                Stop fighting for market share. Design markets where you're the only logical choice. 
                Build growth systems that compound exponentially.
              </p>

              <div className="flex flex-wrap gap-5">
                <Link
                  href="/apply-founder"
                  className="inline-flex items-center px-8 py-4 bg-[#8B5CF6] text-white hover:bg-white hover:text-[#8B5CF6] hover:border-[#8B5CF6] border-2 border-[#8B5CF6] transition-all duration-300 rounded-full text-lg font-medium relative group overflow-hidden"
                >
                  <span className="relative z-10 flex items-center">
                    Design Growth Architecture
                    <ArrowRight className="ml-2" size={20} />
                  </span>
                  <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
                </Link>
                <Link
                  href="#strategies"
                  className="btn-outline rounded-full inline-flex items-center text-lg px-8 py-4 border-2 hover:border-white hover:bg-white/10 transition-all duration-300 relative group overflow-hidden"
                >
                  <span className="relative z-10">Explore Growth Strategies</span>
                  <span className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-all duration-300 transform scale-x-0 group-hover:scale-x-100 origin-left"></span>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Growth Principles */}
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
              Catalytic Growth <span className="text-[#8B5CF6]">Principles</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              The fundamental rules for building growth systems that create and capture sustainable value.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {growthPrinciples.map((principle, index) => (
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

      {/* Growth Strategies */}
      <section id="strategies" className="py-20 bg-black border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Growth <span className="text-[#8B5CF6]">Strategies</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Proven approaches for building compounding growth systems.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {growthStrategies.map((strategy, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-[#0D0D0D] to-[#1a1a1a] border border-gray-800 rounded-lg p-8 relative overflow-hidden hover:border-[#8B5CF6] transition-all duration-300 group"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#8B5CF6] rounded-full filter blur-[80px] opacity-10"></div>
                
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {strategy.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {strategy.description}
                  </p>
                  
                  <div className="mb-6">
                    <p className="text-[#8B5CF6] font-medium mb-3">Examples:</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {strategy.examples.map((example, exampleIndex) => (
                        <div key={exampleIndex} className="flex items-center text-gray-400 text-sm">
                          <ArrowUpRight className="w-3 h-3 mr-2 text-[#8B5CF6]" />
                          <span>{example}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-gray-700">
                    <div>
                      <p className="text-[#8B5CF6] font-medium text-sm">Impact:</p>
                      <p className="text-gray-400 text-xs">{strategy.impact}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-[#8B5CF6] font-medium text-sm">Complexity:</p>
                      <p className="text-gray-400 text-xs">{strategy.complexity}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Growth Process */}
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
              Growth Architecture <span className="text-[#8B5CF6]">Process</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              A systematic approach to designing and implementing catalytic growth systems.
            </p>
          </motion.div>

          <div className="space-y-8">
            {growthProcess.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#0D0D0D] border border-gray-800 rounded-lg p-8 relative"
              >
                <div className="flex flex-col lg:flex-row gap-8">
                  <div className="lg:w-1/4">
                    <div className="text-5xl font-bold text-[#8B5CF6] mb-4">{step.step}</div>
                    <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
                  </div>
                  
                  <div className="lg:w-3/4">
                    <p className="text-gray-300 mb-6 leading-relaxed">{step.description}</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {step.activities.map((activity, activityIndex) => (
                        <div key={activityIndex} className="flex items-center">
                          <CheckCircle className="w-4 h-4 mr-3 text-[#8B5CF6] flex-shrink-0" />
                          <span className="text-gray-400">{activity}</span>
                        </div>
                      ))}
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
              Catalytic Growth <span className="text-[#8B5CF6]">Case Studies</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Real examples of ventures that achieved exponential growth through architectural thinking.
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
                  <Activity className="w-6 h-6 text-[#8B5CF6] mr-2" />
                  <h3 className="text-xl font-bold text-white">{study.company}</h3>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-[#8B5CF6] font-semibold mb-2">Challenge</h4>
                    <p className="text-gray-300 text-sm">{study.challenge}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-[#8B5CF6] font-semibold mb-2">Solution</h4>
                    <p className="text-gray-300 text-sm">{study.solution}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-[#8B5CF6] font-semibold mb-2">Results</h4>
                    <p className="text-green-400 text-sm font-medium">{study.results}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Traditional vs Catalytic */}
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
              Traditional vs<br />
              <span className="text-[#8B5CF6]">Catalytic Growth</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              The fundamental difference between linear growth strategies and exponential growth architecture.
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
              <h3 className="text-2xl font-bold text-red-400 mb-6">Traditional Growth</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-red-400 mr-3">✗</span>
                  <span className="text-gray-300">Linear growth through marketing spend</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-3">✗</span>
                  <span className="text-gray-300">Competing for existing market share</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-3">✗</span>
                  <span className="text-gray-300">Customer acquisition as primary metric</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-3">✗</span>
                  <span className="text-gray-300">Growth requires continuous investment</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-3">✗</span>
                  <span className="text-gray-300">Diminishing returns over time</span>
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
              <h3 className="text-2xl font-bold text-green-400 mb-6">Catalytic Growth</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-green-400 mr-3">✓</span>
                  <span className="text-gray-300">Exponential growth through system design</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3">✓</span>
                  <span className="text-gray-300">Creating new markets and categories</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3">✓</span>
                  <span className="text-gray-300">Network effects as primary driver</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3">✓</span>
                  <span className="text-gray-300">Growth becomes self-sustaining</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3">✓</span>
                  <span className="text-gray-300">Compounding returns over time</span>
                </li>
              </ul>
            </motion.div>
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
              <span className="text-[#8B5CF6]">Catalytic Growth</span>?
            </h2>
            <p className="text-xl text-gray-400 mb-10 max-w-3xl mx-auto">
              Stop pushing for growth. Start designing systems that pull users in and compound exponentially.
            </p>
            
            <div className="flex flex-wrap gap-5 justify-center">
              <Link
                href="/apply-founder"
                className="inline-flex items-center px-8 py-4 bg-[#8B5CF6] text-white hover:bg-white hover:text-[#8B5CF6] hover:border-[#8B5CF6] border-2 border-[#8B5CF6] transition-all duration-300 rounded-full font-medium"
              >
                Design Growth Architecture
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