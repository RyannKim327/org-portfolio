import React from "react";
import { cn } from "@/lib/utils";

interface GlowEffectProps {
  className?: string;
  color?: string;
  size?: string;
}

export function GlowEffect({
  className,
  color = "rgba(204, 255, 0, 0.08)",
  size = "600px",
}: GlowEffectProps) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute rounded-full blur-3xl",
        className
      )}
      style={{
        background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
        width: size,
        height: size,
      }}
    />
  );
}
