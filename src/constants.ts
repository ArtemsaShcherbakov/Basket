export const ROUTES_LIST = {
  ROOT: "",
  CARTS: "carts",
  CART: "cart/:id",
} as const;

export const ROUTE_PATHS = {
  ROOT: "/",
  CARTS: "/carts",
  CART: (id: number | string = ":id") => `/cart/${id}`,
} as const;
