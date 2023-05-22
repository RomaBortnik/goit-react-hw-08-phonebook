import { useAuth } from 'hooks/useAuth';
import { StyledNavLink, MainNav } from './Navigation.styled';

const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <MainNav>
      <StyledNavLink to="/">Home</StyledNavLink>
      {isLoggedIn && <StyledNavLink to="/contacts">Contacts</StyledNavLink>}
    </MainNav>
  );
};

export default Navigation;
