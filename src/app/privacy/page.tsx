'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

export default function PrivacyPage() {
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
              Privacy <span className="text-[#8B5CF6]">Policy</span>
            </h1>
            
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-400 mb-6">
                Last updated: {new Date().toLocaleDateString()}
              </p>
              
              <h2 className="text-2xl font-bold text-white mb-4 mt-8">Information We Collect</h2>
              <p className="text-gray-400 mb-6">
                We collect information you provide directly to us, such as when you contact us, apply for our programs, or subscribe to our newsletter.
              </p>
              
              <h2 className="text-2xl font-bold text-white mb-4 mt-8">How We Use Your Information</h2>
              <p className="text-gray-400 mb-6">
                We use the information we collect to provide, maintain, and improve our services, process applications, and communicate with you.
              </p>
              
              <h2 className="text-2xl font-bold text-white mb-4 mt-8">Information Sharing</h2>
              <p className="text-gray-400 mb-6">
                We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy.
              </p>
              
              <h2 className="text-2xl font-bold text-white mb-4 mt-8">Contact Us</h2>
              <p className="text-gray-400 mb-6">
                If you have any questions about this Privacy Policy, please contact us at founders@keymaster.vc
              </p>
            </div>
          </motion.div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}