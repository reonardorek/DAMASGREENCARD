import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FAQ_LIST } from "../data";

export default function Faqs() {
  const [openFaqId, setOpenFaqId] = useState<string | null>("faq-1");

  const toggleFaq = (id: string) => {
    setOpenFaqId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-14 sm:py-24 bg-white border-b border-wine-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center space-y-3 sm:space-y-4 mb-10 sm:mb-16">
          <span className="font-mono text-[11px] sm:text-xs uppercase tracking-widest text-[#670008] font-bold block">
            DÚVIDAS FREQUENTES
          </span>
          <h2 className="font-sans text-2xl sm:text-3xl lg:text-4xl text-[#0B1629] font-bold tracking-tight leading-snug">
            Perguntas frequentes sobre o{" "}
            <span className="font-sans font-bold text-[#670008]">processo de Green Card</span>
          </h2>
        </div>

        {/* Accordion List */}
        <div className="space-y-2 sm:space-y-3 text-left">
          {FAQ_LIST.map((faq) => {
            const isOpen = openFaqId === faq.id;
            return (
              <div
                key={faq.id}
                className="border-b border-wine-100 last:border-b-0 pb-3 sm:pb-4 transition-all duration-300"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full py-3.5 sm:py-4 flex items-center justify-between text-left focus:outline-none cursor-pointer group gap-3"
                  aria-expanded={isOpen}
                >
                  <h3 className={`font-sans text-sm sm:text-lg font-bold tracking-normal transition-colors duration-200 ${
                    isOpen ? "text-[#670008]" : "text-[#0B1629] group-hover:text-[#670008]"
                  }`}>
                    {faq.question}
                  </h3>
                  <ChevronDown className={`w-5 h-5 text-[#670008] shrink-0 transition-transform duration-300 ${
                    isOpen ? "rotate-180 text-[#670008]" : ""
                  }`} />
                </button>
                
                <div className={`overflow-hidden transition-all duration-300 ${
                  isOpen ? "max-h-[600px] opacity-100 mt-1" : "max-h-0 opacity-0 pointer-events-none"
                }`}>
                  <p className="font-sans text-xs sm:text-base text-gray-600 font-light leading-relaxed pb-3 sm:pb-4 pl-0.5 sm:pl-1">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
