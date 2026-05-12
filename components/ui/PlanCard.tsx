import Link from "next/link";
import { IconCheck, IconX, IconArrowRight } from "@/components/illustrations/Icons";

export type Plan = {
  name: string;
  price: string;
  priceNote?: string;
  audience: string;
  features: string[];
  excludes?: string[];
  cta: { label: string; href: string };
  highlight?: boolean;
  badge?: string;
};

export default function PlanCard({ plan }: { plan: Plan }) {
  const { highlight, badge } = plan;
  return (
    <div
      className={`relative rounded-[20px] p-px ${
        highlight ? "destaque-border" : ""
      }`}
    >
      <article
        className={`relative h-full rounded-[20px] p-8 lg:p-10 flex flex-col ${
          highlight
            ? "bg-verde text-white shadow-elev"
            : "bg-white border border-verde/10 hover:border-verde transition-colors"
        }`}
      >
        {badge && (
          <span
            className={`absolute -top-3 left-8 inline-flex items-center gap-1 rounded-full px-3 py-1 text-[10px] tracking-mono uppercase font-mono ${
              highlight ? "bg-verde-claro text-preto" : "bg-verde text-white"
            }`}
          >
            {badge}
          </span>
        )}
        <div
          className={`label-mono ${
            highlight ? "text-verde-claro/90" : "text-verde"
          }`}
        >
          {plan.name}
        </div>
        <div className="mt-3 flex items-baseline gap-2">
          <span className="font-display font-bold tracking-tight leading-none text-[44px] md:text-[52px]">
            {plan.price}
          </span>
          {plan.priceNote && (
            <span
              className={`text-sm ${
                highlight ? "text-white/65" : "text-cinza"
              }`}
            >
              {plan.priceNote}
            </span>
          )}
        </div>
        <p
          className={`mt-4 text-[15px] leading-relaxed ${
            highlight ? "text-white/80" : "text-texto/75"
          }`}
        >
          {plan.audience}
        </p>

        <ul className="mt-7 space-y-3 text-[15px]">
          {plan.features.map((f) => (
            <li key={f} className="flex items-start gap-3">
              <IconCheck
                className={`h-5 w-5 flex-shrink-0 mt-0.5 ${
                  highlight ? "text-verde-claro" : "text-verde"
                }`}
                strokeWidth={2}
              />
              <span className={highlight ? "text-white/92" : "text-texto"}>
                {f}
              </span>
            </li>
          ))}
        </ul>

        {plan.excludes && plan.excludes.length > 0 && (
          <ul
            className={`mt-5 space-y-2 text-sm pt-5 border-t ${
              highlight ? "border-white/15 text-white/55" : "border-areia-escura text-cinza"
            }`}
          >
            {plan.excludes.map((f) => (
              <li key={f} className="flex items-start gap-3">
                <IconX className="h-4 w-4 flex-shrink-0 mt-0.5 opacity-50" />
                <span>{f}</span>
              </li>
            ))}
          </ul>
        )}

        <div className="mt-8 pt-2">
          <Link
            href={plan.cta.href}
            className={`group inline-flex items-center gap-2 rounded-lg font-medium px-5 py-3 text-sm w-full justify-center transition-all ${
              highlight
                ? "bg-white text-verde hover:bg-verde-palido"
                : "bg-verde text-white hover:bg-verde-escuro shadow-cta"
            }`}
          >
            {plan.cta.label}
            <IconArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </article>
    </div>
  );
}
