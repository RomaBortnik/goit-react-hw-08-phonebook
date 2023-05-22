import AppBar from 'components/AppBar';
import { Outlet } from 'react-router-dom';

import { Container } from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <>
      <AppBar></AppBar>
      <Container>
        <Outlet></Outlet>
      </Container>
    </>
  );
};

export default SharedLayout;
