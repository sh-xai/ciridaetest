// ABOUTME: Blog listing page with featured articles grid and article list
// ABOUTME: Light cream theme with article cards linking to individual posts

import Link from "next/link";
import type { Metadata } from "next";
import { CiridaeLogoIcon, CiridaeWordmark } from "@/components/icons";
import { Nav } from "@/components/Nav";
import { FooterSection } from "@/components/FooterSection";
import { articles } from "@/lib/blog-data";

export const metadata: Metadata = { title: "Blog — Ciridae" };

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-[#f5f0eb] text-[#0b0b0b]">
      <Nav variant="light" />

      <main className="pt-32 pb-24 px-5">
        <div className="flex flex-col items-center">
          <CiridaeLogoIcon className="w-[60px] h-auto text-black" />
          <CiridaeWordmark className="w-[100px] h-auto text-black mt-3" />
        </div>

        <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-black/50 text-center mt-12">
          BLOG
        </p>

        <h1 className="font-sans text-[32px] uppercase text-black text-center max-w-[800px] mx-auto mt-4 leading-[1.3]">
          INSIGHTS, NEWS, AND STORIES SHAPING THE WAY WE WORK.
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1200px] mx-auto mt-16">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/blog/${article.slug}`}
              className="group bg-black/[0.04] rounded-xl p-6 transition-colors hover:bg-black/[0.07]"
            >
              <div className="w-8 h-px bg-black/20 mx-auto mb-6" />

              <span className="font-mono text-[11px] uppercase tracking-wider text-black/40 block mb-3">
                {article.category}
              </span>

              <h2 className="font-sans text-[18px] uppercase text-black leading-[1.3] mb-3 group-hover:text-black/70 transition-colors">
                {article.title}
              </h2>

              <p className="font-mono text-[11px] uppercase tracking-wider text-black/30">
                {article.date}
              </p>
            </Link>
          ))}
        </div>
      </main>

      <FooterSection />
    </div>
  );
}
