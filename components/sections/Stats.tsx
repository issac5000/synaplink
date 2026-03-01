"use client";

import { motion } from "framer-motion";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

const stats = [
  { value: 500000, prefix: "+", label: "Lignes de code livrees" },
  { value: 3, label: "Produits SaaS en production" },
  { value: 2, label: "Ans de build intensif" },
  { value: 100, suffix: "%", label: "Projets livres en prod" },
];

export default function Stats() {
  return (
    <section id="stats" className="relative py-20 lg:py-24 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="border-y border-transparent py-10 relative">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-12">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
              >
                <p className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-space-grotesk)] gradient-text leading-none">
                  <AnimatedCounter
                    target={stat.value}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                  />
                </p>
                <p className="mt-4 text-sm sm:text-base text-text-secondary uppercase tracking-[0.08em]">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
