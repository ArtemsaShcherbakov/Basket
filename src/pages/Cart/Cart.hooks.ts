import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

import { cartStore } from "@/store/cartStore";

import { basketService } from "@/services/basketService";

import { ROUTE_PATHS } from "@/constants";

import type { IGetCartsServiceResponse } from "@/services/basketService/basketService.types";
import type { IProduct, ICart } from "@/types";

import { createPrice, createId } from "@/utils";

export const useGetCart = (selectedCartId?: string) => {
  const cartId = Number(selectedCartId);
  const isValidId = Number.isFinite(cartId) && cartId > 0;

  return useQuery({
    queryKey: ["cart", selectedCartId],
    queryFn: () => basketService.getOneCart(cartId),
    enabled: isValidId,
    staleTime: 60 * 1000,
  });
};

export const useUpdateCart = (selectedCartId?: string) => {
  const queryClient = useQueryClient();

  const {
    pagination: { skip, limit },
  } = cartStore();

  const cartId = Number(selectedCartId);

  const handleSuccessUpdate = (updatedCart: ICart | null) => {
    if (!updatedCart) return;

    queryClient.setQueryData(["cart", selectedCartId], updatedCart);

    queryClient.setQueryData<IGetCartsServiceResponse>(
      ["carts", "list", skip, limit],
      (oldData) => {
        if (!oldData) return oldData;

        return {
          ...oldData,
          carts: oldData.carts.map((cart) =>
            cart.id === updatedCart.id ? updatedCart : cart,
          ),
        };
      },
    );
  };

  return useMutation({
    mutationFn: (newProducts: IProduct[]) =>
      basketService.updateProductInCart(newProducts, cartId),
    onSuccess: handleSuccessUpdate,
  });
};

export const useControllCart = (data?: ICart, selectedCartId?: string) => {
  const navigate = useNavigate();
  const { isError, isPending, error, mutate } = useUpdateCart(selectedCartId);

  const { id = 0, userId = 0, products = [], total = 0 } = data || {};

  const removeProduct = useCallback(
    (productId: number) => {
      const indexProduct = products.findIndex(({ id }) => id === productId);

      // Проверка, что продукт найден
      if (indexProduct === -1) return;

      const newList = products.toSpliced(indexProduct, 1);
      mutate(newList);
    },
    [products, mutate],
  );

  const updateProduct = useCallback(
    ({ id, quantity: newQuantity }: Pick<IProduct, "id" | "quantity">) => {
      // Проверка на валидность количества
      if (newQuantity < 1) return;

      const newProductsList = products.map((product) =>
        product.id === id ? { ...product, quantity: newQuantity } : product,
      );

      mutate(newProductsList);
    },
    [products, mutate],
  );

  const title = `Корзина #${id}`;
  const cartPrice = createPrice(total);
  const currentUserId = createId(userId);

  const handlerBackPage = () => navigate(ROUTE_PATHS.CARTS);

  return {
    isPendingUpdate: isPending,
    isErrorUpdate: isError,
    errorUpdate: error,
    title,
    cartPrice,
    currentUserId,
    handlerBackPage,
    removeProduct,
    updateProduct,
  };
};
