
"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const whatsappUrl =
    "https://wa.me/5519992728449?text=Ol%C3%A1%21%20Tenho%20interesse%20em%20conhecer%20a%20VELTA.";

  const fadeUp = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 28,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const handleExploreModels = () => {
    const section =
      document.getElementById("modelos") ||
      document.getElementById("modelo-1");

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section
      id="inicio"
      className="relative flex min-h-screen w-full items-end overflow-hidden bg-[#050505]"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0"
          initial={
            shouldReduceMotion
              ? { opacity: 1, scale: 1 }
              : { opacity: 0, scale: 1.035 }
          }
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: shouldReduceMotion ? 0 : 1.6,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <img
            src="/images/hero/hero-scooter.webp"
            alt="Scooter elétrica VELTA"
            className="h-full w-full object-cover object-center"
          />
        </motion.div>

        <div className="absolute inset-0 bg-black/20" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_68%_42%,rgba(45,85,255,0.18),transparent_38%)]" />

        <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/80 via-[#050505]/25 to-transparent" />

        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/20 to-transparent" />

        <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-transparent" />

        <div className="absolute -right-[10%] top-[20%] h-[45%] w-[35%] rounded-full bg-blue-500/[0.035] blur-[120px]" />
      </div>

      {/* HERO CONTENT */}
      <div
        className="
          relative
          z-10
          mx-auto
          flex
          w-full
          max-w-[1400px]
          translate-y-8
          px-6
          pb-16
          sm:px-10
          sm:pb-20
          lg:px-16
          lg:pb-20
        "
      >
        <div className="w-full max-w-[780px]">
          {/* TITLE */}
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{
              duration: shouldReduceMotion ? 0 : 1,
              delay: shouldReduceMotion ? 0 : 0.25,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              text-[clamp(3.7rem,8vw,7.8rem)]
              font-semibold
              leading-[0.84]
              tracking-[-0.065em]
              text-white
            "
          >
            O futuro
            <br />
            se move
            <br />
            <span className="text-white/40">diferente.</span>
          </motion.h1>

          {/* DESCRIPTION */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{
              duration: shouldReduceMotion ? 0 : 0.85,
              delay: shouldReduceMotion ? 0 : 0.48,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              mt-8
              max-w-[500px]
              text-sm
              leading-6
              text-white/55
              sm:text-[15px]
              sm:leading-6
            "
          >
            Mobilidade elétrica criada para transformar a forma como você
            movimenta a sua vida.
          </motion.p>

          {/* CTA AREA */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{
              duration: shouldReduceMotion ? 0 : 0.85,
              delay: shouldReduceMotion ? 0 : 0.68,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            {/* EXPLORAR MODELOS */}
            <button
              type="button"
              onClick={handleExploreModels}
              className="
                group
                flex
                h-[52px]
                items-center
                gap-5
                rounded-full
                border
                border-white/[0.14]
                bg-black/45
                px-6
                text-[13px]
                font-medium
                text-white
                backdrop-blur-xl
                transition-all
                duration-300
                hover:border-white/[0.25]
                hover:bg-black/60
              "
            >
              <span>Explorar modelos</span>

              <span
                className="
                  flex
                  h-7
                  w-7
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/[0.16]
                  text-[14px]
                  text-white/80
                  transition-all
                  duration-300
                  group-hover:-translate-y-0.5
                  group-hover:translate-x-0.5
                  group-hover:border-white/30
                  group-hover:text-white
                "
              >
                ↗
              </span>
            </button>

            {/* FALAR COM A VELTA */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="
                group
                flex
                h-[52px]
                items-center
                gap-3
                rounded-full
                border
                border-white/[0.16]
                bg-white/[0.10]
                px-6
                text-[13px]
                font-medium
                text-white/80
                backdrop-blur-xl
                transition-all
                duration-300
                hover:border-white/[0.28]
                hover:bg-white/[0.16]
                hover:text-white
              "
            >
              <span>Falar com a VELTA</span>

              <span
                className="
                  text-[15px]
                  text-white/65
                  transition-all
                  duration-300
                  group-hover:-translate-y-0.5
                  group-hover:translate-x-0.5
                  group-hover:text-white
                "
              >
                ↗
              </span>
            </a>
          </motion.div>
        </div>
      </div>

      {/* DECORATIVE LIGHT */}
      <div
        className="
          pointer-events-none
          absolute
          bottom-[9%]
          right-[-5%]
          hidden
          h-px
          w-[35%]
          bg-gradient-to-r
          from-transparent
          via-white/[0.08]
          to-transparent
          lg:block
        "
      />

      {/* MOBILE IMAGE CONTRAST */}
      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          bottom-0
          h-[35%]
          bg-gradient-to-t
          from-[#050505]
          to-transparent
          sm:hidden
        "
      />
    </section>
  );
}