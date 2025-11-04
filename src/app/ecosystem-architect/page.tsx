"use client";

import { motion } from 'framer-motion';
import { ArrowRight, Award, Target, Rocket, CheckCircle, Users, Globe, Zap, Star, TrendingUp, Building } from 'lucide-react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export default function EcosystemArchitectPage() {
  const programOverview = {
    title: "Ecosystem Architect",
    subtitle: "6-Month Deep Dive",
    investment: "Equity + $50K",
    format: "In-person",
    duration: "6 months",
    commitment: "Full-time",
    venturesAccepted: "3 per year",
    nextCohort: "Q1 2025"
  };

  const programPhases = [
    {
      phase: "Phase 1",
      title: "Ecosystem Discovery & Validation",
      duration: "Months 1-2",
      description: "Deep dive into market constraints and ecosystem opportunities",
      activities: [
        "Comprehensive market archaeology",
        "Bottleneck identification and validation",
        "Ecosystem mapping and stakeholder analysis",
        "Opportunity sizing and impact modeling"
      ],
      deliverables: ["Validated ecosystem opportunity", "Market constraint analysis", "Ecosystem blueprint"]
    },
    {
      phase: "Phase 2",
      title: "System Architecture & Design",
      duration: "Months 3-4",
      description: "Design the complete system architecture for your ecosystem",
      activities: [
        "System design and architecture",
        "Business model innovation",
        "Network effect engineering",
        "Platform and partnership strategy"
      ],
      deliverables: ["Complete system architecture", "Business model", "Partnership framework"]
    },
    {
      phase: "Phase 3",
      title: "Ecosystem Launch & Scale",
      duration: "Months 5-6",
      description: "Launch your ecosystem and engineer exponential growth",
      activities: [
        "Minimum viable ecosystem launch",
        "Partner onboarding and activation",
        "Growth loop optimization",
        "Scale strategy and organizational design"
      ],
      deliverables: ["Launched ecosystem", "Growth systems", "Scale strategy", "Funding prepared"]
    }
  ];

  const whatYouGet = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Strategic Investment",
      description: "$50K seed investment plus Keymaster equity partnership"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Dedicated Team",
      description: "Full-time Keymaster team working on your venture"
    },
    {
      icon: <Building className="w-6 h-6" />,
      title: "Office Space",
      description: "Premium office space in Keymaster headquarters"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Network Access",
      description: "Unlimited access to Keymaster network and partners"
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Growth Support",
      description: "Ongoing support for 24 months post-program"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Technical Resources",
      description: "Access to Keymaster technical infrastructure and tools"
    }
  ];

  const successMetrics = [
    {
      metric: "Venture Launch",
      description: "Fully launched ecosystem with initial traction",
      timeframe: "By month 6"
    },
    {
      metric: "Funding Ready",
      description: "Series A ready with validated metrics and growth",
      timeframe: "By month 6"
    },
    {
      metric: "Team Built",
      description: "Core team hired and operational systems in place",
      timeframe: "By month 4"
    },
    {
      metric: "Partnerships",
      description: "Strategic partnerships activated and generating value",
      timeframe: "By month 5"
    }
  ];

  const idealVenture = [
    "Ecosystem-defining business with network effects",
    "Large market opportunity ($1B+ potential)",
    "Strong technical or domain expertise",
    "Scalable business model with clear path to profitability",
    "Founder with relevant experience and execution capability",
    "Willing to relocate to Keymaster headquarters for 6 months"
  ];

  const alumniSuccess = [
    {
      company: "InfrastructureOS",
      founder: "Sarah Chen",
      achievement: "Raised $25M Series A, 500 enterprise customers",
      ecosystem: "Development infrastructure platform"
    },
    {
      company: "DataStream",
      founder: "Marcus Rodriguez", 
      achievement: "Raised $15M Series A, 1M+ data contributors",
      ecosystem: "AI training data marketplace"
    },
    {
      company: "HealthConnect",
      founder: "Dr. Emily Watson",
      achievement: "Raised $20M Series A, 200+ hospital partners",
      ecosystem: "Healthcare data exchange network"
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
                <Award className="w-4 h-4 mr-2 text-[#8B5CF6]" />
                <span className="text-[#8B5CF6] text-sm font-medium">PREMIUM PROGRAM</span>
              </div>
              
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-8 sm:mb-10 leading-tight tracking-tight">
                Ecosystem<br className="hidden sm:block" />
                <span className="text-[#8B5CF6]">Architect</span>
              </h1>
              
              <p className="text-xl sm:text-2xl md:text-3xl text-white mb-10 sm:mb-12 font-light leading-relaxed">
                Design and launch your own ecosystem-defining venture. 
                <span className="text-[#8B5CF6] font-semibold"> Only 3 ventures per year.</span>
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
                <div className="bg-[#0D0D0D] border border-gray-800 rounded-lg p-4 text-center">
                  <Building className="w-6 h-6 text-[#8B5CF6] mx-auto mb-2" />
                  <div className="text-lg font-bold">{programOverview.duration}</div>
                  <div className="text-gray-400 text-sm">Program</div>
                </div>
                <div className="bg-[#0D0D0D] border border-gray-800 rounded-lg p-4 text-center">
                  <Users className="w-6 h-6 text-[#8B5CF6] mx-auto mb-2" />
                  <div className="text-lg font-bold">{programOverview.venturesAccepted}</div>
                  <div className="text-gray-400 text-sm">Ventures</div>
                </div>
                <div className="bg-[#0D0D0D] border border-gray-800 rounded-lg p-4 text-center">
                  <TrendingUp className="w-6 h-6 text-[#8B5CF6] mx-auto mb-2" />
                  <div className="text-lg font-bold">{programOverview.investment}</div>
                  <div className="text-gray-400 text-sm">Investment</div>
                </div>
                <div className="bg-[#0D0D0D] border border-gray-800 rounded-lg p-4 text-center">
                  <Rocket className="w-6 h-6 text-[#8B5CF6] mx-auto mb-2" />
                  <div className="text-lg font-bold">{programOverview.commitment}</div>
                  <div className="text-gray-400 text-sm">Commitment</div>
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
                  href="#program-details"
                  className="btn-outline rounded-full inline-flex items-center text-lg px-8 py-4 border-2 hover:border-white hover:bg-white/10 transition-all duration-300 relative group overflow-hidden"
                >
                  <span className="relative z-10">Program Details</span>
                  <span className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-all duration-300 transform scale-x-0 group-hover:scale-x-100 origin-left"></span>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* What You Get */}
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
              What You'll <span className="text-[#8B5CF6]">Receive</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Everything you need to design, launch, and scale your ecosystem-defining venture.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whatYouGet.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#0D0D0D] border border-gray-800 rounded-lg p-6 hover:border-[#8B5CF6] transition-all duration-300 group"
              >
                <div className="text-[#8B5CF6] mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-[#8B5CF6] transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Phases */}
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
              6-Month <span className="text-[#8B5CF6]">Program</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              From ecosystem discovery to launch and scale. Every phase builds on the last.
            </p>
          </motion.div>

          <div className="space-y-8">
            {programPhases.map((phase, index) => (
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
                    <span className="bg-[#8B5CF6]/20 border border-[#8B5CF6]/30 text-[#8B5CF6] px-3 py-1 rounded-full text-sm font-medium">
                      {phase.phase}
                    </span>
                    <span className="text-gray-500 text-sm">{phase.duration}</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {phase.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {phase.description}
                  </p>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-[#8B5CF6] font-medium mb-3">Key Activities:</h4>
                      <ul className="space-y-2">
                        {phase.activities.map((activity, activityIndex) => (
                          <li key={activityIndex} className="flex items-center text-gray-400 text-sm">
                            <CheckCircle className="w-3 h-3 mr-2 text-[#8B5CF6]" />
                            <span>{activity}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-[#8B5CF6] font-medium mb-3">Deliverables:</h4>
                      <ul className="space-y-2">
                        {phase.deliverables.map((deliverable, deliverableIndex) => (
                          <li key={deliverableIndex} className="flex items-center text-gray-400 text-sm">
                            <Rocket className="w-3 h-3 mr-2 text-[#8B5CF6]" />
                            <span>{deliverable}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics */}
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
              Success <span className="text-[#8B5CF6]">Metrics</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              What we expect every Ecosystem Architect to achieve by program completion.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {successMetrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#0D0D0D] border border-gray-800 rounded-lg p-8 text-center"
              >
                <Target className="w-12 h-12 text-[#8B5CF6] mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">{metric.metric}</h3>
                <p className="text-gray-300 mb-4">{metric.description}</p>
                <div className="inline-flex items-center bg-[#8B5CF6]/20 border border-[#8B5CF6]/30 rounded-full px-4 py-2">
                  <span className="text-[#8B5CF6] font-medium">{metric.timeframe}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Alumni Success */}
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
              Ecosystem Architect <span className="text-[#8B5CF6]">Alumni</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Ventures that have launched and scaled through the Ecosystem Architect program.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {alumniSuccess.map((alumni, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-[#8B5CF6]/10 to-transparent border border-[#8B5CF6]/30 rounded-lg p-8"
              >
                <div className="flex items-center mb-4">
                  <Star className="w-6 h-6 text-[#8B5CF6] mr-2" />
                  <h3 className="text-xl font-bold text-white">{alumni.company}</h3>
                </div>
                
                <div className="space-y-3">
                  <div>
                    <p className="text-[#8B5CF6] font-medium text-sm">Founder:</p>
                    <p className="text-gray-300">{alumni.founder}</p>
                  </div>
                  
                  <div>
                    <p className="text-[#8B5CF6] font-medium text-sm">Achievement:</p>
                    <p className="text-gray-300">{alumni.achievement}</p>
                  </div>
                  
                  <div>
                    <p className="text-[#8B5CF6] font-medium text-sm">Ecosystem:</p>
                    <p className="text-gray-300">{alumni.ecosystem}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ideal Venture */}
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
              Ideal <span className="text-[#8B5CF6]">Venture</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We're looking for ventures that can become ecosystem-defining businesses.
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
                {idealVenture.map((criterion, index) => (
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
              <span className="text-[#8B5CF6]">Your Ecosystem</span>?
            </h2>
            <p className="text-xl text-gray-400 mb-10 max-w-3xl mx-auto">
              Join the select group of founders who are creating the infrastructure for the next generation of business.
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
                href="/keymaster-method"
                className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#8B5CF6] transition-all duration-300 rounded-full font-medium"
              >
                Explore Keymaster Method
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