import Card from "@/components/ui/card";
import Badge from "@/components/ui/badge";
import { staff, workSchedules } from "@/data/school";

type StaffSectionProps = {
  query: string;
};

const StaffSection = ({ query }: StaffSectionProps) => {
  const normalized = query.trim().toLowerCase();
  const filtered = normalized
    ? staff.filter((member) =>
        member.fullName.toLowerCase().includes(normalized)
      )
    : staff;

  const schedulesByStaff = workSchedules.reduce<Record<string, number>>(
    (acc, schedule) => {
      acc[schedule.staffId] = (acc[schedule.staffId] ?? 0) + 1;
      return acc;
    },
    {}
  );

  return (
    <Card
      title="Personnel de soutien"
      description="Répartition des équipes administratives, logistiques et parascolaires."
    >
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-slate-200 dark:divide-slate-800">
          <thead className="bg-slate-50 dark:bg-slate-900/30">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                Nom
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                Service
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                Contrat
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                Horaire
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                Plages planifiées
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
            {filtered.map((member) => (
              <tr key={member.id} className="hover:bg-slate-50 dark:hover:bg-slate-900/40">
                <td className="whitespace-nowrap px-4 py-3 text-sm font-medium text-slate-900 dark:text-slate-100">
                  {member.fullName}
                </td>
                <td className="whitespace-nowrap px-4 py-3 text-sm capitalize text-slate-600 dark:text-slate-300">
                  {member.department}
                </td>
                <td className="whitespace-nowrap px-4 py-3 text-sm">
                  <Badge tone="neutral">{member.contractType}</Badge>
                </td>
                <td className="whitespace-nowrap px-4 py-3 text-sm text-slate-600 dark:text-slate-300">
                  {member.hoursPerWeek}h / semaine
                </td>
                <td className="whitespace-nowrap px-4 py-3 text-sm text-slate-600 dark:text-slate-300">
                  {schedulesByStaff[member.id] ?? 0}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
};

export default StaffSection;
