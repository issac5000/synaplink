"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MessageCircle,
  X,
  Send,
  Globe,
  BrainCircuit,
  Clock,
  Calendar,
  RotateCcw,
  CheckCircle2,
  Loader2,
  FileText,
  ChevronDown,
} from "lucide-react";
import ReactMarkdown from "react-markdown";
import {
  typeProjetOptions,
  budgetOptions,
} from "@/lib/validations";

const CALENDLY_URL =
  process.env.NEXT_PUBLIC_CALENDLY_URL || "https://calendly.com/synaplink";

const STORAGE_KEY = "synaplink-chat-messages";
const LEAD_CAPTURED_KEY = "synaplink-lead-captured";

function openCalendly() {
  const w = window as unknown as {
    Calendly?: { initPopupWidget: (opts: { url: string }) => void };
  };
  if (w.Calendly) {
    w.Calendly.initPopupWidget({ url: `${CALENDLY_URL}?locale=fr` });
  }
}

function loadMessages(): Message[] {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) return JSON.parse(stored);
  } catch {}
  return [];
}

function saveMessages(messages: Message[]) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
  } catch {}
}

interface Message {
  role: "user" | "assistant";
  content: string;
}

const SUGGESTIONS = [
  {
    icon: Globe,
    label: "Quels types de sites proposez-vous ?",
  },
  {
    icon: FileText,
    label: "Je voudrais un devis pour mon projet",
  },
  {
    icon: BrainCircuit,
    label: "J'ai un projet, on en discute ?",
  },
  {
    icon: Calendar,
    label: "Je voudrais prendre rendez-vous",
  },
];

/* ─── Lead Form inline ─── */
function LeadForm() {
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(() => {
    try {
      return localStorage.getItem(LEAD_CAPTURED_KEY) === "true";
    } catch {
      return false;
    }
  });

  if (done) {
    return (
      <div className="mt-3 flex items-center gap-2 text-emerald-400 text-xs">
        <CheckCircle2 className="w-4 h-4" />
        Merci, nous avons bien vos coordonnées !
      </div>
    );
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!nom.trim() || !email.trim()) return;
    setSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nom: nom.trim(),
          email: email.trim(),
          objet: "Lead chatbot",
          message: "Contact capturé via le chatbot Synap'Link.",
        }),
      });
      if (res.ok) {
        setDone(true);
        try {
          localStorage.setItem(LEAD_CAPTURED_KEY, "true");
        } catch {}
      }
    } catch {}
    setSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit} className="mt-3 space-y-2">
      <input
        type="text"
        placeholder="Votre prénom"
        value={nom}
        onChange={(e) => setNom(e.target.value)}
        className="w-full px-3 py-2 rounded-lg bg-white/[0.06] border border-white/[0.1] text-sm text-white/90 placeholder:text-white/30 focus:border-accent/40 focus:outline-none transition-colors"
      />
      <input
        type="email"
        placeholder="Votre email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full px-3 py-2 rounded-lg bg-white/[0.06] border border-white/[0.1] text-sm text-white/90 placeholder:text-white/30 focus:border-accent/40 focus:outline-none transition-colors"
      />
      <button
        type="submit"
        disabled={submitting || !nom.trim() || !email.trim()}
        className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold text-white transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-40"
        style={{
          background: "linear-gradient(135deg, #7c3aed 0%, #38bdf8 100%)",
        }}
      >
        {submitting ? (
          <Loader2 className="w-4 h-4 animate-spin" />
        ) : (
          <>
            <Send className="w-3.5 h-3.5" />
            Envoyer
          </>
        )}
      </button>
    </form>
  );
}

/* ─── Devis Form inline ─── */
function InlineDevisForm() {
  const [typeProjet, setTypeProjet] = useState("");
  const [budget, setBudget] = useState("");
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  if (done) {
    return (
      <div className="mt-3 flex items-center gap-2 text-emerald-400 text-xs">
        <CheckCircle2 className="w-4 h-4" />
        Demande de devis envoyée ! Nous revenons vers vous sous 24h.
      </div>
    );
  }

  const canSubmit =
    typeProjet && budget && nom.trim() && email.trim() && description.trim().length >= 10;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit) return;
    setSubmitting(true);
    try {
      const res = await fetch("/api/devis", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          typeProjet,
          budget,
          delai: "Pas de contrainte",
          nom: nom.trim(),
          email: email.trim(),
          description: description.trim(),
        }),
      });
      if (res.ok) {
        setDone(true);
        try {
          localStorage.setItem(LEAD_CAPTURED_KEY, "true");
        } catch {}
      }
    } catch {}
    setSubmitting(false);
  };

  const selectClass =
    "w-full px-3 py-2 rounded-lg bg-white/[0.06] border border-white/[0.1] text-sm text-white/90 focus:border-accent/40 focus:outline-none transition-colors appearance-none";
  const inputClass =
    "w-full px-3 py-2 rounded-lg bg-white/[0.06] border border-white/[0.1] text-sm text-white/90 placeholder:text-white/30 focus:border-accent/40 focus:outline-none transition-colors";

  return (
    <form onSubmit={handleSubmit} className="mt-3 space-y-2">
      <div className="relative">
        <select
          value={typeProjet}
          onChange={(e) => setTypeProjet(e.target.value)}
          className={selectClass}
        >
          <option value="" disabled>
            Type de projet
          </option>
          {typeProjetOptions.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-white/30 pointer-events-none" />
      </div>
      <div className="relative">
        <select
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
          className={selectClass}
        >
          <option value="" disabled>
            Budget estimé
          </option>
          {budgetOptions.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-white/30 pointer-events-none" />
      </div>
      <input
        type="text"
        placeholder="Votre nom"
        value={nom}
        onChange={(e) => setNom(e.target.value)}
        className={inputClass}
      />
      <input
        type="email"
        placeholder="Votre email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className={inputClass}
      />
      <textarea
        placeholder="Décrivez votre projet en quelques mots..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        rows={3}
        className={`${inputClass} resize-none`}
      />
      <button
        type="submit"
        disabled={submitting || !canSubmit}
        className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold text-white transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-40"
        style={{
          background: "linear-gradient(135deg, #7c3aed 0%, #38bdf8 100%)",
        }}
      >
        {submitting ? (
          <Loader2 className="w-4 h-4 animate-spin" />
        ) : (
          <>
            <FileText className="w-3.5 h-3.5" />
            Envoyer ma demande
          </>
        )}
      </button>
    </form>
  );
}

/* ─── Chatbot principal ─── */
export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [hydrated, setHydrated] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Charger les messages depuis localStorage au montage
  useEffect(() => {
    setMessages(loadMessages());
    setHydrated(true);
  }, []);

  // Sauvegarder les messages dans localStorage à chaque changement
  useEffect(() => {
    if (hydrated) {
      saveMessages(messages);
    }
  }, [messages, hydrated]);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      const isTouch = window.matchMedia("(pointer: coarse)").matches;
      if (!isTouch) {
        setTimeout(() => inputRef.current?.focus(), 300);
      }
    }
  }, [isOpen]);

  const resetConversation = () => {
    setMessages([]);
    try {
      localStorage.removeItem(STORAGE_KEY);
      localStorage.removeItem(LEAD_CAPTURED_KEY);
    } catch {}
  };

  const sendMessage = async (content: string) => {
    if (!content.trim() || isLoading) return;

    const userMessage: Message = { role: "user", content: content.trim() };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: newMessages.map((m) => ({
            role: m.role,
            content: m.content,
          })),
        }),
      });

      if (!response.ok) {
        throw new Error("Erreur du serveur");
      }

      const reader = response.body?.getReader();
      if (!reader) throw new Error("No reader");

      const decoder = new TextDecoder();
      let assistantContent = "";

      setMessages((prev) => [...prev, { role: "assistant", content: "" }]);

      let buffer = "";
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split("\n");
        buffer = lines.pop() || "";

        for (const line of lines) {
          const trimmed = line.trim();
          if (!trimmed || !trimmed.startsWith("data: ")) continue;
          const data = trimmed.slice(6);
          if (data === "[DONE]") continue;

          try {
            const parsed = JSON.parse(data);
            const delta = parsed.choices?.[0]?.delta?.content;
            if (delta) {
              assistantContent += delta;
              setMessages((prev) => {
                const updated = [...prev];
                updated[updated.length - 1] = {
                  role: "assistant",
                  content: assistantContent,
                };
                return updated;
              });
            }
          } catch {
            // skip malformed chunks
          }
        }
      }
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "Désolé, une erreur est survenue. Veuillez réessayer ou nous contacter directement.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  // Nettoyage des marqueurs pour l'affichage
  const cleanContent = (content: string) =>
    content
      .replace(/\[CALENDLY_BOOKING\]/g, "")
      .replace(/\[LEAD_FORM\]/g, "")
      .replace(/\[DEVIS_FORM\]/g, "");

  const showWelcome = messages.length === 0;

  return (
    <>
      {/* Floating sphere */}
      <div className="fixed bottom-6 right-6 z-50">
        {/* White blur behind sphere */}
        <div
          className="absolute inset-0 rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0.2) 40%, transparent 65%)",
            filter: "blur(20px)",
            transform: "scale(1.6)",
          }}
        />
        {/* Glow layer */}
        <motion.div
          className="absolute inset-0 rounded-full pointer-events-none"
          animate={{
            opacity: isOpen ? 0 : [0.6, 1, 0.6],
            scale: isOpen ? 1 : [1, 1.25, 1],
          }}
          transition={{
            duration: 2.8,
            repeat: isOpen ? 0 : Infinity,
            ease: "easeInOut",
          }}
          style={{
            background:
              "radial-gradient(circle, rgba(124, 58, 237, 0.45) 0%, rgba(56, 189, 248, 0.2) 50%, transparent 70%)",
          }}
        />
        {/* SVG filter for fluid distortion */}
        <svg className="absolute w-0 h-0" aria-hidden="true">
          <defs>
            <filter id="fluid-distortion">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.012 0.014"
                numOctaves={3}
                seed={2}
                result="noise"
              >
                <animate
                  attributeName="baseFrequency"
                  values="0.012 0.014;0.016 0.02;0.01 0.016;0.014 0.012;0.012 0.014"
                  dur="8s"
                  repeatCount="indefinite"
                  calcMode="spline"
                  keySplines="0.4 0 0.6 1;0.4 0 0.6 1;0.4 0 0.6 1;0.4 0 0.6 1"
                />
              </feTurbulence>
              <feDisplacementMap
                in="SourceGraphic"
                in2="noise"
                scale={26}
                xChannelSelector="R"
                yChannelSelector="G"
              />
            </filter>
          </defs>
        </svg>
        <motion.button
          onClick={() => setIsOpen((prev) => !prev)}
          className="relative w-[68px] h-[68px] rounded-full flex items-center justify-center overflow-hidden"
          style={{
            boxShadow:
              "inset -4px -6px 12px rgba(0,0,0,0.35), inset 3px 3px 8px rgba(255,255,255,0.15), 0 0 20px rgba(124,58,237,0.3)",
          }}
          animate={{
            scale: isOpen ? 1 : [1, 1.18, 1],
          }}
          transition={{
            duration: 2.8,
            repeat: isOpen ? 0 : Infinity,
            ease: "easeInOut",
          }}
          whileTap={{ scale: 0.9 }}
          aria-label={isOpen ? "Fermer le chat" : "Ouvrir le chat"}
        >
          {/* Fluid background */}
          <div
            className="absolute inset-[-16px] rounded-full"
            style={{ filter: "url(#fluid-distortion)" }}
          >
            <div className="absolute inset-0 bg-[#0a0412]" />
            <div className="absolute inset-0 fluid-blob-1" />
            <div className="absolute inset-0 fluid-blob-2" />
            <div className="absolute inset-0 fluid-blob-3" />
            <div className="absolute inset-0 fluid-blob-dark" />
          </div>
          {/* Rotating shadow overlay */}
          <div
            className="absolute inset-0 rounded-full pointer-events-none fluid-shadow-rotate"
            style={{
              background:
                "radial-gradient(circle at 65% 70%, rgba(0,0,0,0.5) 0%, transparent 55%)",
            }}
          />
          {/* Glass sheen overlay */}
          <div
            className="absolute inset-0 rounded-full pointer-events-none fluid-sheen-rotate"
            style={{
              background:
                "radial-gradient(ellipse at 30% 20%, rgba(255,255,255,0.18) 0%, transparent 45%)",
            }}
          />
          <AnimatePresence mode="wait">
            {isOpen && (
              <motion.div
                key="close"
                className="relative z-10"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="w-7 h-7 text-white drop-shadow-md" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      {/* Backdrop blur on mobile */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-[55] bg-black/40 backdrop-blur-sm sm:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Chat modal */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed bottom-28 left-4 right-4 sm:left-auto sm:right-6 z-[60] sm:w-[420px]">
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="overflow-hidden flex flex-col border border-white/[0.1]"
              style={{
                height: "min(70vh, 560px)",
                borderRadius: 28,
                background:
                  "linear-gradient(135deg, #2a2a2e 0%, #242428 50%, #1e1e22 100%)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                boxShadow:
                  "0 16px 48px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.06)",
              }}
            >
              {/* Header */}
              <div className="flex items-center gap-3 px-5 py-4 border-b border-white/[0.08]">
                <div className="relative">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center"
                    style={{
                      background:
                        "linear-gradient(135deg, #7c3aed 0%, #38bdf8 100%)",
                    }}
                  >
                    <MessageCircle className="w-4.5 h-4.5 text-white" />
                  </div>
                  <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-400 rounded-full border-2 border-[#2c2c2c]" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-white/90 font-heading">
                    Assistant Synap&apos;Link
                  </p>
                  <p className="text-xs text-emerald-400">En ligne</p>
                </div>
                <button
                  onClick={resetConversation}
                  className="p-1.5 rounded-xl hover:bg-white/[0.06] transition-colors"
                  aria-label="Réinitialiser la conversation"
                  title="Réinitialiser"
                >
                  <RotateCcw className="w-4 h-4 text-white/50" />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 rounded-xl hover:bg-white/[0.06] transition-colors"
                  aria-label="Fermer le chat"
                >
                  <X className="w-4.5 h-4.5 text-white/50" />
                </button>
              </div>

              {/* Messages area */}
              <div className="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-3 scrollbar-hide">
                {showWelcome && (
                  <>
                    {/* Welcome message */}
                    <div className="flex gap-2.5">
                      <div
                        className="w-7 h-7 rounded-full flex-shrink-0 flex items-center justify-center mt-0.5"
                        style={{
                          background:
                            "linear-gradient(135deg, #7c3aed 0%, #38bdf8 100%)",
                        }}
                      >
                        <MessageCircle className="w-3.5 h-3.5 text-white" />
                      </div>
                      <div className="bg-white/[0.04] border border-white/[0.06] rounded-2xl rounded-tl-md px-4 py-3 max-w-[85%]">
                        <p className="text-sm text-white/80 leading-relaxed">
                          Bonjour ! Je suis l&apos;assistant{" "}
                          <strong className="text-white">
                            Synap&apos;Link
                          </strong>
                          . Comment puis-je vous aider aujourd&apos;hui ?
                        </p>
                      </div>
                    </div>

                    {/* Spacer to push suggestions to bottom */}
                    <div className="flex-1" />

                    {/* Suggestion cards */}
                    <div className="space-y-2">
                      {SUGGESTIONS.map((suggestion) => (
                        <button
                          key={suggestion.label}
                          onClick={() => sendMessage(suggestion.label)}
                          className="w-full flex items-center gap-3 px-4 py-3 rounded-xl border border-white/[0.08] bg-white/[0.03] hover:bg-white/[0.06] hover:border-white/[0.14] transition-all text-left group"
                        >
                          <suggestion.icon className="w-4 h-4 text-accent-cyan flex-shrink-0 group-hover:text-accent transition-colors" />
                          <span className="text-sm text-white/70 group-hover:text-white/90 transition-colors">
                            {suggestion.label}
                          </span>
                        </button>
                      ))}
                    </div>
                  </>
                )}

                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`flex gap-2.5 ${
                      message.role === "user" ? "justify-end" : ""
                    }`}
                  >
                    {message.role === "assistant" && (
                      <div
                        className="w-7 h-7 rounded-full flex-shrink-0 flex items-center justify-center mt-0.5"
                        style={{
                          background:
                            "linear-gradient(135deg, #7c3aed 0%, #38bdf8 100%)",
                        }}
                      >
                        <MessageCircle className="w-3.5 h-3.5 text-white" />
                      </div>
                    )}
                    <div
                      className={`rounded-2xl px-4 py-3 max-w-[85%] ${
                        message.role === "user"
                          ? "bg-accent/20 border border-accent/30 rounded-tr-md"
                          : "bg-white/[0.04] border border-white/[0.06] rounded-tl-md"
                      }`}
                    >
                      {message.role === "assistant" ? (
                        <div className="chatbot-markdown text-sm text-white/80 leading-relaxed">
                          <ReactMarkdown>
                            {cleanContent(message.content)}
                          </ReactMarkdown>
                          {/* Bouton Calendly */}
                          {message.content.includes("[CALENDLY_BOOKING]") && (
                            <button
                              onClick={openCalendly}
                              className="mt-3 w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-white transition-all hover:scale-[1.02] active:scale-[0.98]"
                              style={{
                                background:
                                  "linear-gradient(135deg, #7c3aed 0%, #38bdf8 100%)",
                              }}
                            >
                              <Calendar className="w-4 h-4" />
                              Prendre rendez-vous
                            </button>
                          )}
                          {/* Formulaire lead */}
                          {message.content.includes("[LEAD_FORM]") && (
                            <LeadForm />
                          )}
                          {/* Formulaire devis */}
                          {message.content.includes("[DEVIS_FORM]") && (
                            <InlineDevisForm />
                          )}
                          {/* Loading dots */}
                          {isLoading &&
                            index === messages.length - 1 &&
                            !message.content && (
                              <span className="inline-flex gap-1">
                                <span className="w-1.5 h-1.5 bg-white/40 rounded-full animate-bounce" />
                                <span
                                  className="w-1.5 h-1.5 bg-white/40 rounded-full animate-bounce"
                                  style={{ animationDelay: "0.15s" }}
                                />
                                <span
                                  className="w-1.5 h-1.5 bg-white/40 rounded-full animate-bounce"
                                  style={{ animationDelay: "0.3s" }}
                                />
                              </span>
                            )}
                        </div>
                      ) : (
                        <p className="text-sm text-white/90 leading-relaxed">
                          {message.content}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>

              {/* Input area */}
              <form
                onSubmit={handleSubmit}
                className="px-4 py-3 border-t border-white/[0.08]"
              >
                <div className="flex items-center gap-2.5 bg-white/[0.05] border border-white/[0.08] rounded-full pl-4 pr-1.5 py-1.5 focus-within:border-accent/40 transition-colors">
                  <input
                    ref={inputRef}
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Votre message..."
                    disabled={isLoading}
                    className="flex-1 bg-transparent py-2 text-base sm:text-sm text-white/90 placeholder:text-white/30 focus:outline-none disabled:opacity-50"
                  />
                  <button
                    type="submit"
                    disabled={!input.trim() || isLoading}
                    className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 transition-all disabled:opacity-20"
                    style={{
                      background:
                        input.trim() && !isLoading
                          ? "linear-gradient(135deg, #7c3aed 0%, #38bdf8 100%)"
                          : "rgba(255,255,255,0.06)",
                    }}
                    aria-label="Envoyer"
                  >
                    <Send className="w-4 h-4 text-white" />
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
