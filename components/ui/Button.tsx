import Link from "next/link";
import { IconArrowRight } from "@/components/illustrations/Icons";

type Variant = "primary" | "outline" | "ghost" | "primaryLight";

const variants: Record<Variant, string> = {
  primary:
    "bg-verde text-white hover:bg-verde-escuro hover:-translate-y-0.5 shadow-cta",
  primaryLight:
    "bg-white text-verde-escuro hover:bg-verde-palido hover:-translate-y-0.5",
  outline:
    "border-2 border-verde text-verde hover:bg-verde hover:text-white",
  ghost:
    "text-verde hover:gap-3 underline-offset-4 hover:underline",
};

export default function Button({
  children,
  href,
  variant = "primary",
  className = "",
  withArrow = true,
  external = false,
  onClick,
}: {
  children: React.ReactNode;
  href?: string;
  variant?: Variant;
  className?: string;
  withArrow?: boolean;
  external?: boolean;
  onClick?: () => void;
}) {
  const base =
    "inline-flex items-center justify-center gap-2 font-medium text-[15px] rounded-lg px-7 py-3.5 transition-all";
  const cls = `${base} ${variants[variant]} ${className}`;

  const content = (
    <>
      {children}
      {withArrow && <IconArrowRight className="h-4 w-4" />}
    </>
  );

  if (!href) {
    return (
      <button onClick={onClick} className={cls}>
        {content}
      </button>
    );
  }
  if (external) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={cls}>
        {content}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {content}
    </Link>
  );
}
