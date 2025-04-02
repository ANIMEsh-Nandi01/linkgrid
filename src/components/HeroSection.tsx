"use client";

import React, { useState, useEffect, useRef } from 'react';

const HeroSection = () => {
  const [counts, setCounts] = useState({
    users: 0,
    networks: 0,
    successRate: 0
  });
  
  const statsRef = useRef(null);
  const animationStarted = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      if (entry.isIntersecting && !animationStarted.current) {
        animationStarted.current = true;
        startCountingAnimation();
      }
    }, { threshold: 0.1 });

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    // Removed currentRef if not used
    return () => {
      // Cleanup logic using currentRef
    };
  }, []);

  const startCountingAnimation = () => {
    const duration = 2000; // 2 seconds
    const frameDuration = 1000 / 60; // 60fps
    const totalFrames = Math.round(duration / frameDuration);
    
    const finalValues = {
      users: 1.2, // 1.2M+
      networks: 85, // 85K+
      successRate: 94 // 94%
    };
    
    let frame = 0;
    
    const counter = setInterval(() => {
      frame++;
      
      const progress = frame / totalFrames;
      const easeOutQuad = (t: number) => t * (2 - t); // Easing function for smoother animation
      const easedProgress = easeOutQuad(progress);
      
      setCounts({
        users: Number(Math.min(easedProgress * finalValues.users, finalValues.users).toFixed(1)),
        networks: Math.min(Math.round(easedProgress * finalValues.networks), finalValues.networks),
        successRate: Math.min(Math.round(easedProgress * finalValues.successRate), finalValues.successRate)
      });
      
      if (frame === totalFrames) {
        clearInterval(counter);
      }
    }, frameDuration);
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden pt-24">
      {/* Video background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/100-followers.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      
      {/* Overlay gradient for better content visibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-[#0a0a29]/90 z-[1]"></div>
      
      {/* AI-Powered Networking Badge */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-6rem)] text-center px-4 max-w-5xl mx-auto">
        <div className="inline-flex items-center mb-8 px-6 py-2 rounded-full bg-[#1a1a4a]/60 backdrop-blur-sm border border-[#4a4a8a]/30">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            fill="currentColor" 
            className="w-5 h-5 mr-2 text-blue-400"
          >
            <path d="M11.7 2.805a.75.75 0 01.6 0A60.65 60.65 0 0122.83 8.72a.75.75 0 01-.231 1.337 49.949 49.949 0 00-9.902 3.912l-.003.002-.34.18a.75.75 0 01-.707 0A50.009 50.009 0 007.5 12.174v-.224c0-.131.067-.248.172-.311a54.614 54.614 0 014.653-2.52.75.75 0 00-.65-1.352 56.129 56.129 0 00-4.78 2.589 1.858 1.858 0 00-.859 1.228 49.803 49.803 0 00-4.634-1.527.75.75 0 01-.231-1.337A60.653 60.653 0 0111.7 2.805z" />
            <path d="M13.06 15.473a48.45 48.45 0 017.666-3.282c.134 1.414.22 2.843.255 4.285a.75.75 0 01-.46.71 47.878 47.878 0 00-8.105 4.342.75.75 0 01-.832 0 47.877 47.877 0 00-8.104-4.342.75.75 0 01-.461-.71c.035-1.442.121-2.87.255-4.286A48.4 48.4 0 016 13.18v1.27a1.5 1.5 0 00-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.661a6.729 6.729 0 00.551-1.608 1.5 1.5 0 00.14-2.67v-.645a48.549 48.549 0 013.44 1.668 2.25 2.25 0 002.12 0z" />
            <path d="M4.462 19.462c.42-.419.753-.89 1-1.394.453.213.902.434 1.347.661a6.743 6.743 0 01-1.286 1.794.75.75 0 11-1.06-1.06z" />
          </svg>
          <span className="text-blue-200 font-medium">AI-Powered Networking</span>
        </div>
        
        {/* Title with gradient text - Adjusted size and spacing */}
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight mt-8">
          <span className="text-white">Building </span>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">Professional</span>
          <span className="text-white"> Connections </span>
          <span className="text-white">with Intelligence</span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-12">
          LinkGrid intelligently connects professionals based on mutual goals, using AI to create meaningful networking opportunities that drive career growth.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 mb-16">
          <button className="group relative bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full font-medium text-base hover:shadow-[0_0_20px_rgba(168,85,247,0.5)] transition-all duration-300">
            Get Started Free
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
          <button className="bg-[#1a1a4a]/40 backdrop-blur-sm text-white px-8 py-3 rounded-full font-medium text-base hover:bg-[#1a1a4a]/60 transition-all duration-300 border border-[#4a4a8a]/30">
            Learn More
          </button>
        </div>
        
        {/* Stats - Hidden on mobile for cleaner look */}
        <div ref={statsRef} className="hidden md:flex justify-center gap-16 mt-4">
          <div className="flex flex-col items-center">
            <span className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
              {counts.users}M+
            </span>
            <span className="text-gray-400 text-sm mt-1">Users Worldwide</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
              {counts.networks}K+
            </span>
            <span className="text-gray-400 text-sm mt-1">Networks Created</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
              {counts.successRate}%
            </span>
            <span className="text-gray-400 text-sm mt-1">Success Rate</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;