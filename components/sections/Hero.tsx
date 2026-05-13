"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "@/components/ui/Button";
import StatNumber from "@/components/ui/StatNumber";
import WhatsAppMockup from "@/components/illustrations/WhatsAppMockup";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Hero() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entry animations
      gsap.from("[data-hero-tag]", {
        opacity: 0,
        y: 16,
        duration: 0.8,
        ease: "power3.out",
      });
      gsap.from("[data-hero-line]", {
        yPercent: 110,
        rotate: 0.6,
        duration: 1.1,
        ease: "expo.out",
        stagger: 0.09,
        delay: 0.15,
      });
      gsap.from("[data-hero-sub]", {
        opacity: 0,
        y: 18,
        duration: 0.9,
        delay: 0.55,
        ease: "power3.out",
      });
      gsap.from("[data-hero-cta]", {
        opacity: 0,
        y: 14,
        duration: 0.8,
        delay: 0.75,
        ease: "power3.out",
        stagger: 0.08,
      });
      gsap.from("[data-hero-phone]", {
        opacity: 0,
        y: 30,
        scale: 0.98,
        duration: 1.1,
        delay: 0.35,
        ease: "power3.out",
      });

      // Parallax — phone slower than text
      gsap.to("[data-hero-phone]", {
        yPercent: -8,
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
      gsap.to("[data-hero-copy]", {
        yPercent: 12,
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      className="relative pt-32 md:pt-36 lg:pt-40 pb-12 md:pb-20"
    >
      {/* Soft radial */}
      <div
        className="absolute inset-x-0 top-0 h-[80%] -z-0 pointer-events-none"
        aria-hidden
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 30% 30%, rgba(45,158,95,0.12), transparent 60%)",
        }}
      />
      <div className="max-w-container mx-auto px-6 lg:px-[60px] relative grid lg:grid-cols-12 gap-10 items-center">
        {/* Copy */}
        <div data-hero-copy className="lg:col-span-7 relative z-10">
          <span
            data-hero-tag
            className="inline-flex items-center gap-2 rounded-full bg-verde-palido border border-verde/15 px-3 py-1.5 text-xs text-verde font-medium"
          >
            <span className="relative inline-flex h-1.5 w-1.5">
              <span className="absolute inset-0 rounded-full bg-verde-claro opacity-60 animate-pulseDot" />
              <span className="relative h-1.5 w-1.5 rounded-full bg-verde-claro" />
            </span>
            Garantia de elegibilidade ao crédito rural 🌾
          </span>

          <h1
            className="font-display font-black tracking-tight text-preto mt-6 text-balance"
            style={{
              fontSize: "clamp(44px, 6vw, 80px)",
              lineHeight: 1.04,
            }}
          >
            <span className="block overflow-hidden">
              <span data-hero-line className="block">
                A garantia
              </span>
            </span>
            <span className="block overflow-hidden">
              <span
                data-hero-line
                className="block font-display italic text-verde"
              >
                que o crédito do seu cliente não vai travar
              </span>
            </span>
          </h1>

          <p
            data-hero-sub
            className="mt-7 max-w-xl text-[19px] leading-[1.65] text-texto/80"
          >
            Campo Livre monitora o CAR de toda a sua carteira{" "}
            <strong className="text-preto">todo mês</strong> e te avisa antes
            do banco bloquear — para que o produtor que confia em você não
            perca a safra por causa de uma pendência que ninguém viu.
          </p>

          <div data-hero-cta className="mt-9 flex flex-wrap items-center gap-4">
            <Button href="/teste-gratis">Começar teste gratuito</Button>
            <Button href="/como-funciona" variant="ghost">
              Ver como funciona
            </Button>
          </div>

          {/* Stats row */}
          <div
            data-hero-cta
            className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-px bg-areia-escura rounded-2xl overflow-hidden border border-areia-escura"
          >
            {[
              {
                value: "9 em 10",
                label:
                  "alertas PRODES são falso-positivo, segundo o próprio Banco do Brasil (Wanda Ribeiro, superintendência MT, abril/2026)",
              },
              {
                value: (
                  <StatNumber
                    end={5.4}
                    suffix=" milhões"
                    decimals={1}
                    duration={2.5}
                  />
                ),
                label:
                  "Apontamentos PRODES até outubro/2025 — fonte: Datagro",
              },
              {
                value: "CMN 5.193",
                label:
                  "Resolução vigente desde jan/2025 que bloqueia crédito por CAR irregular",
              },
            ].map((it, i) => (
              <div key={i} className="bg-white p-5">
                <div className="font-display font-bold text-verde-escuro tabular-nums text-2xl md:text-[28px] leading-tight">
                  {it.value}
                </div>
                <div className="mt-2 text-[12px] text-cinza leading-relaxed">
                  {it.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Phone */}
        <div data-hero-phone className="lg:col-span-5 relative">
          <div className="relative">
            <div className="absolute -inset-8 -z-10 rounded-[3rem] bg-verde-palido/70 blur-2xl" />
            <WhatsAppMockup />
          </div>
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-3 py-1.5 rounded-full bg-white border border-areia-escura shadow-soft text-[11px] text-cinza font-mono tracking-mono uppercase">
            entrega · dia 1 · 09h
          </div>
        </div>
      </div>
    </section>
  );
}
