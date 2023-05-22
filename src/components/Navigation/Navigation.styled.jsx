import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledNavLink = styled(NavLink)`
  position: relative;
  font-weight: 500;
  font-size: 20px;
  padding: 8px 4px;
  color: #000;
  margin-right: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  overflow: hidden;

  &::after {
    position: absolute;
    bottom: 0;
    content: '';
    display: inline-block;
    width: 100%;
    height: 2px;
    background-color: #000;
    transform: translateX(-100%);
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  &:hover::after,
  &.active::after {
    transform: translateX(0);
  }
`;

export const MainNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
`;
