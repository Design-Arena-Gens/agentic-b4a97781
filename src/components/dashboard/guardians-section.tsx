import Card from "@/components/ui/card";
import Badge from "@/components/ui/badge";
import { guardians } from "@/data/school";

type GuardiansSectionProps = {
  query: string;
};

const GuardiansSection = ({ query }: GuardiansSectionProps) => {
  const normalized = query.trim().toLowerCase();
  const filtered = normalized
    ? guardians.filter((guardian) =>
        guardian.fullName.toLowerCase().includes(normalized)
      )
    : guardians;

  return (
    <Card
      title="Personnes responsables"
      description="Coordonnées de contact, liens familiaux et élèves associés."
    >
      <div className="grid gap-4 md:grid-cols-2">
        {filtered.map((guardian) => (
          <div
            key={guardian.id}
            className="rounded-xl border border-slate-200 p-4 dark:border-slate-700"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">
                  {guardian.fullName}
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  {guardian.relation}
                </p>
              </div>
              <Badge tone="info">Élèves: {guardian.students.length}</Badge>
            </div>
            <div className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-300">
              <div>
                <span className="font-medium text-slate-500 dark:text-slate-400">
                  Email:
                </span>{" "}
                {guardian.email}
              </div>
              <div>
                <span className="font-medium text-slate-500 dark:text-slate-400">
                  Téléphone:
                </span>{" "}
                {guardian.phone}
              </div>
              <div>
                <span className="font-medium text-slate-500 dark:text-slate-400">
                  Adresse:
                </span>{" "}
                {guardian.address}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default GuardiansSection;
