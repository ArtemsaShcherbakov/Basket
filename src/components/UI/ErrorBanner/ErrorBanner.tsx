import { useEffect, useState } from "react";

import {
  StyledBannerContainer,
  StyledIconWrapper,
  StyledContentWrapper,
  StyledTitle,
  StyledMessage,
  StyledCloseButton,
} from "./ErrorBanner.styles";

const ErrorIcon = () => (
  <svg viewBox="0 0 24 24">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
  </svg>
);

const CloseIcon = () => (
  <svg viewBox="0 0 24 24">
    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
  </svg>
);

export interface ErrorBannerProps {
  title?: string;
  message: string;
  onClose?: () => void;
  autoHideDuration?: number;
  showIcon?: boolean;
  className?: string;
}

const ErrorBanner = ({
  title,
  message,
  onClose,
  autoHideDuration,
  showIcon = true,
  className,
}: ErrorBannerProps) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isExiting, setIsExiting] = useState(false);

  // Автоматическое скрытие
  useEffect(() => {
    if (autoHideDuration && autoHideDuration > 0) {
      const timer = setTimeout(() => {
        handleClose();
      }, autoHideDuration);

      return () => clearTimeout(timer);
    }
  }, [autoHideDuration]);

  const handleClose = () => {
    setIsExiting(true);

    setTimeout(() => {
      setIsVisible(false);
      onClose?.();
    }, 300);
  };

  if (!isVisible) return null;

  return (
    <StyledBannerContainer isExiting={isExiting} className={className}>
      {showIcon && (
        <StyledIconWrapper>
          <ErrorIcon />
        </StyledIconWrapper>
      )}
      <StyledContentWrapper>
        <StyledTitle>{title || "Ошибка"}</StyledTitle>
        <StyledMessage>{message}</StyledMessage>
      </StyledContentWrapper>
      {onClose && (
        <StyledCloseButton onClick={handleClose} aria-label="Закрыть">
          <CloseIcon />
        </StyledCloseButton>
      )}
    </StyledBannerContainer>
  );
};

export { ErrorBanner };
