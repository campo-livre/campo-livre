import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import Section, { SectionHeader } from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Sobre — fundado por quem entende a fazenda",
  description:
    "Campo Livre nasceu em Maringá-PR, criado por Lucas Secco, com família dona de mais de 5.000 hectares no PR e BA. O produto começou pela dor da própria fazenda.",
};

const valores = [
  {
    n: "01",
    t: "Honestidade técnica acima de promessa de venda",
    d: "Não prometemos \"garantir seu crédito\". Prometemos que você vai saber antes do banco bloquear. A diferença é grande.",
  },
  {
    n: "02",
    t: "Agrônomo é cliente, não consumidor",
    d: "O produto é construído com agrônomo, não para um público que o time imagina. Cada feature passa pelo teste de \"isso faz sentido pra quem está em campo às 5h da manhã?\"",
  },
  {
    n: "03",
    t: "Dado público merece tecnologia pública",
    d: "SICAR e PRODES são bases públicas pagas com imposto. Acesso à informação que está lá não é privilégio de banco — é direito de quem trabalha no campo.",
  },
  {
    n: "04",
    t: "Aviso, não venda",
    d: "Campo Livre te avisa. Se você quiser resolver sozinho, ótimo. Se quiser contratar a Retificação, também. O incentivo do produto não é empurrar serviço pago.",
  },
  {
    n: "05",
    t: "Documentação que protege",
    d: "Tudo fica registrado com data, hora e detalhe. Quando precisar provar que avisou o produtor há 6 meses, o histórico está lá. Vira camada de defesa profissional pra você.",
  },
];

export default function SobrePage() {
  return (
    <PageShell>
      <Section tone="branco" className="!py-0">
        <div className="pt-32 md:pt-40 pb-12 text-balance max-w-3xl">
          <span className="label-mono text-verde">Sobre</span>
          <h1
            className="font-display font-black tracking-tight mt-4"
            style={{ fontSize: "clamp(40px, 5.5vw, 72px)", lineHeight: 1.04 }}
          >
            Construído por quem viu o crédito ser bloqueado{" "}
            <em className="not-italic italic text-verde">
              de dentro da fazenda
            </em>
          </h1>
          <p className="mt-7 text-[19px] text-texto/80 leading-[1.65] max-w-2xl">
            Campo Livre não nasceu em escritório de São Paulo. Nasceu da
            fazenda da nossa família — onde descobrimos, na prática, que
            ninguém estava vigiando o CAR.
          </p>
        </div>
      </Section>

      {/* História */}
      <Section tone="areia">
        <SectionHeader tag="A história" title="Como o Campo Livre começou" />
        <Reveal>
          <div className="mt-10 max-w-3xl space-y-5 text-[17px] leading-[1.75] text-texto/85">
            <p>
              Em 2026, minha mãe foi tentar arrendar 1.500 hectares da Fazenda
              Primavera, em São Desidério, na Bahia. O contrato era simples. O
              arrendatário pediu o CAR. Ela mandou. Voltou negado: pendências
              de Reserva Legal abaixo do mínimo, APP zerada no cadastro. A
              propriedade tinha sido cadastrada em 2016 e nunca foi validada
              pelo estado da Bahia.{" "}
              <strong className="text-preto">
                Ninguém tinha avisado.
              </strong>
            </p>
            <p>
              Ela não sabia. O contador não sabia. O agrônomo que assinou o
              último projeto de crédito também não tinha mencionado. O CAR
              estava lá, esperando virar problema no momento errado —
              exatamente o momento de fechar negócio.
            </p>
            <p>
              A Fazenda Primavera não é caso isolado. Em 2025, o Banco Central
              começou a bloquear automaticamente o crédito rural de qualquer
              propriedade com CAR irregular (Resolução CMN 5.193). Mais de R$ 20
              bilhões em operações foram travados entre 2024 e 2025. Em abril
              de 2026, a CMN 5.268 estendeu o bloqueio para casos detectados
              por satélite. Em paralelo, o IBAMA passou a multar diretamente
              os bancos que financiam produtor com desmatamento ilegal — então
              o banco virou agente fiscalizador por obrigação própria, não só
              por exigência regulatória.
            </p>
            <p>
              A regulação chegou rápida. O mercado não chegou. As plataformas
              que existem (Agrotools, ScoreCAR, Produzindo Certo) atendem
              bancos e tradings em contratos corporativos. Para o agrônomo
              autônomo, que tem uma carteira de 20 a 100 produtores e ninguém
              para vigiar, não havia nada.
            </p>
            <p>
              <strong className="text-preto">
                Campo Livre é a plataforma que faltava
              </strong>
              : o sistema de alarme do agrônomo. Monitoramento mensal
              automático. Relatório no WhatsApp. Aviso antes do banco
              bloquear.
            </p>
          </div>
        </Reveal>
      </Section>

      {/* Fundador */}
      <Section tone="branco">
        <SectionHeader tag="Quem está por trás" title="O fundador" />
        <Reveal>
          <div className="mt-10 grid lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-4">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-areia-escura bg-areia">
                {/* Stylized silhouette (no real photo) */}
                <svg
                  viewBox="0 0 400 500"
                  className="w-full h-full"
                  aria-hidden
                >
                  <defs>
                    <linearGradient id="lsBg" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#e8f5ee" />
                      <stop offset="100%" stopColor="#f5f0e8" />
                    </linearGradient>
                    <linearGradient id="lsFig" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#0d4424" />
                      <stop offset="100%" stopColor="#1a6b3c" />
                    </linearGradient>
                  </defs>
                  <rect width="400" height="500" fill="url(#lsBg)" />
                  {/* Field horizon */}
                  <path
                    d="M0,360 C100,340 220,365 320,335 C380,320 400,330 400,330 L400,500 L0,500 Z"
                    fill="#bee0a4"
                    opacity="0.55"
                  />
                  <path
                    d="M0,395 C120,375 220,400 320,375 C380,360 400,370 400,370 L400,500 L0,500 Z"
                    fill="#94c970"
                    opacity="0.75"
                  />
                  {/* Sun */}
                  <circle cx="120" cy="120" r="50" fill="#efbb47" opacity="0.5" />
                  {/* Silhouette */}
                  <g fill="url(#lsFig)">
                    <ellipse cx="200" cy="160" rx="28" ry="32" />
                    <path d="M170,200 Q200,190 230,200 L235,360 L165,360 Z" />
                    <path d="M165,360 L155,420 L185,420 L200,360 Z" />
                    <path d="M235,360 L245,420 L215,420 L200,360 Z" />
                    <path d="M170,210 L130,290 L150,300 L185,225 Z" />
                  </g>
                </svg>
              </div>
            </div>
            <div className="lg:col-span-8">
              <div className="font-display font-bold text-preto text-3xl md:text-4xl">
                Lucas Secco
              </div>
              <div className="font-mono text-[12px] tracking-mono uppercase text-cinza mt-2">
                Maringá · PR
              </div>
              <div className="mt-6 space-y-4 text-[17px] leading-[1.75] text-texto/85">
                <p>
                  Formação em Zootecnia. Filho e neto de produtor rural.
                  Família com mais de 5.000 hectares de operação ativa entre o
                  Paraná (Norte e Noroeste) e o Oeste da Bahia, cobrindo
                  grãos, pecuária e cana.
                </p>
                <p>
                  Passou a vida olhando para a fazenda por dentro: das decisões
                  de plantio aos contratos com bancos, das ARTs assinadas pelos
                  agrônomos da família às discussões com cartório. Foi essa
                  proximidade que mostrou onde o sistema falhava — e onde
                  nenhum software de agro estava resolvendo.
                </p>
                <p>
                  Antes do Campo Livre, construiu uma agência de marketing e
                  operações com automação por IA (Mel do Churrasco, em
                  Maringá). É de lá que vem a stack: n8n, Claude API, Twilio,
                  Apify. Tudo testado em escala antes de virar Campo Livre.
                </p>
                <p className="text-preto">
                  <strong>
                    Não é um fundador de São Paulo descobrindo o agro. É
                    alguém que cresceu dentro dele.
                  </strong>
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* Caso Zero */}
      <Section tone="verde-palido">
        <div className="max-w-4xl">
          <SectionHeader
            tag="Caso zero"
            title="Fazenda Primavera — o caso que originou tudo"
          />
          <Reveal>
            <div className="mt-10 rounded-2xl bg-white border border-verde/15 p-8 md:p-12 shadow-soft">
              <dl className="grid sm:grid-cols-2 gap-x-10 gap-y-4 text-[16px]">
                {[
                  ["Proprietária", "Dona Neusa (mãe do Lucas)"],
                  ["Localização", "São Desidério, Oeste da Bahia"],
                  ["Tamanho", "493,13 hectares — 7,58 módulos fiscais"],
                  ["CAR", "Cadastrado em 2016. Nunca validado."],
                  [
                    "Pendências",
                    "Reserva Legal em 19,69% (mín. Cerrado: 20%). APP zerada.",
                  ],
                  [
                    "Resultado se nada fosse feito",
                    "Crédito rural bloqueado no próximo Plano Safra. Arrendamento travado.",
                  ],
                ].map(([k, v]) => (
                  <div key={k}>
                    <dt className="font-mono text-[11px] tracking-mono uppercase text-cinza">
                      {k}
                    </dt>
                    <dd className="mt-1 text-texto">{v}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-8 pt-6 border-t border-areia-escura text-[18px] italic text-preto text-balance">
                "Toda propriedade tem uma versão da Fazenda Primavera. O Campo
                Livre existe pra encontrar a sua antes do banco encontrar."
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Valores */}
      <Section tone="branco">
        <SectionHeader tag="Valores" title="O que orienta o Campo Livre" />
        <Reveal stagger>
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {valores.map((v) => (
              <article
                key={v.n}
                className="rounded-2xl border border-areia-escura bg-white p-7 hover:border-verde/40 transition-colors"
              >
                <div className="font-mono text-xs tracking-mono uppercase text-verde">
                  {v.n}
                </div>
                <h3 className="mt-4 font-display font-bold text-xl text-preto leading-snug">
                  {v.t}
                </h3>
                <p className="mt-3 text-[15px] text-texto/75 leading-relaxed">
                  {v.d}
                </p>
              </article>
            ))}
          </div>
        </Reveal>
      </Section>

      {/* Blindagem legal */}
      <Section tone="areia">
        <div className="max-w-4xl">
          <SectionHeader
            tag="A blindagem legal do produto"
            title={
              <>
                O CAR é obrigatório{" "}
                <span className="italic text-verde">por lei</span>, não por
                resolução
              </>
            }
          />
          <Reveal>
            <div className="mt-10 space-y-6 text-[17px] leading-[1.75] text-texto/85">
              <p>
                Uma dúvida legítima:{" "}
                <em className="text-preto">
                  "E se a bancada ruralista derrubar as Resoluções do CMN no
                  Congresso?"
                </em>{" "}
                A resposta importa pra você decidir se faz sentido contratar
                o Campo Livre.
              </p>
              <p>
                O <strong className="text-preto">art. 78-A da Lei 12.651/2012</strong>{" "}
                (Código Florestal) determina que, desde 31 de dezembro de
                2017, instituições financeiras só concedem crédito agrícola
                para imóveis inscritos no CAR. Essa é{" "}
                <strong className="text-preto">lei ordinária federal</strong>,
                não uma resolução do CMN. Mesmo no cenário mais favorável ao
                agro — em que o Congresso suste as Resoluções CMN 5.193 e
                5.268 via decreto legislativo —{" "}
                <strong className="text-preto">
                  a obrigatoriedade do CAR ativo continua intocada
                </strong>
                . O que pode mudar é a forma de fiscalizar (verificação
                PRODES automática); o que não muda é a exigência basal.
              </p>
              <p>
                O Campo Livre monitora o CAR, que é a obrigação estrutural.
                PRODES é camada adicional.{" "}
                <strong className="text-preto">
                  Em qualquer cenário regulatório, o produto continua
                  relevante.
                </strong>
              </p>

              <div className="mt-8 grid sm:grid-cols-3 gap-3">
                {[
                  {
                    k: "Art. 78-A",
                    v: "Lei 12.651/2012 · Código Florestal",
                  },
                  {
                    k: "Lei ordinária",
                    v: "federal · não revogável por PDL",
                  },
                  {
                    k: "Desde 31/12/2017",
                    v: "exigência basal e contínua",
                  },
                ].map((it) => (
                  <div
                    key={it.k}
                    className="rounded-xl border border-verde/15 bg-white px-4 py-3.5"
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
          </Reveal>
        </div>
      </Section>

      {/* CTA */}
      <Section tone="verde-escuro">
        <div className="text-center max-w-3xl mx-auto">
          <h2
            className="font-display font-black text-white tracking-tight"
            style={{ fontSize: "clamp(34px, 5vw, 56px)", lineHeight: 1.05 }}
          >
            Quer entender se faz sentido pra sua carteira?
          </h2>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button href="/teste-gratis" variant="primaryLight">
              Começar teste gratuito
            </Button>
            <Button
              href="https://wa.me/5544999981038"
              external
              variant="outline"
              className="!border-white !text-white hover:!bg-white hover:!text-verde-escuro"
            >
              Conversar com o Lucas
            </Button>
          </div>
        </div>
      </Section>
    </PageShell>
  );
}
