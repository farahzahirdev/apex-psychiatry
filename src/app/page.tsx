import Hero from "@/components/Hero";
import InquiryForm from "@/components/InquiryForm";
import TmsSection from "@/components/TmsSection";
import SpravatoSection from "@/components/SpravatoSection";
import WhyApex from "@/components/WhyApex";
import InsuranceBar from "@/components/InsuranceBar";
import Locations from "@/components/Locations";
import Faq from "@/components/Faq";
import FinalCta from "@/components/FinalCta";

export default function Home() {
  return (
    <>
      <Hero />
      <InquiryForm />
      <TmsSection />
      <SpravatoSection />
      <WhyApex />
      <Locations />
      <InsuranceBar />
      <Faq />
      <FinalCta />
    </>
  );
}
