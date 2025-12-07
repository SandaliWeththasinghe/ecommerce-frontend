"use client";

import { orders as mockOrders } from "@/lib/mock-data";
import { OrderManagementHeader } from "@/components/features/order-management/order-management-header";
import { OrderSearchBar } from "@/components/features/order-management/order-search-bar";
import { OrderMobileCardList } from "@/components/features/order-management/order-mobile-card-list";
import { OrderTable } from "@/components/features/order-management/order-table";
import { OrderPagination } from "@/components/features/order-management/order-pagination";
import { useOrderPagination } from "@/hooks/use-order-pagination";

export default function OrderManagementPage() {
  const {
    searchQuery,
    currentPage,
    rowsPerPage,
    filteredOrders,
    paginatedOrders,
    totalPages,
    startIndex,
    endIndex,
    handleSearchChange,
    handleRowsPerPageChange,
    handlePageChange,
  } = useOrderPagination(mockOrders);

  const handleEdit = (orderId: number) => {
    console.log("Edit order:", orderId);
  };

  const handleDelete = (orderId: number) => {
    console.log("Delete order:", orderId);
  };

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
          orders={paginatedOrders}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />

        <OrderTable
          orders={paginatedOrders}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />

        <OrderPagination
          currentPage={currentPage}
          totalPages={totalPages}
          rowsPerPage={rowsPerPage}
          totalItems={filteredOrders.length}
          startIndex={startIndex}
          endIndex={endIndex}
          onPageChange={handlePageChange}
          onRowsPerPageChange={handleRowsPerPageChange}
        />
      </div>
    </div>
  );
}
