'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Rocket, Users, BookOpen, Code, Globe, Target, TrendingUp, Award, Clock } from 'lucide-react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const GlobalScaleProgram = () => {
  return (
    <div className="bg-black text-white">
      <Header />
      
      {/* Hero Section */}
      <motion.section
        className="min-h-[80vh] flex items-center relative overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
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
            <Link href="/programs" className="text-[#8B5CF6] hover:text-[#7C3AED] mb-4 inline-block">
              ← Back to Programs
            </Link>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
              Global Scale<br />
              Program
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mb-8">
              A comprehensive 12-week program designed to help tech companies expand and scale successfully across international markets through strategic market entry, partnership development, and growth acceleration.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5 text-[#8B5CF6]" />
                <span>12 Weeks</span>
              </div>
              <div className="flex items-center space-x-2">
                <Globe className="w-5 h-5 text-[#8B5CF6]" />
                <span>Global Markets</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-[#8B5CF6]" />
                <span>1-on-1 Mentorship</span>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Program Overview */}
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
            <h2 className="text-4xl font-bold mb-4 text-black">Program Overview</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The Global Scale Program provides a structured pathway for tech companies to successfully enter and scale in international markets.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Target className="w-8 h-8 text-[#8B5CF6]" />,
                title: "Market Analysis",
                description: "Comprehensive market research and entry strategy development tailored to your business model."
              },
              {
                icon: <Users className="w-8 h-8 text-[#8B5CF6]" />,
                title: "Partner Network",
                description: "Access to our global network of partners, investors, and industry leaders."
              },
              {
                icon: <TrendingUp className="w-8 h-8 text-[#8B5CF6]" />,
                title: "Growth Strategy",
                description: "Customized scaling strategies with measurable KPIs and growth milestones."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="text-center p-8 bg-gray-50 rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-black">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Program Structure */}
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
            <h2 className="text-4xl font-bold mb-4 text-black">12-Week Structure</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A carefully designed curriculum that takes you from market analysis to successful expansion.
            </p>
          </motion.div>

          <div className="space-y-8">
            {[
              {
                phase: "Weeks 1-3",
                title: "Foundation & Market Analysis",
                topics: [
                  "Market opportunity assessment",
                  "Competitive landscape analysis",
                  "Regulatory and compliance requirements",
                  "Target customer profiling"
                ]
              },
              {
                phase: "Weeks 4-6",
                title: "Strategy Development",
                topics: [
                  "Go-to-market strategy formulation",
                  "Partnership ecosystem mapping",
                  "Pricing and localization strategies",
                  "Brand positioning for new markets"
                ]
              },
              {
                phase: "Weeks 7-9",
                title: "Implementation & Launch",
                topics: [
                  "Legal entity setup guidance",
                  "Initial market entry execution",
                  "Partner onboarding and activation",
                  "Early customer acquisition"
                ]
              },
              {
                phase: "Weeks 10-12",
                title: "Scaling & Optimization",
                topics: [
                  "Growth acceleration tactics",
                  "Performance metrics and analytics",
                  "Expansion roadmap development",
                  "Investor readiness preparation"
                ]
              }
            ].map((phase, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-lg shadow-sm border border-gray-200"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-[#8B5CF6] text-white px-4 py-2 rounded-lg font-bold">
                    {phase.phase}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-4 text-black">{phase.title}</h3>
                    <ul className="space-y-2">
                      {phase.topics.map((topic, topicIndex) => (
                        <li key={topicIndex} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-[#8B5CF6] rounded-full"></div>
                          <span className="text-gray-700">{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Benefits */}
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
            <h2 className="text-4xl font-bold mb-4">Program Benefits</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              What you'll gain from the Global Scale Program
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: <Rocket className="w-6 h-6 text-[#8B5CF6]" />,
                title: "Faster Market Entry",
                description: "Reduce time-to-market by up to 60% through proven frameworks and expert guidance."
              },
              {
                icon: <Users className="w-6 h-6 text-[#8B5CF6]" />,
                title: "Strategic Partnerships",
                description: "Access to pre-vetted partners and investors in your target markets."
              },
              {
                icon: <Award className="w-6 h-6 text-[#8B5CF6]" />,
                title: "Credibility Building",
                description: "Enhanced market credibility through program endorsement and success stories."
              },
              {
                icon: <TrendingUp className="w-6 h-6 text-[#8B5CF6]" />,
                title: "Sustainable Growth",
                description: "Build a foundation for long-term, scalable international growth."
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                className="flex items-start space-x-4 p-6 bg-white/5 rounded-lg backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="mt-1">{benefit.icon}</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                  <p className="text-gray-400">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className="py-20 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4 text-black">Ready to Scale Globally?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Join the next cohort of ambitious tech companies expanding their global footprint.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-[#8B5CF6] text-white py-3 px-8 rounded-full inline-flex items-center justify-center hover:bg-[#7C3AED] transition-colors"
              >
                Apply Now
                <ArrowRight className="ml-2" size={20} />
              </Link>
              <Link
                href="/contact"
                className="border-2 border-black text-black py-3 px-8 rounded-full inline-flex items-center justify-center hover:bg-black hover:text-white transition-colors"
              >
                Schedule Consultation
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
};

export default GlobalScaleProgram;