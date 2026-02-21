"use client";

import { Github, Linkedin } from "lucide-react";

const footerLinks = [
  { label: "Services", href: "#services" },
  { label: "Projets", href: "#projets" },
  { label: "Processus", href: "#processus" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Github, href: "#", label: "GitHub" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo & tagline */}
          <div>
            <a
              href="#"
              className="text-xl font-bold font-[family-name:var(--font-space-grotesk)] gradient-text"
            >
              Synap&apos;Link
            </a>
            <p className="text-sm text-text-secondary mt-2">
              Agence IA & Numérique Francophone
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-wrap gap-6 justify-center">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-text-secondary hover:text-text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Social */}
          <div className="flex gap-4 justify-end">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl glass flex items-center justify-center text-text-secondary hover:text-accent hover:border-accent/30 transition-all duration-300"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-text-secondary">
            &copy; {new Date().getFullYear()} Synap&apos;Link — Tous droits
            réservés
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-xs text-text-secondary hover:text-text-primary transition-colors"
            >
              Mentions légales
            </a>
            <a
              href="#"
              className="text-xs text-text-secondary hover:text-text-primary transition-colors"
            >
              Politique de confidentialité
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
