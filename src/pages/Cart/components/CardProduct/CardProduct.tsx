import { Card, TextRow } from "../../../../components/UI";

import type { IProduct } from "../../../../types";

const CardProduct = ({ product }: { product: IProduct }) => {
  const { title, price, total, quantity } = product;

  return (
    <Card>
      <TextRow label="Товар:" value={title} />
      <TextRow label="Цена:" value={price.toFixed(2)} />
      <TextRow label="Количество:" value={`${quantity} шт.`} />
      <TextRow label="Итого по товару:" value={`$${total.toFixed(2)}`} />
    </Card>
  );
};

export { CardProduct };
