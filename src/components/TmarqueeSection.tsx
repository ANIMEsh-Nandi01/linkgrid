"use client";

import React from 'react';
import Image from 'next/image';

const MarqueeSection = () => {
  const securityItems = [
    {
      text: "End-to-End Encryption",
      icon: "🔒"
    },
    {
      text: "Data Protection",
      icon: "🛡️"
    },
    {
      text: "Privacy Controls",
      icon: "👁️"
    },
    {
      text: "Secure Authentication",
      icon: "🔑"
    },
    {
      text: "AI-Powered Threat Detection",
       icon: "🧠"
    },
    {
      text: "Regular Security Audits",
      icon: "📋"
    },
    {
      text: "Anonymized Data Processing",
      icon: "🕵️"
    },
    {
      text: "SOC 2 Certified",
      icon: "🏆"
    },
    {
      text: "Zero Trust Security",
      icon: "🏰"
    },
    {
      text: "Biometric Verification",
      icon: "👆"
    }
  ];
  
  return (
    <div className="relative py-7 bg-gradient-to-r from-[#200a29] via-[#0f0f3d] to-[#143321] overflow-hidden border-t border-b border-purple-900/20">
      {/* Subtle glow effects */}
      <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-purple-500/5 rounded-full filter blur-3xl"></div>
      <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-green-1000/5 rounded-full filter blur-3xl"></div>
      
      {/* Overlay gradient for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#035426]/0 via-[#035426]/30 to-[#035426]/0 z-10"></div>
      
      {/* Single marquee row with improved styling - faster animation and narrower divs */}
      <div className="flex whitespace-nowrap animate-marquee-fast relative z-20">
        {[...securityItems, ...securityItems].map((item, index) => (
          <div 
            key={`item-${index}`} 
            className="mx-2 py-1 px-3 bg-gradient-to-r from-purple-900/20 to-green-700/20 rounded-full border border-white/10 backdrop-blur-sm shadow-lg"
          >
            <span className="text-white font-medium flex items-center tracking-wide text-sm">
              <span className="mr-2 text-lg bg-gradient-to-r from-purple-400 to-green-800 rounded-full w-6 h-6 flex items-center justify-center shadow-inner">{item.icon}</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-200 to-green-200 font-semibold text-xs">{item.text}</span>
            </span>
          </div>
        ))}
      </div>
      
      {/* Subtle divider lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-800 to-transparent"></div>
    </div>
  );
};

export default MarqueeSection;