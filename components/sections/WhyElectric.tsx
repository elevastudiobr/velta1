"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function WhyElectric() {
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

  const benefits = [
    {
      number: "01",
      title: "Economia",
      description:
        "Uma alternativa eficiente para reduzir os gastos dos seus deslocamentos no dia a dia.",
    },
    {
      number: "02",
      title: "Agilidade",
      description:
        "Compacta e ágil, feita para tornar os trajetos pela cidade mais simples e práticos.",
    },
    {
      number: "03",
      title: "Liberdade",
      description:
        "Vá e volte no seu ritmo, com uma mobilidade que acompanha a sua rotina e os seus planos.",
    },
    {
      number: "04",
      title: "Elétrica",
      description:
        "Uma experiência de mobilidade diferente, silenciosa e alinhada com uma nova maneira de pensar a cidade.",
    },
  ];

  return (
    <section
      id="por-que-eletrica"
      className="
        relative
        min-h-screen
        w-full
        overflow-hidden
        bg-[#050505]
        text-white
      "
    >
      {/* BACKGROUND */}

      <div className="pointer-events-none absolute inset-0">
        <motion.img
          src="/images/why-electric/why-electric.webp"
          alt=""
          initial={
            shouldReduceMotion
              ? { opacity: 1, scale: 1 }
              : { opacity: 0, scale: 1.035 }
          }
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: shouldReduceMotion ? 0 : 1.5,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            absolute
            inset-0
            h-full
            w-full
            object-cover
            object-center
          "
        />

        {/* Escurecimento geral */}
        <div className="absolute inset-0 bg-black/45" />

        {/* Proteção para o conteúdo */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-r
            from-[#050505]
            via-[#050505]/75
            to-[#050505]/15
          "
        />

        {/* Escurecimento inferior */}
        <div
          className="
            absolute
            inset-x-0
            bottom-0
            h-[45%]
            bg-gradient-to-t
            from-[#050505]
            via-[#050505]/45
            to-transparent
          "
        />

        {/* Escurecimento superior */}
        <div
          className="
            absolute
            inset-x-0
            top-0
            h-[25%]
            bg-gradient-to-b
            from-[#050505]/80
            to-transparent
          "
        />

        {/* Luz azul sutil */}
        <div
          className="
            absolute
            right-[10%]
            top-[30%]
            h-[500px]
            w-[500px]
            rounded-full
            bg-blue-600/[0.08]
            blur-[180px]
          "
        />

        {/* Vinheta */}
        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(circle_at_center,transparent_25%,rgba(0,0,0,0.48)_100%)]
          "
        />

        {/* Linha horizontal */}
        <div
          className="
            absolute
            left-0
            right-0
            top-[16%]
            h-px
            bg-gradient-to-r
            from-transparent
            via-white/[0.08]
            to-transparent
          "
        />
      </div>

      {/* CONTEÚDO */}

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-screen
          w-full
          max-w-[1500px]
          flex-col
          justify-between
          px-6
          py-28
          sm:px-10
          sm:py-32
          lg:px-16
          lg:py-36
        "
      >
        {/* TOPO */}

        <div className="max-w-[760px]">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            transition={revealTransition(0.1)}
            className="flex items-center gap-4"
          >
            <span className="h-px w-8 bg-white/25" />

            <span
              className="
                text-[9px]
                font-medium
                uppercase
                tracking-[0.42em]
                text-white/45
              "
            >
              Por que elétrica?
            </span>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            transition={revealTransition(0.22)}
            className="
              mt-7
              text-[clamp(3.8rem,8vw,7.8rem)]
              font-semibold
              leading-[0.82]
              tracking-[-0.075em]
              text-white
            "
          >
            Uma nova forma
            <br />
            <span className="text-white/45">de se mover.</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            transition={revealTransition(0.34)}
            className="
              mt-8
              max-w-[520px]
              text-sm
              leading-7
              text-white/60
              sm:text-[15px]
            "
          >
            Mais liberdade, mais praticidade e uma experiência diferente para
            os deslocamentos que fazem parte da sua rotina.
          </motion.p>
        </div>

        {/* BENEFÍCIOS */}

        <div className="mt-24 max-w-[980px] sm:mt-28 lg:mt-20">
          {benefits.map((benefit, index) => {
            const isLast = index === benefits.length - 1;

            return (
              <motion.div
                key={benefit.number}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={revealTransition(0.12 + index * 0.12)}
                className={`
                  group
                  relative
                  border-t
                  border-white/[0.12]
                  py-8
                  transition-all
                  duration-500
                  sm:py-9
                  ${isLast ? "border-b" : ""}
                `}
              >
                <div
                  className="
                    grid
                    grid-cols-[45px_1fr]
                    gap-5
                    sm:grid-cols-[70px_240px_1fr]
                    sm:gap-8
                  "
                >
                  <span
                    className="
                      pt-1
                      text-[10px]
                      font-medium
                      tracking-[0.25em]
                      text-white/30
                    "
                  >
                    {benefit.number}
                  </span>

                  <h3
                    className="
                      text-[clamp(1.8rem,3vw,3rem)]
                      font-medium
                      leading-none
                      tracking-[-0.05em]
                      text-white
                      transition-transform
                      duration-500
                      group-hover:translate-x-2
                    "
                  >
                    {benefit.title}
                  </h3>

                  <p
                    className="
                      col-start-2
                      max-w-[400px]
                      text-sm
                      leading-6
                      text-white/45
                      transition-colors
                      duration-500
                      group-hover:text-white/65
                      sm:col-start-3
                      sm:pt-1
                    "
                  >
                    {benefit.description}
                  </p>
                </div>

                {/* Linha azul no hover */}
                <div
                  className="
                    absolute
                    bottom-0
                    left-0
                    h-px
                    w-0
                    bg-blue-400/70
                    transition-all
                    duration-700
                    group-hover:w-[28%]
                  "
                />
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* LINHA FINAL */}

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
          via-white/[0.10]
          to-transparent
        "
      />
    </section>
  );
}