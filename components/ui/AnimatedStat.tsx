"use client";

import { useEffect, useRef, useState } from "react";

interface AnimatedStatProps {
  value: number;
  suffix: string;
  label: string;
  duration?: number;
}

export default function AnimatedStat({
  value,
  suffix,
  label,
  duration = 1400,
}: AnimatedStatProps) {
  const [currentValue, setCurrentValue] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      {
        threshold: 0.6,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;

    let animationFrame: number;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Ease-out para começar rápido e desacelerar no final
      const easedProgress = 1 - Math.pow(1 - progress, 3);

      setCurrentValue(Math.round(easedProgress * value));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [started, value, duration]);

  return (
    <div ref={ref}>
      <p
        className="
          text-[8px]
          font-medium
          uppercase
          tracking-[0.3em]
          text-white/25
        "
      >
        {label}
      </p>

      <p
        className="
          mt-2
          text-base
          font-medium
          tabular-nums
          text-white/80
        "
      >
        {currentValue}
        {suffix}
      </p>
    </div>
  );
}