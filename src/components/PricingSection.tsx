"use client";

import { motion } from "framer-motion";
import PricingCard from "./PricingCard";

const packages = [
  {
    name: "Basic",
    price: "$500",
    color: "#4CAF50",
    features: [
      "Simple 5-page website (Home, About, Services, Contact, Blog)",
      "Clean, modern design",
      "Mobile responsive layout",
      "1 round of revisions",
      "Hosting setup guide",
    ],
    bestFor: "Small local shops and startups needing a quick online presence.",
  },
  {
    name: "Standard",
    price: "$850",
    color: "#03A9F4",
    popular: true,
    features: [
      "Everything in Basic",
      "Up to 10 pages + custom forms (bookings, enquiries)",
      "Basic SEO setup (keywords, fast loading)",
      "Email & social media integrations",
      "2 rounds of revisions",
      "Free domain suggestion assistance",
    ],
    bestFor:
      "Growing businesses wanting more functionality — consultants, cafes, trades.",
  },
  {
    name: "Premium",
    price: "$1,250",
    color: "#9C27B0",
    features: [
      "Everything in Standard",
      "Unlimited pages + e-commerce setup",
      "Advanced features (chatbots, analytics)",
      "Fully custom branded design",
      "3 rounds of revisions",
      "1 month free post-launch support",
    ],
    bestFor:
      "Larger businesses or online sellers scaling their operations.",
  },
];

export default function PricingSection() {
  return (
    <section id="packages" className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-electric-pink">
            One-Off Website Packages
          </span>
          <h2 className="mt-4 text-4xl sm:text-5xl font-extrabold">
            Website Packages
          </h2>
          <p className="mt-4 text-lg text-white/50 max-w-2xl mx-auto">
            Professional websites at a fraction of agency prices. No ongoing
            fees — just a one-time investment in your online presence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {packages.map((pkg, i) => (
            <PricingCard key={pkg.name} {...pkg} delay={i * 0.15} />
          ))}
        </div>
      </div>
    </section>
  );
}
