"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useCallback } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Define navigation links with their corresponding section IDs
  const navLinks = [
    { name: "Features", href: "#features" },
    { name: "Network", href: "#comparison" },
    { name: "Global", href: "#global" },
    { name: "Security", href: "#security" },
  ];

  // Smooth scroll function
  const handleSmoothScroll = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    
    // Close mobile menu if open
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
    
    // Extract the ID from the href
    const targetId = href.replace('#', '');
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      // Smooth scroll to the element
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
      
      // Update URL without page reload
      window.history.pushState(null, '', href);
    }
  }, [isMenuOpen]);

  return (
    <nav className="fixed top-4 left-0 right-0 mx-auto w-[85%] max-w-6xl z-50">
      <div className="backdrop-blur-md bg-white/10 dark:bg-black/20 rounded-2xl p-4 shadow-lg border border-white/20 flex items-center justify-between">
        {/* Left side - Logo with glow effect */}
        <div className="flex items-center ml-4">
          <Link href="#" className="flex items-center space-x-2 group">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur opacity-30 group-hover:opacity-70 transition duration-300"></div>
              <Image
                src="/logo.png"
                alt="LinkGrid Logo"
                width={32}
                height={32}
                className="relative"
              />
            </div>
            <div className="font-bold text-xl">
              <span className="text-[#5bbce4]">Link</span>
              <span className="text-white">Grid</span>
              <span className="text-[#5bbce4] text-sm ml-1 font-medium">AI</span>
            </div>
          </Link>
        </div>

        {/* Middle - Navigation Links (Desktop) */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-white/90 hover:text-white transition-colors duration-300 font-medium text-sm relative group"
              onClick={(e) => handleSmoothScroll(e, item.href)}
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
            </Link>
          ))}
        </div>

        {/* Right side - Join Button and Mobile Menu Button */}
        <div className="flex items-center space-x-4 mr-4">
          <button className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-6 py-2.5 rounded-lg font-medium text-sm cursor-pointer transition-all duration-300 shadow-md hover:shadow-lg hover:from-pink-600 hover:to-purple-700 flex items-center relative overflow-hidden group">
            <span className="relative z-10">Join Now</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 relative z-10 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
            <span className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </button>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden text-white focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-2 backdrop-blur-md bg-black/50 rounded-xl overflow-hidden shadow-lg border border-white/20 animate-fadeIn">
          <div className="flex flex-col py-2">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-white/90 hover:text-white hover:bg-white/10 transition-colors duration-300 font-medium text-sm py-3 px-6"
                onClick={(e) => handleSmoothScroll(e, item.href)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;