// ABOUTME: Fixed navigation bar with START NOW button, centered logo, and MENU button
// ABOUTME: Pill-shaped container with 3-column grid layout, supports light and dark variants

"use client";

import { CiridaeLogoIcon, MenuIcon } from "@/components/icons";
import { cn } from "@/lib/utils";

interface NavProps {
  className?: string;
  variant?: "dark" | "light";
}

export function Nav({ className, variant = "dark" }: NavProps) {
  const isDark = variant === "dark";
  const text = isDark ? "text-white" : "text-black";
  const border = isDark ? "border-white" : "border-black";
  const borderMuted = isDark ? "border-white/40" : "border-black/30";
  const hoverBg = isDark ? "hover:bg-white/10" : "hover:bg-black/5";
  const hoverBorder = isDark ? "hover:border-white/70" : "hover:border-black/60";

  return (
    <nav className={cn("fixed top-3 left-2.5 right-2.5 z-10", className)}>
      <div className="grid grid-cols-[1fr_auto_1fr] items-center px-6 py-2 rounded-full transition-all duration-300">
        <a
          href="#"
          className={cn(
            "flex items-center justify-center font-mono text-[11px] uppercase tracking-wider rounded-full px-[18px] py-[10px] h-9 w-[140px] transition-all duration-300",
            text, border, hoverBg
          )}
        >
          Start Now
        </a>

        <a href="/" className="justify-self-center">
          <CiridaeLogoIcon className={cn("w-8 h-8", text)} />
        </a>

        <button
          type="button"
          className={cn(
            "justify-self-end flex items-center gap-3 font-mono text-[11px] uppercase tracking-wider rounded-full px-6 py-[10px] transition-all duration-300 cursor-pointer",
            text, borderMuted, hoverBorder, hoverBg
          )}
        >
          Menu
          <MenuIcon className="w-5 h-3" />
        </button>
      </div>
    </nav>
  );
}
