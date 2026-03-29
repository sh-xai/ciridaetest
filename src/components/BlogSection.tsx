// ABOUTME: Blog section with vertical timeline connecting three article cards
// ABOUTME: Cards show blog posts with images, category tags, titles, and descriptions

import Image from "next/image";
import { cn } from "@/lib/utils";

interface BlogSectionProps {
  className?: string;
}

const articles = [
  {
    image: "/images/blog/blog-01.webp",
    category: "News",
    title: "Introducing the Ciridae",
    description:
      "The AI revolution demands transformation, not optimization-become intelligent or become history.",
    href: "#",
  },
  {
    image: "/images/blog/blog-02.webp",
    category: "Case study",
    title: "Restoration Rebuttal Automation",
    description:
      "AI automation for insurance claim rebuttals, reducing CEO time investment by 90% per estimate.",
    href: "#",
  },
  {
    image: "/images/blog/blog-03.webp",
    category: "News",
    title: "The Future of Coding Is Orchestration",
    description:
      "From keystrokes to orchestration: Claude Code transforms engineering workflow with AI-driven code.",
    href: "#",
  },
];

export function BlogSection({ className }: BlogSectionProps) {
  return (
    <section className={cn("py-[120px] bg-ciridae-black", className)}>
      <div className="max-w-[1440px] mx-auto px-5">
        <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-white/50 text-center mb-4">
          BLOG
        </p>
        <h2 className="font-sans text-[32px] font-normal text-white/60 uppercase text-center max-w-[700px] mx-auto leading-[1.3]">
          Discover the process behind our work
        </h2>

        <div className="relative mt-16 flex flex-col items-center gap-16">
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-white/20" />

          {articles.map((article, i) => (
            <div
              key={i}
              className={cn(
                "relative flex items-start gap-8 max-w-[700px]",
                i % 2 !== 0 && "flex-row-reverse"
              )}
            >
              <div className="w-[340px] h-[220px] rounded-lg overflow-hidden flex-shrink-0">
                <Image
                  src={article.image}
                  alt={article.title}
                  width={340}
                  height={220}
                  className="object-cover w-full h-full"
                />
              </div>
              <div>
                <span className="font-mono text-[11px] uppercase tracking-wider border border-white/20 rounded-full px-3 py-1 text-white/50 inline-block mb-3">
                  {article.category}
                </span>
                <h3 className="font-sans text-[16px] uppercase text-white/80 mb-2">
                  {article.title}
                </h3>
                <p className="font-body text-[14px] text-white/40 leading-[1.6]">
                  {article.description}
                </p>
                <a
                  href={article.href}
                  className="font-mono text-[11px] uppercase tracking-wider text-white/60 mt-3 inline-block hover:text-white transition-colors"
                >
                  Read more
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <a
            href="#"
            className="inline-flex items-center justify-center font-mono text-[11px] uppercase tracking-wider border border-white/40 rounded-full px-8 py-3 text-white hover:bg-white/10 hover:border-white/70 transition-all duration-300"
          >
            EXPLORE ALL
          </a>
        </div>
      </div>
    </section>
  );
}
