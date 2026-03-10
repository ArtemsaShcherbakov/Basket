export const createTotalProducts = (totalProducts: number) => {
  if (!totalProducts) return "-";

  return `${totalProducts} шт.`;
};
