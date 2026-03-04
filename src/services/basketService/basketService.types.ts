import type { ICart } from "../../types/basket";

interface IGetCartsServiceResponse {
  carts: ICart[];
  total: number;
  skip: number;
  limit: number;
}

export type { IGetCartsServiceResponse };
