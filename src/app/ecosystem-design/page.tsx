"use client";

import { motion } from 'framer-motion';
import { ArrowRight, Network, Target, Globe, Users, Zap, Lock, Key, CheckCircle, ArrowUpRight, PieChart, Shield } from 'lucide-react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export default function EcosystemDesignPage() {
  const ecosystemPrinciples = [
    {
      icon: <Network className="w-6 h-6" />,
      title: "Network Thinking",
      description: "Consider how different parts of your business connect and reinforce each other"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Customer Focus",
      description: "Build systems that solve real problems for specific customer segments"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Platform Approach",
      description: "Create systems that can grow and adapt over time"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Community Building",
      description: "Design systems that encourage user engagement and retention"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Value Creation",
      description: "Focus on creating measurable value for all participants"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Sustainable Systems",
      description: "Build business models that can last and scale effectively"
    }
  ];

  const ecosystemTypes = [
    {
      type: "Service Platforms",
      description: "Businesses that connect service providers with customers",
      examples: ["Consulting networks", "Service marketplaces", "Professional platforms"],
      icon: <Network className="w-8 h-8" />
    },
    {
      type: "Product Platforms", 
      description: "Systems that enable product creation and distribution",
      examples: ["E-commerce platforms", "Product tools", "Creation software"],
      icon: <PieChart className="w-8 h-8" />
    },
    {
      type: "Community Platforms",
      description: "Networks that bring people together around shared interests",
      examples: ["Professional groups", "Interest communities", "Learning networks"],
      icon: <Users className="w-8 h-8" />
    },
    {
      type: "Business Tools",
      description: "Systems that help businesses operate more effectively",
      examples: ["Management software", "Communication tools", "Analytics platforms"],
      icon: <Globe className="w-8 h-8" />
    }
  ];

  const designProcess = [
    {
      step: "01",
      title: "Market Research",
      description: "Understand customer needs and market opportunities",
      activities: ["Customer interviews", "Market analysis", "Problem identification", "Opportunity assessment"]
    },
    {
      step: "02", 
      title: "System Design",
      description: "Design the complete business system including all components",
      activities: ["Business model", "Value proposition", "Customer segments", "Revenue streams"]
    },
    {
      step: "03",
      title: "Minimum Viable Product",
      description: "Build the simplest version that tests core assumptions",
      activities: ["Core features", "User testing", "Feedback collection", "Iteration planning"]
    },
    {
      step: "04",
      title: "Growth Planning",
      description: "Plan for sustainable growth and system improvements",
      activities: ["Growth strategy", "Scaling preparation", "Process optimization", "Long-term planning"]
    }
  ];

  const caseStudies = [
    {
      company: "DataTools",
      challenge: "Teams struggled with fragmented data and analytics tools",
      solution: "Created integrated platform that connected data sources and analytics",
      result: "Improved team efficiency, better decision-making, growing user base"
    },
    {
      company: "ConnectFlow",
      challenge: "Remote teams had difficulty collaborating effectively",
      solution: "Built collaboration platform that integrated communication and project management",
      result: "Better team coordination, improved productivity, steady growth"
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
              src="/images/ecosystem-design-hero.jpg"
              alt="Ecosystem Design background"
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
                Design Better<br className="hidden sm:block" />
                <span className="text-[#8B5CF6]">Business</span><br className="hidden sm:block" />
                Systems
              </h1>
              
              <p className="text-xl sm:text-2xl md:text-3xl text-white mb-10 sm:mb-12 font-light leading-relaxed">
                Learn to build connected systems that solve real problems. 
                Focus on creating value through thoughtful design and practical execution.
              </p>

              <div className="flex flex-wrap gap-5">
                <Link
                  href="/apply-founder"
                  className="inline-flex items-center px-8 py-4 bg-[#8B5CF6] text-white hover:bg-white hover:text-[#8B5CF6] hover:border-[#8B5CF6] border-2 border-[#8B5CF6] transition-all duration-300 rounded-full text-lg font-medium relative group overflow-hidden"
                >
                  <span className="relative z-10 flex items-center">
                    Design Your Ecosystem
                    <ArrowRight className="ml-2" size={20} />
                  </span>
                  <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
                </Link>
                <Link
                  href="#ecosystem-types"
                  className="btn-outline rounded-full inline-flex items-center text-lg px-8 py-4 border-2 hover:border-white hover:bg-white/10 transition-all duration-300 relative group overflow-hidden"
                >
                  <span className="relative z-10">Explore Ecosystem Types</span>
                  <span className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-all duration-300 transform scale-x-0 group-hover:scale-x-100 origin-left"></span>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Ecosystem Principles */}
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
              Ecosystem Design <span className="text-[#8B5CF6]">Principles</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              The fundamental rules for building markets that create and capture sustainable value.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ecosystemPrinciples.map((principle, index) => (
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

      {/* Ecosystem Types */}
      <section id="ecosystem-types" className="py-20 bg-black border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Types of <span className="text-[#8B5CF6]">Ecosystems</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Different ecosystem models for different types of network effects and value creation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {ecosystemTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-[#0D0D0D] to-[#1a1a1a] border border-gray-800 rounded-lg p-8 relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#8B5CF6] rounded-full filter blur-[80px] opacity-10 group-hover:opacity-20 transition-opacity"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center mb-4">
                    <div className="text-[#8B5CF6] mr-4">
                      {type.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white">
                      {type.type}
                    </h3>
                  </div>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {type.description}
                  </p>
                  
                  <div className="space-y-2">
                    <h4 className="text-[#8B5CF6] font-medium mb-2">Examples:</h4>
                    {type.examples.map((example, exampleIndex) => (
                      <div key={exampleIndex} className="flex items-center text-gray-400">
                        <ArrowUpRight className="w-3 h-3 mr-2 text-[#8B5CF6]" />
                        <span>{example}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Process */}
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
              Ecosystem Design <span className="text-[#8B5CF6]">Process</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              A systematic approach to designing and launching successful business ecosystems.
            </p>
          </motion.div>

          <div className="space-y-8">
            {designProcess.map((step, index) => (
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
              Ecosystem <span className="text-[#8B5CF6]">Success Stories</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Real examples of ventures that created markets instead of competing in them.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-[#8B5CF6]/10 to-transparent border border-[#8B5CF6]/30 rounded-lg p-8"
              >
                <h3 className="text-2xl font-bold text-white mb-4">{study.company}</h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-[#8B5CF6] font-semibold mb-2">Challenge</h4>
                    <p className="text-gray-300">{study.challenge}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-[#8B5CF6] font-semibold mb-2">Solution</h4>
                    <p className="text-gray-300">{study.solution}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-[#8B5CF6] font-semibold mb-2">Result</h4>
                    <p className="text-gray-300">{study.result}</p>
                  </div>
                </div>
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
              Ready to Design<br />
              <span className="text-[#8B5CF6]">Your Ecosystem</span>?
            </h2>
            <p className="text-xl text-gray-400 mb-10 max-w-3xl mx-auto">
              Stop competing. Start creating markets where you're the only logical choice.
            </p>
            
            <div className="flex flex-wrap gap-5 justify-center">
              <Link
                href="/apply-founder"
                className="inline-flex items-center px-8 py-4 bg-[#8B5CF6] text-white hover:bg-white hover:text-[#8B5CF6] hover:border-[#8B5CF6] border-2 border-[#8B5CF6] transition-all duration-300 rounded-full font-medium"
              >
                Start Ecosystem Design
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