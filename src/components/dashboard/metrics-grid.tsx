import { computeMetrics } from "@/lib/metrics";
import {
  AcademicCapIcon,
  BanknotesIcon,
  CalculatorIcon,
  ChartPieIcon,
  ClockIcon,
  UserGroupIcon
} from "@heroicons/react/24/outline";

const icons = {
  students: AcademicCapIcon,
  teachers: UserGroupIcon,
  staff: ClockIcon,
  finances: BanknotesIcon,
  balance: CalculatorIcon,
  coverage: ChartPieIcon
};

const MetricsGrid = () => {
  const metrics = computeMetrics();

  const items = [
    {
      id: "students",
      label: "Élèves inscrits",
      value: metrics.totalStudents,
      footnote: "Nombre total d'élèves actifs",
      icon: icons.students
    },
    {
      id: "teachers",
      label: "Enseignants",
      value: `${metrics.totalTeachers} • ${metrics.weeklyTeachingHours}h`,
      footnote: "Capacité éducative hebdomadaire",
      icon: icons.teachers
    },
    {
      id: "staff",
      label: "Personnel de soutien",
      value: `${metrics.totalStaff} • ${metrics.averageStaffHours}h`,
      footnote: "Moyenne horaire hebdomadaire",
      icon: icons.staff
    },
    {
      id: "finances",
      label: "Trésorerie",
      value: `${metrics.income.toLocaleString("fr-BE", {
        style: "currency",
        currency: "EUR"
      })}`,
      footnote: "Recettes confirmées sur la période",
      icon: icons.finances
    },
    {
      id: "balance",
      label: "Solde net",
      value: `${metrics.balance.toLocaleString("fr-BE", {
        style: "currency",
        currency: "EUR"
      })}`,
      footnote: `${metrics.expenses.toLocaleString("fr-BE", {
        style: "currency",
        currency: "EUR"
      })} de dépenses`,
      icon: icons.balance
    },
    {
      id: "coverage",
      label: "Couverture planning",
      value: `${metrics.courseCoverage}% / ${metrics.workScheduleCoverage}%`,
      footnote: "Cours assurés / Services opérationnels",
      icon: icons.coverage
    }
  ];

  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {items.map((item) => {
        const Icon = item.icon;
        return (
          <div
            key={item.id}
            className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-100 transition hover:border-primary-200 hover:shadow-primary-500/10 dark:border-slate-800 dark:bg-slate-900"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary-600 dark:bg-primary-500/10 dark:text-primary-300">
              <Icon className="h-6 w-6" />
            </div>
            <div>
              <div className="text-sm font-medium uppercase tracking-wide text-slate-500 dark:text-slate-400">
                {item.label}
              </div>
              <div className="mt-1 text-2xl font-semibold text-slate-900 dark:text-slate-100">
                {item.value}
              </div>
              <div className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                {item.footnote}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MetricsGrid;
