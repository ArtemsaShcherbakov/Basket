import { СardCart } from "./components/СardCart";

import type { ICart } from "../../../../types";

import { StyledWrapperCart } from "./ListOfCart.styles";

interface IListOfCartProps {
  isPending: boolean;
  carts: ICart[];
}

const ListOfCart = ({ carts }: IListOfCartProps) => {
  return (
    <StyledWrapperCart>
      {carts.map((cart) => (
        <СardCart key={cart.id} {...cart} />
      ))}
    </StyledWrapperCart>
  );
};

export { ListOfCart };
