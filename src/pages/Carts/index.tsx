import { useQuery } from "@tanstack/react-query";

import { Pagination, ErrorBanner, Loader } from "../../components/UI";
import { ListOfCart } from "./components/ListOfCart";

import { cartStore } from "../../store/cartStore";

import { basketService } from "../../services/basketService";

import { StyledWrapper } from "./Carts.styles";

const Carts = () => {
  const { pagination, setPage } = cartStore();

  const { currentPage, skip, limit } = pagination;

  const { data, isError, isPending, error } = useQuery({
    queryKey: ["carts", skip, limit],
    queryFn: () => basketService.getCartsInBasket(limit, skip),
  });

  if (isPending) {
    return <Loader fullPage message="Загрузка..." />;
  }

  if (isError) {
    return <ErrorBanner message={error.message} />;
  }

  const { total, carts } = data;
  const totalPages = Math.ceil(total / limit);

  return (
    <StyledWrapper>
      <ListOfCart isPending={isPending} carts={carts} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setPage}
      />
    </StyledWrapper>
  );
};

export default Carts;
