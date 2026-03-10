import type { ReactNode, Key } from "react";

import { StyledWrapperCart } from "./ListOfItem.styles";

interface IListOfCartProps<T> {
  list: T[];
  renderItem: (item: T) => ReactNode;
  getKey?: (item: T, index: number) => Key;
}

const ListOfItem = <T,>({
  renderItem,
  list,
  getKey,
}: IListOfCartProps<T>) => {
  if(list.length === 0){
    return <div>No items</div>;
  }

  return (
    <StyledWrapperCart>
      {list.map((item, index) => {
        const key = getKey ? getKey(item, index) : index;

        return <div key={key}>{renderItem(item)}</div>;
      })}
    </StyledWrapperCart>
  );
};

export { ListOfItem };
