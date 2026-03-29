// ABOUTME: Scroll-driven "Ciridae builds" section with sticky container and text reveal
// ABOUTME: Shows main value proposition over hero background image with floating particles

import Image from "next/image";
import { cn } from "@/lib/utils";

interface BuildsSectionProps {
  className?: string;
}

export function BuildsSection({ className }: BuildsSectionProps) {
  return (
    <section className={cn("relative", className)} style={{ height: "250vh" }}>
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero.webp"
            alt=""
            fill
            className="object-cover"
            priority={false}
          />
          <div className="absolute inset-0 bg-black/75" />
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0 z-[1] pointer-events-none">
          <div
            className="absolute w-1.5 h-1.5 rounded-full bg-white/40"
            style={{
              top: "40%",
              left: "50%",
              animation: "float 6s ease-in-out infinite",
            }}
          />
          <div
            className="absolute w-1 h-1 rounded-full bg-white/25"
            style={{
              top: "50%",
              left: "43%",
              animation: "float 8s ease-in-out infinite 1s",
            }}
          />
          <div
            className="absolute w-2 h-2 rounded-full bg-white/30"
            style={{
              top: "45%",
              left: "55%",
              animation: "float 7s ease-in-out infinite 2s",
            }}
          />
          <div
            className="absolute w-1.5 h-1.5 rounded-full bg-white/20"
            style={{
              top: "55%",
              left: "50%",
              animation: "float 9s ease-in-out infinite 0.5s",
            }}
          />
          <div
            className="absolute w-1 h-1 rounded-full bg-white/15"
            style={{
              top: "48%",
              left: "43%",
              animation: "float 10s ease-in-out infinite 3s",
            }}
          />
          <div
            className="absolute w-1 h-1 rounded-full bg-white/20"
            style={{
              top: "52%",
              left: "56%",
              animation: "float 7s ease-in-out infinite 4s",
            }}
          />
        </div>

        {/* Content */}
        <div className="relative z-[2] h-full flex flex-col items-center justify-center px-5">
          <div className="flex flex-col items-center text-center gap-10 max-w-[900px]">
            <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-white/50">
              Ciridae builds
            </p>

            <h2 className="font-sans text-[62px] font-normal text-white/60 uppercase leading-[1.05] tracking-[0.01em]">
              We redesign Complex workflows around AI, build the systems that
              execute them, and operate those systems in production.
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
