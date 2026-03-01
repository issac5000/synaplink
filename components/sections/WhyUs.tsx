"use client";

import { motion } from "framer-motion";
import { Zap, Layers, Eye, Handshake } from "lucide-react";

const differentiators = [
  {
    icon: Zap,
    title: "Livraison rapide",
    description:
      "Site vitrine en moins d'une semaine, agent IA en deux. On ne traîne pas, on livre.",
    accent: "text-amber-400",
    bg: "bg-amber-400/10",
  },
  {
    icon: Layers,
    title: "Stack moderne",
    description:
      "Next.js, Supabase, n8n, OpenAI — des technos solides qui scalent avec votre business.",
    accent: "text-accent-cyan",
    bg: "bg-accent-cyan/10",
  },
  {
    icon: Eye,
    title: "Approche produit",
    description:
      "On ne code pas à l'aveugle. Stratégie, UX et conversion sont intégrés dès le brief.",
    accent: "text-accent",
    bg: "bg-accent/10",
  },
  {
    icon: Handshake,
    title: "Transparence totale",
    description:
      "Démos chaque semaine, feedback en continu. Vous voyez tout, vous validez tout.",
    accent: "text-emerald-400",
    bg: "bg-emerald-400/10",
  },
];

export default function WhyUs() {
  return (
    <section className="relative py-16 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-kicker mb-5">Nos engagements</div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-space-grotesk)] tracking-[-0.005em] mb-4">
            Pourquoi <span className="gradient-text-animated">Synap&apos;Link</span> ?
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
          {differentiators.map((item, i) => (
            <motion.div
              key={item.title}
              className="group relative rounded-3xl border border-white/[0.06] bg-white/[0.02] p-5 sm:p-6 hover:bg-white/[0.04] transition-all duration-300 overflow-hidden"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
            >
              {/* Shine effect on hover */}
              <div
                className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                style={{
                  background: "linear-gradient(120deg, transparent 30%, rgba(255,255,255,0.05) 50%, transparent 70%)",
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
