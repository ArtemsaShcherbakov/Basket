import styled from "@emotion/styled";

const BREAKPOINTS = {
  mobile: "480px",
  tablet: "768px",
  desktop: "1024px",
} as const;

const GAP_CONTAINER = {
  small: "4px",
  medium: "6px",
  large: "8px",
} as const;

const SIZE = {
  small: "32px",
  medium: "40px",
  large: "48px",
} as const;

const SIZE_MOBILE = {
  small: "28px",
  medium: "36px",
  large: "40px",
} as const;

const FONT_SIZE = {
  small: "16px",
  medium: "18px",
  large: "20px",
} as const;

const FONT_SIZE_MOBILE = {
  small: "14px",
  medium: "16px",
  large: "18px",
} as const;

const PADDING = {
  small: "8px",
  medium: "12px",
  large: "16px",
} as const;

const PADDING_MOBILE = {
  small: "6px",
  medium: "8px",
  large: "12px",
} as const;

const COLORS = {
  primary: "#2563eb",
  primaryHover: "#1d4ed8",
  primaryLight: "#bfdbfe",
  primaryLightHover: "#dbeafe",
  textActive: "#ffffff",
  textInactive: "#1e40af",
  disabled: {
    bg: "#e2e8f0",
    text: "#94a3b8",
    border: "#e2e8f0",
  },
} as const;

const getBackgroundColor = (active?: boolean, disabled?: boolean) => {
  if (disabled) return COLORS.disabled.bg;

  if (active) return COLORS.primary;

  return "#ffffff";
};

const getTextColor = (active?: boolean, disabled?: boolean) => {
  if (disabled) return COLORS.disabled.text;

  if (active) return COLORS.textActive;

  return COLORS.textInactive;
};

const getBorderColor = (active?: boolean, disabled?: boolean) => {
  if (disabled) return COLORS.disabled.border;

  if (active) return COLORS.primary;

  return COLORS.primaryLight;
};

const getHoverBackground = (active?: boolean) =>
  active ? COLORS.primaryHover : COLORS.primaryLightHover;

const StyledPaginationContainer = styled.nav<{
  size: "small" | "medium" | "large";
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${({ size }) => GAP_CONTAINER[size]};
  padding: 16px;

  @media (max-width: ${BREAKPOINTS.tablet}) {
    gap: ${({ size }) => {
      const gap = parseInt(GAP_CONTAINER[size]);
      return `${Math.max(gap - 2, 2)}px`;
    }};
    padding: 12px;
  }

  @media (max-width: ${BREAKPOINTS.mobile}) {
    gap: 2px;
    padding: 8px;
    flex-wrap: wrap;
  }
`;

const StyledPaginationList = styled.ul`
  display: flex;
  align-items: center;
  gap: inherit;
  margin: 0;
  padding: 0;
  list-style: none;

  @media (max-width: ${BREAKPOINTS.mobile}) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const StyledPaginationItem = styled.li`
  display: inline-flex;

  @media (max-width: ${BREAKPOINTS.mobile}) {
    margin: 2px;
  }
`;

const StyledPageButton = styled.button<{
  active?: boolean;
  size: "small" | "medium" | "large";
  disabled?: boolean;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: ${({ size }) => SIZE[size]};
  height: ${({ size }) => SIZE[size]};
  padding: 0 ${({ size }) => PADDING[size]};
  font-size: ${({ size }) => FONT_SIZE[size]};
  font-weight: ${({ active }) => (active ? "600" : "400")};
  color: ${({ active, disabled }) => getTextColor(active, disabled)};
  background-color: ${({ active, disabled }) =>
    getBackgroundColor(active, disabled)};
  border: 2px solid
    ${({ active, disabled }) => getBorderColor(active, disabled)};
  border-radius: 8px;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  transition: all 0.2s ease-in-out;
  user-select: none;

  @media (max-width: ${BREAKPOINTS.tablet}) {
    min-width: ${({ size }) => {
      const size_ = parseInt(SIZE[size]);
      return `${Math.max(size_ - 4, 32)}px`;
    }};
    height: ${({ size }) => {
      const size_ = parseInt(SIZE[size]);
      return `${Math.max(size_ - 4, 32)}px`;
    }};
    padding: 0
      ${({ size }) => {
        const padding = parseInt(PADDING[size]);
        return `${Math.max(padding - 2, 6)}px`;
      }};
    border-width: 1.5px;
  }

  @media (max-width: ${BREAKPOINTS.mobile}) {
    min-width: ${({ size }) => SIZE_MOBILE[size]};
    height: ${({ size }) => SIZE_MOBILE[size]};
    padding: 0 ${({ size }) => PADDING_MOBILE[size]};
    font-size: ${({ size }) => FONT_SIZE_MOBILE[size]};
    border-width: 1px;
    border-radius: 6px;

    /* Скрываем текст навигации на мобильных */
    ${({ children }) =>
      typeof children === "string" &&
      (children === "Предыдущая" ||
        children === "Следующая" ||
        children === "Первая" ||
        children === "Последняя") &&
      `
        span {
          display: none;
        }
    `}
  }

  &:hover:not(:disabled) {
    background-color: ${({ active }) => getHoverBackground(active)};
    border-color: ${COLORS.primary};

    /* Анимация только на десктопе */
    @media (min-width: ${BREAKPOINTS.desktop}) {
      transform: translateY(-2px);
      box-shadow:
        0 4px 6px -1px rgba(37, 99, 235, 0.1),
        0 2px 4px -1px rgba(37, 99, 235, 0.06);
    }
  }

  &:active:not(:disabled) {
    transform: translateY(0);
    box-shadow: none;
  }

  &:focus-visible {
    outline: none;
    ring: 2px solid ${COLORS.primary};
    ring-offset: 2px;
  }

  /* Для мобильных убираем сложные эффекты */
  @media (max-width: ${BREAKPOINTS.mobile}) {
    &:hover:not(:disabled) {
      transform: none;
      box-shadow: none;
    }
  }
`;

const StyledEllipsis = styled.span<{ size: "small" | "medium" | "large" }>`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: ${({ size }) => SIZE[size]};
  height: ${({ size }) => SIZE[size]};
  color: #1e40af;
  font-size: ${({ size }) => FONT_SIZE[size]};
  font-weight: 600;
  letter-spacing: 2px;

  @media (max-width: ${BREAKPOINTS.tablet}) {
    min-width: ${({ size }) => {
      const size_ = parseInt(SIZE[size]);
      return `${Math.max(size_ - 4, 32)}px`;
    }};
    height: ${({ size }) => {
      const size_ = parseInt(SIZE[size]);
      return `${Math.max(size_ - 4, 32)}px`;
    }};
  }

  @media (max-width: ${BREAKPOINTS.mobile}) {
    min-width: ${({ size }) => SIZE_MOBILE[size]};
    height: ${({ size }) => SIZE_MOBILE[size]};
    font-size: ${({ size }) => FONT_SIZE_MOBILE[size]};
  }
`;

const NAVIGATION_ICON_TRANCFORM = {
  prev: "rotate(-135deg)",
  next: "rotate(45deg)",
  first: "rotate(-135deg) scaleX(2)",
  last: "rotate(45deg) scaleX(2)",
};

const StyledNavigationIcon = styled.span<{
  direction: "prev" | "next" | "first" | "last";
}>`
  display: inline-block;
  width: 20px;
  height: 20px;
  position: relative;

  @media (max-width: ${BREAKPOINTS.mobile}) {
    width: 16px;
    height: 16px;
  }

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%)
      ${({ direction }) => NAVIGATION_ICON_TRANCFORM[direction]};
    width: 10px;
    height: 10px;
    border-top: 2px solid currentColor;
    border-right: 2px solid currentColor;

    @media (max-width: ${BREAKPOINTS.mobile}) {
      width: 8px;
      height: 8px;
      border-top-width: 1.5px;
      border-right-width: 1.5px;
    }
  }
`;

export {
  StyledPaginationContainer,
  StyledPaginationList,
  StyledPaginationItem,
  StyledPageButton,
  StyledNavigationIcon,
  StyledEllipsis,
};
