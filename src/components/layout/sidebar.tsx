import {
  AcademicCapIcon,
  BanknotesIcon,
  CalendarDaysIcon,
  ClipboardDocumentListIcon,
  HomeIcon,
  ShoppingBagIcon,
  UserGroupIcon,
  UserIcon
} from "@heroicons/react/24/outline";
import clsx from "clsx";

const sections = [
  {
    id: "dashboard",
    label: "Tableau de bord",
    icon: HomeIcon
  },
  {
    id: "students",
    label: "Élèves",
    icon: AcademicCapIcon
  },
  {
    id: "teachers",
    label: "Enseignants",
    icon: UserIcon
  },
  {
    id: "staff",
    label: "Personnel",
    icon: UserGroupIcon
  },
  {
    id: "guardians",
    label: "Personnes responsables",
    icon: ClipboardDocumentListIcon
  },
  {
    id: "schedules",
    label: "Horaires",
    icon: CalendarDaysIcon
  },
  {
    id: "finances",
    label: "Finances",
    icon: BanknotesIcon
  },
  {
    id: "supplies",
    label: "Fournitures",
    icon: ShoppingBagIcon
  }
];

type SidebarProps = {
  active: string;
  onNavigate: (sectionId: string) => void;
};

const Sidebar = ({ active, onNavigate }: SidebarProps) => {
  return (
    <nav className="flex h-full flex-col justify-between border-r border-slate-200 bg-white px-4 py-6 dark:border-slate-800 dark:bg-slate-950">
      <div>
        <div className="mb-8 px-2">
          <div className="text-xs font-semibold uppercase tracking-wide text-primary-600">
            École fondamentale
          </div>
          <div className="text-lg font-bold text-slate-900 dark:text-slate-100">
            Assistant de gestion
          </div>
        </div>
        <ul className="space-y-1">
          {sections.map((section) => {
            const isActive = section.id === active;
            const Icon = section.icon;

            return (
              <li key={section.id}>
                <button
                  type="button"
                  onClick={() => onNavigate(section.id)}
                  className={clsx(
                    "flex w-full items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium transition",
                    isActive
                      ? "bg-primary-500 text-white shadow-lg shadow-primary-500/30"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-100"
                  )}
                >
                  <Icon className="h-5 w-5" />
                  <span>{section.label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="rounded-xl border border-dashed border-primary-200 bg-primary-50 p-4 text-sm text-primary-700 dark:border-primary-800 dark:bg-primary-900/20 dark:text-primary-200">
        Besoin d&apos;un rapport? Demandez à l&apos;assistant d&apos;analyser
        vos données et de proposer des actions prioritaires.
      </div>
    </nav>
  );
};

export default Sidebar;
