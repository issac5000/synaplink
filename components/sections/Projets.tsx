"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";

const projets = [
  {
    number: "01",
    name: "Synap'Kids",
    category: "Application mobile · IA parentale",
    description:
      "Compagnon numérique pour les 1000 premiers jours de l'enfant. Suivi de croissance WHO, assistant IA (Ped'IA), communauté de parents, notifications intelligentes. Plus de 322 000 lignes de code. Projet en cours de lancement.",
    stack: ["React Native", "Supabase", "GPT-4.1", "pgvector", "n8n"],
    accentColor: "#6C63FF",
  },
  {
    number: "02",
    name: "Menu3D",
    category: "SaaS B2B · Restauration",
    description:
      "Plateforme SaaS permettant aux restaurants de créer des menus en 3D et réalité augmentée via Apple Object Capture. De la visualisation produit à l'AR en passant par QR codes dynamiques.",
    stack: ["Next.js", "Supabase", "Apple Object Capture", "Three.js", "Stripe"],
    accentColor: "#00D4FF",
  },
  {
    number: "03",
    name: "Personnalité Comparée",
    category: "Application web · IA comportementale",
    description:
      "Outil d'analyse et de comparaison de personnalités basé sur l'intelligence artificielle. Profils psychologiques détaillés, compatibilité, insights comportementaux.",
    stack: ["Next.js", "Claude AI", "Supabase", "Tailwind"],
    accentColor: "#FF63A5",
  },
];

export default function Projets() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((c) => (c + 1) % projets.length);
  const prev = () => setCurrent((c) => (c - 1 + projets.length) % projets.length);

  return (
    <section id="projets" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-space-grotesk)] mb-4">
            Projets construits{" "}
            <span className="gradient-text">de A à Z</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-xl mx-auto">
            Pas des maquettes. Des produits réels, en production, utilisés
            aujourd&apos;hui.
          </p>
        </motion.div>

        {/* Desktop: 3 columns */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-6">
          {projets.map((projet, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <GlassCard className="h-full relative overflow-hidden group">
                {/* Watermark number */}
                <span
                  className="absolute -top-4 -right-2 text-[8rem] font-bold font-[family-name:var(--font-space-grotesk)] leading-none opacity-[0.03] select-none"
                  style={{ color: projet.accentColor }}
                >
                  {projet.number}
                </span>

                <div className="relative">
                  {/* Category badge */}
                  <span
                    className="inline-block text-xs font-medium px-3 py-1 rounded-full mb-4 font-[family-name:var(--font-jetbrains-mono)]"
                    style={{
                      background: `${projet.accentColor}15`,
                      color: projet.accentColor,
                    }}
                  >
                    {projet.category}
                  </span>

                  {/* Name */}
                  <h3 className="text-2xl font-bold font-[family-name:var(--font-space-grotesk)] text-text-primary mb-4">
                    {projet.name}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-text-secondary leading-relaxed mb-6">
                    {projet.description}
                  </p>

                  {/* Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {projet.stack.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-3 py-1 rounded-full glass text-text-secondary font-[family-name:var(--font-jetbrains-mono)]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <button
                    className="flex items-center gap-2 text-sm font-medium transition-colors duration-300 group/btn"
                    style={{ color: projet.accentColor }}
                  >
                    En savoir plus
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Mobile: carousel */}
        <div className="lg:hidden">
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
              >
                <GlassCard className="relative overflow-hidden">
                  <span
                    className="absolute -top-4 -right-2 text-[8rem] font-bold font-[family-name:var(--font-space-grotesk)] leading-none opacity-[0.03] select-none"
                    style={{ color: projets[current].accentColor }}
                  >
                    {projets[current].number}
                  </span>
                  <div className="relative">
                    <span
                      className="inline-block text-xs font-medium px-3 py-1 rounded-full mb-4 font-[family-name:var(--font-jetbrains-mono)]"
                      style={{
                        background: `${projets[current].accentColor}15`,
                        color: projets[current].accentColor,
                      }}
                    >
                      {projets[current].category}
                    </span>
                    <h3 className="text-2xl font-bold font-[family-name:var(--font-space-grotesk)] text-text-primary mb-4">
                      {projets[current].name}
                    </h3>
                    <p className="text-sm text-text-secondary leading-relaxed mb-6">
                      {projets[current].description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {projets[current].stack.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs px-3 py-1 rounded-full glass text-text-secondary font-[family-name:var(--font-jetbrains-mono)]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-6">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full glass flex items-center justify-center text-text-secondary hover:text-accent transition-colors"
                aria-label="Projet précédent"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <div className="flex gap-2">
                {projets.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      i === current
                        ? "bg-accent w-6"
                        : "bg-text-secondary/30"
                    }`}
                    aria-label={`Voir projet ${i + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={next}
                className="w-10 h-10 rounded-full glass flex items-center justify-center text-text-secondary hover:text-accent transition-colors"
                aria-label="Projet suivant"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
