import styled from "@emotion/styled";

const StyledButton = styled.button`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  background-color: rgba(0, 91, 255, 1);
  color: rgba(255, 255, 255, 1);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 8px 16px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  transition:
    background-color 0.2s ease,
    opacity 0.2s ease,
    transform 0.1s ease;

  &:hover:enabled {
    background-color: rgba(37, 99, 235, 1);
    transform: translateY(-1px);
  }

  &:active:enabled {
    transform: translateY(0);
  }

  &:disabled,
  &[aria-busy="true"] {
    cursor: not-allowed;
    opacity: 0.6;
    background-color: rgba(148, 163, 184, 1);
  }
`;

export { StyledButton };
