export default function WhatsAppMockup() {
  return (
    <div className="relative mx-auto w-full max-w-[340px] select-none">
      <div className="relative rounded-[2.5rem] border border-areia-escura bg-white shadow-soft overflow-hidden">
        {/* Notch */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 h-5 w-24 rounded-full bg-preto z-20" />

        {/* Status bar */}
        <div className="px-6 pt-3 pb-2 flex items-center justify-between text-[10px] text-cinza font-mono">
          <span>09:14</span>
          <span className="flex items-center gap-1">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-verde-claro" />
            5G
            <span className="ml-1">▮▮▮</span>
          </span>
        </div>

        {/* Header */}
        <div className="px-3 py-2 bg-verde flex items-center gap-2 text-white">
          <span className="text-xs opacity-80">←</span>
          <div className="relative h-8 w-8 rounded-full bg-verde-palido flex items-center justify-center text-verde font-bold text-sm">
            CL
            <span className="absolute -bottom-0.5 -right-0.5 inline-flex h-2.5 w-2.5 rounded-full bg-verde-claro ring-2 ring-verde" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-sm font-medium truncate">Campo Livre</div>
            <div className="text-[10px] opacity-70">online</div>
          </div>
          <div className="flex items-center gap-3 opacity-80 text-xs">
            <span>📞</span>
            <span>⋮</span>
          </div>
        </div>

        {/* Chat body */}
        <div
          className="px-3 py-4 space-y-2 min-h-[420px] bg-areia"
          style={{
            backgroundImage:
              "radial-gradient(rgba(26,107,60,0.06) 1px, transparent 1px)",
            backgroundSize: "16px 16px",
          }}
        >
          <div className="flex justify-center">
            <span className="text-[10px] px-3 py-1 rounded-full bg-white text-cinza border border-areia-escura">
              Hoje · 1º de junho
            </span>
          </div>

          {/* Incoming — relatório */}
          <div className="flex">
            <div className="max-w-[88%] rounded-2xl rounded-tl-md bg-white border border-areia-escura px-3 py-2.5 text-[13px] leading-snug shadow-sm">
              <div className="font-display font-bold text-verde">
                Relatório CAR · Maio/26
              </div>
              <div className="mt-1.5 text-texto">
                Olá, <b>Leonardo</b>. Sua varredura mensal:
              </div>
              <div className="mt-2 rounded-lg bg-verde-palido p-2.5 text-[12px]">
                <div className="flex items-baseline justify-between">
                  <span className="text-cinza">Monitorados</span>
                  <span className="font-mono text-texto">38 produtores</span>
                </div>
                <div className="mt-1 flex items-baseline justify-between">
                  <span className="text-cinza">Em ordem</span>
                  <span className="font-mono text-verde">35 ok</span>
                </div>
                <div className="mt-1 flex items-baseline justify-between">
                  <span className="text-cinza">Em atenção</span>
                  <span className="font-mono text-alerta-amarelo">3 ▲</span>
                </div>
              </div>
              <div className="mt-2 text-[10px] text-cinza">09:14 ✓✓</div>
            </div>
          </div>

          {/* Alert bubble */}
          <div className="flex">
            <div className="max-w-[88%] rounded-2xl rounded-tl-md bg-white border border-alerta-amarelo/40 px-3 py-2.5 text-[13px] leading-snug shadow-sm">
              <div className="flex items-center gap-2 text-alerta-amarelo font-medium">
                <span className="inline-flex h-2 w-2 rounded-full bg-alerta-amarelo animate-pulseDot" />
                Atenção · 3 produtores
              </div>
              <ul className="mt-2 space-y-1.5 text-texto">
                <li className="flex items-baseline gap-2">
                  <span className="font-mono text-alerta-amarelo text-[11px]">
                    ▸
                  </span>
                  <span>
                    <b>Faz. Primavera</b> · RL 19,69% (mín. 20%)
                  </span>
                </li>
                <li className="flex items-baseline gap-2">
                  <span className="font-mono text-alerta-amarelo text-[11px]">
                    ▸
                  </span>
                  <span>
                    <b>Sítio Boa Vista</b> · alerta PRODES
                  </span>
                </li>
                <li className="flex items-baseline gap-2">
                  <span className="font-mono text-alerta-amarelo text-[11px]">
                    ▸
                  </span>
                  <span>
                    <b>Faz. Três Irmãos</b> · CAR não validado
                  </span>
                </li>
              </ul>
              <div className="mt-2 text-[10px] text-cinza">09:14 ✓✓</div>
            </div>
          </div>

          {/* Sent bubble */}
          <div className="flex justify-end">
            <div className="max-w-[80%] rounded-2xl rounded-tr-md bg-verde-palido border border-verde/20 px-3 py-2 text-[13px] leading-snug text-texto">
              Recebido. Ligo pra Dona Neusa hoje.
              <div className="mt-1 text-[10px] text-cinza text-right">
                09:18 ✓✓
              </div>
            </div>
          </div>

          {/* CTA bubble */}
          <div className="flex">
            <div className="max-w-[88%] rounded-2xl rounded-tl-md bg-white border border-areia-escura px-3 py-2.5 text-[13px] leading-snug shadow-sm">
              Quer ver o dossiê completo?
              <div className="mt-2 rounded-md bg-verde text-white font-medium text-center px-3 py-2 cursor-pointer hover:bg-verde-escuro transition">
                Abrir painel →
              </div>
              <div className="mt-2 text-[10px] text-cinza">09:18 ✓✓</div>
            </div>
          </div>
        </div>

        {/* Input bar */}
        <div className="px-3 py-2.5 bg-white border-t border-areia-escura flex items-center gap-2">
          <div className="flex-1 rounded-full bg-areia px-4 py-2 text-[12px] text-cinza">
            Mensagem
          </div>
          <div className="h-8 w-8 rounded-full bg-verde text-white flex items-center justify-center">
            ➤
          </div>
        </div>
      </div>
    </div>
  );
}
