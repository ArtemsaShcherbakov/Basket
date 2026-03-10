import styled from "@emotion/styled";

const StyledWrapperCart = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 10px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }

  @media (max-width: 480px) {
    grid-column-gap: 5px;
    grid-row-gap: 5px;
  }
`;

export { StyledWrapperCart };
