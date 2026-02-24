"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, Sparkles, X } from "lucide-react";
import Image from "next/image";
import GradientButton from "@/components/ui/GradientButton";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Projets", href: "#projets" },
  { label: "À propos", href: "#processus" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [mobileOpen]);

  return (
    <>
      <motion.nav
        className={`fixed top-3 left-0 right-0 z-50 transition-all duration-700 ease-out ${
          scrolled
            ? "opacity-100"
            : "opacity-100"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div
            className={`rounded-full px-3 sm:px-5 h-16 flex items-center justify-between ring-1 ring-white/10 border border-white/10 ${
              scrolled
                ? "bg-[#2c2c2c]/65 backdrop-blur-lg shadow-[0_14px_38px_rgba(0,0,0,0.4)]"
                : "bg-[#2c2c2c]/50 backdrop-blur-md"
            }`}
          >
            <a
              href="#"
              className="flex items-center gap-2.5 font-bold font-[family-name:var(--font-space-grotesk)] tracking-tight"
            >
              <Image
                src="/logo.png"
                alt="Synap'Link logo"
                width={28}
                height={28}
                className="rounded-sm"
              />
              <span className="text-text-primary drop-shadow-[0_1px_0_rgba(0,0,0,0.4)]">
                Synap&apos;Link
              </span>
              <span className="hidden sm:inline-flex section-kicker !text-[10px] !px-2.5 !py-1 !tracking-[0.12em] !bg-white/8 !border-white/12 !text-[#888888] shadow-[0_4px_14px_rgba(0,0,0,0.3)]">
                Studio
              </span>
            </a>

            <div className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-[#d4d4d4] hover:text-text-primary transition-colors duration-300 relative group px-1"
                >
                  {link.label}
                  <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-gradient-to-r from-accent to-accent-cyan group-hover:w-full transition-all duration-300" />
                </a>
              ))}
            </div>

            <div className="hidden lg:flex items-center gap-3">
              <span className="text-xs text-text-secondary font-[family-name:var(--font-jetbrains-mono)]">
                Slots limités
              </span>
              <GradientButton href="#contact" className="!py-2.5 !px-5 !text-xs">
                Prendre RDV
              </GradientButton>
            </div>

            <button
              className="lg:hidden text-text-primary p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-2xl flex flex-col items-center justify-center gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="section-kicker">
              <Sparkles className="w-3 h-3" />
              Navigation
            </div>
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                className="text-3xl font-semibold font-[family-name:var(--font-space-grotesk)] text-text-primary hover:text-accent transition-colors"
                onClick={() => setMobileOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: i * 0.1 }}
              >
                {link.label}
              </motion.a>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <GradientButton
                href="#contact"
                onClick={() => setMobileOpen(false)}
              >
                Prendre RDV
              </GradientButton>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
