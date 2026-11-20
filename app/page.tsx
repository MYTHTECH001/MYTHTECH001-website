import { SiteHeader } from "@/components/site-header";
import { HeroSection } from "@/components/hero-section";
import { WorkSection } from "@/components/work-section";
import { ServicesSection } from "@/components/services-section";
import { ApproachSection } from "@/components/approach-section";
import { RobloxSection } from "@/components/roblox-section";
import { ContactSection } from "@/components/contact-section";
import { SiteFooter } from "@/components/site-footer";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <HeroSection />
        <WorkSection />
        <ServicesSection />
        <ApproachSection />
        <RobloxSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
