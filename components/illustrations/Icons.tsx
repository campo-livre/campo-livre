type IconProps = { className?: string; strokeWidth?: number };

const base = (sw = 1.6) => ({
  fill: "none" as const,
  stroke: "currentColor",
  strokeWidth: sw,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
});

export function IconArrowRight({ className = "h-4 w-4", strokeWidth }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base(strokeWidth)} aria-hidden>
      <path d="M5 12h14M13 5l7 7-7 7" />
    </svg>
  );
}

export function IconCheck({ className = "h-4 w-4", strokeWidth }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base(strokeWidth)} aria-hidden>
      <path d="m5 12 5 5L20 7" />
    </svg>
  );
}

export function IconX({ className = "h-4 w-4", strokeWidth }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base(strokeWidth)} aria-hidden>
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}

export function IconClipboard({ className = "h-6 w-6", strokeWidth }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base(strokeWidth)} aria-hidden>
      <rect x="6" y="4" width="12" height="17" rx="2" />
      <rect x="9" y="2" width="6" height="4" rx="1" />
      <path d="M9 11h6M9 15h4" />
    </svg>
  );
}

export function IconSatellite({ className = "h-6 w-6", strokeWidth }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base(strokeWidth)} aria-hidden>
      <path d="M4 14a8 8 0 0 1 6-6" />
      <path d="M4 18a12 12 0 0 1 10-10" />
      <circle cx="18" cy="6" r="2" />
      <path d="m17 7-4 4M15 9l2 2" />
    </svg>
  );
}

export function IconPhone({ className = "h-6 w-6", strokeWidth }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base(strokeWidth)} aria-hidden>
      <rect x="6" y="2" width="12" height="20" rx="3" />
      <path d="M10 18h4" />
    </svg>
  );
}

export function IconAlert({ className = "h-6 w-6", strokeWidth }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base(strokeWidth)} aria-hidden>
      <path d="M12 3 2 21h20L12 3Z" />
      <path d="M12 10v5M12 18.5v.5" />
    </svg>
  );
}

export function IconShield({ className = "h-6 w-6", strokeWidth }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base(strokeWidth)} aria-hidden>
      <path d="M12 2.5 4 5v6c0 4.6 3.2 8.7 8 10.5 4.8-1.8 8-5.9 8-10.5V5l-8-2.5Z" />
      <path d="m8.5 12 2.5 2.5L16 9.5" />
    </svg>
  );
}

export function IconRefresh({ className = "h-6 w-6", strokeWidth }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base(strokeWidth)} aria-hidden>
      <path d="M21 12a9 9 0 1 1-3-6.7L21 8" />
      <path d="M21 3v5h-5" />
    </svg>
  );
}

export function IconMap({ className = "h-6 w-6", strokeWidth }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base(strokeWidth)} aria-hidden>
      <path d="m3 6 6-2 6 2 6-2v14l-6 2-6-2-6 2V6Z" />
      <path d="M9 4v16M15 6v16" />
    </svg>
  );
}

export function IconWindow({ className = "h-6 w-6", strokeWidth }: IconProps) {
  // "janela temporal" — frame com seta retornando dentro
  return (
    <svg viewBox="0 0 24 24" className={className} {...base(strokeWidth)} aria-hidden>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M3 9h18" />
      <path d="M15 14a3 3 0 1 0-3 3" />
      <path d="m13 13-1 4-3-1" />
    </svg>
  );
}

export function IconWhatsApp({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 0 1 8.413 3.488 11.82 11.82 0 0 1 3.48 8.414c-.003 6.554-5.338 11.89-11.893 11.89a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 0 0 1.51 5.26l.241.383-1 3.652 3.738-.994zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.296-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z" />
    </svg>
  );
}

export function IconLinkedIn({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43A2.06 2.06 0 1 1 5.34 3.3a2.06 2.06 0 0 1 0 4.12zM3.56 20.45h3.55V9H3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.99 0 1.78-.77 1.78-1.72V1.72C24 .77 23.21 0 22.22 0z" />
    </svg>
  );
}

export function IconInstagram({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base(1.6)} aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.7" fill="currentColor" />
    </svg>
  );
}

export function IconYouTube({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M23.5 7s-.2-1.6-1-2.3c-.9-.9-1.9-.9-2.4-1C16.7 3.5 12 3.5 12 3.5s-4.7 0-8.1.2c-.5.1-1.5.1-2.4 1-.7.7-1 2.3-1 2.3S.3 8.9.3 10.8v1.8c0 1.9.2 3.8.2 3.8s.2 1.6 1 2.3c.9.9 2.1.9 2.6 1 1.9.2 8 .2 8 .2s4.7 0 8.1-.2c.5-.1 1.5-.1 2.4-1 .7-.7 1-2.3 1-2.3s.2-1.9.2-3.8v-1.8c-.1-1.9-.3-3.8-.3-3.8zM9.5 14.6V8.4l6.2 3.1-6.2 3.1z" />
    </svg>
  );
}
