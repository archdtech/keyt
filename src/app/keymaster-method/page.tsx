"use client";

import { motion } from 'framer-motion';
import { ArrowRight, Award, Users, Target, CheckCircle, Calendar, Clock, BookOpen, Zap, Star, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export default function KeymasterMethodPage() {
  const programOverview = {
    title: "The Keymaster Method",
    subtitle: "Stop Guessing. Start Building.",
    price: "Contact for Details",
    format: "Small Cohorts, Live & Applied",
    duration: "12 Weeks",
    commitment: "15-20 hours/week"
  };

  const methodPhases = [
    {
      phase: "Phase 1: Problem & Market Fit (Weeks 1-3)",
      title: "Validate the Real Opportunity",
      description: "Focus: Is the problem you're solving urgent, pervasive, and will people pay?",
      output: "A data-backed problem thesis and a defined target market.",
      keyAction: "Conduct customer interviews and analyze market signals."
    },
    {
      phase: "Phase 2: Solution & Model Design (Weeks 4-6)",
      title: "Architect a Viable Business, Not Just a Product",
      description: "Focus: Designing a solution that works and a business model that sustains it.",
      output: "A core solution prototype and a validated financial model.",
      keyAction: "Map your value creation engine and unit economics."
    },
    {
      phase: "Phase 3: Launch & Iteration (Weeks 7-9)",
      title: "Pressure-Test with Real Users",
      description: "Focus: Getting your solution into the market to gather authentic feedback and usage data.",
      output: "A list of validated improvements and a clear measure of early traction.",
      keyAction: "Run a structured MVP test and analyze user behavior."
    },
    {
      phase: "Phase 4: Systems & Scale (Weeks 10-12)",
      title: "Build the Foundation for Growth",
      description: "Focus: Creating the operational and strategic systems to scale your success.",
      output: "A actionable 90-day growth plan and key performance dashboards.",
      keyAction: "Design your core metrics and hiring roadmap."
    }
  ];

  const learningFormat = [
    {
      type: "Live Workshops",
      description: "Weekly deep-dives with Keymaster experts. Come with your challenges, leave with a plan.",
      frequency: "Weekly sessions"
    },
    {
      type: "Direct Access",
      description: "Weekly office hours for 1:1 feedback on your specific progress and roadblocks.",
      frequency: "Weekly 1:1 sessions"
    },
    {
      type: "Peer-Driven Execution",
      description: "Collaborate and problem-solve with a curated cohort of builders focused on results.",
      frequency: "Small group collaboration"
    },
    {
      type: "Build Your Business",
      description: "Every session and assignment is applied directly to your venture. No hypotheticals.",
      frequency: "Applied learning"
    }
  ];

  const testimonials = [
    {
      name: "Alex Chen",
      company: "DataTools",
      quote: "The program's focus on data over opinion was a game-changer. We pivoted from a 'cool' feature to a core business solution in week 3, saving us months of wasted effort."
    },
    {
      name: "Sarah Rodriguez",
      company: "ConnectFlow",
      quote: "This isn't just theory. The practical approach to problem-solving changed how we build and test ideas. Actually applying the methods made all the difference.",
      results: "Better retention, steady growth"
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
          <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to black">
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
                <span className="text-[#8B5CF6] text-sm font-medium">PRACTICAL PROGRAM</span>
              </div>
              
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-8 sm:mb-10 leading-tight tracking-tight">
                The Keymaster<br className="hidden sm:block" />
                <span className="text-[#8B5CF6]">Method</span><br className="hidden sm:block" />
                Together
              </h1>
              
              <p className="text-xl sm:text-2xl md:text-3xl text-white mb-10 sm:mb-12 font-light leading-relaxed">
                Stop Guessing. Start Building. A 12-week program for founders and operators who believe in speed, data, and systematic execution to drive business value.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
                <div className="bg-[#0D0D0D] border border-gray-800 rounded-lg p-4 text-center">
                  <Calendar className="w-6 h-6 text-[#8B5CF6] mx-auto mb-2" />
                  <div className="text-lg font-bold">{programOverview.duration}</div>
                  <div className="text-gray-400 text-sm">Duration</div>
                </div>
                <div className="bg-[#0D0D0D] border border-gray-800 rounded-lg p-4 text-center">
                  <Users className="w-6 h-6 text-[#8B5CF6] mx-auto mb-2" />
                  <div className="text-lg font-bold">{programOverview.cohortSize}</div>
                  <div className="text-gray-400 text-sm">Participants</div>
                </div>
                <div className="bg-[#0D0D0D] border-gray-800 rounded-lg p-4 text-center">
                  <TrendingUp className="w-6 h-6 text-[#8B5CF6] mx-auto mb-2" />
                  <div className="text-lg font-bold">{programOverview.price}</div>
                  <div className="text-gray-400 text-sm">Pricing</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-5">
                <Link
                  href="/apply-founder"
                  className="inline-flex items-center px-8 py-4 bg-[#8B5CF6] text-white hover:bg-white hover:text-[#8B5CF6] hover:border-[#8B5CF6] border-2 border-[#8B5CF6] transition-all duration-300 rounded-full text-lg font-medium relative group overflow-hidden"
                >
                  <span className="relative z-10 flex items-center">
                    Apply Now
                    <ArrowRight className="ml-2" size={20} />
                  </span>
                  <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
                </Link>
                <Link
                  href="#curriculum"
                  className="inline-flex items-center px-8 py-4 bg-transparent text-white hover:bg-white hover:text-[#8B5CF6] border-2 border-white transition-all duration-300 rounded-full text-lg font-medium relative group overflow-hidden"
                >
                  <span className="relative z-10">Download Curriculum</span>
                  <span className="absolute inset-0 bg-white opacity-0 group-hover:bg-white/10 transition-all duration-300 transform scale-x-0 group-hover:scale-x-100 origin-left"></span>
                </Link>
              </div>
            </div>
          </motion.div>
        </section>

      {/* The Method Section */}
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
              The Method: <span className="text-[#8B5CF6]">Build, Measure, Scale</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We skip the theory and focus on the actionable cycles of venture building. You'll learn by doing, applying each week's framework directly to your business.
            </p>
          </motion.div>

          <div className="space-y-8">
            {methodPhases.map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-[#0D0D0D] to-[#1a1a1a] border border-gray-800 rounded-lg p-8 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#8B5CF6] rounded-full filter blur-[80px] opacity-10"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-[#8B5CF6]/20 border border-[#8B5CF6]/30 rounded-full text-xs text-[#8B5CF6] font-medium px-3 py-1">
                      {phase.phase}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {phase.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {phase.description}
                  </p>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="text-[#8B5CF6] font-medium mb-3">Output:</h4>
                      <p className="text-gray-400">{phase.output}</p>
                    </div>
                    <div>
                      <h4 className="text-[#8B5CF6] font-medium mb-3">Key Action:</h4>
                      <p className="text-gray-400 text-sm">{phase.keyAction}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Format Section */}
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
              A Different Kind of <span className="text-[#8B5CF6]">Learning</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              This is not a lecture series. It's a build sprint with expert guidance. Come with your challenges, leave with a plan.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {learningFormat.map((format, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#0D0D0D] border border-gray-800 rounded-lg p-8"
              >
                <h3 className="text-xl font-semibold text-white mb-3">{format.type}</h3>
                <p className="text-gray-400 mb-2">{format.description}</p>
                <div className="flex items-center text-sm text-[#8B5CF6]">
                  <Clock className="w-4 h-4 mr-2" />
                  <span>{format.frequency}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who This Is For Section */}
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
              Who This Is <span className="text-[#8B5CF6]">For</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              This program is designed for founders and operators who believe in speed, data, and systematic execution to drive business value.
            </p>
          </motion.div>

          <div className="bg-[#0D0D0D] border border-gray-800 rounded-lg p-8 text-center">
            <div className="space-y-4">
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-[#8B5CF6] mt-1 flex-shrink-0" />
                <span className="text-gray-300">Experienced founder or operator (3+ years)</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-[#8B5CF6] mt-1 flex-shrink-0" />
                <span className="text-gray-300">Currently building or growing a business</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-[#8B5CF6] mt-1 flex-shrink-0" />
                <span className="text-gray-300">Open to challenging conventional thinking</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-[#8B5CF6] mt-1 flex-shrink-0" />
                <span className="text-gray-300">Able to commit 15-20 hours per week for 12 weeks</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Build with <span className="text-[#8B5CF6]">Precision</span>?
            </h2>
            <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto">
              Let's identify your biggest growth bottleneck and build a plan to solve it.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/apply-founder"
                className="inline-flex items-center px-8 py-4 bg-[#8B5CF6] text-white hover:bg-white hover:text-[#8B5CF6] border-2 border-[#8B5CF6] transition-all duration-300 rounded-full text-lg font-medium relative group overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  Apply for the Next Cohort
                  <ArrowRight className="ml-2" size={20} />
                </span>
                <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center px-8 py-4 bg-transparent text-white hover:bg-white hover:text-[#8B5CF6] border-2 border-white transition-all duration-300 rounded-full text-lg font-medium relative group overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  View Our Work
                  <ArrowRight className="ml-2" size={20} />
                </span>
                <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default KeymasterMethodPage;