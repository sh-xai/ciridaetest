// ABOUTME: About page for runbitlabs.com clone with hero, story, leadership, values, and numbers sections
// ABOUTME: Dark theme layout with glassmorphic cards and centered typography

import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { FooterSection } from "@/components/FooterSection";
import { CareersSection } from "@/components/CareersSection";
import { RunbitLogoIcon, RunbitWordmark } from "@/components/icons";

export const metadata: Metadata = {
  title: "About — Runbit Labs",
  description:
    "Runbit Labs is an AI partner for companies ready to move fast and build long-term.",
};

const founders = [
  {
    name: "Jack Soslow",
    title: "Co-Founder & CEO",
    paragraphs: [
      "Jack brings a rare combination of technical depth and venture insight to Runbit Labs. As a Partner at Andreessen Horowitz (a16z), he led AI investments for the Games team, closing 32 deals in just three years. Prior to that, he was a Data Scientist at Meta, where he helped build the command center for Oculus.",
      "He graduated as Valedictorian from the University of Pennsylvania, where he also founded the Data Science Club and was an All-Ivy football player.",
      "At Runbit Labs, he guides strategy, partnerships, and product vision — with a focus on helping teams turn ambitious ideas into real-world AI systems that scale.",
    ],
  },
  {
    name: "Jack Weissenberger",
    title: "Co-Founder & CTO",
    paragraphs: [
      "Jack Weissenberger brings a unique blend of research depth and production judgment to Runbit Labs. At Tenyx (acquired by Salesforce), he built the company\u2019s ML systems end-to-end to automate contact-center operations. After the acquisition, he became one of Salesforce\u2019s youngest Principal Machine Learning Engineer. Previously at Apple, he led the company\u2019s first generative-AI deployment for customer support.",
      "At Runbit Labs, he drives end-to-end AI transformation\u2014bridging strategy, data foundations, and production engineering to deliver reliable, scalable systems in the real world.",
    ],
  },
];

const values = [
  {
    number: "01",
    title: "Purpose",
    description:
      "We meet you where you are, immersing in your world to uncover bottlenecks, reveal hidden opportunities, and lay the foundation for transformative change.",
  },
  {
    number: "02",
    title: "Commitment",
    description:
      "We are committed to your long-term success. We partner closely to shape strategy, set world-class standards, and deliver transformation that lasts.",
  },
  {
    number: "03",
    title: "Quality",
    description:
      "We partner with you to create AI systems tailored to your unique operations: solutions that remove friction, unlock efficiency, and elevate performance across the board.",
  },
  {
    number: "04",
    title: "Collaboration",
    description:
      "We work alongside your teams to navigate change: providing stakeholder training, embedding best practices, and ensuring your organization is ready to excel with AI.",
  },
];

const stats = [
  { number: "01", label: "AUM OF OUR PE PARTNERS", value: "$400B" },
  { number: "02", label: "ANNUAL CLIENT REVENUE", value: "$900B" },
  { number: "03", label: "YEARS OF EXPERIENCE", value: "30 years" },
  { number: "04", label: "DAYS TO V0 SOLUTIONS", value: "5 days" },
];

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main className="bg-[#0b0b0b] text-white">
        {/* Hero Section */}
        <section className="relative min-h-screen flex flex-col items-center justify-center px-6">
          <div className="flex items-center gap-8 mb-12">
            <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-white/50">
              THE NEW INTELLIGENCE
            </span>
            <RunbitLogoIcon className="w-12 h-12 text-white" />
            <RunbitWordmark className="w-[100px] h-auto text-white" />
            <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-white/50">
              THE NEXT FRONTIER
            </span>
          </div>

          <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-white/50 mb-8">
            ABOUT
          </p>

          <h1 className="font-sans text-[62px] uppercase text-white leading-[1.05] text-center max-w-[1100px] mx-auto">
            RUNBIT LABS IS AN AI PARTNER FOR COMPANIES READY TO MOVE FAST AND BUILD
            LONG-TERM.
          </h1>
        </section>

        {/* Story Section */}
        <section className="py-[120px] px-6">
          <h2 className="font-sans text-[32px] uppercase text-white/60 text-center max-w-[900px] mx-auto leading-[1.3]">
            WE BRIDGE STRATEGY AND EXECUTION TO HELP TEAMS WIN WITH AI.
          </h2>

          <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-white/50 text-center mt-16 mb-8">
            Our story
          </p>

          <div className="max-w-[700px] mx-auto space-y-6">
            <p className="font-body text-[15px] text-white/50 leading-[1.8]">
              We started Runbit Labs after years of building AI systems inside
              large, complex organizations where ambition often hit red tape,
              and great ideas got lost in PowerPoints.
            </p>
            <p className="font-body text-[15px] text-white/50 leading-[1.8]">
              We knew there had to be a better way. So we set out to create the
              kind of partner we always wished we had: A team that could think
              strategically, move fast, and actually ship without sacrificing
              quality or depth.
            </p>
            <p className="font-body text-[15px] text-white/50 leading-[1.8]">
              At Runbit Labs, we blend deep technical expertise with sharp product
              thinking. We don&apos;t just prototype; we solve. We don&apos;t
              just advise; we build.
            </p>
          </div>
        </section>

        {/* Leadership Section */}
        <section className="py-[120px] px-6">
          <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-white/50 text-center mb-4">
            Leadership
          </p>
          <h2 className="font-sans text-[32px] uppercase text-white/60 text-center">
            We engineer intelligence
          </h2>

          <div className="grid grid-cols-2 gap-8 max-w-[1000px] mx-auto mt-16">
            {founders.map((founder) => (
              <div
                key={founder.name}
                className="backdrop-blur-[20px] bg-white/[0.04] border border-white/[0.08] rounded-2xl p-8"
              >
                <h3 className="font-sans text-[20px] text-white uppercase">
                  {founder.name}
                </h3>
                <p className="font-mono text-[11px] text-white/40 uppercase tracking-wider mt-1">
                  {founder.title}
                </p>
                <div className="mt-6 space-y-4">
                  {founder.paragraphs.map((paragraph, i) => (
                    <p
                      key={i}
                      className="font-body text-[14px] text-white/40 leading-[1.7]"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Values Section */}
        <section className="py-[120px] px-6">
          <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-white/50 text-center mb-4">
            OUR VALUES
          </p>
          <h2 className="font-sans text-[32px] uppercase text-white/60 text-center">
            We turn possibilities into performance.
          </h2>
          <p className="font-sans text-[20px] text-white/40 text-center mt-4 max-w-[700px] mx-auto">
            We are defined by precision, and committed to uncompromising
            quality.
          </p>

          <div className="grid grid-cols-2 gap-6 max-w-[1000px] mx-auto mt-12">
            {values.map((value) => (
              <div
                key={value.number}
                className="backdrop-blur-[20px] bg-white/[0.04] border border-white/[0.08] rounded-2xl p-8"
              >
                <p className="font-mono text-[11px] text-white/30">
                  {value.number}
                </p>
                <h3 className="font-sans text-[20px] text-white uppercase mt-3">
                  {value.title}
                </h3>
                <p className="font-body text-[14px] text-white/40 leading-[1.7] mt-3">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Numbers Section */}
        <section className="py-[120px] px-6">
          <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-white/50 text-center mb-4">
            Runbit Labs in numbers
          </p>
          <h2 className="font-sans text-[32px] uppercase text-white/60 text-center max-w-[800px] mx-auto">
            Numbers that reflect the scale, reach, and results of our work.
          </h2>

          <div className="grid grid-cols-4 gap-6 max-w-[1200px] mx-auto mt-12">
            {stats.map((stat) => (
              <div
                key={stat.number}
                className="border border-white/10 rounded-2xl p-8"
              >
                <p className="font-mono text-[11px] text-white/40 uppercase tracking-wider">
                  {stat.number}
                </p>
                <p className="font-mono text-[11px] text-white/40 uppercase tracking-wider mt-3">
                  {stat.label}
                </p>
                <p className="font-sans text-[48px] text-white mt-4">
                  {stat.value}
                </p>
              </div>
            ))}
          </div>
        </section>

        <CareersSection />
      </main>
      <FooterSection />
    </>
  );
}
