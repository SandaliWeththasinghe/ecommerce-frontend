import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface OrderPaginationProps {
  currentPage: number;
  totalPages: number;
  rowsPerPage: number;
  totalItems: number;
  startIndex: number;
  endIndex: number;
  onPageChange: (page: number) => void;
  onRowsPerPageChange: (rowsPerPage: number) => void;
}

export function OrderPagination({
  currentPage,
  totalPages,
  rowsPerPage,
  totalItems,
  startIndex,
  endIndex,
  onPageChange,
  onRowsPerPageChange,
}: OrderPaginationProps) {
  const goToFirstPage = () => onPageChange(1);
  const goToLastPage = () => onPageChange(totalPages);
  const goToPreviousPage = () => onPageChange(Math.max(currentPage - 1, 1));
  const goToNextPage = () => onPageChange(Math.min(currentPage + 1, totalPages));

  return (
    <div className="mt-4 flex flex-col gap-4 rounded-lg border border-zinc-200 bg-white px-4 py-4 shadow-sm sm:flex-row sm:items-center sm:justify-between md:mt-0 md:rounded-none md:rounded-b-lg md:border-0 md:border-t md:shadow-none">
      <div className="flex flex-col gap-2 text-sm text-zinc-600 sm:flex-row sm:items-center sm:gap-4">
        <span>
          Showing {startIndex + 1} to {Math.min(endIndex, totalItems)} of{" "}
          {totalItems} orders
        </span>
        <div className="flex items-center gap-2">
          <span>Rows per page:</span>
          <Select
            value={rowsPerPage.toString()}
            onValueChange={(value) => onRowsPerPageChange(Number(value))}
          >
            <SelectTrigger className="h-8 w-[70px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="5">5</SelectItem>
              <SelectItem value="10">10</SelectItem>
              <SelectItem value="15">15</SelectItem>
              <SelectItem value="20">20</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="flex items-center justify-between gap-2 sm:justify-start">
        <Button
          variant="outline"
          size="icon"
          onClick={goToFirstPage}
          disabled={currentPage === 1}
          className="h-8 w-8"
        >
          <ChevronsLeft className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={goToPreviousPage}
          disabled={currentPage === 1}
          className="h-8 w-8"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <span className="text-sm text-zinc-600">
          Page {currentPage} of {totalPages}
        </span>
        <Button
          variant="outline"
          size="icon"
          onClick={goToNextPage}
          disabled={currentPage === totalPages}
          className="h-8 w-8"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={goToLastPage}
          disabled={currentPage === totalPages}
          className="h-8 w-8"
        >
          <ChevronsRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
