import { useState, useCallback, useMemo } from "react";
import { useRouter } from "next/navigation";

export function useNewOrderForm() {
  const router = useRouter();
  const [orderDescription, setOrderDescription] = useState("");
  const [selectedProducts, setSelectedProducts] = useState<number[]>([]);

  const handleProductToggle = useCallback((productId: number) => {
    setSelectedProducts((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  }, []);

  const handleSubmit = useCallback(() => {
    console.log({
      description: orderDescription,
      productIds: selectedProducts,
    });
    router.push("/order-management");
  }, [orderDescription, selectedProducts, router]);

  const handleCancel = useCallback(() => {
    router.push("/order-management");
  }, [router]);

  const isSubmitDisabled = useMemo(
    () => !orderDescription.trim() || selectedProducts.length === 0,
    [orderDescription, selectedProducts]
  );

  return {
    orderDescription,
    setOrderDescription,
    selectedProducts,
    handleProductToggle,
    handleSubmit,
    handleCancel,
    isSubmitDisabled,
  };
}
