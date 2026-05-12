export type Depoimento = {
  quote: string;
  name: string;
  role: string;
};

export default function DepoCard({ depo }: { depo: Depoimento }) {
  return (
    <figure className="relative rounded-2xl border border-areia-escura bg-white p-7 md:p-8 hover:border-verde/40 transition-colors">
      <span
        className="absolute top-4 right-6 font-display font-black text-[80px] leading-none text-verde-palido select-none"
        aria-hidden
      >
        "
      </span>
      <blockquote className="relative text-[19px] leading-relaxed text-texto text-balance">
        "{depo.quote}"
      </blockquote>
      <figcaption className="mt-6 pt-5 border-t border-areia-escura flex items-baseline justify-between gap-4">
        <span className="font-display font-bold text-preto">{depo.name}</span>
        <span className="font-mono text-[11px] tracking-mono uppercase text-cinza text-right">
          {depo.role}
        </span>
      </figcaption>
    </figure>
  );
}
