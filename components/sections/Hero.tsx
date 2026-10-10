
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

  const ArrowUpRight = () => (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      className="h-[15px] w-[15px] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      aria-hidden="true"
    >
      <path
        d="M5 15L15 5M6 5H15V14"
        stroke="currentColor"
        strokeWidth="1.35"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  return (
    <section
      id="inicio"
      className="relative flex min-h-[100svh] w-full items-end overflow-hidden bg-[#050505] sm:min-h-screen"
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
            className="h-full w-full object-cover object-[58%_center] sm:object-center"
          />
        </motion.div>

        <div className="absolute inset-0 bg-black/20" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_68%_42%,rgba(45,85,255,0.18),transparent_38%)]" />

        <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/80 via-[#050505]/25 to-transparent" />

        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/20 to-transparent" />

        <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-transparent" />

        <div className="absolute -right-[10%] top-[20%] h-[45%] w-[35%] rounded-full bg-blue-500/[0.035] blur-[120px]" />

        {/* CONTRASTE MOBILE */}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,5,5,0.50)_0%,rgba(5,5,5,0.18)_75%,transparent_100%)] sm:hidden" />

        <div className="absolute inset-x-0 bottom-0 h-[72%] bg-gradient-to-t from-[#050505] via-[#050505]/75 to-transparent sm:hidden" />
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
          px-5
          pb-9
          pt-28
          sm:translate-y-8
          sm:px-10
          sm:pb-20
          sm:pt-0
          lg:px-16
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
              text-[clamp(2.8rem,10vw,3.5rem)]
              font-semibold
              leading-[0.88]
              tracking-[-0.065em]
              text-white
              sm:text-[clamp(3.7rem,8vw,7.8rem)]
              sm:leading-[0.84]
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
              mt-4
              max-w-[310px]
              text-[12px]
              leading-[1.65]
              text-white/60
              sm:mt-8
              sm:max-w-[500px]
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
            className="
              mt-6
              flex
              w-full
              flex-col
              items-start
              gap-2.5
              min-[360px]:flex-row
              min-[360px]:flex-wrap
              min-[360px]:items-center
              sm:mt-10
              sm:gap-4
            "
          >
            {/* EXPLORAR MODELOS */}
            <button
              type="button"
              onClick={handleExploreModels}
              className="
                group
                inline-flex
                h-[42px]
                w-full
                max-w-[280px]
                items-center
                justify-between
                gap-3
                rounded-full
                border
                border-white/[0.14]
                bg-black/45
                px-4
                text-[11px]
                font-medium
                text-white
                backdrop-blur-xl
                transition-all
                duration-300
                hover:border-white/[0.25]
                hover:bg-black/60
                min-[360px]:h-[40px]
                min-[360px]:w-auto
                min-[360px]:justify-center
                min-[360px]:px-3.5
                sm:h-[52px]
                sm:gap-5
                sm:px-6
                sm:text-[13px]
              "
            >
              <span className="whitespace-nowrap">Explorar modelos</span>

              <span
                className="
                  flex
                  h-6
                  w-6
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/[0.16]
                  text-white/80
                  transition-all
                  duration-300
                  group-hover:-translate-y-0.5
                  group-hover:translate-x-0.5
                  group-hover:border-white/30
                  group-hover:text-white
                  sm:h-7
                  sm:w-7
                "
              >
                <ArrowUpRight />
              </span>
            </button>

            {/* FALAR COM A VELTA */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="
                group
                inline-flex
                h-[42px]
                w-full
                max-w-[280px]
                items-center
                justify-between
                gap-3
                rounded-full
                border
                border-white/[0.16]
                bg-white/[0.10]
                px-4
                text-[11px]
                font-medium
                text-white/85
                backdrop-blur-xl
                transition-all
                duration-300
                hover:border-white/[0.28]
                hover:bg-white/[0.16]
                hover:text-white
                min-[360px]:h-[40px]
                min-[360px]:w-auto
                min-[360px]:justify-center
                min-[360px]:px-3.5
                sm:h-[52px]
                sm:gap-3
                sm:px-6
                sm:text-[13px]
              "
            >
              <span className="whitespace-nowrap">Falar com a VELTA</span>

              <span className="text-white/65">
                <ArrowUpRight />
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
    </section>
  );
}
