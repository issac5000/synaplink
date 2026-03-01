"use client";

import { motion } from "framer-motion";

const partners = [
  "Next.js",
  "React",
  "TypeScript",
  "Supabase",
  "Vercel",
  "OpenAI",
  "Stripe",
  "n8n",
  "Google Cloud",
  "Apple",
  "PostgreSQL",
  "Capacitor",
  "OneSignal",
  "Resend",
  "Infomaniak",
  "Calendly",
  "Anthropic",
];

export default function Partners() {
  // Double the list for seamless infinite scroll
  const doubled = [...partners, ...partners];

  return (
    <section className="relative py-10 lg:py-14 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.p
          className="text-center text-xs uppercase tracking-[0.15em] text-text-secondary/50 font-[family-name:var(--font-jetbrains-mono)] mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Technologies & partenaires
        </motion.p>
      </div>

      {/* Marquee */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <div className="flex overflow-hidden">
          <motion.div
            className="flex shrink-0 gap-8 sm:gap-12 items-center"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
          >
            {doubled.map((name, i) => (
              <div
                key={`${name}-${i}`}
                className="flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-white/[0.06] bg-white/[0.02] shrink-0"
              >
                <div className="w-2 h-2 rounded-full bg-accent/40" />
                <span className="text-sm text-text-secondary/70 font-medium whitespace-nowrap">
                  {name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
