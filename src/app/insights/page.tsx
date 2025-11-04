'use client';

import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, FileText, Video, TrendingUp, Zap, Network, Target, Rocket, Lightbulb } from 'lucide-react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export default function InsightsPage() {
  const featuredInsights = [
    {
      title: "Building Systems That Scale",
      excerpt: "Learn how to design business systems that grow with your startup, from architecture to implementation.",
      category: "Systems Architecture",
      readTime: "8 min read",
      image: "/images/insights/systems-that-scale-thumb.jpg",
      href: "/insights/systems-that-scale",
      icon: <Network className="w-5 h-5" />
    },
    {
      title: "The Ecosystem Advantage",
      excerpt: "Why building platforms and ecosystems creates more sustainable value than standalone products.",
      category: "Ecosystem Design",
      readTime: "6 min read",
      image: "/images/insights/ecosystem-advantage-thumb.jpg",
      href: "/insights/ecosystem-advantage",
      icon: <Target className="w-5 h-5" />
    },
    {
      title: "Practical AI Integration",
      excerpt: "Moving beyond AI hype to implement systems that solve real business problems.",
      category: "AI Systems",
      readTime: "10 min read",
      image: "/images/insights/practical-ai-integration-thumb.jpg",
      href: "/insights/practical-ai-integration",
      icon: <Zap className="w-5 h-5" />
    },
    {
      title: "Growth Through Architecture",
      excerpt: "How to design growth systems that compound over time, not just growth hacks.",
      category: "Growth Systems",
      readTime: "7 min read",
      image: "/images/insights/growth-architecture-thumb.jpg",
      href: "/insights/growth-architecture",
      icon: <Rocket className="w-5 h-5" />
    }
  ];

  const frameworks = [
    {
      title: "The Keymaster Method",
      description: "Our 12-week framework for building systems and infrastructure that last.",
      topics: ["System Design", "Infrastructure", "Scalability", "Implementation"],
      href: "/keymaster-method",
      color: "purple"
    },
    {
      title: "Ecosystem Architecture",
      description: "Design patterns for building platforms that enable others to succeed.",
      topics: ["Platform Design", "Network Effects", "API Design", "Developer Experience"],
      href: "/ecosystem-design",
      color: "teal"
    },
    {
      title: "AI Systems Design",
      description: "Practical approaches to integrating AI into business systems effectively.",
      topics: ["AI Integration", "Data Architecture", "Machine Learning", "Automation"],
      href: "/ai-workshops",
      color: "indigo"
    }
  ];

  const caseStudies = [
    {
      company: "ConnectFlow",
      challenge: "Linear growth and high customer acquisition costs",
      solution: "Redesigned as collaboration platform with network effects",
      results: "Significant user growth, reduced CAC, improved viral sharing",
      category: "Network Effects"
    },
    {
      company: "DataBridge",
      challenge: "Limited adoption and high churn in data platform",
      solution: "Built API ecosystem and developer community",
      results: "10x increase in API calls, 200+ integrations, industry standard",
      category: "Platform Strategy"
    },
    {
      company: "MarketMakers",
      challenge: "Stagnant growth in traditional marketplace",
      solution: "Redesigned as platform for third-party sellers",
      results: "3x increase in GMV, ecosystem-driven growth",
      category: "Ecosystem Design"
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
              src="/images/insights-bg.jpg"
              alt="Insights background"
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
                Building<br className="hidden sm:block" />
                <span className="text-[#8B5CF6]">Better</span><br className="hidden sm:block" />
                Systems
              </h1>
              
              <p className="text-xl sm:text-2xl md:text-3xl text-white mb-10 sm:mb-12 font-light leading-relaxed">
                Practical insights on building venture studios, ecosystem architecture, 
                and AI systems that create lasting value.
              </p>

              <div className="flex flex-wrap gap-5">
                <Link
                  href="#frameworks"
                  className="btn-outline rounded-full inline-flex items-center text-lg px-8 py-4 border-2 hover:border-white hover:bg-white/10 transition-all duration-300 relative group overflow-hidden"
                >
                  <span className="relative z-10">Explore Frameworks</span>
                  <span className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-all duration-300 transform scale-x-0 group-hover:scale-x-100 origin-left"></span>
                </Link>
                <Link
                  href="/apply-founder"
                  className="inline-flex items-center px-8 py-4 bg-[#8B5CF6] text-white hover:bg-white hover:text-[#8B5CF6] hover:border-[#8B5CF6] border-2 border-[#8B5CF6] transition-all duration-300 rounded-full text-lg font-medium relative group overflow-hidden"
                >
                  <span className="relative z-10 flex items-center">
                    Apply to Work With Us
                    <ArrowRight className="ml-2" size={20} />
                  </span>
                  <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Featured Insights */}
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
              Featured <span className="text-[#8B5CF6]">Insights</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Deep dives into the systems and frameworks that drive successful ventures.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredInsights.map((insight, index) => (
              <Link key={index} href={insight.href} className="block">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-[#0D0D0D] border border-gray-800 rounded-lg overflow-hidden hover:border-[#8B5CF6] transition-all duration-300 group"
                >
                  <div className="h-48 bg-gradient-to-br from-[#8B5CF6]/20 to-[#8B5CF6]/5 flex items-center justify-center">
                    <div className="text-[#8B5CF6]">
                      {insight.icon}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[#8B5CF6] text-sm font-medium">{insight.category}</span>
                      <span className="text-gray-500 text-sm">{insight.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#8B5CF6] transition-colors">
                      {insight.title}
                    </h3>
                    <p className="text-gray-400 mb-4 leading-relaxed">
                      {insight.excerpt}
                    </p>
                    <div className="inline-flex items-center text-[#8B5CF6] hover:text-white transition-colors">
                      Read more
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Frameworks Section */}
      <section id="frameworks" className="py-20 bg-black border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="text-[#8B5CF6]">Frameworks</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Proven approaches to building systems that scale and last.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {frameworks.map((framework, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-[#0D0D0D] to-[#1a1a1a] border border-gray-800 rounded-lg p-8 hover:border-[#8B5CF6] transition-all duration-300"
              >
                <div className="mb-6">
                  <div className={`w-12 h-12 rounded-lg bg-${framework.color}-600/20 border border-${framework.color}-600/30 flex items-center justify-center`}>
                    <Lightbulb className="w-6 h-6 text-[#8B5CF6]" />
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">{framework.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{framework.description}</p>
                
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {framework.topics.map((topic, topicIndex) => (
                      <span key={topicIndex} className="bg-[#8B5CF6]/10 border border-[#8B5CF6]/20 text-[#8B5CF6] px-3 py-1 rounded-full text-sm">
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
                
                <Link
                  href={framework.href}
                  className="inline-flex items-center text-[#8B5CF6] hover:text-white transition-colors font-medium"
                >
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
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
              Real <span className="text-[#8B5CF6]">Results</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              How our systems and frameworks have created tangible value.
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
                className="bg-[#0D0D0D] border border-gray-800 rounded-lg p-6"
              >
                <div className="mb-4">
                  <span className="bg-[#8B5CF6]/10 border border-[#8B5CF6]/20 text-[#8B5CF6] px-3 py-1 rounded-full text-sm">
                    {study.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">{study.company}</h3>
                
                <div className="space-y-3 mb-4">
                  <div>
                    <p className="text-gray-500 text-sm mb-1">Challenge</p>
                    <p className="text-gray-300">{study.challenge}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm mb-1">Solution</p>
                    <p className="text-gray-300">{study.solution}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm mb-1">Results</p>
                    <p className="text-green-400">{study.results}</p>
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
              Ready to Build<br />
              <span className="text-[#8B5CF6]">Better Systems</span>?
            </h2>
            <p className="text-xl text-gray-400 mb-10 max-w-3xl mx-auto">
              Join our programs or work with us directly to implement these frameworks in your venture.
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
                href="/programs"
                className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#8B5CF6] transition-all duration-300 rounded-full font-medium"
              >
                Explore Programs
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