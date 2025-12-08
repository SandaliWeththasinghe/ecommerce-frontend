import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface NewOrderHeaderProps {
  isEditMode?: boolean;
}

export function NewOrderHeader({
  isEditMode = false,
}: Readonly<NewOrderHeaderProps>) {
  return (
    <>
      <Link
        href="/order-management"
        className="mb-6 inline-flex items-center gap-2 text-sm text-zinc-600 hover:text-zinc-900"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Orders
      </Link>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-zinc-900">
          {isEditMode ? "Edit Order" : "New Order"}
        </h1>
        <p className="mt-1 text-sm text-zinc-600">
          {isEditMode
            ? "Update order details and selected products"
            : "Create a new order by adding a description and selecting products"}
        </p>
      </div>
    </>
  );
}
