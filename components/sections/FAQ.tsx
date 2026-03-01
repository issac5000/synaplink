"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Comment se déroule un projet avec Synaplink ?",
    answer:
      "On commence par un appel de cadrage (30 min) pour comprendre vos objectifs. Ensuite on passe par 4 étapes : workshop stratégique, direction UI/produit, build en sprints avec démos hebdo, et mise en production avec suivi analytics.",
  },
  {
    question: "Quels types de projets prenez-vous en charge ?",
    answer:
      "Sites vitrine, applications web et mobile, agents IA et chatbots, automatisation de workflows (n8n, API), présence digitale (SEO, contenu, tracking), vidéo promotionnelle et conseil produit.",
  },
  {
    question: "Quels sont vos délais de livraison ?",
    answer:
      "Ça dépend de la complexité. Un site vitrine peut être livré en moins d'une semaine. Un agent IA prend généralement une à deux semaines. Pour les applications web plus complexes, comptez 1 à 3 mois. On définit un calendrier précis dès le workshop initial.",
  },
  {
    question: "Combien coûte un projet ?",
    answer:
      "Chaque projet est unique. Les budgets varient selon le périmètre : de quelques centaines d'euros pour un site vitrine à 15 000€+ pour des applications complexes. Demandez un devis gratuit pour avoir une estimation précise.",
  },
  {
    question: "Est-ce que je peux suivre l'avancement en temps réel ?",
    answer:
      "Oui. On travaille en sprints avec des démos concrètes chaque semaine. Vous avez une visibilité totale sur l'avancement et pouvez donner du feedback à chaque étape.",
  },
  {
    question: "Proposez-vous un support après la mise en ligne ?",
    answer:
      "Oui, on ne disparaît pas après le lancement. On assure le suivi post-prod, l'optimisation continue et le support technique. Les modalités sont définies ensemble selon vos besoins.",
  },
  {
    question: "Quelles technologies utilisez-vous ?",
    answer:
      "On travaille avec des stacks modernes et performantes : Next.js, React, TypeScript pour le web, n8n pour l'automatisation, et les derniers modèles d'IA pour les agents intelligents. On choisit la techno adaptée à votre besoin, pas l'inverse.",
  },
  {
    question: "Je n'ai qu'une idée vague, est-ce suffisant pour commencer ?",
    answer:
      "Absolument. C'est même courant. L'appel de cadrage sert justement à structurer votre idée, définir les priorités et transformer une vision en plan d'action concret.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative pb-16 lg:pb-24 overflow-hidden">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-kicker mb-5">FAQ</div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-space-grotesk)] tracking-[-0.005em] mb-4">
            Questions <span className="gradient-text-animated">fréquentes</span>
          </h2>
        </motion.div>

        <div className="divide-y divide-white/[0.08] border-t border-b border-white/[0.08]">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between gap-4 py-5 text-left transition-all duration-300"
              >
                <span className={`text-sm sm:text-base font-medium font-[family-name:var(--font-space-grotesk)] transition-colors duration-300 ${openIndex === i ? "text-accent" : "text-text-primary"}`}>
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === i ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="shrink-0"
                >
                  <ChevronDown className={`w-5 h-5 transition-colors duration-300 ${openIndex === i ? "text-accent" : "text-text-secondary"}`} />
                </motion.div>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="pb-5 text-sm text-text-secondary leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
