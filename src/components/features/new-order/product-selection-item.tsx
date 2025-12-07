import { Product } from "@/types";
import { Checkbox } from "@/components/ui/checkbox";

interface ProductSelectionItemProps {
  product: Product;
  isSelected: boolean;
  onToggle: (productId: number) => void;
}

export function ProductSelectionItem({
  product,
  isSelected,
  onToggle,
}: Readonly<ProductSelectionItemProps>) {
  return (
    <div
      onClick={() => onToggle(product.id)}
      className={`cursor-pointer rounded-lg border-2 p-4 transition-all ${
        isSelected
          ? "border-emerald-500 bg-emerald-50"
          : "border-zinc-200 bg-white hover:border-zinc-300"
      }`}
    >
      <div className="flex items-start gap-3">
        <Checkbox
          checked={isSelected}
          onCheckedChange={() => onToggle(product.id)}
          className={`mt-0.5 ${
            isSelected ? "border-emerald-600 bg-emerald-600" : ""
          }`}
        />
        <div className="flex-1">
          <h3
            className={`font-medium ${
              isSelected ? "text-emerald-900" : "text-zinc-900"
            }`}
          >
            {product.name}
          </h3>
          <p
            className={`mt-1 text-sm ${
              isSelected ? "text-emerald-700" : "text-zinc-600"
            }`}
          >
            {product.description}
          </p>
        </div>
      </div>
    </div>
  );
}
