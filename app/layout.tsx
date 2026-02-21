import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Synap'Link — Agence IA & Numérique Francophone",
  description:
    "Développement web & app, agents IA, automatisation et marketing digital pour entrepreneurs et entreprises francophones. De l'idée au produit fini.",
  keywords: [
    "agence IA",
    "développement web",
    "automatisation",
    "francophone",
    "SaaS",
    "Next.js",
    "intelligence artificielle",
    "marketing digital",
  ],
  openGraph: {
    title: "Synap'Link — Agence IA & Numérique Francophone",
    description:
      "Développement web & app, agents IA, automatisation et marketing digital. De l'idée au produit fini.",
    type: "website",
    locale: "fr_FR",
    siteName: "Synap'Link",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Synap'Link — Agence IA & Numérique",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Synap'Link — Agence IA & Numérique Francophone",
    description:
      "Développement web & app, agents IA, automatisation et marketing digital.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
