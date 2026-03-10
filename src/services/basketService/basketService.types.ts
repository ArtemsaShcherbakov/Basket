import type { ICart } from "@/types";

interface IGetCartsServiceResponse {
  carts: ICart[];
  total: number;
  skip: number;
  limit: number;
}

export type { IGetCartsServiceResponse };
