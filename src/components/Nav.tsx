// ABOUTME: Fixed navigation bar with START NOW button, centered logo, and MENU button
// ABOUTME: Pill-shaped container with 3-column grid layout

"use client";

import { CiridaeLogoIcon, MenuIcon } from "@/components/icons";
import { cn } from "@/lib/utils";

interface NavProps {
  className?: string;
}

export function Nav({ className }: NavProps) {
  return (
    <nav className={cn("fixed top-3 left-2.5 right-2.5 z-10", className)}>
      <div className="grid grid-cols-[1fr_auto_1fr] items-center px-6 py-2 rounded-full transition-all duration-300">
        <a
          href="#"
          className="flex items-center justify-center font-mono text-[11px] uppercase tracking-wider text-white border border-white rounded-full px-[18px] py-[10px] h-9 w-[140px] hover:bg-white/10 transition-all duration-300"
        >
          Start Now
        </a>

        <a href="/" className="justify-self-center">
          <CiridaeLogoIcon className="w-8 h-8 text-white" />
        </a>

        <button
          type="button"
          className="justify-self-end flex items-center gap-3 font-mono text-[11px] uppercase tracking-wider text-white border border-white/40 rounded-full px-6 py-[10px] hover:border-white/70 hover:bg-white/10 transition-all duration-300 cursor-pointer"
        >
          Menu
          <MenuIcon className="w-5 h-3" />
        </button>
      </div>
    </nav>
  );
}
