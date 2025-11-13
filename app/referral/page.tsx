import { ReferralCalculator } from "@/components/referral/referral-calculator";
import {
  AdditionalBenefitsSection,
  CTASection,
  HeroSection,
  HeroWithImageSection,
  HowItWorksSection,
  WhyChooseSection,
  Footer,
} from "@/components/referral/static-content";
import {
  CreditCard,
  FileText,
  Headphones,
  Shield,
  ThumbsUp,
  Users,
} from "lucide-react";
import Image from "next/image";

export default function ReferralPage() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <HeroWithImageSection />
      <AdditionalBenefitsSection />
      <HowItWorksSection />
      <ReferralCalculator />
      <WhyChooseSection />
      <CTASection />
      <Footer />
    </div>
  );
}
