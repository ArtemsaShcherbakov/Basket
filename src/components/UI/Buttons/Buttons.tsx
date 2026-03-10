import { LoaderIcon } from "./Buttons.icons";

import type { IButtonProps } from "./Button.types";

import { StyledButton } from "./Button.styles";

const Button = ({
  disabled = false,
  loading = false,
  type = "button",
  nameButton = "",
  textButton = "",
  onClick = () => {},
  ariaLabel = "",
}: IButtonProps) => {
  const content = loading ? <><LoaderIcon />{textButton}</>: textButton;

  return (
    <StyledButton
      type={type}
      name={nameButton}
      onClick={onClick}
      aria-label={ariaLabel || textButton}
      aria-busy={loading}
      disabled={disabled || loading}
    >
      {content}
    </StyledButton>
  );
};

export { Button };
