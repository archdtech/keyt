'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Globe, Users, BookOpen, Building2, Target, TrendingUp, Award, Clock, Handshake } from 'lucide-react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const TradePromotionProgram = () => {
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
              Trade Promotion<br />
              Program
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mb-8">
              Facilitating global partnerships and accelerating market entry through strategic trade promotion initiatives, regulatory guidance, and ecosystem development.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5 text-[#8B5CF6]" />
                <span>8-12 Weeks</span>
              </div>
              <div className="flex items-center space-x-2">
                <Globe className="w-5 h-5 text-[#8B5CF6]" />
                <span>Global Markets</span>
              </div>
              <div className="flex items-center space-x-2">
                <Handshake className="w-5 h-5 text-[#8B5CF6]" />
                <span>Partnership Focus</span>
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
            <h2 className="text-4xl font-bold mb-4 text-black">Strategic Trade Partnerships</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We connect businesses with the right ecosystem partners, regulatory guidance, and market intelligence needed for successful international expansion.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Globe className="w-8 h-8 text-[#8B5CF6]" />,
                title: "Global Market Access",
                description: "Strategic pathways to enter new international markets with local support and guidance."
              },
              {
                icon: <BookOpen className="w-8 h-8 text-[#8B5CF6]" />,
                title: "Regulatory Compliance",
                description: "Comprehensive guidance through complex international regulatory requirements."
              },
              {
                icon: <Users className="w-8 h-8 text-[#8B5CF6]" />,
                title: "Partner Ecosystem",
                description: "Development of strategic partnerships with local industry leaders and stakeholders."
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

      {/* Target Sectors */}
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
            <h2 className="text-4xl font-bold mb-4 text-black">Focus Sectors</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We specialize in facilitating trade and partnerships across key high-growth industries
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                sector: "Technology",
                icon: "💻",
                services: [
                  "SaaS and software solutions",
                  "AI and machine learning",
                  "FinTech and blockchain",
                  "Cybersecurity"
                ]
              },
              {
                sector: "Healthcare",
                icon: "🏥",
                services: [
                  "Medical devices",
                  "Digital health solutions",
                  "Biotechnology",
                  "Pharmaceuticals"
                ]
              },
              {
                sector: "Manufacturing",
                icon: "🏭",
                services: [
                  "Advanced manufacturing",
                  "Industrial automation",
                  "Supply chain solutions",
                  "Clean technology"
                ]
              },
              {
                sector: "Creative Industries",
                icon: "🎨",
                services: [
                  "Gaming and entertainment",
                  "Design and architecture",
                  "Fashion and lifestyle",
                  "Digital media"
                ]
              }
            ].map((sector, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-200"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-4xl mb-4 text-center">{sector.icon}</div>
                <h3 className="text-xl font-bold mb-4 text-center text-black">{sector.sector}</h3>
                <ul className="space-y-2">
                  {sector.services.map((service, idx) => (
                    <li key={idx} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-[#8B5CF6] rounded-full"></div>
                      <span className="text-gray-700 text-sm">{service}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Program Services */}
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
            <h2 className="text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Comprehensive support for successful international market entry and expansion
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Market Intelligence & Research",
                description: "In-depth analysis of target markets including competitive landscape, regulatory requirements, and market opportunities.",
                features: [
                  "Market sizing and opportunity assessment",
                  "Competitor analysis",
                  "Regulatory landscape mapping",
                  "Consumer behavior insights"
                ]
              },
              {
                title: "Partner Matchmaking",
                description: "Strategic connections with local partners, distributors, investors, and key stakeholders in target markets.",
                features: [
                  "Pre-vetted partner network",
                  "B2B matchmaking events",
                  "Investor introductions",
                  "Government liaison support"
                ]
              },
              {
                title: "Trade Mission Organization",
                description: "End-to-end planning and execution of trade missions and delegation visits to target markets.",
                features: [
                  "Customized itinerary planning",
                  "Business meeting scheduling",
                  "Cultural orientation",
                  "On-ground support"
                ]
              },
              {
                title: "Regulatory Navigation",
                description: "Expert guidance through complex international regulations, compliance requirements, and legal frameworks.",
                features: [
                  "License and permit assistance",
                  "Compliance framework development",
                  "Legal structure advisory",
                  "Intellectual property protection"
                ]
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                className="bg-white/5 p-8 rounded-lg backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-[#8B5CF6] rounded-full"></div>
                      <span className="text-gray-400 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Success Metrics */}
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
            <h2 className="text-4xl font-bold mb-4 text-black">Proven Impact</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Measurable outcomes from our trade promotion initiatives
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                metric: "200+",
                description: "Successful partnerships facilitated"
              },
              {
                metric: "15+",
                description: "Countries served"
              },
              {
                metric: "85%",
                description: "Market entry success rate"
              },
              {
                metric: "50M+",
                description: "Trade value generated"
              }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-4xl font-bold text-[#8B5CF6] mb-2">{stat.metric}</div>
                <p className="text-gray-600">{stat.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className="py-20 bg-gray-50"
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
            <h2 className="text-4xl font-bold mb-4 text-black">Ready to Expand Globally?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Let us help you navigate the complexities of international trade and unlock new market opportunities.
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
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
};

export default TradePromotionProgram;