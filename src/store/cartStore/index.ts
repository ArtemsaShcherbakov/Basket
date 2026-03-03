import { create } from "zustand";

import type { ICartState } from "./cartStore.types";

export const cartStore = create<ICartState>((set) => ({
  selectedCartId: null,
  pagination: {
    limit: 9, // сколько элементов на странице
    skip: 0, // сколько пропустить
    currentPage: 1, // текущая страница (для удобства UI)
  },

  setSelectedCart: (cartId: number) => set({ selectedCartId: cartId }),

  setPage: (page) =>
    set((state) => ({
      pagination: {
        ...state.pagination,
        currentPage: page,
        skip: (page - 1) * state.pagination.limit,
      },
    })),
}));
