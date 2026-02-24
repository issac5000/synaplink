"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const featuredProject = {
  name: "Synap'Kids",
  category: "Application mobile · IA parentale",
  pitch:
    "Compagnon numerique pour les 1000 premiers jours de l enfant, avec suivi WHO, assistant IA et experience parentale unifiee.",
  highlight: "322k+ lignes de code",
  result: "Prototype complet + architecture production-ready",
  stack: ["React Native", "Supabase", "GPT-4.1", "pgvector", "n8n"],
};

const sideProjects = [
  {
    name: "Menu3D",
    category: "SaaS B2B · Restauration",
    pitch: "Creation de menus 3D et AR pour restaurants avec QR dynamiques.",
    result: "MVP lance + pipeline de scan produit industrialise",
    stack: ["Next.js", "Three.js", "Stripe", "Object Capture"],
    accent: "#38bdf8",
  },
  {
    name: "Personnalite Comparee",
    category: "Application web · IA comportementale",
    pitch: "Analyse de personnalites et compatibilites par IA avec rapports actionnables.",
    result: "Version beta exploitable pour coaching et recrutement",
    stack: ["Next.js", "Claude AI", "Supabase", "Tailwind"],
    accent: "#a855f7",
  },
];

export default function Projets() {
  return (
    <section id="projets" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          className="mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-kicker mb-5">Etudes de cas</div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-space-grotesk)] tracking-[-0.005em] max-w-3xl">
            Des produits <span className="gradient-text-animated">construits</span>
            <br />
            avec une logique <span className="gradient-text-animated">business</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-7 lg:gap-8">
          <motion.article
            className="glass rounded-[32px] p-6 sm:p-8 relative overflow-hidden"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
          >
            <div className="absolute -right-16 -top-20 w-56 h-56 rounded-full blur-3xl bg-white/[0.03]" />
            <div className="relative">
              <p className="inline-flex text-xs font-medium px-3 py-1 rounded-full font-[family-name:var(--font-jetbrains-mono)] mb-4 bg-accent/15 text-accent">
                Projet phare · {featuredProject.category}
              </p>
              <h3 className="text-3xl sm:text-4xl font-semibold font-[family-name:var(--font-space-grotesk)] text-text-primary leading-tight">
                {featuredProject.name}
              </h3>
              <p className="mt-4 text-text-secondary leading-relaxed max-w-3xl">
                {featuredProject.pitch}
              </p>

              <div className="mt-7 grid sm:grid-cols-2 gap-4">
                <div className="rounded-2xl border border-white/10 bg-white/10 px-4 py-4">
                  <p className="text-xs uppercase tracking-[0.1em] text-text-secondary font-[family-name:var(--font-jetbrains-mono)]">
                    Impact
                  </p>
                  <p className="mt-2 text-lg font-semibold text-text-primary">
                    {featuredProject.highlight}
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/10 px-4 py-4">
                  <p className="text-xs uppercase tracking-[0.1em] text-text-secondary font-[family-name:var(--font-jetbrains-mono)]">
                    Livraison
                  </p>
                  <p className="mt-2 text-lg font-semibold text-text-primary">
                    {featuredProject.result}
                  </p>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {featuredProject.stack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-3 py-1 rounded-full border border-white/10 bg-white/10 text-text-secondary font-[family-name:var(--font-jetbrains-mono)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href="#contact"
                className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-text-primary hover:text-accent transition-colors"
              >
                Voir la strategie appliquee
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </motion.article>

          <div className="space-y-5">
            {sideProjects.map((project, i) => (
              <motion.article
                key={project.name}
                className="border border-white/10 rounded-[24px] bg-white/10 px-5 py-5 sm:px-6 sm:py-6 relative overflow-hidden"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.45, delay: i * 0.07 }}
              >
                <div
                  className="absolute -right-10 -top-10 w-32 h-32 rounded-full blur-3xl opacity-35"
                  style={{ backgroundColor: `${project.accent}65` }}
                />
                <div className="relative">
                  <p
                    className="inline-flex text-xs font-medium px-3 py-1 rounded-full font-[family-name:var(--font-jetbrains-mono)] mb-3"
                    style={{ background: `${project.accent}18`, color: project.accent }}
                  >
                    {project.category}
                  </p>
                  <h3 className="text-2xl font-semibold font-[family-name:var(--font-space-grotesk)] text-text-primary">
                    {project.name}
                  </h3>
                  <p className="mt-2 text-sm text-text-secondary leading-relaxed">
                    {project.pitch}
                  </p>
                  <p className="mt-3 text-sm text-text-primary font-medium">
                    {project.result}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-3 py-1 rounded-full border border-white/10 bg-white/10 text-text-secondary font-[family-name:var(--font-jetbrains-mono)]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
