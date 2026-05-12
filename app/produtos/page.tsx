import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import Section, { SectionHeader } from "@/components/ui/Section";
import PlanCard from "@/components/ui/PlanCard";
import Accordion from "@/components/ui/Accordion";
import ComparisonTable from "@/components/ui/ComparisonTable";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { plans } from "@/lib/content";

export const metadata: Metadata = {
  title: "Planos e preços — a partir de R$ 197/mês",
  description:
    "Plano Básico R$ 197/mês até 20 propriedades. Pro R$ 497/mês carteira ilimitada. Retificação avulsa R$ 800 a R$ 4.000 por caso. 30 dias grátis em qualquer plano.",
};

const softwareJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Campo Livre",
  applicationCategory: "BusinessApplication",
  applicationSubCategory: "AgriculturalSoftware",
  operatingSystem: "Web, WhatsApp",
  offers: [
    {
      "@type": "Offer",
      name: "Plano Básico",
      price: "197.00",
      priceCurrency: "BRL",
      description:
        "Monitoramento mensal de até 20 propriedades rurais. Relatório no WhatsApp.",
    },
    {
      "@type": "Offer",
      name: "Plano Pro",
      price: "497.00",
      priceCurrency: "BRL",
      description:
        "Monitoramento ilimitado, dossiê por propriedade, exportação de relatórios.",
    },
  ],
};

export default function ProdutosPage() {
  return (
    <PageShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareJsonLd) }}
      />
      <Section tone="branco" className="!py-0">
        <div className="pt-32 md:pt-40 pb-12 text-balance max-w-3xl">
          <span className="label-mono text-verde">Planos</span>
          <h1
            className="font-display font-black tracking-tight mt-4"
            style={{ fontSize: "clamp(40px, 5.5vw, 72px)", lineHeight: 1.04 }}
          >
            Três planos. <em className="not-italic italic text-verde">Sem armadilha.</em>
          </h1>
          <p className="mt-7 text-[19px] text-texto/80 leading-[1.65] max-w-2xl">
            Escolha conforme o tamanho da carteira. Comece grátis 30 dias em
            qualquer um deles. Cancele quando quiser, sem multa.
          </p>
        </div>
      </Section>

      {/* Plans */}
      <Section tone="areia">
        <Reveal stagger>
          <div className="grid lg:grid-cols-3 gap-6 items-stretch">
            {plans.map((p) => (
              <PlanCard key={p.name} plan={p} />
            ))}
          </div>
        </Reveal>
      </Section>

      {/* Comparativo planos */}
      <Section tone="branco">
        <SectionHeader title="Comparativo lado a lado" />
        <Reveal>
          <div className="mt-12 rounded-2xl border border-areia-escura bg-white p-6 md:p-8 shadow-soft">
            <ComparisonTable
              columns={[
                { name: "Básico" },
                { name: "Pro", highlight: true },
                { name: "Retificação" },
              ]}
              rows={[
                {
                  feature: "Propriedades",
                  cells: ["até 20", "ilimitado", "—"],
                },
                {
                  feature: "Relatório mensal no WhatsApp",
                  cells: ["yes", "yes", "no"],
                },
                {
                  feature: "Cruzamento SICAR + PRODES + embargos",
                  cells: ["yes", "yes", "no"],
                },
                {
                  feature: "Dossiê detalhado por propriedade",
                  cells: ["no", "yes", "no"],
                },
                {
                  feature: "Exportação PDF para clientes",
                  cells: ["no", "yes", "no"],
                },
                {
                  feature: "Histórico",
                  cells: ["12 meses", "ilimitado", "—"],
                },
                {
                  feature: "Coordenação com técnico habilitado",
                  cells: ["no", "no", "yes"],
                },
                {
                  feature: "Acompanhamento até regularização",
                  cells: ["no", "no", "yes"],
                },
                {
                  feature: "Preço",
                  cells: ["R$ 197/mês", "R$ 497/mês", "R$ 800–4.000/caso"],
                },
              ]}
            />
          </div>
        </Reveal>
      </Section>

      {/* Teste grátis */}
      <Section tone="verde-palido">
        <div className="max-w-3xl">
          <SectionHeader
            tag="Teste grátis"
            title="Sobre os 30 dias grátis"
          />
          <div className="mt-8 space-y-5 text-[17px] text-texto/85 leading-[1.7]">
            <p>
              Os 30 dias grátis valem para os planos Básico e Pro. Cadastra sem
              cartão de crédito. Recebe o primeiro relatório no dia 1 do
              próximo mês. Se gostar, escolhe o plano e segue. Se não,
              simplesmente não escolhe — sem cobrança, sem ligação de
              retenção, sem mensagem de "espera, temos uma oferta".
            </p>
            <p>
              A retificação avulsa não tem teste grátis porque envolve trabalho
              técnico de terceiro. Mas a análise inicial do caso é gratuita:
              você passa o caso, o Campo Livre avalia, e só cobra se você
              aprovar a coordenação.
            </p>
          </div>
        </div>
      </Section>

      {/* FAQ planos */}
      <Section tone="branco">
        <SectionHeader tag="FAQ" title="Sobre os planos" />
        <div className="mt-10 max-w-3xl">
          <Accordion
            items={[
              {
                q: "O que acontece se eu ultrapassar 20 propriedades no Básico?",
                a: (
                  <>
                    Você recebe um aviso e tem 30 dias para fazer upgrade para
                    o Pro. Nesse período, as propriedades excedentes continuam
                    sendo monitoradas. Sem cobrança surpresa.
                  </>
                ),
              },
              {
                q: "Posso mudar de plano no meio do mês?",
                a: (
                  <>
                    Pode. Upgrade tem cobrança proporcional do dia. Downgrade
                    entra em vigor no próximo ciclo (sem reembolso do que já
                    foi pago, mas com crédito para o ciclo seguinte).
                  </>
                ),
              },
              {
                q: "Vocês emitem nota fiscal?",
                a: (
                  <>
                    Sim. Nota fiscal de serviço emitida pela Prefeitura de
                    Maringá-PR, enviada por email no fechamento do mês.
                  </>
                ),
              },
              {
                q: "Como cancelo?",
                a: (
                  <>
                    Pelo próprio painel ou enviando uma mensagem no WhatsApp.
                    Sem fricção, sem ligação de retenção. Cancelamento entra
                    em vigor no fim do ciclo já pago.
                  </>
                ),
              },
            ]}
          />
        </div>
        <div className="mt-12 flex flex-wrap gap-4 justify-center">
          <Button href="/teste-gratis">Começar agora</Button>
          <Button
            href="https://wa.me/5544999981038"
            variant="outline"
            external
          >
            Tirar dúvida no WhatsApp
          </Button>
        </div>
      </Section>
    </PageShell>
  );
}
