"use client";

import { motion } from 'framer-motion';
import { ArrowRight, Users, Brain, Target, Zap, Award, CheckCircle, Calendar, MessageSquare, TrendingUp, Lightbulb, Globe, Star } from 'lucide-react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export default function KeymasterThinkTankPage() {
  const thinkTankBenefits = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Collective Intelligence",
      description: "Tap into the combined wisdom of venture architects building the future"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Strategic Clarity",
      description: "Get unbiased perspectives on your biggest challenges and opportunities"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Peer Network",
      description: "Connect with founders who face similar scale and ecosystem challenges"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Rapid Insights",
      description: "Compress years of learning into hours of focused discussion"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Exclusive Access",
      description: "Join a curated group of high-performing venture architects"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Perspective",
      description: "Learn from market dynamics and ecosystem patterns across industries"
    }
  ];

  const meetingFormats = [
    {
      title: "Strategic Roundtable",
      duration: "3 Hours",
      frequency: "Monthly",
      description: "Deep dive into one member's biggest strategic challenge",
      participants: "8-10 venture architects",
      focus: "Problem solving and strategic planning",
      price: "$1,500/session"
    },
    {
      title: "Ecosystem Design Session",
      duration: "Half Day",
      frequency: "Quarterly", 
      description: "Collaborative design of network effects and ecosystem strategies",
      participants: "6-8 members",
      focus: "Ecosystem architecture and growth",
      price: "$3,000/session"
    },
    {
      title: "Market Creation Workshop",
      duration: "Full Day",
      frequency: "Bi-annual",
      description: "Intensive workshop on creating new market categories",
      participants: "10-12 members",
      focus: "Category design and market positioning",
      price: "$5,000/session"
    }
  ];

  const memberProfile = [
    "Founder or CEO of a venture-scale business ($1M+ ARR or equivalent)",
    "Building systems, platforms, or ecosystem-defining ventures",
    "Experienced with scaling teams and complex operations",
    "Willing to both contribute and learn from the group",
    "Committed to confidentiality and mutual success",
    "Looking for peer-level strategic thinking, not tactical advice"
  ];

  const discussionTopics = [
    "Ecosystem design and network effect strategies",
    "Category creation and market positioning",
    "Scaling platform businesses and multi-sided markets",
    "AI systems architecture and implementation",
    "Strategic partnerships and ecosystem development",
    "Fundraising and investor relations at scale",
    "Team building and culture for venture architects",
    "Exit strategies and long-term value creation"
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      company: "InfrastructureOS",
      quote: "The ThinkTank compressed 2 years of strategic learning into 3 hours. The insights on ecosystem design completely changed our approach to market entry.",
      results: "3x faster market penetration, $10M+ new ARR"
    },
    {
      name: "Marcus Rodriguez", 
      company: "DataStream",
      quote: "Being in a room with other venture architects who understand systems thinking is invaluable. We've implemented 5 major strategies from our sessions.",
      results: "500% growth in network effects, industry leadership"
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
              <div className="inline-flex items-center bg-[#8B5CF6]/10 border border-[#8B5CF6]/30 rounded-full px-4 py-2 mb-6">
                <Users className="w-4 h-4 mr-2 text-[#8B5CF6]" />
                <span className="text-[#8B5CF6] text-sm font-medium">BY INVITATION ONLY</span>
              </div>
              
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-8 sm:mb-10 leading-tight tracking-tight">
                Collective Intelligence<br className="hidden sm:block" />
                <span className="text-[#8B5CF6]">of Venture Architects</span>
              </h1>
              
              <p className="text-xl sm:text-2xl md:text-3xl text-white mb-10 sm:mb-12 font-light leading-relaxed">
                Access the network of founders building ecosystems, not just companies. 
                Where systems thinking meets real-world execution.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                <div className="bg-[#0D0D0D] border border-gray-800 rounded-lg p-6">
                  <Users className="w-8 h-8 text-[#8B5CF6] mb-3" />
                  <div className="text-2xl font-bold mb-1">50+</div>
                  <div className="text-gray-400">Venture Architects</div>
                </div>
                <div className="bg-[#0D0D0D] border border-gray-800 rounded-lg p-6">
                  <TrendingUp className="w-8 h-8 text-[#8B5CF6] mb-3" />
                  <div className="text-2xl font-bold mb-1">$10B+</div>
                  <div className="text-gray-400">Combined Portfolio Value</div>
                </div>
                <div className="bg-[#0D0D0D] border border-gray-800 rounded-lg p-6">
                  <Globe className="w-8 h-8 text-[#8B5CF6] mb-3" />
                  <div className="text-2xl font-bold mb-1">15+</div>
                  <div className="text-gray-400">Industries Represented</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-5">
                <Link
                  href="/apply-founder"
                  className="inline-flex items-center px-8 py-4 bg-[#8B5CF6] text-white hover:bg-white hover:text-[#8B5CF6] hover:border-[#8B5CF6] border-2 border-[#8B5CF6] transition-all duration-300 rounded-full text-lg font-medium relative group overflow-hidden"
                >
                  <span className="relative z-10 flex items-center">
                    Request Invitation
                    <ArrowRight className="ml-2" size={20} />
                  </span>
                  <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
                </Link>
                <Link
                  href="#formats"
                  className="btn-outline rounded-full inline-flex items-center text-lg px-8 py-4 border-2 hover:border-white hover:bg-white/10 transition-all duration-300 relative group overflow-hidden"
                >
                  <span className="relative z-10">Meeting Formats</span>
                  <span className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-all duration-300 transform scale-x-0 group-hover:scale-x-100 origin-left"></span>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* ThinkTank Benefits */}
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
              Why Join the <span className="text-[#8B5CF6]">ThinkTank</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              The collective intelligence of venture architects is greater than the sum of individual expertise.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {thinkTankBenefits.map((benefit, index) => (
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

      {/* Meeting Formats */}
      <section id="formats" className="py-20 bg-black border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Meeting <span className="text-[#8B5CF6]">Formats</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Different formats for different strategic needs. All designed for maximum impact and learning.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {meetingFormats.map((format, index) => (
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
                      {format.duration}
                    </span>
                    <span className="text-gray-500 text-sm">{format.frequency}</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {format.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {format.description}
                  </p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-gray-400 text-sm">
                      <Users className="w-4 h-4 mr-2 text-[#8B5CF6]" />
                      <span>{format.participants}</span>
                    </div>
                    <div className="flex items-center text-gray-400 text-sm">
                      <Target className="w-4 h-4 mr-2 text-[#8B5CF6]" />
                      <span>{format.focus}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-gray-700">
                    <span className="text-[#8B5CF6] font-bold">{format.price}</span>
                    <Link
                      href="/apply-founder"
                      className="inline-flex items-center text-[#8B5CF6] hover:text-white transition-colors text-sm font-medium"
                    >
                      Apply to Join
                      <ArrowRight className="ml-1 w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Member Profile */}
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
              Ideal <span className="text-[#8B5CF6]">Member Profile</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We curate the ThinkTank for maximum value creation and peer learning.
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
                {memberProfile.map((criterion, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 mr-3 text-[#8B5CF6] mt-0.5 flex-shrink-0" />
                    <p className="text-gray-300 leading-relaxed">{criterion}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Discussion Topics */}
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
              Discussion <span className="text-[#8B5CF6]">Topics</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              The strategic challenges that venture architects are solving right now.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {discussionTopics.map((topic, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#0D0D0D] border border-gray-800 rounded-lg p-6 hover:border-[#8B5CF6] transition-all duration-300 group"
              >
                <MessageSquare className="w-6 h-6 text-[#8B5CF6] mb-3" />
                <p className="text-gray-300 leading-relaxed group-hover:text-white transition-colors">
                  {topic}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
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
              Member <span className="text-[#8B5CF6]">Success Stories</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Real impact from collective intelligence and strategic collaboration.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-[#8B5CF6]/10 to-transparent border border-[#8B5CF6]/30 rounded-lg p-8"
              >
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-[#8B5CF6] fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white font-semibold">{testimonial.name}</p>
                    <p className="text-gray-400 text-sm">{testimonial.company}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[#8B5CF6] text-sm font-medium">Results:</p>
                    <p className="text-gray-400 text-xs">{testimonial.results}</p>
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
              Ready to Access<br />
              <span className="text-[#8B5CF6]">Collective Intelligence</span>?
            </h2>
            <p className="text-xl text-gray-400 mb-10 max-w-3xl mx-auto">
              Join the curated network of venture architects building the future of business.
            </p>
            
            <div className="flex flex-wrap gap-5 justify-center">
              <Link
                href="/apply-founder"
                className="inline-flex items-center px-8 py-4 bg-[#8B5CF6] text-white hover:bg-white hover:text-[#8B5CF6] hover:border-[#8B5CF6] border-2 border-[#8B5CF6] transition-all duration-300 rounded-full font-medium"
              >
                Request Invitation
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