import { StyledTitle } from "./Title.styled";

interface ITitleProps {
  text: string;
}

const Title = ({ text }: ITitleProps) => <StyledTitle>{text}</StyledTitle>;

export { Title };
