import AuthNav from 'components/AuthNav';
import Navigation from 'components/Navigation';
import { Container } from 'components/SharedLayout/SharedLayout.styled';
import UserMenu from 'components/UserMenu';

import { Header, NavContainer } from './AppBar.styled';

const AppBar = () => {
  return (
    <Header>
      <Container>
        <NavContainer>
          <Navigation></Navigation>
          <AuthNav></AuthNav>
          <UserMenu></UserMenu>
        </NavContainer>
      </Container>
    </Header>
  );
};

export default AppBar;
