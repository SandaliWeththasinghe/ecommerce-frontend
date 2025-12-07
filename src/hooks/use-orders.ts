import { useState, useEffect, useCallback } from "react";
import { AxiosError } from "axios";
import { toast } from "sonner";
import { ordersApi } from "@/lib/api/orders";
import { Order, ApiError } from "@/types";

export function useOrders() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalOrders, setTotalOrders] = useState(0);
  const [limit, setLimit] = useState(10);
  const [search, setSearch] = useState("");

  const fetchOrders = useCallback(
    async (page: number, pageLimit: number, searchQuery = "") => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await ordersApi.getOrders({
          page,
          limit: pageLimit,
          search: searchQuery,
        });

        if (response?.data && Array.isArray(response.data)) {
          setOrders(response.data);

          if (response.meta) {
            setCurrentPage(response.meta.page || page);
            setTotalPages(response.meta.totalPages || 1);
            setTotalOrders(response.meta.total || response.data.length);
            setLimit(response.meta.limit || pageLimit);
          } else {
            setCurrentPage(page);
            setTotalPages(1);
            setTotalOrders(response.data.length);
            setLimit(pageLimit);
          }
        } else {
          setOrders([]);
          setCurrentPage(1);
          setTotalPages(1);
          setTotalOrders(0);
          setLimit(pageLimit);
        }
      } catch (err) {
        const axiosError = err as AxiosError<ApiError>;
        const errorMessage =
          axiosError.response?.data?.message ||
          "Failed to fetch orders. Please try again.";

        setError(errorMessage);
        setOrders([]);
        console.error("Error fetching orders:", err);

        toast.error("Failed to load orders", {
          description: errorMessage,
          style: {
            background: "#ef4444",
            color: "#ffffff",
            border: "1px solid #dc2626",
          },
        });
      } finally {
        setIsLoading(false);
      }
    },
    []
  );

  useEffect(() => {
    fetchOrders(currentPage, limit, search);
  }, [currentPage, limit, fetchOrders, search]);

  const handlePageChange = useCallback((page: number) => {
    setCurrentPage(page);
  }, []);

  const handleSearchChange = useCallback((value: string) => {
    setSearch(value);
    setCurrentPage(1);
  }, []);

  const handleLimitChange = useCallback((newLimit: number) => {
    setLimit(newLimit);
    setCurrentPage(1);
  }, []);

  const refetch = useCallback(() => {
    fetchOrders(currentPage, limit, search);
  }, [currentPage, limit, fetchOrders]);

  return {
    orders,
    isLoading,
    error,
    currentPage,
    totalPages,
    totalOrders,
    limit,
    search,
    handlePageChange,
    handleLimitChange,
    handleSearchChange,
    refetch,
  };
}
