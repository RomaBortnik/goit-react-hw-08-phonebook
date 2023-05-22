import { Routes, Route } from 'react-router-dom';
import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';

import SharedLayout from './SharedLayout';
import Loader from './Loader';
import { useAuth } from 'hooks/useAuth';
import { refreshUser } from 'redux/auth/operations';
import PrivateRoute from './PrivateRoute';
import RestrictedRoute from './RestrictedRoute';

const Home = lazy(() => import('../pages/Home'));
const Login = lazy(() => import('../pages/Login'));
const Register = lazy(() => import('../pages/Register'));
const Contacts = lazy(() => import('../pages/Contacts'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Loader />
  ) : (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />}></Route>
        <Route
          path="register"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<Register />} />
          }
        ></Route>
        <Route
          path="login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<Login />} />
          }
        ></Route>
        <Route
          path="contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<Contacts />} />
          }
        ></Route>
      </Route>
    </Routes>
  );
};
