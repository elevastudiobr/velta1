
"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

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

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const revealTransition = (delay = 0) => ({
  duration: 0.8,
  delay,
  ease: [0.22, 1, 0.36, 1] as const,
});

export default function FAQ() {
  const [activeQuestion, setActiveQuestion] = useState<number | null>(0);
  const shouldReduceMotion = useReducedMotion();

  const entrance = (delay = 0) => ({
    initial: shouldReduceMotion ? false : "hidden",
    whileInView: "visible" as const,
    viewport: {
      once: true,
      amount: 0.15,
    },
    variants: fadeUp,
    transition: revealTransition(shouldReduceMotion ? 0 : delay),
  });

  return (
    <section
      id="duvidas"
      className="relative isolate overflow-hidden bg-[#050505] text-white"
    >
      {/* BACKGROUND IMAGE */}
      <motion.div
        className="pointer-events-none absolute inset-0 -z-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/FAQ/FAQ.webp')",
        }}
        initial={
          shouldReduceMotion
            ? false
            : { opacity: 0.65, scale: 1.04 }
        }
        whileInView={{
          opacity: 1,
          scale: 1,
        }}
        viewport={{
          once: true,
          amount: 0.1,
        }}
        transition={{
          duration: shouldReduceMotion ? 0 : 1.5,
          ease: [0.22, 1, 0.36, 1],
        }}
      />

      {/* OVERLAYS */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[#050505]/35" />

      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(5,5,5,0.60)_0%,rgba(5,5,5,0.25)_48%,rgba(5,5,5,0.45)_100%)]" />

      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_75%_30%,rgba(35,72,145,0.12),transparent_55%)]" />

      <div className="pointer-events-none absolute left-0 right-0 top-0 h-32 bg-gradient-to-b from-[#050505]/70 via-[#050505]/25 to-transparent" />

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-36 bg-gradient-to-b from-transparent via-[#050505]/40 to-[#050505]" />

      {/* MAIN CONTENT */}
      <div className="relative mx-auto w-full max-w-[1450px] px-6 py-24 sm:px-10 sm:py-28 lg:px-14 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          {/* INTRODUCTION + GOOGLE MAPS */}
          <div>
            <motion.div
              className="flex items-center gap-4"
              {...entrance(0)}
            >
              <span className="h-px w-7 bg-blue-400/80" />

              <span className="text-[9px] font-medium uppercase tracking-[0.38em] text-white/65">
                Dúvidas frequentes
              </span>
            </motion.div>

            <motion.h2
              className="mt-8 text-[clamp(3rem,5.5vw,5.5rem)] font-light leading-[0.9] tracking-[-0.06em]"
              {...entrance(0.12)}
            >
              Antes de
              <br />
              <span className="text-white/55">escolher.</span>
            </motion.h2>

            <motion.p
              className="mt-7 max-w-[340px] text-sm leading-7 text-white/75"
              {...entrance(0.22)}
            >
              Tudo o que você precisa saber para conhecer melhor a VELTA e
              escolher sua próxima scooter com mais segurança.
            </motion.p>

            {/* GOOGLE MAPS PREVIEW */}
            <motion.div
              className="mt-10 overflow-hidden border border-white/15 bg-[#0b0d12] p-2"
              {...entrance(0.3)}
            >
              <div className="relative h-[190px] overflow-hidden sm:h-[220px]">
                <iframe
                  title="Localização demonstrativa da VELTA no Google Maps"
                  src="https://maps.google.com/maps?width=600&height=400&hl=pt&q=Avenida%20Paulista%2C%20S%C3%A3o%20Paulo%2C%20Brasil&t=&z=14&ie=UTF8&iwloc=B&output=embed"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 h-full w-full border-0 grayscale-[25%]"
                />

                <a
                  href="https://www.google.com/maps/search/?api=1&query=Avenida+Paulista%2C+S%C3%A3o+Paulo"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Abrir Avenida Paulista no Google Maps"
                  className="absolute bottom-3 left-3 inline-flex items-center gap-2 border border-white/20 bg-[#050505]/90 px-3 py-2 text-[9px] uppercase tracking-[0.15em] text-white backdrop-blur-md transition-colors hover:bg-white hover:text-black"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-3.5 w-3.5"
                    aria-hidden="true"
                  >
                    <path
                      d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <circle
                      cx="12"
                      cy="10"
                      r="2.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                  </svg>

                  Ver no Google Maps
                  <span aria-hidden="true">↗</span>
                </a>
              </div>

              <div className="flex items-center justify-between gap-3 px-2 py-3">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.18em] text-white/80">
                    Explore a região
                  </p>

                  <p className="mt-1 text-[10px] text-white/40">
                    São Paulo · Localização ilustrativa
                  </p>
                </div>

                <span className="h-px w-6 shrink-0 bg-blue-400/60" />
              </div>
            </motion.div>

            <motion.div
              className="mt-8 hidden border-t border-white/20 pt-5 lg:block"
              {...entrance(0.4)}
            >
              <div className="flex items-center gap-3">
                <span className="h-px w-5 bg-blue-400/70" />

                <span className="text-[9px] uppercase tracking-[0.3em] text-white/50">
                  VELTA · Electric Mobility
                </span>
              </div>
            </motion.div>
          </div>

          {/* FAQ ACCORDION */}
          <motion.div
            className="border-t border-white/25"
            initial={shouldReduceMotion ? false : "hidden"}
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.1,
            }}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={revealTransition(
              shouldReduceMotion ? 0 : 0.15
            )}
          >
            {questions.map((item, index) => {
              const isOpen = activeQuestion === index;

              return (
                <motion.div
                  key={item.question}
                  className="border-b border-white/20"
                  initial={
                    shouldReduceMotion
                      ? false
                      : { opacity: 0, y: 14 }
                  }
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.1,
                  }}
                  transition={{
                    duration: shouldReduceMotion ? 0 : 0.65,
                    delay: shouldReduceMotion
                      ? 0
                      : Math.min(index * 0.07, 0.35),
                    ease: [0.22, 1, 0.36, 1],
                  }}
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
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* BOTTOM SIGNATURE */}
        <motion.div
          className="mt-16 flex flex-col gap-4 border-t border-white/20 pt-6 sm:flex-row sm:items-center sm:justify-between"
          {...entrance(0.15)}
        >
          <p className="text-xs leading-5 text-white/65">
            Sua próxima escolha começa com informação.
          </p>

          <div className="flex items-center gap-3">
            <span className="h-px w-5 bg-blue-400/70" />

            <span className="text-[8px] uppercase tracking-[0.3em] text-white/50">
              VELTA · Electric Mobility
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}