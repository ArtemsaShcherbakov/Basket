import styled from "@emotion/styled";

const StyledWrapper = styled.section({
  width: "80%",
});

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledDivider = styled.div`
  height: 1px;
  background: #e2e8f0;
  margin: 12px 0;
`;

export { StyledHeader, StyledDivider, StyledWrapper };
