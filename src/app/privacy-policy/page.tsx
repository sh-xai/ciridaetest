// ABOUTME: Privacy policy page with legal text content
// ABOUTME: Light cream theme with structured policy sections

import { Nav } from "@/components/Nav";
import { FooterSection } from "@/components/FooterSection";
import { RunbitLogoIcon, RunbitWordmark } from "@/components/icons";

export const metadata = {
  title: "Privacy Policy — Runbit Labs",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-[#f5f0eb] text-[#0b0b0b] min-h-screen">
      <Nav variant="light" />

      <div className="flex flex-col items-center pt-8 pb-4">
        <RunbitLogoIcon className="w-16 h-auto text-black" />
        <RunbitWordmark className="w-24 h-auto text-black mt-2" />
      </div>

      <article className="max-w-[800px] mx-auto px-5 pt-20 pb-32">
        <h1 className="font-sans text-[48px] uppercase text-black leading-[1.1]">
          Privacy Policy
        </h1>

        <p className="font-mono text-[11px] uppercase tracking-wider text-black/40 mt-8">
          Effective August 25, 2025
        </p>

        <div className="mt-8 space-y-6 font-body text-[16px] text-black/70 leading-[1.8]">
          <p>
            Welcome to the website of Runbit Labs, Ltd. and its subsidiaries and
            affiliates, collectively, &ldquo;Runbit Labs,&rdquo; &ldquo;we,&rdquo;
            or &ldquo;us.&rdquo; By using our website(s) (&ldquo;Site&rdquo;),
            you consent to this Privacy Policy (&ldquo;Policy&rdquo;). If you do
            not agree with this Policy, you may not use our Site.
          </p>

          <p>
            Your use of the Site and our services is also subject to any other
            written agreement between us and you, as well as any additional
            rules, conditions, or guidelines specific to the services or
            materials provided by us or made available through the Site.
          </p>

          <h2 className="font-sans text-[24px] uppercase text-black mt-12 mb-4">
            Information We Collect
          </h2>
          <p>
            <strong>Information you provide.</strong> We collect information you
            voluntarily provide, such as name, email address, phone number,
            company name, job title, billing details, and the content of
            messages you send to us.
          </p>
          <p>
            <strong>Information collected automatically.</strong> When you use
            the Site, we may automatically collect device and usage information,
            including IP address, browser type, operating system, referring URLs,
            pages viewed, links clicked, and the dates and times of your visits.
          </p>

          <h2 className="font-sans text-[24px] uppercase text-black mt-12 mb-4">
            How We Use Information
          </h2>
          <p>
            We use information to: (a) operate, maintain, and improve the Site
            and our services; (b) respond to inquiries and provide customer
            support; (c) personalize your experience; (d) send administrative
            messages and, where permitted, marketing communications; (e)
            monitor, detect, and prevent fraud, abuse, and security incidents;
            (f) comply with legal obligations and enforce our agreements.
          </p>

          <h2 className="font-sans text-[24px] uppercase text-black mt-12 mb-4">
            Cookies and Similar Technologies
          </h2>
          <p>
            We and our service providers may use cookies, web beacons, pixels,
            and similar technologies to operate the Site, remember your
            preferences, analyze how the Site is used, and deliver or measure the
            effectiveness of content.
          </p>

          <h2 className="font-sans text-[24px] uppercase text-black mt-12 mb-4">
            Sharing of Information
          </h2>
          <p>
            We may share information with vendors and service providers who
            process data on our behalf; with affiliates and subsidiaries; in
            connection with a corporate transaction; to comply with law; to
            protect rights, property, and safety; and with your consent.
          </p>

          <h2 className="font-sans text-[24px] uppercase text-black mt-12 mb-4">
            Data Security
          </h2>
          <p>
            We use reasonable administrative, technical, and physical safeguards
            designed to protect information against unauthorized access, loss,
            misuse, or alteration.
          </p>

          <h2 className="font-sans text-[24px] uppercase text-black mt-12 mb-4">
            Contact Us
          </h2>
          <p>Contact: info@runbitlabs.com</p>
          <p>Address: 1004A O&apos;Reilly Ave, San Francisco, CA 94129</p>
          <p>Phone: +1 610 608 9634</p>
        </div>
      </article>

      <FooterSection />
    </div>
  );
}
