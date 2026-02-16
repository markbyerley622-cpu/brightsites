"use client";

import Image from "next/image";
import { Instagram, Facebook, Linkedin } from "lucide-react";

const footerLinks = [
  {
    title: "Services",
    links: [
      { label: "Basic Package", href: "#packages" },
      { label: "Standard Package", href: "#packages" },
      { label: "Premium Package", href: "#packages" },
      { label: "Subscription Plans", href: "#subscriptions" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "#hero" },
      { label: "Reviews", href: "#testimonials" },
      { label: "FAQ", href: "#faq" },
      { label: "Contact", href: "#cta" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Free Website Audit", href: "#cta" },
      { label: "Blog", href: "#" },
      { label: "Case Studies", href: "#testimonials" },
      { label: "Privacy Policy", href: "#" },
    ],
  },
];

const socials = [
  {
    icon: Instagram,
    href: "https://www.instagram.com/brightsitesweb",
    label: "Instagram",
  },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2">
            <a href="#hero" className="flex items-center gap-3 mb-4">
              <Image
                src="/logo.png"
                alt="Bright Site Websites"
                width={72}
                height={72}
                className="w-[72px] h-[72px]"
              />
              <span className="text-lg font-bold bg-gradient-to-r from-electric-pink via-sunset-orange to-cyber-yellow bg-clip-text text-transparent">
                Bright Site Websites
              </span>
            </a>
            <p className="text-sm text-white/40 max-w-sm leading-relaxed mb-6">
              Modern, high-quality websites built for Australian small businesses.
              Fast turnaround, premium quality, honest pricing.
            </p>
            <div className="flex items-center gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-10 h-10 rounded-lg border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/30 transition-all duration-200"
                >
                  <s.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4 className="text-sm font-semibold mb-4">{group.title}</h4>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-white/40 hover:text-white/70 transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/30">
          <p>&copy; {new Date().getFullYear()} Bright Site Websites. All rights reserved.</p>
          <p>Australian owned &amp; operated</p>
        </div>
      </div>
    </footer>
  );
}
