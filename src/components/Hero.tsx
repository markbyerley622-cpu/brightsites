"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-dark-bg via-dark-bg to-deep-cobalt/30" />
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-electric-pink/20 rounded-full blur-[120px] animate-float" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-sky-blue/20 rounded-full blur-[120px] animate-float-delayed" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-deep-cobalt/15 rounded-full blur-[150px] animate-glow-pulse" />
        <div className="absolute top-20 right-1/4 w-64 h-64 bg-sunset-orange/10 rounded-full blur-[100px] animate-float" />
        <div className="absolute bottom-32 left-1/4 w-48 h-48 bg-cyber-yellow/10 rounded-full blur-[80px] animate-float-delayed" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8">
            <span className="w-2 h-2 rounded-full bg-leaf-green animate-pulse" />
            <span className="text-sm text-white/70">
              Premium Web Development
            </span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[1.1]"
        >
          <span className="bg-gradient-to-r from-electric-pink via-sunset-orange via-cyber-yellow via-leaf-green via-sky-blue to-deep-cobalt bg-clip-text text-transparent">
            Bright Site
          </span>
          <br />
          <span className="text-white">Websites</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="mt-6 sm:mt-8 text-lg sm:text-xl md:text-2xl text-white/60 max-w-2xl mx-auto leading-relaxed"
        >
          Modern, fast, high-quality websites built for Aussie small businesses.
          Launch your online presence in days, not months.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: "easeOut" }}
          className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#cta"
            className="group relative px-8 py-4 rounded-2xl font-semibold text-lg bg-gradient-to-r from-electric-pink to-deep-cobalt hover:shadow-xl hover:shadow-electric-pink/20 transition-all duration-300 hover:scale-105 w-full sm:w-auto text-center"
          >
            <span className="relative z-10">Get Started</span>
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-electric-pink via-sunset-orange to-deep-cobalt opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </a>
          <a
            href="#packages"
            className="px-8 py-4 rounded-2xl font-semibold text-lg border border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/10 transition-all duration-300 hover:scale-105 w-full sm:w-auto text-center"
          >
            View Packages
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-16 flex items-center justify-center gap-8 text-white/40 text-sm"
        >
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-leaf-green" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            No lock-in contracts
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-leaf-green" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Australian owned
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-leaf-green" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Fast turnaround
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-1.5"
        >
          <div className="w-1.5 h-3 rounded-full bg-white/40" />
        </motion.div>
      </div>
    </section>
  );
}
