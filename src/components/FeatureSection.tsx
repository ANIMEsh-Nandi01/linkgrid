"use client";
 
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const FeatureSection = () => {
  const featuresRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false); // Reset animation when section is out of view
        }
      },
      { threshold: 0.1 }
    );
    
    if (featuresRef.current) {
      observer.observe(featuresRef.current);
    }
    
    return () => {
      if (featuresRef.current) {
        observer.unobserve(featuresRef.current);
      }
    };
  }, []);
  
  // Updated features to match the image
  const features = [
    {
      title: "Advanced 2nd-Degree Networking",
      description: "Discover hidden networking opportunities through 2nd-degree connections you wouldn't normally find.",
      icon: "🔄",
      color: "bg-blue-800"
    },
    {
      title: "AI-Powered Connection Recommendations",
      description: "Our AI analyzes your profile and goals to suggest the most valuable professional connections.",
      icon: "🧠",
      color: "bg-blue-800"
    },
    {
      title: "Smart Engagement Tracking",
      description: "Track and analyze your networking activities to optimize your relationship-building strategy.",
      icon: "📊",
      color: "bg-blue-800"
    },
    {
      title: "Enhanced Search Capabilities",
      description: "Find professionals by skill, industry, location, and more with our powerful search tools.",
      icon: "🔍",
      color: "bg-blue-800"
    },
    {
      title: "Seamless Integration",
      description: "Connect with your existing professional networks and import contacts with a single click.",
      icon: "🔄",
      color: "bg-blue-800"
    },
    {
      title: "Accelerated Career Growth",
      description: "Unlock career opportunities by leveraging AI-driven insights and personalized networking strategies.",
      icon: "🚀",
      color: "bg-blue-800"
    }
  ];
  
  return (
    <section id="features" className="py-20 bg-gradient-to-b from-[#0a0a29] to-[#0f0f3d] overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Intelligent Features for <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">Smarter Networking</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Our platform combines cutting-edge AI with powerful tools to transform how professionals connect and grow their networks.
          </p>
        </div>
        
        {/* Features grid - Fixed layout with proper spacing */}
        <div ref={featuresRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            // Calculate different initial positions based on column position
            const columnPosition = index % 3;
            let initialTransform = '';
            
            if (columnPosition === 0) {
              initialTransform = 'translate(-100px, 50px)'; // Left column comes from left
            } else if (columnPosition === 1) {
              initialTransform = 'translateY(100px)'; // Middle column comes from bottom
            } else {
              initialTransform = 'translate(100px, 50px)'; // Right column comes from right
            }
            
            return (
              <div 
                key={index}
                className="bg-[#0a1a3f] rounded-xl p-6 border border-blue-900/30 hover:border-blue-700/50 hover:shadow-[0_0_30px_rgba(30,64,175,0.15)] h-64 flex flex-col"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translate(0, 0)' : initialTransform,
                  transition: `all 0.8s cubic-bezier(0.17, 0.55, 0.55, 1) ${index * 0.1}s`,
                  boxShadow: isVisible ? '0 10px 25px -5px rgba(30, 64, 175, 0.1)' : 'none'
                }}
              >
                <div 
                  className={`w-12 h-12 mb-5 rounded-lg flex items-center justify-center ${feature.color}`}
                  style={{
                    transform: isVisible ? 'scale(1)' : 'scale(0.5)',
                    opacity: isVisible ? 1 : 0,
                    transition: `all 0.6s ease ${index * 0.1 + 0.3}s`
                  }}
                >
                  <span className="text-2xl">{feature.icon}</span>
                </div>
                <h3 
                  className="text-xl font-semibold mb-3 text-white"
                  style={{
                    transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                    opacity: isVisible ? 1 : 0,
                    transition: `all 0.6s ease ${index * 0.1 + 0.4}s`
                  }}
                >
                  {feature.title}
                </h3>
                <p 
                  className="text-gray-300 text-sm flex-grow"
                  style={{
                    transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                    opacity: isVisible ? 1 : 0,
                    transition: `all 0.6s ease ${index * 0.1 + 0.5}s`
                  }}
                >
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
        
        {/* Call to action */}
        <div className="mt-16 text-center">
          <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full font-medium text-base hover:shadow-[0_0_20px_rgba(168,85,247,0.5)] transition-all duration-300">
            Explore All Features
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;