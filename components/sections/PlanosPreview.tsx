import Section, { SectionHeader } from "@/components/ui/Section";
import PlanCard from "@/components/ui/PlanCard";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import { plans } from "@/lib/content";

export default function PlanosPreview() {
  // For the home preview, show condensed versions (3-4 features each)
  const preview = plans.map((p) => ({
    ...p,
    features: p.features.slice(0, 4),
    excludes: undefined,
  }));

  return (
    <Section id="planos" tone="branco">
      <SectionHeader
        tag="Planos"
        title={
          <>
            Simples.{" "}
            <span className="italic text-verde">Sem surpresa.</span>
          </>
        }
        lead={
          <>
            Escolha conforme o tamanho da sua carteira. Cancele quando quiser.
            Teste grátis por 30 dias.
          </>
        }
      />
      <Reveal stagger>
        <div className="mt-14 grid lg:grid-cols-3 gap-6 items-stretch">
          {preview.map((p) => (
            <PlanCard key={p.name} plan={p} />
          ))}
        </div>
      </Reveal>
      <div className="mt-10 flex justify-center">
        <Button href="/produtos" variant="ghost">
          Ver detalhes dos planos
        </Button>
      </div>
    </Section>
  );
}
