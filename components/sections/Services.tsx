"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Bot, Globe, Lightbulb, Megaphone, Video, Workflow, TrendingUp, Users, ShoppingCart, Clock, Zap, Star, MessageSquare, Eye, Target } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Sites web & applications",
    description: "Du site vitrine au SaaS complet, avec un vrai niveau produit.",
  },
  {
    icon: Bot,
    title: "Agents IA & chatbots",
    description: "Assistants connectés à tes outils métier pour gagner du temps.",
  },
  {
    icon: Workflow,
    title: "Automatisation workflows",
    description: "Stack n8n/API pour supprimer les tâches répétitives.",
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
    description: "Roadmap, priorités, choix techniques et cadrage exécution.",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-16 lg:py-24">
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

        <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-6 lg:gap-12 items-start lg:items-center max-w-5xl mx-auto">
          <motion.div
            className="flex justify-center lg:justify-end lg:self-center"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {/* iPhone mockup */}
            <div className="relative w-[260px] sm:w-[280px]" style={{ aspectRatio: "280/572" }}>
              {/* Screen background */}
              <div className="absolute inset-[1.8%] top-[1.5%] bottom-[1.5%] rounded-[42px] bg-[#1c1c20]" />
              {/* Screen content — Dashboard */}
              <div className="absolute inset-[4%] top-[8%] bottom-[4%] rounded-[28px] overflow-hidden flex flex-col">
                {/* Status bar — fixed */}
                <div className="flex items-center justify-between px-5 pt-4 pb-2 shrink-0">
                  <span className="text-[10px] text-white/60 font-medium">9:41</span>
                  <div className="flex items-center gap-1">
                    <div className="w-3.5 h-2 rounded-sm border border-white/40 relative">
                      <div className="absolute inset-[1.5px] right-[3px] bg-green-400 rounded-[1px]" />
                    </div>
                  </div>
                </div>

                {/* Dashboard header — fixed */}
                <div className="px-5 pt-2 pb-3 shrink-0">
                  <p className="text-[10px] text-white/40 font-medium uppercase tracking-wider">Tableau de bord</p>
                  <p className="text-[17px] text-white font-bold mt-0.5 font-[family-name:var(--font-space-grotesk)]">Bonjour, Client</p>
                </div>

                {/* Scrollable content */}
                <div className="flex-1 overflow-y-auto px-4 pb-6 space-y-3 scrollbar-hide">
                  {/* Revenue card */}
                  <motion.div
                    className="rounded-2xl bg-gradient-to-br from-accent/30 to-accent-cyan/20 border border-white/10 p-3.5"
                    initial={{ opacity: 0, y: 16, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[9px] text-white/50 uppercase tracking-wider font-[family-name:var(--font-jetbrains-mono)]">Revenus</span>
                      <TrendingUp className="w-3 h-3 text-green-400" />
                    </div>
                    <p className="text-[22px] text-white font-bold font-[family-name:var(--font-space-grotesk)] leading-none">24,830 €</p>
                    <p className="text-[9px] text-green-400 mt-1 font-medium">+18.2% ce mois</p>
                  </motion.div>

                  {/* Stats row */}
                  <div className="flex gap-2.5">
                    <motion.div
                      className="flex-1 rounded-xl bg-white/[0.06] border border-white/[0.06] p-3"
                      initial={{ opacity: 0, x: -12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.35, delay: 0.2 }}
                    >
                      <Users className="w-3.5 h-3.5 text-accent-cyan mb-1.5" />
                      <p className="text-[14px] text-white font-bold font-[family-name:var(--font-space-grotesk)] leading-none">1,247</p>
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
                      <p className="text-[14px] text-white font-bold font-[family-name:var(--font-space-grotesk)] leading-none">89</p>
                      <p className="text-[8px] text-white/40 mt-1">Conversions</p>
                    </motion.div>
                  </div>

                  {/* Activity chart */}
                  <motion.div
                    className="rounded-xl bg-white/[0.04] border border-white/[0.06] p-3"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                  >
                    <p className="text-[9px] text-white/40 uppercase tracking-wider mb-2.5 font-[family-name:var(--font-jetbrains-mono)]">Activité</p>
                    <div className="flex items-end gap-[5px] h-[50px]">
                      {[35, 55, 40, 70, 50, 85, 65, 90, 75, 60, 80, 95].map((h, i) => (
                        <motion.div
                          key={i}
                          className="flex-1 rounded-[3px]"
                          style={{
                            background: i >= 10 ? "linear-gradient(to top, #7c3aed, #38bdf8)" : "rgba(255,255,255,0.1)",
                          }}
                          initial={{ height: 0 }}
                          whileInView={{ height: `${h}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: 0.4 + i * 0.04 }}
                        />
                      ))}
                    </div>
                  </motion.div>

                  {/* Performance row */}
                  <div className="flex gap-2.5">
                    <motion.div
                      className="flex-1 rounded-xl bg-white/[0.06] border border-white/[0.06] p-3"
                      initial={{ opacity: 0, x: -12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.35, delay: 0.45 }}
                    >
                      <Eye className="w-3.5 h-3.5 text-amber-400 mb-1.5" />
                      <p className="text-[14px] text-white font-bold font-[family-name:var(--font-space-grotesk)] leading-none">12.4k</p>
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
                      <p className="text-[14px] text-white font-bold font-[family-name:var(--font-space-grotesk)] leading-none">7.1%</p>
                      <p className="text-[8px] text-white/40 mt-1">Taux conv.</p>
                    </motion.div>
                  </div>

                  {/* Satisfaction */}
                  <motion.div
                    className="rounded-xl bg-white/[0.04] border border-white/[0.06] p-3"
                    initial={{ opacity: 0, y: 16, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.55 }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[9px] text-white/40 uppercase tracking-wider font-[family-name:var(--font-jetbrains-mono)]">Satisfaction</span>
                      <Star className="w-3 h-3 text-yellow-400" />
                    </div>
                    <div className="flex items-center gap-2.5">
                      <p className="text-[20px] text-white font-bold font-[family-name:var(--font-space-grotesk)] leading-none">4.8</p>
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
                        <p className="text-[8px] text-white/40 mt-1">342 avis clients</p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Time & Speed row */}
                  <div className="flex gap-2.5">
                    <motion.div
                      className="flex-1 rounded-xl bg-white/[0.06] border border-white/[0.06] p-3"
                      initial={{ opacity: 0, x: -12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.35, delay: 0.6 }}
                    >
                      <Clock className="w-3.5 h-3.5 text-sky-400 mb-1.5" />
                      <p className="text-[14px] text-white font-bold font-[family-name:var(--font-space-grotesk)] leading-none">2m 34s</p>
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
                      <p className="text-[14px] text-white font-bold font-[family-name:var(--font-space-grotesk)] leading-none">99.9%</p>
                      <p className="text-[8px] text-white/40 mt-1">Uptime</p>
                    </motion.div>
                  </div>

                  {/* Recent messages */}
                  <motion.div
                    className="rounded-xl bg-white/[0.04] border border-white/[0.06] p-3"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.7 }}
                  >
                    <div className="flex items-center justify-between mb-2.5">
                      <span className="text-[9px] text-white/40 uppercase tracking-wider font-[family-name:var(--font-jetbrains-mono)]">Messages recents</span>
                      <MessageSquare className="w-3 h-3 text-accent" />
                    </div>
                    <div className="space-y-2">
                      {[
                        { name: "Sarah M.", msg: "Super résultats ce mois !", time: "2min" },
                        { name: "Karim D.", msg: "Le dashboard est top", time: "15min" },
                        { name: "Lea P.", msg: "On peut ajouter un filtre ?", time: "1h" },
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
                            <span className="text-[7px] text-white font-bold">{m.name[0]}</span>
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-[9px] text-white font-medium truncate">{m.name} <span className="text-white/30">· {m.time}</span></p>
                            <p className="text-[8px] text-white/40 truncate">{m.msg}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>
              {/* iPhone frame — absolute on top of everything */}
              <Image
                src="/iphone-frame.png"
                alt="iPhone mockup"
                fill
                className="absolute inset-0 z-10 pointer-events-none select-none object-contain drop-shadow-2xl"
              />
            </div>
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
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
