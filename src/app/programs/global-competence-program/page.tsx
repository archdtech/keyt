'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Building2, Users, Code, Globe, Target, TrendingUp, Award, Clock, MapPin } from 'lucide-react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const GlobalCompetenceProgram = () => {
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
              Global Competence<br />
              Program
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mb-8">
              Build strategic Global Capability Centers that drive digital transformation, reduce operational costs, and accelerate business innovation through global talent and technology.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5 text-[#8B5CF6]" />
                <span>16 Weeks</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5 text-[#8B5CF6]" />
                <span>Multiple Locations</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-[#8B5CF6]" />
                <span>Team Building</span>
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
            <h2 className="text-4xl font-bold mb-4 text-black">Strategic GCC Establishment</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform your business operations through strategic Global Capability Centers in Eastern Europe, East Africa, or South Asia.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Building2 className="w-8 h-8 text-[#8B5CF6]" />,
                title: "Strategic Planning",
                description: "Comprehensive GCC strategy aligned with your long-term business goals and transformation objectives."
              },
              {
                icon: <Users className="w-8 h-8 text-[#8B5CF6]" />,
                title: "Talent Acquisition",
                description: "Access to skilled talent pools with expertise in technology, operations, and innovation."
              },
              {
                icon: <Code className="w-8 h-8 text-[#8B5CF6]" />,
                title: "Digital Transformation",
                description: "Build centers that drive innovation, product development, and digital capabilities."
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

      {/* Location Options */}
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
            <h2 className="text-4xl font-bold mb-4 text-black">Strategic Locations</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our strategically selected locations for optimal talent access and operational efficiency.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                region: "Eastern Europe",
                countries: "Poland, Ukraine, Romania",
                strengths: [
                  "Strong technical education system",
                  "European time zone alignment",
                  "Cost-effective operations",
                  "EU market access"
                ],
                specialties: "Software Development, R&D, Engineering"
              },
              {
                region: "East Africa",
                countries: "Kenya, Rwanda, Tanzania",
                strengths: [
                  "Young, dynamic workforce",
                  "Growing tech ecosystem",
                  "English proficiency",
                  "Strategic time zone"
                ],
                specialties: "Customer Support, Operations, FinTech"
              },
              {
                region: "South Asia",
                countries: "India, Sri Lanka, Bangladesh",
                strengths: [
                  "Large talent pool",
                  "Established IT industry",
                  "Competitive costs",
                  "Scalable operations"
                ],
                specialties: "IT Services, Analytics, BPO"
              }
            ].map((location, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-lg shadow-sm border border-gray-200"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex items-center mb-4">
                  <MapPin className="w-6 h-6 text-[#8B5CF6] mr-2" />
                  <h3 className="text-2xl font-bold text-black">{location.region}</h3>
                </div>
                <p className="text-sm text-gray-600 mb-4">{location.countries}</p>
                <div className="mb-4">
                  <h4 className="font-bold mb-2 text-black">Key Strengths:</h4>
                  <ul className="space-y-1">
                    {location.strengths.map((strength, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-[#8B5CF6] rounded-full"></div>
                        <span className="text-gray-700 text-sm">{strength}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-2 text-black">Specialties:</h4>
                  <p className="text-gray-700 text-sm">{location.specialties}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Program Structure */}
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
            <h2 className="text-4xl font-bold mb-4">16-Week Implementation</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              A structured approach to establishing your Global Capability Center
            </p>
          </motion.div>

          <div className="space-y-8">
            {[
              {
                phase: "Weeks 1-4",
                title: "Strategy & Planning",
                topics: [
                  "Business case development",
                  "Location selection analysis",
                  "Operating model design",
                  "Legal structure planning"
                ]
              },
              {
                phase: "Weeks 5-8",
                title: "Setup & Infrastructure",
                topics: [
                  "Legal entity establishment",
                  "Office space acquisition",
                  "Technology infrastructure setup",
                  "Compliance framework implementation"
                ]
              },
              {
                phase: "Weeks 9-12",
                title: "Talent Acquisition",
                topics: [
                  "Recruitment strategy execution",
                  "Leadership team hiring",
                  "Training program development",
                  "Culture integration planning"
                ]
              },
              {
                phase: "Weeks 13-16",
                title: "Launch & Optimization",
                topics: [
                  "Operations commencement",
                  "Process optimization",
                  "Performance monitoring setup",
                  "Scale-up planning"
                ]
              }
            ].map((phase, index) => (
              <motion.div
                key={index}
                className="bg-white/5 p-8 rounded-lg backdrop-blur-sm"
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
                    <h3 className="text-2xl font-bold mb-4">{phase.title}</h3>
                    <ul className="space-y-2">
                      {phase.topics.map((topic, topicIndex) => (
                        <li key={topicIndex} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-[#8B5CF6] rounded-full"></div>
                          <span className="text-gray-300">{topic}</span>
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
            <h2 className="text-4xl font-bold mb-4 text-black">GCC Benefits</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform your business operations with strategic global capabilities
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: <TrendingUp className="w-6 h-6 text-[#8B5CF6]" />,
                title: "Cost Optimization",
                description: "Reduce operational costs by 40-60% while maintaining or improving service quality."
              },
              {
                icon: <Users className="w-6 h-6 text-[#8B5CF6]" />,
                title: "Access to Talent",
                description: "Tap into diverse, skilled talent pools with specialized expertise."
              },
              {
                icon: <Code className="w-6 h-6 text-[#8B5CF6]" />,
                title: "Innovation Driver",
                description: "Establish centers of excellence that drive product development and digital transformation."
              },
              {
                icon: <Globe className="w-6 h-6 text-[#8B5CF6]" />,
                title: "Global Scalability",
                description: "Build a foundation for 24/7 operations and global market coverage."
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                className="flex items-start space-x-4 p-6 bg-gray-50 rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="mt-1">{benefit.icon}</div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-black">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className="py-20 bg-black text-white"
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
            <h2 className="text-4xl font-bold mb-4">Ready to Build Your GCC?</h2>
            <p className="text-xl text-gray-400 mb-8">
              Let us help you establish a strategic Global Capability Center that drives business transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-[#8B5CF6] text-white py-3 px-8 rounded-full inline-flex items-center justify-center hover:bg-[#7C3AED] transition-colors"
              >
                Start Planning
                <ArrowRight className="ml-2" size={20} />
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white py-3 px-8 rounded-full inline-flex items-center justify-center hover:bg-white hover:text-black transition-colors"
              >
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
};

export default GlobalCompetenceProgram;