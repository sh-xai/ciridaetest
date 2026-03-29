// ABOUTME: Full-viewport hero section with video background, centered logo, and taglines
// ABOUTME: Three-column grid with "AUTOMATE THE MUNDANE" left, logo center, "ACCELERATE THE REMARKABLE" right

"use client";

import { useRef, useEffect } from "react";
import { CiridaeLogoIcon, CiridaeWordmark } from "@/components/icons";
import { cn } from "@/lib/utils";

interface HeroSectionProps {
  className?: string;
}

export function HeroSection({ className }: HeroSectionProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play().catch(() => {});
    }
  }, []);

  return (
    <section className={cn("relative h-screen overflow-hidden", className)}>
      {/* Background video */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Content overlay */}
      <div className="relative z-10 h-full flex flex-col justify-between px-5 max-w-[1440px] mx-auto w-full pt-[122px] pb-5">
        {/* Middle: 3-column grid */}
        <div className="grid grid-cols-[1fr_auto_1fr] items-center w-full">
          {/* Left tagline */}
          <div className="self-center">
            <p className="font-sans text-[14px] font-normal text-white uppercase tracking-[0.05em]">
              Automate the mundane
            </p>
          </div>

          {/* Center logo */}
          <div className="flex flex-col items-center gap-4">
            <CiridaeLogoIcon className="w-[140px] h-auto text-white" />
            <CiridaeWordmark className="w-[140px] h-auto text-white mt-2" />
          </div>

          {/* Right tagline */}
          <div className="self-center text-right">
            <p className="font-sans text-[14px] font-normal text-white uppercase tracking-[0.05em]">
              Accelerate the remarkable
            </p>
          </div>
        </div>

        {/* Bottom tagline */}
        <div className="text-center pb-5">
          <p className="font-sans text-[14px] font-normal text-white uppercase tracking-[0.02em] leading-[1.5]">
            We are re-architecting the businesses of today for a faster smarter tomorrow
          </p>
        </div>
      </div>
    </section>
  );
}
