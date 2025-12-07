import { apiClient } from "./client";
import {
  CreateOrderRequest,
  CreateOrderResponse,
  GetOrdersParams,
  GetOrdersResponse,
} from "@/types";

export const ordersApi = {
  getOrders: async (params?: GetOrdersParams): Promise<GetOrdersResponse> => {
    const response = await apiClient.get<GetOrdersResponse>("/orders", {
      params: {
        page: params?.page || 1,
        limit: params?.limit || 10,
      },
    });
    return response.data;
  },

  createOrder: async (data: CreateOrderRequest): Promise<CreateOrderResponse> => {
    const response = await apiClient.post<CreateOrderResponse>("/orders", data);
    return response.data;
  },
};
