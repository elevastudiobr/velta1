"use client";

export default function HowToBuy() {
  const handleContact = () => {
    // Direciona para a seção de contato quando ela existir.
    const section = document.getElementById("contato");

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section
      id="como-comprar"
      className="relative isolate min-h-screen overflow-hidden bg-[#050505] text-white"
    >
      {/* =========================================================
          BACKGROUND IMAGE
      ========================================================= */}

      <div className="absolute inset-0 -z-30">
        <img
          src="/images/how-to-buy/front-scooter.webp"
          alt=""
          className="h-full w-full object-cover object-center"
        />
      </div>

      {/* =========================================================
          DARK OVERLAYS
      ========================================================= */}

      <div className="absolute inset-0 -z-20 bg-[linear-gradient(90deg,rgba(5,5,5,0.98)_0%,rgba(5,5,5,0.84)_28%,rgba(5,5,5,0.30)_58%,rgba(5,5,5,0.56)_100%)]" />

      <div className="absolute inset-0 -z-20 bg-[linear-gradient(180deg,rgba(5,5,5,0.88)_0%,rgba(5,5,5,0.18)_32%,rgba(5,5,5,0.20)_62%,rgba(5,5,5,0.98)_100%)]" />

      {/* =========================================================
          SUBTLE BLUE ATMOSPHERE
      ========================================================= */}

      <div className="pointer-events-none absolute left-1/2 top-[45%] -z-10 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/[0.035] blur-[170px]" />

      {/* =========================================================
          MAIN WRAPPER
      ========================================================= */}

      <div className="relative mx-auto flex min-h-screen w-full max-w-[1600px] flex-col px-6 py-28 sm:px-10 sm:py-32 lg:px-14 lg:py-36">
        {/* =======================================================
            TOP LABEL
        ======================================================= */}

        <div className="flex items-center gap-4">
          <span className="h-px w-8 bg-white/40" />

          <span className="text-[10px] font-medium uppercase tracking-[0.38em] text-white/40">
            Como comprar
          </span>
        </div>

        {/* =======================================================
            MAIN INTRO
        ======================================================= */}

        <div className="mt-20 max-w-[650px]">
          <h2 className="text-[clamp(3.2rem,6.5vw,6.5rem)] font-light leading-[0.9] tracking-[-0.06em] text-white">
            Do primeiro
            <br />
            contato à
            <br />
            <span className="text-white/35">sua VELTA.</span>
          </h2>

          <p className="mt-8 max-w-[500px] text-sm leading-7 text-white/50 sm:text-[15px]">
            Conheça nossos modelos pessoalmente, entenda as diferenças entre
            cada scooter e escolha a opção que mais combina com sua rotina.
            Depois da escolha, conte com a opção de entrega para receber sua
            VELTA.
          </p>

          {/* =====================================================
              CTA
          ===================================================== */}

          <button
            type="button"
            onClick={handleContact}
            className="group mt-9 inline-flex items-center gap-6 rounded-full border border-white/15 bg-white/[0.06] px-6 py-3.5 text-[12px] font-medium tracking-wide text-white backdrop-blur-xl transition-all duration-500 hover:border-white/30 hover:bg-white/[0.11]"
          >
            <span>Falar com a VELTA</span>

            <span className="text-base font-light text-white/40 transition-all duration-500 group-hover:translate-x-1 group-hover:text-white">
              →
            </span>
          </button>
        </div>

        {/* =======================================================
            JOURNEY
        ======================================================= */}

        <div className="mt-auto pt-28">
          {/* =====================================================
              DESKTOP
          ===================================================== */}

          <div className="hidden md:block">
            <div className="relative">
              {/* Linha principal */}

              <div className="absolute left-0 right-0 top-[5px] h-px bg-white/[0.16]" />

              <div className="grid grid-cols-3">
                {/* =================================================
                    01 — VISITE
                ================================================= */}

                <div className="relative pr-12">
                  {/* Ponto */}

                  <div className="relative z-10 h-[11px] w-[11px] rounded-full border border-white/50 bg-[#050505]" />

                  {/* Conteúdo */}

                  <div className="mt-8">
                    <p className="text-[9px] font-medium uppercase tracking-[0.35em] text-white/30">
                      01 — Visite
                    </p>

                    <h3 className="mt-3 text-xl font-light leading-tight tracking-[-0.02em] text-white">
                      Conheça de perto.
                    </h3>

                    <p className="mt-3 max-w-[290px] text-xs leading-5 text-white/35">
                      Veja os modelos pessoalmente e conheça os detalhes de cada
                      scooter.
                    </p>
                  </div>
                </div>

                {/* =================================================
                    02 — ESCOLHA
                ================================================= */}

                <div className="relative border-l border-white/[0.10] px-12">
                  {/* Ponto */}

                  <div className="absolute -left-[6px] top-0 z-10 h-[11px] w-[11px] rounded-full border border-white/50 bg-[#050505]" />

                  {/* Conteúdo */}

                  <div className="mt-8">
                    <p className="text-[9px] font-medium uppercase tracking-[0.35em] text-white/30">
                      02 — Escolha
                    </p>

                    <h3 className="mt-3 text-xl font-light leading-tight tracking-[-0.02em] text-white">
                      Encontre seu modelo.
                    </h3>

                    <p className="mt-3 max-w-[290px] text-xs leading-5 text-white/35">
                      Compare as opções e escolha a VELTA que mais combina com
                      sua rotina.
                    </p>
                  </div>
                </div>

                {/* =================================================
                    03 — RECEBA
                ================================================= */}

                <div className="relative border-l border-white/[0.10] pl-12">
                  {/* Ponto */}

                  <div className="absolute -left-[6px] top-0 z-10 h-[11px] w-[11px] rounded-full border border-white/50 bg-[#050505]" />

                  {/* Conteúdo */}

                  <div className="mt-8">
                    <p className="text-[9px] font-medium uppercase tracking-[0.35em] text-white/30">
                      03 — Receba
                    </p>

                    <h3 className="mt-3 text-xl font-light leading-tight tracking-[-0.02em] text-white">
                      Sua VELTA até você.
                    </h3>

                    <p className="mt-3 max-w-[290px] text-xs leading-5 text-white/35">
                      Depois da escolha, conte com a opção de entrega da sua
                      scooter.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* =====================================================
              MOBILE
          ===================================================== */}

          <div className="space-y-8 md:hidden">
            {/* 01 */}

            <div className="border-t border-white/[0.12] pt-6">
              <p className="text-[9px] font-medium uppercase tracking-[0.35em] text-white/30">
                01 — Visite
              </p>

              <h3 className="mt-3 text-xl font-light leading-tight text-white">
                Conheça de perto.
              </h3>

              <p className="mt-3 max-w-[320px] text-xs leading-5 text-white/35">
                Veja os modelos pessoalmente e conheça os detalhes de cada
                scooter.
              </p>
            </div>

            {/* 02 */}

            <div className="border-t border-white/[0.12] pt-6">
              <p className="text-[9px] font-medium uppercase tracking-[0.35em] text-white/30">
                02 — Escolha
              </p>

              <h3 className="mt-3 text-xl font-light leading-tight text-white">
                Encontre seu modelo.
              </h3>

              <p className="mt-3 max-w-[320px] text-xs leading-5 text-white/35">
                Compare as opções e escolha a VELTA que mais combina com sua
                rotina.
              </p>
            </div>

            {/* 03 */}

            <div className="border-t border-white/[0.12] pt-6">
              <p className="text-[9px] font-medium uppercase tracking-[0.35em] text-white/30">
                03 — Receba
              </p>

              <h3 className="mt-3 text-xl font-light leading-tight text-white">
                Sua VELTA até você.
              </h3>

              <p className="mt-3 max-w-[320px] text-xs leading-5 text-white/35">
                Depois da escolha, conte com a opção de entrega da sua scooter.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================
          VIGNETTE
      ========================================================= */}

      <div className="pointer-events-none absolute inset-0 -z-10 shadow-[inset_0_0_200px_rgba(0,0,0,0.75)]" />

      {/* =========================================================
          BOTTOM FADE
      ========================================================= */}

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050505] to-transparent" />
    </section>
  );
}