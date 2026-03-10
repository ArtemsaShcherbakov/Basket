export const createPrice = (price: number) => {
  if (!price) return "-";

  return `$${price.toFixed(2)}`;
};
