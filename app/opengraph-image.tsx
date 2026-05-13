import { ImageResponse } from "next/og";

export const alt =
  "Campo Livre — A garantia de elegibilidade ao crédito rural. Monitoramento mensal do CAR da carteira de produtores, com aviso antes do banco bloquear.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Carrega um peso específico de uma fonte Google subsetada ao texto.
 * Reduz drasticamente o bundle do Satori (só baixa os glifos usados).
 */
async function loadGoogleFont(
  family: string,
  weight: number,
  text: string
): Promise<ArrayBuffer> {
  const url = `https://fonts.googleapis.com/css2?family=${family}:wght@${weight}&text=${encodeURIComponent(
    text
  )}`;
  const css = await fetch(url).then((r) => r.text());
  const match = css.match(/src:\s*url\(([^)]+)\)\s*format\(['"](?:opentype|truetype)['"]\)/);
  if (!match) throw new Error(`fonte ${family} ${weight} indisponível`);
  return await fetch(match[1]).then((r) => r.arrayBuffer());
}

export default async function Image() {
  const headlineA = "A garantia";
  const headlineB = "que o crédito do seu cliente não vai travar";
  const subhead = "Monitoramento mensal automático do CAR — Campo Livre";
  const brand = "Campo Livre";
  const allText = `${headlineA} ${headlineB} ${subhead} ${brand}`;

  const [playfair900, dmSans500] = await Promise.all([
    loadGoogleFont("Playfair+Display", 900, allText),
    loadGoogleFont("DM+Sans", 500, allText),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          padding: "72px 80px",
          backgroundImage:
            "linear-gradient(135deg, #1a6b3c 0%, #0d4424 100%)",
          color: "#fafaf8",
          fontFamily: "DM Sans",
          position: "relative",
        }}
      >
        {/* Subtle dot grid overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(rgba(45,158,95,0.4) 1.5px, transparent 1.5px)",
            backgroundSize: "40px 40px",
            opacity: 0.35,
          }}
        />

        {/* Top: brand */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            zIndex: 1,
          }}
        >
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: 999,
              background: "#2d9e5f",
              boxShadow: "0 0 24px rgba(45,158,95,0.6)",
            }}
          />
          <div
            style={{
              fontFamily: "Playfair Display",
              fontWeight: 900,
              fontSize: 30,
              letterSpacing: -0.5,
            }}
          >
            Campo Livre
          </div>
        </div>

        {/* Center: headline */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            zIndex: 1,
          }}
        >
          <div
            style={{
              fontFamily: "Playfair Display",
              fontWeight: 900,
              lineHeight: 1.02,
              letterSpacing: -1.5,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span style={{ fontSize: 92 }}>{headlineA}</span>
            <span
              style={{
                display: "flex",
                flexDirection: "column",
                color: "#dff0d0",
                fontStyle: "italic",
                fontSize: 58,
                marginTop: 16,
                letterSpacing: -1,
                lineHeight: 1.08,
              }}
            >
              <span>que o crédito do seu cliente</span>
              <span>não vai travar</span>
            </span>
          </div>

          <div
            style={{
              marginTop: 28,
              fontSize: 26,
              color: "rgba(250,250,248,0.78)",
              letterSpacing: -0.3,
              maxWidth: 900,
              lineHeight: 1.35,
              display: "flex",
            }}
          >
            {subhead}
          </div>
        </div>

        {/* Bottom-right: badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            zIndex: 1,
            color: "rgba(223,240,208,0.85)",
            fontSize: 18,
            letterSpacing: 2,
            textTransform: "uppercase",
          }}
        >
          <span style={{ display: "flex" }}>
            CMN 5.193 · 5.267 · 5.268 · EUDR
          </span>
          <span style={{ display: "flex" }}>campolivre.agr.br</span>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Playfair Display",
          data: playfair900,
          style: "normal",
          weight: 900,
        },
        {
          name: "DM Sans",
          data: dmSans500,
          style: "normal",
          weight: 500,
        },
      ],
    }
  );
}
