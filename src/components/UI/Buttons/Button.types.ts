import type { MouseEvent } from "react";

type ButtonType = "submit" | "reset" | "button" | undefined;

type EventButtonType = MouseEvent<HTMLButtonElement>;

interface IButtonProps {
  type: ButtonType;
  nameButton?: string;
  textButton?: string;
  classNameIcon?: string;
  ariaLabel?: string;
  handleOnClick?: (event: EventButtonType) => void;
  disabled?: boolean;
}

export type { IButtonProps, EventButtonType, ButtonType };
