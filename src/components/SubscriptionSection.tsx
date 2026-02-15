"use client";

import { motion } from "framer-motion";
import PricingCard from "./PricingCard";

const plans = [
  {
    name: "Starter",
    price: "$79",
    period: "/month",
    color: "#4CAF50",
    features: [
      "Hosting + domain renewal help",
      "Monthly backups & security scans",
      "Speed & performance tweaks",
      "Unlimited minor text/image updates (up to 30 min/month)",
      "Email support",
      "Basic analytics setup",
    ],
    bestFor:
      "Very small local businesses — tradies, cafes, solo services needing simple web presence.",
  },
  {
    name: "Growth",
    price: "$149",
    period: "/month",
    color: "#03A9F4",
    popular: true,
    features: [
      "Everything in Starter",
      "More updates (up to 1 hour/month)",
      "SEO monitoring & basic improvements",
      "Contact form & booking integration fixes",
      "Monthly content suggestions",
      "Priority email + chat support",
    ],
    bestFor:
      "Growing businesses — consultants, small shops generating leads or bookings.",
  },
  {
    name: "Pro",
    price: "$249",
    period: "/month",
    color: "#9C27B0",
    features: [
      "Everything in Growth",
      "Up to 2 hours updates/month",
      "E-commerce support (if applicable)",
      "Advanced security + uptime monitoring",
      "Quarterly performance report",
      "Phone support option",
      "Custom feature tweaks",
    ],
    bestFor:
      "Businesses with online sales, higher traffic, or complex needs.",
  },
];

export default function SubscriptionSection() {
  return (
    <section
      id="subscriptions"
      className="relative py-24 sm:py-32 bg-dark-surface/50"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-dark-bg via-transparent to-dark-bg" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-sky-blue">
            Managed Website Plans
          </span>
          <h2 className="mt-4 text-4xl sm:text-5xl font-extrabold">
            Subscription Plans
          </h2>
          <p className="mt-4 text-lg text-white/50 max-w-2xl mx-auto">
            For less than a coffee a day, we keep your site fast, secure, and
            updated — so you never worry about it breaking.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan, i) => (
            <PricingCard key={plan.name} {...plan} delay={i * 0.15} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-8 text-sm text-white/40">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-leaf-green" />
              Minimum 6–12 month commitment
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyber-yellow" />
              1 month free for annual prepay
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-blue" />
              Optional low setup fee for new builds
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
