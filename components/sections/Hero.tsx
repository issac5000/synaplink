"use client";

import { motion } from "framer-motion";
import { ChevronDown, Zap } from "lucide-react";
import dynamic from "next/dynamic";
import GradientButton from "@/components/ui/GradientButton";

const ParticlesBackground = dynamic(
  () => import("@/components/ui/ParticlesBackground"),
  { ssr: false }
);

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <ParticlesBackground />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center pt-20">
        {/* Badge */}
        <motion.div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Zap className="w-4 h-4 text-accent" />
          <span className="text-sm font-medium text-text-secondary font-[family-name:var(--font-jetbrains-mono)]">
            Agence IA & Numérique
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-[family-name:var(--font-space-grotesk)] leading-[1.1] mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <span className="text-text-primary">Construisons l&apos;avenir</span>
          <br />
          <span className="gradient-text-animated">numérique</span>
          <span className="text-text-primary"> de votre projet.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-lg sm:text-xl text-text-secondary max-w-2xl mx-auto mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          De l&apos;idée au produit fini — développement web, IA, automatisation
          et présence en ligne pour entrepreneurs et entreprises francophones.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <GradientButton href="#contact">
            Démarrer un projet
          </GradientButton>
          <GradientButton href="#projets" variant="ghost">
            Voir nos réalisations
          </GradientButton>
        </motion.div>

        {/* Scroll indicator */}
        <motion.a
          href="#stats"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-secondary hover:text-accent transition-colors"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          aria-label="Défiler vers le bas"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="w-6 h-6" />
          </motion.div>
        </motion.a>
      </div>
    </section>
  );
}
