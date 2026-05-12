import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://campolivre.agr.br";
  return [
    { url: `${base}/`, changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/como-funciona`, priority: 0.9 },
    { url: `${base}/produtos`, priority: 0.9 },
    { url: `${base}/teste-gratis`, priority: 0.9 },
    { url: `${base}/sobre`, priority: 0.7 },
    { url: `${base}/contato`, priority: 0.7 },
    { url: `${base}/privacidade`, priority: 0.3 },
    { url: `${base}/termos`, priority: 0.3 },
  ];
}
