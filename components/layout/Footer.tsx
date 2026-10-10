export default function Footer() {
  return (
    <footer className="bg-[#050505]">
      <div className="mx-auto max-w-[1400px] px-6 py-10 sm:px-10 lg:px-16">
        <div className="flex flex-col gap-6 border-t border-white/[0.08] pt-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-4">
            <p className="text-[11px] text-white/30">
              © 2026 VELTA. Todos os direitos reservados.
            </p>

            <div className="flex items-center gap-5">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram da VELTA"
                className="text-white/50 transition-colors hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle
                    cx="17.5"
                    cy="6.5"
                    r="0.5"
                    fill="currentColor"
                  />
                </svg>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp da VELTA"
                className="text-white/50 transition-colors hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.4 8.4 0 0 1 3.8-.9h.5a8.5 8.5 0 0 1 8 8z" />
                  <path d="M9 9a1 1 0 0 1 1-1h.5l1.2 2.5-1 1a5 5 0 0 0 2.8 2.8l1-1 2.5 1.2v.5a1 1 0 0 1-1 1A7 7 0 0 1 9 9z" />
                </svg>
              </a>

              {/* Google Maps */}
              <a
                href="https://www.google.com/maps"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ver localização no Google Maps"
                className="text-white/50 transition-colors hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
                  <circle cx="12" cy="10" r="2.5" />
                </svg>
              </a>
            </div>
          </div>

          {/* Assinatura Eleva Studio */}
          <a
            href="https://eleva-studio.vercel.app/#projetos"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex w-fit items-center gap-3"
          >
            <span className="text-[10px] tracking-wide text-white/30 transition-colors group-hover:text-white/50">
              Desenvolvido por
            </span>

            <img
              src="/images/logo/logo-eleva.webp"
              alt="Eleva Studio"
              className="h-6 w-auto opacity-70 transition-opacity group-hover:opacity-100"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}