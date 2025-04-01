"use client";

import { useEffect, useRef } from 'react';
import { PinContainer } from "@/components/ui/3d-pin";

// Custom SVG icons instead of lucide-react
const ArrowRightIcon = ({ className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M5 12h14"></path>
    <path d="m12 5 7 7-7 7"></path>
  </svg>
);

const GlobeIcon = ({ className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="10"></circle>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
    <path d="M2 12h20"></path>
  </svg>
);

const CallToAction = () => {
  const ctaRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!ctaRef.current) return;
    
    const addParticles = () => {
      const container = ctaRef.current?.querySelector('.particles-container');
      if (!container) return;
      
      // Clear existing particles
      container.innerHTML = '';
      
      // Add new particles
      for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        // Random position
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.left = `${Math.random() * 100}%`;
        
        // Random size
        const size = Math.random() * 3 + 1;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        
        // Random animation delay
        particle.style.animationDelay = `${Math.random() * 5}s`;
        
        container.appendChild(particle);
      }
    };
    
    addParticles();
    
    // Clean up
    return () => {
      const container = ctaRef.current?.querySelector('.particles-container');
      if (container) container.innerHTML = '';
    };
  }, []);

  return (
    <section id="global" className="py-24 relative overflow-hidden bg-gray-950" ref={ctaRef}>
      <div className="absolute inset-0 bg-grid"></div>
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background"></div>
        
        {/* Animated background blobs */}
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-purple-700/20 rounded-full mix-blend-screen filter blur-3xl opacity-40 animate-float"></div>
        <div className="absolute top-10 right-20 w-96 h-96 bg-pink-700/20 rounded-full mix-blend-screen filter blur-3xl opacity-40 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute -bottom-20 left-40 w-80 h-80 bg-violet-700/20 rounded-full mix-blend-screen filter blur-3xl opacity-40 animate-float" style={{ animationDelay: '4s' }}></div>
      </div>
      
      <div className="absolute inset-0 particles-container">
        {/* Particles will be added via JavaScript */}
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Global Reach Section */}
          <div className="bg-[#0A0B14] rounded-xl p-8 md:p-10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-full h-full overflow-hidden">
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-teal-500/5 rounded-full mix-blend-screen filter blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-500/5 rounded-full mix-blend-screen filter blur-3xl"></div>
            </div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center px-3 py-1.5 mb-6 rounded-full bg-teal-500/10 border border-teal-500/20">
                <GlobeIcon className="w-4 h-4 text-teal-400 mr-2" />
                <span className="text-sm font-medium text-teal-400">Global Reach</span>
              </div>
              
              <h2 className="text-3xl font-bold mb-6 text-white">Connect Beyond Borders</h2>
              
              <p className="text-gray-300 mb-10">
                LinkGrid brings professionals together from around the world, breaking down geographical barriers to networking.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-white">Global User Base</h3>
                  
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <p className="text-gray-400 text-sm">Users</p>
                      <p className="text-2xl font-bold text-white">1M+</p>
                    </div>
                    
                    <div>
                      <p className="text-gray-400 text-sm">Countries</p>
                      <p className="text-2xl font-bold text-white">150+</p>
                    </div>
                    
                    <div>
                      <p className="text-gray-400 text-sm">Languages</p>
                      <p className="text-2xl font-bold text-white">40+</p>
                    </div>
                    
                    <div>
                      <p className="text-gray-400 text-sm">Industries</p>
                      <p className="text-2xl font-bold text-white">200+</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-white">Global Benefits</h3>
                  
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 rounded-full bg-teal-400 mt-2 mr-2"></div>
                      <span className="text-gray-300 text-sm">Access international opportunities and job markets</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 rounded-full bg-teal-400 mt-2 mr-2"></div>
                      <span className="text-gray-300 text-sm">Connect with industry leaders across different regions</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 rounded-full bg-teal-400 mt-2 mr-2"></div>
                      <span className="text-gray-300 text-sm">Expand your professional network globally</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          {/* Call to Action Card with 3D Pin */}
          <div className="bg-[#0A0B14] rounded-xl p-8 md:p-10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-full h-full overflow-hidden">
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-500/5 rounded-full mix-blend-screen filter blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/5 rounded-full mix-blend-screen filter blur-3xl"></div>
            </div>
            
            <div className="relative z-10">  
              {/* 3D Pin Container - Centered */}
              <div className="mb-8 h-[500px] relative flex items-center justify-center">
                <PinContainer
                  title="Join Our Network"
                  href="#"
                >
                  <div className="flex basis-full flex-col p-8 tracking-tight text-center sm:basis-1/2 w-[22rem] h-[32rem] bg-black">
                    <h3 className="!pb-6 !m-0 font-bold text-4xl leading-tight tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-purple-400">
                      Ready to Transform Your Professional Network?
                    </h3>
                    <div className="text-base !m-0 !p-0 font-normal mb-16 text-center">
                      <span className="text-slate-300 leading-relaxed">
                        Join thousands of professionals who are already experiencing the power of intelligent networking on LinkGrid.
                      </span>
                    </div>
                    
                    {/* Buttons - Stacked vertically as in the image */}
                    <div className="flex flex-col space-y-6 mt-auto">
                      <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3.5 rounded-full font-medium text-base hover:opacity-90 transition-opacity flex items-center justify-center shadow-[0_0_20px_rgba(168,85,247,0.5)]">
                        Create Account
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
                          <path d="M5 12h14"></path>
                          <path d="m12 5 7 7-7 7"></path>
                        </svg>
                      </button>
                      <button className="bg-black border border-gray-800 text-white px-6 py-3.5 rounded-full font-medium text-base hover:bg-white/5 transition-colors">
                        View Pricing
                      </button>
                    </div>
                  </div>
                </PinContainer>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .bg-grid {
          background-size: 40px 40px;
          background-image: 
            linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
        }
        
        .particle {
          position: absolute;
          background-color: rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          animation: float 15s infinite linear;
        }
        
        @keyframes float {
          0% {
            transform: translateY(0) translateX(0);
          }
          25% {
            transform: translateY(-20px) translateX(10px);
          }
          50% {
            transform: translateY(-10px) translateX(20px);
          }
          75% {
            transform: translateY(10px) translateX(5px);
          }
          100% {
            transform: translateY(0) translateX(0);
          }
        }
        
        .animate-float {
          animation: float 20s infinite ease-in-out;
        }
      `}</style>
    </section>
  );
};

export default CallToAction;