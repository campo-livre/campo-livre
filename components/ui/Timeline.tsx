export type TimelineItem = {
  date: string;
  status?: "vigente" | "futuro";
  title: string;
  body: string;
};

export default function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <ol className="relative">
      <span
        className="absolute left-[7px] top-2 bottom-2 w-px bg-white/15"
        aria-hidden
      />
      {items.map((it, i) => {
        const vigente = it.status === "vigente";
        return (
          <li key={i} className="relative pl-8 pb-8 last:pb-0">
            <span
              className={`absolute left-0 top-2 inline-flex h-4 w-4 items-center justify-center rounded-full ${
                vigente ? "bg-verde-claro" : "bg-white/25"
              }`}
              aria-hidden
            >
              <span className="h-1.5 w-1.5 rounded-full bg-preto" />
            </span>
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <span className="font-mono text-[11px] tracking-mono uppercase text-verde-claro">
                {it.date}
              </span>
              {it.status && (
                <span
                  className={`font-mono text-[10px] tracking-mono uppercase px-2 py-0.5 rounded-full ${
                    vigente
                      ? "bg-verde-claro/15 text-verde-claro"
                      : "bg-white/10 text-white/55"
                  }`}
                >
                  {vigente ? "vigente" : "em breve"}
                </span>
              )}
            </div>
            <h3 className="mt-2 font-display font-bold text-2xl text-white leading-snug">
              {it.title}
            </h3>
            <p className="mt-2 text-white/70 leading-relaxed max-w-xl">
              {it.body}
            </p>
          </li>
        );
      })}
    </ol>
  );
}
