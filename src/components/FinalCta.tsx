import React from "react";
import { ArrowRight, Sparkles, Lock } from "lucide-react";

interface FinalCtaProps {
  onCtaClick: () => void;
}

export default function FinalCta({ onCtaClick }: FinalCtaProps) {
  return (
    <section id="cta-final" className="py-14 sm:py-24 bg-[#060C18] border-b border-[#152238] relative text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-4 sm:space-y-6">
        
        <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-[#670008] border border-[#93131E] text-white font-mono text-[10px] sm:text-[11px] font-bold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5 text-white shrink-0" />
          <span>REALIZE SEU SONHO AMERICANO</span>
        </div>

        <h2 className="font-sans text-2xl sm:text-4xl md:text-5xl text-white font-extrabold tracking-tight leading-tight">
          Descubra quais caminhos imigratórios{" "}
          <span className="font-sans font-extrabold text-[#c63637] block sm:inline">
            podem ser aplicáveis ao seu caso
          </span>
        </h2>

        <p className="font-sans text-sm sm:text-base md:text-lg text-gray-300 font-light leading-relaxed max-w-2xl mx-auto">
          Envie suas informações e receba uma análise jurídica individual, conduzida por advogados especializados em imigração, para identificar o caminho mais adequado ao seu perfil.
        </p>

        <div className="pt-2 sm:pt-4 w-full flex flex-col items-center justify-center">
          <button
            onClick={onCtaClick}
            className="animate-pulse-green w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white font-sans text-xs sm:text-sm uppercase tracking-wider px-6 sm:px-9 py-4 rounded-xl font-bold transition-all shadow-xl inline-flex items-center justify-center gap-2 cursor-pointer active:scale-95 border border-emerald-500"
          >
            <span>QUERO UMA ANÁLISE DO MEU PERFIL</span>
            <ArrowRight className="w-4 h-4 shrink-0" />
          </button>
          
          <div className="mt-3.5 flex items-center justify-center gap-1.5 text-center max-w-lg px-2">
            <Lock className="w-3.5 h-3.5 text-gray-400 shrink-0" />
            <p className="font-sans text-xs sm:text-sm text-gray-400 font-normal">
              Atendimento seguro e sigiloso.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
