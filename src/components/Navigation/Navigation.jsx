import { StyledNavLink, MainNav } from './Navigation.styled';

const Navigation = () => {
  return (
    <MainNav>
      <StyledNavLink to="/">Home</StyledNavLink>
      <StyledNavLink to="/contacts">Contacts</StyledNavLink>
    </MainNav>
  );
};

export default Navigation;
