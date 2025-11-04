<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 16f625df652cd5d5e96faff8a3e0aeaab3d57b6e
"use client";

import { motion } from 'framer-motion';
import { ArrowRight, Target, BarChart3, TrendingUp, Map, Zap, CheckCircle, ExternalLink, Calendar, Users } from 'lucide-react';
<<<<<<< HEAD
=======
=======
'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Brain, Shield, TrendingUp, MessageSquare, Cpu, Globe, Zap, Users, PlusCircle, ExternalLink, CheckCircle, Clock, Target, Layers, Activity } from 'lucide-react';
>>>>>>> c2f06731328de0386b0bee11efb25e40e3cb0f10
>>>>>>> 16f625df652cd5d5e96faff8a3e0aeaab3d57b6e
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 16f625df652cd5d5e96faff8a3e0aeaab3d57b6e
const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export default function PortfolioPage() {
  const projects = [
    {
      id: 1,
      title: "The Alignment Engine",
      tagline: "Strategic Intelligence • Early Development",
      description: "A live dashboard that answers one question: \"Is what my team is doing today actually moving us toward our quarterly goals?\"",
      problemSolved: "Strategy is a document, not a daily practice. Teams work hard but often on the wrong things.",
      coreFunction: "Links company goals to individual tasks, tracks progress, and visualizes alignment.",
      tags: ["Strategy", "Team Analytics", "SaaS"],
      status: "Early Development",
      icon: Target,
      color: "purple"
    },
    {
      id: 2,
      title: "Value Scorecard",
      tagline: "Value Architecture • Building Stage",
      description: "A decision framework that kills project debates. We help you score and prioritize ideas, features, and initiatives based on their potential impact.",
      problemSolved: "Prioritization is political and based on hunches. Good ideas get lost, weak ideas get built.",
      coreFunction: "Custom scoring algorithm, impact forecasting, project comparison dashboard.",
      tags: ["Decision-Making", "Product Management", "Framework"],
      status: "Building Stage",
      icon: BarChart3,
      color: "teal"
    },
    {
      id: 3,
      title: "Capital Currents",
      tagline: "Financial Systems • Research Phase",
      description: "A visualization tool that maps how money truly flows through your business. Move beyond profit & loss statements to see the relationship between spending, activities, and value creation.",
      problemSolved: "Financial data is a lagging indicator, presented in a complex, static format.",
      coreFunction: "Interactive financial mapping, ROI visualization, scenario modeling.",
      tags: ["FinTech", "Data Visualization", "Founder Tools"],
      status: "Research Phase",
      icon: TrendingUp,
      color: "indigo"
    },
    {
      id: 4,
      title: "Strategy Map",
      tagline: "Operational Intelligence • Early Development",
      description: "We convert your founder's vision from a static slide into a dynamic, actionable strategy document. It becomes the single source of truth for every team, updated in real-time.",
      problemSolved: "The company vision is stuck in a deck from an off-site. It doesn't guide daily decisions.",
      coreFunction: "Interactive strategy canvas, goal waterfall, progress tracking.",
      tags: ["Strategy", "OKRs", "SaaS"],
      status: "Early Development",
      icon: Map,
      color: "pink"
    }
  ];

  const approachPoints = [
    {
      title: "Focus on Integration",
      description: "We connect the tools you already use into a cohesive whole.",
      icon: Zap
    },
    {
      title: "Designed for Evolution",
      description: "Our systems are built to learn and adapt as your company grows.",
      icon: TrendingUp
    },
    {
      title: "Data-Driven Feedback",
      description: "We embed metrics and feedback loops so you can see what's working and double down.",
      icon: BarChart3
    }
  ];

  const results = [
    {
      title: "Faster Decisions",
      description: "Stop debating; start executing with confidence."
    },
    {
      title: "Higher ROI on Assets",
      description: "Your content, data, and IP become measurable value drivers."
    },
    {
      title: "Aligned Teams",
      description: "Everyone knows the priorities and how their work contributes."
    },
    {
      title: "Scalable Execution",
      description: "Your operational clarity grows with your company, preventing chaos."
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Early Development": return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
      case "Building Stage": return "bg-blue-500/20 text-blue-400 border-blue-500/30";
      case "Research Phase": return "bg-purple-500/20 text-purple-400 border-purple-500/30";
      default: return "bg-gray-500/20 text-gray-400 border-gray-500/30";
<<<<<<< HEAD
=======
=======
const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'strategic' | 'financial' | 'operational' | 'governance'>('all');
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  // Create ref for parallax effect
  const parallaxBgRef = useRef<HTMLDivElement>(null);

  // Initialize parallax effect
  useEffect(() => {
    const initAnimations = setTimeout(() => {
      if (parallaxBgRef.current) {
        const handleScroll = () => {
          const scrolled = window.pageYOffset;
          const parallax = parallaxBgRef.current;
          if (parallax) {
            parallax.style.transform = `translateY(${scrolled * -0.1}px)`;
          }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }
    }, 100);

    return () => clearTimeout(initAnimations);
  }, []);

  const portfolioCategories = [
    {
      id: 'strategic',
      title: 'Strategic Intelligence',
      description: 'Turning complexity into clarity through adaptive decision systems',
      icon: <Target className="w-6 h-6" />,
      color: 'purple'
    },
    {
      id: 'financial',
      title: 'Financial Systems',
      description: 'Building visibility and control into the flow of capital and digital value',
      icon: <TrendingUp className="w-6 h-6" />,
      color: 'blue'
    },
    {
      id: 'operational',
      title: 'Operational Intelligence',
      description: 'Enhancing workflows and execution pipelines through measurable data feedback',
      icon: <Activity className="w-6 h-6" />,
      color: 'orange'
    },
    {
      id: 'governance',
      title: 'Asset Governance',
      description: 'Ensuring integrity, traceability, and strategic alignment across all digital properties',
      icon: <Shield className="w-6 h-6" />,
      color: 'green'
    }
  ];

  const portfolioCompanies = [
    // Core Portfolio Projects
    {
      id: 'valuemap',
      name: 'Value Map',
      category: 'governance',
      shortDescription: 'A structured framework for mapping, managing, and evolving digital assets',
      description: 'A comprehensive system that provides organizations with the ability to map, manage, and evolve their digital assets across products and ventures. Creates a single source of truth for digital asset intelligence.',
      sectors: ['Digital Asset Management', 'Enterprise Software'],
      status: 'Early Development',
      icon: <Layers className="w-6 h-6" />,
      website: '#',
      focusArea: 'Value Architecture'
    },
    {
      id: 'strategycompass',
      name: 'Strategy Compass',
      category: 'strategic',
      shortDescription: 'Dynamic platform connecting strategic goals with operational data',
      description: 'A dynamic platform that connects strategic goals with operational and financial data for smarter decisions. Provides real-time visibility into how strategic initiatives translate into business outcomes.',
      sectors: ['Strategic Planning', 'Business Intelligence'],
      status: 'Beta',
      icon: <Target className="w-6 h-6" />,
      website: '#',
      focusArea: 'Strategic Intelligence'
    },
    {
      id: 'capitalflow',
      name: 'Capital Flow',
      category: 'financial',
      shortDescription: 'Financial intelligence model for value and capital flow visualization',
      description: 'A sophisticated financial intelligence model that visualizes how value and capital move through an organization. Helps leaders understand the relationship between investment, asset creation, and value generation.',
      sectors: ['FinTech', 'Financial Analytics'],
      status: 'Concept',
      icon: <TrendingUp className="w-6 h-6" />,
      website: '#',
      focusArea: 'Financial Systems'
    },
    {
      id: 'alignmentos',
      name: 'Alignment OS',
      category: 'operational',
      shortDescription: 'Analytics layer measuring team and asset strategic alignment',
      description: 'An advanced analytics layer that measures how effectively teams and assets align with strategic objectives. Provides actionable insights for improving organizational alignment and resource allocation.',
      sectors: ['Performance Management', 'Analytics'],
      status: 'R&D',
      icon: <Activity className="w-6 h-6" />,
      website: '#',
      focusArea: 'Operational Intelligence'
    },
    {
      id: 'impactscore',
      name: 'Impact Score',
      category: 'strategic',
      shortDescription: 'Data framework for ranking initiatives by strategic leverage',
      description: 'A sophisticated data framework that ranks initiatives by strategic leverage, resource efficiency, and long-term value creation. Helps organizations prioritize investments based on measurable impact potential.',
      sectors: ['Strategic Planning', 'Resource Management'],
      status: 'Concept',
      icon: <Target className="w-6 h-6" />,
      website: '#',
      focusArea: 'Strategic Intelligence'
    },
    {
      id: 'executiontracker',
      name: 'Execution Tracker',
      category: 'operational',
      shortDescription: 'Precision system for tracking output consistency and progress',
      description: 'A precision system for tracking output consistency and progress against key outcomes. Focuses on measurable results and provides visibility into execution effectiveness across the organization.',
      sectors: ['Performance Management', 'Operations'],
      status: 'Concept',
      icon: <Activity className="w-6 h-6" />,
      website: '#',
      focusArea: 'Operational Intelligence'
    },

    // Supporting Infrastructure
    {
      id: 'eventflow',
      name: 'EventFlow',
      category: 'strategic',
      shortDescription: 'Market intelligence for external signals impacting portfolio performance',
      description: 'Market intelligence system for identifying external signals that impact portfolio or asset performance. Helps organizations stay ahead of market changes and emerging opportunities.',
      sectors: ['Market Intelligence', 'Data Analytics'],
      status: 'Research Phase',
      icon: <Brain className="w-6 h-6" />,
      website: '#',
      focusArea: 'Supporting Infrastructure'
    },
    {
      id: 'mvpfactory',
      name: 'MVP Factory',
      category: 'operational',
      shortDescription: 'Rapid system for designing, validating, and launching digital products',
      description: 'A rapid system for designing, validating, and launching new digital products and assets. Streamlines the path from idea to market with structured validation processes.',
      sectors: ['Product Development', 'Innovation Management'],
      status: 'Early Development',
      icon: <Zap className="w-6 h-6" />,
      website: '#',
      focusArea: 'Supporting Infrastructure'
    }
  ];

  const filteredCompanies = activeCategory === 'all'
    ? portfolioCompanies
    : portfolioCompanies.filter(company => company.category === activeCategory);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Early Development': return 'bg-yellow-900/30 text-yellow-400 border border-yellow-800/50';
      case 'Research Phase': return 'bg-blue-900/30 text-blue-400 border border-blue-800/50';
      case 'Concept Stage': return 'bg-gray-900/30 text-gray-400 border border-gray-800/50';
      default: return 'bg-gray-900/30 text-gray-400 border border-gray-800/50';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Early Development': 
      case 'Research Phase': return <Clock className="w-4 h-4" />;
      case 'Concept Stage': return <Clock className="w-4 h-4" />;
      default: return <Clock className="w-4 h-4" />;
>>>>>>> c2f06731328de0386b0bee11efb25e40e3cb0f10
>>>>>>> 16f625df652cd5d5e96faff8a3e0aeaab3d57b6e
    }
  };

  return (
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 16f625df652cd5d5e96faff8a3e0aeaab3d57b6e
    <div className="bg-black text-white">
      <Header />

      {/* Hero Section */}
      <motion.section
        className="min-h-screen flex items-center relative border-b border-gray-800 overflow-hidden pt-20"
<<<<<<< HEAD
=======
=======
    <div className="bg-black text-white overflow-hidden">
      <Header />
      
      {/* Hero Section with Background Image */}
      <motion.section
        className="min-h-[80vh] flex items-center relative overflow-hidden"
>>>>>>> c2f06731328de0386b0bee11efb25e40e3cb0f10
>>>>>>> 16f625df652cd5d5e96faff8a3e0aeaab3d57b6e
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 16f625df652cd5d5e96faff8a3e0aeaab3d57b6e
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
                We Build Intelligent<br className="hidden sm:block" />
                <span className="text-[#8B5CF6]">Systems</span><br className="hidden sm:block" />
                That Create Lasting Value
              </h1>
              
              <p className="text-xl sm:text-2xl md:text-3xl text-white mb-10 sm:mb-12 font-light leading-relaxed">
                In a world of disconnected tools and data, we design the central operating system—the framework that aligns your vision, assets, and execution to drive measurable outcomes.
              </p>
<<<<<<< HEAD
=======
=======
        {/* Background Image */}
        <div className="absolute inset-0 z-0" ref={parallaxBgRef}>
          <Image
            src="/images/portfolio-hero.jpg"
            alt="Portfolio background"
            fill
            className="object-cover object-center opacity-80"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <motion.div
            className="max-w-4xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6 text-white">
              Our Portfolio:<br />
              <span className="text-[#8B5CF6]">Systems for Value Creation</span><br />
              and Digital Asset Management
            </h1>
            <motion.p
              className="text-xl sm:text-2xl text-gray-300 mb-6 font-semibold"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              We Build Intelligent Systems That Amplify Value Creation
            </motion.p>
            <motion.p
              className="text-base sm:text-xl text-gray-400 mb-6 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              In a world flooded with data, content, and tools, most organizations still lack one thing - a coherent system that connects vision, assets, and outcomes.
            </motion.p>
            <motion.p
              className="text-base sm:text-xl text-gray-400 mb-6 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              We design and invest in the infrastructure that powers modern value creation. From decision systems to digital asset intelligence, our work focuses on the invisible layer that optimizes how ideas, people, and capital create lasting impact.
            </motion.p>
            <motion.div
              className="bg-[#8B5CF6]/10 border border-[#8B5CF6]/20 rounded-lg p-6 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <p className="text-lg text-white font-semibold mb-2">We don't build features.</p>
              <p className="text-lg text-[#8B5CF6]">We build frameworks that scale clarity, performance, and ownership.</p>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap gap-3 sm:gap-4"
          >
            <Link
              href="/apply-founder"
              className="btn-primary inline-flex items-center px-5 sm:px-8 py-2 sm:py-3 rounded-full hover:bg-[#8B5CF6] transition-colors text-sm sm:text-base"
            >
              Partner With Us
              <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
            </Link>
            <Link
              href="#portfolio"
              className="inline-flex items-center px-5 sm:px-8 py-2 sm:py-3 border-2 border-white text-white rounded-full hover:bg-white hover:text-black transition-colors text-sm sm:text-base"
            >
              View Our Work
              <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Value Intelligence Stack Thesis */}
      <motion.section
        className="py-16 sm:py-20 bg-gradient-to-b from-black to-[#0D0D0D] border-b border-gray-800"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              Our Thesis: <span className="text-[#8B5CF6]">The Value Intelligence Stack</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
              The future belongs to organizations that can measure, manage, and evolve their assets as living systems.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <h3 className="text-2xl font-bold text-white mb-4">Our Focus</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Our focus is on building the Value Intelligence Stack - interconnected systems that integrate strategy, assets, and execution into one continuous flow of insight and action.
              </p>
              <div className="bg-[#8B5CF6]/10 border border-[#8B5CF6]/20 rounded-lg p-6">
                <p className="text-white leading-relaxed">
                  We believe that sustainable growth doesn't come from more tools, but from better integration - where every digital asset becomes a driver of measurable value.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <h3 className="text-2xl font-bold text-white mb-4">Core Focus Areas</h3>
              <div className="space-y-4">
                {[
                  { title: "Strategic Intelligence", desc: "Turning complexity into clarity through adaptive decision systems" },
                  { title: "Value Architecture", desc: "Structuring and optimizing digital assets for long-term scalability and performance" },
                  { title: "Operational Intelligence", desc: "Enhancing workflows and execution pipelines through measurable data feedback" },
                  { title: "Financial Systems", desc: "Building visibility and control into the flow of capital and digital value" },
                  { title: "Asset Governance", desc: "Ensuring integrity, traceability, and strategic alignment across all digital properties" }
                ].map((area, index) => (
                  <div key={index} className="bg-[#0D0D0D] border border-gray-800 rounded-lg p-4">
                    <h4 className="text-[#8B5CF6] font-semibold mb-2">{area.title}</h4>
                    <p className="text-gray-400 text-sm">{area.desc}</p>
                  </div>
                ))}
              </div>
>>>>>>> c2f06731328de0386b0bee11efb25e40e3cb0f10
>>>>>>> 16f625df652cd5d5e96faff8a3e0aeaab3d57b6e
            </motion.div>
          </div>
        </div>
      </motion.section>

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 16f625df652cd5d5e96faff8a3e0aeaab3d57b6e
      {/* Projects Section */}
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
              Our Projects in <span className="text-[#8B5CF6]">Action</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Each project solves a specific business problem with intelligent systems design
            </p>
          </motion.div>

          <div className="space-y-12">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-[#0D0D0D] to-[#1a1a1a] border border-gray-800 rounded-lg p-8 lg:p-12 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#8B5CF6] rounded-full filter blur-[80px] opacity-10"></div>
                
                <div className="relative z-10">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-4">
                        <div className={`w-12 h-12 bg-${project.color}-500/20 rounded-lg flex items-center justify-center`}>
                          <project.icon className={`w-6 h-6 text-${project.color}-400`} />
                        </div>
                        <div>
                          <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2">
                            {project.title}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="text-[#8B5CF6] text-sm">
                              {project.tagline}
                            </span>
                            <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(project.status)}`}>
                              {project.status}
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-6">
                    <div>
                      <h4 className="text-[#8B5CF6] font-semibold mb-3">The Problem Solved</h4>
                      <p className="text-gray-400 leading-relaxed">
                        {project.problemSolved}
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="text-[#8B5CF6] font-semibold mb-3">Core Function</h4>
                      <p className="text-gray-400 leading-relaxed">
                        {project.coreFunction}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-[#8B5CF6]/10 border border-[#8B5CF6]/30 rounded-full text-sm text-[#8B5CF6]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach Section */}
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
              Our Approach: <span className="text-[#8B5CF6]">Systems</span>, Not Just Software
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We don't build one-off features. We build the underlying frameworks that create clarity, accountability, and scale.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {approachPoints.map((point, index) => (
<<<<<<< HEAD
=======
=======
      {/* Current Projects */}
      <motion.section
        className="py-16 sm:py-20 bg-[#0D0D0D] border-b border-gray-800"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              Current <span className="text-[#8B5CF6]">Projects</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              These are the systems we're actively building. All in early stages, focused on real startup problems.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              {
                title: "Strategy Intelligence",
                description: "Tools to help founders track and optimize their company strategy",
                status: "Early Development",
                gradient: "from-purple-600 to-blue-600"
              },
              {
                title: "Team Alignment", 
                description: "Analytics to measure how well team actions match company priorities",
                status: "Early Development",
                gradient: "from-blue-600 to-cyan-600"
              },
              {
                title: "Financial Intelligence",
                description: "Tools to visualize how money flows through your business",
                status: "Research Phase",
                gradient: "from-green-600 to-emerald-600"
              },
              {
                title: "Value Scoring",
                description: "Framework to prioritize ideas and projects by potential impact",
                status: "Concept Stage",
                gradient: "from-orange-600 to-red-600"
              },
              {
                title: "Strategy Mapping",
                description: "Converting founder vision into actionable strategy documents",
                status: "Early Development",
                gradient: "from-pink-600 to-purple-600"
              },
              {
                title: "Execution Tracking",
                description: "Tools to measure consistency and progress toward goals",
                status: "Concept Stage",
                gradient: "from-indigo-600 to-purple-600"
              }
            ].map((project, index) => (
>>>>>>> c2f06731328de0386b0bee11efb25e40e3cb0f10
>>>>>>> 16f625df652cd5d5e96faff8a3e0aeaab3d57b6e
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 16f625df652cd5d5e96faff8a3e0aeaab3d57b6e
                className="text-center"
              >
                <div className="w-16 h-16 bg-[#8B5CF6]/20 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <point.icon className="w-8 h-8 text-[#8B5CF6]" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  {point.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {point.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
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
              The Results We <span className="text-[#8B5CF6]">Drive</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              When you have a coherent system, you get:
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {results.map((result, index) => (
              <motion.div
                key={index}
<<<<<<< HEAD
=======
=======
                className="bg-black border border-gray-800 rounded-lg p-6 hover:border-[#8B5CF6] transition-all duration-300 group"
              >
                <div className={`h-2 w-full bg-gradient-to-r ${project.gradient} rounded-full mb-4`}></div>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#8B5CF6] transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs px-2 py-1 bg-yellow-900/30 text-yellow-400 border border-yellow-800/50 rounded-full">
                    {project.status}
                  </span>
                  <span className="text-xs text-gray-500">Building Stage</span>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Link
              href="/apply-founder"
              className="inline-flex items-center px-8 py-4 bg-[#8B5CF6] text-white hover:bg-white hover:text-[#8B5CF6] hover:border-[#8B5CF6] border-2 border-[#8B5CF6] transition-all duration-300 rounded-full font-medium"
            >
              Partner With Us
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Visual Portfolio Showcase */}
      <motion.section
        className="py-16 sm:py-20 bg-gradient-to-b from-[#0D0D0D] to-black border-b border-gray-800"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="text-[#8B5CF6]">Work in Action</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Behind every system we build, there's a team making it happen and data proving its value.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="relative rounded-lg overflow-hidden group h-80"
            >
              <Image
                src="/images/team-analytics.jpg"
                alt="Team Analytics Dashboard"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6">
                  <h3 className="text-white font-bold text-lg mb-2">Strategic Intelligence</h3>
                  <p className="text-gray-300 text-sm">Real-time analytics driving informed decisions</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="relative rounded-lg overflow-hidden group h-80"
            >
              <Image
                src="/images/financial-dashboard.jpg"
                alt="Financial Dashboard"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6">
                  <h3 className="text-white font-bold text-lg mb-2">Financial Systems</h3>
                  <p className="text-gray-300 text-sm">Capital flow optimization and value tracking</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Supporting Infrastructure */}
      <motion.section
        className="py-16 sm:py-20 bg-black border-b border-gray-800"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              Supporting <span className="text-[#8B5CF6]">Infrastructure</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Enabling systems that support and accelerate our core portfolio development.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {portfolioCompanies.filter(company => company.focusArea === 'Supporting Infrastructure').map((company, index) => (
              <motion.div
                key={company.id}
>>>>>>> c2f06731328de0386b0bee11efb25e40e3cb0f10
>>>>>>> 16f625df652cd5d5e96faff8a3e0aeaab3d57b6e
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 16f625df652cd5d5e96faff8a3e0aeaab3d57b6e
                className="flex items-start space-x-4"
              >
                <CheckCircle className="w-6 h-6 text-[#8B5CF6] mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {result.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {result.description}
                  </p>
<<<<<<< HEAD
=======
=======
                className="bg-[#0D0D0D] border border-gray-800 rounded-lg p-8 hover:border-[#8B5CF6] transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-[#8B5CF6]">
                    {company.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{company.name}</h3>
                    <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium mt-2 ${getStatusColor(company.status)}`}>
                      {getStatusIcon(company.status)}
                      {company.status}
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {company.shortDescription}
                </p>
                
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {company.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {company.sectors.map((sector, sectorIndex) => (
                    <span key={sectorIndex} className="bg-gray-800 text-gray-400 px-3 py-1 rounded-full text-sm">
                      {sector}
                    </span>
                  ))}
>>>>>>> c2f06731328de0386b0bee11efb25e40e3cb0f10
>>>>>>> 16f625df652cd5d5e96faff8a3e0aeaab3d57b6e
                </div>
              </motion.div>
            ))}
          </div>
        </div>
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 16f625df652cd5d5e96faff8a3e0aeaab3d57b6e
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
              Ready to Build <span className="text-[#8B5CF6]">Your System</span>?
            </h2>
            <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto">
              If your projects and challenges resonate with the work you see here, let's talk. We partner with founders who are ready to replace operational chaos with intelligent, scalable systems.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/apply-founder"
                className="inline-flex items-center px-8 py-4 bg-[#8B5CF6] text-white hover:bg-white hover:text-[#8B5CF6] border-2 border-[#8B5CF6] transition-all duration-300 rounded-full text-lg font-medium relative group overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  View a Detailed Case Study
                  <ArrowRight className="ml-2" size={20} />
                </span>
                <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
              </Link>
              <Link
                href="/apply-founder"
                className="inline-flex items-center px-8 py-4 bg-transparent text-white hover:bg-white hover:text-[#8B5CF6] border-2 border-white transition-all duration-300 rounded-full text-lg font-medium relative group overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  Schedule a Intro Call
                  <ArrowRight className="ml-2" size={20} />
                </span>
                <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
<<<<<<< HEAD
=======
=======
      </motion.section>

      {/* Partner With Us CTA */}
      <motion.section
        className="py-16 sm:py-20 bg-gradient-to-b from-black to-[#0D0D0D]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              Partner <span className="text-[#8B5CF6]">With Us</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
              We collaborate with founders, operators, and investors who understand that real leverage comes from systems - not speculation.
            </p>
            <div className="bg-[#8B5CF6]/10 border border-[#8B5CF6]/20 rounded-lg p-8 max-w-4xl mx-auto mb-8">
              <p className="text-lg text-white mb-4 leading-relaxed">
                If your focus is on building scalable value creation engines, optimizing digital portfolios, or managing assets with intelligence, we should talk.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/apply-founder"
                className="inline-flex items-center px-8 py-4 bg-[#8B5CF6] text-white hover:bg-white hover:text-[#8B5CF6] hover:border-[#8B5CF6] border-2 border-[#8B5CF6] transition-all duration-300 rounded-full text-lg font-medium"
              >
                Contact Us to Start a Conversation
                <ArrowRight className="ml-2 w-5 h-5" />
>>>>>>> c2f06731328de0386b0bee11efb25e40e3cb0f10
>>>>>>> 16f625df652cd5d5e96faff8a3e0aeaab3d57b6e
              </Link>
            </div>
          </motion.div>
        </div>
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 16f625df652cd5d5e96faff8a3e0aeaab3d57b6e
      </section>

      <Footer />
    </div>
  );
<<<<<<< HEAD
}
=======
}
=======
      </motion.section>
      
      <Footer />
    </div>
  );
};

export default Portfolio;
>>>>>>> c2f06731328de0386b0bee11efb25e40e3cb0f10
>>>>>>> 16f625df652cd5d5e96faff8a3e0aeaab3d57b6e
