"use client";

import { products as mockProducts } from "@/lib/mock-data";
import { NewOrderHeader } from "@/components/features/new-order/new-order-header";
import { OrderForm } from "@/components/features/new-order/order-form";
import { useNewOrderForm } from "@/hooks/use-new-order-form";

export default function NewOrderPage() {
  const {
    orderDescription,
    setOrderDescription,
    selectedProducts,
    handleProductToggle,
    handleSubmit,
    handleCancel,
    isSubmitDisabled,
  } = useNewOrderForm();

  return (
    <div className="min-h-screen bg-zinc-50">
      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
        <NewOrderHeader />

        <OrderForm
          orderDescription={orderDescription}
          onOrderDescriptionChange={setOrderDescription}
          products={mockProducts}
          selectedProductIds={selectedProducts}
          onProductToggle={handleProductToggle}
          onCancel={handleCancel}
          onSubmit={handleSubmit}
          isSubmitDisabled={isSubmitDisabled}
        />
      </div>
    </div>
  );
}
