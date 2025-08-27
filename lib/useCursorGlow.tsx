"use client";
import { useEffect, useRef } from "react";
import { usePrefersReducedMotion } from "./usePrefersReducedMotion";

interface CursorGlowOptions {
  elementId: string;
  intensity?: number;
  radius?: number;
}

export function useCursorGlow({ 
  elementId, 
  intensity = 0.8,
  radius = 300 
}: CursorGlowOptions) {
  const rafRef = useRef<number>();
  const prefersReducedMotion = usePrefersReducedMotion();
  
  useEffect(() => {
    if (prefersReducedMotion) return;
    
    const element = document.getElementById(elementId);
    if (!element) return;

    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const lerp = (start: number, end: number, factor: number) => 
      start + (end - start) * factor;

    const updateGlow = () => {
      // Smooth interpolation for performance
      currentX = lerp(currentX, mouseX, 0.1);
      currentY = lerp(currentY, mouseY, 0.1);

      element.style.setProperty('--cursor-x', `${currentX}px`);
      element.style.setProperty('--cursor-y', `${currentY}px`);
      
      rafRef.current = requestAnimationFrame(updateGlow);
    };

    document.addEventListener('mousemove', handleMouseMove, { passive: true });
    rafRef.current = requestAnimationFrame(updateGlow);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [elementId, intensity, radius, prefersReducedMotion]);
}