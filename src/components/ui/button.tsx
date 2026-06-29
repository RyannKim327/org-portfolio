import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "solid" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
}

export function Button({
  children,
  variant = "solid",
  size = "md",
  className,
  href,
  ...props
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center gap-2 font-medium rounded-md transition-all duration-200 cursor-pointer select-none text-xs sm:text-sm";

  const variants = {
    solid:
      "bg-white text-black hover:bg-[#e6e6e6] hover:shadow-[0_0_20px_rgba(255,255,255,0.15)] active:scale-[0.98]",
    outline:
      "bg-transparent text-white border border-white/[0.12] hover:bg-white/[0.04] active:scale-[0.98]",
    ghost:
      "bg-transparent text-foreground-secondary hover:text-white hover:bg-white/[0.05]",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-2.5 text-sm",
    lg: "px-8 py-3 text-base",
  };

  const classes = cn(baseClasses, variants[variant], sizes[size], className);

  if (href) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
