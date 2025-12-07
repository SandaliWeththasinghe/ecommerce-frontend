import { Pencil, Trash2, Calendar } from "lucide-react";
import { Order } from "@/types";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

interface OrderMobileCardProps {
  order: Order;
  onEdit?: (orderId: number) => void;
  onDelete?: (orderId: number) => void;
}

export function OrderMobileCard({
  order,
  onEdit,
  onDelete,
}: OrderMobileCardProps) {
  return (
    <Card className="overflow-hidden shadow-sm">
      <CardContent className="p-4">
        <div className="mb-3 flex items-start justify-between">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-zinc-500">
              #{order.id}
            </span>
            <Badge
              variant="secondary"
              className="bg-emerald-100 text-emerald-700"
            >
              {order.products.length} products
            </Badge>
          </div>
          <div className="flex gap-1">
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 text-zinc-600 hover:text-zinc-900"
              onClick={() => onEdit?.(order.id)}
            >
              <Pencil className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 text-zinc-600 hover:text-red-600"
              onClick={() => onDelete?.(order.id)}
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <h3 className="mb-2 font-medium text-zinc-900">
          {order.description}
        </h3>
        <div className="flex items-center gap-1.5 text-sm text-zinc-600">
          <Calendar className="h-3.5 w-3.5" />
          <span>{order.createdDate}</span>
        </div>
      </CardContent>
    </Card>
  );
}
