"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import dynamic from "next/dynamic";
import Image from "next/image";
import GradientButton from "@/components/ui/GradientButton";

const ParticlesBackground = dynamic(
  () => import("@/components/ui/ParticlesBackground"),
  { ssr: false }
);

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-10">
      <div className="absolute inset-0">
        <ParticlesBackground />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/30" />
        <div className="noise-overlay opacity-20" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full">
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-10 lg:gap-14 items-end">
          <div>
            <motion.h1
              className="text-5xl sm:text-6xl lg:text-8xl font-bold font-[family-name:var(--font-space-grotesk)] leading-[1.02] tracking-[-0.005em] mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
            >
              <span className="text-text-primary">Votre idee.</span>
              <br />
              <span className="gradient-text-animated">Notre produit.</span>
              <br />
              <span className="text-text-primary">Vos resultats.</span>
            </motion.h1>

            <motion.p
              className="text-base sm:text-lg lg:text-xl text-text-secondary max-w-2xl leading-relaxed mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
            >
              Strategy, design, developpement, IA et automatisation. On transforme vos
              objectifs business en experiences web qui convertissent vraiment.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.75 }}
            >
              <GradientButton href="#contact">Planifier un échange</GradientButton>
              <GradientButton href="#contact" variant="ghost">
                Demander un devis
              </GradientButton>
            </motion.div>
          </div>

          <motion.div
            className="rounded-[56px] relative overflow-hidden perspective-1000"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ y: -18, scale: 1.05 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <div className="card-3d rounded-[50px] overflow-hidden border border-white/10 h-[360px] sm:h-[420px] lg:h-[470px] relative shadow-[0_24px_48px_rgba(0,0,0,0.28)] ring-1 ring-white/5 backdrop-blur-sm bg-white/[0.03]">
              <div className="absolute inset-0 bg-gradient-to-br from-[#121212] via-[#2a2a2a] to-[#0b0b0b]" />
              <div className="absolute inset-0 opacity-35" style={{ background: "radial-gradient(circle at 22% 20%, rgba(255,255,255,0.18), transparent 44%), radial-gradient(circle at 82% 78%, rgba(255,255,255,0.12), transparent 48%)" }} />
              <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.25) 0.42px, transparent 0.42px)", backgroundSize: "3px 3px" }} />
              <div className="relative z-10 h-full w-full flex items-center justify-center p-3 sm:p-4">
                <Image
                  src="/synaplink-logo.png"
                  alt="Logo Synap'Link"
                  width={760}
                  height={760}
                  unoptimized
                  className="w-full max-w-[520px] lg:max-w-[620px] h-auto object-contain mix-blend-screen drop-shadow-[0_14px_34px_rgba(0,0,0,0.42)]"
                />
              </div>
            </div>
          </motion.div>
        </div>

        <motion.a
          href="#stats"
          className="mt-10 lg:mt-6 inline-flex items-center gap-2 text-text-secondary hover:text-accent transition-colors"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          aria-label="Defiler vers le bas"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="w-5 h-5" />
          </motion.div>
          Scroll
        </motion.a>
      </div>
    </section>
  );
}
