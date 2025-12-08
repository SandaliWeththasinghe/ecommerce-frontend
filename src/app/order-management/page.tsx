"use client";

import { OrderManagementHeader } from "@/components/features/order-management/order-management-header";
import { OrderSearchBar } from "@/components/features/order-management/order-search-bar";
import { OrderMobileCardList } from "@/components/features/order-management/order-mobile-card-list";
import { OrderTable } from "@/components/features/order-management/order-table";
import { OrderPagination } from "@/components/features/order-management/order-pagination";
import { useOrders } from "@/hooks/use-orders";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { ordersApi } from "@/lib/api/orders";

export default function OrderManagementPage() {
  const router = useRouter();
  const {
    orders,
    isLoading,
    currentPage,
    totalPages,
    totalOrders,
    limit,
    handlePageChange,
    handleLimitChange,
    search,
    handleSearchChange,
    refetch,
  } = useOrders() as any;

  const searchQuery = search;

  const startIndex = (currentPage - 1) * limit;
  const endIndex = startIndex + limit;

  // `handleSearchChange` comes from the `useOrders` hook and triggers a server fetch

  const handleEdit = (orderId: number) => {
    router.push(`/order-management/new-order?id=${orderId}`);
  };

  const handleDelete = async (orderId: number) => {
    try {
      const res = await ordersApi.deleteOrder(orderId);

      toast.success(res?.message || "Order deleted successfully", {
        description: `Order ${orderId} has been deleted.`,
        style: {
          background: "#10b981",
          color: "#ffffff",
          border: "1px solid #059669",
        },
      });

      // Refresh list
      refetch();
    } catch (err) {
      console.error("Error deleting order:", err);
      toast.error("Failed to delete order", {
        description: "Please try again.",
        style: {
          background: "#ef4444",
          color: "#ffffff",
          border: "1px solid #dc2626",
        },
      });
    }
  };

  // Always render the page structure (header, search, pagination).
  // The `OrderTable` will show an inline loader when `isLoading` is true.

  return (
    <div className="min-h-screen bg-zinc-50">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <OrderManagementHeader />

        <OrderSearchBar
          searchQuery={searchQuery}
          onSearchChange={handleSearchChange}
          orderCount={totalOrders}
        />

        <OrderMobileCardList
          orders={orders}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />

        <OrderTable
          orders={orders}
          onEdit={handleEdit}
          onDelete={handleDelete}
          isLoading={isLoading}
        />

        <OrderPagination
          currentPage={currentPage}
          totalPages={totalPages}
          rowsPerPage={limit}
          totalItems={totalOrders}
          startIndex={startIndex}
          endIndex={endIndex}
          onPageChange={handlePageChange}
          onRowsPerPageChange={handleLimitChange}
        />
      </div>
    </div>
  );
}
