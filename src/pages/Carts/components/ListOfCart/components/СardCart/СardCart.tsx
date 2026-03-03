import { Card, Button } from "../../../../../../components/UI";

import type { ICart } from "../../../../../../types";

const СardCart = ({ id, userId, totalProducts, total }: ICart) => (
  <Card>
    <p>ID корзины: {id}</p>
    <p>userId: {userId}</p>
    <p>количество товаров: {totalProducts}</p>
    <p>общая сумма: {total}</p>
    <Button type="button" textButton="Подробнее" />
  </Card>
);

export { СardCart };
