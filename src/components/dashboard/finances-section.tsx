import Card from "@/components/ui/card";
import Badge from "@/components/ui/badge";
import { financeEntries } from "@/data/school";

const FinancesSection = () => {
  const grouped = financeEntries.reduce<Record<string, typeof financeEntries>>(
    (acc, entry) => {
      acc[entry.period] = acc[entry.period] ?? [];
      acc[entry.period].push(entry);
      return acc;
    },
    {}
  );

  const periods = Object.keys(grouped).sort();

  const formatCurrency = (value: number) =>
    value.toLocaleString("fr-BE", {
      style: "currency",
      currency: "EUR"
    });

  return (
    <Card
      title="Gestion financière"
      description="Suivi budgétaire par période : recettes, dépenses et statuts."
    >
      <div className="space-y-6">
        {periods.map((period) => {
          const entries = grouped[period];
          const totalIncome = entries
            .filter((entry) => entry.type === "recette")
            .reduce((acc, entry) => acc + entry.amount, 0);
          const totalExpense = entries
            .filter((entry) => entry.type === "dépense")
            .reduce((acc, entry) => acc + entry.amount, 0);
          const net = totalIncome - totalExpense;

          return (
            <div
              key={period}
              className="rounded-2xl border border-slate-200 p-5 dark:border-slate-700"
            >
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                    {period}
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    {entries.length} mouvements enregistrés
                  </p>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Badge tone="success">{formatCurrency(totalIncome)}</Badge>
                  <Badge tone="danger">-{formatCurrency(totalExpense)}</Badge>
                  <Badge tone={net >= 0 ? "success" : "danger"}>
                    Net: {formatCurrency(net)}
                  </Badge>
                </div>
              </div>
              <div className="mt-4 overflow-x-auto">
                <table className="min-w-full divide-y divide-slate-200 text-sm dark:divide-slate-800">
                  <thead className="bg-slate-50 dark:bg-slate-900/30">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                        Mouvement
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                        Catégorie
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                        Montant
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                        Statut
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                    {entries.map((entry) => (
                      <tr
                        key={entry.id}
                        className="hover:bg-slate-50 dark:hover:bg-slate-900/40"
                      >
                        <td className="px-4 py-3 text-slate-700 dark:text-slate-200">
                          {entry.label}
                        </td>
                        <td className="px-4 py-3 text-slate-500 dark:text-slate-400">
                          {entry.category}
                        </td>
                        <td className="px-4 py-3 text-slate-700 dark:text-slate-200">
                          {entry.type === "dépense" ? "-" : ""}
                          {formatCurrency(entry.amount)}
                        </td>
                        <td className="px-4 py-3 text-slate-500 dark:text-slate-400">
                          <Badge
                            tone={
                              entry.status === "payé"
                                ? "success"
                                : entry.status === "prévu"
                                ? "warning"
                                : "info"
                            }
                            className="capitalize"
                          >
                            {entry.status}
                          </Badge>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
};

export default FinancesSection;
