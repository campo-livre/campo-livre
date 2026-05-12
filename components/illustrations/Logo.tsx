export default function Logo({
  className = "",
  withWord = true,
}: {
  className?: string;
  withWord?: boolean;
}) {
  return (
    <span
      className={`inline-flex items-baseline gap-2 ${className}`}
      aria-label="Campo Livre"
    >
      {withWord && (
        <span className="font-display font-bold text-verde text-[1.35rem] leading-none">
          Campo Livre
        </span>
      )}
      <span className="relative inline-flex h-2 w-2 -translate-y-[2px]">
        <span className="absolute inset-0 rounded-full bg-verde-claro opacity-70 animate-pulseDot" />
        <span className="relative h-2 w-2 rounded-full bg-verde-claro" />
      </span>
    </span>
  );
}
