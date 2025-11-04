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
<<<<<<< HEAD
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
=======
    subtitle: "12-Week Intensive",
    price: "$25,000",
    format: "Hybrid",
    duration: "12 weeks",
    commitment: "15-20 hours/week",
    cohortSize: "8 participants",
    nextCohort: "Q4 2024"
  };

  const methodModules = [
    {
      week: "Weeks 1-3",
      title: "Problem Discovery",
      description: "Learn to identify and validate real business problems",
      topics: [
        "Market research and customer interviews",
        "Problem validation and opportunity sizing",
        "Stakeholder analysis and systems thinking",
        "Prioritizing problems worth solving"
      ],
      outcomes: ["Identify real opportunities", "Validate market needs", "Assess market potential"]
    },
    {
      week: "Weeks 4-6",
      title: "Solution Design",
      description: "Design practical solutions to address core problems",
      topics: [
        "Solution architecture and design",
        "Business model development",
        "Customer acquisition strategies",
        "Basic metrics and measurement"
      ],
      outcomes: ["Design practical solutions", "Create sustainable models", "Plan customer acquisition"]
    },
    {
      week: "Weeks 7-9",
      title: "Market Testing",
      description: "Test solutions with real customers and iterate",
      topics: [
        "Minimum viable product testing",
        "Early customer development",
        "Feedback collection and analysis",
        "Iterative improvement process"
      ],
      outcomes: ["Test solutions effectively", "Gather customer feedback", "Iterate based on data"]
    },
    {
      week: "Weeks 10-12",
      title: "Growth Planning",
      description: "Plan for sustainable growth and scaling",
      topics: [
        "Growth strategy development",
        "Resource planning and management",
        "Team building and organization",
        "Long-term business planning"
      ],
      outcomes: ["Plan growth strategies", "Manage resources effectively", "Build sustainable organizations"]
>>>>>>> 16f625df652cd5d5e96faff8a3e0aeaab3d57b6e
    }
  ];

  const learningFormat = [
    {
      type: "Live Workshops",
<<<<<<< HEAD
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

=======
      description: "Interactive sessions with Keymaster founders and venture architects",
      frequency: "Weekly 3-hour sessions",
      format: "In-person + virtual hybrid"
    },
    {
      type: "Peer Collaboration",
      description: "Work on real challenges with fellow venture architects",
      frequency: "Small group sessions",
      format: "Collaborative problem-solving"
    },
    {
      type: "Office Hours",
      description: "Direct access to Keymaster team for personalized guidance",
      frequency: "Weekly 1:1 sessions",
      format: "Personalized coaching"
    },
    {
      type: "Ecosystem Projects",
      description: "Apply the method to your own venture in real-time",
      frequency: "Ongoing throughout program",
      format: "Hands-on implementation"
    }
  ];

  const certificationBenefits = [
    "Keymaster Certified credential and digital badge",
    "Lifetime access to Keymaster alumni network",
    "Exclusive access to future Keymaster programs and events",
    "Opportunity to join Keymaster ThinkTank",
    "Featured in Keymaster portfolio and case studies",
    "Ongoing support and advisory from Keymaster team"
  ];

  const idealCandidate = [
    "Experienced founder or operator (3+ years)",
    "Currently building or growing a business",
    "Systems thinker who looks for root causes",
    "Open to challenging conventional thinking",
    "Able to commit 15-20 hours per week for 12 weeks",
    "Looking to build sustainable, meaningful businesses"
  ];

>>>>>>> 16f625df652cd5d5e96faff8a3e0aeaab3d57b6e
  const testimonials = [
    {
      name: "Alex Chen",
      company: "DataTools",
<<<<<<< HEAD
      quote: "The program's focus on data over opinion was a game-changer. We pivoted from a 'cool' feature to a core business solution in week 3, saving us months of wasted effort."
=======
      quote: "The program helped me think more systematically about our business. I went from feature-focused to customer-focused. Much clearer direction now.",
      results: "Product-market fit, growing revenue"
>>>>>>> 16f625df652cd5d5e96faff8a3e0aeaab3d57b6e
    },
    {
      name: "Sarah Rodriguez",
      company: "ConnectFlow",
<<<<<<< HEAD
      quote: "This is the operational playbook I wish I had from day one. It replaces gut feelings with a clear, repeatable process for making build decisions."
=======
      quote: "This isn't just theory. The practical approach to problem-solving changed how we build and test ideas. Actually applying the methods made all the difference.",
      results: "Better retention, steady growth"
>>>>>>> 16f625df652cd5d5e96faff8a3e0aeaab3d57b6e
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
                <span className="text-[#8B5CF6] text-sm font-medium">PRACTICAL PROGRAM</span>
              </div>
              
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-8 sm:mb-10 leading-tight tracking-tight">
                The Keymaster<br className="hidden sm:block" />
                <span className="text-[#8B5CF6]">Method</span>
              </h1>
              
              <p className="text-xl sm:text-2xl md:text-3xl text-white mb-10 sm:mb-12 font-light leading-relaxed">
<<<<<<< HEAD
                Stop Guessing. Start Building. A 12-week program for founders and operators who believe in speed, data, and systematic execution to drive business value.
=======
                A practical approach to building better businesses. Learn systematic methods for problem-solving and sustainable growth.
>>>>>>> 16f625df652cd5d5e96faff8a3e0aeaab3d57b6e
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
                <div className="bg-[#0D0D0D] border border-gray-800 rounded-lg p-4 text-center">
                  <Calendar className="w-6 h-6 text-[#8B5CF6] mx-auto mb-2" />
                  <div className="text-lg font-bold">{programOverview.duration}</div>
<<<<<<< HEAD
                  <div className="text-gray-400 text-sm">Duration</div>
=======
                  <div className="text-gray-400 text-sm">Program</div>
                </div>
                <div className="bg-[#0D0D0D] border border-gray-800 rounded-lg p-4 text-center">
                  <Users className="w-6 h-6 text-[#8B5CF6] mx-auto mb-2" />
                  <div className="text-lg font-bold">{programOverview.cohortSize}</div>
                  <div className="text-gray-400 text-sm">Participants</div>
>>>>>>> 16f625df652cd5d5e96faff8a3e0aeaab3d57b6e
                </div>
                <div className="bg-[#0D0D0D] border border-gray-800 rounded-lg p-4 text-center">
                  <Clock className="w-6 h-6 text-[#8B5CF6] mx-auto mb-2" />
                  <div className="text-lg font-bold">{programOverview.commitment}</div>
                  <div className="text-gray-400 text-sm">Per Week</div>
                </div>
                <div className="bg-[#0D0D0D] border border-gray-800 rounded-lg p-4 text-center">
<<<<<<< HEAD
                  <Users className="w-6 h-6 text-[#8B5CF6] mx-auto mb-2" />
                  <div className="text-lg font-bold">{programOverview.format}</div>
                  <div className="text-gray-400 text-sm">Format</div>
                </div>
                <div className="bg-[#0D0D0D] border border-gray-800 rounded-lg p-4 text-center">
                  <TrendingUp className="w-6 h-6 text-[#8B5CF6] mx-auto mb-2" />
                  <div className="text-lg font-bold">{programOverview.price}</div>
                  <div className="text-gray-400 text-sm">Pricing</div>
=======
                  <TrendingUp className="w-6 h-6 text-[#8B5CF6] mx-auto mb-2" />
                  <div className="text-lg font-bold">{programOverview.price}</div>
                  <div className="text-gray-400 text-sm">Investment</div>
>>>>>>> 16f625df652cd5d5e96faff8a3e0aeaab3d57b6e
                </div>
              </div>

              <div className="flex flex-wrap gap-5">
                <Link
                  href="/apply-founder"
                  className="inline-flex items-center px-8 py-4 bg-[#8B5CF6] text-white hover:bg-white hover:text-[#8B5CF6] hover:border-[#8B5CF6] border-2 border-[#8B5CF6] transition-all duration-300 rounded-full text-lg font-medium relative group overflow-hidden"
                >
                  <span className="relative z-10 flex items-center">
<<<<<<< HEAD
                    Apply Now
=======
                    Apply for Keymaster Method
>>>>>>> 16f625df652cd5d5e96faff8a3e0aeaab3d57b6e
                    <ArrowRight className="ml-2" size={20} />
                  </span>
                  <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
                </Link>
                <Link
                  href="#curriculum"
<<<<<<< HEAD
                  className="inline-flex items-center px-8 py-4 bg-transparent text-white hover:bg-white hover:text-[#8B5CF6] border-2 border-white transition-all duration-300 rounded-full text-lg font-medium relative group overflow-hidden"
                >
                  <span className="relative z-10">Download Curriculum</span>
                  <span className="absolute inset-0 bg-white opacity-0 group-hover:bg-white group-hover:text-[#8B5CF6] transition-all duration-300 transform scale-x-0 group-hover:scale-x-100 origin-left"></span>
=======
                  className="btn-outline rounded-full inline-flex items-center text-lg px-8 py-4 border-2 hover:border-white hover:bg-white/10 transition-all duration-300 relative group overflow-hidden"
                >
                  <span className="relative z-10">View Curriculum</span>
                  <span className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-all duration-300 transform scale-x-0 group-hover:scale-x-100 origin-left"></span>
>>>>>>> 16f625df652cd5d5e96faff8a3e0aeaab3d57b6e
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

<<<<<<< HEAD
      {/* The Method Section */}
=======
      {/* Program Overview */}
>>>>>>> 16f625df652cd5d5e96faff8a3e0aeaab3d57b6e
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
<<<<<<< HEAD
              The Method: <span className="text-[#8B5CF6]">Build, Measure, Scale</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We skip the theory and focus on the actionable cycles of venture building. You'll learn by doing, applying each week's framework directly to your business.
=======
              Program <span className="text-[#8B5CF6]">Overview</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              A comprehensive 12-week program focused on practical business building skills.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-white mb-6">What You'll Learn</h3>
              <div className="space-y-4">
                {[
                  "Identify and validate real business problems",
                  "Design practical solutions to core issues",
                  "Test ideas with real customers effectively",
                  "Plan for sustainable business growth",
                  "Build systems that support scaling",
                  "Create organizations built to last"
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 mr-3 text-[#8B5CF6] mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-white mb-6">Learning Format</h3>
              <div className="space-y-6">
                {learningFormat.map((format, index) => (
                  <div key={index} className="bg-[#0D0D0D] border border-gray-800 rounded-lg p-6">
                    <h4 className="text-lg font-semibold text-white mb-2">{format.type}</h4>
                    <p className="text-gray-400 mb-2">{format.description}</p>
                    <div className="flex items-center text-sm text-[#8B5CF6]">
                      <Clock className="w-4 h-4 mr-2" />
                      <span>{format.frequency}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section id="curriculum" className="py-20 bg-black border-b border-gray-800">
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
              From problem discovery to growth planning. Each module builds practical skills.
>>>>>>> 16f625df652cd5d5e96faff8a3e0aeaab3d57b6e
            </p>
          </motion.div>

          <div className="space-y-8">
<<<<<<< HEAD
            {methodPhases.map((phase, index) => (
=======
            {methodModules.map((module, index) => (
>>>>>>> 16f625df652cd5d5e96faff8a3e0aeaab3d57b6e
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
<<<<<<< HEAD
                      {phase.phase}
=======
                      {module.week}
>>>>>>> 16f625df652cd5d5e96faff8a3e0aeaab3d57b6e
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">
<<<<<<< HEAD
                    {phase.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {phase.description}
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-[#8B5CF6] font-medium mb-2">Output:</h4>
                      <p className="text-gray-400">{phase.output}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-[#8B5CF6] font-medium mb-2">Key Action:</h4>
                      <p className="text-gray-400">{phase.keyAction}</p>
=======
                    {module.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {module.description}
                  </p>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-[#8B5CF6] font-medium mb-3">Topics:</h4>
                      <ul className="space-y-2">
                        {module.topics.map((topic, topicIndex) => (
                          <li key={topicIndex} className="flex items-center text-gray-400 text-sm">
                            <BookOpen className="w-3 h-3 mr-2 text-[#8B5CF6]" />
                            <span>{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-[#8B5CF6] font-medium mb-3">Outcomes:</h4>
                      <ul className="space-y-2">
                        {module.outcomes.map((outcome, outcomeIndex) => (
                          <li key={outcomeIndex} className="flex items-center text-gray-400 text-sm">
                            <Zap className="w-3 h-3 mr-2 text-[#8B5CF6]" />
                            <span>{outcome}</span>
                          </li>
                        ))}
                      </ul>
>>>>>>> 16f625df652cd5d5e96faff8a3e0aeaab3d57b6e
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Learning Format Section */}
=======
      {/* Certification */}
>>>>>>> 16f625df652cd5d5e96faff8a3e0aeaab3d57b6e
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
<<<<<<< HEAD
              A Different Kind of <span className="text-[#8B5CF6]">Learning</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              This is not a lecture series. It's a build sprint with expert guidance.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {learningFormat.map((format, index) => (
=======
              Keymaster <span className="text-[#8B5CF6]">Certification</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              More than a credential - it's a signal that you think in systems and create markets.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-[#8B5CF6]/10 to-transparent border border-[#8B5CF6]/30 rounded-lg p-8"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {certificationBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <Star className="w-5 h-5 mr-3 text-[#8B5CF6] mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>
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
              Keymaster <span className="text-[#8B5CF6]">Alumni</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Venture architects who are building the future of business.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
>>>>>>> 16f625df652cd5d5e96faff8a3e0aeaab3d57b6e
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#0D0D0D] border border-gray-800 rounded-lg p-8"
              >
<<<<<<< HEAD
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
              This program is designed for founders and operators who believe in speed, data, and systematic execution.
            </p>
          </motion.div>

          <div className="bg-[#0D0D0D] border border-gray-800 rounded-lg p-8">
            <div className="space-y-4">
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 mr-3 text-[#8B5CF6] mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">Founders of early-stage tech or tech-enabled startups.</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 mr-3 text-[#8B5CF6] mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">Product Leaders building and launching new ventures within larger organizations.</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 mr-3 text-[#8B5CF6] mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">Operators who own growth and need a systematic approach to validate and scale.</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 mr-3 text-[#8B5CF6] mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">You believe that speed of learning is your greatest competitive advantage.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
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
              Join the <span className="text-[#8B5CF6]">Builders</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-[#0D0D0D] to-[#1a1a1a] border border-gray-800 rounded-lg p-8"
              >
                <blockquote className="text-gray-300 mb-6 leading-relaxed italic">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center">
                  <div className="text-right">
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-[#8B5CF6] text-sm">{testimonial.company}</div>
=======
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
>>>>>>> 16f625df652cd5d5e96faff8a3e0aeaab3d57b6e
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black">
<<<<<<< HEAD
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
=======
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
>>>>>>> 16f625df652cd5d5e96faff8a3e0aeaab3d57b6e
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
<<<<<<< HEAD
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Build with <span className="text-[#8B5CF6]">Precision</span>?
            </h2>
            <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto">
              Start your application today.
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
                href="/apply-founder"
                className="inline-flex items-center px-8 py-4 bg-transparent text-white hover:bg-white hover:text-[#8B5CF6] border-2 border-white transition-all duration-300 rounded-full text-lg font-medium relative group overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  Speak with an Advisor
                  <ArrowRight className="ml-2" size={20} />
                </span>
                <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
=======
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Master<br />
              <span className="text-[#8B5CF6]">Venture Architecture</span>?
            </h2>
            <p className="text-xl text-gray-400 mb-10 max-w-3xl mx-auto">
              Join the select group of founders who are creating the infrastructure for the next generation of business.
            </p>
            
            <div className="flex flex-wrap gap-5 justify-center">
              <Link
                href="/apply-founder"
                className="inline-flex items-center px-8 py-4 bg-[#8B5CF6] text-white hover:bg-white hover:text-[#8B5CF6] hover:border-[#8B5CF6] border-2 border-[#8B5CF6] transition-all duration-300 rounded-full font-medium"
              >
                Apply for Keymaster Method
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/ecosystem-architect"
                className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#8B5CF6] transition-all duration-300 rounded-full font-medium"
              >
                Explore Ecosystem Architect
                <ArrowRight className="ml-2 w-5 h-5" />
>>>>>>> 16f625df652cd5d5e96faff8a3e0aeaab3d57b6e
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}