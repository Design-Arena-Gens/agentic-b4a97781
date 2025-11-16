import { computeMetrics } from "@/lib/metrics";

describe("computeMetrics", () => {
  it("calcule les agrégations principales", () => {
    const metrics = computeMetrics();

    expect(metrics.totalStudents).toBeGreaterThan(0);
    expect(metrics.totalTeachers).toBeGreaterThan(0);
    expect(metrics.balance).toEqual(
      metrics.income - metrics.expenses
    );
  });
});
