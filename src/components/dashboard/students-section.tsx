import Card from "@/components/ui/card";
import Badge from "@/components/ui/badge";
import { students } from "@/data/school";
import dayjs from "dayjs";
import "dayjs/locale/fr";

dayjs.locale("fr");

type StudentsSectionProps = {
  query: string;
};

const StudentsSection = ({ query }: StudentsSectionProps) => {
  const normalized = query.trim().toLowerCase();
  const filtered = normalized
    ? students.filter((student) =>
        student.fullName.toLowerCase().includes(normalized)
      )
    : students;

  return (
    <Card
      title="Suivi des élèves"
      description="Vue synthétique des inscriptions, repas et besoins spécifiques."
    >
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-slate-200 dark:divide-slate-800">
          <thead className="bg-slate-50 dark:bg-slate-900/30">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                Élève
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                Classe
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                Date Naissance
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                Repas
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                Besoins
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
            {filtered.map((student) => (
              <tr key={student.id} className="hover:bg-slate-50 dark:hover:bg-slate-900/40">
                <td className="whitespace-nowrap px-4 py-3 text-sm font-medium text-slate-900 dark:text-slate-100">
                  {student.fullName}
                </td>
                <td className="whitespace-nowrap px-4 py-3 text-sm text-slate-600 dark:text-slate-300">
                  {student.year} • {student.classGroup}
                </td>
                <td className="whitespace-nowrap px-4 py-3 text-sm text-slate-600 dark:text-slate-300">
                  {dayjs(student.birthDate).format("DD MMM YYYY")}
                </td>
                <td className="whitespace-nowrap px-4 py-3 text-sm">
                  <Badge tone="info" className="capitalize">
                    {student.mealPlan}
                  </Badge>
                </td>
                <td className="px-4 py-3 text-sm text-slate-500 dark:text-slate-400">
                  {student.supportNeeds ?? "—"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
};

export default StudentsSection;
