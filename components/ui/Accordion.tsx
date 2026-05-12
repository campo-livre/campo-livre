"use client";

import { useState } from "react";

export type FAQ = { q: string; a: React.ReactNode };

export default function Accordion({ items }: { items: FAQ[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-areia-escura border-y border-areia-escura">
      {items.map((it, i) => {
        const isOpen = open === i;
        return (
          <div key={i}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              className="w-full flex items-start justify-between gap-6 text-left py-5 group"
              aria-expanded={isOpen}
            >
              <span
                className={`text-lg md:text-xl font-medium transition-colors ${
                  isOpen ? "text-verde" : "text-preto group-hover:text-verde"
                }`}
              >
                {it.q}
              </span>
              <span
                className={`flex-shrink-0 mt-1 inline-flex items-center justify-center h-7 w-7 rounded-full border border-verde/20 transition-transform ${
                  isOpen
                    ? "rotate-180 bg-verde text-white border-verde"
                    : "text-verde"
                }`}
                aria-hidden
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none">
                  <path
                    d="m6 9 6 6 6-6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </button>
            <div
              className={`grid transition-all duration-300 ${
                isOpen ? "grid-rows-[1fr] opacity-100 pb-6" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <div className="text-texto/80 leading-relaxed max-w-3xl">
                  {it.a}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
