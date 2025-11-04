'use client';

import { useState, useEffect, useRef } from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const Header = () => {
  const [isScaleMenuOpen, setIsScaleMenuOpen] = useState(false);
<<<<<<< HEAD
  const scaleMenuRef = useRef<HTMLDivElement>(null);
=======
  // Commented out programs menu
  // const [isProgramsMenuOpen, setIsProgramsMenuOpen] = useState(false);
  const scaleMenuRef = useRef<HTMLDivElement>(null);
  // Commented out programs menu ref
  // const programsMenuRef = useRef<HTMLDivElement>(null);
>>>>>>> 16f625df652cd5d5e96faff8a3e0aeaab3d57b6e

  const scaleServices = [
    { 
      title: "Venture Architecture", 
      href: "/venture-architecture",
      description: "Our flagship program. Only 12 accepted per year.",
      color: "purple"
    },
    { 
      title: "Ecosystem Design", 
      href: "/ecosystem-design",
      description: "Design markets where you're the only logical choice.",
      color: "teal"
    },
    { 
      title: "AI Systems Architecture", 
      href: "/ai-workshops",
      description: "AI isn't a feature — it's the new operating system.",
      color: "indigo"
    },
    { 
      title: "Keymaster ThinkTank", 
      href: "/mastermind",
      description: "Collective intelligence of venture architects.",
      color: "pink"
    },
    { 
      title: "Catalytic Growth", 
      href: "/growth-strategy",
      description: "Growth through architecture, not aggression.",
      color: "orange"
    },
    { 
      title: "System Discovery", 
      href: "/product-discovery",
      description: "Find the fundamental bottleneck.",
      color: "yellow"
    }
  ];

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
  // Commented out programs
  // const programs = [
  //   { 
  //     title: "Operational Excellence", 
  //     href: "/operational-excellence",
  //     description: "Operations optimization and efficiency programs",
  //     color: "yellow"
  //   },
  //   { 
  //     title: "Commercial Due Diligence", 
  //     href: "/commercial-due-diligence",
  //     description: "Business due diligence and validation programs",
  //     color: "blue"
  //   }
  // ];

>>>>>>> c2f06731328de0386b0bee11efb25e40e3cb0f10
>>>>>>> 16f625df652cd5d5e96faff8a3e0aeaab3d57b6e
  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (scaleMenuRef.current && !scaleMenuRef.current.contains(event.target as Node)) {
        setIsScaleMenuOpen(false);
      }
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
      // Commented out programs menu click outside handler
      // if (programsMenuRef.current && !programsMenuRef.current.contains(event.target as Node)) {
      //   setIsProgramsMenuOpen(false);
      // }
>>>>>>> c2f06731328de0386b0bee11efb25e40e3cb0f10
>>>>>>> 16f625df652cd5d5e96faff8a3e0aeaab3d57b6e
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className="bg-black fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="flex items-center space-x-2">
                <span className="text-2xl font-bold text-white">Keymaster</span>
              </Link>
            </div>
            <div className="hidden md:ml-4 lg:ml-6 md:flex md:items-center md:space-x-2 lg:space-x-3">
              <Link
                href="/about"
                className="text-gray-300 hover:text-white px-2 py-2 text-xs lg:text-sm font-medium border-b-2 border-transparent hover:border-[#8B5CF6] transition-colors duration-200"
              >
                About
              </Link>
              <div className="relative" ref={scaleMenuRef}>
                <button
                  onClick={() => setIsScaleMenuOpen(!isScaleMenuOpen)}
                  className="text-gray-300 hover:text-white px-2 py-2 text-xs lg:text-sm font-medium border-b-2 border-transparent hover:border-[#8B5CF6] transition-colors duration-200 flex items-center"
                >
                  Scale
                  <ChevronDown className={`ml-1 w-4 h-4 transition-transform ${isScaleMenuOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {/* Dropdown Menu */}
                {isScaleMenuOpen && (
                  <div className="absolute top-full left-0 mt-2 w-[480px] bg-[#0D0D0D] border border-gray-800 rounded-lg shadow-xl overflow-hidden">
                    <div className="p-4 border-b border-gray-800">
                      <Link
                        href="/scale"
                        className="block p-4 rounded-lg bg-gradient-to-r from-[#8B5CF6]/10 to-transparent border border-[#8B5CF6]/30 hover:border-[#8B5CF6]/50 transition-all duration-200 group"
                        onClick={() => setIsScaleMenuOpen(false)}
                      >
                        <div className="flex items-start space-x-3">
                          <div className="w-3 h-3 rounded-full bg-[#8B5CF6] mt-2 flex-shrink-0"></div>
                          <div className="flex-1">
                            <h4 className="text-white font-bold text-lg group-hover:text-[#8B5CF6] transition-colors">
                              Venture Architecture
                            </h4>
                            <p className="text-gray-400 text-sm mt-1 leading-relaxed">
                              Our flagship program. Transform from founder to venture architect. Only 12 accepted per year.
                            </p>
                            <div className="flex items-center mt-2 text-[#8B5CF6] text-sm font-medium">
                              Apply to Program
                              <ArrowRight className="ml-1 w-3 h-3" />
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-2 p-4">
                      {scaleServices.slice(1).map((service, index) => (
                        <Link
                          key={index}
                          href={service.href}
                          className="block p-3 rounded-lg hover:bg-gray-900 transition-colors duration-200 group border border-gray-800/50 hover:border-[#8B5CF6]/30"
                          onClick={() => setIsScaleMenuOpen(false)}
                        >
                          <div className="flex items-start space-x-2">
                            <div className={`w-2 h-2 rounded-full bg-${service.color}-600 mt-2 flex-shrink-0`}></div>
                            <div>
                              <h4 className="text-white font-medium text-sm group-hover:text-[#8B5CF6] transition-colors">
                                {service.title}
                              </h4>
                              <p className="text-gray-500 text-xs mt-1 leading-relaxed">
                                {service.description}
                              </p>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>

                    <div className="p-4 border-t border-gray-800 bg-gradient-to-r from-[#8B5CF6]/5 to-transparent">
                      <div className="flex items-center justify-between">
                        <div>
                          <h5 className="text-white font-medium text-sm">Keymaster Certified</h5>
                          <p className="text-gray-500 text-xs">Premium programs for venture architects</p>
                        </div>
                        <Link
                          href="/keymaster-method"
                          className="text-[#8B5CF6] hover:text-white text-sm font-medium transition-colors"
                          onClick={() => setIsScaleMenuOpen(false)}
                        >
                          View Programs →
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
              {/* Commented out Programs menu */}
              {/* <div className="relative" ref={programsMenuRef}>
                <button
                  onClick={() => setIsProgramsMenuOpen(!isProgramsMenuOpen)}
                  className="text-gray-300 hover:text-white px-2 py-2 text-xs lg:text-sm font-medium border-b-2 border-transparent hover:border-[#8B5CF6] transition-colors duration-200 flex items-center"
                >
                  Programs
                  <ChevronDown className={`ml-1 w-4 h-4 transition-transform ${isProgramsMenuOpen ? 'rotate-180' : ''}`} />
                </button>
                
                <div className="absolute top-full left-0 mt-2 w-96 bg-[#0D0D0D] border border-gray-800 rounded-lg shadow-xl overflow-hidden">
                  <div className="grid grid-cols-1 gap-2 p-4">
                    {programs.map((program, index) => (
                      <Link
                        key={index}
                        href={program.href}
                        className="block p-3 rounded-lg hover:bg-gray-900 transition-colors duration-200 group"
                        onClick={() => setIsProgramsMenuOpen(false)}
                      >
                        <div className="flex items-start space-x-3">
                          <div className={`w-2 h-2 rounded-full bg-${program.color}-600 mt-2 flex-shrink-0`}></div>
                          <div>
                            <h4 className="text-white font-medium group-hover:text-[#8B5CF6] transition-colors">
                              {program.title}
                            </h4>
                            <p className="text-gray-400 text-sm mt-1">
                              {program.description}
                            </p>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div> */}
>>>>>>> c2f06731328de0386b0bee11efb25e40e3cb0f10
>>>>>>> 16f625df652cd5d5e96faff8a3e0aeaab3d57b6e
              <Link
                href="/portfolio"
                className="text-gray-300 hover:text-white px-2 py-2 text-xs lg:text-sm font-medium border-b-2 border-transparent hover:border-[#8B5CF6] transition-colors duration-200"
              >
                Portfolio
              </Link>
              <Link
                href="/insights"
                className="text-gray-300 hover:text-white px-2 py-2 text-xs lg:text-sm font-medium border-b-2 border-transparent hover:border-[#8B5CF6] transition-colors duration-200"
              >
                Insights
              </Link>
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
              {/* Commented out Careers menu */}
              {/* <Link
                href="/careers"
                className="text-gray-300 hover:text-white px-2 py-2 text-xs lg:text-sm font-medium border-b-2 border-transparent hover:border-[#8B5CF6] transition-colors duration-200"
              >
                Careers
              </Link> */}
>>>>>>> c2f06731328de0386b0bee11efb25e40e3cb0f10
>>>>>>> 16f625df652cd5d5e96faff8a3e0aeaab3d57b6e
            </div>
          </div>

          {/* Desktop CTA buttons */}
          <div className="hidden md:flex md:items-center md:space-x-3 lg:space-x-4">
            <Link
              href="/apply-founder"
              className="whitespace-nowrap inline-flex items-center px-3 py-2 lg:px-4 lg:py-2 border border-[#8B5CF6] text-xs lg:text-sm font-medium rounded-full text-white bg-[#8B5CF6] hover:bg-transparent hover:text-[#8B5CF6] transition-colors duration-200"
            >
              Apply as Founder
            </Link>
            <Link
              href="/apply-partner"
              className="whitespace-nowrap inline-flex items-center px-3 py-2 lg:px-4 lg:py-2 border border-white text-xs lg:text-sm font-medium rounded-full text-white hover:bg-white hover:text-black transition-colors duration-200"
            >
              Apply as Partner
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;