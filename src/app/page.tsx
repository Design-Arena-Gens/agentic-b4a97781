"use client";

import Sidebar from "@/components/layout/sidebar";
import TopBar from "@/components/layout/top-bar";
import MetricsGrid from "@/components/dashboard/metrics-grid";
import StudentsSection from "@/components/dashboard/students-section";
import TeachersSection from "@/components/dashboard/teachers-section";
import StaffSection from "@/components/dashboard/staff-section";
import GuardiansSection from "@/components/dashboard/guardians-section";
import SchedulesSection from "@/components/dashboard/schedules-section";
import FinancesSection from "@/components/dashboard/finances-section";
import SuppliesSection from "@/components/dashboard/supplies-section";
import SearchResults from "@/components/dashboard/search-results";
import { useMemo, useState } from "react";

const Page = () => {
  const [activeSection, setActiveSection] = useState("dashboard");
  const [search, setSearch] = useState("");

  const sections = useMemo(
    () => ({
      dashboard: (
        <div className="space-y-6">
          <MetricsGrid />
          <SearchResults query={search} />
        </div>
      ),
      students: <StudentsSection query={search} />,
      teachers: <TeachersSection query={search} />,
      staff: <StaffSection query={search} />,
      guardians: <GuardiansSection query={search} />,
      schedules: <SchedulesSection />,
      finances: <FinancesSection />,
      supplies: <SuppliesSection />
    }),
    [search]
  );

  return (
    <div className="flex min-h-screen bg-slate-100 dark:bg-slate-950">
      <div className="hidden w-72 lg:block">
        <Sidebar active={activeSection} onNavigate={setActiveSection} />
      </div>
      <div className="flex flex-1 flex-col">
        <TopBar search={search} onSearch={setSearch} />
        <main className="flex-1 space-y-6 bg-slate-100 px-6 py-6 dark:bg-slate-950">
          <div className="lg:hidden">
            <div className="flex gap-2 overflow-x-auto pb-2">
              {Object.entries({
                dashboard: "Synthèse",
                students: "Élèves",
                teachers: "Enseignants",
                staff: "Personnel",
                guardians: "Responsables",
                schedules: "Horaires",
                finances: "Finances",
                supplies: "Fournitures"
              }).map(([id, label]) => (
                <button
                  key={id}
                  type="button"
                  onClick={() => setActiveSection(id)}
                  className={`whitespace-nowrap rounded-full border px-4 py-2 text-sm ${
                    activeSection === id
                      ? "border-primary-500 bg-primary-500 text-white"
                      : "border-slate-300 bg-white text-slate-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
          <div className="space-y-6">
            {sections[activeSection as keyof typeof sections] ??
              sections.dashboard}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Page;
