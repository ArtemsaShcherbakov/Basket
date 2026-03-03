import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

const slideIn = keyframes`
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const slideOut = keyframes`
  from {
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(100%);
    opacity: 0;
  }
`;

const StyledBannerContainer = styled.div<{
  isExiting: boolean;
}>`
  position: relative;
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 16px 20px;
  border-radius: 12px;
  animation: ${({ isExiting }) => (isExiting ? slideOut : slideIn)} 0.3s ease;

  background: linear-gradient(135deg, #fee2e2 0%, #fecaca 100%);
  border-left: 6px solid #dc2626;
  color: #991b1b;
  box-shadow: 0 4px 12px rgba(220, 38, 38, 0.15);
`;

const StyledIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  flex-shrink: 0;

  svg {
    width: 20px;
    height: 20px;
    fill: currentColor;
  }
`;

const StyledContentWrapper = styled.div`
  flex: 1;
`;

const StyledTitle = styled.h4`
  margin: 0 0 4px 0;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.4;
`;

const StyledMessage = styled.p`
  margin: 0;
  font-size: 14px;
  line-height: 1.5;
  opacity: 0.9;
`;

const StyledCloseButton = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  padding: 0;
  background: rgba(0, 0, 0, 0.05);
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s ease;

  svg {
    width: 16px;
    height: 16px;
    fill: currentColor;
    opacity: 0.7;
  }

  &:hover {
    background: rgba(0, 0, 0, 0.1);
    transform: scale(1.1);

    svg {
      opacity: 1;
    }
  }

  &:active {
    transform: scale(0.95);
  }
`;

export {
  StyledBannerContainer,
  StyledIconWrapper,
  StyledContentWrapper,
  StyledTitle,
  StyledMessage,
  StyledCloseButton,
};
