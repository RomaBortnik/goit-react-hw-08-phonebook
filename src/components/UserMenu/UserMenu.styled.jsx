import styled from 'styled-components';

export const UserMenuContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const UserMenuText = styled.p`
  margin-right: 4px;
  font-size: 12px;
  font-weight: 700;
  text-align: center;

  @media (min-width: 768px) {
    margin-right: 12px;
    font-size: 18px;
    font-weight: 500;
  }
`;

export const UserMenuBtn = styled.button`
  padding: 2px 12px;
  border-radius: 12px;
  border: none;
  background-color: #000;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  color: #fff;
  text-decoration: none;
  cursor: pointer;
  font-size: 14px;
  line-height: 1.2;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;

  &:hover {
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
      0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  }

  @media (min-width: 768px) {
    padding: 4px 36px;
    font-size: 18px;
  }
`;
