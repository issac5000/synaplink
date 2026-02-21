"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const [visible, setVisible] = useState(false);
  const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "PLACEHOLDER";
  const message = encodeURIComponent(
    "Bonjour, je viens du site Synap'Link et j'aimerais discuter d'un projet."
  );

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href={`https://wa.me/${number}?text=${message}`}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#25D366] hover:bg-[#20BD5A] text-white rounded-full shadow-lg shadow-[#25D366]/30 transition-colors duration-300 group"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          whileHover={{ scale: 1.05 }}
          aria-label="Nous contacter sur WhatsApp"
        >
          <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-[200px] group-hover:pl-5 transition-all duration-300 text-sm font-medium">
            Discutons !
          </span>
          <span className="flex items-center justify-center w-14 h-14">
            <MessageCircle className="w-6 h-6" fill="white" />
          </span>
        </motion.a>
      )}
    </AnimatePresence>
  );
}
