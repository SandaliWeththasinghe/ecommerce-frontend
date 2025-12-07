import { ShoppingCart, Loader2 } from "lucide-react";
import { Product } from "@/types";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ProductSelectionList } from "./product-selection-list";

interface OrderFormProps {
  orderDescription: string;
  onOrderDescriptionChange: (value: string) => void;
  products: Product[];
  selectedProductIds: number[];
  onProductToggle: (productId: number) => void;
  onCancel: () => void;
  onSubmit: () => void;
  isSubmitDisabled: boolean;
  isLoading?: boolean;
}

export function OrderForm({
  orderDescription,
  onOrderDescriptionChange,
  products,
  selectedProductIds,
  onProductToggle,
  onCancel,
  onSubmit,
  isSubmitDisabled,
  isLoading = false,
}: Readonly<OrderFormProps>) {
  return (
    <>
      <Card className="shadow-sm">
        <CardHeader className="border-b border-zinc-200">
          <div className="flex items-center gap-2">
            <ShoppingCart className="h-5 w-5 text-zinc-600" />
            <CardTitle>Order Details</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="mb-6">
            <label
              htmlFor="orderDescription"
              className="mb-2 block text-sm font-medium text-zinc-700"
            >
              Order Description
            </label>
            <Input
              id="orderDescription"
              type="text"
              placeholder="Enter order description..."
              value={orderDescription}
              maxLength={100}
              onChange={(e) => onOrderDescriptionChange(e.target.value)}
              className="w-full"
              disabled={isLoading}
            />
          </div>

          <ProductSelectionList
            products={products}
            selectedProductIds={selectedProductIds}
            onProductToggle={onProductToggle}
          />
        </CardContent>
      </Card>

      <div className="mt-6 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
        <Button
          variant="outline"
          onClick={onCancel}
          className="w-full sm:w-auto"
          disabled={isLoading}
        >
          Cancel
        </Button>
        <Button
          onClick={onSubmit}
          disabled={isSubmitDisabled}
          className="w-full bg-emerald-600 hover:bg-emerald-700 sm:w-auto"
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Submitting...
            </>
          ) : (
            <>
              <ShoppingCart className="mr-2 h-4 w-4" />
              Submit Order
            </>
          )}
        </Button>
      </div>
    </>
  );
}
