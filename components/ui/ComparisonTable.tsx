import { IconCheck, IconX } from "@/components/illustrations/Icons";

export type Cell = "yes" | "no" | "partial" | string;

export type ComparisonColumn = {
  name: string;
  highlight?: boolean;
};

export type ComparisonRow = {
  feature: string;
  cells: Cell[]; // aligned with columns order
};

function Mark({ cell, highlight }: { cell: Cell; highlight?: boolean }) {
  if (cell === "yes") {
    return (
      <span className="inline-flex items-center gap-2 text-verde">
        <IconCheck className="h-4 w-4" strokeWidth={2.2} />
        <span className={`text-sm ${highlight ? "text-verde-escuro font-medium" : ""}`}>Sim</span>
      </span>
    );
  }
  if (cell === "no") {
    return (
      <span className="inline-flex items-center gap-2 text-cinza">
        <IconX className="h-4 w-4" strokeWidth={2} />
        <span className="text-sm">Não</span>
      </span>
    );
  }
  if (cell === "partial") {
    return (
      <span className="inline-flex items-center gap-2 text-cinza">
        <span className="text-base">~</span>
        <span className="text-sm">Parcial</span>
      </span>
    );
  }
  return (
    <span
      className={`text-sm ${highlight ? "text-verde-escuro font-medium" : "text-texto"}`}
    >
      {cell}
    </span>
  );
}

export default function ComparisonTable({
  columns,
  rows,
}: {
  columns: ComparisonColumn[];
  rows: ComparisonRow[];
}) {
  return (
    <div className="overflow-x-auto -mx-6 lg:mx-0">
      <table className="min-w-[800px] w-full border-separate border-spacing-0 mx-6 lg:mx-0">
        <thead>
          <tr>
            <th className="text-left py-4 pr-4 font-mono text-[11px] tracking-mono uppercase text-cinza border-b border-areia-escura align-bottom">
              Recurso
            </th>
            {columns.map((c) => (
              <th
                key={c.name}
                className={`text-left p-4 align-bottom border-b ${
                  c.highlight
                    ? "bg-verde-palido border-verde rounded-t-xl"
                    : "border-areia-escura"
                }`}
              >
                <div
                  className={`font-display font-bold text-base ${
                    c.highlight ? "text-verde-escuro" : "text-preto"
                  }`}
                >
                  {c.name}
                </div>
                {c.highlight && (
                  <div className="mt-1 font-mono text-[10px] tracking-mono uppercase text-verde">
                    Campo Livre
                  </div>
                )}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={r.feature}>
              <td className="py-4 pr-4 text-sm text-texto border-b border-areia-escura">
                {r.feature}
              </td>
              {r.cells.map((c, j) => (
                <td
                  key={j}
                  className={`p-4 border-b ${
                    columns[j].highlight
                      ? "bg-verde-palido/60 border-verde/30"
                      : "border-areia-escura"
                  }`}
                >
                  <Mark cell={c} highlight={columns[j].highlight} />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
