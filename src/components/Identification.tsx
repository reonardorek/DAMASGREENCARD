import React from "react";
import { 
  GraduationCap, 
  Clock, 
  Globe2, 
  AlertCircle, 
  FileText, 
  ShieldCheck, 
  ArrowRight
} from "lucide-react";
import { IDENTIFICATION_ITEMS } from "../data";

interface IdentificationProps {
  onCtaClick: () => void;
}

const ICONS = [
  GraduationCap,
  Clock,
  Globe2,
  AlertCircle,
  FileText,
  ShieldCheck
];

export default function Identification({ onCtaClick }: IdentificationProps) {

  return (
    <section id="identificacao" className="py-14 sm:py-24 bg-[#0B111E] text-white border-b border-[#1A263D] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 sm:space-y-4 mb-10 sm:mb-16">
          <span className="font-mono text-[11px] sm:text-xs uppercase tracking-widest text-white/70 font-semibold block">
            SEU PROJETO DE VIDA NOS ESTADOS UNIDOS
          </span>
          <h2 className="font-sans text-2xl sm:text-3xl lg:text-4xl text-white font-extrabold tracking-tight leading-snug">
            Quer morar nos Estados Unidos, mas <br className="hidden sm:block" />
            <span className="text-white font-sans font-extrabold">não sabe qual caminho seguir para o Green Card?</span>
          </h2>
        </div>

        {/* 6 Situation Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
          {IDENTIFICATION_ITEMS.map((item, idx) => {
            const IconComponent = ICONS[idx] || GraduationCap;
            return (
              <div
                key={item.id}
                className="p-4 sm:p-6 rounded-2xl bg-[#172033] border border-[#22314E] hover:border-[#384C72] hover:bg-[#1C273E] transition-all duration-300 shadow-md flex items-start gap-3.5 sm:gap-4 text-left group"
              >
                <div className="p-2 sm:p-2.5 bg-[#0B111E] rounded-xl shrink-0 h-10 w-10 sm:h-11 sm:w-11 flex items-center justify-center border border-[#253656] shadow-sm group-hover:scale-105 transition-transform text-white">
                  <IconComponent className="w-5 h-5 text-[#670008]" />
                </div>
                <div className="space-y-1">
                  <span className="font-mono text-[10px] text-white/60 uppercase tracking-widest font-semibold block">
                    SITUAÇÃO {idx + 1}
                  </span>
                  <p className="font-sans text-sm sm:text-base font-semibold text-white leading-snug">
                    {item.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Prompt Banner */}
        <div className="mt-10 sm:mt-14 bg-[#172033] rounded-2xl p-6 sm:p-10 text-center relative overflow-hidden border border-[#22314E] shadow-xl max-w-4xl mx-auto">
          <div className="relative space-y-5 sm:space-y-6">
            <p className="font-sans text-lg sm:text-2xl text-white font-medium leading-relaxed">
              &ldquo;O primeiro passo é entender quais caminhos podem ser aplicáveis ao seu caso.&rdquo;
            </p>
            <div className="w-full flex justify-center">
              <button
                onClick={onCtaClick}
                className="animate-pulse-green w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white font-sans text-xs sm:text-sm uppercase tracking-widest px-6 sm:px-8 py-4 rounded-xl font-bold transition-all duration-300 shadow-xl inline-flex items-center justify-center gap-2 border border-emerald-500 cursor-pointer active:scale-95"
              >
                <span>ANALISAR MEU PERFIL</span>
                <ArrowRight className="w-4 h-4 shrink-0" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
