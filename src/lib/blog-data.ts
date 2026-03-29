// ABOUTME: Blog article data for Runbit Labs site
// ABOUTME: Contains article metadata and body content for all blog posts

export interface BlogArticle {
  slug: string;
  title: string;
  category: "News" | "Case study";
  date: string;
  author: string;
  readTime: string;
  excerpt: string;
  image: string;
  body: string[];
  relatedSlugs: string[];
}

export const articles: BlogArticle[] = [
  {
    slug: "introducing-runbit-labs",
    title: "Introducing Runbit Labs",
    category: "News",
    date: "8/9/2025",
    author: "Runbit Labs",
    readTime: "5 min read",
    excerpt:
      "Runbit Labs helps enterprises navigate the AI transformation economy where competitive advantage is continuously reborn through intelligent systems.",
    image: "/images/blog/blog-01.webp",
    body: [
      "In the past five decades, humanity has undergone financialization, globalization, and digitalization. These served as powerful tailwinds for human progress and flourishing. But like all great movements, they are approaching their twilight hour. Today, a new era rises on the horizon: transformation.",
      "Humanity has been here before. We've stood at the threshold of transformation and ventured boldly into the horizon. The agricultural revolution, 10,000 years ago, allowed us to settle, accumulate surplus, and build civilization. The industrial revolution, 250 years ago, mechanized production and unleashed unprecedented material abundance. The digital revolution connected the world and democratized information. Each time, those who grasped the moment rewrote the rules of the engagement. Now we stand at another such threshold: the AI revolution.",
      "At Runbit Labs, we architect these metamorphoses. Our craft is helping enterprises master this discipline of perpetual transformation. We partner end-to-end: from strategy to roadmap, data modernization to agent deployment, workflow redesign to change management. We start with proof, move with velocity, and scale with conviction.",
    ],
    relatedSlugs: [
      "restoration-rebuttal-automation",
      "the-future-of-coding-is-orchestration",
    ],
  },
  {
    slug: "restoration-rebuttal-automation",
    title: "Restoration Rebuttal Automation",
    category: "Case study",
    date: "8/1/2025",
    author: "Runbit Labs",
    readTime: "5 min read",
    excerpt:
      "Runbit Labs built custom AI to automate insurance claim rebuttals for a Dallas restoration company, cutting deal cycles 60% and saving 15 hours per contract.",
    image: "/images/blog/blog-02.webp",
    body: [
      "We partnered with a large, PE-owned Dallas restoration business that relies on insurance claim reimbursement for water, fire, and mold remediation. Insurers frequently reduce or deny line items, which forces a rebuttal process before fair compensation is approved.",
      "When we arrived, the CEO was spending roughly 30% of their time building estimates, crafting rebuttals, and emailing adjusters. Contracts often required two to eight rounds of back-and-forth before signature.",
      "The impact is immediate and measurable: an average of fifteen hours saved per deal across the two to eight negotiation cycles typical for each contract; a roughly sixty percent reduction in deal process duration; and a greater than two percent increase in topline.",
    ],
    relatedSlugs: [
      "introducing-runbit-labs",
      "the-future-of-coding-is-orchestration",
    ],
  },
  {
    slug: "the-future-of-coding-is-orchestration",
    title: "The Future of Coding Is Orchestration",
    category: "News",
    date: "7/31/2025",
    author: "Jack Weissenberger",
    readTime: "5 min read",
    excerpt:
      "Runbit Labs' CTO explains how Claude Code shifted their engineering from manual coding to AI orchestration, accelerating delivery through specification.",
    image: "/images/blog/blog-03.webp",
    body: [
      "As CTO at Runbit Labs, I used to measure momentum in keystrokes\u2014lines added, diffs merged, tickets closed. That framing breaks down when the fastest path to production isn't typing; it's arranging. The future of coding is orchestration: specify the outcome, define contracts and invariants, and let the system assemble the pieces.",
      "Precision was the unlock. The more concrete the spec, file names, method signatures, payload shapes, return types, the more the system behaved like a teammate who knew our preferences.",
      "If yesterday's AI story was speed\u2014prompt, code, ship\u2014today's story is arrangement. The work that moves the needle is deciding how services talk, how failure behaves, and how knowledge persists. Claude Code didn't make us type faster; it made us specify better.",
    ],
    relatedSlugs: [
      "introducing-runbit-labs",
      "restoration-rebuttal-automation",
    ],
  },
];

export function getArticle(slug: string): BlogArticle | undefined {
  return articles.find((a) => a.slug === slug);
}
