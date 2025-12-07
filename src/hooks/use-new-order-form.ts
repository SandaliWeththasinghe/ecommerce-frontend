import { useState, useCallback, useMemo, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { AxiosError } from "axios";
import { toast } from "sonner";
import { ordersApi } from "@/lib/api/orders";
import { ApiError } from "@/types";

export function useNewOrderForm() {
  const router = useRouter();
  const [orderDescription, setOrderDescription] = useState("");
  const [selectedProducts, setSelectedProducts] = useState<number[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const redirectTimerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    return () => {
      if (redirectTimerRef.current) {
        clearTimeout(redirectTimerRef.current);
      }
    };
  }, []);

  const handleProductToggle = useCallback((productId: number) => {
    setSelectedProducts((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  }, []);

  const handleSubmit = useCallback(async () => {
    setIsLoading(true);

    try {
      const response = await ordersApi.createOrder({
        orderDescription: orderDescription.trim(),
        productIds: selectedProducts,
      });

      console.log("Order created successfully:", response);

      toast.success("Order created successfully!", {
        description: "Redirecting to order management page...",
        style: {
          background: "#10b981",
          color: "#ffffff",
          border: "1px solid #059669",
        },
      });

      redirectTimerRef.current = setTimeout(() => {
        router.push("/order-management");
      }, 3000);
    } catch (err) {
      const axiosError = err as AxiosError<ApiError>;
      const errorMessage =
        axiosError.response?.data?.message ||
        "Failed to create order. Please try again.";

      console.error("Error creating order:", err);

      toast.error("Failed to create order", {
        description: `${errorMessage}. Redirecting back in a moment...`,
        style: {
          background: "#ef4444",
          color: "#ffffff",
          border: "1px solid #dc2626",
        },
      });

      redirectTimerRef.current = setTimeout(() => {
        router.push("/order-management");
      }, 3000);
    } finally {
      setIsLoading(false);
    }
  }, [orderDescription, selectedProducts, router]);

  const handleCancel = useCallback(() => {
    router.push("/order-management");
  }, [router]);

  const isSubmitDisabled = useMemo(
    () =>
      !orderDescription.trim() || selectedProducts.length === 0 || isLoading,
    [orderDescription, selectedProducts, isLoading]
  );

  return {
    orderDescription,
    setOrderDescription,
    selectedProducts,
    handleProductToggle,
    handleSubmit,
    handleCancel,
    isSubmitDisabled,
    isLoading,
  };
}
