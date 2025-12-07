import { Search, Package } from "lucide-react";
import { Input } from "@/components/ui/input";

interface OrderSearchBarProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
  orderCount: number;
}

export function OrderSearchBar({
  searchQuery,
  onSearchChange,
  orderCount,
}: OrderSearchBarProps) {
  return (
    <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="relative w-full sm:max-w-md">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400" />
        <Input
          type="text"
          placeholder="Search by order description..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-10"
        />
      </div>
      <div className="flex items-center gap-2 text-sm text-zinc-600">
        <Package className="h-4 w-4" />
        <span className="font-medium">{orderCount} orders</span>
      </div>
    </div>
  );
}
