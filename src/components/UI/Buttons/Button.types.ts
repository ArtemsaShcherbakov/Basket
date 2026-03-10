import type { MouseEvent } from "react";

type ButtonType = "submit" | "reset" | "button" | undefined;

type EventButtonType = MouseEvent<HTMLButtonElement>;

interface IButtonProps {
  loading?: boolean;
  disabled?: boolean;
  type: ButtonType;
  nameButton?: string;
  textButton?: string;
  classNameIcon?: string;
  ariaLabel?: string;
  onClick?: (event: EventButtonType) => void;
}

export type { IButtonProps, EventButtonType, ButtonType };
