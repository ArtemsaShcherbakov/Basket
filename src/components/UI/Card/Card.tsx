import type { PropsWithChildren } from "react";

import { StyledCard } from "./Card.styles";

interface ICardProps {
  styles?: any;
}

const Card = ({ children, styles }: PropsWithChildren<ICardProps>) => (
  <StyledCard {...styles}>{children}</StyledCard>
);

export { Card };
