import Navigation from "@/src/components/navigation"
import Hero from "@/src/components/hero"
import BrandShowcase from "@/src/components/brand-showcase";
import AboutMk from "@/src/components/about-mk";
import FounderNote from "@/src/components/founder-note";

export default function Home() {
  return (
    <section className="w-full">
      <Navigation />
      <Hero />
      <BrandShowcase />
      <AboutMk />
      <FounderNote />

    </section>
  );
}
