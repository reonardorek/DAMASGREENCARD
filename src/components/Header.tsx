import React, { useState, useEffect } from "react";
import WhatsAppIcon from "./WhatsAppIcon";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      id="main-navigation-header"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md border-b border-gray-200/60 py-2.5 shadow-sm"
          : "bg-white py-3.5 border-b border-gray-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center sm:justify-between">
          
          {/* Logo Brand Link */}
          <div
            className="flex items-center gap-2.5 sm:gap-3 cursor-pointer group"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <img
              src="https://damaselima.com/wp-content/uploads/2026/06/dl-internacional-brasao.png"
              alt="Damas & Lima Advocacia Internacional"
              referrerPolicy="no-referrer"
              loading="eager"
              decoding="async"
              fetchPriority="high"
              width="48"
              height="48"
              className="h-10 sm:h-12 w-auto object-contain transition-transform group-hover:scale-105"
            />
            <div className="text-left">
              <span className="font-sans text-base sm:text-xl font-bold tracking-tight text-[#0B1629] block leading-tight">
                Damas & Lima
              </span>
              <span className="font-sans text-[9px] sm:text-[10px] uppercase tracking-widest text-gray-500 font-semibold block">
                Advocacia Internacional
              </span>
            </div>
          </div>

          {/* Nav Actions (Desktop only - Hidden on Mobile) */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="https://wa.me/556199012555?text=Ol%C3%A1!%20Gostaria%20de%20fazer%20uma%20an%C3%A1lise%20do%20meu%20perfil%20para%20o%20Green%20Card."
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 bg-[#25D366] hover:bg-[#20ba5a] text-white font-sans text-xs uppercase tracking-wider px-4 py-2.5 rounded-xl font-bold transition-all shadow-md active:scale-95 border border-white/20"
            >
              <WhatsAppIcon className="w-4 h-4 fill-current" />
              <span>WhatsApp</span>
            </a>
          </div>

        </div>
      </div>
    </header>
  );
}
