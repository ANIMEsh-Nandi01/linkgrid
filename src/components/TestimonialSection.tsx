"use client";

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const TestimonialSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const marqueeRef = useRef<HTMLDivElement>(null);
  
  const testimonials = [
    {
      name: "Emily Carter",
      position: "Software Company",
      content: "Using Software has completely transformed our workflow. The intuitive interface and robust features have significantly boosted our productivity. Customer support is top-notch and always ready to help."
    },
    {
      name: "Sarah Johnson",
      position: "Small Business Owner",
      content: "This platform has been a game-changer for our small team. We've seen a 40% increase in productivity since implementation. The automation features save us countless hours every week."
    },
    {
      name: "David Patel",
      position: "Digital Marketing Agency",
      content: "The analytics dashboard provides insights that have helped us make data-driven decisions. Our campaigns are now more targeted and effective thanks to the detailed reporting."
    },
    {
      name: "Shalina Khanom",
      position: "Manufacturing Company",
      content: "Implementation was seamless and the training resources are excellent. Our team was up and running in days rather than weeks. The ROI has been impressive."
    },
    {
      name: "Arbaj Sheyban",
      position: "Design Agency",
      content: "As a design agency, we needed something flexible that wouldn't disrupt our creative process. This solution integrates perfectly with our existing tools and enhances our workflow."
    },
    {
      name: "Michael Rodriguez",
      position: "Healthcare Provider",
      content: "Security and compliance were our top concerns. This platform exceeds all our requirements while remaining user-friendly. Patient data has never been more secure."
    },
    {
      name: "Jennifer Wu",
      position: "E-commerce Director",
      content: "The scalability of this solution has supported our growth from a small shop to an international brand. It grows with us and continuously adds features we didn't know we needed."
    },
    {
      name: "Robert Blackwell",
      position: "Financial Services",
      content: "The reporting capabilities have transformed how we analyze performance. We can now generate complex reports in minutes instead of days. Truly revolutionary for our industry."
    },
    {
      name: "Priya Sharma",
      position: "Education Technology",
      content: "Our students and faculty have embraced the platform enthusiastically. The learning curve was minimal, and the benefits were immediate. Support has been exceptional throughout."
    },
    {
      name: "Thomas Chen",
      position: "Logistics Company",
      content: "Real-time tracking and analytics have reduced our operational costs by 23%. The mobile app allows our drivers to stay connected and updated while on the road."
    },
    {
      name: "Olivia Martinez",
      position: "Nonprofit Organization",
      content: "The donation management features have streamlined our fundraising efforts. We can now focus more on our mission and less on administrative tasks. Donor satisfaction has increased significantly."
    },
    {
      name: "James Wilson",
      position: "Construction Management",
      content: "Project coordination has never been easier. The collaborative tools ensure everyone stays on the same page, reducing errors and delays. Highly recommended for complex projects."
    },
    {
      name: "Aisha Karim",
      position: "Retail Chain Manager",
      content: "Managing multiple locations became simple with this platform. Inventory tracking across stores is now accurate and efficient. Customer satisfaction has improved as a result."
    },
    {
      name: "Daniel Kowalski",
      position: "Software Developer",
      content: "The API documentation is comprehensive and the integration options are flexible. As a developer, I appreciate the thought put into making this system extensible and developer-friendly."
    },
    {
      name: "Sophia Nguyen",
      position: "Marketing Director",
      content: "The campaign management tools have revolutionized our approach to marketing. We can now launch, track, and optimize campaigns with unprecedented efficiency."
    },
    {
      name: "Lucas Fernandez",
      position: "Hospitality Management",
      content: "Guest satisfaction has increased by 35% since implementing this system. The booking management and customer communication tools are exceptional."
    },
    {
      name: "Zara Ahmed",
      position: "Legal Firm Partner",
      content: "Document management and client communication have been streamlined significantly. The security features give us and our clients peace of mind with sensitive information."
    },
    {
      name: "Ryan O'Connor",
      position: "Sports Management",
      content: "Coordinating team schedules, venues, and equipment has become effortless. The mobile app keeps everyone informed and engaged. A game-changer for sports organizations."
    }
  ];
  
  // Auto-rotate testimonials - Fixed by moving testimonials before useEffect
  // and adding testimonials.length to the dependency array
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]); // Add testimonials.length as a dependency
  
  // Marquee animation effect
  useEffect(() => {
    const marqueeElement = marqueeRef.current;
    if (!marqueeElement) return;
    
    let animationId: number;
    let startTime: number | null = null;
    const duration = 40000; // 40 seconds for a complete cycle through all testimonials
    
    // Get the total height of all testimonials
    const totalHeight = marqueeElement.scrollHeight / 2;
    
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      
      // Calculate position based on progress and reset when complete
      const progress = (elapsed % duration) / duration;
      const position = progress * totalHeight;
      
      marqueeElement.style.transform = `translateY(-${position}px)`;
      
      // When we reach near the end, reset to create infinite loop
      if (progress > 0.98) {
        startTime = timestamp;
        // Reset position to start for seamless loop
        marqueeElement.style.transition = 'none';
        marqueeElement.style.transform = 'translateY(0)';
        
        // Force reflow to apply the transform immediately
        void marqueeElement.offsetHeight;
        
        // Restore the transition
        marqueeElement.style.transition = 'transform 1000ms linear';
      }
      
      animationId = requestAnimationFrame(animate);
    };
    
    animationId = requestAnimationFrame(animate);
    
    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);
  
  // Function to get initials from name
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(part => part.charAt(0))
      .join('')
      .toUpperCase();
  };
  
  // Function to generate a consistent color based on name
  const getColorFromName = (name: string) => {
    const colors = [
      'bg-green-600', 'bg-blue-600', 'bg-purple-600', 
      'bg-pink-600', 'bg-yellow-600', 'bg-red-600',
      'bg-indigo-600', 'bg-teal-600', 'bg-orange-600'
    ];
    
    // Simple hash function to get consistent color for the same name
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
      hash = name.charCodeAt(i) + ((hash << 5) - hash);
    }
    
    return colors[Math.abs(hash) % colors.length];
  };
  
  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-[#0a0a29] via-[#001a15] to-[#001a0a]">
      {/* Grid background */}
      <div className="absolute inset-0 z-0">
        <div className="grid grid-cols-12 h-full">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={`col-${i}`} className="border-r border-indigo-900/20 h-full"></div>
          ))}
        </div>
        <div className="grid grid-rows-12 w-full absolute top-0 left-0 h-full">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={`row-${i}`} className="border-b border-indigo-900/20 w-full"></div>
          ))}
        </div>
      </div>
      
      {/* Purple and green gradient splashes */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full filter blur-[100px]"></div>
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-green-700/10 rounded-full filter blur-[100px]"></div>
      <div className="absolute top-2/3 right-1/3 w-64 h-64 bg-indigo-500/10 rounded-full filter blur-[100px]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left side - Heading */}
          <div className="relative pl-8 md:pl-16 lg:pl-24">
            <h2 className="text-5xl md:text-7xl font-bold text-green-500 mb-6 ml-4">What...</h2>
            <div className="space-y-4 ml-4">
              <h3 className="text-5xl md:text-7xl font-bold">
                <span className="text-gray-500">Our </span>
                <span className="bg-gradient-to-r from-green-500 via-yellow-400 to-orange-400 text-transparent bg-clip-text">Member</span>
                <span className="text-pink-500">s </span>
                <span className="text-gray-500">are</span><br />
                <span className="text-gray-500">Saying....</span>
              </h3>
            </div>
            
            {/* Rating and users count */}
            <div className="mt-12 flex items-center flex-wrap ml-8">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="ml-2 text-gray-400">4.9 on reviews</span>
              </div>
              <div className="ml-6 flex items-center">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((user) => (
                    <div key={user} className="w-8 h-8 rounded-full border-2 border-black overflow-hidden">
                      <div className="w-full h-full bg-gray-600 rounded-full"></div>
                    </div>
                  ))}
                </div>
                <span className="ml-3 text-gray-400">From 2500+ Users</span>
              </div>
            </div>
            
            {/* CTA Button - Updated to match the image design */}
            <div className="mt-12 ml-8">
              <a 
                href="#" 
                className="inline-flex items-center px-8 py-4 bg-transparent rounded-full text-white font-medium transition-all hover:bg-green-600 border-2 border-white/20 hover:border-green-600"
              >
                Join Our Community
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </a>
            </div>
          </div>
          
          {/* Right side - Testimonial cards with vertical marquee */}
          <div className="space-y-6 flex flex-col items-center h-[500px] overflow-hidden">
            <div className="w-full max-w-md relative">
              {/* Marquee container */}
              <div className="h-full overflow-hidden">
                <div 
                  ref={marqueeRef} 
                  className="transition-transform duration-1000 ease-linear"
                >
                  {/* Duplicate testimonials for seamless loop */}
                  {[...testimonials, ...testimonials].map((testimonial, index) => (
                    <div 
                      key={`testimonial-${index}`} 
                      className="bg-gradient-to-br from-[#1a1a3a] to-[#033028] rounded-xl p-6 border border-white/10 hover:border-purple-500/30 mb-6 transition-all duration-300 shadow-lg"
                    >
                      <div className="flex items-center mb-4">
                        {/* Text logo icon instead of image */}
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 ${getColorFromName(testimonial.name)} border border-white/20`}>
                          <span className="text-white font-bold text-lg">
                            {getInitials(testimonial.name)}
                          </span>
                        </div>
                        <div>
                          <h4 className="text-white font-semibold">{testimonial.name}</h4>
                          <p className="text-gray-400 text-sm">{testimonial.position}</p>
                        </div>
                      </div>
                      <p className="text-gray-300 leading-relaxed">
                        {testimonial.content}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Gradient overlays for smooth transition */}
              <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-[#0a0a29] to-transparent pointer-events-none z-10"></div>
              <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#001a0a] to-transparent pointer-events-none z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;