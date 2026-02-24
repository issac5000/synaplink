"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, ArrowLeft, Send, CheckCircle2, Loader2 } from "lucide-react";
import {
  devisSchema,
  type DevisFormData,
  typeProjetOptions,
  budgetOptions,
  delaiOptions,
} from "@/lib/validations";

const TOTAL_STEPS = 4;

export default function DevisForm() {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<DevisFormData>({
    resolver: zodResolver(devisSchema),
    defaultValues: {
      typeProjet: "",
      budget: "",
      delai: "",
      nom: "",
      email: "",
      whatsapp: "",
      description: "",
    },
  });

  const currentTypeProjet = watch("typeProjet");
  const currentBudget = watch("budget");
  const currentDelai = watch("delai");

  const canProceed = () => {
    switch (step) {
      case 1:
        return !!currentTypeProjet;
      case 2:
        return !!currentBudget;
      case 3:
        return !!currentDelai;
      default:
        return true;
    }
  };

  const onSubmit = async (data: DevisFormData) => {
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/devis", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Erreur");

      setIsSuccess(true);
    } catch {
      alert("Une erreur est survenue. Veuillez réessayer.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <motion.div
        className="flex flex-col items-center justify-center py-12 text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", delay: 0.2 }}
        >
          <CheckCircle2 className="w-16 h-16 text-green-400 mb-6" />
        </motion.div>
        <h3 className="text-2xl font-bold font-[family-name:var(--font-space-grotesk)] text-text-primary mb-2">
          Demande envoyée !
        </h3>
        <p className="text-text-secondary">
          Nous vous recontactons sous 24h.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="relative">
      {/* Progress bar */}
      <div className="flex gap-2 mb-8">
        {Array.from({ length: TOTAL_STEPS }).map((_, i) => (
          <div
            key={i}
            className="flex-1 h-1 rounded-full overflow-hidden bg-white/10"
          >
            <motion.div
              className="h-full rounded-full"
              style={{
                background: "linear-gradient(90deg, #38bdf8, #7c3aed, #a855f7)",
              }}
              initial={false}
              animate={{ width: i < step ? "100%" : "0%" }}
              transition={{ duration: 0.3 }}
            />
          </div>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {/* Step 1: Type de projet */}
        {step === 1 && (
          <StepWrapper key="step1">
            <h4 className="text-lg font-semibold font-[family-name:var(--font-space-grotesk)] text-text-primary mb-4">
              Quel type de projet ?
            </h4>
            <div className="grid gap-3">
              {typeProjetOptions.map((option) => (
                <label
                  key={option}
                  className={`flex items-center gap-3 p-4 rounded-2xl border transition-all duration-200 cursor-pointer ${
                    currentTypeProjet === option
                      ? "border-accent bg-accent/10"
                      : "border-white/10 hover:border-white/10 bg-white/[0.03]"
                  }`}
                >
                  <input
                    type="radio"
                    value={option}
                    className="sr-only"
                    {...register("typeProjet")}
                    onChange={() => setValue("typeProjet", option)}
                    checked={currentTypeProjet === option}
                  />
                  <div
                    className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                      currentTypeProjet === option
                        ? "border-accent"
                        : "border-text-secondary"
                    }`}
                  >
                    {currentTypeProjet === option && (
                      <div className="w-2 h-2 rounded-full bg-accent" />
                    )}
                  </div>
                  <span className="text-sm text-text-primary">{option}</span>
                </label>
              ))}
            </div>
            {errors.typeProjet && (
              <p className="text-red-400 text-xs mt-2">{errors.typeProjet.message}</p>
            )}
          </StepWrapper>
        )}

        {/* Step 2: Budget */}
        {step === 2 && (
          <StepWrapper key="step2">
            <h4 className="text-lg font-semibold font-[family-name:var(--font-space-grotesk)] text-text-primary mb-4">
              Quel est votre budget estimé ?
            </h4>
            <div className="grid gap-3">
              {budgetOptions.map((option) => (
                <label
                  key={option}
                  className={`flex items-center gap-3 p-4 rounded-2xl border transition-all duration-200 cursor-pointer ${
                    currentBudget === option
                      ? "border-accent bg-accent/10"
                      : "border-white/10 hover:border-white/10 bg-white/[0.03]"
                  }`}
                >
                  <input
                    type="radio"
                    value={option}
                    className="sr-only"
                    {...register("budget")}
                    onChange={() => setValue("budget", option)}
                    checked={currentBudget === option}
                  />
                  <div
                    className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                      currentBudget === option
                        ? "border-accent"
                        : "border-text-secondary"
                    }`}
                  >
                    {currentBudget === option && (
                      <div className="w-2 h-2 rounded-full bg-accent" />
                    )}
                  </div>
                  <span className="text-sm text-text-primary">{option}</span>
                </label>
              ))}
            </div>
          </StepWrapper>
        )}

        {/* Step 3: Délai */}
        {step === 3 && (
          <StepWrapper key="step3">
            <h4 className="text-lg font-semibold font-[family-name:var(--font-space-grotesk)] text-text-primary mb-4">
              Délai souhaité ?
            </h4>
            <div className="grid gap-3">
              {delaiOptions.map((option) => (
                <label
                  key={option}
                  className={`flex items-center gap-3 p-4 rounded-2xl border transition-all duration-200 cursor-pointer ${
                    currentDelai === option
                      ? "border-accent bg-accent/10"
                      : "border-white/10 hover:border-white/10 bg-white/[0.03]"
                  }`}
                >
                  <input
                    type="radio"
                    value={option}
                    className="sr-only"
                    {...register("delai")}
                    onChange={() => setValue("delai", option)}
                    checked={currentDelai === option}
                  />
                  <div
                    className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                      currentDelai === option
                        ? "border-accent"
                        : "border-text-secondary"
                    }`}
                  >
                    {currentDelai === option && (
                      <div className="w-2 h-2 rounded-full bg-accent" />
                    )}
                  </div>
                  <span className="text-sm text-text-primary">{option}</span>
                </label>
              ))}
            </div>
          </StepWrapper>
        )}

        {/* Step 4: Coordonnées */}
        {step === 4 && (
          <StepWrapper key="step4">
            <h4 className="text-lg font-semibold font-[family-name:var(--font-space-grotesk)] text-text-primary mb-4">
              Vos coordonnées
            </h4>
            <div className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Prénom & Nom *"
                  className="w-full px-4 py-3 rounded-2xl bg-white/[0.03] border border-white/10 text-text-primary placeholder:text-text-secondary/50 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent/30 transition-all text-sm"
                  {...register("nom")}
                />
                {errors.nom && (
                  <p className="text-red-400 text-xs mt-1">{errors.nom.message}</p>
                )}
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email *"
                  className="w-full px-4 py-3 rounded-2xl bg-white/[0.03] border border-white/10 text-text-primary placeholder:text-text-secondary/50 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent/30 transition-all text-sm"
                  {...register("email")}
                />
                {errors.email && (
                  <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>
                )}
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="Numéro WhatsApp (optionnel)"
                  className="w-full px-4 py-3 rounded-2xl bg-white/[0.03] border border-white/10 text-text-primary placeholder:text-text-secondary/50 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent/30 transition-all text-sm"
                  {...register("whatsapp")}
                />
              </div>
              <div>
                <textarea
                  placeholder="Décrivez votre projet en quelques lignes *"
                  rows={4}
                  className="w-full px-4 py-3 rounded-2xl bg-white/[0.03] border border-white/10 text-text-primary placeholder:text-text-secondary/50 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent/30 transition-all text-sm resize-none"
                  {...register("description")}
                />
                {errors.description && (
                  <p className="text-red-400 text-xs mt-1">
                    {errors.description.message}
                  </p>
                )}
              </div>
            </div>
          </StepWrapper>
        )}
      </AnimatePresence>

      {/* Navigation */}
      <div className="flex items-center justify-between mt-8">
        {step > 1 ? (
          <button
            type="button"
            onClick={() => setStep((s) => s - 1)}
            className="flex items-center gap-2 text-sm text-text-secondary hover:text-text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Retour
          </button>
        ) : (
          <div />
        )}

        {step < TOTAL_STEPS ? (
          <button
            type="button"
            onClick={() => canProceed() && setStep((s) => s + 1)}
            className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
              canProceed()
                ? "btn-gradient text-white"
                : "bg-white/10 text-text-secondary cursor-not-allowed"
            }`}
            disabled={!canProceed()}
          >
            <span className="relative z-10 flex items-center gap-2">
              Suivant
              <ArrowRight className="w-4 h-4" />
            </span>
          </button>
        ) : (
          <button
            type="submit"
            disabled={isSubmitting}
            className="flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold btn-gradient text-white disabled:opacity-50"
          >
            <span className="relative z-10 flex items-center gap-2">
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Envoi...
                </>
              ) : (
                <>
                  Envoyer ma demande
                  <Send className="w-4 h-4" />
                </>
              )}
            </span>
          </button>
        )}
      </div>
    </form>
  );
}

function StepWrapper({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.25 }}
    >
      {children}
    </motion.div>
  );
}
