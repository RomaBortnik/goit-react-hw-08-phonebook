import AuthNav from 'components/AuthNav';
import Navigation from 'components/Navigation';
import { Container } from 'components/SharedLayout/SharedLayout.styled';
import UserMenu from 'components/UserMenu';
import { useAuth } from 'hooks/useAuth';

import { Header, NavContainer } from './AppBar.styled';

const AppBar = () => {
  const { isLoggedIn } = useAuth();
  return (
    <Header>
      <Container>
        <NavContainer>
          <Navigation></Navigation>
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </NavContainer>
      </Container>
    </Header>
  );
};

export default AppBar;
