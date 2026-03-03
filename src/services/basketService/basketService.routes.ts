const API_BASKET = {
  GET_CARTS: (limit: number, skip: number) =>
    `/carts?limit=${limit}&skip=${skip}`,
  GET_ONE_CARTS: (cartsId: string) => `/carts/${cartsId}`,
};

export { API_BASKET };
