import Section, { SectionHeader } from "@/components/ui/Section";
import Stepper, { Step } from "@/components/ui/Stepper";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import {
  IconClipboard,
  IconSatellite,
  IconPhone,
  IconAlert,
  IconShield,
  IconRefresh,
} from "@/components/illustrations/Icons";

const steps: Step[] = [
  {
    n: "01",
    icon: <IconClipboard className="h-6 w-6" />,
    title: "Cadastre sua carteira",
    body: (
      <>
        Adicione os produtores que você atende. O Campo Livre consulta o SICAR
        automaticamente para cada propriedade.
      </>
    ),
  },
  {
    n: "02",
    icon: <IconSatellite className="h-6 w-6" />,
    title: "Monitoramento automático",
    body: (
      <>
        Todo mês, a plataforma verifica o status do CAR de cada propriedade e
        cruza com alertas de satélite PRODES.
      </>
    ),
  },
  {
    n: "03",
    icon: <IconPhone className="h-6 w-6" />,
    title: "Alerta no WhatsApp",
    body: (
      <>
        Você recebe um resumo direto no celular: quem está ok, quem precisa de
        atenção, e o que fazer.
      </>
    ),
  },
  {
    n: "04",
    icon: <IconAlert className="h-6 w-6" />,
    title: "Você age antes",
    body: (
      <>
        Liga para o produtor antes do problema virar crise. Orienta a
        regularização. Chega na reunião com o banco preparado.
      </>
    ),
  },
  {
    n: "05",
    icon: <IconShield className="h-6 w-6" />,
    title: "Crédito liberado",
    body: (
      <>
        Produtor resolve o CAR antes de precisar do crédito. Você vira o
        profissional que nunca deixa nada escapar.
      </>
    ),
  },
  {
    n: "06",
    icon: <IconRefresh className="h-6 w-6" />,
    title: "Ciclo contínuo",
    body: (
      <>
        Repete todo mês. Histórico acumulado de toda a carteira. Quanto mais
        tempo usa, mais valor gera.
      </>
    ),
    highlight: true,
  },
];

export default function ComoFuncionaPreview() {
  return (
    <Section id="como-funciona" tone="areia">
      <SectionHeader
        tag="Como funciona"
        title={
          <>
            Monitoramento proativo.{" "}
            <span className="italic text-verde">Sem precisar de nada.</span>
          </>
        }
        lead={
          <>
            Todo dia 1 do mês, o Campo Livre verifica automaticamente o CAR de
            toda a sua carteira e envia um resumo no WhatsApp. Você não precisa
            entrar em nenhum sistema, não precisa se lembrar de verificar.
          </>
        }
      />
      <div className="mt-12">
        <Reveal stagger>
          <Stepper steps={steps} />
        </Reveal>
      </div>
      <div className="mt-12 flex justify-center">
        <Button href="/como-funciona" variant="outline">
          Ver fluxo detalhado
        </Button>
      </div>
    </Section>
  );
}
