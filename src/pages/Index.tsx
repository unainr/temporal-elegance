import { useState, useCallback } from "react";
import Preloader from "@/components/Preloader";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import HorizontalShowcase from "@/components/HorizontalShowcase";
import MovementSection from "@/components/MovementSection";
import CatalogSection from "@/components/CatalogSection";
import SpecsSection from "@/components/SpecsSection";
import Footer from "@/components/Footer";

const Index = () => {
  const [loaded, setLoaded] = useState(false);
  const handleComplete = useCallback(() => setLoaded(true), []);

  return (
    <>
      {!loaded && <Preloader onComplete={handleComplete} />}
      <div className={loaded ? "opacity-100" : "opacity-0"}>
        <Navbar />
        <HeroSection />
        <HorizontalShowcase />
        <MovementSection />
        <CatalogSection />
        <SpecsSection />
        <Footer />
      </div>
    </>
  );
};

export default Index;
