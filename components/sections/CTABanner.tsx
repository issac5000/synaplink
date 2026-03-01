"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import GradientButton from "@/components/ui/GradientButton";

export default function CTABanner() {
  return (
    <section className="relative py-16 lg:py-24 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <motion.div
          className="relative rounded-[32px] border border-white/[0.08] bg-gradient-to-br from-accent/[0.08] via-white/[0.02] to-accent-cyan/[0.06] p-10 sm:p-14 text-center overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Shine effect */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "linear-gradient(120deg, transparent 30%, rgba(255,255,255,0.07) 50%, transparent 70%)",
              animation: "liquidShine 3.2s ease-in-out infinite",
            }}
          />

          {/* Glow effects */}
          <div className="absolute -top-20 -left-20 w-60 h-60 rounded-full bg-accent/[0.08] blur-[100px] pointer-events-none" />
          <div className="absolute -bottom-20 -right-20 w-60 h-60 rounded-full bg-accent-cyan/[0.06] blur-[100px] pointer-events-none" />

          <div className="relative">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-[family-name:var(--font-space-grotesk)] text-text-primary mb-4">
              Prêt à concrétiser votre projet ?
            </h2>
            <p className="text-text-secondary max-w-xl mx-auto mb-8">
              30 minutes suffisent pour cadrer votre besoin et définir un plan d&apos;action clair.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <GradientButton href="#contact">
                Planifier un échange
              </GradientButton>
              <GradientButton href="#contact" variant="ghost">
                Demander un devis
              </GradientButton>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
