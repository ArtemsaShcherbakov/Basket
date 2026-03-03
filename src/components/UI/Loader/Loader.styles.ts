import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

const BORDER_SPINER = {
  small: "2px",
  medium: "3px",
  large: "4px",
};

const SIZE_SPINER = {
  small: "20px",
  medium: "40px",
  large: "60px",
};

const FONT_SIZE_MESSAGE = {
  small: "12px",
  medium: "14px",
  large: "16px",
};

const spinAnimation = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const StyledLoaderContainer = styled.div<{
  fullPage?: boolean;
  fullHeight?: boolean;
  backgroundColor?: string;
}>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ${({ fullPage }) =>
    fullPage &&
    `
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 9999;
  `}

  ${({ fullHeight }) =>
    fullHeight &&
    `
    min-height: 200px;
    width: 100%;
  `}
  
  background-color: ${({ backgroundColor }) =>
    backgroundColor || "transparent"};
`;

const StyledSpinner = styled.div<{
  size: "small" | "medium" | "large";
  color: string;
}>`
  display: inline-block;
  border: ${({ size }) => BORDER_SPINER[size]} solid
    ${({ color }) => `${color}33`};
  border-top: ${({ size }) => BORDER_SPINER[size]} solid ${({ color }) => color};
  border-radius: 50%;
  width: ${({ size }) => SIZE_SPINER[size]};
  height: ${({ size }) => SIZE_SPINER[size]};
  animation: ${spinAnimation} 0.8s linear infinite;
`;

const StyledMessage = styled.p<{ size: "small" | "medium" | "large" }>`
  margin: 12px 0 0 0;
  font-size: ${({ size }) => FONT_SIZE_MESSAGE[size]};
  color: #4b5563;
  font-weight: 400;
  text-align: center;
`;

export { StyledLoaderContainer, StyledSpinner, StyledMessage };
