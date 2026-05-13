import type { Metadata, Viewport } from "next";
import { Playfair_Display, DM_Sans, DM_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-display",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

// NOTA: trocar para "https://campolivre.agr.br" quando o domínio próprio subir.
const SITE_URL = "https://campo-livre-sigma.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "Campo Livre — Garantia de elegibilidade ao crédito rural para agrônomos | Monitoramento mensal de CAR",
    template: "Campo Livre — %s",
  },
  description:
    "A garantia mensal de que o CAR dos produtores da sua carteira está em ordem — para que o crédito rural não seja bloqueado quando seu cliente mais precisar.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "Campo Livre",
    locale: "pt_BR",
    url: SITE_URL,
    title:
      "Campo Livre — Garantia de elegibilidade ao crédito rural para agrônomos",
    description:
      "A garantia mensal de que o CAR dos produtores da sua carteira está em ordem — para que o crédito rural não seja bloqueado quando seu cliente mais precisar.",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Campo Livre — Garantia de elegibilidade ao crédito rural para agrônomos",
    description:
      "A garantia mensal de que o CAR dos produtores da sua carteira está em ordem — para que o crédito rural não seja bloqueado quando seu cliente mais precisar.",
  },
};

export const viewport: Viewport = {
  themeColor: "#1a6b3c",
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Campo Livre",
  url: SITE_URL,
  logo: `${SITE_URL}/opengraph-image`,
  description:
    "Plataforma SaaS B2B para monitoramento mensal automático do Cadastro Ambiental Rural (CAR) da carteira de produtores rurais, voltada para agrônomos autônomos no Brasil.",
  foundingDate: "2026",
  founder: { "@type": "Person", name: "Lucas Secco" },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Maringá",
    addressRegion: "PR",
    addressCountry: "BR",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    email: "contato@campolivre.agr.br",
    availableLanguage: ["Portuguese"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt-BR"
      className={`${playfair.variable} ${dmSans.variable} ${dmMono.variable}`}
    >
      <body className="font-sans bg-branco text-texto overflow-x-hidden">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
