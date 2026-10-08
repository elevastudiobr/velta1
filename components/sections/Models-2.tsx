import AnimatedStat from "@/components/ui/AnimatedStat";

export default function Models2() {
  return (
    <section
      id="modelo-2"
      className="relative min-h-screen w-full overflow-hidden bg-[#050505]"
    >
      {/* =========================================================
          BACKGROUND
      ========================================================= */}

      <div className="absolute inset-0">
        <img
          src="/images/models/velta-x.webp"
          alt="VELTA X"
          className="
            absolute
            inset-0
            h-full
            w-full
            object-cover
            object-center
          "
        />

        <div className="absolute inset-0 bg-black/10" />

        {/* Gradient principal */}

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-l
            from-[#050505]
            via-[#050505]/75
            to-transparent
          "
        />

        {/* Gradient lateral */}

        <div
          className="
            absolute
            inset-y-0
            right-0
            w-[55%]
            bg-gradient-to-l
            from-[#050505]
            via-[#050505]/55
            to-transparent
          "
        />

        {/* Gradient superior */}

        <div
          className="
            absolute
            inset-x-0
            top-0
            h-[30%]
            bg-gradient-to-b
            from-[#050505]/80
            to-transparent
          "
        />

        {/* Gradient inferior */}

        <div
          className="
            absolute
            inset-x-0
            bottom-0
            h-[30%]
            bg-gradient-to-t
            from-[#050505]
            to-transparent
          "
        />

        {/* Atmosfera azul */}

        <div
          className="
            absolute
            right-[35%]
            top-[45%]
            h-[460px]
            w-[460px]
            translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-blue-600/[0.05]
            blur-[150px]
          "
        />
      </div>

      {/* =========================================================
          CONTENT
      ========================================================= */}

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
          px-6
          sm:px-10
          lg:px-16
        "
      >
        <div className="flex flex-1 items-center justify-end">
          <div
            className="
              w-full
              max-w-[500px]
              pb-24
              lg:mr-[3%]
              lg:text-right
            "
          >
            {/* Number + Category */}

            <div className="flex items-center gap-4 lg:justify-end">
              <span className="text-[10px] font-medium tracking-[0.4em] text-white/30">
                02
              </span>

              <span className="h-px w-8 bg-white/10" />

              <span className="text-[9px] font-medium uppercase tracking-[0.4em] text-white/30">
                Performance
              </span>
            </div>

            {/* Name */}

            <h2
              className="
                mt-5
                text-[clamp(4rem,7vw,7rem)]
                font-semibold
                leading-[0.82]
                tracking-[-0.07em]
                text-white
              "
            >
              VELTA
              <br />
              <span className="text-white/40">
                X
              </span>
            </h2>

            {/* Description */}

            <p
              className="
                mt-8
                ml-auto
                max-w-[390px]
                text-sm
                leading-6
                text-white/50
                sm:text-[15px]
              "
            >
              Mais potência, mais presença e uma nova experiência de
              mobilidade. Criada para quem quer ir além do convencional.
            </p>

            {/* Specs */}

            <div className="mt-10 flex items-center justify-start gap-8 lg:justify-end">
              <AnimatedStat
                value={80}
                suffix=" km"
                label="Autonomia"
              />

              <div className="h-9 w-px bg-white/10" />

              <AnimatedStat
                value={55}
                suffix=" km/h"
                label="Velocidade"
              />
            </div>

            {/* CTA */}

            <div className="mt-10 lg:flex lg:justify-end">
              <a
                href="#contato"
                className="
                  group
                  inline-flex
                  h-[54px]
                  items-center
                  gap-4
                  rounded-full
                  border
                  border-white/[0.14]
                  bg-white/[0.055]
                  pl-6
                  pr-6
                  text-[12px]
                  font-medium
                  text-white
                  backdrop-blur-xl
                  transition-all
                  duration-500
                  hover:border-white/[0.28]
                  hover:bg-white/[0.10]
                "
              >
                <span>
                  Conhecer a VELTA X
                </span>

                <span
                  className="
                    text-[18px]
                    leading-none
                    text-white/60
                    transition-all
                    duration-500
                    group-hover:translate-x-1
                    group-hover:text-white
                  "
                >
                  ↗
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================
          DECORATIVE NUMBER
      ========================================================= */}

      {/* Bottom line */}

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