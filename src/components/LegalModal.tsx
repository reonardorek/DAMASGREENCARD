import React, { useEffect } from "react";
import { X, ShieldCheck, FileText, Lock } from "lucide-react";

export type LegalDocType = "privacy" | "terms" | null;

interface LegalModalProps {
  type: LegalDocType;
  onClose: () => void;
  onSwitchType: (type: LegalDocType) => void;
}

export default function LegalModal({ type, onClose, onSwitchType }: LegalModalProps) {
  useEffect(() => {
    if (!type) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [type, onClose]);

  if (!type) return null;

  return (
    <div
      id="legal-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-sm animate-fade-in"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="legal-modal-title"
    >
      <div className="relative w-full max-w-3xl max-h-[90vh] bg-[#0B1629] text-gray-200 border border-[#172F56] rounded-2xl shadow-2xl flex flex-col overflow-hidden">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between px-5 sm:px-7 py-4 border-b border-[#172F56] bg-[#08101E]">
          <div className="flex items-center gap-2.5">
            {type === "privacy" ? (
              <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6 text-[#DE7580]" />
            ) : (
              <FileText className="w-5 h-5 sm:w-6 sm:h-6 text-[#DE7580]" />
            )}
            <h2 id="legal-modal-title" className="text-base sm:text-lg font-bold text-white font-sans">
              {type === "privacy" ? "Política de Privacidade" : "Termos de Uso"}
            </h2>
          </div>

          <div className="flex items-center gap-3">
            {/* Quick Switch Button */}
            <button
              onClick={() => onSwitchType(type === "privacy" ? "terms" : "privacy")}
              className="text-xs text-gray-400 hover:text-white underline underline-offset-4 transition-colors hidden sm:block"
            >
              {type === "privacy" ? "Ver Termos de Uso" : "Ver Política de Privacidade"}
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Fechar"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Tabs for Mobile */}
        <div className="flex sm:hidden border-b border-[#172F56] bg-[#040810]">
          <button
            onClick={() => onSwitchType("privacy")}
            className={`flex-1 py-2.5 text-xs font-semibold text-center transition-colors ${
              type === "privacy"
                ? "text-white border-b-2 border-[#DE7580] bg-white/5"
                : "text-gray-400 hover:text-gray-200"
            }`}
          >
            Privacidade
          </button>
          <button
            onClick={() => onSwitchType("terms")}
            className={`flex-1 py-2.5 text-xs font-semibold text-center transition-colors ${
              type === "terms"
                ? "text-white border-b-2 border-[#DE7580] bg-white/5"
                : "text-gray-400 hover:text-gray-200"
            }`}
          >
            Termos de Uso
          </button>
        </div>

        {/* Modal Body (Scrollable) */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-8 space-y-6 text-xs sm:text-sm text-gray-300 leading-relaxed font-sans scrollbar-thin scrollbar-thumb-gray-700">
          {type === "privacy" ? (
            <>
              <div>
                <p className="text-gray-400 text-[11px] sm:text-xs">
                  Última atualização: 2 de Setembro de 2026
                </p>
                <p className="mt-2 font-medium text-white">
                  A <strong>Damas & Lima Advocacia</strong> (CNPJ 48.591.653/0001–19) valoriza e preza pela privacidade, sigilo profissional e proteção dos dados pessoais de todos os seus clientes e visitantes, em estrita conformidade com a Lei Geral de Proteção de Dados Pessoais (Lei nº 13.709/2018 - LGPD).
                </p>
              </div>

              <section className="space-y-2">
                <h3 className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
                  <span className="text-[#DE7580]">1.</span> Informações Coletadas
                </h3>
                <p>
                  Coletamos apenas os dados necessários para o atendimento inicial e análise preliminar de elegibilidade para vistos imigratórios norte-americanos (EB-2 NIW, EB-1, entre outros), tais como:
                </p>
                <ul className="list-disc list-inside space-y-1 pl-2 text-gray-300">
                  <li>Nome completo;</li>
                  <li>Número de telefone / WhatsApp;</li>
                  <li>Endereço de e-mail;</li>
                  <li>Formação acadêmica, área profissional e tempo de experiência (fornecidos voluntariamente no formulário de contato ou currículo).</li>
                </ul>
              </section>

              <section className="space-y-2">
                <h3 className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
                  <span className="text-[#DE7580]">2.</span> Finalidade do Tratamento dos Dados
                </h3>
                <p>Os dados coletados são utilizados exclusivamente para:</p>
                <ul className="list-disc list-inside space-y-1 pl-2 text-gray-300">
                  <li>Realização do contato e pré-avaliação do perfil imigratório;</li>
                  <li>Agendamento de reuniões e consultas jurídicas estratégicas;</li>
                  <li>Envio de informações personalizadas sobre os serviços solicitados;</li>
                  <li>Cumprimento de obrigações legais, regulatórias e normas éticas da OAB.</li>
                </ul>
              </section>

              <section className="space-y-2">
                <h3 className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
                  <span className="text-[#DE7580]">3.</span> Sigilo Profissional e Não Compartilhamento
                </h3>
                <p>
                  Todas as informações e documentos compartilhados estão sob rigoroso sigilo profissional da advocacia. A Damas & Lima <strong>não vende, não aluga e não comercializa</strong> dados pessoais a terceiros.
                </p>
              </section>

              <section className="space-y-2">
                <h3 className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
                  <span className="text-[#DE7580]">4.</span> Segurança e Armazenamento
                </h3>
                <p>
                  Adotamos medidas técnicas e organizacionais adequadas de segurança cibernética e criptografia para proteger os dados pessoais contra acessos não autorizados, extravios ou destruição.
                </p>
              </section>

              <section className="space-y-2">
                <h3 className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
                  <span className="text-[#DE7580]">5.</span> Seus Direitos (LGPD)
                </h3>
                <p>
                  Você pode, a qualquer momento, solicitar a confirmação, o acesso, a retificação ou a exclusão dos seus dados pessoais de nossas bases de atendimento através de nossos canais oficiais de comunicação.
                </p>
              </section>
            </>
          ) : (
            <>
              <div>
                <p className="text-gray-400 text-[11px] sm:text-xs">
                  Última atualização: 2 de Setembro de 2026
                </p>
                <p className="mt-2 font-medium text-white">
                  Bem-vindo ao site institucional da <strong>Damas & Lima Advocacia</strong> (CNPJ 48.591.653/0001–19). Ao acessar e utilizar este site, você concorda com os termos e condições descritos a seguir.
                </p>
              </div>

              <section className="space-y-2">
                <h3 className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
                  <span className="text-[#DE7580]">1.</span> Natureza das Informações
                </h3>
                <p>
                  O conteúdo deste site tem caráter exclusivamente informativo e institucional sobre direito imigratório e processos de visto para os Estados Unidos. O acesso ao material ou envio de formulário preliminar <strong>não constitui nem substitui consulta jurídica formal</strong>, a qual se aperfeiçoa mediante celebração de contrato de honorários advocatícios e análise aprofundada dos documentos comprobatórios.
                </p>
              </section>

              <section className="space-y-2">
                <h3 className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
                  <span className="text-[#DE7580]">2.</span> Avaliação de Perfil e Resultados
                </h3>
                <p>
                  Processos perante o USCIS (Serviço de Cidadania e Imigração dos EUA) e demais órgãos governamentais são pautados pela análise de mérito caso a caso. Nenhuma informação veiculada neste site constitui garantia de aprovação ou promessa de resultado, resguardando-se a atuação técnica, ética e diligente de nossos advogados.
                </p>
              </section>

              <section className="space-y-2">
                <h3 className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
                  <span className="text-[#DE7580]">3.</span> Propriedade Intelectual
                </h3>
                <p>
                  Todos os textos, logotipos, marcas, layout e materiais presentes neste site são de titularidade da Damas & Lima Advocacia ou de seus respectivos parceiros, sendo vedada a reprodução ou uso não autorizado sem consentimento prévio por escrito.
                </p>
              </section>

              <section className="space-y-2">
                <h3 className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
                  <span className="text-[#DE7580]">4.</span> Canais de Atendimento
                </h3>
                <p>
                  Dúvidas e solicitações de atendimento oficial podem ser encaminhadas através do WhatsApp oficial da banca ou pelos canais de contato disponibilizados nesta página.
                </p>
              </section>

              <section className="space-y-2">
                <h3 className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
                  <span className="text-[#DE7580]">5.</span> Foro Competente
                </h3>
                <p>
                  Estes Termos de Uso são regidos pelas leis da República Federativa do Brasil e pelas normas éticas da Ordem dos Advogados do Brasil.
                </p>
              </section>
            </>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-5 sm:px-7 py-3.5 border-t border-[#172F56] bg-[#08101E] flex items-center justify-between">
          <div className="flex items-center gap-2 text-[11px] text-gray-400">
            <Lock className="w-3.5 h-3.5 text-[#DE7580]" />
            <span>Dados protegidos com criptografia</span>
          </div>

          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-[#670008] hover:bg-[#7A0A13] text-white text-xs sm:text-sm font-semibold rounded-lg transition-colors"
          >
            Entendido
          </button>
        </div>

      </div>
    </div>
  );
}
