import { apiClient } from "../api";

import { API_BASKET } from "./basketService.routes";

import type { ICart } from "../../types";
import type { IGetCartsServiceResponse } from "./basketService.types";

class BasketService {
  async getCarts(limit: number, skip: number) {
    try {
      const response = await apiClient.get<IGetCartsServiceResponse>(
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

  async getOneCart(cartId: number) {
    try {
      const response = await apiClient.get<ICart>(
        API_BASKET.GET_ONE_CARTS(cartId),
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
