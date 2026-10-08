"use client";

const clients = [
  {
    number: "01",
    image: "/images/clients/client-01.webp",
    title: "Uma nova escolha.",
    text: "Conheceu a VELTA, encontrou seu modelo e saiu de scooter nova.",
  },
  {
    number: "02",
    image: "/images/clients/client-02.webp",
    title: "A escolha certa.",
    text: "Uma experiência simples, próxima e feita para encontrar o modelo ideal.",
  },
  {
    number: "03",
    image: "/images/clients/client-03.webp",
    title: "Pronta para a jornada.",
    text: "Venda concluída. Agora começa uma nova forma de se movimentar.",
  },
];

export default function Technology() {
  return (
    <section
      id="tecnologia"
      className="relative overflow-hidden bg-[#050505] text-white"
    >
      {/* =========================================================
          AMBIENT LIGHT
      ========================================================= */}

      <div className="pointer-events-none absolute left-[-15%] top-[20%] h-[400px] w-[400px] rounded-full bg-blue-600/[0.035] blur-[150px]" />

      <div className="pointer-events-none absolute bottom-[-20%] right-[-10%] h-[400px] w-[400px] rounded-full bg-blue-600/[0.025] blur-[150px]" />

      {/* =========================================================
          CONTENT
      ========================================================= */}

      <div className="relative mx-auto w-full max-w-[1450px] px-6 py-24 sm:px-10 sm:py-28 lg:px-14 lg:py-32">
        {/* =======================================================
            HEADER
        ======================================================= */}

        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div>
            <div className="flex items-center gap-4">
              <span className="h-px w-7 bg-white/40" />

              <span className="text-[9px] font-medium uppercase tracking-[0.38em] text-white/40">
                Clientes VELTA
              </span>
            </div>

            <h2 className="mt-7 text-[clamp(2.8rem,5vw,5rem)] font-light leading-[0.92] tracking-[-0.06em]">
              Quem escolhe
              <br />
              <span className="text-white/35">a VELTA.</span>
            </h2>
          </div>

          <p className="max-w-[360px] text-xs leading-5 text-white/35 lg:mb-1">
            Experiências reais de quem decidiu conhecer uma nova forma de
            mobilidade.
          </p>
        </div>

        {/* =======================================================
            CLIENTS GRID
        ======================================================= */}

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3 lg:gap-6">
          {clients.map((client) => (
            <article key={client.number} className="group">
              {/* =================================================
                  IMAGE
              ================================================= */}

              <div className="relative aspect-[4/5] overflow-hidden bg-[#0b0b0b]">
                <img
                  src={client.image}
                  alt={`Cliente VELTA - ${client.number}`}
                  className="h-full w-full object-cover object-center transition-transform duration-[1200ms] ease-out group-hover:scale-[1.025]"
                />

                {/* subtle dark overlay */}

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/5 opacity-80" />

                {/* image number */}

                <div className="absolute left-5 top-5">
                  <span className="text-[8px] font-medium tracking-[0.3em] text-white/55">
                    {client.number}
                  </span>
                </div>

                {/* bottom line */}

                <div className="absolute bottom-5 left-5 right-5 flex items-center gap-3">
                  <span className="h-px w-6 bg-white/50 transition-all duration-500 group-hover:w-10" />

                  <span className="text-[8px] font-medium uppercase tracking-[0.3em] text-white/55">
                    Experiência VELTA
                  </span>
                </div>
              </div>

              {/* =================================================
                  TEXT
              ================================================= */}

              <div className="pt-5">
                <h3 className="text-lg font-light tracking-[-0.025em] text-white/85">
                  {client.title}
                </h3>

                <p className="mt-2 max-w-[320px] text-[11px] leading-5 text-white/30">
                  {client.text}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* =======================================================
            BOTTOM LINE
        ======================================================= */}

        <div className="mt-16 border-t border-white/[0.08] pt-6 lg:mt-20">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-[11px] text-white/30">
              Uma nova forma de se mover começa com uma escolha.
            </p>

            <div className="flex items-center gap-3">
              <span className="h-px w-5 bg-blue-500/60" />

              <span className="text-[8px] uppercase tracking-[0.3em] text-white/25">
                VELTA · Electric Mobility
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================
          TRANSITION
      ========================================================= */}

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#050505] to-transparent" />
    </section>
  );
}