
"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import AnimatedStat from "@/components/ui/AnimatedStat";

const whatsappUrl =
  "https://wa.me/5519997896239?text=Ol%C3%A1%21%20Tenho%20interesse%20na%20VELTA%20X%20na%20cor%20preta.";

const scooterImages = [
  "/images/models/velta-x-1.webp",
  "/images/models/velta-x-2.webp",
  "/images/models/velta-x-3.webp",
];

const specifications = [
  { label: "Classificação legal", value: "Autopropelido · verificar regulamentação aplicável" },
  { label: "Velocidade máxima", value: "55 km/h" },
  { label: "Potência do motor", value: "2.000 W" },
  { label: "Autonomia", value: "Até 80 km" },
  { label: "Bateria", value: "Lítio 60V 30Ah" },
  { label: "Tempo de recarga", value: "6 a 8 horas" },
  { label: "Carga máxima", value: "Até 180 kg" },
];

const standardItems = [
  "Painel digital",
  "Alarme com bloqueio e trava",
  "Iluminação em LED",
  "Indicadores luminosos",
  "Carregador bivolt",
  "Acelerador de punho",
  "Seletor de velocidade",
];

export default function Models2() {
  const shouldReduceMotion = useReducedMotion();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);

  useEffect(() => {
    if (!isModalOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsModalOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isModalOpen]);

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

  return (
    <>
      {/* SEÇÃO VELTA X */}
      <section
        id="modelo-2"
        className="relative min-h-screen w-full overflow-hidden bg-[#050505]"
      >
        {/* BACKGROUND */}
        <div className="absolute inset-0">
          <motion.img
            src="/images/models/velta-x.webp"
            alt="VELTA X"
            initial={
              shouldReduceMotion
                ? { opacity: 1, scale: 1 }
                : { opacity: 0, scale: 1.035 }
            }
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: shouldReduceMotion ? 0 : 1.4,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="absolute inset-0 h-full w-full object-cover object-center"
          />

          <div className="absolute inset-0 bg-black/10" />
          <div className="absolute inset-0 bg-gradient-to-l from-[#050505] via-[#050505]/75 to-transparent" />
          <div className="absolute inset-y-0 right-0 w-[55%] bg-gradient-to-l from-[#050505] via-[#050505]/55 to-transparent" />
          <div className="absolute inset-x-0 top-0 h-[30%] bg-gradient-to-b from-[#050505]/80 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-[30%] bg-gradient-to-t from-[#050505] to-transparent" />
          <div className="absolute right-[35%] top-[45%] h-[460px] w-[460px] translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/[0.05] blur-[150px]" />
        </div>

        {/* CONTENT */}
        <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-[1500px] flex-col px-6 sm:px-10 lg:px-16">
          <div className="flex flex-1 items-center justify-end">
            <div className="w-full max-w-[530px] pb-24 lg:mr-[3%] lg:text-right">
              {/* CATEGORY */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                transition={revealTransition(0.1)}
                className="flex items-center gap-4 lg:justify-end"
              >
                <span className="text-[10px] font-medium tracking-[0.4em] text-white/30">
                  02
                </span>
                <span className="h-px w-8 bg-white/10" />
                <span className="text-[9px] font-medium uppercase tracking-[0.4em] text-white/30">
                  Performance
                </span>
              </motion.div>

              {/* NAME */}
              <motion.h2
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                transition={revealTransition(0.22)}
                className="mt-5 text-[clamp(4rem,7vw,7rem)] font-semibold leading-[0.82] tracking-[-0.07em] text-white"
              >
                VELTA
                <br />
                <span className="text-white/40">X</span>
              </motion.h2>

              {/* DESCRIPTION */}
              <motion.p
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                transition={revealTransition(0.34)}
                className="mt-8 ml-auto max-w-[430px] text-[15px] leading-7 text-white/55 sm:text-base sm:leading-7"
              >
                Mais potência, mais presença e uma nova experiência de
                mobilidade. Criada para quem quer ir além do convencional.
              </motion.p>

              {/* SPECS */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                transition={revealTransition(0.48)}
                className="mt-12 flex items-center justify-start gap-10 sm:gap-12 lg:justify-end"
              >
                <AnimatedStat value={80} suffix=" km" label="Autonomia" />

                <div className="h-11 w-px bg-white/10" />

                <AnimatedStat value={55} suffix=" km/h" label="Velocidade" />
              </motion.div>

              {/* CTA ABRE O MODAL */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                transition={revealTransition(0.62)}
                className="mt-10 lg:flex lg:justify-end"
              >
                <button
                  type="button"
                  onClick={() => {
                    setSelectedImage(0);
                    setIsModalOpen(true);
                  }}
                  className="group inline-flex h-[54px] items-center gap-4 rounded-full border border-white/[0.14] bg-white/[0.055] pl-6 pr-6 text-[12px] font-medium text-white backdrop-blur-xl transition-all duration-500 hover:border-white/[0.28] hover:bg-white/[0.10]"
                >
                  <span>Conhecer a VELTA X</span>
                  <span className="text-[18px] leading-none text-white/60 transition-all duration-500 group-hover:translate-x-1 group-hover:text-white">
                    ↗
                  </span>
                </button>
              </motion.div>
            </div>
          </div>
        </div>

        {/* BOTTOM LINE */}
        <div className="pointer-events-none absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />
      </section>

      {/* MODAL VELTA X */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-3 backdrop-blur-md sm:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) {
                setIsModalOpen(false);
              }
            }}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="velta-x-title"
              initial={{
                opacity: 0,
                y: shouldReduceMotion ? 0 : 24,
                scale: shouldReduceMotion ? 1 : 0.985,
              }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{
                opacity: 0,
                y: shouldReduceMotion ? 0 : 16,
                scale: shouldReduceMotion ? 1 : 0.985,
              }}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.35,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative flex max-h-[92dvh] min-h-0 w-full max-w-[1080px] flex-col overflow-hidden rounded-2xl border border-white/[0.12] bg-[#0a0a0c] shadow-2xl shadow-black/50 md:h-[min(760px,88dvh)] md:flex-row"
            >
              {/* GALERIA */}
              <div className="flex shrink-0 flex-col bg-[#080809] md:h-full md:w-[40%]">
                <div className="relative h-[210px] shrink-0 overflow-hidden bg-[#111114] sm:h-[270px] md:h-0 md:min-h-0 md:flex-1">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={scooterImages[selectedImage]}
                      src={scooterImages[selectedImage]}
                      alt={`Scooter elétrica VELTA X — imagem ${selectedImage + 1}`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{
                        duration: shouldReduceMotion ? 0 : 0.25,
                      }}
                      className="absolute inset-0 h-full w-full object-cover object-center"
                    />
                  </AnimatePresence>

                  <button
                    type="button"
                    aria-label="Fechar detalhes"
                    onClick={() => setIsModalOpen(false)}
                    className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/50 text-xl text-white backdrop-blur-md transition hover:bg-white/15 md:hidden"
                  >
                    ×
                  </button>

                  <div className="absolute bottom-3 right-3 rounded-full border border-white/15 bg-black/50 px-3 py-1.5 text-[10px] text-white/80 backdrop-blur-md">
                    {String(selectedImage + 1).padStart(2, "0")} / 03
                  </div>
                </div>

                {/* MINIATURAS */}
                <div className="flex shrink-0 gap-3 border-t border-white/[0.08] p-4 sm:p-5">
                  {scooterImages.map((image, index) => (
                    <button
                      key={image}
                      type="button"
                      onClick={() => setSelectedImage(index)}
                      aria-label={`Ver imagem ${index + 1} da VELTA X`}
                      aria-pressed={selectedImage === index}
                      className={`relative aspect-square w-[62px] shrink-0 overflow-hidden rounded-lg border transition-all duration-300 sm:w-[76px] ${
                        selectedImage === index
                          ? "border-white opacity-100 ring-1 ring-white/30"
                          : "border-white/10 opacity-55 hover:border-white/40 hover:opacity-90"
                      }`}
                    >
                      <img
                        src={image}
                        alt=""
                        className="h-full w-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* PAINEL DE INFORMAÇÕES */}
              <div className="flex min-h-0 min-w-0 flex-1 flex-col md:w-[60%]">
                {/* CABEÇALHO */}
                <div className="flex shrink-0 items-start justify-between border-b border-white/[0.08] px-5 py-4 sm:px-7 sm:py-5">
                  <div>
                    <p className="text-[9px] font-medium uppercase tracking-[0.3em] text-white/35">
                      Velta Mobilidade Elétrica
                    </p>

                    <h2
                      id="velta-x-title"
                      className="mt-1 text-lg font-medium tracking-tight text-white sm:text-xl"
                    >
                      VELTA X
                    </h2>
                  </div>

                  <button
                    type="button"
                    aria-label="Fechar detalhes"
                    onClick={() => setIsModalOpen(false)}
                    className="hidden h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 text-xl text-white/60 transition hover:border-white/25 hover:bg-white/[0.06] hover:text-white md:flex"
                  >
                    ×
                  </button>
                </div>

                {/* CONTEÚDO ROLÁVEL */}
                <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-5 py-5 sm:px-7 sm:py-6">
                  {/* FICHA TÉCNICA */}
                  <div className="flex flex-col">
                    {specifications.map((specification, index) => (
                      <div
                        key={specification.label}
                        className={`flex flex-col gap-1 py-3 ${
                          index !== specifications.length - 1
                            ? "border-b border-white/[0.08]"
                            : ""
                        }`}
                      >
                        <span className="text-[11px] text-white/45">
                          {specification.label}
                        </span>

                        <span className="text-sm font-medium leading-6 text-white sm:text-[15px]">
                          {specification.value}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* ITENS DE SÉRIE */}
                  <div className="mt-6">
                    <div className="mb-4 flex items-center gap-3">
                      <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-white">
                        Itens de série
                      </h3>
                      <div className="h-px flex-1 bg-white/[0.10]" />
                    </div>

                    <div className="grid grid-cols-2 gap-2.5">
                      {standardItems.map((item) => (
                        <div
                          key={item}
                          className="flex min-h-[74px] items-start gap-2 rounded-xl border border-white/[0.09] bg-white/[0.035] p-3 transition-colors duration-300 hover:border-white/[0.18] hover:bg-white/[0.055]"
                        >
                          <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-white/20 text-[9px] text-white/70">
                            ✓
                          </span>

                          <span className="text-[11px] leading-5 text-white/75 sm:text-xs">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* RODAPÉ FIXO */}
                <div className="shrink-0 border-t border-white/[0.09] bg-[#0a0a0c] px-5 py-4 sm:px-7 sm:py-5">
                  <div className="flex items-center justify-between gap-3">
                    <div className="shrink-0">
                      <p className="text-[9px] uppercase tracking-[0.16em] text-white/40 sm:text-[10px]">
                        Cor disponível
                      </p>

                      <div className="mt-2 flex items-center gap-2">
                        <span
                          aria-label="Cor preto fosco"
                          className="h-5 w-5 rounded-full border border-white/30 bg-gradient-to-br from-[#454545] via-[#171717] to-[#050505] shadow-[0_0_0_3px_rgba(255,255,255,0.04)]"
                        />

                        <span className="text-xs font-medium text-white sm:text-sm">
                          PRETO FOSCO
                        </span>
                      </div>
                    </div>

                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex min-h-[46px] min-w-0 items-center justify-center gap-2 rounded-full bg-white px-4 py-3 text-[9px] font-semibold uppercase tracking-[0.08em] text-black transition duration-300 hover:bg-white/85 sm:gap-3 sm:px-6 sm:text-[11px] sm:tracking-[0.12em]"
                    >
                      <span className="whitespace-nowrap">
                        Comprar pelo WhatsApp
                      </span>

                      <span className="text-base transition-transform duration-300 group-hover:translate-x-1">
                        ↗
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}