import {
  courseSlots,
  financeEntries,
  staff,
  students,
  supplyOrders,
  teachers,
  workSchedules
} from "@/data/school";

export const computeMetrics = () => {
  const totalStudents = students.length;
  const totalTeachers = teachers.length;
  const totalStaff = staff.length;
  const pendingOrders = supplyOrders.filter(
    (order) => order.status !== "reçu"
  ).length;

  const income = financeEntries
    .filter((item) => item.type === "recette")
    .reduce((acc, entry) => acc + entry.amount, 0);

  const expenses = financeEntries
    .filter((item) => item.type === "dépense")
    .reduce((acc, entry) => acc + entry.amount, 0);

  const balance = income - expenses;

  const weeklyTeachingHours = teachers.reduce(
    (acc, teacher) => acc + teacher.workload,
    0
  );

  const averageStaffHours =
    staff.reduce((acc, member) => acc + member.hoursPerWeek, 0) / staff.length;

  const courseCoverage = (
    (courseSlots.length / (teachers.length * 10)) *
    100
  ).toFixed(0);

  const workScheduleCoverage = (
    (workSchedules.length / (staff.length * 5)) *
    100
  ).toFixed(0);

  return {
    totalStudents,
    totalTeachers,
    totalStaff,
    pendingOrders,
    income,
    expenses,
    balance,
    weeklyTeachingHours,
    averageStaffHours: Math.round(averageStaffHours),
    courseCoverage,
    workScheduleCoverage
  };
};
