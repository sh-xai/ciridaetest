// ABOUTME: Careers section with Latin phrases and call-to-action button
// ABOUTME: Displays motivational phrases with "WORK WITH US" pill button

const phrases = [
  { main: "Audentes fortuna iuvat", sub: "Join us" },
  { main: "Fortitudine Vincimus", sub: "" },
  { main: "Carpe diem", sub: "Build the future" },
];

export function CareersSection() {
  return (
    <section className="py-[120px]">
      <div className="text-center">
        <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-white/50 text-center mb-4">
          CAREERS
        </p>
        <h2 className="font-sans text-[20px] font-normal text-white/60 uppercase text-center max-w-[600px] mx-auto leading-[1.4]">
          Join a team shaping the future of intelligent systems.
        </h2>

        <div className="mt-16 flex flex-col items-center gap-6">
          {phrases.map((phrase) => (
            <div key={phrase.main}>
              <p className="font-sans text-[32px] font-normal text-white/60 uppercase text-center">
                {phrase.main}
              </p>
              {phrase.sub && (
                <p className="font-mono text-[11px] uppercase tracking-wider text-white/30 mt-1">
                  {phrase.sub}
                </p>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16">
          <a
            href="#"
            className="inline-flex items-center justify-center font-mono text-[11px] uppercase tracking-wider border border-white/40 rounded-full px-8 py-3 text-white hover:bg-white/10 hover:border-white/70 transition-all duration-300"
          >
            WORK WITH US
          </a>
        </div>
      </div>
    </section>
  );
}
