import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const StyledLoaderWrapper = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  svg {
    animation: ${spin} 0.8s linear infinite;
  }
`;

const LoaderIcon = () => (
  <StyledLoaderWrapper>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="16"
      height="16"
    >
      <circle
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
        fill="none"
        opacity="0.25"
      />
      <path
        fill="currentColor"
        opacity="0.75"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
      />
    </svg>
  </StyledLoaderWrapper>
);

export { LoaderIcon };