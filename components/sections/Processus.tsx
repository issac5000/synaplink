"use client";

import { motion } from "framer-motion";
import { Code2, PenTool, Phone, Rocket } from "lucide-react";

const steps = [
  {
    icon: Phone,
    number: "01",
    title: "Workshop",
    description: "Brief business, cadrage du besoin et objectifs de conversion.",
  },
  {
    icon: PenTool,
    number: "02",
    title: "Direction",
    description: "UI forte, architecture claire et priorites produit.",
  },
  {
    icon: Code2,
    number: "03",
    title: "Build sprint",
    description: "Developpement iteratif avec demos concretes chaque semaine.",
  },
  {
    icon: Rocket,
    number: "04",
    title: "Go live",
    description: "Mise en prod, analytics, optimisation continue.",
  },
];

export default function Processus() {
  return (
    <section id="processus" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="absolute inset-x-4 sm:inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-kicker mb-5">Comment on travaille</div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-space-grotesk)] tracking-[-0.005em] mb-4">
            Un parcours simple,
            <br />
            un <span className="gradient-text-animated">resultat</span> net
          </h2>
        </motion.div>

        <div className="relative">
          <div className="space-y-6 sm:space-y-4">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                className="relative grid sm:grid-cols-[56px_140px_1fr] gap-4 sm:gap-6 items-start py-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.42, delay: i * 0.08 }}
              >
                {i < steps.length - 1 && (
                  <div className="hidden sm:block absolute left-5 top-[52px] h-[calc(100%-18px)] w-px bg-gradient-to-b from-white/20 to-white/5" />
                )}
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-white/10 border border-accent/25 flex items-center justify-center relative z-10">
                  <step.icon className="w-5 h-5 text-accent" />
                </div>
                <div className="pt-1">
                  <p className="text-xs tracking-[0.12em] text-text-secondary font-[family-name:var(--font-jetbrains-mono)]">
                    ETAPE {step.number}
                  </p>
                  <h3 className="text-xl font-semibold font-[family-name:var(--font-space-grotesk)] text-text-primary">
                    {step.title}
                  </h3>
                </div>
                <p className="text-sm sm:text-base text-text-secondary leading-relaxed pt-1 max-w-2xl">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
