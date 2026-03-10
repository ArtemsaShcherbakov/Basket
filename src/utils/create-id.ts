export const createId = (id: number) => {
  if (!id) return "-";

  return `ID ${id}`;
};
