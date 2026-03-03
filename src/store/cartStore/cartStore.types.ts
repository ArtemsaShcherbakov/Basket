interface IPagination {
  limit: number;
  skip: number;
  currentPage: number;
}

interface ICartState {
  selectedCartId: number | null;
  pagination: IPagination;

  setSelectedCart: (cartId: number) => void;
  setPage: (page: number) => void;
}

export type { ICartState };
