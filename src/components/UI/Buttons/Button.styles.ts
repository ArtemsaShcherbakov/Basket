import styled from "@emotion/styled";

const StyledCard = styled.button({
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  backgroundColor: "rgba(0, 91, 255, 1)",
  color: "rgba(255, 255, 255, 1)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "8px 16px",
  borderRadius: "8px",
  border: "none",
  cursor: "pointer",
});

export { StyledCard };
