"use client";

import { useState } from "react";
import PageShell from "@/components/PageShell";
import Section, { SectionHeader } from "@/components/ui/Section";
import Accordion from "@/components/ui/Accordion";
import { IconWhatsApp } from "@/components/illustrations/Icons";

export default function ContatoPage() {
  const [sent, setSent] = useState(false);

  return (
    <PageShell>
      <Section tone="branco" className="!py-0">
        <div className="pt-32 md:pt-40 pb-12 text-balance max-w-3xl">
          <span className="label-mono text-verde">Contato</span>
          <h1
            className="font-display font-black tracking-tight mt-4"
            style={{ fontSize: "clamp(40px, 5.5vw, 72px)", lineHeight: 1.04 }}
          >
            Falar com a <em className="not-italic italic text-verde">gente</em>
          </h1>
          <p className="mt-7 text-[19px] text-texto/80 leading-[1.65] max-w-2xl">
            Sem chatbot, sem URA, sem "assistente virtual". Você fala direto
            com o Lucas ou alguém do time.
          </p>
        </div>
      </Section>

      {/* Canais + Form */}
      <Section tone="areia">
        <div className="grid lg:grid-cols-12 gap-10">
          {/* Canais */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl border border-areia-escura bg-white p-7">
              <div className="flex items-center gap-3 text-verde">
                <IconWhatsApp className="h-5 w-5" />
                <span className="font-mono text-[11px] tracking-mono uppercase">
                  WhatsApp
                </span>
              </div>
              <div className="mt-3 font-display font-bold text-2xl text-preto">
                +55 44 9XXXX-XXXX
              </div>
              <p className="mt-2 text-sm text-texto/75">
                Resposta em horário comercial (8h-18h, seg-sex). Em geral até
                2 horas.
              </p>
              <a
                href="https://wa.me/5544999981038"
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex items-center gap-2 rounded-lg bg-verde text-white font-medium px-5 py-2.5 text-sm hover:bg-verde-escuro transition-all shadow-cta"
              >
                <IconWhatsApp className="h-4 w-4" />
                Abrir WhatsApp
              </a>
            </div>

            <div className="rounded-2xl border border-areia-escura bg-white p-7">
              <div className="font-mono text-[11px] tracking-mono uppercase text-verde">
                E-mail
              </div>
              <a
                href="mailto:contato@campolivre.agr.br"
                className="mt-3 inline-block font-display font-bold text-xl text-preto hover:text-verde transition-colors"
              >
                contato@campolivre.agr.br
              </a>
              <p className="mt-2 text-sm text-texto/75">
                Para questões formais, contratos, nota fiscal.
              </p>
            </div>

            <div className="rounded-2xl border border-areia-escura bg-white p-7">
              <div className="font-mono text-[11px] tracking-mono uppercase text-verde">
                Endereço fiscal
              </div>
              <div className="mt-3 font-display font-bold text-xl text-preto">
                Maringá — Paraná
              </div>
              <p className="mt-2 text-sm text-texto/75">
                Não atendemos presencialmente — somos um time remoto.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-areia-escura bg-white p-7 md:p-10">
              <h2 className="font-display font-bold text-2xl text-preto">
                Prefere escrever?
              </h2>
              <p className="mt-2 text-[15px] text-texto/75">
                Responde em até 2 horas em dia útil.
              </p>
              {sent ? (
                <div className="mt-8 rounded-xl bg-verde-palido border border-verde/30 px-6 py-8 text-center">
                  <div className="font-display font-bold text-xl text-verde-escuro">
                    Mensagem recebida.
                  </div>
                  <p className="mt-2 text-texto/80">
                    A gente responde no seu WhatsApp em até 2 horas.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSent(true);
                  }}
                  className="mt-7 space-y-4"
                >
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Field label="Nome" name="nome" required />
                    <Field label="CREA (opcional)" name="crea" />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Field
                      label="Cidade / UF"
                      name="cidade"
                      required
                      placeholder="Maringá / PR"
                    />
                    <Field
                      label="WhatsApp"
                      name="whatsapp"
                      type="tel"
                      required
                      placeholder="(44) 99999-9999"
                    />
                  </div>
                  <Field
                    label="E-mail (opcional)"
                    name="email"
                    type="email"
                  />
                  <div>
                    <label className="font-mono text-[11px] tracking-mono uppercase text-cinza">
                      Sobre o que quer falar
                    </label>
                    <select
                      required
                      className="mt-1.5 w-full rounded-lg border border-areia-escura bg-white px-4 py-3 text-[15px] text-texto focus:border-verde focus:ring-1 focus:ring-verde outline-none transition"
                    >
                      <option>Quero testar o Campo Livre</option>
                      <option>Tenho um caso específico de retificação</option>
                      <option>Dúvida técnica sobre como funciona</option>
                      <option>Parceria ou indicação</option>
                      <option>Outro</option>
                    </select>
                  </div>
                  <div>
                    <label className="font-mono text-[11px] tracking-mono uppercase text-cinza">
                      Mensagem (opcional)
                    </label>
                    <textarea
                      rows={4}
                      className="mt-1.5 w-full rounded-lg border border-areia-escura bg-white px-4 py-3 text-[15px] text-texto focus:border-verde focus:ring-1 focus:ring-verde outline-none transition resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-verde text-white font-medium px-6 py-3.5 hover:bg-verde-escuro transition-all shadow-cta"
                  >
                    Enviar mensagem →
                  </button>
                  <p className="text-xs text-texto/55">
                    Ao enviar, você concorda com nossa Política de Privacidade.
                    Nunca compartilhamos seu contato com terceiros.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section id="faq" tone="branco">
        <SectionHeader tag="FAQ" title="Perguntas comuns" />
        <div className="mt-10 max-w-3xl">
          <Accordion
            items={[
              {
                q: "O Campo Livre é seguro? Como vocês tratam os dados dos produtores?",
                a: (
                  <>
                    Os dados do CAR são públicos — qualquer pessoa pode
                    consultar no SICAR. O Campo Livre só acessa o que já é
                    público, e armazena o histórico de cada propriedade no
                    nosso banco (Supabase, hospedado no Brasil) com
                    criptografia em trânsito e em repouso. Nunca
                    compartilhamos com terceiros.
                  </>
                ),
              },
              {
                q: "Eu sou agrônomo CLT de cooperativa/revenda. Funciona pra mim?",
                a: (
                  <>
                    Funciona, mas você vai precisar avaliar com seu empregador
                    se a cooperativa/revenda paga ou se você assina como
                    pessoa física. O produto não muda — o relatório mensal
                    continua chegando no seu WhatsApp pessoal.
                  </>
                ),
              },
              {
                q: "Vocês atendem outros estados além do PR?",
                a: (
                  <>
                    Sim. O Campo Livre funciona em qualquer estado do Brasil,
                    porque o SICAR é federal. Hoje a maioria dos nossos
                    primeiros clientes está no PR, SC e MS, mas o produto não
                    tem restrição geográfica.
                  </>
                ),
              },
              {
                q: "Vocês também atendem produtor rural direto, sem agrônomo no meio?",
                a: (
                  <>
                    Não. O produto é desenhado para o profissional que atende
                    vários produtores. Se você é produtor e quer monitorar
                    sua própria propriedade, peça para o seu agrônomo
                    conhecer o Campo Livre.
                  </>
                ),
              },
              {
                q: "E se eu tiver um caso complicado de retificação?",
                a: (
                  <>
                    Sim, com técnico habilitado da nossa rede. Cobramos o
                    plano Retificação (R$ 800 a R$ 4.000) e coordenamos com
                    engenheiro florestal ou agrônomo com ART. Acompanhamos
                    até o status no SICAR voltar a "ativo".
                  </>
                ),
              },
              {
                q: "E se o Congresso derrubar as Resoluções CMN 5.193 e 5.268?",
                a: (
                  <>
                    O CAR continua obrigatório por lei. O{" "}
                    <strong>art. 78-A da Lei 12.651/2012</strong> (Código
                    Florestal) determina, desde 31/12/2017, que instituições
                    financeiras só concedem crédito agrícola para imóveis
                    inscritos no CAR. Isso é lei ordinária federal, não
                    resolução do CMN. Mesmo se os PDLs em tramitação
                    (178/2026 e 176/2026) forem aprovados, derrubam apenas a
                    fiscalização automática via PRODES — a obrigatoriedade
                    do CAR ativo permanece. O Campo Livre monitora o CAR,
                    então o produto segue útil em qualquer cenário.
                  </>
                ),
              },
              {
                q: "Qual a posição do Banco Central sobre essas regras?",
                a: (
                  <>
                    Mantida. Em dezembro de 2025, o Banco Central editou a
                    Resolução CMN 5.268 não para revogar a fiscalização, mas
                    para adiar o cronograma (passou de 02/01/2026 para
                    01/04/2026 para imóveis acima de 4 módulos fiscais). É
                    calibração, não recuo. A CNA ajuizou uma ADPF no STF em
                    15/04/2026 buscando suspensão cautelar — o cenário mais
                    provável é de calibração jurisprudencial (notificação
                    prévia ao produtor), não derrubada.
                  </>
                ),
              },
              {
                q: "Como vocês acessam o CAR dos meus clientes legalmente?",
                a: (
                  <>
                    Pelo mecanismo oficial de Representante Técnico do SICAR.
                    O produtor entra em <code>car.gov.br</code>, vai em
                    "Gerenciar Vínculos" e te vincula como representante. É o
                    fluxo regulamentado pelo governo.
                  </>
                ),
              },
              {
                q: "Qual o tamanho da equipe do Campo Livre?",
                a: (
                  <>
                    Pequena e enxuta — começou solo com o Lucas. À medida que
                    crescemos, expandimos com cuidado. Não acreditamos em
                    time inflado para parecer maior.
                  </>
                ),
              },
            ]}
          />
        </div>
      </Section>
    </PageShell>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="font-mono text-[11px] tracking-mono uppercase text-cinza"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-1.5 w-full rounded-lg border border-areia-escura bg-white px-4 py-3 text-[15px] text-texto placeholder:text-cinza/60 focus:border-verde focus:ring-1 focus:ring-verde outline-none transition"
      />
    </div>
  );
}
