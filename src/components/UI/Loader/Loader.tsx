import {
  StyledLoaderContainer,
  StyledSpinner,
  StyledMessage,
} from "./Loader.styles";

interface ILoaderProps {
  size?: "small" | "medium" | "large";
  color?: string;
  message?: string;
  fullPage?: boolean;
  fullHeight?: boolean;
  backgroundColor?: string;
  className?: string;
}

const Loader = ({
  size = "medium",
  color = "#2563eb",
  message,
  fullPage = false,
  fullHeight = false,
  backgroundColor,
  className,
}: ILoaderProps) => {
  return (
    <StyledLoaderContainer
      fullPage={fullPage}
      fullHeight={fullHeight}
      backgroundColor={backgroundColor}
      className={className}
    >
      <StyledSpinner size={size} color={color} />
      {message && <StyledMessage size={size}>{message}</StyledMessage>}
    </StyledLoaderContainer>
  );
};

export { Loader };
