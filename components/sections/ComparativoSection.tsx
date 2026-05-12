import Section, { SectionHeader } from "@/components/ui/Section";
import ComparisonTable from "@/components/ui/ComparisonTable";
import Reveal from "@/components/ui/Reveal";

export default function ComparativoSection() {
  return (
    <Section tone="branco">
      <SectionHeader
        tag="Comparativo"
        title={
          <>
            Por que não a{" "}
            <span className="text-verde italic">
              Brian/Serasa ou a Agrotools?
            </span>
          </>
        }
        lead={
          <>
            Brian/Serasa faz verificação reativa — quando o cliente já chegou
            com problema. Agrotools atende banco e trading. Nenhuma das duas
            tem produto empacotado para o agrônomo autônomo. Campo Livre é o
            único monitoramento proativo de carteira inteira, todo mês, a
            preço de assinatura individual.
          </>
        }
      />
      <Reveal>
        <div className="mt-14 rounded-2xl border border-areia-escura bg-white p-6 md:p-8 shadow-soft">
          <ComparisonTable
            columns={[
              { name: "Brian / Serasa" },
              { name: "Planilha manual" },
              { name: "Campo Livre", highlight: true },
              { name: "Agrotools" },
            ]}
            rows={[
              {
                feature: "Monitoramento mensal automático",
                cells: [
                  "Só sob consulta",
                  "Depende de lembrar",
                  "yes",
                  "API por consulta",
                ],
              },
              {
                feature: "Alerta no WhatsApp sem login",
                cells: ["no", "no", "yes", "no"],
              },
              {
                feature: "Gestão de carteira completa",
                cells: [
                  "partial",
                  "partial",
                  "yes",
                  "Foco em bancos",
                ],
              },
              {
                feature: "Acessível para autônomo",
                cells: [
                  "Contrato corporativo",
                  "Grátis (sem valor)",
                  "R$ 197/mês",
                  "Contrato corporativo",
                ],
              },
            ]}
          />
        </div>
      </Reveal>
    </Section>
  );
}
