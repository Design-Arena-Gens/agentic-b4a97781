import { ReactNode } from "react";
import clsx from "clsx";

type BadgeTone = "info" | "success" | "warning" | "danger" | "neutral";

const toneClasses: Record<BadgeTone, string> = {
  info: "bg-blue-100 text-blue-700 dark:bg-blue-500/10 dark:text-blue-300 border-blue-200 dark:border-blue-500/30",
  success:
    "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300 border-emerald-200 dark:border-emerald-500/30",
  warning:
    "bg-amber-100 text-amber-700 dark:bg-amber-500/10 dark:text-amber-300 border-amber-200 dark:border-amber-500/30",
  danger:
    "bg-rose-100 text-rose-700 dark:bg-rose-500/10 dark:text-rose-300 border-rose-200 dark:border-rose-500/30",
  neutral:
    "bg-slate-100 text-slate-700 dark:bg-slate-500/10 dark:text-slate-200 border-slate-200 dark:border-slate-500/30"
};

type BadgeProps = {
  children: ReactNode;
  tone?: BadgeTone;
  className?: string;
};

const Badge = ({ children, tone = "neutral", className }: BadgeProps) => {
  return (
    <span
      className={clsx(
        "inline-flex items-center rounded-md border px-2 py-0.5 text-xs font-medium",
        toneClasses[tone],
        className
      )}
    >
      {children}
    </span>
  );
};

export default Badge;
