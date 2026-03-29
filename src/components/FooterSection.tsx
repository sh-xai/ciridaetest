// ABOUTME: Footer with background image, glassmorphic card, logo, CTA, and navigation links
// ABOUTME: Contains "BEGIN THE TRANSFORMATION" button, nav links, and legal text

import Image from "next/image";
import { CiridaeLogoIcon, CiridaeWordmark } from "@/components/icons";

const navLinks = ["HOME", "ABOUT", "SERVICES", "BLOG"];

export function FooterSection() {
  return (
    <footer className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/footer-bg.webp"
          fill
          className="object-cover"
          alt=""
        />
      </div>

      <div className="relative z-10 mx-5 my-5 rounded-2xl backdrop-blur-[40px] bg-white/[0.06] border border-white/[0.1] py-16 px-8">
        <div className="flex flex-col items-center">
          <CiridaeLogoIcon className="w-[80px] h-auto text-white" />
          <CiridaeWordmark className="w-[120px] h-auto text-white mt-3" />
        </div>

        <div className="flex items-center justify-between max-w-[900px] mx-auto mt-16 w-full">
          <p className="font-sans text-[14px] text-white uppercase tracking-[0.05em]">
            SAN FRANCISCO
          </p>
          <a
            href="#"
            className="font-mono text-[11px] uppercase tracking-wider border border-white/40 rounded-full px-12 py-4 text-white hover:bg-white/10 hover:border-white/70 transition-all duration-300"
          >
            BEGIN THE TRANSFORMATION
          </a>
          <p className="font-sans text-[14px] text-white uppercase tracking-[0.05em]">
            EST. 2025
          </p>
        </div>

        <nav className="text-center mt-12">
          <ul className="flex flex-col items-center gap-2">
            {navLinks.map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className="font-sans text-[14px] text-white uppercase tracking-[0.02em] hover:text-white/60 transition-colors"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="text-center mt-12">
          <p className="font-mono text-[11px] text-white/30 uppercase tracking-wider">
            PRIVACY POLICY
          </p>
          <p className="font-mono text-[11px] text-white/30 uppercase tracking-wider">
            TERMS AND CONDITIONS
          </p>
          <p className="font-mono text-[11px] text-white/30 uppercase tracking-wider">
            ALL RIGHTS RESERVED 2026©
          </p>
        </div>
      </div>
    </footer>
  );
}
