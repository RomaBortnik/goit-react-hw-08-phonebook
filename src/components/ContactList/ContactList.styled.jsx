import styled from 'styled-components';

export const StyledContactList = styled.ul`
  font-weight: 700;
  border-radius: 12px;

  @media (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-left: calc(-1 * 8px);
    margin-top: calc(-1 * 8px);
  }
`;
