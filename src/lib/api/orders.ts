import { apiClient } from "./client";
import {
  CreateOrderRequest,
  CreateOrderResponse,
  GetOrdersParams,
  GetOrdersResponse,
  GetOrderByIdResponse,
  UpdateOrderRequest,
  UpdateOrderResponse,
} from "@/types";

export const ordersApi = {
  getOrders: async (params?: GetOrdersParams): Promise<GetOrdersResponse> => {
    const response = await apiClient.get<GetOrdersResponse>("/orders", {
      params: {
        page: params?.page || 1,
        limit: params?.limit || 10,
        search: params?.search || "",
      },
    });
    return response.data;
  },

  createOrder: async (
    data: CreateOrderRequest
  ): Promise<CreateOrderResponse> => {
    const response = await apiClient.post<CreateOrderResponse>("/orders", data);
    return response.data;
  },

  getOrderById: async (orderId: number): Promise<GetOrderByIdResponse> => {
    const response = await apiClient.get<GetOrderByIdResponse>(
      `/orders/${orderId}`
    );
    return response.data;
  },

  updateOrder: async (
    orderId: number,
    data: UpdateOrderRequest
  ): Promise<UpdateOrderResponse> => {
    const response = await apiClient.put<UpdateOrderResponse>(
      `/orders/${orderId}`,
      data
    );
    return response.data;
  },
  deleteOrder: async (orderId: number) => {
    const response = await apiClient.delete(`/orders/${orderId}`);
    return response.data;
  },
};
