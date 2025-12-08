"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { products as mockProducts } from "@/lib/mock-data";
import { NewOrderHeader } from "@/components/features/new-order/new-order-header";
import { OrderForm } from "@/components/features/new-order/order-form";
import { useNewOrderForm } from "@/hooks/use-new-order-form";

function NewOrderPageContent() {
  const searchParams = useSearchParams();
  const orderId = searchParams.get("id")
    ? parseInt(searchParams.get("id")!)
    : undefined;

  const {
    orderDescription,
    setOrderDescription,
    selectedProducts,
    handleProductToggle,
    handleSubmit,
    handleCancel,
    isSubmitDisabled,
    isLoading,
    isLoadingOrder,
    isEditMode,
  } = useNewOrderForm(orderId);

  return (
    <div className="min-h-screen bg-zinc-50">
      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
        <NewOrderHeader isEditMode={isEditMode} />

        {isLoadingOrder ? (
          <div className="flex items-center justify-center gap-3 py-12">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-emerald-600 border-r-transparent"></div>
            <span className="text-zinc-600">Loading order data...</span>
          </div>
        ) : (
          <OrderForm
            orderDescription={orderDescription}
            onOrderDescriptionChange={setOrderDescription}
            products={mockProducts}
            selectedProductIds={selectedProducts}
            onProductToggle={handleProductToggle}
            onCancel={handleCancel}
            onSubmit={handleSubmit}
            isSubmitDisabled={isSubmitDisabled}
            isLoading={isLoading}
            isEditMode={isEditMode}
          />
        )}
      </div>
    </div>
  );
}

export default function NewOrderPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-zinc-50" />}>
      <NewOrderPageContent />
    </Suspense>
  );
}
