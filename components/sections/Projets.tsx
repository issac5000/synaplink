"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles, Layers, Brain, ArrowUpRight } from "lucide-react";

const projects = [
  {
    name: "Synap'Kids",
    category: "App mobile · IA parentale",
    logo: "/logosynapkids.png",
    logoSize: 48,
    watermarkSize: 245,
    pitch:
      "Compagnon numerique pour les 1000 premiers jours de l enfant, avec suivi WHO, assistant IA et experience parentale unifiee.",
    result: "Prototype complet + architecture production-ready",
    stack: ["React Native", "Supabase", "GPT-4.1", "pgvector", "n8n"],
    accent: "#e8913a",
    gradient: "from-[#e8913a]/20 via-[#1b4f7a]/10 to-transparent",
    icon: Sparkles,
    url: "https://synapkids.com",
  },
  {
    name: "Menu3D",
    category: "SaaS B2B · Restauration",
    logo: "/menu3dlogo.png",
    pitch:
      "Creation de menus 3D et AR pour restaurants avec QR dynamiques.",
    result: "MVP lance + pipeline de scan produit industrialise",
    stack: ["Next.js", "Three.js", "Stripe", "Object Capture"],
    accent: "#38bdf8",
    gradient: "from-[#38bdf8]/15 via-[#38bdf8]/5 to-transparent",
    icon: Layers,
    invertLogo: true,
    url: "https://menu3d.net",
  },
  {
    name: "Personnalite Comparee",
    category: "App web · IA comportementale",
    logo: "/pclogo.png",
    pitch:
      "Analyse de personnalites et compatibilites par IA avec rapports actionnables.",
    result: "Version beta exploitable pour coaching et recrutement",
    stack: ["Next.js", "Claude AI", "Supabase", "Tailwind"],
    accent: "#a855f7",
    gradient: "from-[#a855f7]/15 via-[#c084fc]/5 to-transparent",
    icon: Brain,
    url: "https://personnalitecomparee.com",
  },
];

export default function Projets() {
  return (
    <section
      id="projets"
      className="relative py-16 lg:py-24 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-kicker mb-5">Etudes de cas</div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-space-grotesk)] tracking-[-0.005em] max-w-3xl mx-auto">
            Nos projets les plus{" "}
            <span className="gradient-text-animated">ambitieux</span>
          </h2>
        </motion.div>

        {/* Projects grid — 3 equal columns */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
          {projects.map((project, i) => (
            <Link
              key={project.name}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
            <motion.article
              className="group relative rounded-3xl sm:rounded-[40px] overflow-hidden glass-liquid h-full cursor-pointer"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              {/* Background */}
              <div className="absolute inset-0 bg-[#1a1a1a]" />
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-80`}
              />
              <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMC44IiBmaWxsPSIjZmZmIi8+PC9zdmc+')]" />

              {/* Accent glow */}
              <div
                className="absolute -top-16 -right-16 w-52 h-52 rounded-full blur-[80px] opacity-15 transition-opacity duration-700 group-hover:opacity-30"
                style={{ backgroundColor: project.accent }}
              />

              {/* Content */}
              <div className="relative p-5 sm:p-7 flex flex-col h-full min-h-[320px] sm:min-h-[380px]">
                {/* Category pill */}
                <div className="mb-5">
                  <span
                    className="inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] px-2.5 py-1.5 rounded-full font-[family-name:var(--font-jetbrains-mono)] border"
                    style={{
                      borderColor: `${project.accent}30`,
                      background: `${project.accent}12`,
                      color: project.accent,
                    }}
                  >
                    <project.icon className="w-3 h-3" />
                    {project.category}
                  </span>
                </div>

                {/* Logo + Title */}
                <div className="flex items-center gap-4 mb-5">
                  <div
                    className="shrink-0 flex items-center justify-center w-14 h-14 rounded-full border border-white/10 bg-white/5 shadow-lg overflow-hidden"
                    style={{
                      boxShadow: `0 6px 24px ${project.accent}12`,
                    }}
                  >
                    <Image
                      src={project.logo}
                      alt={`${project.name} logo`}
                      width={"logoSize" in project ? project.logoSize : 40}
                      height={"logoSize" in project ? project.logoSize : 40}
                      className={`object-contain${"invertLogo" in project && project.invertLogo ? " invert" : ""}`}
                    />
                  </div>
                  <h3 className="text-2xl font-bold font-[family-name:var(--font-space-grotesk)] text-text-primary leading-tight tracking-[-0.01em]">
                    {project.name}
                  </h3>
                </div>

                {/* Pitch */}
                <p className="text-sm text-text-secondary leading-relaxed mb-4">
                  {project.pitch}
                </p>

                {/* Result */}
                <p className="text-sm text-text-primary font-medium mb-6">
                  {project.result}
                </p>

                {/* Spacer */}
                <div className="mt-auto" />

                {/* Stack */}
                <div className="flex flex-wrap gap-1.5">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] px-2.5 py-1 rounded-md border border-white/[0.06] bg-white/[0.03] text-text-secondary font-[family-name:var(--font-jetbrains-mono)] tracking-wide"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Visit arrow */}
                <div
                  className="absolute top-6 right-6 w-8 h-8 rounded-full flex items-center justify-center border border-white/10 bg-white/5 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110"
                  style={{ color: project.accent }}
                >
                  <ArrowUpRight className="w-4 h-4" />
                </div>

                {/* Watermark logo */}
                <div className="absolute -bottom-10 -right-10 opacity-[0.04] group-hover:opacity-[0.08] transition-opacity duration-700 pointer-events-none">
                  <Image
                    src={project.logo}
                    alt=""
                    width={"watermarkSize" in project ? project.watermarkSize : 220}
                    height={"watermarkSize" in project ? project.watermarkSize : 220}
                    className={`object-contain${"invertLogo" in project && project.invertLogo ? " invert" : ""}`}
                    aria-hidden
                  />
                </div>
              </div>
            </motion.article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
