"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send, CheckCircle2, Loader2 } from "lucide-react";
import { contactSchema, type ContactFormData } from "@/lib/validations";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: { nom: "", email: "", objet: "", message: "" },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
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
        className="flex flex-col items-center justify-center py-10 text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", delay: 0.2 }}
        >
          <CheckCircle2 className="w-12 h-12 text-green-400 mb-4" />
        </motion.div>
        <h3 className="text-xl font-bold font-[family-name:var(--font-space-grotesk)] text-text-primary mb-2">
          Message envoye !
        </h3>
        <p className="text-text-secondary text-sm">
          Nous vous repondons sous 24h.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <input
            type="text"
            placeholder="Prenom & Nom *"
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
      </div>
      <div>
        <input
          type="text"
          placeholder="Objet *"
          className="w-full px-4 py-3 rounded-2xl bg-white/[0.03] border border-white/10 text-text-primary placeholder:text-text-secondary/50 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent/30 transition-all text-sm"
          {...register("objet")}
        />
        {errors.objet && (
          <p className="text-red-400 text-xs mt-1">{errors.objet.message}</p>
        )}
      </div>
      <div>
        <textarea
          placeholder="Votre message *"
          rows={4}
          className="w-full px-4 py-3 rounded-2xl bg-white/[0.03] border border-white/10 text-text-primary placeholder:text-text-secondary/50 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent/30 transition-all text-sm resize-none"
          {...register("message")}
        />
        {errors.message && (
          <p className="text-red-400 text-xs mt-1">{errors.message.message}</p>
        )}
      </div>
      <div className="flex justify-end">
        <button
          type="submit"
          disabled={isSubmitting}
          className="flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold btn-gradient text-white disabled:opacity-50 transition-all duration-300"
        >
          <span className="relative z-10 flex items-center gap-2">
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Envoi...
              </>
            ) : (
              <>
                Envoyer
                <Send className="w-4 h-4" />
              </>
            )}
          </span>
        </button>
      </div>
    </form>
  );
}
