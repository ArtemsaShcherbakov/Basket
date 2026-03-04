import styled from "@emotion/styled";

const StyledRow = styled.div<{ total?: boolean; discount?: boolean }>`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 4px 0;

  ${({ total }) =>
    total &&
    `
    margin-top: 8px;
    padding-top: 8px;
    border-top: 1px solid #e2e8f0;
  `}

  ${({ discount }) =>
    discount &&
    `
    background: #dbeafe;
    padding: 6px 12px;
    margin: 4px -12px;
    border-radius: 6px;
  `}
`;

const StyledLabel = styled.span`
  font-size: 14px;
  color: #64748b;
  font-weight: 500;
`;

const StyledValue = styled.span`
  font-size: 14px;
  color: #1e293b;
  font-weight: 600;
  text-align: right;
`;

export { StyledRow, StyledLabel, StyledValue };
