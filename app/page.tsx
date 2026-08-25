import Navigation from "@/src/components/navigation"
import Hero from "@/src/components/hero"
import AboutMk from "@/src/components/about-mk";
import FounderNote from "@/src/components/founder-note";
import BrandDiscovery from "@/src/components/brand-discovery";
import Solutions from "@/src/components/solutions";
import DNASection from "@/src/components/dna-section";
import WhyMk from "@/src/components/why-mk";
import FAQSection, { FAQ } from "@/src/components/faq";
import CtaBanner from "@/src/components/ctabanner";

export default function Home() {
  return (
    <section className="w-full">
      <Navigation />
      <Hero />
      <BrandDiscovery />
      <AboutMk />
      <FounderNote />
      <Solutions />
      <DNASection />
      <WhyMk />
      <FAQSection>
        <FAQ
          question="What is MAHY Khooray Automotive?"
          answer="MAHY Khooray Automotive is a UAE-based automotive company representing globally recognized vehicle brands while delivering trusted automotive solutions, customer-focused services, and long-term value."
        />

        <FAQ
          question="Which automotive brands does MAHY Khooray Automotive represent?"
          answer="MAHY Khooray Automotive represents Dongfeng, OMODA & JAECOO, and Certified Pre-Owned vehicles in the UAE, offering a diverse range of vehicles across different segments and mobility needs."
        />

        <FAQ
          question="Does MAHY Khooray Automotive only sell new vehicles?"
          answer="No. In addition to new vehicles, MAHY Khooray Automotive offers Certified Pre-Owned vehicles, giving customers more options to find the right vehicle for their needs and budget."
        />

        <FAQ
          question="Where is MAHY Khooray Automotive located?"
          answer="MAHY Khooray Automotive operates across the UAE through its network of showrooms and automotive facilities. Visit our locations section to find the nearest showroom and explore our brands and vehicles."
        />
        <FAQ
          question="How can I contact MAHY Khooray Automotive?"
          answer="You can contact MAHY Khooray Automotive through our website by submitting an enquiry or using the contact details provided for our team. We’ll be happy to assist with vehicle enquiries, test drives, sales, and other questions."
        />
        <FAQ
          question="Does MAHY Khooray Automotive provide aftersales support?"
          answer="Yes. MAHY Khooray Automotive provides aftersales support including vehicle maintenance, genuine parts, servicing, and customer care to help keep your vehicle performing at its best throughout ownership."
        />
      </FAQSection>
      <CtaBanner />

    </section>
  );
}
