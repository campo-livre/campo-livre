import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import Section from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Termos de Uso",
  description:
    "Condições de uso da plataforma Campo Livre, direitos e deveres do agrônomo contratante.",
};

export default function TermosPage() {
  return (
    <PageShell>
      <Section tone="branco" className="!py-0">
        <div className="pt-32 md:pt-40 pb-12 max-w-3xl">
          <span className="label-mono text-verde">Legal</span>
          <h1
            className="font-display font-black tracking-tight mt-4"
            style={{ fontSize: "clamp(36px, 4.5vw, 56px)", lineHeight: 1.05 }}
          >
            Termos de Uso
          </h1>
          <div className="mt-6 rounded-xl border border-alerta-amarelo/30 bg-alerta-vermelhoBg/40 px-5 py-4 text-sm text-alerta-amarelo">
            <strong>RASCUNHO — pendente de revisão jurídica antes da publicação.</strong>
          </div>
        </div>
      </Section>

      <Section tone="branco" className="!pt-0">
        <article className="max-w-3xl space-y-10 text-[16px] leading-[1.75] text-texto/85">
          {[
            {
              t: "1. Objeto",
              c: "Serviço de monitoramento mensal do CAR de propriedades indicadas pelo contratante.",
            },
            {
              t: "2. Quem pode contratar",
              c: "Agrônomo com CREA ativo, ou pessoa jurídica de consultoria agronômica.",
            },
            {
              t: "3. Obrigações do Campo Livre",
              c: "Realizar a varredura mensal; entregar o relatório; manter histórico.",
            },
            {
              t: "4. Obrigações do contratante",
              c: "Indicar corretamente as propriedades; obter o vínculo de Representante Técnico; informar dados verdadeiros.",
            },
            {
              t: "5. O que o Campo Livre não faz",
              c: "Não substitui responsabilidade técnica do agrônomo; não emite ART; não garante aprovação de crédito; não realiza retificação técnica do CAR (serviço separado, via plano Retificação).",
            },
            {
              t: "6. Pagamento",
              c: "Mensal, débito automático ou Pix.",
            },
            {
              t: "7. Cancelamento",
              c: "A qualquer tempo, sem multa, com efeito no fim do ciclo pago.",
            },
            {
              t: "8. Limitação de responsabilidade",
              c: "O Campo Livre não responde por bloqueio de crédito ocorrido apesar do aviso, por erro nos dados públicos do SICAR/PRODES, ou por decisão soberana de instituição financeira.",
            },
            {
              t: "9. Foro",
              c: "Maringá — PR.",
            },
          ].map((s) => (
            <section key={s.t}>
              <h2 className="font-display font-bold text-2xl text-preto">
                {s.t}
              </h2>
              <p className="mt-3">{s.c}</p>
            </section>
          ))}
        </article>
      </Section>
    </PageShell>
  );
}
