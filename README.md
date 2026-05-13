# Campo Livre

Site institucional do **Campo Livre** — plataforma SaaS B2B para monitoramento mensal automático do CAR (Cadastro Ambiental Rural) da carteira de produtores rurais, voltada para agrônomos autônomos no Brasil.

> A garantia de elegibilidade ao crédito rural. Monitora o CAR da carteira todo mês e avisa antes do banco bloquear.

## Stack

- **Next.js 14** (App Router) + TypeScript
- **Tailwind CSS 3** com paleta verde/areia (design system per spec v1.0)
- **GSAP + ScrollTrigger** para parallax e scroll reveal
- **Lenis** para smooth scroll
- **Playfair Display + DM Sans + DM Mono** via `next/font/google`

## Rotas

| Rota | Conteúdo |
|---|---|
| `/` | Home — Hero, Problema, Bancos (IBAMA art. 83-A), Como Funciona, Comparativo, Planos preview, Depoimentos, CTA |
| `/como-funciona` | 6 passos detalhados + bases monitoradas + FAQ |
| `/produtos` | 3 planos (Básico, Pro, Retificação) + comparativo + FAQ |
| `/sobre` | História + caso zero Fazenda Primavera + valores + blindagem legal (art. 78-A) |
| `/contato` | Canais diretos + formulário + FAQ |
| `/teste-gratis` | Form de captura com consentimento LGPD opt-in |
| `/privacidade` · `/termos` | Rascunhos pendentes de revisão jurídica |
| `/sitemap.xml` · `/robots.txt` | Gerados via Next metadata routes |

## Desenvolvimento

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve build
```

## Conteúdo canônico

Toda a copy de plans, depoimentos, regulatory timeline e a citação da Wanda Ribeiro (Banco do Brasil) vive em [`lib/content.ts`](lib/content.ts) como fonte única.

## Notas regulatórias importantes

- A obrigatoriedade do CAR é **estrutural** — art. 78-A da Lei 12.651/2012 (Código Florestal). Lei ordinária federal, não Resolução do CMN.
- Citação da Wanda Ribeiro (BB-MT) deve ser sempre creditada como "Superintendente do Banco do Brasil em Mato Grosso — treinamento conjunto com Aprosoja-MT, abril/2026".
- IBAMA art. 83-A do Decreto 6.514/2008 vigente desde jan/2024 — multas contra bancos.

## Deploy

Vercel — auto-deploy a partir da branch `main`.
