"use client";

import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";
import DevisForm from "@/components/ui/DevisForm";
import GradientButton from "@/components/ui/GradientButton";

export default function Contact() {
  const calendlyUrl =
    process.env.NEXT_PUBLIC_CALENDLY_URL || "https://calendly.com/PLACEHOLDER";

  return (
    <section id="contact" className="relative py-24 lg:py-32">
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
            Parlons de{" "}
            <span className="gradient-text">votre projet</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left: Calendly */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <GlassCard hoverEffect={false} className="h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm font-medium text-text-primary">
                    Réservez un appel gratuit
                  </p>
                  <p className="text-xs text-text-secondary">
                    30 minutes pour discuter de votre projet
                  </p>
                </div>
              </div>

              {/* Calendly embed placeholder */}
              <div className="rounded-xl overflow-hidden bg-white/[0.02] border border-white/5">
                <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
                  <Calendar className="w-12 h-12 text-accent/40 mb-4" />
                  <p className="text-text-secondary text-sm mb-6">
                    Widget Calendly intégré ici
                  </p>
                  <GradientButton
                    href={calendlyUrl}
                    className="!py-3 !px-6 !text-sm"
                  >
                    Réserver un créneau
                  </GradientButton>
                </div>
              </div>

              <div className="mt-6 space-y-3">
                <div className="flex items-center gap-3 text-sm text-text-secondary">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                  Réponse sous 24h garantie
                </div>
                <div className="flex items-center gap-3 text-sm text-text-secondary">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                  Appel sans engagement
                </div>
                <div className="flex items-center gap-3 text-sm text-text-secondary">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                  Devis détaillé offert
                </div>
              </div>
            </GlassCard>
          </motion.div>

          {/* Right: Devis Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <GlassCard hoverEffect={false} className="h-full">
              <h3 className="text-xl font-semibold font-[family-name:var(--font-space-grotesk)] text-text-primary mb-2">
                Demandez un devis gratuit
              </h3>
              <p className="text-sm text-text-secondary mb-6">
                Décrivez votre projet et recevez une estimation personnalisée.
              </p>
              <DevisForm />
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
