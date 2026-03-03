import type { PropsWithChildren } from "react";

import { StyledCard } from "./Card.styles";

interface ICardProps {
  className?: string;
}

const Card = ({ children, className }: PropsWithChildren<ICardProps>) => (
  <StyledCard className={className}>{children}</StyledCard>
);

export { Card };
