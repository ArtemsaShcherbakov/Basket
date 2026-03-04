import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

import { CardCart } from "./components/CardCart";
import { Pagination, ErrorBanner, Loader, Title } from "../../components/UI";
import { ListOfItem } from "../../components/ListOfItem";

import { cartStore } from "../../store/cartStore";

import { basketService } from "../../services/basketService";

import { StyledWrapper } from "./Carts.styles";

const Carts = () => {
  const navigate = useNavigate();

  const { pagination, setPage, setSelectedCart } = cartStore();

  const { currentPage, skip, limit } = pagination;

  const { data, isError, isPending, error } = useQuery({
    queryKey: ["carts", skip, limit],
    queryFn: () => basketService.getCarts(limit, skip),
  });

  if (isPending) {
    return <Loader fullPage message="Загрузка..." />;
  }

  if (isError) {
    return <ErrorBanner message={error.message} />;
  }

  const { total, carts } = data;
  const totalPages = Math.ceil(total / limit);

  const handlerGoToCart = (cartId: number) => {
    setSelectedCart(cartId);

    navigate(`/${cartId}`);
  };

  return (
    <StyledWrapper>
      <Title text="Корзины" />
      <ListOfItem
        list={carts}
        renderItem={(cart) => (
          <CardCart cart={cart} onClick={handlerGoToCart} />
        )}
      />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setPage}
      />
    </StyledWrapper>
  );
};

export { Carts };
