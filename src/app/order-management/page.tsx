"use client";

import { useMemo, useState } from "react";
import { OrderManagementHeader } from "@/components/features/order-management/order-management-header";
import { OrderSearchBar } from "@/components/features/order-management/order-search-bar";
import { OrderMobileCardList } from "@/components/features/order-management/order-mobile-card-list";
import { OrderTable } from "@/components/features/order-management/order-table";
import { OrderPagination } from "@/components/features/order-management/order-pagination";
import { useOrders } from "@/hooks/use-orders";

export default function OrderManagementPage() {
  const {
    orders,
    isLoading,
    currentPage,
    totalPages,
    totalOrders,
    limit,
    handlePageChange,
    handleLimitChange,
  } = useOrders();

  const [searchQuery, setSearchQuery] = useState("");

  const filteredOrders = useMemo(
    () =>
      orders.filter((order) => {
        const description = order.orderDescription || order.description || "";
        return description.toLowerCase().includes(searchQuery.toLowerCase());
      }),
    [orders, searchQuery]
  );

  const startIndex = (currentPage - 1) * limit;
  const endIndex = startIndex + limit;

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
  };

  const handleEdit = (orderId: number) => {
    console.log("Edit order:", orderId);
  };

  const handleDelete = (orderId: number) => {
    console.log("Delete order:", orderId);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-zinc-50">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <OrderManagementHeader />
          <div className="flex h-64 items-center justify-center">
            <div className="text-center">
              <div className="mb-4 inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-emerald-600 border-r-transparent"></div>
              <p className="text-sm text-zinc-600">Loading orders...</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-50">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <OrderManagementHeader />

        <OrderSearchBar
          searchQuery={searchQuery}
          onSearchChange={handleSearchChange}
          orderCount={filteredOrders.length}
        />

        <OrderMobileCardList
          orders={filteredOrders}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />

        <OrderTable
          orders={filteredOrders}
          onEdit={handleEdit}
          onDelete={handleDelete}
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
