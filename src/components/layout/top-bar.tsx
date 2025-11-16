import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import ThemeToggle from "@/components/theme-toggle";

type TopBarProps = {
  onSearch: (value: string) => void;
  search: string;
};

const TopBar = ({ onSearch, search }: TopBarProps) => {
  return (
    <header className="flex items-center justify-between gap-4 border-b border-slate-200 bg-white px-8 py-5 dark:border-slate-800 dark:bg-slate-950">
      <div>
        <h1 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">
          Tableau de pilotage
        </h1>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Suivi en temps réel des indicateurs clés de l&apos;école.
        </p>
      </div>
      <div className="flex items-center gap-4">
        <div className="relative">
          <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
          <input
            type="search"
            value={search}
            onChange={(event) => onSearch(event.target.value)}
            placeholder="Rechercher une personne, une classe..."
            className="w-64 rounded-full border border-slate-200 bg-white px-10 py-2 text-sm text-slate-700 outline-none transition focus:border-primary-500 focus:ring-2 focus:ring-primary-200 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:focus:ring-primary-500/30"
          />
        </div>
        <ThemeToggle />
      </div>
    </header>
  );
};

export default TopBar;
