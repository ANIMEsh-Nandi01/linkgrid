"use client";
import React from "react";
import { PinContainer } from "@/components/ui/3d-pin";

export default function AnimatedPinDemo() {
  return (
    <div className="h-[70rem] w-full flex items-center justify-center">
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
          
          {/* Buttons - Centered with updated styling */}
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
  );
}