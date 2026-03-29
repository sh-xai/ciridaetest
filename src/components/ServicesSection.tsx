// ABOUTME: Three service cards with glassmorphic effect over a starry background image
// ABOUTME: Cards for Workflow Redesign, System Construction, and Command and Control

import Image from "next/image";
import { RunbitLogoIcon } from "@/components/icons";
import { cn } from "@/lib/utils";

interface ServicesSectionProps {
  className?: string;
}

const services = [
  {
    tag: "01 - WD",
    title: "WORKFLOW REDESIGN",
    description:
      "We map how work actually happens across people, systems, and handoffs.\u2009We redesign those workflows around AI so software — with human oversight — can execute the work end-to-end.",
  },
  {
    tag: "02 - SC",
    title: "SYSTEM CONSTRUCTION",
    description:
      "We build the software that runs the redesigned workflow in production.\u2009This includes unified data, encoded business logic, AI reasoning, and integration with existing systems of record.",
  },
  {
    tag: "03 - CC",
    title: "COMMAND AND CONTROL",
    description:
      "We operate the systems and take responsibility for their performance over time.\u2009Software executes the work continuously; humans oversee exceptions and approvals.",
  },
];

function ServiceCard({
  tag,
  title,
  description,
  className,
}: {
  tag: string;
  title: string;
  description: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-2xl p-8 flex flex-col min-h-[520px]",
        "backdrop-blur-[40px] bg-white/[0.06] border border-white/[0.1]",
        className
      )}
    >
      <span className="inline-flex self-start font-mono text-[11px] uppercase tracking-wider border border-white/30 rounded-full px-4 py-1.5 text-white/70">
        {tag}
      </span>

      <h3 className="font-sans text-[20px] font-normal text-white uppercase tracking-[0.02em] mt-6">
        {title}
      </h3>

      <div className="flex-1 flex items-center justify-start">
        <RunbitLogoIcon className="w-[160px] h-auto text-white/80" />
      </div>

      <p className="text-[15px] text-white/70 leading-[1.6] mt-auto">
        {description}
      </p>
    </div>
  );
}

export function ServicesSection({ className }: ServicesSectionProps) {
  return (
    <section className={cn("relative min-h-screen overflow-hidden", className)}>
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero.webp"
          fill
          className="object-cover"
          alt=""
          priority={false}
        />
      </div>

      <div className="relative z-10 grid grid-cols-3 gap-5 px-5 py-20 max-w-[1440px] mx-auto">
        {services.map((service, index) => (
          <ServiceCard
            key={service.tag}
            tag={service.tag}
            title={service.title}
            description={service.description}
            className={cn(
              index === 1 && "mt-20",
              index === 2 && "mt-40"
            )}
          />
        ))}
      </div>
    </section>
  );
}
