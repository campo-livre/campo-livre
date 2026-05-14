import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import Section, { SectionHeader } from "@/components/ui/Section";
import Stepper, { Step } from "@/components/ui/Stepper";
import Accordion from "@/components/ui/Accordion";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import WhatsAppMockup from "@/components/illustrations/WhatsAppMockup";
import {
  IconClipboard,
  IconSatellite,
  IconPhone,
  IconAlert,
  IconShield,
  IconRefresh,
  IconMap,
  IconWindow,
} from "@/components/illustrations/Icons";

export const metadata: Metadata = {
  title: "Como funciona — monitoramento automático de CAR",
  description:
    "Veja o passo a passo: cadastra sua carteira de produtores, e todo dia 1 do mês você recebe um relatório no WhatsApp com o status do CAR de cada propriedade.",
};

const steps: Step[] = [
  {
    n: "01",
    icon: <IconClipboard className="h-6 w-6" />,
    title: "Você cadastra os produtores",
    body: (
      <>
        Adiciona os CPFs ou CNPJs dos produtores rurais da sua carteira. Para
        cada um, informa o nome da propriedade. Pode subir uma lista em CSV se
        já tem tudo organizado.{" "}
        <strong>Tempo médio: 1 minuto por produtor na primeira vez.</strong>
      </>
    ),
  },
  {
    n: "02",
    icon: <IconShield className="h-6 w-6" />,
    title: "A plataforma vincula o CAR",
    body: (
      <>
        O Campo Livre consulta o SICAR (Sistema Nacional de Cadastro Ambiental
        Rural) e identifica o CAR de cada propriedade automaticamente. O
        processo segue o mecanismo oficial de Representante Técnico — o
        produtor te vincula como representante em <code>car.gov.br</code>, e a
        plataforma acessa com o seu CPF, sem compartilhar senha.
      </>
    ),
  },
  {
    n: "03",
    icon: <IconSatellite className="h-6 w-6" />,
    title: "Monitoramento mensal automático",
    body: (
      <>
        Todo dia 1 do mês, às 8h da manhã, a plataforma verifica três coisas
        para cada propriedade:
        <ul className="mt-3 space-y-1.5 list-none">
          <li>→ Status do CAR no SICAR (ativo, suspenso, cancelado, pendência)</li>
          <li>→ Cruzamento com alertas de satélite PRODES/INPE</li>
          <li>→ Sobreposição com unidades de conservação e áreas embargadas</li>
        </ul>
      </>
    ),
  },
  {
    n: "04",
    icon: <IconPhone className="h-6 w-6" />,
    title: "Você recebe o relatório no WhatsApp",
    body: (
      <>
        Em até 30 minutos depois da varredura, você recebe um resumo direto no
        WhatsApp: quantos produtores estão em ordem, quais têm pendência e o
        que fazer em cada caso. <strong>Sem login. Sem painel pra abrir.</strong>
      </>
    ),
  },
  {
    n: "05",
    icon: <IconWindow className="h-6 w-6" />,
    title: "Benefício extra agora: reapresentação",
    body: (
      <>
        Se entre <strong>01/04/2026 e 12/05/2026</strong> algum cliente seu
        teve proposta de crédito recusada por restrição PRODES, a{" "}
        <strong>CMN 5.303</strong> abriu janela para reapresentação. O Campo
        Livre identifica esses casos na primeira varredura da sua carteira e
        te mostra exatamente quem pode voltar para o banco.
      </>
    ),
    highlight: true,
  },
  {
    n: "06",
    icon: <IconAlert className="h-6 w-6" />,
    title: "Você age antes do banco bloquear",
    body: (
      <>
        Com a informação na mão, você liga para o produtor antes que ele
        precise do crédito. Orienta a regularização. Chega no banco com o CAR
        limpo. O telefonema furioso nunca acontece.
      </>
    ),
  },
  {
    n: "07",
    icon: <IconRefresh className="h-6 w-6" />,
    title: "Tudo fica registrado",
    body: (
      <>
        Cada relatório fica salvo no histórico da carteira. Quando precisar
        comprovar que avisou o produtor há 6 meses, está lá — com data e
        detalhe. <strong>Vira documentação técnica da sua consultoria.</strong>
      </>
    ),
  },
];

const monitoraCards = [
  {
    icon: <IconMap className="h-7 w-7" />,
    title: "SICAR · Cadastro Ambiental Rural",
    body: "Status oficial do CAR de cada propriedade. Detecta cancelamento, suspensão, pendência de notificação e necessidade de retificação.",
  },
  {
    icon: <IconSatellite className="h-7 w-7" />,
    title: "PRODES / INPE",
    body: "Sistema oficial de monitoramento por satélite. Detecta supressão de vegetação após 31 de julho de 2019 — referência da CMN 5.268.",
  },
  {
    icon: <IconShield className="h-7 w-7" />,
    title: "Embargos e unidades de conservação",
    body: "Lista de áreas embargadas pelo Ibama, sobreposição com unidades de conservação no CNUC e com terras indígenas.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Como o Campo Livre acessa o CAR dos meus clientes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pelo mecanismo oficial de Representante Técnico do SICAR. O produtor te vincula como representante em car.gov.br. A plataforma acessa com seu CPF próprio — sem compartilhamento de senha, sem violação de termos de uso.",
      },
    },
    {
      "@type": "Question",
      name: "Preciso instalar algum aplicativo?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Não. O relatório chega no seu WhatsApp normal. Se quiser ver o histórico ou cadastrar mais produtores, abre o link da plataforma no navegador.",
      },
    },
    {
      "@type": "Question",
      name: "E se o produtor não quiser me vincular como representante técnico?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Você não consegue monitorar esse produtor pelo SICAR. Mas pode acompanhar pela base PRODES e pelas listas públicas de embargo, que cobrem boa parte dos riscos.",
      },
    },
    {
      "@type": "Question",
      name: "Quanto tempo demora para começar a receber relatórios?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "O primeiro relatório chega no dia 1 do mês seguinte ao seu cadastro. Se cadastrar hoje, recebe no início do próximo mês.",
      },
    },
  ],
};

export default function ComoFuncionaPage() {
  return (
    <PageShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {/* Hero */}
      <Section tone="branco" className="!py-0">
        <div className="pt-32 md:pt-40 pb-12 text-balance max-w-3xl">
          <span className="label-mono text-verde">Como funciona</span>
          <h1
            className="font-display font-black tracking-tight mt-4"
            style={{ fontSize: "clamp(40px, 5.5vw, 72px)", lineHeight: 1.04 }}
          >
            Como o Campo Livre{" "}
            <em className="not-italic italic text-verde">
              garante a elegibilidade
            </em>{" "}
            da sua carteira todo mês
          </h1>
          <p className="mt-7 text-[19px] text-texto/80 leading-[1.65] max-w-2xl">
            Você cadastra uma vez. A plataforma faz o resto. Todo dia 1 do mês,
            um relatório direto no WhatsApp diz quem está em ordem e quem
            precisa de atenção.
          </p>
        </div>
      </Section>

      {/* Fluxo */}
      <Section tone="areia">
        <SectionHeader
          tag="O fluxo do começo ao fim"
          title="Cinco minutos no cadastro. Zero esforço depois."
          lead="Veja o que acontece nos bastidores."
        />
        <Reveal stagger>
          <div className="mt-12">
            <Stepper steps={steps} layout="stack" />
          </div>
        </Reveal>
      </Section>

      {/* Monitora */}
      <Section tone="branco">
        <SectionHeader
          tag="O que a plataforma monitora"
          title="Três bases públicas, cruzadas todo mês"
        />
        <Reveal stagger>
          <div className="mt-12 grid md:grid-cols-3 gap-5">
            {monitoraCards.map((c) => (
              <div
                key={c.title}
                className="rounded-2xl border border-areia-escura bg-white p-7 hover:border-verde/40 hover:shadow-elev transition-all"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-verde-palido text-verde">
                  {c.icon}
                </span>
                <h3 className="mt-5 font-display font-bold text-xl text-preto">
                  {c.title}
                </h3>
                <p className="mt-3 text-[15px] text-texto/75 leading-relaxed">
                  {c.body}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </Section>

      {/* Relatório */}
      <Section tone="verde-palido">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <span className="label-mono text-verde">O relatório</span>
            <h2
              className="mt-4 font-display font-bold text-preto tracking-tight"
              style={{ fontSize: "clamp(34px, 4vw, 52px)", lineHeight: 1.1 }}
            >
              O relatório que chega no seu WhatsApp
            </h2>
            <p className="mt-6 text-[18px] leading-[1.65] text-texto/80 max-w-xl">
              Objetivo. Sem floreio. Cabe em uma tela do celular. Você vê:
            </p>
            <ul className="mt-6 space-y-3.5 text-[16px] text-texto">
              {[
                'Resumo da carteira em uma linha: "38 produtores monitorados — 35 ok, 3 em atenção"',
                "Para cada produtor em atenção: qual a pendência, urgência, o que fazer",
                "Comparativo com o mês anterior: o que mudou desde a última varredura",
                "Link para o dossiê completo de cada propriedade",
              ].map((it) => (
                <li key={it} className="flex gap-3 items-baseline">
                  <span className="font-mono text-verde">→</span>
                  <span>{it}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-5 flex justify-center">
            <WhatsAppMockup />
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section id="faq" tone="branco">
        <SectionHeader
          tag="FAQ"
          title="Perguntas comuns sobre o funcionamento"
        />
        <div className="mt-10 max-w-3xl">
          <Accordion
            items={[
              {
                q: "Como o Campo Livre acessa o CAR dos meus clientes?",
                a: (
                  <>
                    Pelo mecanismo oficial de Representante Técnico do SICAR.
                    O produtor te vincula como representante em{" "}
                    <code>car.gov.br</code>. A plataforma acessa com seu CPF
                    próprio — sem compartilhamento de senha, sem violação de
                    termos de uso.
                  </>
                ),
              },
              {
                q: "Preciso instalar algum aplicativo?",
                a: (
                  <>
                    Não. O relatório chega no seu WhatsApp normal. Se quiser
                    ver o histórico ou cadastrar mais produtores, abre o link
                    da plataforma no navegador.
                  </>
                ),
              },
              {
                q: "E se o produtor não quiser me vincular como representante técnico?",
                a: (
                  <>
                    Você não consegue monitorar esse produtor pelo SICAR. Mas
                    pode acompanhar pela base PRODES e pelas listas públicas
                    de embargo, que cobrem boa parte dos riscos.
                  </>
                ),
              },
              {
                q: "Quanto tempo demora para começar a receber relatórios?",
                a: (
                  <>
                    O primeiro relatório chega no dia 1 do mês seguinte ao seu
                    cadastro. Se cadastrar hoje, recebe no início do próximo
                    mês.
                  </>
                ),
              },
            ]}
          />
        </div>
        <div className="mt-12 flex justify-center">
          <Button href="/teste-gratis">Começar teste gratuito</Button>
        </div>
      </Section>
    </PageShell>
  );
}
