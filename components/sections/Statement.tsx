"use client";

import { motion } from "framer-motion";

export default function Statement() {
  const words = [
    "«",
    "Quel",
    "que",
    "soit",
    "le",
    "niveau",
    "de",
    "complexité",
    "de",
    "votre",
    "projet,",
    "nous",
    "transformons",
    "vos",
    "idées",
    "en",
    "réalité,",
    "même",
    "celles",
    "qui",
    "vous",
    "paraissent",
    "impossibles.",
    "»",
  ];

  return (
    <section className="relative py-28 sm:py-36 lg:py-44 overflow-hidden">
      {/* Atmospheric glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full blur-[120px] bg-accent/[0.07] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[40%] w-[400px] h-[200px] rounded-full blur-[100px] bg-accent-cyan/[0.05] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
        {/* Expanding line */}
        <motion.div
          className="mx-auto h-px mb-16 sm:mb-20 bg-gradient-to-r from-transparent via-white/20 to-transparent"
          initial={{ width: 0 }}
          whileInView={{ width: "60%" }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        />

        <motion.h2
          className="max-w-4xl mx-auto text-2xl sm:text-3xl lg:text-5xl font-medium italic font-[family-name:var(--font-space-grotesk)] leading-[1.25] tracking-[-0.01em] text-text-primary"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <span className="inline">
            {words.map((word, index) => {
              const isHighlight = index >= 11 && index <= 16;
              return (
                <motion.span
                  key={`${word}-${index}`}
                  className={`inline-block mr-[0.28em] ${
                    isHighlight ? "gradient-text-animated not-italic font-bold" : ""
                  }`}
                  initial={{ opacity: 0, y: 12, filter: "blur(4px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.36, ease: "easeOut", delay: 0.05 + index * 0.07 }}
                >
                  {word}
                </motion.span>
              );
            })}
          </span>
        </motion.h2>

        {/* Expanding line */}
        <motion.div
          className="mx-auto h-px mt-16 sm:mt-20 bg-gradient-to-r from-transparent via-white/20 to-transparent"
          initial={{ width: 0 }}
          whileInView={{ width: "60%" }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </section>
  );
}
