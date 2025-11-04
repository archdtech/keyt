"use client";

import { motion } from 'framer-motion';
import { ArrowRight, Users, Target, Rocket, Network, Key, Lock, Zap, Award, CheckCircle, AlertCircle, Calendar, DollarSign } from 'lucide-react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export default function VentureArchitecturePage() {
  const programBenefits = [
    {
      icon: <Key className="w-6 h-6" />,
      title: "System Thinking",
      description: "Learn to identify and solve fundamental problems that hold businesses back"
    },
    {
      icon: <Network className="w-6 h-6" />,
      title: "Business Design",
      description: "Design sustainable business models that serve real market needs"
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Practical Impact",
      description: "Build ventures that solve meaningful problems for specific customers"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Peer Network",
      description: "Connect with other founders and learn from shared experiences"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Hands-on Learning",
      description: "Work on real problems with guidance from experienced practitioners"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Market Focus",
      description: "Learn to find and serve specific market segments effectively"
    }
  ];

  const programStructure = [
    {
      phase: "Phase 1",
      title: "Problem Discovery",
      duration: "Weeks 1-3",
      topics: ["Market research", "Customer interviews", "Problem validation", "Opportunity assessment"]
    },
    {
      phase: "Phase 2", 
      title: "Solution Design",
      duration: "Weeks 4-7",
      topics: ["Product architecture", "Business model", "Customer acquisition", "Basic metrics"]
    },
    {
      phase: "Phase 3",
      title: "Market Testing",
      duration: "Weeks 8-10",
      topics: ["Launch strategy", "Early customers", "Feedback loops", "Iterative improvement"]
    },
    {
      phase: "Phase 4",
      title: "Growth Planning",
      duration: "Weeks 11-12",
      topics: ["Growth basics", "Scaling preparation", "Next steps", "Long-term planning"]
    }
  ];

  const idealCandidate = [
    "Experienced founder (3+ years) with startup or business experience",
    "Systems thinker who looks for root causes and patterns",
    "Currently working on solving a real problem",
    "Interested in building sustainable businesses",
    "Able to commit significant time during the program",
    "Open to learning and feedback"
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
              src="/images/venture-architecture-hero.jpg"
              alt="Venture Architecture background"
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
              <div className="inline-flex items-center bg-[#8B5CF6]/10 border border-[#8B5CF6]/30 rounded-full px-4 py-2 mb-6">
                <Award className="w-4 h-4 mr-2 text-[#8B5CF6]" />
                <span className="text-[#8B5CF6] text-sm font-medium">FOUNDERS PROGRAM</span>
              </div>
              
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-8 sm:mb-10 leading-tight tracking-tight">
                Venture<br className="hidden sm:block" />
                <span className="text-[#8B5CF6]">Architecture</span>
              </h1>
              
              <p className="text-xl sm:text-2xl md:text-3xl text-white mb-10 sm:mb-12 font-light leading-relaxed">
                A practical program for founders who want to build better businesses. 
                <span className="text-[#8B5CF6] font-semibold"> Small group format.</span>
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                <div className="bg-[#0D0D0D] border border-gray-800 rounded-lg p-6">
                  <Calendar className="w-8 h-8 text-[#8B5CF6] mb-3" />
                  <div className="text-2xl font-bold mb-1">12 Weeks</div>
                  <div className="text-gray-400">Full-time immersive</div>
                </div>
                <div className="bg-[#0D0D0D] border border-gray-800 rounded-lg p-6">
                  <Users className="w-8 h-8 text-[#8B5CF6] mb-3" />
                  <div className="text-2xl font-bold mb-1">Small Group</div>
                  <div className="text-gray-400">Collaborative learning</div>
                </div>
                <div className="bg-[#0D0D0D] border border-gray-800 rounded-lg p-6">
                  <DollarSign className="w-8 h-8 text-[#8B5CF6] mb-3" />
                  <div className="text-2xl font-bold mb-1">$25,000</div>
                  <div className="text-gray-400">Program fee</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-5">
                <Link
                  href="/apply-founder"
                  className="inline-flex items-center px-8 py-4 bg-[#8B5CF6] text-white hover:bg-white hover:text-[#8B5CF6] hover:border-[#8B5CF6] border-2 border-[#8B5CF6] transition-all duration-300 rounded-full text-lg font-medium relative group overflow-hidden"
                >
                  <span className="relative z-10 flex items-center">
                    Apply for Venture Architecture
                    <ArrowRight className="ml-2" size={20} />
                  </span>
                  <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
                </Link>
                <Link
                  href="#program-details"
                  className="btn-outline rounded-full inline-flex items-center text-lg px-8 py-4 border-2 hover:border-white hover:bg-white/10 transition-all duration-300 relative group overflow-hidden"
                >
                  <span className="relative z-10">Download Program Guide</span>
                  <span className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-all duration-300 transform scale-x-0 group-hover:scale-x-100 origin-left"></span>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Program Benefits */}
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
              What You'll <span className="text-[#8B5CF6]">Master</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Practical skills for building ventures that serve real market needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#0D0D0D] border border-gray-800 rounded-lg p-6 hover:border-[#8B5CF6] transition-all duration-300 group"
              >
                <div className="text-[#8B5CF6] mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-[#8B5CF6] transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Structure */}
      <section id="program-details" className="py-20 bg-black border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              12-Week <span className="text-[#8B5CF6]">Curriculum</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              From problem discovery to market testing. Each phase builds practical skills.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {programStructure.map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
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
                  
                  <ul className="space-y-3">
                    {phase.topics.map((topic, topicIndex) => (
                      <li key={topicIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 mr-3 text-[#8B5CF6] flex-shrink-0" />
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ideal Candidate */}
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
              Ideal <span className="text-[#8B5CF6]">Candidate</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              This program is designed for founders who want to build thoughtfully and sustainably.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-[#0D0D0D] border border-gray-800 rounded-lg p-8"
            >
              <div className="space-y-4">
                {idealCandidate.map((criterion, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 mr-3 text-[#8B5CF6] mt-0.5 flex-shrink-0" />
                    <p className="text-gray-300 leading-relaxed">{criterion}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 bg-[#8B5CF6]/10 border border-[#8B5CF6]/30 rounded-lg">
                <div className="flex items-start">
                  <AlertCircle className="w-5 h-5 mr-3 text-[#8B5CF6] mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-2">Not a Fit?</h4>
                    <p className="text-gray-400 text-sm">
                      If you're looking for quick tactics or aren't ready to do foundational work, 
                      this might not be the right fit. We focus on sustainable business building.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Application Process */}
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
              Ready to Become a<br />
              <span className="text-[#8B5CF6]">Venture Architect</span>?
            </h2>
            <p className="text-xl text-gray-400 mb-10 max-w-3xl mx-auto">
              Join a group of founders committed to building businesses that solve real problems.
            </p>
            
            <div className="flex flex-wrap gap-5 justify-center">
              <Link
                href="/apply-founder"
                className="inline-flex items-center px-8 py-4 bg-[#8B5CF6] text-white hover:bg-white hover:text-[#8B5CF6] hover:border-[#8B5CF6] border-2 border-[#8B5CF6] transition-all duration-300 rounded-full font-medium"
              >
                Apply for Venture Architecture
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/keymaster-method"
                className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#8B5CF6] transition-all duration-300 rounded-full font-medium"
              >
                Explore Other Programs
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