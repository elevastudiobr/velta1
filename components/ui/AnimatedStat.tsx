"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion, useInView } from "framer-motion";

type AnimatedStatProps = {
  value: number;
  suffix?: string;
  label: string;
};

export default function AnimatedStat({
  value,
  suffix = "",
  label,
}: AnimatedStatProps) {
  const ref = useRef<HTMLDivElement>(null);

  const isInView = useInView(ref, {
    once: true,
    amount: 0.5,
  });

  const shouldReduceMotion = useReducedMotion();
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    if (shouldReduceMotion) {
      setCount(value);
      return;
    }

    let frameId = 0;
    let startTime: number | null = null;

    // Duração da contagem: 2,4 segundos
    const duration = 2400;

    const animate = (timestamp: number) => {
      if (startTime === null) {
        startTime = timestamp;
      }

      const progress = Math.min(
        (timestamp - startTime) / duration,
        1
      );

      // Desacelera suavemente perto do valor final
      const easedProgress = 1 - Math.pow(1 - progress, 4);

      setCount(Math.round(easedProgress * value));

      if (progress < 1) {
        frameId = requestAnimationFrame(animate);
      }
    };

    frameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(frameId);
    };
  }, [isInView, shouldReduceMotion, value]);

  return (
    <div ref={ref} className="flex flex-col">
      {/* NUMBER */}
      <div className="flex items-baseline whitespace-nowrap">
        <span className="text-[clamp(2rem,3.5vw,2.8rem)] font-medium leading-none tracking-[-0.06em] text-white">
          {count}
        </span>

        {suffix && (
          <span className="ml-1 text-base font-normal tracking-[-0.03em] text-white/65 sm:text-lg">
            {suffix}
          </span>
        )}
      </div>

      {/* LABEL */}
      <span className="mt-3 text-[10px] font-medium uppercase tracking-[0.2em] text-white/45 sm:text-[11px]">
        {label}
      </span>
    </div>
  );
}