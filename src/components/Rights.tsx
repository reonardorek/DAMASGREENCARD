import React from "react";
import { ShieldCheck, Award, ArrowRight, Globe2, Lock } from "lucide-react";

interface RightsProps {
  onCtaClick: () => void;
}

interface ProofCase {
  id: string;
  tagNum: string;
  category: string;
  badgeLabel: string;
  image: string;
  subtitle: string;
  title: string;
}

export default function Rights({ onCtaClick }: RightsProps) {
  const proofCases: ProofCase[] = [
    {
      id: "case-1",
      tagNum: "#01",
      category: "EB-2 NIW Aprovado",
      badgeLabel: "GREEN CARD APROVADO",
      image: "https://damaselima.com/wp-content/uploads/2026/07/aaa.webp",
      subtitle: "ENGENHARIA & TECNOLOGIA",
      title: "Petição I-140 Aprovada Sem RFE"
    },
    {
      id: "case-2",
      tagNum: "#02",
      category: "EB-2 NIW Saúde",
      badgeLabel: "APROVAÇÃO DIRETA",
      image: "https://damaselima.com/wp-content/uploads/2026/07/aaa.webp",
      subtitle: "ÁREA DA SAÚDE & PESQUISA",
      title: "Médica Cirurgiã e Pesquisadora"
    },
    {
      id: "case-3",
      tagNum: "#03",
      category: "EB-1A / Executivo",
      badgeLabel: "STATUS APROVADO",
      image: "https://damaselima.com/wp-content/uploads/2026/07/aaa.webp",
      subtitle: "EXECUTIVO & EMPREENDEDOR",
      title: "Direito Imigratório Concluído com Sucesso"
    },
    {
      id: "case-4",
      tagNum: "#04",
      category: "EB-2 NIW Negócios",
      badgeLabel: "I-140 APROVADO",
      image: "https://damaselima.com/wp-content/uploads/2026/07/aaa.webp",
      subtitle: "GESTÃO & FINANÇAS",
      title: "Diretor Financeiro com Plano de Negócios Aprovado"
    },
    {
      id: "case-5",
      tagNum: "#05",
      category: "EB-2 NIW TI / Software",
      badgeLabel: "APROVAÇÃO SEM RFE",
      image: "https://damaselima.com/wp-content/uploads/2026/07/aaa.webp",
      subtitle: "TECNOLOGIA DA INFORMAÇÃO",
      title: "Arquiteto de Software e Especialista em IA"
    },
    {
      id: "case-6",
      tagNum: "#06",
      category: "Ajuste de Status",
      badgeLabel: "GREEN CARD EM MÃOS",
      image: "https://damaselima.com/wp-content/uploads/2026/07/aaa.webp",
      subtitle: "PROCESSO FAMILIAR & CONSULAR",
      title: "Família Completa com Residência Permanente"
    }
  ];

  return (
    <section id="cases-provas-sociais" className="py-14 sm:py-24 bg-[#060C18] text-white border-b border-[#152238] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 sm:space-y-4 mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-[#670008] border border-[#93131E] text-white font-mono text-[10px] sm:text-[11px] font-bold uppercase tracking-widest">
            <Award className="w-3.5 h-3.5 text-white shrink-0" />
            <span>RESULTADOS REAIS • HISTÓRIAS REAIS</span>
          </div>

          <h2 className="font-sans text-2xl sm:text-4xl lg:text-5xl text-white font-extrabold tracking-tight leading-tight">
            Veja como pessoas com trajetórias como a sua{" "}
            <span className="font-sans font-extrabold text-white block sm:inline">
              conquistaram o Green Card.
            </span>
          </h2>

          {/* Social Trust Metrics (Hidden on Mobile, Visible on PC) */}
          <div className="pt-3 sm:pt-4 hidden sm:grid sm:grid-cols-3 gap-3 sm:gap-4 max-w-3xl mx-auto">
            <div className="p-3.5 sm:p-4 rounded-xl bg-[#0A1324] border border-[#16233B] text-center space-y-1">
              <div className="font-mono text-2xl sm:text-3xl font-extrabold text-emerald-400">
                +700
              </div>
              <h4 className="font-sans text-xs font-bold text-white uppercase tracking-wider">
                Green Cards
              </h4>
              <p className="font-sans text-[11px] text-gray-400">
                Processos imigratórios conduzidos
              </p>
            </div>

            <div className="p-3.5 sm:p-4 rounded-xl bg-[#0A1324] border border-[#16233B] text-center space-y-1">
              <div className="flex items-center justify-center text-white py-0.5 sm:py-1">
                <Globe2 className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
              </div>
              <h4 className="font-sans text-xs font-bold text-white uppercase tracking-wider">
                Clientes no Brasil e Exterior
              </h4>
              <p className="font-sans text-[11px] text-gray-400">
                Atendimento 100% online
              </p>
            </div>

            <div className="p-3.5 sm:p-4 rounded-xl bg-[#0A1324] border border-[#16233B] text-center space-y-1">
              <div className="flex items-center justify-center text-emerald-400 py-0.5 sm:py-1">
                <ShieldCheck className="w-6 h-6 sm:w-7 sm:h-7 text-emerald-400" />
              </div>
              <h4 className="font-sans text-xs font-bold text-white uppercase tracking-wider">
                Direito Imigratório
              </h4>
              <p className="font-sans text-[11px] text-gray-400">
                Atuação jurídica especializada
              </p>
            </div>
          </div>
        </div>

        {/* Social Proof Prints Grid: 2 per line on mobile, 3 per line on desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 max-w-6xl mx-auto">
          {proofCases.map((proof) => (
            <div
              key={proof.id}
              className="group rounded-xl sm:rounded-2xl bg-[#0A1324] border border-[#16233B] hover:border-wine-500/50 hover:shadow-2xl hover:shadow-wine-950/40 transition-all duration-300 flex flex-col overflow-hidden relative shadow-lg"
            >
              {/* Top Bar Header: Only number and APROVADO badge */}
              <div className="p-2 sm:p-3.5 bg-[#060C18] border-b border-[#16233B] flex items-center justify-between gap-1.5 sm:gap-2 text-white">
                <span className="px-1.5 sm:px-2.5 py-0.5 sm:py-1 rounded-md bg-[#0F1D33] text-[10px] sm:text-[11px] font-mono font-bold text-gray-200 border border-[#1C3154] shrink-0">
                  {proof.tagNum}
                </span>

                <span className="px-2 sm:px-3 py-0.5 sm:py-1 rounded-full bg-[#00E676] text-[#040810] text-[9px] sm:text-[10px] font-sans font-extrabold uppercase tracking-wide shadow-sm shrink-0">
                  APROVADO
                </span>
              </div>

              {/* Center Screenshot Image in pristine framing */}
              <div className="relative w-full bg-[#060C18] p-2 sm:p-4 flex items-center justify-center">
                <div className="w-full rounded-lg sm:rounded-2xl overflow-hidden border border-[#1E293B] shadow-2xl bg-black">
                  <img
                    src={proof.image}
                    alt={proof.title}
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-auto object-cover object-top block transition-transform duration-300 group-hover:scale-[1.01]"
                  />
                </div>
              </div>

              {/* Bottom Card Summary Bar */}
              <div className="p-2.5 sm:p-4 bg-[#060C18] border-t border-[#16233B] text-left space-y-0.5 sm:space-y-1">
                <span className="text-[9px] sm:text-[11px] font-mono text-[#E2B777] font-bold uppercase tracking-wider block truncate">
                  {proof.subtitle}
                </span>
                <h3 className="text-xs sm:text-base font-sans text-white font-bold block leading-snug">
                  {proof.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* CTA underneath social proofs */}
        <div className="mt-10 sm:mt-12 text-center w-full flex flex-col items-center justify-center">
          <button
            onClick={onCtaClick}
            className="animate-pulse-green w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white font-sans text-xs sm:text-sm uppercase tracking-wider px-6 sm:px-8 py-4 rounded-xl font-bold transition-all shadow-xl inline-flex items-center justify-center gap-2 cursor-pointer active:scale-95 border border-emerald-500"
          >
            <span>QUERO UMA ANÁLISE DO MEU PERFIL</span>
            <ArrowRight className="w-4 h-4 shrink-0" />
          </button>
          
          <div className="mt-3.5 flex items-center justify-center gap-2 text-center max-w-lg px-2">
            <Lock className="w-4 h-4 text-gray-400 shrink-0 mt-0.5 self-start sm:self-center" />
            <p className="font-sans text-xs sm:text-sm text-gray-400 font-normal leading-tight sm:leading-normal">
              Envie seu perfil aos nossos advogados e receba uma análise jurídica especializada em imigração para os Estados Unidos.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
