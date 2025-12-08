import Link from "next/link";
import { Button } from "@/components/ui/button";

export function OrderManagementHeader() {
  return (
    <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h1 className="text-3xl font-bold text-zinc-900">Order Management</h1>
        <p className="mt-1 text-sm text-zinc-600">
          Manage and track all your orders in one place
        </p>
      </div>
      <Link href="/order-management/new-order">
        <Button className="flex items-center w-full bg-emerald-600 hover:bg-emerald-700 sm:w-auto cursor-pointer">
          <span className="mr-1 mb-1 text-2xl">+</span>
          <span>New Order</span>
        </Button>
      </Link>
    </div>
  );
}
