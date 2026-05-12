import Section, { SectionHeader } from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import { wandaRibeiro } from "@/lib/content";

export default function BancosSection() {
  return (
    <Section tone="areia" className="!bg-areia-escura">
      <SectionHeader
        tag="Por que os bancos viraram rigorosos"
        title={
          <>
            Não é só regulação.{" "}
            <span className="italic text-verde">
              Agora o banco também responde.
            </span>
          </>
        }
      />

      <Reveal>
        <div className="mt-12 grid lg:grid-cols-12 gap-8 items-start">
          {/* Texto principal */}
          <div className="lg:col-span-7">
            <p className="text-[18px] md:text-[19px] leading-[1.7] text-texto/85 text-balance">
              Desde janeiro de 2024, o IBAMA pode multar diretamente a
              instituição financeira que conceder crédito rural a produtor com
              desmatamento ilegal no imóvel — entre{" "}
              <strong className="text-preto">
                R$ 100 e R$ 1.000 por hectare
              </strong>
              , pago pelo banco. A primeira aplicação saiu em abril de 2025
              (Operação Campereada, no Pampa gaúcho). O resultado é simples: o
              banco deixou de ter incentivo para duvidar do PRODES.{" "}
              <strong className="text-preto">
                Na dúvida, bloqueia o crédito e empurra o problema pro produtor
                resolver.
              </strong>
            </p>

            <div className="mt-8 grid sm:grid-cols-3 gap-3">
              {[
                {
                  k: "Decreto 6.514/2008",
                  v: "art. 83-A · vigente desde jan/2024",
                },
                { k: "R$ 100 a 1.000", v: "por hectare · cobrado do banco" },
                {
                  k: "Operação Campereada",
                  v: "RS · abril/2025 · primeira aplicação",
                },
              ].map((it) => (
                <div
                  key={it.k}
                  className="rounded-xl border border-areia-escura bg-white px-4 py-3.5"
                >
                  <div className="font-display font-bold text-verde-escuro text-[15px] leading-tight">
                    {it.k}
                  </div>
                  <div className="mt-1 text-[12px] text-cinza leading-snug">
                    {it.v}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quote card lateral */}
          <aside className="lg:col-span-5">
            <figure className="relative rounded-2xl bg-verde-escuro text-white p-7 md:p-8 shadow-elev">
              <span
                className="absolute -top-3 left-7 inline-flex items-center rounded-full bg-verde-claro text-preto font-mono text-[10px] tracking-mono uppercase px-3 py-1"
                aria-hidden
              >
                Declaração pública do banco
              </span>
              <span
                className="absolute top-2 right-6 font-display font-black text-[80px] leading-none text-verde-claro/30 select-none"
                aria-hidden
              >
                "
              </span>
              <blockquote className="relative text-[19px] md:text-[20px] leading-snug font-display italic text-white text-balance">
                "{wandaRibeiro.quoteShort}"
              </blockquote>
              <figcaption className="mt-6 pt-5 border-t border-white/15">
                <div className="font-display font-bold text-white">
                  {wandaRibeiro.name}
                </div>
                <div className="mt-1 text-[12px] text-white/65">
                  Superintendente do Banco do Brasil em Mato Grosso
                </div>
                <div className="mt-2 font-mono text-[11px] tracking-mono uppercase text-verde-claro/85">
                  {wandaRibeiro.context}
                </div>
              </figcaption>
            </figure>
          </aside>
        </div>
      </Reveal>
    </Section>
  );
}
