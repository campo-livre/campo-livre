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

export const metadata: Metadata = {
  metadataBase: new URL("https://campolivre.agr.br"),
  title: {
    default:
      "Campo Livre — Monitoramento de CAR para agrônomos | Antes do banco bloquear o crédito",
    template: "Campo Livre — %s",
  },
  description:
    "Plataforma para o agrônomo autônomo monitorar o CAR da carteira de produtores e avisar antes do crédito rural ser bloqueado. Relatório mensal no WhatsApp. R$ 197/mês.",
  openGraph: {
    type: "website",
    siteName: "Campo Livre",
    locale: "pt_BR",
    title:
      "Campo Livre — Monitoramento de CAR para agrônomos",
    description:
      "Sistema de alarme do agrônomo. Monitora o CAR da carteira e avisa antes do crédito travar no banco.",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export const viewport: Viewport = {
  themeColor: "#1a6b3c",
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Campo Livre",
  url: "https://campolivre.agr.br",
  logo: "https://campolivre.agr.br/og-image.png",
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
