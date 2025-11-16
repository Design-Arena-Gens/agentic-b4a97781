import Card from "@/components/ui/card";
import Badge from "@/components/ui/badge";
import { teachers } from "@/data/school";

type TeachersSectionProps = {
  query: string;
};

const TeachersSection = ({ query }: TeachersSectionProps) => {
  const normalized = query.trim().toLowerCase();
  const filtered = normalized
    ? teachers.filter((teacher) =>
        teacher.fullName.toLowerCase().includes(normalized)
      )
    : teachers;

  return (
    <Card
      title="Animation pédagogique"
      description="Charge horaire, disciplines enseignées et certifications."
    >
      <div className="grid gap-4 md:grid-cols-2">
        {filtered.map((teacher) => (
          <div
            key={teacher.id}
            className="rounded-xl border border-slate-200 p-4 dark:border-slate-700"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">
                {teacher.fullName}
              </h3>
              <Badge tone={teacher.role === "titulaire" ? "success" : "info"}>
                {teacher.role}
              </Badge>
            </div>
            <div className="mt-3 text-sm text-slate-600 dark:text-slate-300">
              <span className="font-medium text-slate-500 dark:text-slate-400">
                Charge:
              </span>{" "}
              {teacher.workload}h / semaine
            </div>
            <div className="mt-3">
              <div className="text-xs font-semibold uppercase text-slate-500 dark:text-slate-400">
                Disciplines
              </div>
              <div className="mt-2 flex flex-wrap gap-2">
                {teacher.subjects.map((subject) => (
                  <Badge key={subject} tone="neutral">
                    {subject}
                  </Badge>
                ))}
              </div>
            </div>
            <div className="mt-4">
              <div className="text-xs font-semibold uppercase text-slate-500 dark:text-slate-400">
                Certifications
              </div>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-600 dark:text-slate-300">
                {teacher.certifications.map((certification) => (
                  <li key={certification}>{certification}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default TeachersSection;
