"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Bot, Globe, Lightbulb, Megaphone, Video, Workflow } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Sites web & applications",
    description: "Du site vitrine au SaaS complet, avec un vrai niveau produit.",
  },
  {
    icon: Bot,
    title: "Agents IA & chatbots",
    description: "Assistants connectes a tes outils metier pour gagner du temps.",
  },
  {
    icon: Workflow,
    title: "Automatisation workflows",
    description: "Stack n8n/Make/API pour supprimer les taches repetitives.",
  },
  {
    icon: Megaphone,
    title: "Presence & acquisition",
    description: "SEO, contenu, tracking, conversion et croissance durable.",
  },
  {
    icon: Video,
    title: "Video & motion",
    description: "Assets visuels premium pour vendre mieux et plus vite.",
  },
  {
    icon: Lightbulb,
    title: "Conseil produit",
    description: "Roadmap, priorites, choix techniques et cadrage execution.",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-kicker mb-5">Ce que nous livrons</div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-space-grotesk)] tracking-[-0.005em] mb-4">
            Des services adaptés
            <br />
            à vos <span className="gradient-text-animated">ambitions</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-10 lg:gap-16 items-start lg:items-center">
          <motion.div
            className="glass rounded-[30px] p-7 sm:p-8 lg:self-center"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xs uppercase tracking-[0.1em] text-text-secondary mb-4 font-[family-name:var(--font-jetbrains-mono)]">
              Studio Focus
            </p>
            <p className="text-2xl sm:text-3xl font-semibold font-[family-name:var(--font-space-grotesk)] text-text-primary leading-tight">
              On priorise ce qui cree de la valeur business, vite.
            </p>
            <p className="mt-5 text-text-secondary leading-relaxed">
              Une equipe compacte, des cycles courts, et des livrables concrets a chaque sprint.
            </p>
            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-text-primary hover:text-accent transition-colors"
            >
              Discuter de ton projet
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </motion.div>

          <div className="divide-y divide-white/10 border-y border-white/10">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                className="py-5 sm:py-6 flex items-start gap-4 group"
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.45, delay: i * 0.05 }}
              >
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center mt-0.5">
                  <service.icon className="w-5 h-5 text-accent" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl font-semibold font-[family-name:var(--font-space-grotesk)] text-text-primary">
                    {service.title}
                  </h3>
                  <p className="text-sm text-text-secondary mt-1.5 leading-relaxed">
                    {service.description}
                  </p>
                </div>
                <ArrowUpRight className="w-4 h-4 text-text-secondary group-hover:text-accent group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
