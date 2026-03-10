import { Card, Button, TextRow } from "@/components/UI";

import { createPrice, createTotalProducts, createId } from "@/utils";

import type { ICart } from "@/types";

interface ICardCartProps {
  cart: ICart;
  onClick(cartId: number): void;
}

const CardCart = ({ cart, onClick }: ICardCartProps) => {
  const { id, userId, totalProducts, total } = cart;

  const cartId = createId(id);
  const currentUserId = createId(userId);
  const numberOfProducts = createTotalProducts(totalProducts);
  const totalPrice = createPrice(total);

  const clickCard = () => onClick(id);

  return (
    <Card onClick={clickCard}>
      <TextRow label="Корзина:" value={cartId} />
      <TextRow label="Пользователь:" value={currentUserId} />
      <TextRow label="Количество товаров:" value={numberOfProducts} />
      <TextRow label="Общая сумма:" value={totalPrice} />
      <Button type="button" textButton="Подробнее" onClick={clickCard} />
    </Card>
  );
};

export { CardCart };
