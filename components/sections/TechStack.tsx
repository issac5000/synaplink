"use client";

import { motion } from "framer-motion";
import {
  Monitor,
  Database,
  BrainCircuit,
  Cloud,
  Puzzle,
} from "lucide-react";

const categories = [
  {
    label: "Frontend",
    icon: Monitor,
    accent: "#38bdf8",
    techs: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    label: "Backend & BDD",
    icon: Database,
    accent: "#a855f7",
    techs: ["Supabase", "PostgreSQL", "Node.js", "Deno"],
  },
  {
    label: "IA & Automatisation",
    icon: BrainCircuit,
    accent: "#7c3aed",
    techs: ["OpenAI", "Anthropic", "Google Gemini", "n8n"],
  },
  {
    label: "Infrastructure",
    icon: Cloud,
    accent: "#f59e0b",
    techs: ["Vercel", "Stripe", "Infomaniak", "Capacitor"],
  },
  {
    label: "Services",
    icon: Puzzle,
    accent: "#10b981",
    techs: ["OneSignal", "Resend", "Calendly", "Apple Object Capture"],
  },
];

export default function TechStack() {
  return (
    <section className="relative py-16 lg:py-24 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-kicker mb-5">Sous le capot</div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-space-grotesk)] tracking-[-0.005em] mb-4">
            Notre <span className="gradient-text-animated">stack</span>{" "}
            technique
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Des technologies éprouvées, choisies pour leur performance et leur
            fiabilité.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-5">
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.label}
              className="group relative rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 overflow-hidden transition-colors duration-500 hover:bg-white/[0.04] w-full sm:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: ci * 0.07 }}
            >
              {/* Shine effect on hover */}
              <div
                className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                style={{
                  background: "linear-gradient(120deg, transparent 30%, rgba(255,255,255,0.05) 50%, transparent 70%)",
                }}
              />

              {/* Corner glow on hover */}
              <div
                className="absolute -top-16 -right-16 w-40 h-40 rounded-full opacity-0 group-hover:opacity-100 blur-[60px] transition-opacity duration-700 pointer-events-none"
                style={{ background: cat.accent }}
              />

              {/* Accent top-border line */}
              <div
                className="absolute top-0 left-6 right-6 h-px opacity-30 group-hover:opacity-60 transition-opacity duration-500"
                style={{
                  background: `linear-gradient(90deg, transparent, ${cat.accent}, transparent)`,
                }}
              />

              {/* Header */}
              <div className="relative flex items-center gap-3 mb-5">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: `${cat.accent}15` }}
                >
                  <cat.icon
                    className="w-[18px] h-[18px]"
                    style={{ color: cat.accent }}
                  />
                </div>
                <p
                  className="text-xs uppercase tracking-[0.12em] font-semibold font-[family-name:var(--font-jetbrains-mono)]"
                  style={{ color: cat.accent }}
                >
                  {cat.label}
                </p>
              </div>

              {/* Tech pills */}
              <div className="relative flex flex-wrap gap-2">
                {cat.techs.map((tech, ti) => (
                  <motion.span
                    key={tech}
                    className="px-3 py-1.5 rounded-lg text-sm text-text-secondary font-medium border border-white/[0.06] bg-white/[0.03] transition-all duration-300 hover:text-text-primary hover:border-white/[0.12] hover:bg-white/[0.06]"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.3,
                      delay: ci * 0.07 + ti * 0.04,
                    }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
