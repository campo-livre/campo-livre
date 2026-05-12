import type { Plan } from "@/components/ui/PlanCard";
import type { Depoimento } from "@/components/ui/DepoCard";
import type { TimelineItem } from "@/components/ui/Timeline";

// Single source of truth for the Banco do Brasil quote — used in 3 places.
// DO NOT alter wording without updating Hero, Bancos section and Depoimentos.
export const wandaRibeiro = {
  quote:
    "A expectativa entre bancários é de que 90% dos casos PRODES sejam inconsistências, não desmatamento real.",
  quoteShort:
    "A expectativa entre bancários é de que 90% dos casos sejam inconsistências, não desmatamento real.",
  name: "Wanda Ribeiro",
  role: "Superintendente · Banco do Brasil — Mato Grosso",
  context: "Treinamento conjunto com Aprosoja-MT, abril/2026",
};

export const plans: Plan[] = [
  {
    name: "Básico",
    price: "R$ 197",
    priceNote: "/mês",
    audience:
      "Para o agrônomo autônomo que atende até 20 produtores e quer começar a monitorar a carteira sem complicação.",
    features: [
      "Até 20 propriedades",
      "Relatório mensal no WhatsApp",
      "Alerta de mudança de status",
      "Cruzamento SICAR · PRODES · embargos",
      "Histórico de carteira (12 meses)",
      "Suporte WhatsApp em horário comercial",
      "30 dias grátis para testar",
    ],
    excludes: [
      "Dossiê detalhado por propriedade (só Pro)",
      "Mais de 20 propriedades (escolha Pro)",
    ],
    cta: { label: "Começar grátis", href: "/teste-gratis" },
  },
  {
    name: "Pro",
    price: "R$ 497",
    priceNote: "/mês",
    badge: "Mais popular",
    highlight: true,
    audience:
      "Para consultor com carteira acima de 20 produtores ou que quer dossiê completo para usar como documentação técnica.",
    features: [
      "Propriedades ilimitadas",
      "Tudo do Básico",
      "Dossiê completo por propriedade",
      "Orientação passo a passo para retificação",
      "Histórico ilimitado",
      "Prioridade no suporte (resposta em 2h)",
      "Exportação de relatórios em PDF",
      "30 dias grátis para testar",
    ],
    cta: { label: "Começar grátis", href: "/teste-gratis" },
  },
  {
    name: "Retificação",
    price: "R$ 800 a 4.000",
    priceNote: "/caso",
    audience:
      "Quando o diagnóstico revela um CAR que precisa de retificação técnica, o Campo Livre coordena com técnico habilitado até a regularização.",
    features: [
      "Análise técnica do caso (gratuita)",
      "Indicação de técnico habilitado da rede",
      "Coordenação entre você, produtor e técnico",
      "Acompanhamento até status \"ativo\" no SICAR",
      "Relatório final documentado",
    ],
    cta: { label: "Falar sobre o caso", href: "/contato" },
  },
];

export const depoimentos: Depoimento[] = [
  {
    quote:
      "Já sim. Na verdade o CAR que é negado daí. Um produtor tem que estar com o CAR em dia. Se não, ele não tem crédito.",
    name: "João F.",
    role: "Agrônomo · empresa de sementes · PR",
  },
  {
    quote:
      "Se o cara for financiar e o CAR estiver desatualizado, acontece. É bem comum na realidade.",
    name: "Leonardo O.",
    role: "Agrônomo autônomo · revenda · PR",
  },
  {
    quote:
      "Sim. Por causa dos desmatamentos. Já tive produtor com crédito negado por causa do PRODES.",
    name: "Lucas V.",
    role: "Agrônomo · consultoria rural · PR",
  },
];

export const regulatoryTimeline: TimelineItem[] = [
  {
    date: "JAN / 2025",
    status: "vigente",
    title: "Resolução CMN 5.193",
    body: "CAR cancelado ou suspenso bloqueia crédito rural automaticamente. Sem aviso. Sem negociação.",
  },
  {
    date: "MAR / 2026",
    status: "vigente",
    title: "Resolução CMN 5.267",
    body: "Monitoramento contínuo pelos bancos durante toda a vigência da operação. Sensoriamento remoto obrigatório acima de 300 hectares.",
  },
  {
    date: "ABR / 2026",
    status: "vigente",
    title: "Resolução CMN 5.268",
    body: "Verificação por satélite PRODES para imóveis acima de 4 módulos fiscais. Supressão detectada após 31/07/2019 trava o crédito.",
  },
  {
    date: "DEZ / 2026",
    status: "futuro",
    title: "EUDR — Lei Europeia",
    body: "Rastreabilidade ambiental obrigatória para exportar soja, carne, café e cacau para a Europa.",
  },
];

export const homeFaqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Como o Campo Livre acessa o CAR dos meus clientes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pelo mecanismo oficial de Representante Técnico do SICAR. O produtor te vincula como representante em car.gov.br, e a plataforma acessa com seu CPF próprio, sem compartilhamento de senha.",
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
      name: "Quanto custa o Campo Livre?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Plano Básico R$ 197 por mês para até 20 propriedades. Plano Pro R$ 497 por mês para carteira ilimitada. Retificação avulsa de R$ 800 a R$ 4.000 por caso. 30 dias grátis em qualquer plano.",
      },
    },
  ],
};
