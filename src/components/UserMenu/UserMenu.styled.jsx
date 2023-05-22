import styled from 'styled-components';

export const UserMenuContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const UserMenuText = styled.p`
  margin-right: 12px;
`;

export const UserMenuBtn = styled.button`
  padding: 2px 36px;
  border-radius: 12px;
  border: none;
  background-color: #000;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  color: #fff;
  text-decoration: none;
  cursor: pointer;
  font-size: 18px;
  line-height: 1.5;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;

  &:hover {
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
      0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  }
`;
