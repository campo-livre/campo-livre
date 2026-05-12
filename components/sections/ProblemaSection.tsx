"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Section, { SectionHeader } from "@/components/ui/Section";
import StatNumber from "@/components/ui/StatNumber";
import Timeline from "@/components/ui/Timeline";
import { regulatoryTimeline } from "@/lib/content";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ProblemaSection() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from("[data-prob-stat]", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: { trigger: "[data-prob-stats]", start: "top 75%", once: true },
      });
      gsap.from("[data-prob-time] li", {
        opacity: 0,
        x: 30,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: { trigger: "[data-prob-time]", start: "top 75%", once: true },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={root}>
      <Section id="problema" tone="preto">
        {/* Animated grid background */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.06]"
          style={{
            backgroundImage:
              "radial-gradient(rgba(45,158,95,0.7) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
          aria-hidden
        />
        <div
          className="absolute -top-20 -right-20 h-[500px] w-[500px] rounded-full bg-verde-claro/15 blur-3xl pointer-events-none"
          aria-hidden
        />

        <div className="relative">
          <SectionHeader
            tag="O problema"
            tone="dark"
            title={
              <>
                O CAR virou condição obrigatória para{" "}
                <span className="text-verde-claro italic">crédito rural</span>
              </>
            }
            lead={
              <>
                Desde janeiro de 2025, o Banco Central bloqueia automaticamente
                operações de crédito rural para propriedades com CAR irregular.
                Você descobre quando o seu cliente já voltou do banco de mãos
                vazias.
              </>
            }
          />

          <div className="mt-16 grid lg:grid-cols-12 gap-10">
            {/* Stats column */}
            <div data-prob-stats className="lg:col-span-5 space-y-4">
              {[
                {
                  value: <StatNumber end={7.4} decimals={1} suffix=" milhões" duration={2.4} />,
                  desc: "propriedades rurais cadastradas no SICAR",
                },
                {
                  value: <StatNumber end={58} suffix="%" duration={2.2} />,
                  desc:
                    "dos imóveis rurais têm algum tipo de pendência ou irregularidade ambiental — mais de 4,6 milhões de propriedades",
                },
                {
                  value: <StatNumber end={16} suffix="%" duration={2.0} />,
                  desc:
                    "queda do volume de crédito rural no 1º semestre de 2025 — R$ 83 bilhões a menos liberados",
                },
              ].map((it, i) => (
                <div
                  key={i}
                  data-prob-stat
                  className="rounded-2xl bg-white/5 border border-white/10 p-7 backdrop-blur"
                >
                  <div className="font-display font-bold text-verde-claro text-4xl md:text-5xl leading-none tabular-nums">
                    {it.value}
                  </div>
                  <p className="mt-3 text-white/70 text-[15px] leading-relaxed">
                    {it.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Timeline column */}
            <div className="lg:col-span-7" data-prob-time>
              <div className="rounded-2xl bg-white/5 border border-white/10 p-7 md:p-10 backdrop-blur">
                <h3 className="font-display font-bold text-white text-2xl mb-7">
                  Linha do tempo regulatória
                </h3>
                <Timeline items={regulatoryTimeline} />
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
