'use client';

import Link from 'next/link';
import { ArrowRight, Mail, MapPin, Key, Users, Target, Award } from 'lucide-react';

const Footer = () => {
  const services = [
    { title: "Venture Architecture", href: "/venture-architecture" },
    { title: "Ecosystem Design", href: "/ecosystem-design" },
    { title: "AI Systems Architecture", href: "/ai-workshops" },
    { title: "Keymaster ThinkTank", href: "/mastermind" },
    { title: "Growth Systems", href: "/growth-strategy" },
    { title: "Product Discovery", href: "/product-discovery" }
  ];

  const programs = [
    { title: "The Keymaster Method", href: "/keymaster-method" },
    { title: "Ecosystem Architect", href: "/ecosystem-architect" },
    { title: "Venture Architecture", href: "/venture-architecture" }
  ];

  const company = [
    { title: "About", href: "/about" },
    { title: "Portfolio", href: "/portfolio" },
    { title: "Insights", href: "/insights" },
    { title: "Careers", href: "/careers" }
  ];

  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-[#8B5CF6] rounded-lg flex items-center justify-center mr-3">
                <Key className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-white">Keymaster</span>
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed max-w-md">
              We help founders build practical systems and infrastructure. 
              Focus on real solutions, not hype. 
              We work with <span className="text-[#8B5CF6]">founders who want to build real infrastructure</span>.
            </p>
            
            {/* Key Stats */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-[#8B5CF6] mb-2">Focus</div>
                <div className="text-xs text-gray-500">Systems Building</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#8B5CF6] mb-2">Hands-on</div>
                <div className="text-xs text-gray-500">Approach</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#8B5CF6] mb-2">Simple</div>
                <div className="text-xs text-gray-500">Methods</div>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4 flex items-center">
              <Target className="w-4 h-4 mr-2 text-[#8B5CF6]" />
              Services
            </h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <Link href={service.href} className="text-gray-400 hover:text-[#8B5CF6] transition-colors duration-200">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-white font-semibold mb-4 flex items-center">
              <Award className="w-4 h-4 mr-2 text-[#8B5CF6]" />
              Programs
            </h3>
            <ul className="space-y-3">
              {programs.map((program, index) => (
                <li key={index}>
                  <Link href={program.href} className="text-gray-400 hover:text-[#8B5CF6] transition-colors duration-200">
                    {program.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company & Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4 flex items-center">
              <Users className="w-4 h-4 mr-2 text-[#8B5CF6]" />
              Company
            </h3>
            <ul className="space-y-3 mb-6">
              {company.map((item, index) => (
                <li key={index}>
                  <Link href={item.href} className="text-gray-400 hover:text-[#8B5CF6] transition-colors duration-200">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
            
            <div className="space-y-3">
              <div className="flex items-center text-gray-400">
                <Mail className="w-4 h-4 mr-2 text-[#8B5CF6]" />
                <a href="mailto:founders@keymaster.vc" className="hover:text-[#8B5CF6] transition-colors duration-200">
                  founders@keymaster.vc
                </a>
              </div>
              <div className="flex items-center text-gray-400">
                <MapPin className="w-4 h-4 mr-2 text-[#8B5CF6]" />
                <span className="hover:text-[#8B5CF6] transition-colors duration-200">
                  San Francisco, CA
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <div className="flex items-center mb-4 lg:mb-0">
              <p className="text-gray-400 text-sm">
                © 2024 Keymaster Venture Studio. All rights reserved.
              </p>
            </div>
            
            <div className="flex flex-wrap items-center gap-6">
              <div className="flex items-center space-x-1">
                <span className="text-xs text-gray-500">Category:</span>
                <span className="text-xs text-[#8B5CF6] font-medium">Venture Architecture</span>
              </div>
              
              <div className="flex space-x-6">
                <Link href="/privacy" className="text-gray-400 hover:text-[#8B5CF6] text-sm transition-colors duration-200">
                  Privacy
                </Link>
                <Link href="/terms" className="text-gray-400 hover:text-[#8B5CF6] text-sm transition-colors duration-200">
                  Terms
                </Link>
                <Link href="/sitemap" className="text-gray-400 hover:text-[#8B5CF6] text-sm transition-colors duration-200">
                  Sitemap
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;