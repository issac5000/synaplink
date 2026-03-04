"use client";

import { motion } from "framer-motion";
import { Brain, Rocket, Target, Sparkles } from "lucide-react";

const pillars = [
  {
    icon: Brain,
    title: "Intelligence artificielle",
    description:
      "On conçoit des agents IA, des chatbots et des workflows automatisés qui bossent pour vous — 24h/24, sans pause café.",
    accent: "text-accent-cyan",
    bg: "bg-accent-cyan/10",
  },
  {
    icon: Rocket,
    title: "Marketing digital",
    description:
      "SEO, acquisition, contenu, conversion : on construit des stratégies qui génèrent du trafic qualifié et des résultats concrets.",
    accent: "text-accent",
    bg: "bg-accent/10",
  },
  {
    icon: Target,
    title: "Développement sur mesure",
    description:
      "Sites vitrines, applications web, SaaS — chaque projet est pensé pour performer et évoluer avec votre business.",
    accent: "text-amber-400",
    bg: "bg-amber-400/10",
  },
  {
    icon: Sparkles,
    title: "Approche hybride",
    description:
      "On fusionne technologie et créativité pour créer des solutions que vos concurrents n'ont pas encore imaginées.",
    accent: "text-emerald-400",
    bg: "bg-emerald-400/10",
  },
];

export default function AboutUs() {
  return (
    <section id="about" className="relative py-16 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-kicker mb-5">Qui sommes-nous</div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-space-grotesk)] tracking-[-0.005em] mb-4">
            L&apos;agence qui connecte{" "}
            <span className="gradient-text-animated">IA</span> et{" "}
            <span className="gradient-text-animated">croissance</span>
          </h2>
        </motion.div>

        {/* Description */}
        <motion.div
          className="max-w-3xl mx-auto text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <p className="text-base sm:text-lg text-text-secondary leading-relaxed">
            <span className="text-text-primary font-semibold">Synap&apos;Link</span>, c&apos;est une agence nouvelle génération spécialisée en{" "}
            <span className="text-text-primary">intelligence artificielle</span> et{" "}
            <span className="text-text-primary">marketing digital</span>. On aide les entreprises à se démarquer en combinant des outils IA puissants, des sites web performants et des stratégies d&apos;acquisition qui convertissent — le tout avec une exécution rapide et un vrai niveau produit.
          </p>
        </motion.div>

        {/* Pillars grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
          {pillars.map((item, i) => (
            <motion.div
              key={item.title}
              className="group relative rounded-3xl border border-white/[0.06] bg-white/[0.02] p-5 sm:p-6 hover:bg-white/[0.04] transition-all duration-300 overflow-hidden"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
            >
              <div
                className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                style={{
                  background:
                    "linear-gradient(120deg, transparent 30%, rgba(255,255,255,0.05) 50%, transparent 70%)",
                }}
              />
              <div
                className={`w-12 h-12 rounded-2xl ${item.bg} flex items-center justify-center mb-5`}
              >
                <item.icon className={`w-6 h-6 ${item.accent}`} />
              </div>
              <h3 className="text-lg font-semibold font-[family-name:var(--font-space-grotesk)] text-text-primary mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
