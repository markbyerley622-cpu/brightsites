"use client";

import { motion } from "framer-motion";
import { Instagram, ExternalLink } from "lucide-react";

export default function InstagramFollow() {
  return (
    <section className="relative py-16 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-2xl overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#833AB4] via-[#E91E63] to-[#FF5722]" />
          <div className="absolute inset-[1px] rounded-2xl bg-dark-card" />

          <div className="relative p-8 sm:p-12 text-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[#833AB4] via-[#E91E63] to-[#FF5722] mb-6"
            >
              <Instagram size={32} className="text-white" />
            </motion.div>

            <h3 className="text-2xl sm:text-3xl font-extrabold mb-3">
              Follow Us on Instagram
            </h3>
            <p className="text-white/50 mb-8 max-w-lg mx-auto">
              Behind-the-scenes builds, before &amp; after reveals, web tips, and
              client spotlights. Join our growing community of Aussie businesses.
            </p>

            <a
              href="https://www.instagram.com/brightsitesweb"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-xl font-semibold bg-gradient-to-r from-[#833AB4] via-[#E91E63] to-[#FF5722] hover:shadow-lg hover:shadow-[#E91E63]/25 transition-all duration-300 hover:scale-105"
            >
              <Instagram size={20} />
              @brightsitesweb
              <ExternalLink
                size={16}
                className="opacity-0 group-hover:opacity-100 transition-opacity"
              />
            </a>

            <div className="mt-8 grid grid-cols-3 gap-4 max-w-sm mx-auto">
              {["Reels", "Tips", "Results"].map((label, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                  className="text-center"
                >
                  <div className="text-2xl font-bold bg-gradient-to-r from-[#833AB4] to-[#FF5722] bg-clip-text text-transparent">
                    {["3–5/wk", "Daily", "Weekly"][i]}
                  </div>
                  <div className="text-xs text-white/40 mt-1">{label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
