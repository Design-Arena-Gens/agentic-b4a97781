import Card from "@/components/ui/card";
import Badge from "@/components/ui/badge";
import { supplyOrders } from "@/data/school";

const SuppliesSection = () => {
  const formatCurrency = (value: number) =>
    value.toLocaleString("fr-BE", {
      style: "currency",
      currency: "EUR"
    });

  return (
    <Card
      title="Commande de fournitures"
      description="Suivi des fournisseurs, statuts et engagements financiers."
    >
      <div className="grid gap-4 md:grid-cols-2">
        {supplyOrders.map((order) => (
          <div
            key={order.id}
            className="flex flex-col gap-3 rounded-xl border border-slate-200 p-4 dark:border-slate-700"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">
                  {order.description}
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  {order.supplier}
                </p>
              </div>
              <Badge
                tone={
                  order.status === "reçu"
                    ? "success"
                    : order.status === "retard"
                    ? "danger"
                    : "warning"
                }
                className="capitalize"
              >
                {order.status}
              </Badge>
            </div>
            <div className="grid grid-cols-2 gap-2 text-sm text-slate-600 dark:text-slate-300">
              <div>
                <span className="font-medium text-slate-500 dark:text-slate-400">
                  Quantité:
                </span>{" "}
                {order.quantity}
              </div>
              <div>
                <span className="font-medium text-slate-500 dark:text-slate-400">
                  Coût unitaire:
                </span>{" "}
                {formatCurrency(order.unitCost)}
              </div>
              <div>
                <span className="font-medium text-slate-500 dark:text-slate-400">
                  Engagement:
                </span>{" "}
                {formatCurrency(order.quantity * order.unitCost)}
              </div>
              <div>
                <span className="font-medium text-slate-500 dark:text-slate-400">
                  Date souhaitée:
                </span>{" "}
                {new Date(order.desiredDate).toLocaleDateString("fr-BE", {
                  day: "2-digit",
                  month: "2-digit",
                  year: "numeric"
                })}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default SuppliesSection;
