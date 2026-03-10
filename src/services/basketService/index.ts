import { apiClient } from "../api";

import { API_BASKET } from "./basketService.routes";

import type { ICart, IProduct } from "@/types";
import type { IGetCartsServiceResponse } from "./basketService.types";

type ApiError = {
  message?: string;
  status?: number;
  data?: unknown;
};

class BasketService {
  private handleCartError(error: unknown, defaultMessage: string): never {
    const apiError = error as ApiError | undefined;

    if (apiError?.status === 404) {
      throw new Error("Корзина не найдена");
    }

    if (apiError?.message) {
      throw new Error(apiError.message);
    }

    throw new Error(defaultMessage);
  }

  async getCarts(limit: number, skip: number) {
    try {
      const response = await apiClient.get<IGetCartsServiceResponse>(
        API_BASKET.GET_CARTS(limit, skip),
      );

      return response;
    } catch (error) {
      this.handleCartError(
        error,
        "Не удалось загрузить список корзин. Попробуйте позже.",
      );
    }
  }

  async getOneCart(cartId: number) {
    try {
      const response = await apiClient.get<ICart>(API_BASKET.CART(cartId));

      return response;
    } catch (error) {
      this.handleCartError(
        error,
        "Не удалось загрузить корзину. Попробуйте позже.",
      );
    }
  }

  async updateProductInCart(products: IProduct[], cardId: number) {
    if (!cardId) return null;

    try {
      const response = await apiClient.put<ICart>(
        API_BASKET.CART(cardId),
        products,
      );

      return response;
    } catch (error) {
      this.handleCartError(
        error,
        "Не удалось обновить корзину. Попробуйте позже.",
      );
    }
  }
}

export const basketService = new BasketService();
