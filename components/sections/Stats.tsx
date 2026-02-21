"use client";

import { motion } from "framer-motion";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

const stats = [
  { value: 500000, prefix: "+", label: "Lignes de code livrées" },
  { value: 3, label: "Projets SaaS en production" },
  { value: 2, label: "Ans d'expérience intensifs" },
  { value: 100, suffix: "%", label: "Projets livrés en production" },
];

export default function Stats() {
  return (
    <section id="stats" className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-background-secondary/50" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-space-grotesk)] gradient-text mb-2">
                <AnimatedCounter
                  target={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                />
              </div>
              <p className="text-sm sm:text-base text-text-secondary">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
