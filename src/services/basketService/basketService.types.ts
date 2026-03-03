import type { ICart } from "../../types/basket";

interface IBasketServiceResponse {
  carts: ICart[];
  total: number;
  skip: number;
  limit: number;
}

export type { IBasketServiceResponse };
