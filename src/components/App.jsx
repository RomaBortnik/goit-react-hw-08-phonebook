import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import SharedLayout from './SharedLayout';
import Home from 'pages/Home';
import Login from 'pages/Login';
import Register from 'pages/Register';
import Contacts from 'pages/Contacts';
import Loader from './Loader';
import { useAuth } from 'hooks/useAuth';
import { refreshUser } from 'redux/auth/operations';

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
        <Route path="register" element={<Register />}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="contacts" element={<Contacts />}></Route>
      </Route>
    </Routes>
  );
};
