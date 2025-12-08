import { useState, useCallback, useMemo, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { AxiosError } from "axios";
import { toast } from "sonner";
import { ordersApi } from "@/lib/api/orders";
import { ApiError } from "@/types";

export function useNewOrderForm(orderId?: number) {
  const router = useRouter();
  const [orderDescription, setOrderDescription] = useState("");
  const [selectedProducts, setSelectedProducts] = useState<number[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingOrder, setIsLoadingOrder] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const redirectTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Load order data when orderId is provided
  useEffect(() => {
    if (orderId) {
      const loadOrder = async () => {
        setIsLoadingOrder(true);
        try {
          const orderData = await ordersApi.getOrderById(orderId);
          setOrderDescription(orderData.orderDescription);
          setSelectedProducts(orderData.products.map((p) => p.id));
          setIsEditMode(true);
        } catch (err) {
          const axiosError = err as AxiosError<ApiError>;
          const errorMessage =
            axiosError.response?.data?.message ||
            "Failed to load order. Please try again.";

          console.error("Error loading order:", err);

          toast.error("Failed to load order", {
            description: errorMessage,
            style: {
              background: "#ef4444",
              color: "#ffffff",
              border: "1px solid #dc2626",
            },
          });

          router.push("/order-management");
        } finally {
          setIsLoadingOrder(false);
        }
      };

      loadOrder();
    }
  }, [orderId, router]);

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
      if (isEditMode && orderId) {
        // Update order
        const response = await ordersApi.updateOrder(orderId, {
          orderDescription: orderDescription.trim(),
          productIds: selectedProducts,
        });

        console.log("Order updated successfully:", response);

        toast.success("Order updated successfully!", {
          description: "Redirecting to order management page...",
          style: {
            background: "#10b981",
            color: "#ffffff",
            border: "1px solid #059669",
          },
        });
      } else {
        // Create new order
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
      }

      redirectTimerRef.current = setTimeout(() => {
        router.push("/order-management");
      }, 3000);
    } catch (err) {
      const axiosError = err as AxiosError<ApiError>;
      const errorMessage =
        axiosError.response?.data?.message ||
        `Failed to ${
          isEditMode ? "update" : "create"
        } order. Please try again.`;

      console.error(
        `Error ${isEditMode ? "updating" : "creating"} order:`,
        err
      );

      toast.error(`Failed to ${isEditMode ? "update" : "create"} order`, {
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
  }, [orderDescription, selectedProducts, router, isEditMode, orderId]);

  const handleCancel = useCallback(() => {
    router.push("/order-management");
  }, [router]);

  const isSubmitDisabled = useMemo(
    () =>
      !orderDescription.trim() ||
      selectedProducts.length === 0 ||
      isLoading ||
      isLoadingOrder,
    [orderDescription, selectedProducts, isLoading, isLoadingOrder]
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
    isLoadingOrder,
    isEditMode,
  };
}
