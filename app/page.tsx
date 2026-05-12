import Nav from "@/components/Nav";
import Hero from "@/components/sections/Hero";
import ProblemaSection from "@/components/sections/ProblemaSection";
import BancosSection from "@/components/sections/BancosSection";
import ComoFuncionaPreview from "@/components/sections/ComoFuncionaPreview";
import ComparativoSection from "@/components/sections/ComparativoSection";
import PlanosPreview from "@/components/sections/PlanosPreview";
import DepoimentosSection from "@/components/sections/DepoimentosSection";
import FinalCTA from "@/components/sections/FinalCTA";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <ProblemaSection />
        <BancosSection />
        <ComoFuncionaPreview />
        <ComparativoSection />
        <PlanosPreview />
        <DepoimentosSection />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
