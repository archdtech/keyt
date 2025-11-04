'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

export default function TermsPage() {
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
              Terms of <span className="text-[#8B5CF6]">Service</span>
            </h1>
            
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-400 mb-6">
                Last updated: {new Date().toLocaleDateString()}
              </p>
              
              <h2 className="text-2xl font-bold text-white mb-4 mt-8">Agreement to Terms</h2>
              <p className="text-gray-400 mb-6">
                By accessing and using Keymaster Venture Studio's services, you accept and agree to be bound by the terms and provision of this agreement.
              </p>
              
              <h2 className="text-2xl font-bold text-white mb-4 mt-8">Use License</h2>
              <p className="text-gray-400 mb-6">
                Permission is granted to temporarily access the materials (services, information, and content) on Keymaster Venture Studio's website for personal, non-commercial transitory viewing only.
              </p>
              
              <h2 className="text-2xl font-bold text-white mb-4 mt-8">Disclaimer</h2>
              <p className="text-gray-400 mb-6">
                The materials on Keymaster Venture Studio's website are provided on an 'as is' basis. Keymaster Venture Studio makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties.
              </p>
              
              <h2 className="text-2xl font-bold text-white mb-4 mt-8">Contact Information</h2>
              <p className="text-gray-400 mb-6">
                Questions about the Terms of Service should be sent to founders@keymaster.vc
              </p>
            </div>
          </motion.div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}