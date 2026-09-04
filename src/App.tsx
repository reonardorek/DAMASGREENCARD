import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Identification from "./components/Identification";
import HowItWorks from "./components/HowItWorks";
import About from "./components/About";
import Rights from "./components/Rights";
import Faqs from "./components/Faqs";
import FinalCta from "./components/FinalCta";
import Footer from "./components/Footer";
import WhatsAppIcon from "./components/WhatsAppIcon";
import LegalModal, { LegalDocType } from "./components/LegalModal";

export default function App() {
  const [legalModalType, setLegalModalType] = useState<LegalDocType>(null);

  // Clear any persistent hash from previous sessions so the modal never opens automatically on reload
  useEffect(() => {
    if (
      window.location.hash === "#privacidade" ||
      window.location.hash === "#privacy" ||
      window.location.hash === "#termos" ||
      window.location.hash === "#terms"
    ) {
      window.history.replaceState(
        null,
        "",
        window.location.pathname + window.location.search
      );
    }
  }, []);

  const handleCloseLegal = () => {
    setLegalModalType(null);
    if (window.location.hash) {
      window.history.replaceState(
        null,
        "",
        window.location.pathname + window.location.search
      );
    }
  };

  const handleCtaClick = () => {
    window.open(
      "https://wa.me/556199012555?text=Ol%C3%A1!%20Gostaria%20de%20uma%20an%C3%A1lise%20jur%C3%ADdica%20do%20meu%20perfil%20para%20o%20Green%20Card.",
      "_blank"
    );
  };

  return (
    <div className="relative min-h-screen bg-[#FAF8F5] overflow-x-hidden selection:bg-[#670008] selection:text-white">
      {/* Dynamic persistent floating WhatsApp quick contact */}
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 block">
        <a
          href="https://wa.me/556199012555?text=Ol%C3%A1!%20Gostaria%20de%20uma%20an%C3%A1lise%20jur%C3%ADdica%20do%20meu%20perfil%20para%20o%20Green%20Card."
          target="_blank"
          rel="noreferrer"
          aria-label="Contatar no WhatsApp"
          className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-full shadow-[0_4px_20px_rgba(37,211,102,0.4)] transition-all duration-300 hover:scale-105 active:scale-95 border-2 border-white/20"
        >
          <WhatsAppIcon className="w-6 h-6 sm:w-7 sm:h-7 fill-current" />
        </a>
      </div>

      {/* Main Navigation Header */}
      <Header />

      {/* [SEÇÃO 01 — HERO] */}
      <Hero onCtaClick={handleCtaClick} />

      {/* [SEÇÃO 02 — SEU PROJETO DE VIDA NOS EUA / IDENTIFICAÇÃO] */}
      <Identification onCtaClick={handleCtaClick} />

      {/* [SEÇÃO 03 — COMO FUNCIONA A ANÁLISE DO SEU GREEN CARD] */}
      <HowItWorks onCtaClick={handleCtaClick} />

      {/* [SEÇÃO 04 — ESPECIALISTA / AUTORIDADE — DAMAS & LIMA ADVOCACIA] */}
      <About />

      {/* [SEÇÃO 05 — PROVA SOCIAL / CASES REAIS] */}
      <Rights onCtaClick={handleCtaClick} />

      {/* [SEÇÃO 06 — FAQ — PERGUNTAS FREQUENTES] */}
      <Faqs />

      {/* [SEÇÃO 07 — CTA FINAL] */}
      <FinalCta onCtaClick={handleCtaClick} />

      {/* RODAPÉ */}
      <Footer onOpenLegal={(type) => setLegalModalType(type)} />

      {/* MODAL DE POLÍTICA DE PRIVACIDADE E TERMOS DE USO */}
      <LegalModal
        type={legalModalType}
        onClose={handleCloseLegal}
        onSwitchType={(type) => setLegalModalType(type)}
      />
    </div>
  );
}

