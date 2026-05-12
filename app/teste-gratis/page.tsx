"use client";

import { useState } from "react";
import PageShell from "@/components/PageShell";
import Section from "@/components/ui/Section";
import { IconCheck } from "@/components/illustrations/Icons";

export default function TesteGratisPage() {
  const [submitted, setSubmitted] = useState(false);
  const [consent, setConsent] = useState(false);

  return (
    <PageShell>
      <Section tone="areia" className="!py-0">
        <div className="pt-32 md:pt-40 pb-20 grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-7">
            <span className="label-mono text-verde">Teste grátis 30 dias</span>
            <h1
              className="font-display font-black tracking-tight mt-4 text-balance"
              style={{
                fontSize: "clamp(36px, 5vw, 64px)",
                lineHeight: 1.05,
              }}
            >
              No dia 1 do próximo mês, você já recebe o{" "}
              <em className="not-italic italic text-verde">
                primeiro relatório
              </em>
            </h1>
            <p className="mt-7 text-[18px] leading-[1.65] text-texto/80 max-w-xl">
              Cadastra sem cartão de crédito. Se gostar, escolhe um plano. Se
              não, simplesmente não escolhe — sem cobrança, sem ligação de
              retenção.
            </p>
            <ul className="mt-10 space-y-3 text-texto">
              {[
                "Cadastro em menos de 3 minutos",
                "Sem cartão de crédito",
                "Primeira varredura no dia 1 do mês seguinte",
                "Cancelamento por WhatsApp se não gostar",
              ].map((it) => (
                <li key={it} className="flex items-start gap-3">
                  <IconCheck className="h-5 w-5 mt-0.5 text-verde" strokeWidth={2} />
                  <span>{it}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-5 lg:sticky lg:top-28">
            {submitted ? (
              <div className="rounded-2xl border border-verde/30 bg-verde-palido p-8 text-center">
                <div className="text-3xl">🌾</div>
                <h2 className="mt-4 font-display font-bold text-2xl text-verde-escuro">
                  Cadastro recebido.
                </h2>
                <p className="mt-3 text-texto/80 leading-relaxed">
                  O Lucas vai te chamar no WhatsApp em até 2 horas pra
                  alinhar a carteira inicial. Seu primeiro relatório chega no
                  dia 1 do mês que vem.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="rounded-2xl border border-areia-escura bg-white p-7 md:p-8 shadow-soft"
              >
                <h2 className="font-display font-bold text-2xl text-preto">
                  Reservar minha vaga
                </h2>
                <div className="mt-6 space-y-4">
                  <Field label="Nome" required />
                  <Field label="CREA (opcional)" />
                  <Field
                    label="WhatsApp com DDD"
                    type="tel"
                    required
                    placeholder="(44) 99999-9999"
                  />
                  <Field label="Cidade / UF" required placeholder="Maringá / PR" />
                  <div>
                    <label className="font-mono text-[11px] tracking-mono uppercase text-cinza">
                      Tamanho aproximado da carteira
                    </label>
                    <select
                      required
                      className="mt-1.5 w-full rounded-lg border border-areia-escura bg-white px-4 py-3 text-[15px] focus:border-verde focus:ring-1 focus:ring-verde outline-none"
                    >
                      <option>até 20 produtores</option>
                      <option>21 a 50 produtores</option>
                      <option>51 a 100 produtores</option>
                      <option>acima de 100</option>
                    </select>
                  </div>
                </div>

                {/* Consentimento opt-in para uso de case (LGPD). NÃO marcado por padrão. */}
                <label
                  htmlFor="consent-case"
                  className={`mt-6 flex items-start gap-3 cursor-pointer rounded-lg border p-4 transition-colors ${
                    consent
                      ? "border-verde bg-verde-palido"
                      : "border-areia-escura bg-white hover:border-verde/40"
                  }`}
                >
                  <span className="relative mt-0.5 flex-shrink-0">
                    <input
                      id="consent-case"
                      type="checkbox"
                      name="consent_case"
                      checked={consent}
                      onChange={(e) => setConsent(e.target.checked)}
                      className="peer sr-only"
                    />
                    <span
                      className={`flex h-5 w-5 items-center justify-center rounded border-2 transition-all ${
                        consent
                          ? "border-verde bg-verde"
                          : "border-areia-escura bg-white"
                      }`}
                      aria-hidden
                    >
                      {consent && (
                        <IconCheck
                          className="h-3.5 w-3.5 text-white"
                          strokeWidth={3}
                        />
                      )}
                    </span>
                  </span>
                  <span className="text-[13px] text-texto/85 leading-relaxed">
                    Autorizo o Campo Livre a usar meu caso, com nome
                    anonimizado, como exemplo de marketing após a resolução
                    de qualquer pendência identificada.{" "}
                    <span className="text-texto/55">
                      (Posso revogar essa autorização a qualquer momento.)
                    </span>
                  </span>
                </label>

                <button
                  type="submit"
                  className="mt-5 w-full inline-flex items-center justify-center gap-2 rounded-lg bg-verde text-white font-medium px-6 py-3.5 hover:bg-verde-escuro transition-all shadow-cta"
                >
                  Garantir minha vaga →
                </button>
                <p className="mt-4 text-xs text-texto/55 text-center">
                  Sem cartão. Sem fidelidade. Sem cobrança nos primeiros 30 dias.
                </p>
              </form>
            )}
          </div>
        </div>
      </Section>
    </PageShell>
  );
}

function Field({
  label,
  type = "text",
  required = false,
  placeholder,
}: {
  label: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="font-mono text-[11px] tracking-mono uppercase text-cinza">
        {label}
      </label>
      <input
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-1.5 w-full rounded-lg border border-areia-escura bg-white px-4 py-3 text-[15px] focus:border-verde focus:ring-1 focus:ring-verde outline-none placeholder:text-cinza/60 transition"
      />
    </div>
  );
}
