"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const fmt = (n: number, decimals: number) =>
  n.toLocaleString("pt-BR", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });

/**
 * Counts up to `end` when scrolled into view. Decimals supported (ex: 5,4).
 */
export default function StatNumber({
  end,
  prefix = "",
  suffix = "",
  decimals = 0,
  duration = 2,
  className = "",
}: {
  end: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!ref.current) return;
    const obj = { v: 0 };
    const tween = gsap.to(obj, {
      v: end,
      duration,
      ease: "power2.out",
      onUpdate: () => setValue(obj.v),
      scrollTrigger: { trigger: ref.current, start: "top 85%", once: true },
    });
    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [end, duration]);

  return (
    <span ref={ref} className={`tabular-nums ${className}`}>
      {prefix}
      {fmt(value, decimals)}
      {suffix}
    </span>
  );
}
