export interface Product {
  id: number;
  name?: string;
  description?: string;
  productName?: string;
  productDescription?: string;
}

export interface Order {
  id: number;
  description?: string;
  orderDescription?: string;
  products: Product[];
  createdDate?: string;
  createdAt?: string;
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

export interface GetOrderByIdResponse {
  id: number;
  orderDescription: string;
  createdAt: string;
  products: Product[];
}

export interface UpdateOrderRequest {
  orderDescription: string;
  productIds: number[];
}

export interface UpdateOrderResponse {
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

export interface GetOrdersParams {
  page?: number;
  limit?: number;
  search?: string;
}

export interface GetOrdersResponse {
  data: Order[];
  meta: {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
  };
}
