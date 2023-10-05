import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const AuthContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 180px;

  @media (min-width: 768px) {
    width: 280px;
  }
`;

export const StyledRegister = styled(NavLink)`
  font-size: 16px;
  line-height: 1.2;
  padding: 4px 16px;
  color: #000;
  border-radius: 12px;
  background-image: linear-gradient(
    to right,
    rgb(173, 243, 222),
    rgb(173, 243, 237)
  );
  transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
      0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  }

  @media (min-width: 768px) {
    padding: 4px 36px;
    font-size: 18px;
  }
`;

export const StyledLogin = styled(StyledRegister)`
  color: black;
  border: 1px solid #000;
  background-color: #000;
  background-image: none;

  color: #fff;
  transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;
