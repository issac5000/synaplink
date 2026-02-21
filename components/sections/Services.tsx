"use client";

import { motion } from "framer-motion";
import {
  Globe,
  Bot,
  Workflow,
  Megaphone,
  Video,
  Lightbulb,
} from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";

const services = [
  {
    icon: Globe,
    title: "Création de sites web & applications",
    description:
      "Du site vitrine au SaaS complet — interfaces modernes, performantes et scalables.",
    tags: ["React", "Next.js", "Supabase", "Vercel"],
  },
  {
    icon: Bot,
    title: "Agents IA & chatbots intelligents",
    description:
      "Intégration d'assistants IA sur mesure dans vos produits et workflows.",
    tags: ["GPT-4", "Claude", "RAG", "Vector DB"],
  },
  {
    icon: Workflow,
    title: "Automatisation & workflows n8n",
    description:
      "Connectez vos outils, automatisez vos processus, gagnez des heures chaque semaine.",
    tags: ["n8n", "Make", "Webhooks", "API"],
  },
  {
    icon: Megaphone,
    title: "Présence en ligne & marketing digital",
    description:
      "SEO, stratégie de contenu, réseaux sociaux — visibilité et acquisition de clients.",
    tags: ["SEO", "Analytics", "Ads", "Content"],
  },
  {
    icon: Video,
    title: "Vidéo promotionnelle & motion design",
    description:
      "Présentations produit, teasers, tutoriels — du contenu qui convertit.",
    tags: ["Montage", "Motion", "Voix off"],
  },
  {
    icon: Lightbulb,
    title: "Conseil & accompagnement tech",
    description:
      "Architecture, choix stack, audit — on pense votre projet avant de le construire.",
    tags: ["Architecture", "Audit", "Stratégie"],
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-24 lg:py-32">
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
            Ce que nous{" "}
            <span className="gradient-text">construisons</span> pour vous
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <GlassCard className="h-full group">
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5 group-hover:animate-[pulse-glow_2s_ease_infinite] transition-all duration-300">
                  <service.icon className="w-6 h-6 text-accent" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold font-[family-name:var(--font-space-grotesk)] text-text-primary mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-text-secondary leading-relaxed mb-5">
                  {service.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-full bg-accent/10 text-accent font-[family-name:var(--font-jetbrains-mono)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
