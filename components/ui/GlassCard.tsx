"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export default function GlassCard({
  children,
  className = "",
  hoverEffect = true,
}: GlassCardProps) {
  return (
    <motion.div
      className={`glass rounded-[30px] p-7 ${hoverEffect ? "glass-hover" : ""} transition-all duration-500 ease-out ${className}`}
      whileHover={hoverEffect ? { scale: 1.012, y: -3 } : undefined}
      transition={{ type: "spring", stiffness: 260, damping: 24 }}
    >
      {children}
    </motion.div>
  );
}
