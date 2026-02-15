"use client";

import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section
      id="cta"
      className="relative py-24 sm:py-32 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-electric-pink/20 via-deep-cobalt/30 to-sky-blue/20" />
      <div className="absolute inset-0 bg-dark-bg/60" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-electric-pink/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-sky-blue/10 rounded-full blur-[120px]" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
            Ready to{" "}
            <span className="bg-gradient-to-r from-electric-pink via-sunset-orange to-cyber-yellow bg-clip-text text-transparent">
              Brighten
            </span>{" "}
            Your Business Online?
          </h2>
          <p className="mt-6 text-lg sm:text-xl text-white/50 max-w-2xl mx-auto">
            For less than a coffee a day, we keep your site fast, secure, and
            updated so you never worry about it breaking.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10"
        >
          <a
            href="#"
            className="group relative inline-block px-10 py-5 rounded-2xl font-bold text-lg overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-electric-pink via-sunset-orange via-cyber-yellow via-leaf-green to-sky-blue animate-shimmer" />
            <div className="absolute inset-[2px] bg-dark-bg rounded-2xl" />
            <span className="relative z-10 bg-gradient-to-r from-electric-pink via-sunset-orange to-cyber-yellow bg-clip-text text-transparent group-hover:text-white transition-colors duration-300">
              Book a Free Call
            </span>
            <div className="absolute inset-[2px] rounded-2xl bg-gradient-to-r from-electric-pink via-sunset-orange to-sky-blue opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <span className="absolute inset-0 flex items-center justify-center z-20 font-bold text-lg text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              Book a Free Call
            </span>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-white/40"
        >
          <span>No obligation</span>
          <span className="hidden sm:block w-1 h-1 rounded-full bg-white/20" />
          <span>Free website audit included</span>
          <span className="hidden sm:block w-1 h-1 rounded-full bg-white/20" />
          <span>Response within 24 hours</span>
        </motion.div>
      </div>
    </section>
  );
}
