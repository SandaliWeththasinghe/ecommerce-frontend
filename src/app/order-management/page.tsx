"use client";

import { OrderManagementHeader } from "@/components/features/order-management/order-management-header";
import { OrderSearchBar } from "@/components/features/order-management/order-search-bar";
import { OrderMobileCardList } from "@/components/features/order-management/order-mobile-card-list";
import { OrderTable } from "@/components/features/order-management/order-table";
import { OrderPagination } from "@/components/features/order-management/order-pagination";
import { useOrders } from "@/hooks/use-orders";
import { useRouter } from "next/navigation";

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
  } = useOrders() as any;

  const searchQuery = search;

  const startIndex = (currentPage - 1) * limit;
  const endIndex = startIndex + limit;

  // `handleSearchChange` comes from the `useOrders` hook and triggers a server fetch

  const handleEdit = (orderId: number) => {
    router.push(`/order-management/new-order?id=${orderId}`);
  };

  const handleDelete = (orderId: number) => {
    console.log("Delete order:", orderId);
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
