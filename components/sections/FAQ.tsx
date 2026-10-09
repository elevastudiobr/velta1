"use client";

import { useState } from "react";

const questions = [
  {
    question: "Como posso conhecer as scooters pessoalmente?",
    answer:
      "Você pode visitar a loja da VELTA para conhecer os modelos de perto, conferir os detalhes e conversar com nossa equipe antes de escolher sua scooter.",
  },
  {
    question: "Como escolher o modelo ideal para minha rotina?",
    answer:
      "Nossa equipe pode apresentar os modelos disponíveis e ajudar você a comparar suas características para encontrar a opção mais adequada às suas necessidades.",
  },
  {
    question: "A VELTA oferece entrega?",
    answer:
      "Existe a opção de entrega. Entre em contato com a equipe para confirmar as condições e a disponibilidade para sua região.",
  },
  {
    question: "Qual é a autonomia de uma scooter elétrica?",
    answer:
      "A autonomia varia de acordo com o modelo e as condições de uso. Consulte as especificações de cada scooter para entender qual atende melhor à sua rotina.",
  },
  {
    question: "Como funciona a velocidade das scooters?",
    answer:
      "Cada modelo possui características próprias de desempenho. Consulte a seção de modelos e converse com a equipe para esclarecer suas dúvidas.",
  },
  {
    question: "Como faço para comprar uma scooter VELTA?",
    answer:
      "Você pode entrar em contato com a equipe ou visitar a loja, conhecer os modelos disponíveis, tirar suas dúvidas e receber orientação durante a compra.",
  },
  {
    question: "Quais são os preços e as formas de pagamento?",
    answer:
      "Entre em contato diretamente com a VELTA para consultar os preços atualizados, as formas de pagamento e as condições disponíveis para cada modelo.",
  },
];

export default function FAQ() {
  const [activeQuestion, setActiveQuestion] = useState<number | null>(0);

  return (
    <section
      id="duvidas"
      className="relative isolate overflow-hidden bg-[#050505] text-white"
    >
      {/* =====================================================
          BACKGROUND IMAGE
      ===================================================== */}

      <div
        className="pointer-events-none absolute inset-0 -z-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/FAQ/FAQ.webp')",
        }}
      />

      {/* Soft dark overlay — increased image visibility */}

      <div className="pointer-events-none absolute inset-0 -z-10 bg-[#050505]/35" />

      {/* Cinematic contrast without hiding the image */}

      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(5,5,5,0.60)_0%,rgba(5,5,5,0.25)_48%,rgba(5,5,5,0.45)_100%)]" />

      {/* Subtle blue atmosphere */}

      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_75%_30%,rgba(35,72,145,0.12),transparent_55%)]" />

      {/* Top transition */}

      <div className="pointer-events-none absolute left-0 right-0 top-0 h-32 bg-gradient-to-b from-[#050505]/70 via-[#050505]/25 to-transparent" />

      {/* Bottom transition */}

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-36 bg-gradient-to-b from-transparent via-[#050505]/40 to-[#050505]" />

      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

      <div className="relative mx-auto w-full max-w-[1450px] px-6 py-24 sm:px-10 sm:py-28 lg:px-14 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          {/* INTRODUCTION */}

          <div>
            <div className="flex items-center gap-4">
              <span className="h-px w-7 bg-blue-400/80" />

              <span className="text-[9px] font-medium uppercase tracking-[0.38em] text-white/65">
                Dúvidas frequentes
              </span>
            </div>

            <h2 className="mt-8 text-[clamp(3rem,5.5vw,5.5rem)] font-light leading-[0.9] tracking-[-0.06em]">
              Antes de
              <br />
              <span className="text-white/55">escolher.</span>
            </h2>

            <p className="mt-7 max-w-[340px] text-sm leading-7 text-white/75">
              Tudo o que você precisa saber para conhecer melhor a VELTA e
              escolher sua próxima scooter com mais segurança.
            </p>

            <div className="mt-10 hidden border-t border-white/20 pt-5 lg:block">
              <div className="flex items-center gap-3">
                <span className="h-px w-5 bg-blue-400/70" />

                <span className="text-[9px] uppercase tracking-[0.3em] text-white/50">
                  VELTA · Electric Mobility
                </span>
              </div>
            </div>
          </div>

          {/* FAQ ACCORDION */}

          <div className="border-t border-white/25">
            {questions.map((item, index) => {
              const isOpen = activeQuestion === index;

              return (
                <div
                  key={item.question}
                  className="border-b border-white/20"
                >
                  {/* QUESTION */}

                  <button
                    type="button"
                    onClick={() =>
                      setActiveQuestion(isOpen ? null : index)
                    }
                    aria-expanded={isOpen}
                    className="group flex w-full items-center justify-between gap-5 py-6 text-left sm:py-7"
                  >
                    <div className="flex items-start gap-5 sm:gap-7">
                      <span
                        className={`mt-1 text-[9px] tracking-[0.2em] transition-colors duration-300 ${
                          isOpen
                            ? "text-blue-200"
                            : "text-white/55 group-hover:text-white/85"
                        }`}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span
                        className={`text-sm leading-6 transition-colors duration-300 sm:text-base ${
                          isOpen
                            ? "text-white"
                            : "text-white/85 group-hover:text-white"
                        }`}
                      >
                        {item.question}
                      </span>
                    </div>

                    {/* EXPAND ICON */}

                    <span
                      className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                        isOpen
                          ? "rotate-45 border-blue-300/60 text-blue-200"
                          : "border-white/30 text-white/70 group-hover:border-white/60 group-hover:text-white"
                      }`}
                    >
                      <svg
                        viewBox="0 0 20 20"
                        fill="none"
                        className="h-3 w-3"
                        aria-hidden="true"
                      >
                        <path
                          d="M10 4V16M4 10H16"
                          stroke="currentColor"
                          strokeWidth="1.2"
                          strokeLinecap="round"
                        />
                      </svg>
                    </span>
                  </button>

                  {/* ANSWER */}

                  <div
                    className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="max-w-[560px] pb-7 pl-10 text-xs leading-6 text-white/75 sm:pl-[52px] sm:text-sm">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* BOTTOM SIGNATURE */}

        <div className="mt-16 flex flex-col gap-4 border-t border-white/20 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs leading-5 text-white/65">
            Sua próxima escolha começa com informação.
          </p>

          <div className="flex items-center gap-3">
            <span className="h-px w-5 bg-blue-400/70" />

            <span className="text-[8px] uppercase tracking-[0.3em] text-white/50">
              VELTA · Electric Mobility
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}