import Link from "next/link";
import {
  IconLinkedIn,
  IconInstagram,
  IconYouTube,
  IconWhatsApp,
} from "@/components/illustrations/Icons";

export default function Footer() {
  return (
    <footer className="relative bg-preto text-white/55 mt-20">
      <div className="max-w-container mx-auto px-6 lg:px-[60px] py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Coluna 1 — Sobre */}
          <div>
            <div className="font-display font-bold text-verde-claro text-xl">
              Campo Livre
              <span className="ml-1.5 inline-block h-1.5 w-1.5 rounded-full bg-verde-claro align-middle animate-pulseDot" />
            </div>
            <p className="mt-4 text-sm text-white/60 leading-relaxed max-w-xs">
              O sistema de alarme do agrônomo. Monitoramento mensal automático
              do CAR de toda a carteira.
            </p>
            <p className="mt-3 text-[11px] text-white/40 leading-relaxed max-w-xs">
              Obrigatoriedade do CAR ancorada em lei ordinária federal{" "}
              <span className="whitespace-nowrap">
                (art. 78-A da Lei 12.651/2012)
              </span>
              .
            </p>
            <div className="mt-5 text-xs text-white/45 leading-relaxed">
              Maringá — Paraná, Brasil
              <br />
              CNPJ: XX.XXX.XXX/0001-XX
            </div>
          </div>

          {/* Coluna 2 — Produto */}
          <div>
            <h4 className="text-white/85 font-medium text-sm">Produto</h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              {[
                { href: "/como-funciona", label: "Como funciona" },
                { href: "/produtos", label: "Planos" },
                { href: "/recursos", label: "Recursos" },
                { href: "/contato#faq", label: "FAQ" },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="hover:text-verde-claro transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 3 — Empresa */}
          <div>
            <h4 className="text-white/85 font-medium text-sm">Empresa</h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link href="/sobre" className="hover:text-verde-claro transition-colors">
                  Sobre
                </Link>
              </li>
              <li>
                <Link href="/contato" className="hover:text-verde-claro transition-colors">
                  Contato
                </Link>
              </li>
              <li>
                <Link href="/contato" className="hover:text-verde-claro transition-colors">
                  Parcerias
                </Link>
              </li>
              <li>
                <a
                  href="mailto:trabalhe@campolivre.agr.br"
                  className="hover:text-verde-claro transition-colors"
                >
                  Trabalhe com a gente
                </a>
              </li>
            </ul>
          </div>

          {/* Coluna 4 — Fale */}
          <div>
            <h4 className="text-white/85 font-medium text-sm">Fale com a gente</h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a
                  href="https://wa.me/5544999981038"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 hover:text-verde-claro transition-colors"
                >
                  <IconWhatsApp className="h-4 w-4" />
                  +55 44 9XXXX-XXXX
                </a>
              </li>
              <li>
                <a
                  href="mailto:contato@campolivre.agr.br"
                  className="hover:text-verde-claro transition-colors"
                >
                  contato@campolivre.agr.br
                </a>
              </li>
              <li>
                <Link
                  href="/privacidade"
                  className="hover:text-verde-claro transition-colors"
                >
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link
                  href="/termos"
                  className="hover:text-verde-claro transition-colors"
                >
                  Termos de Uso
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="text-xs text-white/45">
            © 2026 Campo Livre — Todos os direitos reservados
          </div>
          <div className="flex items-center gap-4 text-white/60">
            <a
              href="https://linkedin.com/company/campo-livre"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="hover:text-verde-claro transition-colors"
            >
              <IconLinkedIn />
            </a>
            <a
              href="https://instagram.com/campolivre.agr"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="hover:text-verde-claro transition-colors"
            >
              <IconInstagram />
            </a>
            <a
              href="https://youtube.com/@campolivre"
              target="_blank"
              rel="noreferrer"
              aria-label="YouTube"
              className="hover:text-verde-claro transition-colors"
            >
              <IconYouTube />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
