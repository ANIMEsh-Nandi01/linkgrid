"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Define the Partner type
interface Partner {
  name: string;
  industry: string;
  logo: string;
}

const TrustedBySection = () => {
  // State to track if showing all partners
  const [showAllPartners, setShowAllPartners] = useState(false);
  // State to store visible partners with proper typing
  const [visiblePartners, setVisiblePartners] = useState<Partner[]>([]);

  // Partner companies data with name and industry
  const partners: Partner[] = [
    { name: "Acme Corporation", industry: "Technology", logo: "/partners/acme.svg" },
    { name: "GlobalTech", industry: "Software", logo: "/partners/globaltech.svg" },
    { name: "Innovate Inc", industry: "Research", logo: "/partners/innovate.svg" },
    { name: "FutureSystems", industry: "AI Solutions", logo: "/partners/futuresystems.svg" },
    { name: "Quantum Networks", industry: "Telecommunications", logo: "/partners/quantum.svg" },
    { name: "EcoSolutions", industry: "Sustainability", logo: "/partners/ecosolutions.svg" },
    { name: "MediTech", industry: "Healthcare", logo: "/partners/meditech.svg" },
    { name: "FinanceHub", industry: "Financial Services", logo: "/partners/financehub.svg" },
    { name: "EduLearn", industry: "Education", logo: "/partners/edulearn.svg" },
    { name: "RetailPro", industry: "Retail", logo: "/partners/retailpro.svg" },
    { name: "BuildWorks", industry: "Construction", logo: "/partners/buildworks.svg" },
    { name: "TravelSphere", industry: "Travel & Hospitality", logo: "/partners/travelsphere.svg" },
  ];

  // Update visible partners when showAllPartners changes
  useEffect(() => {
    setVisiblePartners(showAllPartners ? partners : partners.slice(0, 8));
  }, [showAllPartners]);

  // Initialize visible partners on component mount
  useEffect(() => {
    setVisiblePartners(partners.slice(0, 8));
  }, []);

  // Toggle function for showing all partners
  const toggleShowAllPartners = () => {
    setShowAllPartners(prev => !prev);
  };

  // Animation variants for container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  // Animation variants for individual cards
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 20, 
      scale: 0.95 
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: {
        duration: 0.5,
        type: "tween"
      }
    }
  };

  return (
    <section className="py-16 md:py-20 relative overflow-hidden bg-gradient-to-b from-[#052a20] via-[#051a2a] to-[#040a20]">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'radial-gradient(circle at 25px 25px, white 2%, transparent 0%)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>
      
      {/* Glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-700/10 rounded-full filter blur-[100px]"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-800/10 rounded-full filter blur-[100px]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section header with animation */}
        <motion.div 
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, type: "tween" }}
        >
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold mb-3 md:mb-4">
            <span className="text-white">Trusted by </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-blue-600">Industry Leaders</span>
          </h2>
          <p className="text-gray-300 text-sm md:text-base max-w-2xl mx-auto">
            Join thousands of forward-thinking organizations that rely on our platform to drive growth and innovation.
          </p>
        </motion.div>
        
        {/* Partners grid with staggered animation */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={showAllPartners ? "all" : "partial"}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8 max-w-6xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {visiblePartners.map((partner) => (
              <motion.div 
                key={partner.name}
                // Removed index if not used
                className="bg-white/5 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-white/10 hover:border-blue-500/30 hover:shadow-[0_0_30px_rgba(16,185,129,0.2)] transition-all duration-300 flex flex-col items-center justify-center group"
                variants={cardVariants}
                whileHover={{ 
                  y: -5,
                  transition: { duration: 0.2, type: "tween" }
                }}
              >
                {/* Fallback logo display with initials if image fails to load */}
                <div className="relative w-14 h-14 md:w-20 md:h-20 mb-3 md:mb-4 rounded-full bg-gradient-to-br from-emerald-800/20 to-blue-600/30 flex items-center justify-center overflow-hidden group-hover:scale-110 transition-transform duration-300">
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-emerald-500/10 to-blue-600/30 rounded-full"></div>
                  
                  {/* Industry-specific icon badge with gradient glow */}
                  <div className="absolute top-0 right-0 w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center transform translate-x-1 -translate-y-1 z-10 overflow-hidden">
                    {/* Gradient background for icon */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600"></div>
                    
                    {/* Glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 opacity-0 group-hover:opacity-100 blur-[2px] scale-110 transition-all duration-300"></div>
                    
                    {/* Border glow */}
                    <div className="absolute inset-0 border-2 border-white/20 rounded-full"></div>
                    
                    {/* Industry icons */}
                    {partner.industry === "Technology" && (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5 text-white relative z-10" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zm3 14a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                      </svg>
                    )}
                    {partner.industry === "Software" && (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5 text-white relative z-10" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    )}
                    {/* Other industry icons with updated sizes */}
                  </div>
                  
                  {/* Replace initials with industry-specific icons */}
                  {partner.industry === "Technology" && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 md:h-10 md:w-10 text-white/80" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clipRule="evenodd" />
                    </svg>
                  )}
                  {partner.industry === "Software" && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 md:h-10 md:w-10 text-white/80" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  )}
                  {partner.industry === "Research" && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 md:h-10 md:w-10 text-white/80" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                      <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                    </svg>
                  )}
                  {partner.industry === "AI Solutions" && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 md:h-10 md:w-10 text-white/80" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clipRule="evenodd" />
                    </svg>
                  )}
                  {partner.industry === "Telecommunications" && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 md:h-10 md:w-10 text-white/80" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                    </svg>
                  )}
                  {partner.industry === "Sustainability" && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 md:h-10 md:w-10 text-white/80" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M4.382 13.795l1.368-7.765C5.891 4.992 6.755 4 8 4h4c1.306 0 2.417.835 2.83 2h1.17a3 3 0 010 6h-1.729L14 13.826V14H6v-.174l1.071-1.031H4.382zM6 16h8a2 2 0 002-2v-1h1a5 5 0 000-10h-1.343a4.002 4.002 0 00-7.315 0H6a4 4 0 00-3.986 3.77l-.536 3.043A5 5 0 006 16z" clipRule="evenodd" />
                    </svg>
                  )}
                  {!partner.industry.match(/Technology|Software|Research|AI Solutions|Telecommunications|Sustainability/) && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 md:h-10 md:w-10 text-white/80" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                    </svg>
                  )}
                </div>
                
                <h3 className="text-white text-sm md:text-base font-semibold text-center group-hover:text-emerald-400 transition-colors duration-300">{partner.name}</h3>
                <p className="text-gray-400 text-xs md:text-sm text-center mt-1">{partner.industry}</p>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
        
        {/* View all partners button */}
        <motion.div 
          className="mt-10 md:mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.3, type: "tween" }}
        >
          <motion.button 
            onClick={toggleShowAllPartners}
            className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium text-base transition-all duration-300"
            whileHover={{ 
              scale: 1.03,
              transition: { duration: 0.2, type: "tween" }
            }}
          >
            {showAllPartners ? "Show fewer partners" : "View all partner companies"}
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={showAllPartners ? "M19 9l-7 7-7-7" : "M14 5l7 7m0 0l-7 7m7-7H3"}></path>
            </svg>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustedBySection;