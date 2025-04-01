"use client";

import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';

const SecuritySection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);
  
  useEffect(() => {
    // Set initial window width
    setWindowWidth(window.innerWidth);
    
    // Update window width on resize
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    window.addEventListener('resize', handleResize);
    
    // Intersection observer setup
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.3 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  const securityFeatures = [
    {
      title: "End-to-End Encryption",
      description: "All your communications and data are encrypted using industry-leading protocols to ensure maximum privacy.",
      icon: "🔒",
      color: "bg-purple-700"
    },
    {
      title: "AI-Powered Threat Detection",
      description: "Our intelligent systems constantly monitor for suspicious activities and potential security threats.",
      icon: "🛡️",
      color: "bg-purple-700"
    },
    {
      title: "Compliance Guaranteed",
      description: "We meet and exceed global data protection standards including GDPR, CCPA, and industry-specific regulations.",
      icon: "✓",
      color: "bg-purple-700"
    }
  ];
  
  // Get card positions based on screen size
  const getCardPosition = (index: number) => {
    // Mobile layout (stacked vertically)
    if (windowWidth < 768) {
      return {
        left: '50%',
        right: 'auto',
        top: `${index * 100}px`,
        transform: isVisible 
          ? 'translateX(-50%)' 
          : 'translateX(-50%) translateY(50px)',
        opacity: isVisible ? 1 : 0,
        zIndex: 10 - index,
      };
    }
    
    // Tablet and desktop layout (horizontal spread)
    return {
      left: isVisible 
        ? (index === 0 ? '0' : index === 1 ? '50%' : 'auto') 
        : '50%',
      right: isVisible 
        ? (index === 2 ? '0' : 'auto') 
        : 'auto',
      top: 0,
      transform: isVisible 
        ? (index === 1 ? 'translateX(-50%)' : 'translateX(0)') 
        : `translateX(-50%) translateY(${(index === 0 || index === 2) ? '8px' : '0'})`,
      zIndex: isVisible 
        ? 10 
        : (index === 1 ? 30 : 20 - index * 10),
      opacity: isVisible 
        ? 1 
        : (index === 1 ? 1 : 0.85),
    };
  };
  
  // Track which card is being hovered (for mobile view)
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  
  // Generate transition style with delay based on index
  const getTransitionStyle = (index: number) => {
    return isVisible 
      ? `all 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${index * 150}ms`
      : `all 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0ms`;
  };
  
  return (
    <section ref={sectionRef} id="security" className="py-24 bg-[#1a1a3a] overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-900/50 border border-purple-500/30">
            <span className="text-purple-300 mr-2">🔐</span>
            <span className="text-purple-300 text-sm font-medium">Enterprise-Grade Security</span>
          </div>
        </div>
        
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Your Network, <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Protected</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Security isn't just a feature—it's the foundation of LinkGrid. We've built enterprise-grade protection into every layer of our platform.
          </p>
        </div>
        
        {/* Security features with stacked card animation */}
        <div className={`relative ${windowWidth < 768 ? 'h-[800px]' : 'h-[450px] md:h-[350px]'} max-w-5xl mx-auto perspective-1000`}>
          {securityFeatures.map((feature, index) => {
            const position = getCardPosition(index);
            
            return (
              <div 
                key={index}
                className="absolute w-full md:w-[300px] h-[280px] duration-1000 ease-out bg-[#252550] rounded-xl p-8 border border-purple-500/20 hover:border-purple-400/40 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] hover:scale-105 hover:-translate-y-2 hover:rotate-1 group"
                style={{
                  left: position.left,
                  right: position.right,
                  top: position.top,
                  transform: position.transform,
                  zIndex: position.zIndex,
                  opacity: windowWidth < 768 && hoveredCard !== null 
                    ? (hoveredCard === index ? 1 : 0) 
                    : position.opacity,
                  transition: getTransitionStyle(index),
                  transformStyle: 'preserve-3d',
                  backfaceVisibility: 'hidden',
                  pointerEvents: windowWidth < 768 && hoveredCard !== null && hoveredCard !== index ? 'none' : 'auto',
                }}
                onMouseEnter={() => windowWidth < 768 && setHoveredCard(index)}
                onMouseLeave={() => windowWidth < 768 && setHoveredCard(null)}
                onTouchStart={() => windowWidth < 768 && setHoveredCard(index)}
                onTouchEnd={() => windowWidth < 768 && setTimeout(() => setHoveredCard(null), 1000)}
              >
                <div className="mb-6 transition-transform duration-300 group-hover:translate-z-10">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-purple-900 shadow-lg">
                    <span className="text-2xl">{feature.icon}</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-white transition-transform duration-300 group-hover:translate-z-10">{feature.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed transition-transform duration-300 group-hover:translate-z-10">{feature.description}</p>
                
                {/* 3D effect glow overlay */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-purple-500/0 to-pink-500/0 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </div>
            );
          })}
        </div>
        
        {/* CTA Button - Modified for mobile view */}
        <div className={`${windowWidth < 768 ? '-mt-12' : 'mt-16'} flex justify-center`}
             style={{
               opacity: isVisible ? 1 : 0,
               transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
               transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1) 450ms',
               position: windowWidth < 768 ? 'relative' : 'static',
               zIndex: 20,
             }}>
          <button className="group flex items-center px-6 py-3 rounded-full bg-purple-900/50 border border-purple-500/30 hover:bg-purple-800/60 transition-all duration-300 shadow-lg">
            <span className="text-purple-300 mr-2">🔒</span>
            <span className="text-purple-300 font-medium">Learn More About Our Security</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 text-purple-300 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;