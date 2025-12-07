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

export interface CreateOrderRequest {
  orderDescription: string;
  productIds: number[];
}

export interface CreateOrderResponse {
  id: number;
  orderDescription: string;
  productIds: number[];
  createdAt: string;
}

export interface ApiError {
  message: string;
  statusCode?: number;
  errors?: Record<string, string[]>;
}
