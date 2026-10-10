"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

export default function Experience() {
  const [activeImage, setActiveImage] = useState<"store" | "team">("store");
  const shouldReduceMotion = useReducedMotion();

  const fadeUp = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 24,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const revealTransition = (delay: number) => ({
    duration: shouldReduceMotion ? 0 : 0.8,
    delay: shouldReduceMotion ? 0 : delay,
    ease: [0.22, 1, 0.36, 1] as const,
  });

  const storeActive = activeImage === "store";
  const teamActive = activeImage === "team";

  const imageBaseClass = `
    absolute
    overflow-hidden
    rounded-[30px]
    border
    border-white/[0.10]
    bg-[#0a0a0a]
    text-left
    shadow-[0_30px_80px_rgba(0,0,0,0.50)]
    transition-all
    duration-700
    ease-[cubic-bezier(0.22,1,0.36,1)]
  `;

  const activeImageClass = `
    right-0
    top-0
    z-10
    h-[380px]
    w-[90%]
    sm:h-[470px]
    lg:h-[540px]
    lg:w-[88%]
  `;

  const inactiveImageClass = `
    left-0
    bottom-[3%]
    z-20
    h-[210px]
    w-[46%]
    sm:h-[270px]
    sm:w-[45%]
    lg:h-[300px]
    lg:w-[44%]
  `;

  return (
    <section
      id="experiencia"
      className="
        relative
        w-full
        overflow-hidden
        bg-[#05060b]
        text-white
      "
    >
      {/* BACKGROUND */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[#05060b]" />

        <div
          className="
            absolute
            -left-[15%]
            top-[20%]
            h-[650px]
            w-[650px]
            rounded-full
            bg-blue-600/[0.045]
            blur-[160px]
          "
        />

        <div
          className="
            absolute
            right-[5%]
            top-[25%]
            h-[600px]
            w-[600px]
            rounded-full
            bg-blue-500/[0.055]
            blur-[180px]
          "
        />

        <div
          className="
            absolute
            left-[45%]
            top-[-25%]
            h-[500px]
            w-[500px]
            rounded-full
            bg-indigo-500/[0.025]
            blur-[150px]
          "
        />

        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(circle_at_65%_50%,rgba(50,80,255,0.055),transparent_38%)]
          "
        />

        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(circle_at_center,transparent_35%,rgba(0,0,0,0.38)_100%)]
          "
        />

        <div
          className="
            absolute
            left-0
            right-0
            top-[18%]
            h-px
            bg-gradient-to-r
            from-transparent
            via-white/[0.025]
            to-transparent
          "
        />

        <div
          className="
            absolute
            inset-0
            opacity-[0.025]
            [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)]
            [background-size:80px_80px]
          "
        />
      </div>

      {/* CONTENT */}

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-[760px]
          w-full
          max-w-[1500px]
          items-center
          px-6
          py-24
          sm:px-10
          sm:py-28
          lg:min-h-[860px]
          lg:px-16
          lg:py-32
        "
      >
        <div
          className="
            grid
            w-full
            grid-cols-1
            items-center
            gap-16
            lg:grid-cols-[0.85fr_1.15fr]
            lg:gap-16
          "
        >
          {/* TEXT */}

          <div className="relative z-30 max-w-[560px]">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={revealTransition(0.1)}
              className="flex items-center gap-4"
            >
              <span className="h-px w-8 bg-white/20" />

              <span
                className="
                  text-[9px]
                  font-medium
                  uppercase
                  tracking-[0.4em]
                  text-white/35
                "
              >
                A VELTA
              </span>
            </motion.div>

            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={revealTransition(0.2)}
              className="
                mt-6
                text-[clamp(3.5rem,7vw,6.5rem)]
                font-semibold
                leading-[0.84]
                tracking-[-0.07em]
                text-white
              "
            >
              Conheça
              <br />
              <span className="text-white/40">a VELTA.</span>
            </motion.h2>

            <div className="mt-8 max-w-[500px] space-y-5">
              <motion.p
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                transition={revealTransition(0.32)}
                className="text-sm leading-7 text-white/60 sm:text-[15px]"
              >
                A VELTA nasceu para tornar a mobilidade elétrica mais simples,
                acessível e conectada com a vida real.
              </motion.p>

              <motion.p
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                transition={revealTransition(0.42)}
                className="text-sm leading-7 text-white/40 sm:text-[15px]"
              >
                Mais do que vender scooters, queremos oferecer uma nova forma
                de se movimentar. Por isso, reunimos tecnologia, design e
                praticidade em modelos pensados para diferentes momentos da
                sua rotina.
              </motion.p>

              <motion.p
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                transition={revealTransition(0.52)}
                className="text-sm leading-7 text-white/40 sm:text-[15px]"
              >
                Na nossa loja, você pode conhecer os modelos de perto,
                entender suas características e conversar diretamente com
                nossa equipe para encontrar a opção que mais combina com você.
              </motion.p>
            </div>

            {/* KEYWORDS */}

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={revealTransition(0.62)}
              className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3"
            >
              <span
                className="
                  text-[9px]
                  font-medium
                  uppercase
                  tracking-[0.3em]
                  text-white/25
                "
              >
                Mobilidade elétrica
              </span>

              <span className="h-1 w-1 rounded-full bg-white/20" />

              <span
                className="
                  text-[9px]
                  font-medium
                  uppercase
                  tracking-[0.3em]
                  text-white/25
                "
              >
                Tecnologia
              </span>

              <span className="h-1 w-1 rounded-full bg-white/20" />

              <span
                className="
                  text-[9px]
                  font-medium
                  uppercase
                  tracking-[0.3em]
                  text-white/25
                "
              >
                Design
              </span>
            </motion.div>
          </div>

          {/* IMAGES */}

          <motion.div
            initial={
              shouldReduceMotion
                ? { opacity: 1, x: 0 }
                : { opacity: 0, x: 36 }
            }
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: shouldReduceMotion ? 0 : 1,
              delay: shouldReduceMotion ? 0 : 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              relative
              mx-auto
              h-[500px]
              w-full
              max-w-[760px]
              sm:h-[580px]
              lg:h-[640px]
            "
          >
            {/* Central glow */}

            <div
              className="
                pointer-events-none
                absolute
                left-1/2
                top-1/2
                h-[75%]
                w-[75%]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-blue-500/[0.045]
                blur-[150px]
              "
            />

            {/* STORE */}

            <button
              type="button"
              onClick={() => setActiveImage("store")}
              aria-label="Mostrar foto da loja"
              aria-pressed={storeActive}
              className={`
                ${imageBaseClass}
                ${storeActive ? activeImageClass : inactiveImageClass}
              `}
            >
              <img
                src="/images/store/velta-store.webp"
                alt="Loja VELTA"
                className="
                  h-full
                  w-full
                  object-cover
                  object-center
                  transition-transform
                  duration-[1200ms]
                  ease-out
                  hover:scale-[1.025]
                "
              />

              <div
                className={`
                  pointer-events-none
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black/55
                  via-transparent
                  to-transparent
                  transition-opacity
                  duration-700
                  ${storeActive ? "opacity-100" : "opacity-35"}
                `}
              />

              <div
                className={`
                  absolute
                  bottom-6
                  left-6
                  flex
                  items-center
                  gap-3
                  transition-all
                  duration-500
                  sm:bottom-8
                  sm:left-8
                  ${
                    storeActive
                      ? "translate-y-0 opacity-100"
                      : "translate-y-2 opacity-0"
                  }
                `}
              >
                <span className="h-px w-7 bg-white/60" />

                <span
                  className="
                    text-[9px]
                    font-medium
                    uppercase
                    tracking-[0.3em]
                    text-white/75
                  "
                >
                  Nossa loja
                </span>
              </div>
            </button>

            {/* TEAM */}

            <button
              type="button"
              onClick={() => setActiveImage("team")}
              aria-label="Mostrar foto da equipe"
              aria-pressed={teamActive}
              className={`
                ${imageBaseClass}
                ${teamActive ? activeImageClass : inactiveImageClass}
              `}
            >
              <img
                src="/images/store/velta-team.webp"
                alt="Equipe VELTA"
                className="
                  h-full
                  w-full
                  object-cover
                  object-center
                  transition-transform
                  duration-[1200ms]
                  ease-out
                  hover:scale-[1.025]
                "
              />

              <div
                className={`
                  pointer-events-none
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black/55
                  via-transparent
                  to-transparent
                  transition-opacity
                  duration-700
                  ${teamActive ? "opacity-100" : "opacity-35"}
                `}
              />

              <div
                className={`
                  absolute
                  bottom-6
                  left-6
                  flex
                  items-center
                  gap-3
                  transition-all
                  duration-500
                  sm:bottom-8
                  sm:left-8
                  ${
                    teamActive
                      ? "translate-y-0 opacity-100"
                      : "translate-y-2 opacity-0"
                  }
                `}
              >
                <span className="h-px w-7 bg-white/60" />

                <span
                  className="
                    text-[9px]
                    font-medium
                    uppercase
                    tracking-[0.3em]
                    text-white/75
                  "
                >
                  Nossa equipe
                </span>
              </div>
            </button>
          </motion.div>
        </div>
      </div>

      {/* BOTTOM LINE */}

      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-0
          h-px
          w-full
          bg-gradient-to-r
          from-transparent
          via-white/[0.08]
          to-transparent
        "
      />
    </section>
  );
}