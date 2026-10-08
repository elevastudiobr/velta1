import Hero from "@/components/sections/Hero";
import Models1 from "@/components/sections/Models-1";
import Models2 from "@/components/sections/Models-2";
import Models3 from "@/components/sections/Models-3";
import Experience from "@/components/sections/Experience";
import WhyElectric from "@/components/sections/WhyElectric";
import HowToBuy from "@/components/sections/HowToBuy";
import Technology from "@/components/sections/Technology";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      {/* =========================================================
          HERO
      ========================================================= */}

      <Hero />

      {/* =========================================================
          MODELOS
      ========================================================= */}

      <Models1 />
      <Models2 />
      <Models3 />

      {/* =========================================================
          A VELTA
      ========================================================= */}

      <Experience />

      {/* =========================================================
          POR QUE ELÉTRICA
      ========================================================= */}

      <WhyElectric />

      {/* =========================================================
          COMO COMPRAR
      ========================================================= */}

      <HowToBuy />

      {/* =========================================================
          TECNOLOGIA
      ========================================================= */}

      <Technology />
    </main>
  );
}