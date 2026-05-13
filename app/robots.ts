import type { MetadataRoute } from "next";

// NOTA: trocar para "https://campolivre.agr.br" quando o domínio próprio subir.
const BASE = "https://campo-livre-sigma.vercel.app";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${BASE}/sitemap.xml`,
  };
}
