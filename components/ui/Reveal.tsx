"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Lightweight scroll-reveal wrapper. Children fade up on enter, once.
 * Staggers immediate children when `stagger` is true.
 */
export default function Reveal({
  children,
  delay = 0,
  stagger = false,
  className = "",
  as: Tag = "div",
}: {
  children: React.ReactNode;
  delay?: number;
  stagger?: boolean;
  className?: string;
  as?: "div" | "section" | "ul" | "ol";
}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;
    const targets = stagger ? Array.from(el.children) : [el];

    const ctx = gsap.context(() => {
      gsap.from(targets, {
        opacity: 0,
        y: 32,
        duration: 0.75,
        delay,
        ease: "power3.out",
        stagger: stagger ? 0.08 : 0,
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          once: true,
        },
      });
    }, el);

    return () => ctx.revert();
  }, [delay, stagger]);

  return (
    // @ts-expect-error dynamic tag
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}
