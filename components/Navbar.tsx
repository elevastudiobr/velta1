"use client";

import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full px-5 pt-5 sm:px-8 lg:px-10">
      <nav className="mx-auto flex h-[68px] max-w-[1400px] items-center justify-between rounded-full border border-white/10 bg-black/20 px-5 backdrop-blur-xl sm:px-7">
        {/* Logo */}
        <a
          href="#inicio"
          className="relative z-10 text-[20px] font-semibold tracking-[0.28em] text-white"
        >
          VELTA
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-9 lg:flex">
          <a
            href="#modelos"
            className="text-[13px] font-medium tracking-wide text-white/65 transition-colors duration-300 hover:text-white"
          >
            Modelos
          </a>

          <a
            href="#experiencia"
            className="text-[13px] font-medium tracking-wide text-white/65 transition-colors duration-300 hover:text-white"
          >
            A VELTA
          </a>

          <a
            href="#tecnologia"
            className="text-[13px] font-medium tracking-wide text-white/65 transition-colors duration-300 hover:text-white"
          >
            Tecnologia
          </a>

          <a
            href="#contato"
            className="text-[13px] font-medium tracking-wide text-white/65 transition-colors duration-300 hover:text-white"
          >
            Contato
          </a>
        </div>

        {/* Desktop CTA */}
        <a
          href="#contato"
          className="hidden rounded-full border border-white/15 bg-white/[0.08] px-5 py-2.5 text-[12px] font-medium tracking-wide text-white backdrop-blur-md transition-all duration-300 hover:border-white/25 hover:bg-white/[0.14] lg:block"
        >
          Conhecer a VELTA
        </a>

        {/* Mobile Button */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menu"
          className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] lg:hidden"
        >
          <div className="flex w-[17px] flex-col gap-[5px]">
            <span
              className={`block h-[1px] w-full bg-white transition-all duration-300 ${
                menuOpen ? "translate-y-[3px] rotate-45" : ""
              }`}
            />

            <span
              className={`block h-[1px] w-full bg-white transition-all duration-300 ${
                menuOpen ? "-translate-y-[3px] -rotate-45" : ""
              }`}
            />
          </div>
        </button>

        {/* Mobile Menu */}
        <div
          className={`absolute left-0 top-[78px] w-full overflow-hidden rounded-[28px] border border-white/10 bg-[#050505]/95 backdrop-blur-2xl transition-all duration-500 lg:hidden ${
            menuOpen
              ? "pointer-events-auto max-h-[420px] opacity-100"
              : "pointer-events-none max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col px-6 py-7">
            <a
              href="#modelos"
              onClick={() => setMenuOpen(false)}
              className="border-b border-white/10 py-4 text-sm text-white/75"
            >
              Modelos
            </a>

            <a
              href="#experiencia"
              onClick={() => setMenuOpen(false)}
              className="border-b border-white/10 py-4 text-sm text-white/75"
            >
              A VELTA
            </a>

            <a
              href="#tecnologia"
              onClick={() => setMenuOpen(false)}
              className="border-b border-white/10 py-4 text-sm text-white/75"
            >
              Tecnologia
            </a>

            <a
              href="#contato"
              onClick={() => setMenuOpen(false)}
              className="py-4 text-sm text-white/75"
            >
              Contato
            </a>

            <a
              href="#contato"
              onClick={() => setMenuOpen(false)}
              className="mt-5 flex h-12 items-center justify-center rounded-full border border-white/15 bg-white/[0.08] text-sm font-medium text-white"
            >
              Conhecer a VELTA
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}