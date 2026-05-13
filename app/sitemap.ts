import type { MetadataRoute } from "next";

// NOTA: trocar para "https://campolivre.agr.br" quando o domínio próprio subir.
const BASE = "https://campo-livre-sigma.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${BASE}/`, changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE}/como-funciona`, priority: 0.9 },
    { url: `${BASE}/produtos`, priority: 0.9 },
    { url: `${BASE}/teste-gratis`, priority: 0.9 },
    { url: `${BASE}/sobre`, priority: 0.7 },
    { url: `${BASE}/contato`, priority: 0.7 },
    { url: `${BASE}/privacidade`, priority: 0.3 },
    { url: `${BASE}/termos`, priority: 0.3 },
  ];
}
