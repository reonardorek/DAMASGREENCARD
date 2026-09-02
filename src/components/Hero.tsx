import React from "react";
import { Globe2, ArrowRight, ShieldCheck, Award, Scale, Lock } from "lucide-react";

interface HeroProps {
  onCtaClick: () => void;
}

const HERO_BG_IMAGE = "https://damaselima.com/wp-content/uploads/2026/08/hero.png";

export default function Hero({ onCtaClick }: HeroProps) {
  return (
    <section
      id="hero"
      className="relative bg-white pt-20 pb-4 sm:pt-36 sm:pb-24 text-[#0B1629] border-b border-gray-200/80 overflow-hidden min-h-[100svh] sm:min-h-[580px] flex flex-col justify-between sm:justify-center items-center"
    >
      {/* Hero Background Image with smoky feathered fade (esfumaceado) matching reference - placed below header */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-x-0 top-[70px] sm:top-0 h-[380px] sm:h-full">
          <img
            src={HERO_BG_IMAGE}
            alt="Damas & Lima Advocacia Internacional"
            referrerPolicy="no-referrer"
            loading="eager"
            decoding="async"
            fetchPriority="high"
            className="w-full h-full object-contain sm:object-cover object-[center_top] filter brightness-[1.02] contrast-[1.03]"
          />

          {/* Efeito Esfumaceado (Multi-directional smooth feathered gradient blend) */}
          <div className="absolute inset-0 bg-white/10" />
          <div className="absolute inset-0 bg-gradient-to-b from-white/15 via-white/50 to-white sm:from-white/20 sm:via-white/40 sm:to-white/85" />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/60 to-transparent sm:from-white/60 sm:via-white/30 sm:to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-transparent to-white/80 sm:from-white/55 via-transparent sm:to-white/55" />
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 text-center flex flex-col justify-between sm:justify-center flex-1 sm:flex-initial h-full py-2 sm:py-0">
        
        {/* Top/Middle Content Wrapper */}
        <div className="flex flex-col items-center justify-center my-auto sm:my-0 pt-4 sm:pt-0">
          {/* Solid Brand Tag Badge - Slim & refined to avoid button confusion */}
          <div className="inline-flex items-center gap-1.5 px-3 sm:px-3.5 py-0.5 sm:py-1 rounded-full bg-[#670008] border border-[#830a15] mb-5 sm:mb-6">
            <Scale className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white/90 shrink-0" />
            <span className="font-sans text-[10px] sm:text-[11px] font-semibold tracking-wider text-white uppercase">
              REALIZE SEU SONHO AMERICANO
            </span>
          </div>

          {/* Main Headline */}
          <div className="space-y-4 max-w-4xl mx-auto">
            <h1 className="font-sans text-[42px] xs:text-[50px] sm:text-5xl md:text-6xl text-[#0B1629] font-extrabold tracking-tight leading-[1.02] sm:leading-[1.12]">
              Seu <span className="whitespace-nowrap">Green Card</span>{" "}
              <span className="text-[#670008] font-sans font-extrabold block mt-0 sm:mt-1">
                começa com a estratégia certa.
              </span>
            </h1>
            
            <p className="font-sans text-base sm:text-base md:text-lg text-gray-700 sm:text-gray-600 max-w-2xl mx-auto font-normal leading-relaxed pt-2 sm:pt-2">
              Existem diferentes caminhos para conquistar seu Green Card. A estratégia correta depende da sua formação, experiência profissional e objetivos nos Estados Unidos.
            </p>
          </div>
        </div>

        {/* Bottom Area: Action CTA positioned safely above the floating WhatsApp icon on mobile, and standard on desktop */}
        <div className="w-full flex flex-col items-center mt-auto sm:mt-0 pt-6 sm:pt-8 pb-14 sm:pb-0">
          <div className="w-full sm:w-auto max-w-[365px] sm:max-w-none mx-auto">
            <button
              onClick={onCtaClick}
              className="animate-pulse-green w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white font-sans text-[13px] sm:text-sm uppercase tracking-wide sm:tracking-wider px-6 sm:px-9 py-4 sm:py-4 rounded-xl font-bold transition-all duration-200 shadow-xl flex items-center justify-center gap-2.5 border border-emerald-500 text-center cursor-pointer active:scale-95"
            >
              <span>QUERO UMA ANÁLISE DO MEU PERFIL</span>
              <ArrowRight className="w-4.5 h-4.5 sm:w-4 sm:h-4 shrink-0" />
            </button>
          </div>

          {/* Reassurance text with lock icon - Thinner, delicate font and slightly further down */}
          <div className="mt-4 sm:mt-3.5 flex items-center justify-center gap-1.5 text-center max-w-sm sm:max-w-md px-2 text-[#475569]">
            <Lock className="w-3.5 h-3.5 text-gray-400 shrink-0 mt-0.5 self-start sm:self-center" />
            <p className="font-sans text-[11px] sm:text-xs text-gray-500 font-normal leading-relaxed">
              Envie seu perfil aos nossos advogados e receba uma análise jurídica especializada em imigração para os Estados Unidos.
            </p>
          </div>

          {/* Trust Highlights Strip (Desktop only, keeping mobile 100% full screen & clean) */}
          <div className="hidden sm:grid pt-8 mt-8 border-t border-gray-200 grid-cols-3 gap-3 max-w-3xl mx-auto text-left w-full">
            <div className="flex items-center gap-3 p-3 sm:p-3.5 rounded-xl bg-white border border-gray-200/90 shadow-sm">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-[#670008] border border-[#93131E] flex items-center justify-center text-white shrink-0">
                <Award className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </div>
              <div>
                <span className="font-sans text-xs font-bold text-[#0B1629] block">+700 Green Cards</span>
                <span className="font-sans text-[11px] text-gray-500 block">Processos aprovados</span>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 sm:p-3.5 rounded-xl bg-white border border-gray-200/90 shadow-sm">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 shrink-0">
                <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600" />
              </div>
              <div>
                <span className="font-sans text-xs font-bold text-[#0B1629] block">Análise Estratégica</span>
                <span className="font-sans text-[11px] text-gray-500 block">Avaliação jurídica real</span>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 sm:p-3.5 rounded-xl bg-white border border-gray-200/90 shadow-sm">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-[#670008] border border-[#93131E] flex items-center justify-center text-white shrink-0">
                <Globe2 className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </div>
              <div>
                <span className="font-sans text-xs font-bold text-[#0B1629] block">100% Online</span>
                <span className="font-sans text-[11px] text-gray-500 block">Brasil e Exterior</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
