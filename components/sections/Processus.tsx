"use client";

import { motion } from "framer-motion";
import { Phone, PenTool, Code2, Rocket } from "lucide-react";

const steps = [
  {
    icon: Phone,
    number: "1",
    title: "Découverte",
    description: "Appel gratuit, brief complet, analyse de vos besoins et objectifs.",
  },
  {
    icon: PenTool,
    number: "2",
    title: "Architecture",
    description: "Choix tech, plan détaillé, estimation transparente.",
  },
  {
    icon: Code2,
    number: "3",
    title: "Construction",
    description: "Développement itératif avec reporting régulier et démos.",
  },
  {
    icon: Rocket,
    number: "4",
    title: "Lancement",
    description: "Déploiement, tests, suivi post-lancement et support.",
  },
];

export default function Processus() {
  return (
    <section
      id="processus"
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      <div className="absolute inset-0 bg-background-secondary/30" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-space-grotesk)] mb-4">
            De votre idée à votre produit{" "}
            <span className="gradient-text">en 4 étapes</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-24 left-[12.5%] right-[12.5%] h-[2px]">
            <motion.div
              className="h-full timeline-line rounded-full"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              style={{ transformOrigin: "left" }}
            />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                className="relative text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
              >
                {/* Icon circle */}
                <motion.div
                  className="relative mx-auto w-16 h-16 rounded-2xl glass flex items-center justify-center mb-6 group"
                  whileInView={{
                    boxShadow: [
                      "0 0 0 rgba(108, 99, 255, 0)",
                      "0 0 30px rgba(108, 99, 255, 0.3)",
                      "0 0 15px rgba(108, 99, 255, 0.1)",
                    ],
                  }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: i * 0.3 }}
                >
                  <step.icon className="w-7 h-7 text-accent" />
                  {/* Number badge */}
                  <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-accent text-white text-xs font-bold flex items-center justify-center font-[family-name:var(--font-space-grotesk)]">
                    {step.number}
                  </span>
                </motion.div>

                <h3 className="text-xl font-semibold font-[family-name:var(--font-space-grotesk)] text-text-primary mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed max-w-[250px] mx-auto">
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
