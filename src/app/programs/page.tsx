'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Rocket, Users, BookOpen, Code, Globe, Building2 } from 'lucide-react';
import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Programs = () => {
  // Create refs for parallax effects
  const parallaxBgRef = useRef<HTMLDivElement>(null);
  const headerBgRef = useRef<HTMLDivElement>(null);

  // Initialize parallax effects
  useEffect(() => {
    // Add a small delay to ensure DOM is fully rendered
    const initAnimations = setTimeout(() => {
      // Create parallax effects for the backgrounds
      if (parallaxBgRef.current) {
        // Simple parallax implementation
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
      if (headerBgRef.current) {
        const handleScroll = () => {
          const scrolled = window.pageYOffset;
          const parallax = headerBgRef.current;
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

  return (
    <div className="bg-black text-white">
      <Header />
      
      {/* Hero Section with Background Image */}
      <motion.section
        className="min-h-[80vh] flex items-center relative overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Parallax background */}
        <div
          ref={headerBgRef}
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("/programs.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>

        {/* Overlay for better text readability */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.8))',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6 text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Building<br />
            Better Ventures
          </motion.h1>
          <motion.p
            className="text-xl text-gray-300 max-w-2xl mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Practical programs for founders who want to build sustainable businesses. From idea validation to growth planning, we provide the systems and support you need.
          </motion.p>
        </div>
      </motion.section>

      {/* Venture Architecture Section */}
      <motion.section
        className="py-20 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6">Venture Architecture</h2>
              <p className="text-xl text-gray-600 mb-8">
                A 12-week program for experienced founders who want to build better businesses through systems thinking and practical problem-solving.
              </p>
              <div className="space-y-6">
                {[
                  {
                    icon: <Rocket className="w-6 h-6 text-[#8B5CF6]" />,
                    title: "Problem Discovery",
                    description: "Learn to identify and validate real business problems worth solving"
                  },
                  {
                    icon: <Users className="w-6 h-6 text-[#8B5CF6]" />,
                    title: "Solution Design",
                    description: "Design practical solutions that address core customer needs"
                  },
                  {
                    icon: <BookOpen className="w-6 h-6 text-[#8B5CF6]" />,
                    title: "Market Testing",
                    description: "Test ideas with real customers and iterate based on feedback"
                  },
                  {
                    icon: <Code className="w-6 h-6 text-[#8B5CF6]" />,
                    title: "Growth Planning",
                    description: "Plan for sustainable growth and build scalable systems"
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="mt-1">{item.icon}</div>
                    <div>
                      <h3 className="font-bold mb-1">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                alt="Venture building"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-black/80 text-white p-6 rounded-lg backdrop-blur-sm">
                <p className="text-lg font-semibold mb-2">Program Details</p>
                <p className="text-gray-300">
                  "12 weeks of hands-on learning with a small group of dedicated founders."
                </p>
                <p className="text-[#8B5CF6] mt-2">Practical Application</p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Keymaster Method Section */}
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
            <h2 className="text-4xl font-bold mb-4">Keymaster Method</h2>
            <p className="text-xl text-gray-400">
              A practical approach to building better businesses through systematic problem-solving
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Problem-Focused",
                description: "Start with real customer problems, not solutions looking for problems"
              },
              {
                title: "Systems Thinking",
                description: "Build systems and processes that scale with your business"
              },
              {
                title: "Practical Growth",
                description: "Focus on sustainable growth strategies that actually work"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="p-8 bg-white/5 rounded-lg backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Program Details Section */}
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
            <h2 className="text-4xl font-bold mb-4">Our Programs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Practical programs designed to help founders build better businesses
            </p>
          </motion.div>

          <div className="space-y-16">
            {/* Venture Architecture Program */}
            <motion.div
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div>
                <h3 className="text-3xl font-bold mb-4">Venture Architecture</h3>
                <p className="text-gray-700 mb-6">
                  A 12-week intensive program for experienced founders who want to build better businesses through systems thinking and practical problem-solving.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Rocket className="text-[#8B5CF6] w-5 h-5 mt-1" />
                    <p className="text-gray-700">Problem Discovery & Validation</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Code className="text-[#8B5CF6] w-5 h-5 mt-1" />
                    <p className="text-gray-700">Solution Design & Testing</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Users className="text-[#8B5CF6] w-5 h-5 mt-1" />
                    <p className="text-gray-700">Growth Planning & Systems</p>
                  </div>
                </div>
                <div className="mt-8">
                  <Link href="/venture-architecture" className="bg-[#8B5CF6] text-white py-3 px-6 rounded-full inline-flex items-center hover:bg-[#7C3AED] transition-colors">
                    Learn More
                    <ArrowRight className="ml-2" size={20} />
                  </Link>
                </div>
              </div>
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                  alt="Venture Architecture program"
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-white font-bold text-lg">12-week intensive program</p>
                  <p className="text-gray-300">For experienced founders</p>
                </div>
              </div>
            </motion.div>

            {/* Keymaster Method Program */}
            <motion.div
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="order-2 lg:order-1 relative rounded-lg overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                  alt="Keymaster Method program"
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-white font-bold text-lg">Practical business building</p>
                  <p className="text-gray-300">Systems thinking approach</p>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <h3 className="text-3xl font-bold mb-4">Keymaster Method</h3>
                <p className="text-gray-700 mb-6">
                  A practical program that teaches systematic approaches to building sustainable businesses. Focus on real problems, practical solutions, and measurable growth.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Building2 className="text-[#8B5CF6] w-5 h-5 mt-1" />
                    <p className="text-gray-700">Systems & Processes</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Users className="text-[#8B5CF6] w-5 h-5 mt-1" />
                    <p className="text-gray-700">Customer Focus</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Code className="text-[#8B5CF6] w-5 h-5 mt-1" />
                    <p className="text-gray-700">Practical Application</p>
                  </div>
                </div>
                <div className="mt-8">
                  <Link href="/keymaster-method" className="bg-[#8B5CF6] text-white py-3 px-6 rounded-full inline-flex items-center hover:bg-[#7C3AED] transition-colors">
                    Learn More
                    <ArrowRight className="ml-2" size={20} />
                  </Link>
                </div>
              </div>
            </motion.div>
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            className="text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Ready to Build Something Better?
          </motion.h2>
          <motion.p
            className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Join our programs and learn systematic approaches to building sustainable businesses.
          </motion.p>
          <motion.div
            className="flex flex-wrap gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Link
              href="/apply-founder"
              className="bg-[#8B5CF6] text-white py-3 px-8 rounded-full inline-flex items-center hover:bg-[#7C3AED] transition-colors"
            >
              Apply Now
              <ArrowRight className="ml-2" size={20} />
            </Link>
            <Link
              href="/venture-studio"
              className="border-2 border-white text-white py-3 px-8 rounded-full inline-flex items-center hover:bg-white hover:text-black transition-colors"
            >
              Learn About Venture Studio
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </motion.div>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
};

export default Programs;
