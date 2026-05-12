type Tone = "branco" | "areia" | "verde-palido" | "preto" | "verde-escuro";

const toneClass: Record<Tone, string> = {
  branco: "bg-branco text-texto",
  areia: "bg-areia text-texto",
  "verde-palido": "bg-verde-palido text-texto",
  preto: "bg-preto text-white",
  "verde-escuro": "bg-verde-escuro text-white",
};

export default function Section({
  tone = "branco",
  id,
  children,
  className = "",
}: {
  tone?: Tone;
  id?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={`relative ${toneClass[tone]} ${className}`}
    >
      <div className="max-w-container mx-auto px-6 lg:px-[60px] py-20 md:py-28">
        {children}
      </div>
    </section>
  );
}

export function SectionHeader({
  tag,
  title,
  lead,
  tone = "light",
  align = "left",
}: {
  tag?: string;
  title: React.ReactNode;
  lead?: React.ReactNode;
  tone?: "light" | "dark";
  align?: "left" | "center";
}) {
  const tagColor =
    tone === "dark" ? "text-verde-claro" : "text-verde";
  const leadColor =
    tone === "dark" ? "text-white/70" : "text-texto/75";
  const titleColor = tone === "dark" ? "text-white" : "text-preto";

  return (
    <div className={align === "center" ? "text-center mx-auto max-w-3xl" : ""}>
      {tag && (
        <div
          className={`label-mono inline-flex items-center gap-3 ${tagColor}`}
        >
          <span className="h-px w-8 bg-current opacity-60" />
          {tag}
        </div>
      )}
      <h2
        className={`mt-4 font-display font-bold tracking-tight text-balance ${titleColor}`}
        style={{
          fontSize: "clamp(34px, 4vw, 52px)",
          lineHeight: 1.1,
        }}
      >
        {title}
      </h2>
      {lead && (
        <p
          className={`mt-5 max-w-2xl ${leadColor} ${
            align === "center" ? "mx-auto" : ""
          }`}
          style={{ fontSize: 19, lineHeight: 1.65 }}
        >
          {lead}
        </p>
      )}
    </div>
  );
}
