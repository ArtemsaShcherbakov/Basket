import { apiClient } from "../api";

import { API_BASKET } from "./basketService.routes";

import type { IBasketServiceResponse } from "./basketService.types";

class BasketService {
  async getCartsInBasket(limit: number, skip: number) {
    try {
      const response = await apiClient.get<IBasketServiceResponse>(
        API_BASKET.GET_CARTS(limit, skip),
      );

      return response;
    } catch (error: any) {
      if (error.response?.status === 404) {
        throw new Error("Withdrawal not found");
      }

      throw new Error("Failed to fetch withdrawal details");
    }
  }
}

export const basketService = new BasketService();
