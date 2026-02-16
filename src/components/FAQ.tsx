"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "How long does it take to build my website?",
    a: "Most websites are completed in 3–7 business days depending on the package. Our streamlined workflow means we move fast without cutting corners. Premium builds with e-commerce may take up to 2 weeks.",
  },
  {
    q: "How do you keep costs so low?",
    a: "We use modern tools and streamlined processes to speed up design, content creation, and development. This means you get a premium-quality website at a fraction of traditional agency costs — with faster turnaround too.",
  },
  {
    q: "Do I own my website after it's built?",
    a: "Absolutely. With our one-off packages, you own everything — the code, the design, the content. We'll hand over all files and provide a setup guide so you're never locked in.",
  },
  {
    q: "What's the difference between a package and a subscription?",
    a: "Packages are a one-time build fee — we create your website and hand it over. Subscriptions include ongoing hosting, security, updates, and support so you never have to think about your site again.",
  },
  {
    q: "Can I switch subscription plans later?",
    a: "Yes! You can upgrade or downgrade your plan at any time. If your business grows and you need more support, we make it easy to scale up.",
  },
  {
    q: "What if I need changes after the revisions are used?",
    a: "Additional changes outside your included revision rounds are available at $80/hour. On subscription plans, updates are included in your monthly allowance.",
  },
  {
    q: "Do you work with businesses outside Australia?",
    a: "While we specialise in Aussie small businesses, we're happy to work with anyone. Our process is fully remote, so location doesn't matter.",
  },
  {
    q: "What happens if my site goes down?",
    a: "On subscription plans, we monitor uptime and handle issues proactively. For one-off builds, we provide documentation so your hosting provider can assist, or you can add a subscription plan anytime.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="relative py-24 sm:py-32">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-leaf-green">
            Common Questions
          </span>
          <h2 className="mt-4 text-4xl sm:text-5xl font-extrabold">
            Frequently Asked Questions
          </h2>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 p-5 rounded-xl border border-white/10 bg-dark-card/40 hover:bg-dark-card/70 transition-colors duration-200 text-left"
              >
                <span className="font-semibold text-sm sm:text-base">
                  {faq.q}
                </span>
                <ChevronDown
                  size={18}
                  className={`shrink-0 text-white/40 transition-transform duration-300 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 py-4 text-sm text-white/60 leading-relaxed">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
