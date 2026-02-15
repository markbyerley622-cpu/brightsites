"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    business: "Mitchell's Plumbing, Sydney",
    quote:
      "Bright Site built our website in under a week. We went from zero online presence to ranking on the first page of Google for local plumbing services. Enquiries doubled within the first month.",
    rating: 5,
    avatar: "SM",
  },
  {
    name: "Jake Thompson",
    business: "Thompson Electrical, Melbourne",
    quote:
      "I was quoted $5,000 from another agency. Bright Site delivered a better result for a fraction of the cost. The site looks incredible on mobile and my customers love it.",
    rating: 5,
    avatar: "JT",
  },
  {
    name: "Priya Sharma",
    business: "Bloom Café, Brisbane",
    quote:
      "Our old website was slow and ugly. Bright Site gave us a modern, fast site with online ordering. Our takeaway orders are up 40% since launch.",
    rating: 5,
    avatar: "PS",
  },
  {
    name: "Tom & Lisa Carter",
    business: "Carter Consulting Group, Perth",
    quote:
      "Professional, responsive, and genuinely cared about our business. The subscription plan means we never worry about our site — it just works. Absolutely recommend them.",
    rating: 5,
    avatar: "TC",
  },
  {
    name: "Marcus Lee",
    business: "Lee's Landscaping, Adelaide",
    quote:
      "I'm not tech-savvy at all, but the team made everything easy. They even helped me set up my Google Business profile. Getting calls every week now from the website.",
    rating: 5,
    avatar: "ML",
  },
  {
    name: "Emma Rodriguez",
    business: "ER Photography, Gold Coast",
    quote:
      "My portfolio site is stunning. The animations, the speed, the design — it looks like something a $10K agency would build. Best investment I've made in my business.",
    rating: 5,
    avatar: "ER",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative py-24 sm:py-32 bg-dark-surface/50 overflow-hidden"
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
          <span className="text-sm font-semibold uppercase tracking-widest text-cyber-yellow">
            Client Reviews
          </span>
          <h2 className="mt-4 text-4xl sm:text-5xl font-extrabold">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-lg text-white/50 max-w-2xl mx-auto">
            Real results from real Aussie businesses. Here&apos;s what happens when
            you invest in a proper website.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4, transition: { duration: 0.3 } }}
              className="rounded-2xl border border-white/10 bg-dark-card/60 backdrop-blur-sm p-6 hover:border-white/20 transition-all duration-300"
            >
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star
                    key={j}
                    size={16}
                    className="fill-cyber-yellow text-cyber-yellow"
                  />
                ))}
              </div>

              <p className="text-sm text-white/70 leading-relaxed mb-6">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-electric-pink to-deep-cobalt flex items-center justify-center text-xs font-bold">
                  {t.avatar}
                </div>
                <div>
                  <p className="text-sm font-semibold">{t.name}</p>
                  <p className="text-xs text-white/40">{t.business}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
