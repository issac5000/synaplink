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

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 w-full flex flex-col items-center text-center">
        {/* Logo en haut, réduit */}
        <motion.div
          className="-mb-5 sm:-mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="relative inline-block">
            <div className="absolute inset-0 rounded-full opacity-40" style={{ background: "radial-gradient(circle, rgba(124, 58, 237, 0.4) 0%, rgba(56, 189, 248, 0.2) 50%, transparent 70%)", filter: "blur(24px)", transform: "scale(1.8)" }} />
            <Image
              src="/synaplink-logo.png"
              alt="Logo Synap'Link"
              width={200}
              height={200}
              unoptimized
              className="relative w-44 h-44 sm:w-56 sm:h-56 lg:w-72 lg:h-72 object-contain drop-shadow-[0_14px_34px_rgba(0,0,0,0.42)]"
            />
          </div>
        </motion.div>

        <motion.h1
          className="text-[2.7rem] sm:text-[3.4rem] lg:text-[4.5rem] font-bold font-[family-name:var(--font-space-grotesk)] leading-[1.05] tracking-[-0.005em] mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
        >
          <span className="text-text-primary">Nous donnons vie</span>
          <br />
          <span className="text-text-primary">à vos projets les</span>
          <br />
          <span className="gradient-text-animated">plus ambitieux</span>
        </motion.h1>

        <motion.p
          className="text-base sm:text-lg lg:text-xl text-text-secondary max-w-2xl leading-relaxed mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
        >
          Stratégie, design, développement, IA et automatisation. On transforme vos
          objectifs business en expériences web qui convertissent vraiment.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.75 }}
        >
          <GradientButton href="#contact">Planifier un échange</GradientButton>
          <GradientButton href="#contact" variant="ghost">
            Demander un devis
          </GradientButton>
        </motion.div>

        <motion.a
          href="#stats"
          className="mt-12 inline-flex items-center gap-2 text-text-secondary hover:text-accent transition-colors"
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
