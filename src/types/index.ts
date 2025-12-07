export interface Product {
  id: number;
  name: string;
  description: string;
}

export interface Order {
  id: number;
  description: string;
  products: Product[];
  createdDate: string;
}
