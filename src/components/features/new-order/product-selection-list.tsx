import { Package } from "lucide-react";
import { Product } from "@/types";
import { ProductSelectionItem } from "./product-selection-item";

interface ProductSelectionListProps {
  products: Product[];
  selectedProductIds: number[];
  onProductToggle: (productId: number) => void;
}

export function ProductSelectionList({
  products,
  selectedProductIds,
  onProductToggle,
}: Readonly<ProductSelectionListProps>) {
  return (
    <div>
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Package className="h-4 w-4 text-zinc-600" />
          <label className="text-sm font-medium text-zinc-700">
            Select Products
          </label>
        </div>
        <span className="text-sm text-emerald-600">
          {selectedProductIds.length} selected
        </span>
      </div>

      <div className="space-y-3">
        {products.map((product) => (
          <ProductSelectionItem
            key={product.id}
            product={product}
            isSelected={selectedProductIds.includes(product.id)}
            onToggle={onProductToggle}
          />
        ))}
      </div>
    </div>
  );
}
