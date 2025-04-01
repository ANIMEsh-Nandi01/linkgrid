import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import FeatureSection from '@/components/FeatureSection';
//import MarqueeSection from '@/components/MarqueeSection';
import SecuritySection from '@/components/SecuritySection';
import TestimonialSection from '@/components/TestimonialSection';
import TmarqueeSection from '@/components/TmarqueeSection';
import TrustedBySection from '@/components/TrustedBySection';
import ComparisonSection from '@/components/ComparisonSection';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FeatureSection />
      <SecuritySection />
      <TestimonialSection />
      <TmarqueeSection />
      <TrustedBySection />
      <ComparisonSection />
      <CallToAction />
      <Footer />
    </>
  );
}
