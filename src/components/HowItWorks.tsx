import React from "react";
import { PROCESS_STEPS } from "../data";

interface HowItWorksProps {
  onCtaClick?: () => void;
}

export default function HowItWorks({ onCtaClick }: HowItWorksProps) {
  return (
    <section id="como-funciona" className="py-14 sm:py-24 bg-[#F4F6F9] border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-2.5 sm:space-y-3 mb-12 sm:mb-20">
          <span className="font-sans text-[11px] sm:text-xs uppercase tracking-[0.25em] text-[#670008] font-bold block">
            SUA JORNADA
          </span>
          <h2 className="font-sans text-2xl sm:text-4xl lg:text-5xl text-[#0B1629] font-extrabold tracking-tight">
            Como funciona a sua jornada?
          </h2>
        </div>

        {/* 5-Step Connected Timeline */}
        <div className="relative max-w-6xl mx-auto">
          
          {/* Connecting Line (Desktop) */}
          <div 
            className="hidden lg:block absolute top-7 left-[8%] right-[8%] h-[2px] bg-[#CBD5E1] z-0" 
            aria-hidden="true"
          />

          {/* Steps Cards: Harmonious equal size, crisp styling and clear typography */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5 relative z-10">
            {PROCESS_STEPS.map((step) => (
              <div
                key={step.number}
                className="flex items-center sm:flex-col sm:items-center sm:text-center text-left gap-4 sm:gap-0 p-5 sm:p-6 bg-white rounded-2xl border border-gray-200/90 shadow-sm hover:shadow-md hover:border-gray-300 transition-all duration-300 group h-full min-h-[96px] sm:min-h-[220px]"
              >
                {/* Numbered Circular Badge with Maroon finish */}
                <div className="relative shrink-0 sm:mb-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#670008] text-white font-sans text-lg sm:text-xl font-bold flex items-center justify-center shadow-md ring-4 ring-white transition-transform duration-300 group-hover:scale-105">
                    {step.number}
                  </div>
                </div>

                {/* Step Title & Subtitle */}
                <div className="space-y-1 sm:space-y-2 flex-1 flex flex-col justify-center">
                  <h3 className="font-sans text-sm sm:text-[15px] font-bold text-[#0B1629] leading-snug tracking-tight">
                    {step.title}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-gray-500 font-normal leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
