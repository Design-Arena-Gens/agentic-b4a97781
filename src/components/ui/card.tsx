import clsx from "clsx";
import { ReactNode } from "react";

type CardProps = {
  title?: string;
  description?: string;
  actions?: ReactNode;
  children: ReactNode;
  className?: string;
};

const Card = ({
  title,
  description,
  actions,
  children,
  className
}: CardProps) => {
  return (
    <section
      className={clsx(
        "rounded-2xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-100 transition dark:border-slate-800 dark:bg-slate-900 dark:shadow-none",
        className
      )}
    >
      {(title || description || actions) && (
        <header className="mb-6 flex flex-wrap items-start justify-between gap-3">
          <div>
            {title && (
              <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                {title}
              </h2>
            )}
            {description && (
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                {description}
              </p>
            )}
          </div>
          {actions && <div className="flex items-center gap-2">{actions}</div>}
        </header>
      )}
      <div>{children}</div>
    </section>
  );
};

export default Card;
