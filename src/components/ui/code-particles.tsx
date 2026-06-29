"use client";

import React, { useEffect, useRef } from "react";

interface CodeParticlesProps {
  className?: string;
}

export function CodeParticles({ className }: CodeParticlesProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    
    // Default to window sizes to prevent 0-dimension cluster initialization
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      width = canvas.width = rect.width || window.innerWidth;
      height = canvas.height = rect.height || window.innerHeight;
    };

    window.addEventListener("resize", handleResize, { passive: true });

    // Technical code characters & keywords to render
    const chars = ["{", "}", "</>", "0", "1", "GZ", "=>", "run", "const", "import", "code", "void", "async", "true", "npm"];
    const particleCount = 40;
    const particles: Array<{
      x: number;
      y: number;
      char: string;
      fontSize: number;
      speedY: number;
      speedX: number;
      opacity: number;
      isBrand: boolean;
    }> = [];

    // Initialize particle attributes spread across the fully measured dimensions
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        char: chars[Math.floor(Math.random() * chars.length)],
        fontSize: Math.random() * 10 + 9,
        speedY: -(Math.random() * 0.18 + 0.05), // slow upward drift
        speedX: (Math.random() - 0.5) * 0.08, // slight horizontal drift
        opacity: Math.random() * 0.2 + 0.04, // subtle overlay
        isBrand: Math.random() > 0.75, // some particles in brand color
      });
    }

    const draw = () => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        // Space Mono is our global CSS variable font-mono
        ctx.font = `${p.fontSize}px var(--font-space-mono), monospace`;
        ctx.fillStyle = p.isBrand
          ? `rgba(204, 255, 0, ${p.opacity})`
          : `rgba(255, 255, 255, ${p.opacity})`;
        ctx.fillText(p.char, p.x, p.y);

        // Update positions
        p.y += p.speedY;
        p.x += p.speedX;

        // Wrap particles when offscreen (using dynamic width/height variables)
        if (p.y < -20) {
          p.y = height + 20;
          p.x = Math.random() * width;
          p.opacity = Math.random() * 0.2 + 0.04;
        }
        if (p.x < -20 || p.x > width + 20) {
          p.x = Math.random() * width;
        }
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    // Correct container matching on next frame
    requestAnimationFrame(() => {
      handleResize();
    });

    draw();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={className}
    />
  );
}
