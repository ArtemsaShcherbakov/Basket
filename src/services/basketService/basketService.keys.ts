const CART_KEYS = {
  ALL: ["cart"] as const,
  DETAIL: (id: string | number | undefined) => ["cart", id] as const,
  LISTS: ["carts"] as const,
  LIST: (skip: number, limit: number) =>
    ["carts", "list", skip, limit] as const,
} as const; 

export { CART_KEYS };

