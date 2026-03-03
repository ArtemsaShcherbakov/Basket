import type { IButtonProps } from "./Button.types";

import { StyledCard } from "./Button.styles";

const Button = ({
  type,
  nameButton,
  textButton,
  handleOnClick,
  ariaLabel,
  disabled,
}: IButtonProps) => (
  <StyledCard
    type={type}
    name={nameButton}
    onClick={handleOnClick}
    aria-label={ariaLabel || textButton}
    disabled={disabled}
  >
    {textButton}
  </StyledCard>
);

export { Button };
