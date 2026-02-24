"use client";

import { motion } from "framer-motion";
import { Calendar, CircleCheck, Clock3, ShieldCheck } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";
import DevisForm from "@/components/ui/DevisForm";
import GradientButton from "@/components/ui/GradientButton";

const benefits = [
  { icon: Clock3, text: "Reponse sous 24h" },
  { icon: CircleCheck, text: "Appel sans engagement" },
  { icon: ShieldCheck, text: "Devis detaille offert" },
];

export default function Contact() {
  const calendlyUrl =
    process.env.NEXT_PUBLIC_CALENDLY_URL || "https://calendly.com/PLACEHOLDER";

  return (
    <section id="contact" className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-kicker mb-5">Derniere etape</div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-space-grotesk)] tracking-[-0.005em] mb-4">
            Parlons de votre <span className="gradient-text-animated">projet</span>
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Appel strategique ou devis direct: choisissez le format le plus simple pour vous.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <GlassCard hoverEffect={false} className="h-full relative overflow-hidden">
              <div className="absolute -top-20 -right-24 w-48 h-48 rounded-full bg-white/[0.03] blur-3xl" />
              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-11 h-11 rounded-2xl bg-accent/12 flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-text-primary">
                      Reserve un appel de cadrage
                    </p>
                    <p className="text-xs text-text-secondary">30 minutes pour valider le plan d action</p>
                  </div>
                </div>

                <div className="rounded-3xl overflow-hidden bg-white/10 border border-white/10">
                  <div className="flex flex-col items-center justify-center py-16 px-6 text-center">
                    <Calendar className="w-12 h-12 text-accent/45 mb-4" />
                    <p className="text-text-secondary text-sm mb-6">
                      Widget Calendly integre ici
                    </p>
                    <GradientButton href={calendlyUrl} className="!py-3 !px-6 !text-sm">
                      Reserver un creneau
                    </GradientButton>
                  </div>
                </div>

                <div className="mt-6 space-y-3">
                  {benefits.map((item) => (
                    <div key={item.text} className="flex items-center gap-3 text-sm text-text-secondary">
                      <item.icon className="w-4 h-4 text-accent" />
                      {item.text}
                    </div>
                  ))}
                </div>
              </div>
            </GlassCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <GlassCard hoverEffect={false} className="h-full">
              <h3 className="text-2xl font-semibold font-[family-name:var(--font-space-grotesk)] text-text-primary mb-2">
                Demandez un devis
              </h3>
              <p className="text-sm text-text-secondary mb-6">
                Donnez nous le contexte, on revient avec une proposition claire et actionnable.
              </p>
              <DevisForm />
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
