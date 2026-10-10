
"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const whatsappUrl =
    "https://wa.me/5519992728449?text=Ol%C3%A1%21%20Tenho%20interesse%20em%20conhecer%20a%20VELTA.";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavigation = (id: string) => {
    setMenuOpen(false);

    if (id === "modelos") {
      const section =
        document.getElementById("modelos") ||
        document.getElementById("modelo-1");

      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }

      return;
    }

    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const handleWhatsApp = () => {
    setMenuOpen(false);
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "border-b border-white/[0.08] bg-[#050505]/75 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav
        className={`mx-auto flex h-[78px] w-full max-w-[1600px] items-center justify-between px-6 transition-all duration-500 sm:px-10 lg:px-14 ${
          scrolled ? "lg:h-[72px]" : "lg:h-[84px]"
        }`}
      >
        {/* Logo */}
        <button
          type="button"
          onClick={() => handleNavigation("inicio")}
          className="relative z-10 flex items-center"
          aria-label="Voltar para o início"
        >
          <img
            src="/images/logo/logo-velta.png"
            alt="VELTA"
            className="h-auto w-[82px] object-contain sm:w-[90px]"
          />
        </button>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-10 lg:flex">
          <button
            type="button"
            onClick={() => handleNavigation("modelos")}
            className="text-[13px] font-medium tracking-wide text-white/65 transition-colors duration-300 hover:text-white"
          >
            Modelos
          </button>

          <button
            type="button"
            onClick={() => handleNavigation("experiencia")}
            className="text-[13px] font-medium tracking-wide text-white/65 transition-colors duration-300 hover:text-white"
          >
            A VELTA
          </button>

          <button
            type="button"
            onClick={() => handleNavigation("tecnologia")}
            className="text-[13px] font-medium tracking-wide text-white/65 transition-colors duration-300 hover:text-white"
          >
            Tecnologia
          </button>

          <button
            type="button"
            onClick={() => handleNavigation("contato")}
            className="text-[13px] font-medium tracking-wide text-white/65 transition-colors duration-300 hover:text-white"
          >
            Contato
          </button>
        </div>

        {/* Desktop CTA */}
        <button
          type="button"
          onClick={handleWhatsApp}
          className="hidden items-center justify-center rounded-full border border-white/15 bg-white/[0.06] px-5 py-2.5 text-[12px] font-medium tracking-wide text-white backdrop-blur-md transition-all duration-300 hover:border-white/25 hover:bg-white/[0.11] lg:flex"
        >
          Conhecer a VELTA
        </button>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          className="relative z-20 flex h-10 w-10 items-center justify-center lg:hidden"
        >
          <div className="flex w-[20px] flex-col gap-[6px]">
            <span
              className={`block h-[1px] w-full bg-white transition-all duration-300 ${
                menuOpen ? "translate-y-[3.5px] rotate-45" : ""
              }`}
            />

            <span
              className={`block h-[1px] w-full bg-white transition-all duration-300 ${
                menuOpen ? "-translate-y-[3.5px] -rotate-45" : ""
              }`}
            />
          </div>
        </button>

        {/* Mobile Menu */}
        <div
          className={`absolute left-0 top-full w-full overflow-hidden border-b border-white/10 bg-[#050505]/95 backdrop-blur-xl transition-all duration-500 lg:hidden ${
            menuOpen
              ? "max-h-[420px] opacity-100"
              : "pointer-events-none max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col px-6 py-6">
            <button
              type="button"
              onClick={() => handleNavigation("modelos")}
              className="border-b border-white/[0.08] py-4 text-left text-sm text-white/70 transition-colors hover:text-white"
            >
              Modelos
            </button>

            <button
              type="button"
              onClick={() => handleNavigation("experiencia")}
              className="border-b border-white/[0.08] py-4 text-left text-sm text-white/70 transition-colors hover:text-white"
            >
              A VELTA
            </button>

            <button
              type="button"
              onClick={() => handleNavigation("tecnologia")}
              className="border-b border-white/[0.08] py-4 text-left text-sm text-white/70 transition-colors hover:text-white"
            >
              Tecnologia
            </button>

            <button
              type="button"
              onClick={() => handleNavigation("contato")}
              className="border-b border-white/[0.08] py-4 text-left text-sm text-white/70 transition-colors hover:text-white"
            >
              Contato
            </button>

            <button
              type="button"
              onClick={handleWhatsApp}
              className="mt-5 flex h-12 items-center justify-center rounded-full border border-white/15 bg-white/[0.06] text-sm font-medium text-white transition-colors hover:bg-white/[0.1]"
            >
              Conhecer a VELTA
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}