import AppBar from 'components/AppBar';
import { Outlet } from 'react-router-dom';

const SharedLayout = () => {
  return (
    <>
      <AppBar></AppBar>
      <Outlet></Outlet>
    </>
  );
};

export default SharedLayout;
