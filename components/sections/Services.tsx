"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Bot,
  Globe,
  Lightbulb,
  Megaphone,
  Video,
  Workflow,
  TrendingUp,
  Users,
  ShoppingCart,
  Clock,
  Zap,
  Star,
  MessageSquare,
  Eye,
  Target,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Service {
  icon: LucideIcon;
  number: string;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: Globe,
    number: "01",
    title: "Sites web & applications",
    description:
      "Du site vitrine au SaaS complet, avec un vrai niveau produit.",
  },
  {
    icon: Bot,
    number: "02",
    title: "Agents IA & chatbots",
    description:
      "Assistants connectés à tes outils métier pour gagner du temps.",
  },
  {
    icon: Workflow,
    number: "03",
    title: "Automatisation workflows",
    description: "Stack n8n/API pour supprimer les tâches répétitives.",
  },
  {
    icon: Megaphone,
    number: "04",
    title: "Présence & acquisition",
    description:
      "SEO, contenu, tracking, conversion et croissance durable.",
  },
  {
    icon: Video,
    number: "05",
    title: "Vidéo & motion",
    description:
      "Assets visuels premium pour vendre mieux et plus vite.",
  },
  {
    icon: Lightbulb,
    number: "06",
    title: "Conseil produit",
    description:
      "Roadmap, priorités, choix techniques et cadrage exécution.",
  },
];

function IPhoneMockup() {
  return (
    <div
      className="relative w-[260px] sm:w-[280px]"
      style={{ aspectRatio: "280/572" }}
    >
      <div className="absolute inset-[1.8%] top-[1.5%] bottom-[1.5%] rounded-[42px] bg-[#1c1c20]" />
      <div className="absolute inset-[4%] top-[8%] bottom-[4%] rounded-[28px] overflow-hidden flex flex-col">
        <div className="flex items-center justify-between px-5 pt-4 pb-2 shrink-0">
          <span className="text-[10px] text-white/60 font-medium">9:41</span>
          <div className="flex items-center gap-1">
            <div className="w-3.5 h-2 rounded-sm border border-white/40 relative">
              <div className="absolute inset-[1.5px] right-[3px] bg-green-400 rounded-[1px]" />
            </div>
          </div>
        </div>
        <div className="px-5 pt-2 pb-3 shrink-0">
          <p className="text-[10px] text-white/40 font-medium uppercase tracking-wider">
            Tableau de bord
          </p>
          <p className="text-[17px] text-white font-bold mt-0.5 font-[family-name:var(--font-space-grotesk)]">
            Bonjour, Client
          </p>
        </div>
        <div className="flex-1 overflow-y-auto px-4 pb-6 space-y-3 scrollbar-hide">
          <motion.div
            className="rounded-2xl bg-gradient-to-br from-accent/30 to-accent-cyan/20 border border-white/10 p-3.5"
            initial={{ opacity: 0, y: 16, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-[9px] text-white/50 uppercase tracking-wider font-[family-name:var(--font-jetbrains-mono)]">
                Revenus
              </span>
              <TrendingUp className="w-3 h-3 text-green-400" />
            </div>
            <p className="text-[22px] text-white font-bold font-[family-name:var(--font-space-grotesk)] leading-none">
              24,830 €
            </p>
            <p className="text-[9px] text-green-400 mt-1 font-medium">
              +18.2% ce mois
            </p>
          </motion.div>
          <div className="flex gap-2.5">
            <motion.div
              className="flex-1 rounded-xl bg-white/[0.06] border border-white/[0.06] p-3"
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: 0.2 }}
            >
              <Users className="w-3.5 h-3.5 text-accent-cyan mb-1.5" />
              <p className="text-[14px] text-white font-bold font-[family-name:var(--font-space-grotesk)] leading-none">
                1,247
              </p>
              <p className="text-[8px] text-white/40 mt-1">Utilisateurs</p>
            </motion.div>
            <motion.div
              className="flex-1 rounded-xl bg-white/[0.06] border border-white/[0.06] p-3"
              initial={{ opacity: 0, x: 12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: 0.25 }}
            >
              <ShoppingCart className="w-3.5 h-3.5 text-accent mb-1.5" />
              <p className="text-[14px] text-white font-bold font-[family-name:var(--font-space-grotesk)] leading-none">
                89
              </p>
              <p className="text-[8px] text-white/40 mt-1">Conversions</p>
            </motion.div>
          </div>
          <motion.div
            className="rounded-xl bg-white/[0.04] border border-white/[0.06] p-3"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <p className="text-[9px] text-white/40 uppercase tracking-wider mb-2.5 font-[family-name:var(--font-jetbrains-mono)]">
              Activité
            </p>
            <div className="flex items-end gap-[5px] h-[50px]">
              {[35, 55, 40, 70, 50, 85, 65, 90, 75, 60, 80, 95].map(
                (h, i) => (
                  <motion.div
                    key={i}
                    className="flex-1 rounded-[3px]"
                    style={{
                      background:
                        i >= 10
                          ? "linear-gradient(to top, #7c3aed, #38bdf8)"
                          : "rgba(255,255,255,0.1)",
                    }}
                    initial={{ height: 0 }}
                    whileInView={{ height: `${h}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 + i * 0.04 }}
                  />
                )
              )}
            </div>
          </motion.div>
          <div className="flex gap-2.5">
            <motion.div
              className="flex-1 rounded-xl bg-white/[0.06] border border-white/[0.06] p-3"
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: 0.45 }}
            >
              <Eye className="w-3.5 h-3.5 text-amber-400 mb-1.5" />
              <p className="text-[14px] text-white font-bold font-[family-name:var(--font-space-grotesk)] leading-none">
                12.4k
              </p>
              <p className="text-[8px] text-white/40 mt-1">Vues / jour</p>
            </motion.div>
            <motion.div
              className="flex-1 rounded-xl bg-white/[0.06] border border-white/[0.06] p-3"
              initial={{ opacity: 0, x: 12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: 0.5 }}
            >
              <Target className="w-3.5 h-3.5 text-rose-400 mb-1.5" />
              <p className="text-[14px] text-white font-bold font-[family-name:var(--font-space-grotesk)] leading-none">
                7.1%
              </p>
              <p className="text-[8px] text-white/40 mt-1">Taux conv.</p>
            </motion.div>
          </div>
          <motion.div
            className="rounded-xl bg-white/[0.04] border border-white/[0.06] p-3"
            initial={{ opacity: 0, y: 16, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.55 }}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-[9px] text-white/40 uppercase tracking-wider font-[family-name:var(--font-jetbrains-mono)]">
                Satisfaction
              </span>
              <Star className="w-3 h-3 text-yellow-400" />
            </div>
            <div className="flex items-center gap-2.5">
              <p className="text-[20px] text-white font-bold font-[family-name:var(--font-space-grotesk)] leading-none">
                4.8
              </p>
              <div className="flex-1">
                <div className="h-1.5 rounded-full bg-white/10 overflow-hidden">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-yellow-400 to-amber-300"
                    initial={{ width: 0 }}
                    whileInView={{ width: "96%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.65 }}
                  />
                </div>
                <p className="text-[8px] text-white/40 mt-1">
                  342 avis clients
                </p>
              </div>
            </div>
          </motion.div>
          <div className="flex gap-2.5">
            <motion.div
              className="flex-1 rounded-xl bg-white/[0.06] border border-white/[0.06] p-3"
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: 0.6 }}
            >
              <Clock className="w-3.5 h-3.5 text-sky-400 mb-1.5" />
              <p className="text-[14px] text-white font-bold font-[family-name:var(--font-space-grotesk)] leading-none">
                2m 34s
              </p>
              <p className="text-[8px] text-white/40 mt-1">Temps moyen</p>
            </motion.div>
            <motion.div
              className="flex-1 rounded-xl bg-white/[0.06] border border-white/[0.06] p-3"
              initial={{ opacity: 0, x: 12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: 0.65 }}
            >
              <Zap className="w-3.5 h-3.5 text-emerald-400 mb-1.5" />
              <p className="text-[14px] text-white font-bold font-[family-name:var(--font-space-grotesk)] leading-none">
                99.9%
              </p>
              <p className="text-[8px] text-white/40 mt-1">Uptime</p>
            </motion.div>
          </div>
          <motion.div
            className="rounded-xl bg-white/[0.04] border border-white/[0.06] p-3"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.7 }}
          >
            <div className="flex items-center justify-between mb-2.5">
              <span className="text-[9px] text-white/40 uppercase tracking-wider font-[family-name:var(--font-jetbrains-mono)]">
                Messages recents
              </span>
              <MessageSquare className="w-3 h-3 text-accent" />
            </div>
            <div className="space-y-2">
              {[
                {
                  name: "Sarah M.",
                  msg: "Super résultats ce mois !",
                  time: "2min",
                },
                {
                  name: "Karim D.",
                  msg: "Le dashboard est top",
                  time: "15min",
                },
                {
                  name: "Lea P.",
                  msg: "On peut ajouter un filtre ?",
                  time: "1h",
                },
              ].map((m, i) => (
                <motion.div
                  key={m.name}
                  className="flex items-center gap-2.5"
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.75 + i * 0.08 }}
                >
                  <div className="w-5 h-5 rounded-full bg-gradient-to-br from-accent to-accent-cyan shrink-0 flex items-center justify-center">
                    <span className="text-[7px] text-white font-bold">
                      {m.name[0]}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[9px] text-white font-medium truncate">
                      {m.name}{" "}
                      <span className="text-white/30">· {m.time}</span>
                    </p>
                    <p className="text-[8px] text-white/40 truncate">
                      {m.msg}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
      <Image
        src="/iphone-frame.png"
        alt="iPhone mockup"
        fill
        className="absolute inset-0 z-10 pointer-events-none select-none object-contain drop-shadow-2xl"
      />
    </div>
  );
}

export default function Services() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section
      id="services"
      className="relative py-16 lg:py-24 overflow-hidden"
    >
      <div className="absolute top-1/3 -left-40 w-80 h-80 bg-accent/[0.04] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 -right-40 w-80 h-80 bg-accent-cyan/[0.04] rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center mb-14 lg:mb-18"
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

        <div className="grid lg:grid-cols-[1fr_auto] gap-10 lg:gap-14 items-center">
          {/* iPhone — mobile: centered above / desktop: sticky right */}
          <motion.div
            className="flex justify-center lg:order-2 lg:sticky lg:top-28"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <IPhoneMockup />
          </motion.div>

          {/* Editorial service list */}
          <div className="relative lg:order-1">
            {services.map((service, i) => (
              <motion.div
                key={service.number}
                className="group relative"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
              >
                {i === 0 && (
                  <div className="absolute top-0 inset-x-0 h-px bg-white/[0.08]" />
                )}

                <div className="relative py-5 sm:py-6 lg:py-7 flex items-center gap-4 sm:gap-5">
                  {/* Hover background glow */}
                  <AnimatePresence>
                    {hovered === i && (
                      <motion.div
                        className="absolute inset-0 -mx-4 sm:-mx-6 rounded-2xl pointer-events-none"
                        style={{
                          background:
                            "linear-gradient(90deg, rgba(124, 58, 237, 0.04) 0%, rgba(56, 189, 248, 0.04) 100%)",
                        }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </AnimatePresence>

                  {/* Number */}
                  <span className="relative text-sm font-[family-name:var(--font-jetbrains-mono)] text-text-secondary/50 transition-colors duration-300 group-hover:text-accent shrink-0 w-7">
                    {service.number}
                  </span>

                  {/* Icon */}
                  <div className="relative w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center shrink-0 transition-all duration-300 group-hover:bg-accent/10 group-hover:border-accent/20">
                    <service.icon className="w-[18px] h-[18px] text-text-secondary transition-colors duration-300 group-hover:text-accent" />
                  </div>

                  {/* Title + Description */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg sm:text-xl font-semibold font-[family-name:var(--font-space-grotesk)] text-text-primary transition-colors duration-300 group-hover:text-white">
                      {service.title}
                    </h3>
                    {/* Mobile: always visible */}
                    <p className="lg:hidden text-sm text-text-secondary leading-relaxed mt-1">
                      {service.description}
                    </p>
                    {/* Desktop: slide-in */}
                    <div className="hidden lg:block overflow-hidden">
                      <motion.p
                        className="text-sm text-text-secondary leading-relaxed mt-1"
                        initial={false}
                        animate={{
                          opacity: hovered === i ? 1 : 0,
                          y: hovered === i ? 0 : 6,
                        }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                      >
                        {service.description}
                      </motion.p>
                    </div>
                  </div>

                  {/* Arrow */}
                  <motion.div
                    className="shrink-0 w-8 h-8 rounded-full border border-white/[0.06] flex items-center justify-center transition-all duration-300 group-hover:border-accent/30 group-hover:bg-accent/10"
                    animate={{ x: hovered === i ? 3 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <svg
                      className="w-3.5 h-3.5 text-text-secondary transition-colors duration-300 group-hover:text-accent"
                      viewBox="0 0 14 14"
                      fill="none"
                    >
                      <path
                        d="M1 13L13 1M13 1H4M13 1V10"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </motion.div>
                </div>

                {/* Bottom border */}
                <div className="relative h-px">
                  <div className="absolute inset-0 bg-white/[0.08]" />
                  <motion.div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(90deg, transparent, rgba(124, 58, 237, 0.3), rgba(56, 189, 248, 0.3), transparent)",
                    }}
                    initial={false}
                    animate={{ opacity: hovered === i ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
