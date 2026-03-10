import { useParams } from "react-router-dom";

import { useCartQuery, useControllCart } from "./Cart.hooks";

import { ListOfItem } from "@/components/ListOfItem";
import { ErrorBanner, Loader, Button, TextRow, Title } from "@/components/UI";
import { CardProduct } from "./components/CardProduct";

import { StyledDivider, StyledHeader, StyledWrapper } from "./Cart.styles";

const Cart = () => {
  const { id: selectedCartId } = useParams();

  const { data, isError, isPending, error } = useCartQuery(selectedCartId);
  const {
    isPendingUpdate = false,
    isErrorUpdate = false,
    errorUpdate = null,
    title = "",
    cartPrice = "",
    currentUserId = "",
    handlerBackPage = () => {},
    removeProduct = () => {},
    updateProduct = () => {},
  } = useControllCart(data, selectedCartId);

  if (isPending) {
    return <Loader fullPage message="Загрузка..." />;
  }

  if (isError || isErrorUpdate) {
    const errorMessage = error?.message || errorUpdate?.message || "";

    return <ErrorBanner message={errorMessage} />;
  }

  return (
    <StyledWrapper>
      <StyledHeader>
        <Title text={title} />
        <Button type="button" textButton="Назад" onClick={handlerBackPage} />
      </StyledHeader>
      <TextRow label="Пользователь:" value={currentUserId} />
      <StyledDivider />
      <ListOfItem
        list={data.products}
        getKey={(product) => product.id}
        renderItem={(product) => (
          <CardProduct
            product={product}
            isLoadingRemove={isPendingUpdate}
            updateProduct={updateProduct}
            removeProduct={removeProduct}
          />
        )}
      />
      <TextRow label="Общая сумма:" value={cartPrice} isTotal />
    </StyledWrapper>
  );
};

export { Cart };
