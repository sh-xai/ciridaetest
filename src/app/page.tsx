// ABOUTME: Main page assembling all sections of the ciridae.com clone
// ABOUTME: Sections ordered: Hero, Builds, Services, Team, Blog, Testimonials, Security, Careers, Footer

import { Nav } from "@/components/Nav";
import { HeroSection } from "@/components/HeroSection";
import { BuildsSection } from "@/components/BuildsSection";
import { ServicesSection } from "@/components/ServicesSection";
import { TeamSection } from "@/components/TeamSection";
import { BlogSection } from "@/components/BlogSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { SecuritySection } from "@/components/SecuritySection";
import { CareersSection } from "@/components/CareersSection";
import { FooterSection } from "@/components/FooterSection";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <HeroSection />
        <BuildsSection />
        <ServicesSection />
        <TeamSection />
        <BlogSection />
        <TestimonialsSection />
        <SecuritySection />
        <CareersSection />
      </main>
      <FooterSection />
    </>
  );
}
