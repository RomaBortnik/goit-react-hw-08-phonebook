import styled from 'styled-components';

export const StyledContactList = styled.ul`
  font-weight: 700;
  border-radius: 12px;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 12px;
    grid-row-gap: 12px;
  }

  @media (min-width: 1280px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;
