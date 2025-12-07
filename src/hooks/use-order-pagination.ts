import { useState, useMemo, useCallback } from "react";
import { Order } from "@/types";

export function useOrderPagination(orders: Order[]) {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const filteredOrders = useMemo(
    () =>
      orders.filter((order) =>
        order.description.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    [orders, searchQuery]
  );

  const totalPages = Math.ceil(filteredOrders.length / rowsPerPage);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;

  const paginatedOrders = useMemo(
    () => filteredOrders.slice(startIndex, endIndex),
    [filteredOrders, startIndex, endIndex]
  );

  const handleSearchChange = useCallback((value: string) => {
    setSearchQuery(value);
    setCurrentPage(1);
  }, []);

  const handleRowsPerPageChange = useCallback((value: number) => {
    setRowsPerPage(value);
    setCurrentPage(1);
  }, []);

  const handlePageChange = useCallback((page: number) => {
    setCurrentPage(page);
  }, []);

  return {
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
  };
}
