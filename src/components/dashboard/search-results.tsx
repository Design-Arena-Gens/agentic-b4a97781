import Card from "@/components/ui/card";
import Badge from "@/components/ui/badge";
import { searchDirectory, SearchResult } from "@/lib/search";

type SearchResultsProps = {
  query: string;
};

const toneByType: Record<SearchResult["type"], "info" | "success" | "warning" | "danger" | "neutral"> = {
  Élève: "info",
  Enseignant: "success",
  Personnel: "warning",
  Responsable: "neutral"
};

const SearchResults = ({ query }: SearchResultsProps) => {
  const results = searchDirectory(query);

  if (!query) {
    return null;
  }

  return (
    <Card
      title="Résultats rapides"
      description="Sélectionnez un profil pour accéder aux informations détaillées."
    >
      {results.length === 0 ? (
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Aucun résultat pour « {query} ». Essayez avec un autre terme.
        </p>
      ) : (
        <ul className="space-y-3">
          {results.map((result) => (
            <li
              key={result.id}
              className="flex items-center justify-between rounded-xl border border-slate-200 p-4 transition hover:border-primary-300 hover:bg-primary-50/40 dark:border-slate-700 dark:hover:border-primary-700 dark:hover:bg-primary-500/10"
            >
              <div>
                <div className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                  {result.title}
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400">
                  {result.subtitle}
                </div>
              </div>
              <Badge tone={toneByType[result.type]}>{result.type}</Badge>
            </li>
          ))}
        </ul>
      )}
    </Card>
  );
};

export default SearchResults;
