import { Card, Button, TextRow } from "../../../../components/UI";

import type { ICart } from "../../../../types";

interface ICardCartProps {
  cart: ICart;
  onClick(cartId: number): void;
}

const CardCart = ({ cart, onClick }: ICardCartProps) => {
  const { id, userId, totalProducts, total } = cart;

  const click = () => onClick(id);

  return (
    <Card onClick={click}>
      <TextRow label="Корзина:" value={`ID ${id}`} />
      <TextRow label="Пользователь:" value={`ID ${userId}`} />
      <TextRow label="Количество товаров:" value={`${totalProducts} шт.`} />
      <TextRow label="Общая сумма:" value={`$${total}`} />
      <Button type="button" textButton="Подробнее" onClick={click} />
    </Card>
  );
};

export { CardCart };
