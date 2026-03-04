import { Fragment } from "react";
import type { ReactNode } from "react";

import { StyledWrapperCart } from "./ListOfItem.styles";

interface IListOfCartProps<T> {
  list: T[];
  renderItem: (item: T) => ReactNode;
}

const ListOfItem = <T,>({ renderItem, list }: IListOfCartProps<T>) => {
  return (
    <StyledWrapperCart>
      {list.map((item, index) => (
        <Fragment key={index}>{renderItem(item)}</Fragment>
      ))}
    </StyledWrapperCart>
  );
};

export { ListOfItem };
