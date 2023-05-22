import styled from 'styled-components';

export const FilterInput = styled.input`
  margin-top: 4px;
  width: 400px;
  height: 30px;
  font-size: 18px;
  font-weight: 400;
  border: none;
  outline: none;
  border-radius: 4px;
  transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:focus {
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
      0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  }
`;

export const FilterLabel = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 20px;
  margin-bottom: 40px;
  padding: 12px 16px;
  border-radius: 12px;
  cursor: pointer;
  background-color: rgb(187, 192, 192, 0.1);
`;
