import { useQuery } from "@tanstack/react-query";
import { useParams, useNavigate } from "react-router-dom";

import { CardProduct } from "./components/CardProduct";
import {
  ErrorBanner,
  Loader,
  Button,
  TextRow,
  Title,
} from "../../components/UI";
import { ListOfItem } from "../../components/ListOfItem";

import { basketService } from "../../services/basketService";

import { StyledDivider, StyledHeader } from "./Cart.styles";

const Cart = () => {
  const { id: selectedCartId } = useParams();
  const navigate = useNavigate();

  const { data, isError, isPending, error } = useQuery({
    queryKey: ["cart", selectedCartId],
    queryFn: () => basketService.getOneCart(Number(selectedCartId)),
  });

  if (isPending) {
    return <Loader fullPage message="Загрузка..." />;
  }

  if (isError) {
    return <ErrorBanner message={error.message} />;
  }

  const { id, userId, products, total } = data;

  const handlerBackPage = () => navigate("/");

  return (
    <section>
      <StyledHeader>
        <Title text={`Корзина #${id}`} />
        <Button type="button" textButton="Назад" onClick={handlerBackPage} />
      </StyledHeader>
      <TextRow label="Пользователь:" value={`ID ${userId}`} />
      <StyledDivider />
      <ListOfItem
        list={products}
        renderItem={(product) => <CardProduct product={product} />}
      />
      <TextRow label="Общая сумма:" value={`$${total.toFixed(2)}`} isTotal />
    </section>
  );
};

export { Cart };
