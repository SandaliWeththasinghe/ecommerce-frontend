import { Order } from "@/types";
import { OrderMobileCard } from "./order-mobile-card";
import { Card, CardContent } from "@/components/ui/card";

interface OrderMobileCardListProps {
  orders: Order[];
  onEdit?: (orderId: number) => void;
  onDelete?: (orderId: number) => void;
}

export function OrderMobileCardList({
  orders,
  onEdit,
  onDelete,
}: OrderMobileCardListProps) {
  if (orders.length === 0) {
    return (
      <Card>
        <CardContent className="flex h-32 items-center justify-center text-zinc-500">
          No orders found
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-4 md:hidden">
      {orders.map((order) => (
        <OrderMobileCard
          key={order.id}
          order={order}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}
