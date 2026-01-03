import HeroSection from "./_components/HeroSection";
import ExpectationsBanner from "./_components/ExpectationsBanner";
import ProblemSection from "./_components/ProblemSection";
import SolutionSection from "./_components/SolutionSection";
import ServiceSection from "./_components/ServiceSection";
import BenefitsSection from "./_components/BenefitsSection";
import ProcessSection from "./_components/ProcessSection";
import TestimonialSection from "./_components/TestimonialSection";
import FeaturesSection from "./_components/FeaturesSection";
import FAQSection from "./_components/FAQSection";
import CTASection from "./_components/CTASection";
import Footer from "./_components/Footer";
import PricingExtrasSection from "./_components/PricingExtrasSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ExpectationsBanner />
      <ProblemSection />
      <SolutionSection />
      <ServiceSection />
      <PricingExtrasSection />
      <ProcessSection />
      <TestimonialSection />
      <FeaturesSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  );
}
