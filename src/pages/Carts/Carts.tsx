import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

import { Pagination, ErrorBanner, Loader, Title } from "@/components/UI/index";
import { ListOfItem } from "@/components/ListOfItem";
import { CardCart } from "./components/CardCart";

import { cartStore } from "@/store/cartStore";

import { basketService } from "@/services/basketService";
import { CART_KEYS } from "@/services/basketService/basketService.keys";

import { ROUTE_PATHS } from "@/constants";

import { StyledWrapper } from "./Carts.styles";

const Carts = () => {
  const navigate = useNavigate();

  const {
    pagination: { skip, limit, currentPage },
    setSelectedCart,
    setPage,
  } = cartStore();

  const { data, isError, isPending, error } = useQuery({
    queryKey: CART_KEYS.LIST(skip, limit),
    queryFn: () => basketService.getCarts(limit, skip),
    staleTime: 60 * 1000,
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

    navigate(ROUTE_PATHS.CART(cartId));
  };

  return (
    <StyledWrapper>
      <Title text="Корзины" />
      <ListOfItem
        list={carts}
        getKey={(cart) => cart.id}
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
