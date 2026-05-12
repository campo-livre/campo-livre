"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Logo from "@/components/illustrations/Logo";
import { IconArrowRight } from "@/components/illustrations/Icons";

const items = [
  { href: "/como-funciona", label: "Como funciona" },
  { href: "/produtos", label: "Planos" },
  { href: "/sobre", label: "Sobre" },
  { href: "/contato", label: "Contato" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 40);
      const h = document.body.scrollHeight - window.innerHeight;
      setProgress(h > 0 ? y / h : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-branco/92 backdrop-blur-md border-b border-verde/10 shadow-[0_1px_0_rgba(26,107,60,0.05)]"
          : "bg-branco/80 backdrop-blur-sm"
      }`}
    >
      <nav
        className={`max-w-container mx-auto flex items-center justify-between px-6 lg:px-[60px] transition-all duration-300 ${
          scrolled ? "h-[64px]" : "h-[80px]"
        }`}
      >
        <Link href="/" aria-label="Campo Livre — Home">
          <Logo />
        </Link>

        <ul className="hidden md:flex items-center gap-1 text-sm text-texto/80">
          {items.map((it) => (
            <li key={it.href}>
              <Link
                href={it.href}
                className="px-4 py-2 rounded-full hover:text-verde hover:bg-verde-palido transition-colors"
              >
                {it.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <Link
            href="/teste-gratis"
            className="hidden md:inline-flex items-center gap-2 rounded-lg bg-verde text-white font-medium px-4 py-2.5 text-sm hover:bg-verde-escuro hover:-translate-y-0.5 transition-all shadow-cta"
          >
            Testar grátis
            <IconArrowRight className="h-4 w-4" />
          </Link>
          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-md border border-verde/20 text-verde"
            aria-label="Abrir menu"
            aria-expanded={open}
          >
            <span className="sr-only">Menu</span>
            <span className="text-base leading-none">{open ? "✕" : "☰"}</span>
          </button>
        </div>
      </nav>

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-verde/10">
        <div
          className="h-px bg-verde origin-left"
          style={{ transform: `scaleX(${progress})`, transformOrigin: "left" }}
        />
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-areia-escura bg-branco">
          <ul className="px-6 py-4 space-y-1">
            {items.map((it) => (
              <li key={it.href}>
                <Link
                  href={it.href}
                  onClick={() => setOpen(false)}
                  className="block px-3 py-2.5 rounded-md text-texto hover:bg-verde-palido"
                >
                  {it.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Link
                href="/teste-gratis"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-2 rounded-lg bg-verde text-white font-medium px-4 py-2.5 text-sm shadow-cta"
              >
                Testar grátis
                <IconArrowRight className="h-4 w-4" />
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
