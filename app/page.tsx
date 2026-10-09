import Hero from "@/components/sections/Hero";
import Models1 from "@/components/sections/Models-1";
import Models2 from "@/components/sections/Models-2";
import Models3 from "@/components/sections/Models-3";
import Experience from "@/components/sections/Experience";
import WhyElectric from "@/components/sections/WhyElectric";
import HowToBuy from "@/components/sections/HowToBuy";
import Technology from "@/components/sections/Technology";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      {/* Apresentação principal */}
      <Hero />

      {/* Modelos de scooters */}
      <Models1 />
      <Models2 />
      <Models3 />

      {/* Conheça a marca */}
      <Experience />

      {/* Benefícios da mobilidade elétrica */}
      <WhyElectric />

      {/* Como comprar */}
      <HowToBuy />

      {/* Experiências de clientes */}
      <Technology />

      {/* Dúvidas frequentes */}
      <FAQ />

      {/* Chamada final para contato */}
      <CTA />
    </main>
  );
}