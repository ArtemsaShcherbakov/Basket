import { StyledRow, StyledLabel, StyledValue } from "./TextRow.styles";

interface ITextRowProps {
  label?: string;
  value?: string;
  isTotal?: boolean;
}

const TextRow = ({ label, value, isTotal = false }: ITextRowProps) => (
  <StyledRow total={isTotal}>
    <StyledLabel>{label}</StyledLabel>
    <StyledValue>{value}</StyledValue>
  </StyledRow>
);

export { TextRow };
