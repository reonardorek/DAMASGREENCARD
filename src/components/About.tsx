import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface LawyerProfile {
  id: string;
  name: string;
  imageUrl: string;
}

const LAWYERS: LawyerProfile[] = [
  {
    id: "dr-luis",
    name: "Dr. Luis Guilherme",
    imageUrl: "https://damaselima.com/wp-content/uploads/2026/01/Dr.-Luis-Guilherme_bx.jpeg"
  },
  {
    id: "dr-edson",
    name: "Dr. Edson Damas",
    imageUrl: "https://damaselima.com/wp-content/uploads/2026/01/Dr.-Edson-Damas_bx.jpeg"
  },
  {
    id: "dr-mario",
    name: "Dr. Mario Azevedo",
    imageUrl: "https://damaselima.com/wp-content/uploads/2025/12/advogado-fina.jpg"
  }
];

export default function About() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-cycle carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % LAWYERS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + LAWYERS.length) % LAWYERS.length);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % LAWYERS.length);
  };

  const activeLawyer = LAWYERS[currentSlide];

  return (
    <section id="sobre" className="py-14 sm:py-24 bg-[#060C18] text-white border-b border-[#152238] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 2-Column Side-by-Side Layout Matching Screenshot */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          
          {/* Left Column: Photo Carousel (5 cols) */}
          <div className="lg:col-span-5 max-w-sm sm:max-w-md mx-auto w-full">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-[#0A1324] border border-[#16233B] shadow-2xl aspect-[4/5] sm:aspect-square flex items-end group">
              
              {/* Lawyer Image */}
              <img
                key={activeLawyer.id}
                src={activeLawyer.imageUrl}
                alt={activeLawyer.name}
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
                className="absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-700 ease-in-out"
              />

              {/* Bottom Dark Gradient Fade */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#060C18] via-[#060C18]/30 to-transparent pointer-events-none" />

              {/* Minimal Name centered at the bottom of the card */}
              <div className="relative z-10 w-full p-4 sm:p-6 text-center">
                <h3 className="font-sans text-lg sm:text-2xl font-bold text-white tracking-tight drop-shadow-md">
                  {activeLawyer.name}
                </h3>
              </div>

              {/* Left / Right Carousel Controls */}
              <button
                onClick={prevSlide}
                className="absolute left-2.5 sm:left-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#060C18]/80 hover:bg-[#670008] border border-[#16233B] text-white flex items-center justify-center transition-all cursor-pointer shadow-lg active:scale-95 opacity-80 group-hover:opacity-100"
                aria-label="Anterior"
              >
                <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-2.5 sm:right-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#060C18]/80 hover:bg-[#670008] border border-[#16233B] text-white flex items-center justify-center transition-all cursor-pointer shadow-lg active:scale-95 opacity-80 group-hover:opacity-100"
                aria-label="Próximo"
              >
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>

            </div>

            {/* 3 Minimal Carousel Dots */}
            <div className="flex items-center justify-center gap-2 pt-4 sm:pt-5">
              {LAWYERS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`rounded-full transition-all duration-300 cursor-pointer ${
                    idx === currentSlide
                      ? "w-6 h-2 bg-white"
                      : "w-2 h-2 bg-gray-600 hover:bg-gray-400"
                  }`}
                  aria-label={`Slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Right Column: Ultra-Concise Institutional Text (7 cols) */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-5 text-left">
            <span className="font-sans text-[11px] sm:text-xs uppercase tracking-[0.25em] text-gray-300 font-bold block">
              SOBRE NÓS
            </span>

            <h2 className="font-sans text-2xl sm:text-3xl lg:text-4xl text-white font-extrabold tracking-tight leading-[1.2]">
              Raízes no Brasil, estrutura nos EUA, foco no seu futuro.
            </h2>

            <div className="font-sans text-sm sm:text-base text-gray-300 font-light leading-relaxed">
              <p>
                A <strong className="font-bold text-white">Damas & Lima</strong> une experiência em direito imigratório internacional e atendimento humanizado para conduzir seu processo aos Estados Unidos com máxima segurança, clareza e legalidade.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
