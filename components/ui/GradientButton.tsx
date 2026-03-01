"use client";

import { ReactNode } from "react";

interface GradientButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "gradient" | "ghost";
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
}

export default function GradientButton({
  children,
  href,
  onClick,
  variant = "gradient",
  className = "",
  type = "button",
  disabled = false,
}: GradientButtonProps) {
  const baseClasses =
    "relative inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm tracking-wide transition-all duration-300 will-change-transform";
  const variantClasses =
    variant === "gradient"
      ? "btn-gradient text-white shadow-[0_6px_18px_rgba(0,0,0,0.25)]"
      : "btn-ghost text-text-primary";

  if (href) {
    return (
      <a
        href={href}
        onClick={onClick}
        className={`${baseClasses} ${variantClasses} ${className}`}
      >
        <span className="relative z-10">{children}</span>
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses} ${disabled ? "opacity-50 pointer-events-none" : ""} ${className}`}
    >
      <span className="relative z-10">{children}</span>
    </button>
  );
}
