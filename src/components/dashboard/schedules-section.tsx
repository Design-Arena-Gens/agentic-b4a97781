import Card from "@/components/ui/card";
import Badge from "@/components/ui/badge";
import { courseSlots, teachers, workSchedules, staff } from "@/data/school";

const weekdayOrder: Record<string, number> = {
  Lundi: 1,
  Mardi: 2,
  Mercredi: 3,
  Jeudi: 4,
  Vendredi: 5
};

const SchedulesSection = () => {
  const sortedCourses = [...courseSlots].sort((a, b) => {
    const dayDiff = (weekdayOrder[a.weekday] ?? 99) - (weekdayOrder[b.weekday] ?? 99);
    if (dayDiff !== 0) {
      return dayDiff;
    }
    return a.start.localeCompare(b.start);
  });

  const sortedWork = [...workSchedules].sort((a, b) => {
    const dayDiff = (weekdayOrder[a.weekday] ?? 99) - (weekdayOrder[b.weekday] ?? 99);
    if (dayDiff !== 0) {
      return dayDiff;
    }
    return a.start.localeCompare(b.start);
  });

  const teacherNames = Object.fromEntries(
    teachers.map((teacher) => [teacher.id, teacher.fullName])
  );

  const staffNames = Object.fromEntries(
    staff.map((member) => [member.id, member.fullName])
  );

  return (
    <div className="grid gap-5 lg:grid-cols-2">
      <Card
        title="Planning des cours"
        description="Suivi par plage horaire des leçons planifiées."
      >
        <div className="space-y-4">
          {sortedCourses.map((slot) => (
            <div
              key={slot.id}
              className="flex items-center justify-between gap-4 rounded-xl border border-slate-200 p-4 dark:border-slate-700"
            >
              <div>
                <div className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                  {slot.weekday} • {slot.start} - {slot.end}
                </div>
                <div className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                  {slot.subject} • {slot.group} • {slot.room}
                </div>
                <div className="mt-1 text-xs text-slate-400 dark:text-slate-500">
                  {teacherNames[slot.teacherId]}
                </div>
              </div>
              <Badge tone="info">Cours</Badge>
            </div>
          ))}
        </div>
      </Card>
      <Card
        title="Horaires du personnel"
        description="Disponibilité opérationnelle des équipes de soutien."
      >
        <div className="space-y-4">
          {sortedWork.map((slot) => (
            <div
              key={slot.id}
              className="flex items-center justify-between gap-4 rounded-xl border border-slate-200 p-4 dark:border-slate-700"
            >
              <div>
                <div className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                  {slot.weekday} • {slot.start} - {slot.end}
                </div>
                <div className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                  {staffNames[slot.staffId]} • {slot.location}
                </div>
              </div>
              <Badge tone="success">Présence</Badge>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default SchedulesSection;
