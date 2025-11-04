'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function ApplyPartnerPage() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Header />
      
      <main className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-8">
              Apply as <span className="text-[#8B5CF6]">Partner</span>
            </h1>
            
            <p className="text-xl text-gray-400 mb-12 max-w-3xl">
              Join our network of strategic partners and help us build the next generation of venture systems.
            </p>
            
            <div className="bg-[#0D0D0D] border border-gray-800 rounded-lg p-8 mb-12">
              <h2 className="text-2xl font-bold text-white mb-6">Partnership Opportunities</h2>
              
              <div className="space-y-6">
                <div className="border-l-4 border-[#8B5CF6] pl-6">
                  <h3 className="text-xl font-semibold text-white mb-2">Technology Partners</h3>
                  <p className="text-gray-400">Integrate your tools and platforms into our venture systems.</p>
                </div>
                
                <div className="border-l-4 border-[#8B5CF6] pl-6">
                  <h3 className="text-xl font-semibold text-white mb-2">Investment Partners</h3>
                  <p className="text-gray-400">Co-invest in promising ventures and systems we build.</p>
                </div>
                
                <div className="border-l-4 border-[#8B5CF6] pl-6">
                  <h3 className="text-xl font-semibold text-white mb-2">Service Partners</h3>
                  <p className="text-gray-400">Provide specialized services to our portfolio companies.</p>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <Link
                href="mailto:founders@keymaster.vc?subject=Partnership Inquiry"
                className="inline-flex items-center px-8 py-4 bg-[#8B5CF6] text-white hover:bg-white hover:text-[#8B5CF6] border-2 border-[#8B5CF6] transition-all duration-300 rounded-full font-medium"
              >
                Contact Partnership Team
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}