export type Step = {
  n: string;
  icon?: React.ReactNode;
  title: string;
  body: React.ReactNode;
  highlight?: boolean;
};

export default function Stepper({
  steps,
  layout = "grid",
}: {
  steps: Step[];
  layout?: "grid" | "stack";
}) {
  if (layout === "stack") {
    return (
      <ol className="space-y-6">
        {steps.map((s) => (
          <li
            key={s.n}
            className={`rounded-2xl border p-7 md:p-8 transition-colors ${
              s.highlight
                ? "bg-verde text-white border-verde"
                : "bg-white border-areia-escura hover:border-verde/40"
            }`}
          >
            <div className="flex items-start gap-5">
              <div
                className={`flex-shrink-0 font-mono text-sm tracking-mono uppercase font-medium px-2.5 py-1 rounded ${
                  s.highlight
                    ? "bg-white/15 text-white"
                    : "bg-verde-palido text-verde"
                }`}
              >
                {s.n}
              </div>
              <div className="flex-1 min-w-0">
                <h3
                  className={`font-display font-bold text-2xl leading-snug ${
                    s.highlight ? "text-white" : "text-preto"
                  }`}
                >
                  {s.title}
                </h3>
                <div
                  className={`mt-3 leading-relaxed ${
                    s.highlight ? "text-white/85" : "text-texto/80"
                  }`}
                >
                  {s.body}
                </div>
              </div>
            </div>
          </li>
        ))}
      </ol>
    );
  }

  return (
    <ol className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {steps.map((s) => (
        <li
          key={s.n}
          className={`rounded-2xl p-7 border transition-all ${
            s.highlight
              ? "bg-verde text-white border-verde shadow-elev"
              : "bg-white border-areia-escura hover:border-verde/50 hover:-translate-y-0.5"
          }`}
        >
          <div className="flex items-center justify-between">
            <span
              className={`font-mono text-xs tracking-mono uppercase ${
                s.highlight ? "text-verde-claro" : "text-verde"
              }`}
            >
              {s.n}
            </span>
            {s.icon && (
              <span
                className={
                  s.highlight ? "text-verde-claro" : "text-verde"
                }
              >
                {s.icon}
              </span>
            )}
          </div>
          <h3
            className={`mt-4 font-display font-bold text-xl leading-snug ${
              s.highlight ? "text-white" : "text-preto"
            }`}
          >
            {s.title}
          </h3>
          <p
            className={`mt-2.5 text-[15px] leading-relaxed ${
              s.highlight ? "text-white/85" : "text-texto/75"
            }`}
          >
            {s.body}
          </p>
        </li>
      ))}
    </ol>
  );
}
