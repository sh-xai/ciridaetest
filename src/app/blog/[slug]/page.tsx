// ABOUTME: Individual blog article page with header, body text, and related articles
// ABOUTME: Light cream theme article layout with category tag, title, date, and author

import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { CiridaeLogoIcon, CiridaeWordmark } from "@/components/icons";
import { Nav } from "@/components/Nav";
import { FooterSection } from "@/components/FooterSection";
import { articles, getArticle } from "@/lib/blog-data";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await props.params;
  const article = getArticle(slug);

  if (!article) {
    return { title: "Not Found — Ciridae" };
  }

  return {
    title: `${article.title} — Ciridae`,
    description: article.excerpt,
  };
}

export default async function BlogArticlePage(props: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await props.params;
  const article = getArticle(slug);

  if (!article) {
    return notFound();
  }

  const relatedArticles = article.relatedSlugs
    .map((s) => getArticle(s))
    .filter(Boolean);

  return (
    <div className="min-h-screen bg-[#f5f0eb] text-[#0b0b0b]">
      <Nav variant="light" />

      <main className="pt-32 pb-24 px-5">
        <div className="flex flex-col items-center">
          <CiridaeLogoIcon className="w-[60px] h-auto text-black" />
          <CiridaeWordmark className="w-[100px] h-auto text-black mt-3" />
        </div>

        <div className="flex justify-center mt-10">
          <span className="font-mono text-[11px] uppercase tracking-wider border border-black/20 rounded-full px-4 py-1.5 text-black/50">
            {article.category}
          </span>
        </div>

        <h1 className="font-sans text-[48px] uppercase text-black text-center max-w-[900px] mx-auto mt-6 leading-[1.1]">
          {article.title}
        </h1>

        <div className="flex justify-between max-w-[700px] mx-auto mt-6">
          <span className="font-mono text-[11px] uppercase text-black/40">
            {article.date}
          </span>
          <span className="font-mono text-[11px] uppercase text-black/40">
            {article.readTime.toUpperCase()}
          </span>
        </div>

        <p className="font-mono text-[11px] uppercase tracking-wider text-black/50 text-center mt-4">
          BY {article.author.toUpperCase()}
        </p>

        <p className="font-body text-[18px] text-black/60 text-center max-w-[700px] mx-auto mt-8 leading-[1.6]">
          {article.excerpt}
        </p>

        <div className="max-w-[800px] mx-auto mt-12 rounded-xl overflow-hidden">
          <Image
            src={article.image}
            alt={article.title}
            width={800}
            height={450}
            className="w-full h-auto object-cover"
            priority
          />
        </div>

        <div className="max-w-[700px] mx-auto mt-12 space-y-6">
          {article.body.map((paragraph, i) => (
            <p
              key={i}
              className="font-body text-[16px] text-black/70 leading-[1.8]"
            >
              {paragraph}
            </p>
          ))}
        </div>

        {relatedArticles.length > 0 && (
          <div className="max-w-[700px] mx-auto mt-20">
            <h2 className="font-sans text-[24px] uppercase text-black mb-8">
              Related Articles
            </h2>

            <div className="space-y-6">
              {relatedArticles.map((related) => (
                <Link
                  key={related!.slug}
                  href={`/blog/${related!.slug}`}
                  className="group flex items-center gap-6 bg-black/[0.04] rounded-xl p-5 transition-colors hover:bg-black/[0.07]"
                >
                  <div className="w-[120px] h-[80px] rounded-lg overflow-hidden flex-shrink-0">
                    <Image
                      src={related!.image}
                      alt={related!.title}
                      width={120}
                      height={80}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <span className="font-mono text-[11px] uppercase tracking-wider text-black/40 block mb-1">
                      {related!.category}
                    </span>
                    <h3 className="font-sans text-[16px] uppercase text-black group-hover:text-black/70 transition-colors">
                      {related!.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </main>

      <FooterSection />
    </div>
  );
}
