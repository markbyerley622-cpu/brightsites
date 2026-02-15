"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

interface PricingCardProps {
  name: string;
  price: string;
  period?: string;
  features: string[];
  bestFor: string;
  color: string;
  popular?: boolean;
  delay?: number;
}

export default function PricingCard({
  name,
  price,
  period,
  features,
  bestFor,
  color,
  popular = false,
  delay = 0,
}: PricingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className={`relative rounded-2xl p-[1px] ${
        popular
          ? "bg-gradient-to-b from-sky-blue via-electric-pink to-deep-cobalt"
          : "bg-gradient-to-b from-white/20 to-white/5"
      }`}
    >
      {popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-electric-pink to-sky-blue text-xs font-bold uppercase tracking-wider">
          Most Popular
        </div>
      )}
      <div
        className={`rounded-2xl p-6 sm:p-8 h-full flex flex-col ${
          popular ? "bg-dark-card" : "bg-dark-card/80"
        }`}
      >
        <div className="flex items-center gap-3 mb-4">
          <div
            className="w-3 h-3 rounded-full"
            style={{ backgroundColor: color }}
          />
          <h3 className="text-xl font-bold">{name}</h3>
        </div>

        <div className="mb-6">
          <span className="text-4xl sm:text-5xl font-extrabold">{price}</span>
          {period && (
            <span className="text-white/50 text-lg ml-1">{period}</span>
          )}
        </div>

        <ul className="space-y-3 mb-8 flex-1">
          {features.map((feature, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-white/70">
              <Check
                size={16}
                className="mt-0.5 shrink-0"
                style={{ color }}
              />
              {feature}
            </li>
          ))}
        </ul>

        <p className="text-xs text-white/40 mb-6">
          Best for: {bestFor}
        </p>

        <a
          href="#cta"
          className={`block text-center py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 ${
            popular
              ? "bg-gradient-to-r from-electric-pink to-deep-cobalt hover:shadow-lg hover:shadow-electric-pink/25"
              : "border border-white/20 hover:border-white/40 hover:bg-white/5"
          }`}
        >
          Get Started
        </a>
      </div>
    </motion.div>
  );
}
