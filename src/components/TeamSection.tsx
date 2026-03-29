// ABOUTME: Team section with heading, subheading, and auto-scrolling company logo marquee
// ABOUTME: Logos include KKR, Goldman Sachs, MongoDB, Palantir, Salesforce, Apple, Penn, Stanford, Meta, Citadel

import Image from "next/image";
import { cn } from "@/lib/utils";

interface TeamSectionProps {
  className?: string;
}

const logos = [
  { src: "/images/logos/kkr.svg", alt: "KKR", width: 100, height: 48 },
  { src: "/images/logos/goldman.svg", alt: "Goldman Sachs", width: 140, height: 48 },
  { src: "/images/logos/mongodb.svg", alt: "MongoDB", width: 160, height: 48 },
  { src: "/images/logos/palantir.png", alt: "Palantir", width: 160, height: 48 },
  { src: "/images/logos/salesforce.svg", alt: "Salesforce", width: 80, height: 48 },
  { src: "/images/logos/apple.svg", alt: "Apple", width: 48, height: 48 },
  { src: "/images/logos/penn.png", alt: "Penn", width: 120, height: 48 },
  { src: "/images/logos/stanford.png", alt: "Stanford", width: 100, height: 48 },
  { src: "/images/logos/meta.svg", alt: "Meta", width: 120, height: 48 },
  { src: "/images/logos/citadel.svg", alt: "Citadel", width: 120, height: 48 },
  { src: "/images/logos/general-atlantic.svg", alt: "General Atlantic", width: 100, height: 48 },
  { src: "/images/logos/andreessen.svg", alt: "Andreessen Horowitz", width: 140, height: 48 },
];

export function TeamSection({ className }: TeamSectionProps) {
  return (
    <section className={cn("py-[120px] bg-ciridae-black", className)}>
      <div className="max-w-[1440px] mx-auto px-5">
        <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-white/50 text-center mb-8">
          OUR TEAM
        </p>

        <h2 className="font-sans text-[32px] font-normal text-white/60 uppercase text-center max-w-[800px] mx-auto leading-[1.3]">
          We&apos;re AI Experts from the World&apos;s Leading Organizations
        </h2>

        <p className="font-body text-[15px] text-white/40 text-center max-w-[600px] mx-auto mt-4 leading-[1.6]">
          Now, we&apos;re helping the next generation of category leaders build
          with the same edge.
        </p>

        <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-white/30 text-center mt-20 mb-12">
          OUR WORK IS BACKED BY
        </p>
      </div>

      <div className="overflow-hidden w-full">
        <div className="flex items-center gap-16 animate-[marquee_30s_linear_infinite]">
          {logos.map((logo) => (
            <Image
              key={logo.alt}
              src={logo.src}
              alt={logo.alt}
              width={logo.width}
              height={logo.height}
              className="h-[48px] w-auto opacity-50 grayscale flex-shrink-0"
            />
          ))}
          {logos.map((logo) => (
            <Image
              key={`${logo.alt}-duplicate`}
              src={logo.src}
              alt={logo.alt}
              width={logo.width}
              height={logo.height}
              className="h-[48px] w-auto opacity-50 grayscale flex-shrink-0"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
