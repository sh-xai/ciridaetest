// ABOUTME: Terms and conditions page with legal text content
// ABOUTME: Light cream theme with structured terms sections

import { Nav } from "@/components/Nav";
import { FooterSection } from "@/components/FooterSection";
import { CiridaeLogoIcon, CiridaeWordmark } from "@/components/icons";

export const metadata = {
  title: "Terms and Conditions — Ciridae",
};

export default function TermsAndConditionsPage() {
  return (
    <div className="bg-[#f5f0eb] text-[#0b0b0b] min-h-screen">
      <Nav variant="light" />

      <div className="flex flex-col items-center pt-8 pb-4">
        <CiridaeLogoIcon className="w-16 h-auto text-black" />
        <CiridaeWordmark className="w-24 h-auto text-black mt-2" />
      </div>

      <article className="max-w-[800px] mx-auto px-5 pt-20 pb-32">
        <h1 className="font-sans text-[48px] uppercase text-black leading-[1.1]">
          Terms and Conditions
        </h1>

        <p className="font-mono text-[11px] uppercase tracking-wider text-black/40 mt-8">
          Effective August 25, 2025
        </p>

        <div className="mt-8 space-y-6 font-body text-[16px] text-black/70 leading-[1.8]">
          <p>
            Welcome to the website of Ciridae, Ltd. and its subsidiaries and
            affiliates, collectively, &ldquo;Ciridae,&rdquo; &ldquo;we,&rdquo;
            or &ldquo;us.&rdquo; By accessing or using our website(s)
            (&ldquo;Site&rdquo;), you agree to be bound by these Terms and
            Conditions (&ldquo;Terms&rdquo;). If you do not agree with these
            Terms, you may not use our Site.
          </p>

          <p>
            These Terms, together with any other written agreements between us
            and you, govern your access to and use of the Site, including any
            content, functionality, and services offered on or through the Site.
          </p>

          <h2 className="font-sans text-[24px] uppercase text-black mt-12 mb-4">
            User Conduct
          </h2>
          <p>
            You agree to use the Site only for lawful purposes and in accordance
            with these Terms. You agree not to: (a) use the Site in any way that
            violates any applicable federal, state, local, or international law
            or regulation; (b) engage in any conduct that restricts or inhibits
            anyone&apos;s use or enjoyment of the Site; (c) attempt to gain
            unauthorized access to, interfere with, damage, or disrupt any parts
            of the Site, the server on which the Site is stored, or any server,
            computer, or database connected to the Site; (d) use the Site to
            transmit, distribute, or store material that is harmful, threatening,
            abusive, harassing, defamatory, or otherwise objectionable; (e) use
            any automated means, including robots, crawlers, or scrapers, to
            access the Site for any purpose without our express written
            permission.
          </p>

          <h2 className="font-sans text-[24px] uppercase text-black mt-12 mb-4">
            Intellectual Property
          </h2>
          <p>
            The Site and its entire contents, features, and functionality,
            including but not limited to all information, software, text,
            displays, images, video, audio, design, selection, and arrangement
            thereof, are owned by Ciridae, its licensors, or other providers of
            such material and are protected by United States and international
            copyright, trademark, patent, trade secret, and other intellectual
            property or proprietary rights laws.
          </p>
          <p>
            You may not reproduce, distribute, modify, create derivative works
            of, publicly display, publicly perform, republish, download, store,
            or transmit any of the material on our Site without the prior written
            consent of Ciridae, except as permitted by applicable law.
          </p>

          <h2 className="font-sans text-[24px] uppercase text-black mt-12 mb-4">
            Contact Us
          </h2>
          <p>Contact: info@ciridae.com</p>
          <p>Address: 1004A O&apos;Reilly Ave, San Francisco, CA 94129</p>
          <p>Phone: +1 610 608 9634</p>
        </div>
      </article>

      <FooterSection />
    </div>
  );
}
