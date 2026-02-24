"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";

const footerLinks = [
  { label: "Services", href: "#services" },
  { label: "Projets", href: "#projets" },
  { label: "Processus", href: "#processus" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Mail, href: "#contact", label: "Email" },
];

export default function Footer() {
  return (
    <footer id="footer-anchor" className="relative border-t border-white/10 py-12 sm:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="glass rounded-[30px] p-6 sm:p-8">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div>
              <a
                href="#"
                className="flex items-center gap-2.5 text-2xl font-bold font-[family-name:var(--font-space-grotesk)] gradient-text"
              >
                <Image
                  src="/logo.png"
                  alt="Synap'Link logo"
                  width={28}
                  height={28}
                  className="rounded-sm"
                />
                Synap&apos;Link
              </a>
              <p className="text-sm text-text-secondary mt-2">
                Studio produit IA, web et automatisation
              </p>
            </div>

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

            <div className="flex gap-3 md:justify-end">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-2xl border border-white/10 bg-white/10 flex items-center justify-center text-text-secondary hover:text-accent hover:border-accent/30 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div className="mt-8 pt-7 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-xs text-text-secondary">
              &copy; {new Date().getFullYear()} Synap&apos;Link. Tous droits reserves.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-xs text-text-secondary hover:text-text-primary transition-colors">
                Mentions legales
              </a>
              <a href="#" className="text-xs text-text-secondary hover:text-text-primary transition-colors">
                Politique de confidentialite
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
