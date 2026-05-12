import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { IconWhatsApp } from "@/components/illustrations/Icons";

export default function FinalCTA() {
  return (
    <Section id="cta" tone="verde-escuro" className="overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
        aria-hidden
      />
      <div
        className="absolute -top-32 left-1/2 -translate-x-1/2 h-[600px] w-[600px] rounded-full bg-verde-claro/20 blur-3xl pointer-events-none"
        aria-hidden
      />
      <div className="relative max-w-3xl mx-auto text-center">
        <div className="label-mono text-verde-claro/85 inline-flex items-center gap-3">
          <span className="h-px w-8 bg-current opacity-60" />
          Comece agora
        </div>
        <h2
          className="mt-5 font-display font-black text-white tracking-tight text-balance"
          style={{
            fontSize: "clamp(40px, 5.5vw, 68px)",
            lineHeight: 1.04,
          }}
        >
          30 dias grátis.
          <br />
          <span className="italic">Sem cartão de crédito.</span>
        </h2>
        <p className="mt-7 text-white/80 text-[18px] leading-[1.65] max-w-xl mx-auto">
          Cadastre sua carteira hoje. No dia 1 do próximo mês, você já recebe
          o primeiro relatório no WhatsApp. Se não gostar, cancela sem nenhum
          custo.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Button href="/teste-gratis" variant="primaryLight">
            Começar teste gratuito
          </Button>
          <a
            href="https://wa.me/5544999981038"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border-2 border-white/60 text-white font-medium px-7 py-3.5 text-[15px] hover:bg-white hover:text-verde-escuro transition-all"
          >
            <IconWhatsApp className="h-4 w-4" />
            Falar pelo WhatsApp
          </a>
        </div>
      </div>
    </Section>
  );
}
