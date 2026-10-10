"use client";

import { motion, useReducedMotion } from "framer-motion";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 28,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const revealTransition = (delay = 0) => ({
  duration: 0.9,
  delay,
  ease: [0.22, 1, 0.36, 1] as const,
});

export default function CTA() {
  const shouldReduceMotion = useReducedMotion();

  const whatsappUrl =
    "https://wa.me/5519992728449?text=Ol%C3%A1%21%20Tenho%20interesse%20em%20conhecer%20a%20VELTA.";

  const entrance = (delay = 0) => ({
    initial: shouldReduceMotion ? false : "hidden",
    whileInView: "visible" as const,
    viewport: {
      once: true,
      amount: 0.2,
    },
    variants: fadeUp,
    transition: revealTransition(shouldReduceMotion ? 0 : delay),
  });

  return (
    <section
      id="contato"
      className="relative isolate flex min-h-[680px] items-center overflow-hidden bg-[#050505] text-white sm:min-h-[740px] lg:min-h-[820px]"
    >
      {/* BACKGROUND IMAGE */}

      <motion.div
        className="pointer-events-none absolute inset-0 -z-30 bg-cover bg-[center_60%] bg-no-repeat sm:bg-center"
        style={{
          backgroundImage: "url('/images/cta/cta.webp')",
        }}
        initial={
          shouldReduceMotion
            ? false
            : { opacity: 0.65, scale: 1.05 }
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
          duration: shouldReduceMotion ? 0 : 1.6,
          ease: [0.22, 1, 0.36, 1],
        }}
      />

      {/* DARK OVERLAY */}

      <div className="pointer-events-none absolute inset-0 -z-20 bg-[#050505]/40" />

      {/* LEFT-TO-RIGHT GRADIENT */}

      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(5,5,5,0.92)_0%,rgba(5,5,5,0.78)_30%,rgba(5,5,5,0.40)_60%,rgba(5,5,5,0.20)_100%)]" />

      {/* TOP TRANSITION */}

      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#050505] via-[#050505]/45 to-transparent" />

      {/* BOTTOM TRANSITION */}

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-b from-transparent via-[#050505]/45 to-[#050505]" />

      {/* SUBTLE BLUE ATMOSPHERE */}

      <div className="pointer-events-none absolute right-[-10%] top-[20%] -z-10 h-[420px] w-[420px] rounded-full bg-blue-700/[0.08] blur-[150px]" />

      {/* MAIN CONTENT */}

      <div className="relative mx-auto w-full max-w-[1450px] px-6 py-32 sm:px-10 sm:py-36 lg:px-14 lg:py-40">
        <div className="max-w-[690px]">
          {/* EYEBROW */}

          <motion.div
            className="flex items-center gap-4"
            {...entrance(0)}
          >
            <span className="h-px w-8 bg-blue-300/80" />

            <span className="text-[9px] font-medium uppercase tracking-[0.38em] text-white/65 sm:text-[10px]">
              Sua próxima jornada
            </span>
          </motion.div>

          {/* HEADLINE */}

          <motion.h2
            className="mt-8 text-[clamp(3.4rem,7.2vw,7rem)] font-light leading-[0.88] tracking-[-0.065em]"
            {...entrance(0.12)}
          >
            Seu próximo
            <br />
            caminho
            <br />
            <span className="text-white/50">começa aqui.</span>
          </motion.h2>

          {/* DESCRIPTION */}

          <motion.p
            className="mt-8 max-w-[430px] text-sm leading-7 text-white/75 sm:text-base sm:leading-8"
            {...entrance(0.24)}
          >
            Conheça os modelos VELTA, descubra suas diferenças e encontre a
            scooter que combina com a sua rotina.
          </motion.p>

          {/* CTA BUTTON */}

          <motion.div
            className="mt-10"
            {...entrance(0.36)}
          >
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex min-h-[54px] items-center justify-center gap-8 rounded-full border border-white/25 bg-white/[0.08] px-6 py-4 text-xs font-medium tracking-wide text-white backdrop-blur-md transition-all duration-300 hover:border-white/50 hover:bg-white/[0.15]"
            >
              <span>Falar com a VELTA</span>

              <svg
                viewBox="0 0 20 20"
                fill="none"
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              >
                <path
                  d="M4 10H16M10 4L16 10L10 16"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </motion.div>

          {/* SIGNATURE */}

          <motion.div
            className="mt-14 flex items-center gap-4"
            {...entrance(0.48)}
          >
            <span className="h-px w-8 bg-white/30" />

            <span className="text-[9px] uppercase tracking-[0.28em] text-white/50">
              Mobilidade elétrica. Novas possibilidades.
            </span>
          </motion.div>
        </div>
      </div>

      {/* BOTTOM BRAND SIGNATURE */}

      <motion.div
        className="pointer-events-none absolute bottom-12 left-6 right-6 flex items-center justify-between sm:left-10 sm:right-10 lg:left-14 lg:right-14"
        initial={shouldReduceMotion ? false : { opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: shouldReduceMotion ? 0 : 1,
          delay: shouldReduceMotion ? 0 : 0.6,
        }}
      >
        <span className="text-[8px] uppercase tracking-[0.3em] text-white/40">
          VELTA
        </span>

        <span className="hidden text-[8px] uppercase tracking-[0.3em] text-white/40 sm:block">
          Electric Mobility
        </span>
      </motion.div>
    </section>
  );
}