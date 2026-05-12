import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import Section from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description:
    "Como o Campo Livre coleta, trata e protege seus dados pessoais e os dados dos produtores rurais sob monitoramento.",
};

export default function PrivacidadePage() {
  return (
    <PageShell>
      <Section tone="branco" className="!py-0">
        <div className="pt-32 md:pt-40 pb-12 max-w-3xl">
          <span className="label-mono text-verde">Legal</span>
          <h1
            className="font-display font-black tracking-tight mt-4"
            style={{ fontSize: "clamp(36px, 4.5vw, 56px)", lineHeight: 1.05 }}
          >
            Política de Privacidade
          </h1>
          <div className="mt-6 rounded-xl border border-alerta-amarelo/30 bg-alerta-vermelhoBg/40 px-5 py-4 text-sm text-alerta-amarelo">
            <strong>RASCUNHO — pendente de revisão jurídica antes da publicação.</strong>
            <br />
            Última atualização: a definir.
          </div>
        </div>
      </Section>

      <Section tone="branco" className="!pt-0">
        <article className="max-w-3xl space-y-10 text-[16px] leading-[1.75] text-texto/85">
          <section>
            <h2 className="font-display font-bold text-2xl text-preto">
              1. Controlador
            </h2>
            <p className="mt-3">
              Campo Livre — endereço fiscal em Maringá-PR. CNPJ a confirmar.
              Encarregado de Dados (DPO): a definir · contato@campolivre.agr.br.
            </p>
          </section>

          <section>
            <h2 className="font-display font-bold text-2xl text-preto">
              2. Dados coletados
            </h2>
            <p className="mt-3">
              <strong>Do contratante:</strong> nome, CREA, telefone, e-mail,
              dados de pagamento.
            </p>
            <p className="mt-2">
              <strong>De terceiros (produtores monitorados):</strong> CPF/CNPJ,
              nome da propriedade e status público do CAR no SICAR.
            </p>
          </section>

          <section>
            <h2 className="font-display font-bold text-2xl text-preto">
              3. Finalidades
            </h2>
            <p className="mt-3">
              Prestação do serviço de monitoramento, geração de relatórios e
              comunicação operacional.
            </p>
          </section>

          <section>
            <h2 className="font-display font-bold text-2xl text-preto">
              4. Base legal
            </h2>
            <p className="mt-3">
              Execução de contrato (LGPD Art. 7º, V) e legítimo interesse
              (LGPD Art. 7º, IX).
            </p>
          </section>

          <section>
            <h2 className="font-display font-bold text-2xl text-preto">
              5. Compartilhamento
            </h2>
            <p className="mt-3">
              Nunca compartilhamos com terceiros, exceto por exigência legal.
            </p>
          </section>

          <section>
            <h2 className="font-display font-bold text-2xl text-preto">
              6. Armazenamento
            </h2>
            <p className="mt-3">
              Banco Supabase em servidores no Brasil. Retenção pelo período do
              contrato + 5 anos para fins fiscais.
            </p>
          </section>

          <section>
            <h2 className="font-display font-bold text-2xl text-preto">
              7. Direitos do titular
            </h2>
            <p className="mt-3">
              Acesso, retificação, exclusão, portabilidade. Canal:{" "}
              <a
                href="mailto:contato@campolivre.agr.br"
                className="text-verde underline"
              >
                contato@campolivre.agr.br
              </a>
              .
            </p>
          </section>
        </article>
      </Section>
    </PageShell>
  );
}
