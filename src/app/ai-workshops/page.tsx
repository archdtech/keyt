"use client";

import { motion } from 'framer-motion';
import { ArrowRight, Brain, Cpu, Network, Zap, Target, CheckCircle, Calendar, Users, Award, BarChart, Shield, Lightbulb } from 'lucide-react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export default function AISystemsArchitecturePage() {
  const aiPrinciples = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI as Business Tool",
      description: "Use AI to solve specific business problems and improve operational efficiency."
    },
    {
      icon: <Network className="w-6 h-6" />,
      title: "Smart Systems",
      description: "Build systems that learn from data and user interactions to improve over time."
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "Adaptive Systems",
      description: "Create systems that can adjust to changing conditions and user needs."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Augmented Intelligence",
      description: "Use AI to enhance human decision-making and productivity."
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Practical AI",
      description: "Apply AI to address real business challenges and opportunities."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Ethical AI",
      description: "Develop AI systems that are fair, transparent, and accountable."
    }
  ];

  const aiWorkshops = [
    {
      title: "AI Systems Architecture",
      duration: "2-Day Intensive",
      audience: "Executives & Technical Leaders",
      description: "Learn to apply AI to solve specific business challenges",
      outcomes: ["AI opportunity mapping", "System architecture design", "Implementation roadmap", "Risk framework"],
      price: "$5,000",
      format: "In-person"
    },
    {
      title: "Network Intelligence Workshop",
      duration: "1-Day Deep Dive",
      audience: "Product & Engineering Teams",
      description: "Create AI systems that improve with user data",
      outcomes: ["Network effect design", "Data architecture", "Learning systems", "Scaling strategies"],
      price: "$3,000",
      format: "Hybrid"
    },
    {
      title: "AI Strategy Executive Session",
      duration: "Half-Day",
      audience: "C-Suite & Board Members",
      description: "Strategic AI planning for business advantage",
      outcomes: ["AI strategy framework", "Competitive positioning", "Investment priorities", "Governance structure"],
      price: "$10,000",
      format: "Private"
    }
  ];

  const implementationAreas = [
    {
      area: "Decision Support",
      description: "AI tools that help make better business decisions",
      applications: ["Pricing optimization", "Resource allocation", "Market entry timing", "Risk assessment"]
    },
    {
      area: "Process Automation",
      description: "Automated processes that improve efficiency and accuracy",
      applications: ["Supply chain optimization", "Customer service automation", "Financial operations", "Compliance monitoring"]
    },
    {
      area: "Predictive Analytics",
      description: "Tools that help forecast trends and customer behavior",
      applications: ["Demand forecasting", "Churn prediction", "Market trend analysis", "Competitive intelligence"]
    },
    {
      area: "Creative Assistance",
      description: "AI tools that support creative work and innovation",
      applications: ["Product design", "Marketing creative", "Process innovation", "Strategic planning"]
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
              src="/images/ai-workshops-hero.jpg"
              alt="AI Workshops background"
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
                Practical AI for<br className="hidden sm:block" />
                <span className="text-[#8B5CF6]">Business</span><br className="hidden sm:block" />
                Solutions
              </h1>
              
              <p className="text-xl sm:text-2xl md:text-3xl text-white mb-10 sm:mb-12 font-light leading-relaxed">
                Learn to apply AI effectively to solve real business problems. 
                Focus on practical applications that deliver measurable value.
              </p>

              <div className="flex flex-wrap gap-5">
                <Link
                  href="/apply-founder"
                  className="inline-flex items-center px-8 py-4 bg-[#8B5CF6] text-white hover:bg-white hover:text-[#8B5CF6] hover:border-[#8B5CF6] border-2 border-[#8B5CF6] transition-all duration-300 rounded-full text-lg font-medium relative group overflow-hidden"
                >
                  <span className="relative z-10 flex items-center">
                    Book AI Workshop
                    <ArrowRight className="ml-2" size={20} />
                  </span>
                  <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
                </Link>
                <Link
                  href="#workshops"
                  className="btn-outline rounded-full inline-flex items-center text-lg px-8 py-4 border-2 hover:border-white hover:bg-white/10 transition-all duration-300 relative group overflow-hidden"
                >
                  <span className="relative z-10">Explore Workshops</span>
                  <span className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-all duration-300 transform scale-x-0 group-hover:scale-x-100 origin-left"></span>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* AI Principles */}
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
              AI Systems <span className="text-[#8B5CF6]">Principles</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              The fundamental mindset shift from AI features to AI-powered business architecture.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiPrinciples.map((principle, index) => (
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

      {/* AI Workshops */}
      <section id="workshops" className="py-20 bg-black border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              AI Systems <span className="text-[#8B5CF6]">Workshops</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Intensive programs designed to transform how you think about and implement AI in your business.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {aiWorkshops.map((workshop, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-[#0D0D0D] to-[#1a1a1a] border border-gray-800 rounded-lg p-8 relative overflow-hidden hover:border-[#8B5CF6] transition-all duration-300 group"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#8B5CF6] rounded-full filter blur-[60px] opacity-10"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-[#8B5CF6]/20 border border-[#8B5CF6]/30 text-[#8B5CF6] px-3 py-1 rounded-full text-sm font-medium">
                      {workshop.duration}
                    </span>
                    <span className="text-gray-500 text-sm">{workshop.format}</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {workshop.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {workshop.description}
                  </p>
                  
                  <div className="mb-4">
                    <p className="text-[#8B5CF6] font-medium mb-2">For:</p>
                    <p className="text-gray-400 text-sm">{workshop.audience}</p>
                  </div>
                  
                  <div className="mb-6">
                    <p className="text-[#8B5CF6] font-medium mb-2">You'll learn:</p>
                    <ul className="space-y-1">
                      {workshop.outcomes.slice(0, 3).map((outcome, outcomeIndex) => (
                        <li key={outcomeIndex} className="flex items-center text-gray-400 text-sm">
                          <CheckCircle className="w-3 h-3 mr-2 text-[#8B5CF6]" />
                          <span>{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-gray-700">
                    <span className="text-[#8B5CF6] font-bold">{workshop.price}</span>
                    <Link
                      href="/apply-founder"
                      className="inline-flex items-center text-[#8B5CF6] hover:text-white transition-colors text-sm font-medium"
                    >
                      Book Workshop
                      <ArrowRight className="ml-1 w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Areas */}
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
              AI Implementation <span className="text-[#8B5CF6]">Areas</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Where AI systems create the most value when designed as business architecture, not features.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {implementationAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#0D0D0D] border border-gray-800 rounded-lg p-8"
              >
                <h3 className="text-2xl font-bold text-white mb-4">{area.area}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{area.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {area.applications.map((application, appIndex) => (
                    <div key={appIndex} className="flex items-center">
                      <Lightbulb className="w-4 h-4 mr-2 text-[#8B5CF6]" />
                      <span className="text-gray-400 text-sm">{application}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Value */}
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
              From AI Features to<br />
              <span className="text-[#8B5CF6]">AI Solutions</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              The difference between adding AI features and solving real business problems with AI.
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
              <h3 className="text-2xl font-bold text-red-400 mb-6">Traditional AI Approach</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-red-400 mr-3">✗</span>
                  <span className="text-gray-300">AI as isolated features and tools</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-3">✗</span>
                  <span className="text-gray-300">Reactive implementation based on trends</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-3">✗</span>
                  <span className="text-gray-300">Siloed data and decision making</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-3">✗</span>
                  <span className="text-gray-300">Linear ROI and diminishing returns</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-3">✗</span>
                  <span className="text-gray-300">Competitive advantage through features</span>
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
              <h3 className="text-2xl font-bold text-green-400 mb-6">AI Systems Architecture</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-green-400 mr-3">✓</span>
                  <span className="text-gray-300">AI as a core business enabler</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3">✓</span>
                  <span className="text-gray-300">Strategic architecture from first principles</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3">✓</span>
                  <span className="text-gray-300">Networked intelligence across the organization</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3">✓</span>
                  <span className="text-gray-300">Improved ROI through integrated systems</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3">✓</span>
                  <span className="text-gray-300">Competitive advantage through integrated solutions</span>
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
              <span className="text-[#8B5CF6]">AI Architecture</span>?
            </h2>
            <p className="text-xl text-gray-400 mb-10 max-w-3xl mx-auto">
              Stop adding AI features. Start building AI-powered business models that become your competitive advantage.
            </p>
            
            <div className="flex flex-wrap gap-5 justify-center">
              <Link
                href="/apply-founder"
                className="inline-flex items-center px-8 py-4 bg-[#8B5CF6] text-white hover:bg-white hover:text-[#8B5CF6] hover:border-[#8B5CF6] border-2 border-[#8B5CF6] transition-all duration-300 rounded-full font-medium"
              >
                Book AI Workshop
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