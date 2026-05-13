import Section, { SectionHeader } from "@/components/ui/Section";
import DepoCard from "@/components/ui/DepoCard";
import Reveal from "@/components/ui/Reveal";
import { depoimentos, wandaRibeiro } from "@/lib/content";

export default function DepoimentosSection() {
  return (
    <Section tone="branco">
      <SectionHeader
        tag="Validação de mercado"
        title={
          <>
            Quem opera o crédito rural já reconhece:{" "}
            <span className="italic text-verde">
              a garantia precisa estar na mão do agrônomo
            </span>
            .
          </>
        }
        lead="Acima, o próprio credor reconhecendo. Abaixo, três agrônomos no Paraná em maio de 2026 — frases ditas, não roteirizadas."
      />

      {/* Featured BB quote — top, full width, visually distinct */}
      <Reveal>
        <figure className="mt-12 relative rounded-2xl border-2 border-verde bg-white p-7 md:p-10 shadow-elev overflow-hidden">
          <span
            className="absolute -top-px left-8 inline-flex items-center gap-2 rounded-b-md bg-verde text-white font-mono text-[10px] tracking-mono uppercase px-3 py-1.5"
            aria-hidden
          >
            <span className="inline-flex h-1.5 w-1.5 rounded-full bg-verde-claro animate-pulseDot" />
            Declaração pública do banco
          </span>
          <span
            className="absolute top-4 right-8 font-display font-black text-[120px] leading-none text-verde-palido select-none"
            aria-hidden
          >
            "
          </span>
          <div className="relative grid md:grid-cols-12 gap-6 items-center">
            <blockquote className="md:col-span-8 font-display italic text-[22px] md:text-[28px] leading-[1.2] text-preto text-balance">
              "{wandaRibeiro.quote}"
            </blockquote>
            <figcaption className="md:col-span-4 md:pl-6 md:border-l md:border-areia-escura">
              <div className="font-display font-bold text-preto text-lg">
                {wandaRibeiro.name}
              </div>
              <div className="mt-1 text-sm text-texto/75">
                Superintendente do Banco do Brasil em Mato Grosso
              </div>
              <div className="mt-3 font-mono text-[11px] tracking-mono uppercase text-verde">
                {wandaRibeiro.context}
              </div>
            </figcaption>
          </div>
        </figure>
      </Reveal>

      {/* Agronomist quotes — grid */}
      <Reveal stagger>
        <div className="mt-10 grid lg:grid-cols-3 gap-5">
          {depoimentos.map((d) => (
            <DepoCard key={d.name} depo={d} />
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
