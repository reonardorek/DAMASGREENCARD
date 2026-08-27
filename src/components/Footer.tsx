import React from "react";
import { Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer
      id="main-app-footer"
      className="bg-[#060C18] border-t border-[#152238] text-white pt-16 pb-12 block"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Section: 3 Columns matching exact design */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-8 pb-10 text-left">
          
          {/* Column 1: Brand & Description (5 cols) */}
          <div className="md:col-span-5 space-y-3">
            <h3 className="font-sans text-lg sm:text-xl font-extrabold text-white tracking-tight">
              Damas & Lima
            </h3>
            <p className="font-sans text-xs sm:text-[13px] text-gray-400 font-normal leading-relaxed max-w-sm">
              Assessoria jurídica especializada em imigração para os Estados Unidos. Transformando o sonho americano em realidade com segurança e legalidade.
            </p>
          </div>

          {/* Column 2: Links Rápidos (4 cols) */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-sans text-xs uppercase tracking-wider font-bold text-gray-300">
              Links Rápidos
            </h4>
            <ul className="space-y-2 font-sans text-xs sm:text-[13px] text-gray-400">
              <li>
                <button
                  onClick={() => scrollTo("como-funciona")}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Como Funciona
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo("sobre")}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Sobre Nós
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo("cases-provas-sociais")}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Resultados
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo("faq")}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Dúvidas Frequentes
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Redes Sociais (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-sans text-xs uppercase tracking-wider font-bold text-gray-300">
              Redes Sociais
            </h4>
            <div className="flex items-center gap-2.5 pt-0.5">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/damaselima.usa/"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white hover:bg-gray-100 text-[#08101E] flex items-center justify-center transition-transform hover:scale-105 shadow-sm active:scale-95"
                aria-label="Instagram Damas & Lima"
              >
                <Instagram className="w-4 h-4 stroke-[2.2]" />
              </a>

              {/* LinkedIn */}
              <a
                href="https://br.linkedin.com/company/damas-lima-consultoria-juridica"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white hover:bg-gray-100 text-[#08101E] flex items-center justify-center transition-transform hover:scale-105 shadow-md active:scale-95"
                aria-label="LinkedIn Damas & Lima"
              >
                <Linkedin className="w-4 h-4 fill-current" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Section: Divider & Legal Information */}
        <div className="pt-6 border-t border-[#172640] space-y-2 text-left text-[11px] sm:text-xs text-gray-500 font-sans">
          <p>© 2026 Damas & Lima. Todos os direitos reservados.</p>
          <div className="flex items-center gap-5 pt-0.5 text-gray-400 text-[11px] sm:text-xs">
            <a href="#privacidade" className="hover:text-gray-200 transition-colors">
              Política de Privacidade
            </a>
            <a href="#termos" className="hover:text-gray-200 transition-colors">
              Termos de Uso
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
