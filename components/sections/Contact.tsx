"use client";

import { motion } from "framer-motion";
import { Calendar, CircleCheck, Clock3, ShieldCheck } from "lucide-react";
import { Mail } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";
import DevisForm from "@/components/ui/DevisForm";
import ContactForm from "@/components/ui/ContactForm";
import GradientButton from "@/components/ui/GradientButton";

const benefits = [
  { icon: Clock3, text: "Reponse sous 24h" },
  { icon: CircleCheck, text: "Appel sans engagement" },
  { icon: ShieldCheck, text: "Devis detaille offert" },
];

export default function Contact() {
  const calendlyUrl =
    process.env.NEXT_PUBLIC_CALENDLY_URL || "https://calendly.com/synaplink";

  const openCalendly = () => {
    const w = window as unknown as { Calendly?: { initPopupWidget: (opts: { url: string }) => void } };
    if (w.Calendly) {
      w.Calendly.initPopupWidget({ url: `${calendlyUrl}?locale=fr` });
    }
  };

  return (
    <section id="contact" className="relative py-24 lg:py-32 overflow-hidden">
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

                <div className="rounded-3xl overflow-hidden bg-gradient-to-br from-white/[0.06] to-white/[0.02] border border-white/[0.08]">
                  <div className="flex flex-col items-center justify-center py-10 px-6 text-center">
                    {/* Format options */}
                    <div className="flex gap-3 w-full mb-8">
                      <div className="flex-1 rounded-2xl bg-white/[0.04] border border-white/[0.06] p-4 text-center">
                        <div className="w-10 h-10 rounded-xl bg-accent/12 flex items-center justify-center mx-auto mb-3">
                          <Clock3 className="w-5 h-5 text-accent" />
                        </div>
                        <p className="text-sm font-semibold text-text-primary font-[family-name:var(--font-space-grotesk)]">30 min</p>
                        <p className="text-[11px] text-text-secondary mt-1">Appel de cadrage</p>
                      </div>
                      <div className="flex-1 rounded-2xl bg-white/[0.04] border border-white/[0.06] p-4 text-center">
                        <div className="w-10 h-10 rounded-xl bg-accent-cyan/12 flex items-center justify-center mx-auto mb-3">
                          <Calendar className="w-5 h-5 text-accent-cyan" />
                        </div>
                        <p className="text-sm font-semibold text-text-primary font-[family-name:var(--font-space-grotesk)]">45 min</p>
                        <p className="text-[11px] text-text-secondary mt-1">Reunion Google Meet</p>
                      </div>
                    </div>

                    <p className="text-text-secondary/50 text-xs mb-6">
                      Choisissez le format au moment de la reservation
                    </p>
                    <GradientButton onClick={openCalendly} className="!py-3 !px-8 !text-sm w-full sm:w-auto">
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

        <motion.div
          className="mt-8 lg:mt-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25 }}
        >
          <GlassCard hoverEffect={false}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-11 h-11 rounded-2xl bg-accent-cyan/12 flex items-center justify-center">
                <Mail className="w-5 h-5 text-accent-cyan" />
              </div>
              <div>
                <h3 className="text-lg font-semibold font-[family-name:var(--font-space-grotesk)] text-text-primary">
                  Envoyez-nous un message
                </h3>
                <p className="text-xs text-text-secondary">Une question, une idee ? Ecrivez-nous directement.</p>
              </div>
            </div>
            <ContactForm />
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}
