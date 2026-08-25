import Navigation from "@/src/components/navigation"
import Hero from "@/src/components/hero"
import AboutMk from "@/src/components/about-mk";
import FounderNote from "@/src/components/founder-note";
import BrandDiscovery from "@/src/components/brand-discovery";
import Solutions from "@/src/components/solutions";

export default function Home() {
  return (
    <section className="w-full">
      <Navigation />
      <Hero />
      <BrandDiscovery />
      <AboutMk />
      <FounderNote />
      <Solutions />
    </section>
  );
}
