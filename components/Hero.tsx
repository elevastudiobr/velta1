export default function Hero() {
    return (
      <section
        id="inicio"
        className="relative flex min-h-screen w-full items-end overflow-hidden bg-[#050505] pt-32"
      >
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_45%,rgba(52,95,255,0.12),transparent_35%)]" />
  
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black" />
        </div>
  
        {/* Scooter Image */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative h-[70vh] w-[90%] max-w-[1200px]">
            <img
              src="/images/hero/hero-scooter.webp"
              alt="Scooter elétrica VELTA"
              className="h-full w-full object-contain object-center"
            />
  
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_45%,#050505_100%)]" />
          </div>
        </div>
  
        {/* Content */}
        <div className="relative z-10 mx-auto flex w-full max-w-[1400px] flex-col px-6 pb-14 sm:px-10 lg:px-16 lg:pb-16">
          <div className="max-w-[720px]">
            <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.35em] text-white/45">
              Mobilidade elétrica
            </p>
  
            <h1 className="text-[clamp(3.4rem,8vw,7.5rem)] font-medium leading-[0.88] tracking-[-0.055em] text-white">
              O futuro
              <br />
              se move
              <br />
              <span className="text-white/45">diferente.</span>
            </h1>
  
            <p className="mt-7 max-w-[470px] text-sm leading-6 text-white/55 sm:text-[15px]">
              Mobilidade elétrica criada para transformar a forma como você se
              movimenta pela cidade.
            </p>
  
            {/* Actions */}
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="#modelos"
                className="group flex h-12 items-center gap-4 rounded-full border border-white/15 bg-white/[0.08] px-6 text-[13px] font-medium text-white backdrop-blur-md transition-all duration-300 hover:border-white/25 hover:bg-white/[0.14]"
              >
                <span>Explorar modelos</span>
  
                <span className="flex h-6 w-6 items-center justify-center rounded-full border border-white/20 transition-transform duration-300 group-hover:translate-y-1">
                  ↓
                </span>
              </a>
  
              <a
                href="#experiencia"
                className="flex h-12 items-center rounded-full px-3 text-[13px] font-medium text-white/55 transition-colors duration-300 hover:text-white"
              >
                Conhecer a VELTA
                <span className="ml-2">→</span>
              </a>
            </div>
          </div>
        </div>
  
        {/* Bottom Indicator */}
        <div className="absolute bottom-8 right-6 z-10 hidden items-center gap-3 text-[9px] uppercase tracking-[0.3em] text-white/30 sm:flex lg:right-10">
          <span>Scroll para explorar</span>
          <span className="h-px w-8 bg-white/20" />
        </div>
      </section>
    );
  }