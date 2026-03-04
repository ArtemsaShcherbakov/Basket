import type { PropsWithChildren } from "react";

import { StyledCard } from "./Card.styles";

interface ICardProps {
  className?: string;
  onClick?(): void;
}

const Card = ({
  children,
  className,
  onClick,
}: PropsWithChildren<ICardProps>) => (
  <StyledCard onClick={onClick} className={className}>
    {children}
  </StyledCard>
);

export { Card };
