// ABOUTME: Security section with vertical zigzag timeline and three security features
// ABOUTME: Features: Data Encryption, Access Control, Infrastructure Protection with copper accents

import { cn } from "@/lib/utils";

interface SecuritySectionProps {
  className?: string;
}

const features = [
  {
    tag: "01 - DE",
    title: "DATA ENCRYPTION",
    description:
      "Information is encrypted in transit and at rest with industry-leading standards.",
    side: "right" as const,
  },
  {
    tag: "02 - AC",
    title: "ACCESS CONTROL",
    description:
      "Only the right people can access the right data, at the right time.",
    side: "left" as const,
  },
  {
    tag: "03 - IP",
    title: "INFRASTRUCTURE PROTECTION",
    description:
      "Built on secure cloud architecture with 24/7 monitoring.",
    side: "right" as const,
  },
];

export function SecuritySection({ className }: SecuritySectionProps) {
  return (
    <section className={cn("py-[120px] bg-runbit-black", className)}>
      <div className="mx-auto max-w-7xl px-6">
        <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-white/50 text-center mb-4">
          SECURITY
        </p>
        <h2 className="font-sans text-[32px] font-normal text-white/60 uppercase text-center leading-[1.3]">
          Enterprise Grade Security
        </h2>

        <div className="relative mt-16 max-w-[800px] mx-auto">
          {features.map((feature, i) => (
            <div
              key={feature.tag}
              className="relative flex flex-col items-center py-4"
            >
              {/* Tag pill */}
              <span className="inline-flex font-mono text-[11px] uppercase tracking-wider border border-[#b87a4b] rounded-full px-4 py-1.5 text-[#c4946a] bg-[#b87a4b]/10">
                {feature.tag}
              </span>

              {/* Line + Content row */}
              <div className="flex items-start mt-4 w-full">
                {/* Left content */}
                <div className="flex-1 pr-8">
                  {feature.side === "left" && (
                    <div className="text-right">
                      <h3 className="font-sans text-[16px] font-normal text-white uppercase tracking-[0.05em]">
                        {feature.title}
                      </h3>
                      <p className="font-body text-[15px] text-white/50 leading-[1.6] mt-2 max-w-[300px] ml-auto">
                        {feature.description}
                      </p>
                    </div>
                  )}
                </div>

                {/* Center vertical line */}
                <div
                  className={cn(
                    "w-px bg-[#b87a4b]/60",
                    i < features.length - 1 ? "h-[120px]" : "h-[60px]"
                  )}
                />

                {/* Right content */}
                <div className="flex-1 pl-8">
                  {feature.side === "right" && (
                    <div className="text-left">
                      <h3 className="font-sans text-[16px] font-normal text-white uppercase tracking-[0.05em]">
                        {feature.title}
                      </h3>
                      <p className="font-body text-[15px] text-white/50 leading-[1.6] mt-2 max-w-[300px]">
                        {feature.description}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
