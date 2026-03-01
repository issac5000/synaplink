"use client";

import dynamic from "next/dynamic";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Partners from "@/components/sections/Partners";
import Stats from "@/components/sections/Stats";
import Services from "@/components/sections/Services";
import WhyUs from "@/components/sections/WhyUs";
import Statement from "@/components/sections/Statement";
import TechStack from "@/components/sections/TechStack";
import Projets from "@/components/sections/Projets";
import Processus from "@/components/sections/Processus";
import CTABanner from "@/components/sections/CTABanner";
import Contact from "@/components/sections/Contact";
import FAQ from "@/components/sections/FAQ";
import Footer from "@/components/layout/Footer";

const ScrollProgress = dynamic(
  () => import("@/components/ui/ScrollProgress"),
  { ssr: false }
);
const CustomCursor = dynamic(
  () => import("@/components/ui/CustomCursor"),
  { ssr: false }
);
const Chatbot = dynamic(() => import("@/components/ui/Chatbot"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <CustomCursor />
      <ScrollProgress />
      <Chatbot />
      <Navbar />
      <main>
        <Hero />
        <Partners />
        <Stats />
        <Services />
        <WhyUs />
        <Statement />
        <TechStack />
        <Projets />
        <Processus />
        <CTABanner />
        <Contact />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
