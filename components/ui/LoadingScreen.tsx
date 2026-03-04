"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function LoadingScreen() {
  const [phase, setPhase] = useState<"loading" | "opening" | "done">("loading");

  useEffect(() => {
    // Phase 1: spinner pendant 2.2s
    const t1 = setTimeout(() => setPhase("opening"), 2200);
    // Phase 2: ouverture des bandes pendant 1s puis done
    const t2 = setTimeout(() => setPhase("done"), 3400);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  if (phase === "done") return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[9999] pointer-events-none">
          {/* Bande haut */}
          <motion.div
            className="absolute top-0 left-0 w-full h-1/2 bg-background"
            initial={{ y: "0%" }}
            animate={phase === "opening" ? { y: "-100%" } : { y: "0%" }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
          />

          {/* Bande bas */}
          <motion.div
            className="absolute bottom-0 left-0 w-full h-1/2 bg-background"
            initial={{ y: "0%" }}
            animate={phase === "opening" ? { y: "100%" } : { y: "0%" }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
          />

          {/* Logo + spinners au centre */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            animate={phase === "opening" ? { opacity: 0, scale: 0.8 } : { opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, ease: "easeIn" }}
          >
            {/* Spinner extérieur */}
            <div className="absolute w-44 h-44 sm:w-52 sm:h-52 rounded-full loading-spinner-outer" />

            {/* Spinner intérieur (sens inverse) */}
            <div className="absolute w-32 h-32 sm:w-40 sm:h-40 rounded-full loading-spinner-inner" />

            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.7, filter: "blur(8px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            >
              <Image
                src="/synaplink-logo.png"
                alt="Synap'Link"
                width={100}
                height={100}
                unoptimized
                className="w-20 h-20 sm:w-24 sm:h-24 object-contain drop-shadow-[0_0_20px_rgba(124,58,237,0.4)]"
              />
            </motion.div>
          </motion.div>
        </div>
    </AnimatePresence>
  );
}
