import { memo, useEffect, useMemo, useState } from "react";

import { Card, TextRow, Button } from "@/components/UI";

import { createPrice, createTotalProducts, debounce } from "@/utils";

import type { IProduct } from "@/types";

import { StyledControll } from "./CardProduct.styles";

interface ICardProductProps {
  product: IProduct;
  isLoadingRemove: boolean;
  updateProduct({ id, quantity }: Pick<IProduct, "id" | "quantity">): void;
  removeProduct(cartId: number): void;
}

const CardProduct = memo(
  ({
    product,
    isLoadingRemove,
    updateProduct,
    removeProduct,
  }: ICardProductProps) => {
    const [removeId, setRemoveId] = useState<number | null>(null);

    const { id, title, price, total, quantity } = product;

    const [localQuantity, setLocalQuantity] = useState(quantity);
    
    const isLoading = removeId === id ? isLoadingRemove : false;

    const priceProduct = createPrice(price);
    const totalProduct = createTotalProducts(localQuantity);
    const finalPrice = createPrice(total);

    const debouncedUpdateQuantity = useMemo(
      () =>
        debounce((newQuantity: number) => {
          updateProduct({ id, quantity: newQuantity });
        }, 300),
      [updateProduct, id],
    );

    useEffect(() => {
      setLocalQuantity(quantity);
    }, [quantity]);

    const handlerUpdateQuantity = (step: number) => {
      const nextQuantity = localQuantity + step;

      if (nextQuantity < 1) {
        return;
      }

      setLocalQuantity(nextQuantity);
      debouncedUpdateQuantity(nextQuantity);
    };

    const handlerRemoveProduct = () => {
      removeProduct(id);
      setRemoveId(id);
    };

    console.log("render", id);

    return (
      <Card>
        <TextRow label="Товар:" value={title} />
        <TextRow label="Цена:" value={priceProduct} />
        <StyledControll>
          <Button
            type="button"
            textButton="-"
            onClick={() => handlerUpdateQuantity(-1)}
          />
          <TextRow label="Количество:" value={totalProduct} />
          <Button
            type="button"
            textButton="+"
            onClick={() => handlerUpdateQuantity(1)}
          />
        </StyledControll>
        <TextRow label="Итого по товару:" value={finalPrice} />
        <Button
          loading={isLoading}
          type="button"
          textButton="Удалить"
          onClick={handlerRemoveProduct}
        />
      </Card>
    );
  },
);

export { CardProduct };
