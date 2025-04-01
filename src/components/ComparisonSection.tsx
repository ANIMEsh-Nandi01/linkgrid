"use client";

import React, { useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

const ComparisonSection = () => {
  // Comparison data between LinkGrid and traditional platforms
  const comparisonPoints = [
    {
      title: "Struggling to Find the Right Connections?",
      traditional: "Endless searching through profiles with no clear matching system",
      linkgrid: "Save Time with AI-Driven Matchmaking",
      linkgridDesc: "Our AI analyzes profiles and suggests ideal matches based on goals"
    },
    {
      title: "Wasting Time on Endless Searches",
      traditional: "Hours spent browsing profiles with minimal results",
      linkgrid: "Automated Introductions Made Effortless",
      linkgridDesc: "Smart icebreakers that highlight common interests and goals"
    },
    {
      title: "Missing Hidden Opportunities",
      traditional: "Valuable second-degree connections remain invisible",
      linkgrid: "Find Exactly Who You Need with AI Search",
      linkgridDesc: "Advanced filters based on industry, skills, goals, and more"
    },
    {
      title: "Networking Feels Forced & Ineffective",
      traditional: "Generic outreach with low response rates",
      linkgrid: "Tailored Suggestions for Real Impact",
      linkgridDesc: "Personalized connection recommendations based on your career goals"
    },
    {
      title: "Your Network Isn't Working for You",
      traditional: "Connections aren't aligned with your career goals",
      linkgrid: "Dynamic Insights to Guide Your Growth",
      linkgridDesc: "Analytics dashboard to track networking effectiveness"
    },
    {
      title: "Losing Touch with Valuable Contacts",
      traditional: "No system to maintain and nurture relationships",
      linkgrid: "Streamlined Collaboration for Results",
      linkgridDesc: "Tools to manage and nurture your professional relationships"
    }
  ];

  // Animation controls
  const leftColumnControls = useAnimation();
  const rightColumnControls = useAnimation();

  // Swaying animation variants
  const swayingVariants = {
    hidden: { 
      opacity: 0,
      y: 20,
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      }
    }
  };

  // Card animation variants with staggered children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="comparison" className="py-24 relative overflow-hidden bg-gradient-to-b from-[#001a15] to-[#0a0a29]">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#0a0a29]/80"></div>
        <div className="absolute inset-0 bg-grid opacity-10"></div>
      </div>
      
      {/* Glow effects */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full filter blur-[100px]"></div>
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-red-600/10 rounded-full filter blur-[100px]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <motion.div 
          className="text-center mb-10"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-white">Transform Your </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">Networking Experience</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            See how LinkGrid solves common networking challenges
          </p>
        </motion.div>
        
        {/* Comparison grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {/* Left column - Pain points */}
          <motion.div 
            className="space-y-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-100px" }}
            variants={swayingVariants}
            animate={{
              x: [0, -5, 0, 5, 0],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "mirror",
                duration: 4,
                ease: "easeInOut",
              }
            }}
          >
            <div className="mb-4">
              <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-red-500/10 border border-red-500/20">
                <svg className="w-4 h-4 text-red-400 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="15" y1="9" x2="9" y2="15"></line>
                  <line x1="9" y1="9" x2="15" y2="15"></line>
                </svg>
                <span className="text-sm font-medium text-red-400">Current Networking Pain Points</span>
              </div>
              <h3 className="text-2xl font-bold text-white mt-3">Struggling to Find the Right Connections?</h3>
            </div>
            
            <motion.div variants={containerVariants}>
              {comparisonPoints.map((point, index) => (
                <motion.div 
                  key={`pain-${index}`} 
                  className="bg-[#0A0B14]/90 backdrop-blur-sm rounded-xl p-3 border-l-4 border-red-500 border-t border-r border-b border-gray-800/30 hover:bg-[#0A0B14] transition-all duration-300 mb-3 card-3d-effect group"
                  variants={cardVariants}
                  whileHover={{
                    scale: 1.02,
                    rotateX: 5,
                    rotateY: -5,
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)",
                    transition: { duration: 0.2 }
                  }}
                >
                  <div className="flex items-center transform-gpu transition-transform duration-300 group-hover:translate-z-10">
                    <div className="flex-shrink-0 mr-3">
                      <div className="w-7 h-7 rounded-full bg-red-500/20 flex items-center justify-center transform-gpu transition-transform duration-300 group-hover:scale-110">
                        <svg className="w-3.5 h-3.5 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="10"></circle>
                          <line x1="15" y1="9" x2="9" y2="15"></line>
                          <line x1="9" y1="9" x2="15" y2="15"></line>
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-base font-semibold text-white transform-gpu transition-transform duration-300 group-hover:translate-z-5">{point.title}</h4>
                      <p className="text-gray-400 text-sm transform-gpu transition-transform duration-300 group-hover:translate-z-5">{point.traditional}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          
          {/* Right column - Solutions */}
          <motion.div 
            className="space-y-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-100px" }}
            variants={swayingVariants}
            animate={{
              x: [0, 5, 0, -5, 0],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "mirror",
                duration: 4.5,
                ease: "easeInOut",
              }
            }}
          >
            <div className="mb-4">
              <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20">
                <svg className="w-4 h-4 text-green-400 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
                <span className="text-sm font-medium text-green-400">LinkGrid's Smart Solutions</span>
              </div>
              <h3 className="text-2xl font-bold text-white mt-3">Transform Your Networking Experience</h3>
            </div>
            
            <motion.div variants={containerVariants}>
              {comparisonPoints.map((point, index) => (
                <motion.div 
                  key={`solution-${index}`} 
                  className="bg-[#0A0B14]/90 backdrop-blur-sm rounded-xl p-3 border-l-4 border-green-500 border-t border-r border-b border-gray-800/30 hover:bg-[#0A0B14] transition-all duration-300 mb-3 card-3d-effect group"
                  variants={cardVariants}
                  whileHover={{
                    scale: 1.02,
                    rotateX: 5,
                    rotateY: 5,
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)",
                    transition: { duration: 0.2 }
                  }}
                >
                  <div className="flex items-center transform-gpu transition-transform duration-300 group-hover:translate-z-10">
                    <div className="flex-shrink-0 mr-3">
                      <div className="w-7 h-7 rounded-full bg-green-500/20 flex items-center justify-center transform-gpu transition-transform duration-300 group-hover:scale-110">
                        <svg className="w-3.5 h-3.5 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                          <polyline points="22 4 12 14.01 9 11.01"></polyline>
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-base font-semibold text-white transform-gpu transition-transform duration-300 group-hover:translate-z-5">{point.linkgrid}</h4>
                      <p className="text-gray-400 text-sm transform-gpu transition-transform duration-300 group-hover:translate-z-5">{point.linkgridDesc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
        
        {/* CTA Button */}
        <motion.div 
          className="mt-10 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <motion.a 
            href="#" 
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-medium text-base hover:shadow-[0_0_20px_rgba(168,85,247,0.5)] transition-all duration-300 group"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 30px rgba(168,85,247,0.6)",
              transition: { duration: 0.2 }
            }}
          >
            <span className="transform-gpu transition-transform duration-300 group-hover:translate-z-5">Solve Your Networking Challenges</span>
            <svg className="ml-2 w-5 h-5 transform-gpu transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </motion.a>
        </motion.div>
      </div>
      
      <style jsx>{`
        .bg-grid {
          background-size: 40px 40px;
          background-image: 
            linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
        }
        
        .card-3d-effect {
          transform-style: preserve-3d;
          perspective: 1000px;
          backface-visibility: hidden;
        }
        
        .translate-z-5 {
          transform: translateZ(5px);
        }
        
        .translate-z-10 {
          transform: translateZ(10px);
        }
      `}</style>
    </section>
  );
};

export default ComparisonSection;