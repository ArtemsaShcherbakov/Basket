const API_BASKET = {
  GET_CARTS: (limit: number, skip: number) =>
    `/carts?limit=${limit}&skip=${skip}`,
  CART: (cartsId: number) => `/carts/${cartsId}`,
};

export { API_BASKET };
