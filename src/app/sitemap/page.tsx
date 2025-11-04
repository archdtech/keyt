'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

export default function SitemapPage() {
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
              Site <span className="text-[#8B5CF6]">Map</span>
            </h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">Main Pages</h2>
                <ul className="space-y-2">
                  <li><a href="/" className="text-gray-400 hover:text-[#8B5CF6] transition-colors">Home</a></li>
                  <li><a href="/about" className="text-gray-400 hover:text-[#8B5CF6] transition-colors">About</a></li>
                  <li><a href="/portfolio" className="text-gray-400 hover:text-[#8B5CF6] transition-colors">Portfolio</a></li>
                  <li><a href="/insights" className="text-gray-400 hover:text-[#8B5CF6] transition-colors">Insights</a></li>
                  <li><a href="/careers" className="text-gray-400 hover:text-[#8B5CF6] transition-colors">Careers</a></li>
                </ul>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">Services</h2>
                <ul className="space-y-2">
                  <li><a href="/venture-architecture" className="text-gray-400 hover:text-[#8B5CF6] transition-colors">Venture Architecture</a></li>
                  <li><a href="/ecosystem-design" className="text-gray-400 hover:text-[#8B5CF6] transition-colors">Ecosystem Design</a></li>
                  <li><a href="/ai-workshops" className="text-gray-400 hover:text-[#8B5CF6] transition-colors">AI Systems Architecture</a></li>
                  <li><a href="/mastermind" className="text-gray-400 hover:text-[#8B5CF6] transition-colors">ThinkTank</a></li>
                  <li><a href="/growth-strategy" className="text-gray-400 hover:text-[#8B5CF6] transition-colors">Growth Systems</a></li>
                  <li><a href="/product-discovery" className="text-gray-400 hover:text-[#8B5CF6] transition-colors">Product Discovery</a></li>
                </ul>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">Programs</h2>
                <ul className="space-y-2">
                  <li><a href="/keymaster-method" className="text-gray-400 hover:text-[#8B5CF6] transition-colors">The Keymaster Method</a></li>
                  <li><a href="/ecosystem-architect" className="text-gray-400 hover:text-[#8B5CF6] transition-colors">Ecosystem Architect</a></li>
                  <li><a href="/scale" className="text-gray-400 hover:text-[#8B5CF6] transition-colors">Scale Solutions</a></li>
                </ul>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">Applications</h2>
                <ul className="space-y-2">
                  <li><a href="/apply-founder" className="text-gray-400 hover:text-[#8B5CF6] transition-colors">Apply as Founder</a></li>
                  <li><a href="/apply-partner" className="text-gray-400 hover:text-[#8B5CF6] transition-colors">Apply as Partner</a></li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}