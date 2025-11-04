<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 16f625df652cd5d5e96faff8a3e0aeaab3d57b6e
"use client";

import { motion } from 'framer-motion';
import { ArrowRight, Target, TrendingUp, Zap, BarChart3, Users, CheckCircle, Clock, Award, Lightbulb } from 'lucide-react';
<<<<<<< HEAD
=======
=======
'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Brain, Lightbulb, Rocket, TrendingUp, BarChart3, DollarSign, Target, Users, Zap } from 'lucide-react';
>>>>>>> c2f06731328de0386b0bee11efb25e40e3cb0f10
>>>>>>> 16f625df652cd5d5e96faff8a3e0aeaab3d57b6e
import Link from 'next/link';
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

export default function ScalePage() {
  const coreServices = [
    {
      category: "Strategic Foundation",
      description: "Get your roadmap right first",
      icon: Target,
      color: "purple",
      services: [
        {
          title: "Strategic Advisory",
          duration: "3-6 Month Retainer",
          description: "Clarity before velocity. We help you define your winning position, identify your most valuable opportunities, and build a execution-ready plan.",
          features: [
            "Strategic Planning & Market Positioning",
            "Competitive Landscape Analysis",
            "Growth Opportunity Mapping"
          ]
        },
        {
          title: "Financial Modeling & Analysis",
          duration: "3-6 Week Project",
          description: "Make confident decisions with financial models that actually reflect your business reality.",
          features: [
            "Unit Economic Analysis",
            "Scenario Planning & Forecasting",
            "Fundraising Strategy & Materials"
          ]
        }
      ]
    },
    {
      category: "Accelerated Execution",
      description: "Move faster with precision",
      icon: Zap,
      color: "teal",
      services: [
        {
          title: "Product Discovery & MVP Sprints",
          duration: "4-8 Week Engagement",
          description: "Validate and build what customers actually want. Go from idea to tested solution in weeks, not months.",
          features: [
            "Rapid Prototyping & User Testing",
            "Market Validation Frameworks",
            "Product-Market Fit Assessment"
          ]
        },
        {
          title: "Growth Strategy & Implementation",
          duration: "6-12 Week Sprint",
          description: "Systematic growth that compounds. We design and execute customer acquisition engines tailored to your market.",
          features: [
            "Growth Channel Strategy",
            "Conversion Optimization",
            "Scalable Acquisition Playbooks"
          ]
        }
      ]
    },
    {
      category: "Capability Building",
      description: "Equip your team to win",
      icon: Users,
      color: "indigo",
      services: [
        {
          title: "AI Transformation Workshops",
          duration: "2-4 Day Intensive",
          description: "Practical AI integration for immediate business impact. We focus on use cases that drive revenue and efficiency.",
          features: [
            "AI Opportunity Audit",
            "Implementation Roadmapping",
            "Team Training & Capability Building"
          ]
        }
      ]
    }
  ];

  const deliveryProcess = [
    {
      step: "01",
      title: "Diagnose",
      description: "We start with your specific bottlenecks—not generic templates. Through focused assessment, we identify the 2-3 leverage points that will drive disproportionate growth.",
      icon: Lightbulb
    },
    {
      step: "02", 
      title: "Design",
      description: "We create execution-ready strategies with clear ownership and metrics. No theoretical frameworks—only practical plans built for your team, your market, and your goals.",
      icon: Target
    },
    {
      step: "03",
      title: "Execute", 
      description: "Our experts embed with your team to drive implementation. We focus on momentum and measurable weekly progress, adapting as we learn.",
      icon: Zap
    },
    {
      step: "04",
      title: "Equip",
      description: "We transfer knowledge and systems to your team, ensuring you maintain velocity long after our engagement ends.",
      icon: Award
    }
  ];

  const whyWorkWithUs = [
    {
      title: "Focus on Leverage",
      description: "We ignore vanity metrics to concentrate on what actually moves your business forward.",
      icon: TrendingUp
    },
    {
      title: "Execution Partnership",
      description: "We don't just advise—we roll up our sleeves and work alongside you to get results.",
      icon: Users
    },
    {
      title: "Adaptive Approach",
      description: "Your business isn't static, and neither are we. We evolve strategies based on real-world feedback and data.",
      icon: BarChart3
    }
  ];
<<<<<<< HEAD
=======
=======
const Scale = () => {
  const scaleServices = [
    {
      title: "AI Business Workshops",
      href: "/ai-workshops",
      description: "Practical AI training for executives and teams to leverage artificial intelligence for business growth and innovation.",
      icon: <Brain className="w-8 h-8" />,
      color: "purple",
      features: [
        "Executive AI Strategy Training",
        "Team AI Capability Building",
        "AI Implementation Roadmaps",
        "Hands-on AI Workshops"
      ],
      duration: "2-4 Days",
      format: "In-Person & Virtual"
    },
    {
      title: "Business ThinkTank",
      href: "/mastermind",
      description: "Collective intelligence for modern leaders through curated peer groups and expert facilitation.",
      icon: <Users className="w-8 h-8" />,
      color: "teal",
      features: [
        "Peer-to-Peer Learning",
        "Expert Facilitated Sessions",
        "Problem-Solving Workshops",
        "Strategic Networking"
      ],
      duration: "Ongoing",
      format: "Monthly Sessions"
    },
    {
      title: "Product Discovery",
      href: "/product-discovery",
      description: "MVP sprints and product validation to transform ideas into market-ready products.",
      icon: <Lightbulb className="w-8 h-8" />,
      color: "orange",
      features: [
        "Rapid Prototyping",
        "Market Validation",
        "User Research & Testing",
        "MVP Development"
      ],
      duration: "4-8 Weeks",
      format: "Sprint-Based"
    },
    {
      title: "Strategic Advisory",
      href: "/strategic-advisory",
      description: "Business strategy and consulting to navigate complex challenges and seize growth opportunities.",
      icon: <Target className="w-8 h-8" />,
      color: "indigo",
      features: [
        "Strategic Planning",
        "Market Positioning",
        "Competitive Analysis",
        "Growth Roadmapping"
      ],
      duration: "3-6 Months",
      format: "Retainer-Based"
    },
    {
      title: "Growth Strategy",
      href: "/growth-strategy",
      description: "Scaling and market expansion strategies to accelerate business growth and market penetration.",
      icon: <TrendingUp className="w-8 h-8" />,
      color: "pink",
      features: [
        "Growth Hacking Strategies",
        "Market Expansion Planning",
        "Customer Acquisition",
        "Revenue Optimization"
      ],
      duration: "6-12 Weeks",
      format: "Project-Based"
    },
    {
      title: "Market Analysis",
      href: "/market-analysis",
      description: "Comprehensive market research and insights to inform data-driven business decisions.",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "green",
      features: [
        "Market Sizing & Analysis",
        "Competitive Intelligence",
        "Customer Insights",
        "Trend Forecasting"
      ],
      duration: "2-4 Weeks",
      format: "Project-Based"
    },
    {
      title: "Financial Modeling",
      href: "/financial-modeling",
      description: "Financial planning and analysis to support strategic decision-making and investor relations.",
      icon: <DollarSign className="w-8 h-8" />,
      color: "red",
      features: [
        "Financial Forecasting",
        "Valuation Models",
        "Investor Pitch Decks",
        "Budget Planning"
      ],
      duration: "3-6 Weeks",
      format: "Project-Based"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap: { [key: string]: { bg: string; text: string; hover: string } } = {
      purple: { bg: 'bg-purple-500', text: 'text-purple-500', hover: 'hover:bg-purple-600' },
      teal: { bg: 'bg-teal-500', text: 'text-teal-500', hover: 'hover:bg-teal-600' },
      orange: { bg: 'bg-orange-500', text: 'text-orange-500', hover: 'hover:bg-orange-600' },
      indigo: { bg: 'bg-indigo-500', text: 'text-indigo-500', hover: 'hover:bg-indigo-600' },
      pink: { bg: 'bg-pink-500', text: 'text-pink-500', hover: 'hover:bg-pink-600' },
      green: { bg: 'bg-green-500', text: 'text-green-500', hover: 'hover:bg-green-600' },
      red: { bg: 'bg-red-500', text: 'text-red-500', hover: 'hover:bg-red-600' }
    };
    return colorMap[color] || colorMap.purple;
  };
>>>>>>> c2f06731328de0386b0bee11efb25e40e3cb0f10
>>>>>>> 16f625df652cd5d5e96faff8a3e0aeaab3d57b6e

  return (
    <div className="bg-black text-white">
      <Header />
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 16f625df652cd5d5e96faff8a3e0aeaab3d57b6e

      {/* Hero Section */}
      <motion.section
        className="min-h-screen flex items-center relative border-b border-gray-800 overflow-hidden pt-20"
<<<<<<< HEAD
=======
=======
      
      {/* Hero Section */}
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
                Scale Your Business with<br className="hidden sm:block" />
                <span className="text-[#8B5CF6]">Focus and Precision</span>
              </h1>
              
              <p className="text-xl sm:text-2xl md:text-3xl text-white mb-10 sm:mb-12 font-light leading-relaxed">
                Stop the guesswork of growth. We provide targeted scaling solutions that deliver measurable impact—not just more activity.
              </p>
            </motion.div>
<<<<<<< HEAD
=======
=======
        {/* Background Image */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("/programs.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>

        {/* Overlay */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.8))',
          }}
        ></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
              Scale Your<br />
              Business
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mb-8">
              Comprehensive scaling services designed to accelerate growth, optimize operations, and build sustainable competitive advantages for modern businesses.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center space-x-2">
                <Zap className="w-5 h-5 text-[#8B5CF6]" />
                <span>7 Services</span>
              </div>
              <div className="flex items-center space-x-2">
                <Rocket className="w-5 h-5 text-[#8B5CF6]" />
                <span>Rapid Scaling</span>
              </div>
              <div className="flex items-center space-x-2">
                <Target className="w-5 h-5 text-[#8B5CF6]" />
                <span>Results-Driven</span>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Services Overview */}
      <motion.section
        className="py-20 bg-white"
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
            <h2 className="text-4xl font-bold mb-4 text-black">Our Scale Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From AI transformation to strategic growth, we provide comprehensive services to scale your business effectively.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {scaleServices.map((service, index) => {
              const colors = getColorClasses(service.color);
              return (
                <motion.div
                  key={index}
                  className="bg-gray-50 rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className={`${colors.bg} p-6 text-white`}>
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-3 bg-white/20 rounded-lg">
                        {service.icon}
                      </div>
                      <div className="text-right">
                        <div className="text-sm opacity-90">{service.duration}</div>
                        <div className="text-xs opacity-75">{service.format}</div>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-700 mb-4">{service.description}</p>
                    <div className="space-y-2 mb-6">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <div className={`w-2 h-2 ${colors.text} rounded-full`}></div>
                          <span className="text-gray-600 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Link
                      href={service.href}
                      className={`${colors.bg} ${colors.hover} text-white py-2 px-4 rounded-lg inline-flex items-center transition-colors`}
                    >
                      Learn More
                      <ArrowRight className="ml-2" size={16} />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
>>>>>>> c2f06731328de0386b0bee11efb25e40e3cb0f10
>>>>>>> 16f625df652cd5d5e96faff8a3e0aeaab3d57b6e
          </div>
        </div>
      </motion.section>

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 16f625df652cd5d5e96faff8a3e0aeaab3d57b6e
      {/* Core Services Section */}
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
              Our Core <span className="text-[#8B5CF6]">Scaling Services</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Group related services to reduce overwhelm and show strategic thinking
            </p>
          </motion.div>

          <div className="space-y-16">
            {coreServices.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center mb-8">
                  <div className={`w-12 h-12 bg-${category.color}-500/20 rounded-lg flex items-center justify-center mr-4`}>
                    <category.icon className={`w-6 h-6 text-${category.color}-400`} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{category.category}</h3>
                    <p className="text-gray-400">{category.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {category.services.map((service, serviceIndex) => (
                    <div
                      key={serviceIndex}
                      className="bg-gradient-to-br from-[#0D0D0D] to-[#1a1a1a] border border-gray-800 rounded-lg p-8 relative overflow-hidden"
                    >
                      <div className="absolute top-0 right-0 w-32 h-32 bg-[#8B5CF6] rounded-full filter blur-[80px] opacity-10"></div>
                      
                      <div className="relative z-10">
                        <div className="flex items-center justify-between mb-4">
                          <h4 className="text-xl font-bold text-white">{service.title}</h4>
                          <span className="px-3 py-1 bg-[#8B5CF6]/20 border border-[#8B5CF6]/30 rounded-full text-xs text-[#8B5CF6] font-medium">
                            {service.duration}
                          </span>
                        </div>
                        
                        <p className="text-gray-300 mb-6 leading-relaxed">
                          {service.description}
                        </p>
                        
                        <div className="space-y-3">
                          {service.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-start">
                              <CheckCircle className="w-4 h-4 mr-3 text-[#8B5CF6] mt-0.5 flex-shrink-0" />
                              <span className="text-gray-400 text-sm">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Deliver Section */}
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
              How We Deliver <span className="text-[#8B5CF6]">Scale</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our proven process for driving measurable growth
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {deliveryProcess.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
<<<<<<< HEAD
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-[#8B5CF6]/20 rounded-lg flex items-center justify-center mx-auto">
                    <step.icon className="w-8 h-8 text-[#8B5CF6]" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#8B5CF6] rounded-full flex items-center justify-center">
                    <span className="text-xs font-bold text-black">{step.step}</span>
                  </div>
=======
                <div className="w-16 h-16 bg-[#8B5CF6]/20 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <step.icon className="w-8 h-8 text-[#8B5CF6]" />
>>>>>>> 16f625df652cd5d5e96faff8a3e0aeaab3d57b6e
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                <p className="text-gray-400 leading-relaxed">{step.description}</p>
<<<<<<< HEAD
=======
=======
      {/* Approach Section */}
      <motion.section
        className="py-20 bg-gray-50"
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
            <h2 className="text-4xl font-bold mb-4 text-black">Our Scaling Approach</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine proven methodologies with cutting-edge insights to deliver measurable results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Assessment",
                description: "Comprehensive analysis of your current state, challenges, and opportunities."
              },
              {
                step: "02",
                title: "Strategy",
                description: "Customized scaling strategy tailored to your unique business needs and goals."
              },
              {
                step: "03",
                title: "Implementation",
                description: "Hands-on execution with our experts working alongside your team."
              },
              {
                step: "04",
                title: "Optimization",
                description: "Continuous improvement and refinement to ensure sustainable growth."
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-4xl font-bold text-[#8B5CF6] mb-4">{step.step}</div>
                <h3 className="text-xl font-bold mb-2 text-black">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
>>>>>>> c2f06731328de0386b0bee11efb25e40e3cb0f10
>>>>>>> 16f625df652cd5d5e96faff8a3e0aeaab3d57b6e
              </motion.div>
            ))}
          </div>
        </div>
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 16f625df652cd5d5e96faff8a3e0aeaab3d57b6e
      </section>

      {/* Why Work With Us Section */}
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
              Why Work <span className="text-[#8B5CF6]">With Us</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              The difference that drives real results
<<<<<<< HEAD
=======
=======
      </motion.section>

      {/* Results Section */}
      <motion.section
        className="py-20 bg-black text-white"
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
            <h2 className="text-4xl font-bold mb-4">Proven Results</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our scaling services have delivered measurable impact across diverse industries.
>>>>>>> c2f06731328de0386b0bee11efb25e40e3cb0f10
>>>>>>> 16f625df652cd5d5e96faff8a3e0aeaab3d57b6e
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 16f625df652cd5d5e96faff8a3e0aeaab3d57b6e
            {whyWorkWithUs.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-[#8B5CF6]/20 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <reason.icon className="w-8 h-8 text-[#8B5CF6]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{reason.title}</h3>
                <p className="text-gray-400 leading-relaxed">{reason.description}</p>
<<<<<<< HEAD
=======
=======
            {[
              {
                metric: "3.5x",
                description: "Average revenue growth for clients"
              },
              {
                metric: "200+",
                description: "Companies scaled successfully"
              },
              {
                metric: "95%",
                description: "Client satisfaction rate"
              }
            ].map((result, index) => (
              <motion.div
                key={index}
                className="text-center p-8 bg-white/5 rounded-lg backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-4xl font-bold text-[#8B5CF6] mb-2">{result.metric}</div>
                <p className="text-gray-300">{result.description}</p>
>>>>>>> c2f06731328de0386b0bee11efb25e40e3cb0f10
>>>>>>> 16f625df652cd5d5e96faff8a3e0aeaab3d57b6e
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
<<<<<<< HEAD
=======
=======
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className="py-20 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
>>>>>>> c2f06731328de0386b0bee11efb25e40e3cb0f10
>>>>>>> 16f625df652cd5d5e96faff8a3e0aeaab3d57b6e
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 16f625df652cd5d5e96faff8a3e0aeaab3d57b6e
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Scale with <span className="text-[#8B5CF6]">Precision</span>?
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
                  Book a Free Scaling Assessment
                  <ArrowRight className="ml-2" size={20} />
                </span>
                <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center px-8 py-4 bg-transparent text-white hover:bg-white hover:text-[#8B5CF6] border-2 border-white transition-all duration-300 rounded-full text-lg font-medium relative group overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  See Our Case Studies
                  <ArrowRight className="ml-2" size={20} />
                </span>
                <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
<<<<<<< HEAD
=======
=======
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4 text-black">Ready to Scale Your Business?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Let's discuss how our scaling services can accelerate your growth journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-[#8B5CF6] text-white py-3 px-8 rounded-full inline-flex items-center justify-center hover:bg-[#7C3AED] transition-colors"
              >
                Get Started
                <ArrowRight className="ml-2" size={20} />
              </Link>
              <Link
                href="/contact"
                className="border-2 border-black text-black py-3 px-8 rounded-full inline-flex items-center justify-center hover:bg-black hover:text-white transition-colors"
              >
                Schedule Consultation
>>>>>>> c2f06731328de0386b0bee11efb25e40e3cb0f10
>>>>>>> 16f625df652cd5d5e96faff8a3e0aeaab3d57b6e
              </Link>
            </div>
          </motion.div>
        </div>
<<<<<<< HEAD
      </section>
=======
<<<<<<< HEAD
      </section>
=======
      </motion.section>
>>>>>>> c2f06731328de0386b0bee11efb25e40e3cb0f10
>>>>>>> 16f625df652cd5d5e96faff8a3e0aeaab3d57b6e

      <Footer />
    </div>
  );
<<<<<<< HEAD
}
=======
<<<<<<< HEAD
}
=======
};

export default Scale;
>>>>>>> c2f06731328de0386b0bee11efb25e40e3cb0f10
>>>>>>> 16f625df652cd5d5e96faff8a3e0aeaab3d57b6e
