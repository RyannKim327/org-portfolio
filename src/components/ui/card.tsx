"use client";

import React, { useRef, useCallback } from "react";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
  beam?: boolean;
}

export function Card({ children, className, hover = true, beam = false, ...props }: CardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    cardRef.current.style.setProperty("--mouse-x", `${x}%`);
    cardRef.current.style.setProperty("--mouse-y", `${y}%`);
  }, []);

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className={cn(
        "card-shine relative rounded-lg bg-card-bg border border-card-border p-5",
        "transition-all duration-300",
        hover && "hover:border-white/12 hover:-translate-y-0.5 hover:shadow-[0_4px_30px_rgba(0,0,0,0.4)]",
        className
      )}
      {...props}
    >
      {beam && <div className="border-beam-container" />}
      {children}
    </div>
  );
}
