// ABOUTME: Testimonials carousel showing partner quotes with company logos
// ABOUTME: Two testimonials from BV TECH and Factua with pagination indicator

import Image from "next/image";
import { cn } from "@/lib/utils";

interface TestimonialsSectionProps {
  className?: string;
}

const testimonials = [
  {
    quote:
      "Ciridae shipped high-impact solutions quickly and helped architect our long-term AI strategy. They\u2019re simply the best; true partners every step of the way.",
    name: "Francesco Boccardo",
    title: "HEAD OF GEN AI AT BV TECH",
    logo: "/images/logos/bvtech.png",
    logoWidth: 80,
    logoHeight: 32,
  },
  {
    quote:
      "Ciridae was so good we wanted them on our cap table. In just one month, Ciridae quickly understood our business, identified the biggest generative AI opportunities and risks, and gave us a clear path toward becoming an AI-first company.",
    name: "Josh Albom",
    title: "CEO OF FACTUA",
    logo: "/images/logos/factua.png",
    logoWidth: 80,
    logoHeight: 32,
  },
];

export function TestimonialsSection({ className }: TestimonialsSectionProps) {
  return (
    <section className={cn("py-[120px] bg-ciridae-black", className)}>
      <div className="max-w-[1200px] mx-auto px-6">
        <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-white/50 text-center mb-4">
          TESTIMONIALS
        </p>
        <h2 className="font-sans text-[32px] font-normal text-white/60 uppercase text-center leading-[1.3]">
          What our partners say
        </h2>

        <div className="mt-16 grid grid-cols-2 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="rounded-2xl p-10 backdrop-blur-[20px] bg-white/[0.04] border border-white/[0.08]"
            >
              <p className="font-body text-[15px] text-white/70 leading-[1.8]">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-8 flex items-center gap-4">
                <div>
                  <p className="font-sans text-[14px] text-white uppercase tracking-[0.02em]">
                    {t.name}
                  </p>
                  <p className="font-mono text-[11px] text-white/40 uppercase tracking-wider mt-1">
                    {t.title}
                  </p>
                </div>
                <Image
                  src={t.logo}
                  alt={t.title}
                  width={t.logoWidth}
                  height={t.logoHeight}
                  className="h-8 w-auto opacity-50"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <span className="font-mono text-[11px] text-white/30">1/2</span>
        </div>
      </div>
    </section>
  );
}
