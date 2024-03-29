import styled from 'styled-components';

export const FilterInput = styled.input`
  margin-top: 4px;
  width: 100%;
  height: 24px;
  font-size: 16px;
  padding: 12px;
  font-weight: 400;
  border: none;
  outline: none;
  border-radius: 4px;
  transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:focus {
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
      0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  }

  @media (min-width: 768px) {
    height: 30px;
    font-size: 18px;
  }
`;

export const FilterLabel = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 18px;
  margin-bottom: 24px;
  padding: 12px 16px;
  border-radius: 12px;
  cursor: pointer;
  background-color: rgb(187, 192, 192, 0.1);

  @media (min-width: 768px) {
    font-size: 20px;
    margin-bottom: 40px;
    width: 360px;
  }

  @media (min-width: 1280px) {
    width: 480px;
  }
`;
