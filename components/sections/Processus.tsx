"use client";

import { motion } from "framer-motion";
import { Code2, PenTool, Phone, Rocket } from "lucide-react";

const steps = [
  {
    icon: Phone,
    number: "01",
    title: "Workshop",
    description:
      "Brief business, cadrage du besoin et objectifs de conversion.",
    accent: "purple" as const,
  },
  {
    icon: PenTool,
    number: "02",
    title: "Direction",
    description: "UI forte, architecture claire et priorités produit.",
    accent: "cyan" as const,
  },
  {
    icon: Code2,
    number: "03",
    title: "Build sprint",
    description:
      "Développement itératif avec démos concrètes chaque semaine.",
    accent: "purple" as const,
  },
  {
    icon: Rocket,
    number: "04",
    title: "Go live",
    description: "Mise en prod, analytics, optimisation continue.",
    accent: "cyan" as const,
  },
];

const accentStyles = {
  purple: {
    iconBg: "bg-accent/10",
    iconText: "text-accent",
    glow: "bg-accent/20",
    number: "text-accent/[0.15]",
    borderHover: "group-hover:border-accent/20",
    line: "from-accent/40 to-accent/0",
  },
  cyan: {
    iconBg: "bg-accent-cyan/10",
    iconText: "text-accent-cyan",
    glow: "bg-accent-cyan/20",
    number: "text-accent-cyan/[0.15]",
    borderHover: "group-hover:border-accent-cyan/20",
    line: "from-accent-cyan/40 to-accent-cyan/0",
  },
};

export default function Processus() {
  return (
    <section
      id="processus"
      className="relative py-16 lg:py-24 overflow-hidden"
    >
      {/* Atmospheric glows */}
      <div className="absolute top-1/4 -left-40 w-80 h-80 bg-accent/[0.04] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-40 w-80 h-80 bg-accent-cyan/[0.04] rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="absolute inset-x-4 sm:inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        <motion.div
          className="text-center pt-8 sm:pt-10 mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-kicker mb-4">Processus</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-space-grotesk)] tracking-[-0.005em] mt-5 mb-4">
            Un parcours simple,
            <br />
            un <span className="gradient-text-animated">résultat</span> net
          </h2>
          <p className="text-text-secondary text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            Quatre étapes claires pour transformer votre vision en produit concret.
          </p>
        </motion.div>

        {/* Timeline layout */}
        <div className="relative">
          {/* Vertical connector line */}
          <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 lg:-translate-x-1/2 w-px">
            <motion.div
              className="w-full h-full bg-gradient-to-b from-accent/30 via-accent-cyan/20 to-transparent"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              style={{ transformOrigin: "top" }}
            />
          </div>

          <div className="space-y-6 lg:space-y-0">
            {steps.map((step, i) => {
              const styles = accentStyles[step.accent];
              const isLeft = i % 2 === 0;

              return (
                <motion.div
                  key={step.number}
                  className="relative grid grid-cols-[32px_1fr] lg:grid-cols-2 gap-4 lg:gap-12 lg:py-8"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                >
                  {/* Timeline dot — mobile: in first col / desktop: centered */}
                  <div className="flex lg:hidden items-start pt-7 justify-center z-10">
                    <div className="relative flex items-center justify-center">
                      <div
                        className={`absolute w-8 h-8 rounded-full ${styles.glow} blur-lg`}
                      />
                      <div className="w-3 h-3 rounded-full bg-background border-2 border-white/20 relative z-10" />
                    </div>
                  </div>
                  <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                    <div className="relative flex items-center justify-center">
                      <div
                        className={`absolute w-10 h-10 rounded-full ${styles.glow} blur-lg`}
                      />
                      <div className="w-4 h-4 rounded-full bg-background border-2 border-white/20 relative z-10" />
                    </div>
                  </div>

                  {/* Card — mobile: second col / desktop: alternate left/right */}
                  <div
                    className={`col-start-2 lg:col-start-auto ${
                      isLeft
                        ? "lg:col-start-1 lg:pr-8"
                        : "lg:col-start-2 lg:pl-8"
                    }`}
                  >
                    <div className="group relative rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 sm:p-8 transition-all duration-500 hover:bg-white/[0.04] hover:border-white/[0.12]">
                      {/* Large background number */}
                      <span
                        className={`absolute top-3 right-5 text-[5.5rem] sm:text-[7rem] font-bold font-[family-name:var(--font-space-grotesk)] leading-none ${styles.number} select-none pointer-events-none transition-all duration-500 group-hover:opacity-150`}
                      >
                        {step.number}
                      </span>

                      <div className="relative z-10">
                        {/* Icon */}
                        <div
                          className={`w-11 h-11 rounded-xl ${styles.iconBg} flex items-center justify-center mb-5`}
                        >
                          <step.icon
                            className={`w-5 h-5 ${styles.iconText}`}
                          />
                        </div>

                        {/* Label */}
                        <p className="text-[11px] tracking-[0.12em] uppercase text-text-secondary font-[family-name:var(--font-jetbrains-mono)] mb-1.5">
                          Étape {step.number}
                        </p>

                        {/* Title */}
                        <h3 className="text-xl sm:text-2xl font-semibold font-[family-name:var(--font-space-grotesk)] text-text-primary mb-3">
                          {step.title}
                        </h3>

                        {/* Description */}
                        <p className="text-sm sm:text-base text-text-secondary leading-relaxed max-w-md">
                          {step.description}
                        </p>
                      </div>

                      {/* Subtle glow on hover */}
                      <div
                        className={`absolute -inset-px rounded-2xl ${styles.glow} opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 pointer-events-none -z-10`}
                      />
                    </div>
                  </div>

                  {/* Empty col for alternating layout — desktop only */}
                  {isLeft ? (
                    <div className="hidden lg:block lg:col-start-2" />
                  ) : (
                    <div className="hidden lg:block lg:col-start-1 lg:row-start-1" />
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
