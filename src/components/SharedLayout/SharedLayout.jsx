import AppBar from 'components/AppBar';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Container } from './SharedLayout.styled';
import Loader from 'components/Loader';

const SharedLayout = () => {
  return (
    <>
      <AppBar></AppBar>
      <Container>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Container>
    </>
  );
};

export default SharedLayout;
