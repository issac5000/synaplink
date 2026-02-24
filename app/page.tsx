"use client";

import dynamic from "next/dynamic";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import Services from "@/components/sections/Services";
import Statement from "@/components/sections/Statement";
import Projets from "@/components/sections/Projets";
import Processus from "@/components/sections/Processus";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";

const ScrollProgress = dynamic(
  () => import("@/components/ui/ScrollProgress"),
  { ssr: false }
);
const WhatsAppButton = dynamic(
  () => import("@/components/ui/WhatsAppButton"),
  { ssr: false }
);
const CustomCursor = dynamic(
  () => import("@/components/ui/CustomCursor"),
  { ssr: false }
);

export default function Home() {
  return (
    <>
      <CustomCursor />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Services />
        <Statement />
        <Projets />
        <Processus />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
