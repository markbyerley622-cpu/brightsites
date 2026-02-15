"use client";

import { motion } from "framer-motion";
import { Instagram, Facebook, Linkedin, Play } from "lucide-react";

const platforms = [
  {
    name: "Instagram",
    icon: Instagram,
    color: "#E91E63",
    description:
      "Reels, before/after showcases, and boosted ads targeting local Aussie businesses.",
    tips: [
      "Before/after website screenshots",
      "15–30 second Reels of live builds",
      "Client testimonial video clips",
      "Story polls & engagement",
      "$20–$50 boosted Reels for local reach",
    ],
  },
  {
    name: "Facebook",
    icon: Facebook,
    color: "#03A9F4",
    description:
      "Local groups, free audits, and business page content to generate leads.",
    tips: [
      "Join local business & tradie groups",
      "Share helpful website tips",
      "Offer free website audits",
      "Post package carousels",
      "Use Marketplace for free leads",
    ],
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    color: "#3F51B5",
    description:
      "Case studies, results-driven posts, and direct outreach to business owners.",
    tips: [
      "Share real client results",
      "Post case studies with data",
      "Connect with local business owners",
      "Engage authentically before pitching",
      "2 value-driven posts per week",
    ],
  },
  {
    name: "TikTok",
    icon: Play,
    color: "#FF5722",
    description:
      "Short, viral-style content showing AI-powered builds in real time.",
    tips: [
      '"AI built this website in 1 day" videos',
      "Fast-paced screen recordings",
      "Behind-the-scenes dev content",
      "3 posts per week for viral reach",
      "Trending sounds & formats",
    ],
  },
];

export default function SocialSection() {
  return (
    <section id="social" className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-sunset-orange">
            Social Growth
          </span>
          <h2 className="mt-4 text-4xl sm:text-5xl font-extrabold">
            How We Grow Online
          </h2>
          <p className="mt-4 text-lg text-white/50 max-w-2xl mx-auto">
            We practice what we preach — building an active, engaging social
            presence across every major platform.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {platforms.map((platform, i) => (
            <motion.div
              key={platform.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className="rounded-2xl border border-white/10 bg-dark-card/60 backdrop-blur-sm p-6 hover:border-white/20 transition-colors duration-300"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                style={{ backgroundColor: `${platform.color}20` }}
              >
                <platform.icon
                  size={24}
                  style={{ color: platform.color }}
                />
              </div>
              <h3 className="text-lg font-bold mb-2">{platform.name}</h3>
              <p className="text-sm text-white/50 mb-4">
                {platform.description}
              </p>
              <ul className="space-y-2">
                {platform.tips.map((tip, j) => (
                  <li
                    key={j}
                    className="text-xs text-white/40 flex items-start gap-2"
                  >
                    <span
                      className="w-1 h-1 rounded-full mt-1.5 shrink-0"
                      style={{ backgroundColor: platform.color }}
                    />
                    {tip}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
