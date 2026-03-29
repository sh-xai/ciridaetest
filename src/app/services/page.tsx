// ABOUTME: Services page with light/cream theme showing Ciridae's AI transformation offerings
// ABOUTME: Sections: header with hero, service items, process steps, blog, testimonials, careers, footer

import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { FooterSection } from "@/components/FooterSection";
import { BlogSection } from "@/components/BlogSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { CareersSection } from "@/components/CareersSection";
import { CiridaeLogoIcon, CiridaeWordmark } from "@/components/icons";

export const metadata: Metadata = {
  title: "Services — Ciridae",
  description: "We embed in your team to design custom AI systems.",
};

const services = [
  {
    tag: "01 - DI",
    title: "DILIGENCE",
    description:
      "Mapping AI opportunities and exposure across the business, we assess both the upside potential and the disruption risks.",
  },
  {
    tag: "02 - AU",
    title: "AUDIT",
    description:
      "We map your workflows, processes, and decision chains to identify high-impact AI opportunities and quantify their value to your business.",
  },
  {
    tag: "03 - TR",
    title: "TRANSFORMATION",
    description:
      "We design and build AI systems that deliver measurable gains in speed, accuracy, and scalability — without disrupting critical workflows.",
  },
  {
    tag: "04 - CR",
    title: "CRUCIBLE",
    description:
      "Our in-house platform accelerates the development and scaling of custom AI software: secure, compliant, and ready for adoption.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Market Scan",
    description:
      "We analyze your competitors' AI strategies and transformation roadmaps to identify gaps, benchmarks, and strategic opportunities.",
  },
  {
    number: "02",
    title: "Audit & Align",
    description:
      "We meet you where you are. Our team audits your current processes to uncover friction points and opportunities for transformation.",
  },
  {
    number: "03",
    title: "Build & Automate",
    description:
      "Our engineers design and build custom AI tools tailored to your business. These products automate high-friction workflows and unlock operational efficiency.",
  },
  {
    number: "04",
    title: "Enable & Train",
    description:
      "We guide your teams through change. From stakeholder training to best practices, we make sure your organization is ready to adopt and thrive with AI.",
  },
  {
    number: "05",
    title: "Deploy & Evolve",
    description:
      "Our partnership is long-term. We support deployment, monitor performance, and continuously improve your tools to ensure lasting value.",
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-[#f5f0eb] text-[#0b0b0b]">
      <Nav variant="light" />

      <main>
        {/* Header */}
        <section className="pt-[140px] pb-[80px]">
          <div className="flex flex-col items-center">
            <CiridaeLogoIcon className="w-[60px] h-auto text-black" />
            <CiridaeWordmark className="w-[100px] h-auto text-black mt-3" />
          </div>

          <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-black/50 text-center mt-12">
            SERVICES
          </p>
          <h1 className="font-sans text-[32px] font-normal uppercase text-black text-center max-w-[800px] mx-auto leading-[1.3] mt-4">
            WE EMBED IN YOUR TEAM TO DESIGN CUSTOM AI SYSTEMS
          </h1>

          <div className="w-px h-[300px] bg-black/20 mx-auto my-12" />

          <p className="font-sans text-[32px] font-normal uppercase text-black/60 text-center max-w-[800px] mx-auto leading-[1.3]">
            FREEING YOUR SHARPEST MINDS TO FOCUS ON THEIR AREAS OF DEEP
            EXPERTISE
          </p>
        </section>

        {/* What We Do */}
        <section className="py-[120px]">
          <div className="max-w-[900px] mx-auto px-5">
            <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-black/50 text-center mb-4">
              What we do
            </p>
            <h2 className="font-sans text-[32px] font-normal uppercase text-black/60 text-center leading-[1.3] mb-16">
              AI TRANSFORMATION FOR YOUR BUSINESS AT SPEED AND SCALE
            </h2>

            <div className="flex flex-col">
              {services.map((service) => (
                <div
                  key={service.tag}
                  className="flex items-start justify-between gap-8 border-b border-black/10 py-8"
                >
                  <span className="font-mono text-[11px] uppercase border border-black/20 rounded-full px-4 py-1.5 shrink-0">
                    {service.tag}
                  </span>
                  <div className="flex-1">
                    <h3 className="font-sans text-[20px] uppercase text-black">
                      {service.title}
                    </h3>
                    <p className="font-body text-[15px] text-black/50 leading-[1.6] mt-2">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-[120px]">
          <div className="max-w-[800px] mx-auto px-5">
            <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-black/50 text-center mb-4">
              Our process
            </p>
            <h2 className="font-sans text-[32px] font-normal uppercase text-black text-center leading-[1.3]">
              From insight to impact
            </h2>
            <p className="font-sans text-[32px] font-normal uppercase text-black/60 text-center leading-[1.3] mt-2">
              SCALING GENIUS IN YOUR ORGANIZATION through strategic partnership
            </p>

            <div className="flex flex-col mt-16">
              {processSteps.map((step) => (
                <div key={step.number} className="py-8">
                  <span className="font-sans text-[48px] text-black/10 leading-none">
                    {step.number}
                  </span>
                  <h3 className="font-sans text-[20px] uppercase text-black mt-2">
                    {step.title}
                  </h3>
                  <p className="font-body text-[15px] text-black/50 leading-[1.6] mt-2">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Shared sections with dark backgrounds */}
        <BlogSection />
        <TestimonialsSection />
        <CareersSection />
      </main>
      <FooterSection />
    </div>
  );
}
