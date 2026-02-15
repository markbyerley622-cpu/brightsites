import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PricingSection from "@/components/PricingSection";
import SubscriptionSection from "@/components/SubscriptionSection";
import SocialSection from "@/components/SocialSection";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import InstagramFollow from "@/components/InstagramFollow";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <PricingSection />
        <SubscriptionSection />
        <Testimonials />
        <SocialSection />
        <InstagramFollow />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
