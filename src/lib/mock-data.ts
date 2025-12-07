import { Order, Product } from "@/types";

export const products: Product[] = [
  {
    id: 1,
    name: "HP Laptop",
    description: "This is HP laptop",
  },
  {
    id: 2,
    name: "Lenovo Laptop",
    description: "This is Lenovo",
  },
  {
    id: 3,
    name: "Car",
    description: "This is Car",
  },
  {
    id: 4,
    name: "Bike",
    description: "This is Bike",
  },
];

export const orders: Order[] = [
  {
    id: 1,
    description: "Order for Customer 1",
    products: [products[0], products[1]],
    createdDate: "Jun 1, 2022",
  },
  {
    id: 2,
    description: "Order for Self",
    products: [products[0], products[1], products[2], products[3], products[0]],
    createdDate: "Jun 1, 2022",
  },
  {
    id: 3,
    description: "Order for Customer 2",
    products: [products[1], products[2], products[3]],
    createdDate: "Jun 1, 2022",
  },
  {
    id: 4,
    description: "Bulk Order - Electronics",
    products: [
      products[0],
      products[0],
      products[1],
      products[1],
      products[0],
      products[1],
      products[0],
      products[1],
      products[0],
      products[1],
      products[0],
      products[1],
    ],
    createdDate: "Jun 5, 2022",
  },
  {
    id: 5,
    description: "Office Supplies Restock",
    products: [
      products[0],
      products[1],
      products[2],
      products[3],
      products[0],
      products[1],
      products[2],
      products[3],
    ],
    createdDate: "Jun 8, 2022",
  },
  {
    id: 6,
    description: "Order for Customer 3",
    products: [products[0], products[2]],
    createdDate: "Jun 10, 2022",
  },
  {
    id: 7,
    description: "Tech Equipment Order",
    products: [products[0], products[1], products[3]],
    createdDate: "Jun 12, 2022",
  },
  {
    id: 8,
    description: "Quarterly Supplies",
    products: [products[1], products[2]],
    createdDate: "Jun 15, 2022",
  },
  {
    id: 9,
    description: "Customer 4 Special Request",
    products: [products[0], products[1], products[2], products[3]],
    createdDate: "Jun 18, 2022",
  },
  {
    id: 10,
    description: "Inventory Replenishment",
    products: [products[0], products[3]],
    createdDate: "Jun 20, 2022",
  },
  {
    id: 11,
    description: "Monthly Equipment Order",
    products: [products[1], products[2], products[3]],
    createdDate: "Jun 22, 2022",
  },
  {
    id: 12,
    description: "Department A Supplies",
    products: [products[0], products[1]],
    createdDate: "Jun 25, 2022",
  },
  {
    id: 13,
    description: "Emergency Restock",
    products: [products[2], products[3]],
    createdDate: "Jun 27, 2022",
  },
  {
    id: 14,
    description: "Annual Equipment Upgrade",
    products: [products[0], products[1], products[2]],
    createdDate: "Jun 28, 2022",
  },
  {
    id: 15,
    description: "End of Month Order",
    products: [products[0], products[3]],
    createdDate: "Jun 30, 2022",
  },
];
