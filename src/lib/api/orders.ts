import { apiClient } from "./client";
import { CreateOrderRequest, CreateOrderResponse } from "@/types";

export const ordersApi = {
  createOrder: async (data: CreateOrderRequest): Promise<CreateOrderResponse> => {
    const response = await apiClient.post<CreateOrderResponse>("/orders", data);
    return response.data;
  },
};
