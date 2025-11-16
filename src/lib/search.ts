import {
  guardians,
  staff,
  students,
  teachers
} from "@/data/school";

export type SearchResult = {
  type: "Élève" | "Enseignant" | "Personnel" | "Responsable";
  id: string;
  title: string;
  subtitle: string;
};

const normalize = (value: string) =>
  value.normalize("NFD").replace(/\p{Diacritic}/gu, "").toLowerCase();

export const searchDirectory = (query: string): SearchResult[] => {
  if (!query) {
    return [];
  }

  const normalized = normalize(query);

  const results: SearchResult[] = [];

  students.forEach((student) => {
    if (normalize(student.fullName).includes(normalized)) {
      results.push({
        type: "Élève",
        id: student.id,
        title: student.fullName,
        subtitle: `Classe ${student.classGroup} • ${student.year}`
      });
    }
  });

  teachers.forEach((teacher) => {
    if (normalize(teacher.fullName).includes(normalized)) {
      results.push({
        type: "Enseignant",
        id: teacher.id,
        title: teacher.fullName,
        subtitle: `${teacher.role === "titulaire" ? "Titulaire" : "Spécialiste"} • ${teacher.subjects.join(", ")}`
      });
    }
  });

  staff.forEach((member) => {
    if (normalize(member.fullName).includes(normalized)) {
      results.push({
        type: "Personnel",
        id: member.id,
        title: member.fullName,
        subtitle: `${member.department} • ${member.contractType}`
      });
    }
  });

  guardians.forEach((guardian) => {
    if (normalize(guardian.fullName).includes(normalized)) {
      results.push({
        type: "Responsable",
        id: guardian.id,
        title: guardian.fullName,
        subtitle: guardian.relation
      });
    }
  });

  return results.slice(0, 6);
};
