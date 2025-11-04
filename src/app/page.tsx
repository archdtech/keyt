"use client";

import { motion } from 'framer-motion';
import { ArrowRight, Users, Network, Target, Rocket, ChevronDown, Key, Lock, Unlock, Zap, Award, Globe, Image as ImageIcon } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export default function HomePage() {
  const scaleServices = [
    { 
      title: "Venture Architecture", 
      href: "/venture-architecture",
      description: "Hands-on building with founders. We design systems and infrastructure together.",
      color: "purple",
      featured: true
    },
    { 
      title: "Ecosystem Design", 
      href: "/ecosystem-design",
      description: "Building platforms and tools that other businesses can build on top of.",
      color: "teal"
    },
    { 
      title: "AI Systems", 
      href: "/ai-workshops",
      description: "Practical AI integration for startups. Focus on real problems, not hype.",
      color: "indigo"
    },
    { 
      title: "ThinkTank", 
      href: "/mastermind",
      description: "Small group of builders sharing what actually works in early-stage startups.",
      color: "pink"
    },
    { 
      title: "Growth Systems", 
      href: "/growth-strategy",
      description: "Building sustainable growth systems, not growth hacks.",
      color: "orange"
    },
    { 
      title: "Product Discovery", 
      href: "/product-discovery",
      description: "Finding real problems worth solving, not just building features.",
      color: "yellow"
    }
  ];

  // Commented out programs section
  // const programs = [
  //   { 
  //     title: "Operational Excellence", 
  //     href: "/operational-excellence",
  //     description: "Operations optimization and efficiency programs",
  //     color: "yellow"
  //   },
  //   { 
  //     title: "Commercial Due Diligence", 
  //     href: "/commercial-due-diligence",
  //     description: "Business due diligence and validation programs",
  //     color: "blue"
  //   }
  // ];

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
          <motion.h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-8 sm:mb-10 leading-tight tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.04, 0.62, 0.23, 0.98],
              delay: 0.2
            }}
          >
            Building<br className="hidden sm:block" />
            <span className="text-[#8B5CF6]">
              Venture Systems
            </span><br className="hidden sm:block" />
            Together
          </motion.h1>
          <motion.p
            className="text-xl sm:text-2xl md:text-3xl text-white mb-10 sm:mb-12 max-w-4xl font-light"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
              delay: 0.8
            }}
          >
            We're a small team focused on building foundational systems for startups. We focus on practical solutions, not hype. We work with <span className="text-[#8B5CF6]">founders who want to build real infrastructure</span>.
          </motion.p>
          <motion.div
            className="flex flex-wrap gap-5 justify-center sm:justify-start"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
              delay: 1.2
            }}
          >

            <Link
              href="/apply-founder"
              className="inline-flex items-center px-6 py-3 sm:px-10 sm:py-4 bg-[#8B5CF6] text-white hover:bg-white hover:text-[#8B5CF6] hover:border-[#8B5CF6] border-2 border-[#8B5CF6] transition-all duration-300 rounded-full text-base sm:text-lg font-medium relative group overflow-hidden"
            >
              <span className="relative z-10 flex items-center">
                Apply to Work With Us
                <ArrowRight className="ml-2 hidden sm:inline" size={20} />
                <ArrowRight className="ml-2 sm:hidden" size={18} />
              </span>
              <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex items-center px-6 py-3 sm:px-10 sm:py-4 bg-transparent text-white hover:bg-white hover:text-[#8B5CF6] border-2 border-white transition-all duration-300 rounded-full text-base sm:text-lg font-medium relative group overflow-hidden"
            >
              <span className="relative z-10 flex items-center">
                View Our Work
                <ArrowRight className="ml-2 hidden sm:inline" size={20} />
                <ArrowRight className="ml-2 sm:hidden" size={18} />
              </span>
              <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Visual Showcase Section */}
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
              Where <span className="text-[#8B5CF6]">Vision</span> Meets Reality
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our workspace and systems in action. This is where breakthrough ideas become scalable solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative rounded-lg overflow-hidden group h-80"
            >
              <Image
                src="/images/venture-studio-workspace.jpg"
                alt="Venture Studio Workspace"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6">
                  <h3 className="text-white font-bold text-lg mb-2">Collaborative Environment</h3>
                  <p className="text-gray-300 text-sm">Where founders and builders create together</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="relative rounded-lg overflow-hidden group h-80"
            >
              <Image
                src="/images/network-systems.jpg"
                alt="Network Systems Visualization"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6">
                  <h3 className="text-white font-bold text-lg mb-2">Systems Architecture</h3>
                  <p className="text-gray-300 text-sm">Interconnected solutions for complex challenges</p>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Link
              href="/portfolio"
              className="inline-flex items-center px-8 py-4 bg-[#8B5CF6] text-white hover:bg-white hover:text-[#8B5CF6] hover:border-[#8B5CF6] border-2 border-[#8B5CF6] transition-all duration-300 rounded-full font-medium"
            >
              Explore Our Work
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Scale Solutions Section */}
      <section id="scale" className="py-20 bg-black border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              What We <span className="text-[#8B5CF6]">Build</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We build practical tools and systems for early-stage startups. Solid engineering, no magic.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {scaleServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`bg-[#0D0D0D] border rounded-lg p-6 hover:border-[#8B5CF6] transition-all duration-300 group relative overflow-hidden ${
                  service.featured ? 'border-[#8B5CF6] md:col-span-2 lg:col-span-2' : 'border-gray-800'
                }`}
              >
                <div className="flex items-center mb-4">
                  <div className={`w-3 h-3 rounded-full bg-${service.color}-600 mr-3`}></div>
                  <h3 className="text-xl font-semibold group-hover:text-[#8B5CF6] transition-colors">
                    {service.title}
                  </h3>
                </div>
                <p className="text-gray-400 mb-4">
                  {service.description}
                </p>

              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              href="/apply-founder"
              className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-[#8B5CF6] text-[#8B5CF6] hover:bg-[#8B5CF6] hover:text-white transition-all duration-300 rounded-full font-medium"
            >
              Work With Us
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Programs Section - Commented Out */}
      {/* <section id="programs" className="py-20 bg-black border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-[#8B5CF6]">Leverage</span> Points
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Small interventions that create disproportionate, system-wide change. We don't bet on market size - we bet on the power of the key that unlocks it.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#0D0D0D] border border-gray-800 rounded-lg p-6 hover:border-[#8B5CF6] transition-all duration-300 group"
              >
                <div className="flex items-center mb-4">
                  <div className={`w-3 h-3 rounded-full bg-${program.color}-600 mr-3`}></div>
                  <h3 className="text-xl font-semibold group-hover:text-[#8B5CF6] transition-colors">
                    {program.title}
                  </h3>
                </div>
                <p className="text-gray-400 mb-4">
                  {program.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              href="#programs"
              className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-[#8B5CF6] text-[#8B5CF6] hover:bg-[#8B5CF6] hover:text-white transition-all duration-300 rounded-full font-medium"
            >
              Explore Leverage Points
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section> */}

      {/* Branded Programs Section */}
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
              <span className="text-[#8B5CF6]"></span> Programs
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Practical programs for founders who want to build better systems. Shared learning, no guarantees.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {[
              {
                title: "The Method",
                subtitle: "12-Week Program",
                description: "Learn our approach to building systems and infrastructure. Small groups, hands-on work.",
                cta: "Apply Now",
                href: "/keymaster-method",
                price: "Contact for pricing",
                duration: "12 weeks",
                format: "Hybrid"
              },
              {
                title: "Ecosystem Builder",
                subtitle: "6-Month Program",
                description: "For founders ready to build platform-level solutions. Limited spots, serious applicants only.",
                cta: "Apply Now",
                href: "/ecosystem-architect",
                price: "Contact for pricing",
                duration: "6 months",
                format: "In-person"
              }
            ].map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-[#0D0D0D] to-[#1a1a1a] border border-[#8B5CF6] rounded-lg p-8 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#8B5CF6] rounded-full filter blur-[80px] opacity-10"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-white">{program.title}</h3>
                    <span className="bg-[#8B5CF6] text-white text-xs px-3 py-1 rounded-full">
                      {program.subtitle}
                    </span>
                  </div>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {program.description}
                  </p>

                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center">
                      <div className="text-[#8B5CF6] font-bold text-lg">{program.price}</div>
                      <div className="text-gray-500 text-sm">Investment</div>
                    </div>
                    <div className="text-center">
                      <div className="text-[#8B5CF6] font-bold text-lg">{program.duration}</div>
                      <div className="text-gray-500 text-sm">Duration</div>
                    </div>
                    <div className="text-center">
                      <div className="text-[#8B5CF6] font-bold text-lg">{program.format}</div>
                      <div className="text-gray-500 text-sm">Format</div>
                    </div>
                  </div>

                  <Link
                    href={program.href}
                    className="w-full inline-flex items-center justify-center px-6 py-3 bg-[#8B5CF6] text-white hover:bg-white hover:text-[#8B5CF6] border-2 border-[#8B5CF6] transition-all duration-300 rounded-lg font-medium"
                  >
                    {program.cta}
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-[#0D0D0D] border border-gray-800 rounded-lg p-8 text-center"
          >
            <h4 className="text-xl font-semibold mb-4 text-[#8B5CF6]">
              Certification That Changes Careers
            </h4>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Working with Keymaster signals that you think in systems, design ecosystems, and create markets where competition becomes irrelevant.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <div className="flex items-center text-gray-300">
                <Award className="w-5 h-5 mr-2 text-[#8B5CF6]" />
                <span>Lifetime Network Access</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Globe className="w-5 h-5 mr-2 text-[#8B5CF6]" />
                <span>Global Recognition</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Users className="w-5 h-5 mr-2 text-[#8B5CF6]" />
                <span>Alumni Community</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="text-[#8B5CF6]">Approach</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We focus on building practical systems that solve real problems. No silver bullets, just solid engineering.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Lock className="w-8 h-8" />,
                title: "Find the Bottleneck",
                description: "Identify the real constraint holding things back, not just surface symptoms."
              },
              {
                icon: <Key className="w-8 h-8" />,
                title: "Build the Solution",
                description: "Create practical tools and systems that actually solve the identified problem."
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Test and Iterate",
                description: "Build, measure, learn. Repeat until it works for real users."
              },
              {
                icon: <Target className="w-8 h-8" />,
                title: "Focus on Systems",
                description: "Build infrastructure that others can use, not just standalone products."
              },
              {
                icon: <Network className="w-8 h-8" />,
                title: "Practical Engineering",
                description: "Solid, maintainable code that solves real business problems."
              },
              {
                icon: <Rocket className="w-8 h-8" />,
                title: "Sustainable Growth",
                description: "Build systems that can grow without breaking or constant rewrites."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="flex justify-center mb-4 text-[#8B5CF6]">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <Link
              href="/portfolio"
              className="inline-flex items-center px-8 py-4 bg-[#8B5CF6] text-white hover:bg-white hover:text-[#8B5CF6] border-2 border-[#8B5CF6] transition-all duration-300 rounded-full font-medium"
            >
              See Our Work
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}