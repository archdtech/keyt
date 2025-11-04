"use client";

import { motion } from 'framer-motion';
import { ArrowRight, Users, Target, Rocket, Network, Key, Lock, Zap, Award, Globe, Brain } from 'lucide-react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export default function AboutPage() {
  const teamMembers = [
    {
      name: "The Keymaster Collective",
      role: "Venture Architects",
      description: "A diverse team of systems thinkers, market designers, and ecosystem builders. We have founded, scaled, and successfully exited multiple ventures across different industries.",
      avatar: null
    }
  ];

  const values = [
    {
      icon: <Key className="w-8 h-8" />,
      title: "Systems Thinking",
      description: "We address root causes instead of symptoms to build solutions that stand the test of time."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Practical Execution",
      description: "Strategic interventions that deliver measurable results and sustainable growth."
    },
    {
      icon: <Network className="w-8 h-8" />,
      title: "Ecosystem First",
      description: "We create frameworks and tools that empower others to build and innovate."
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Tangible Impact",
      description: "Solving real problems for real customers in real markets."
    }
  ];

  const milestones = [
    {
      year: "2020",
      title: "The Foundation",
      description: "Started developing practical solutions for the business challenges we encountered firsthand."
    },
    {
      year: "2021",
      title: "First Collaborations",
      description: "Partnered with early clients to design systems and build sustainable business models."
    },
    {
      year: "2022",
      title: "Method Refinement",
      description: "Honed our methodology through hands-on work with diverse companies and markets."
    },
    {
      year: "2023",
      title: "Strategic Growth",
      description: "Evolved from project-based work to long-term strategic partnerships."
    },
    {
      year: "2024",
      title: "Studio Launch",
      description: "Established our formal venture studio for systematic company building."
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
          <motion.div
            className="max-w-4xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-8 sm:mb-10 leading-tight tracking-tight">
              We Build<br className="hidden sm:block" />
              <span className="text-[#8B5CF6]">Systems</span><br className="hidden sm:block" />
              That Work
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl text-white mb-10 sm:mb-12 font-light">
              We go beyond building companies to engineer the fundamental systems that make businesses thrive. This is not about following trends, it is about creating lasting value.
            </p>
            <div className="flex flex-wrap gap-5">
              <Link
                href="/apply-founder"
                className="inline-flex items-center px-6 py-3 sm:px-10 sm:py-4 bg-[#8B5CF6] text-white hover:bg-white hover:text-[#8B5CF6] hover:border-[#8B5CF6] border-2 border-[#8B5CF6] transition-all duration-300 rounded-full text-base sm:text-lg font-medium relative group overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  Become a Venture Architect
                  <ArrowRight className="ml-2" size={20} />
                </span>
                <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
              </Link>
              <Link
                href="#method"
                className="btn-outline rounded-full inline-flex items-center text-base sm:text-lg px-6 py-3 sm:px-10 sm:py-4 border-2 hover:border-white hover:bg-white/10 transition-all duration-300 relative group overflow-hidden"
              >
                <span className="relative z-10">Learn Our Method</span>
                <span className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-all duration-300 transform scale-x-0 group-hover:scale-x-100 origin-left"></span>
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Mission Section */}
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
              Our <span className="text-[#8B5CF6]">Mission</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto">
              We empower founders to build exceptional businesses through systems thinking and practical execution. The greatest opportunities emerge from solving real problems for specific customers, not from pursuing fleeting trends.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-4 text-[#8B5CF6]">The Challenge We Address</h3>
              <p className="text-gray-300 mb-4">
                Too many founders chase vanity metrics and short-term victories instead of building sustainable systems that create enduring value.
              </p>
              <p className="text-gray-300">
                While others help you optimize products, we help you architect the foundations for long-term success.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-4 text-[#8B5CF6]">Our Method</h3>
              <p className="text-gray-300 mb-4">
                We uncover core business challenges and engineer practical solutions that target root causes for maximum impact.
              </p>
              <p className="text-gray-300">
                Elegant solutions, powerful results. This is how we transform businesses.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section id="method" className="py-20 bg-black border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              The <span className="text-[#8B5CF6]">Keymaster</span> Principles
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              These core principles define our approach to building and problem-solving.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#0D0D0D] border border-gray-800 rounded-lg p-6 hover:border-[#8B5CF6] transition-all duration-300 group"
              >
                <div className="text-[#8B5CF6] mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-[#8B5CF6] transition-colors">
                  {value.title}
                </h3>
                <p className="text-gray-400">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
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
              Our <span className="text-[#8B5CF6]">Journey</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              The story of our evolution and growth.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-800"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                >
                  <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8 ml-auto'}`}>
                    <div className="bg-[#0D0D0D] border border-gray-800 rounded-lg p-6">
                      <div className="text-[#8B5CF6] font-bold mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-semibold mb-2">{milestone.title}</h3>
                      <p className="text-gray-400">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#8B5CF6] rounded-full border-4 border-black"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 bg-black border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left - Full Cover Image */}
            <div className="relative h-96 lg:h-full min-h-[500px] rounded-lg overflow-hidden">
              <img
                src="/images/founder-key.jpg"
                alt="Founder"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Right - Text Content */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white">
                About the Founder
              </h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  We exist to serve at the systems level. Though we may never meet, we find satisfaction in knowing our work has created value for you.
                </p>
                <p>
                  As key masters, we often unlock doors of opportunity without recognition. Our work operates behind the scenes, building the infrastructure that enables others to achieve their vision.
                </p>
                <p>
                  Humble dedication to the systems that drive progress defines our philosophy. We derive fulfillment from enabling breakthroughs, even when our contribution remains invisible.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
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
              The <span className="text-[#8B5CF6]">Architects</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We are architects and engineers who partner with founders to build the impossible.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#0D0D0D] border border-gray-800 rounded-lg p-8 text-center"
              >
                <div className="w-24 h-24 bg-[#8B5CF6] rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Brain className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                <p className="text-[#8B5CF6] mb-4">{member.role}</p>
                <p className="text-gray-300">
                  {member.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <p className="text-xl text-gray-400 mb-8">
              We seek fellow architects who are passionate about solving meaningful problems and building systems that matter.
            </p>
            <Link
              href="/careers"
              className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-[#8B5CF6] text-[#8B5CF6] hover:bg-[#8B5CF6] hover:text-white transition-all duration-300 rounded-full font-medium"
            >
              Join the Team
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
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
              Ready to Become a<br />
              <span className="text-[#8B5CF6]">Venture Architect</span>?
            </h2>
            <p className="text-xl text-gray-400 mb-10 max-w-3xl mx-auto">
              Become part of a collective of founders dedicated to building businesses that solve meaningful problems and create lasting impact.
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
                href="/venture-studio"
                className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#8B5CF6] transition-all duration-300 rounded-full font-medium"
              >
                Explore Our Portfolio
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