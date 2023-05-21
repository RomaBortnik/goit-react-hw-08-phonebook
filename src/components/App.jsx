import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';

import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';
import Loader from './Loader';
import defaultImage from '../images/defaultImage.png';
import { fetchContacts } from 'redux/operations';
import { getIsLoading, getError } from 'redux/selectors';

import SharedLayout from './SharedLayout';
import Home from 'pages/Home';
import Login from 'pages/Login';
import Register from 'pages/Register';
import Contacts from 'pages/Contacts';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />}></Route>
          <Route path="register" element={<Register />}></Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="contacts" element={<Contacts />}></Route>
        </Route>
      </Routes>
      {/* {isLoading && !error && <Loader />}
      {error && <img src={defaultImage} alt="Something went wrong"></img>}
      {!error && (
        <>
          <h1 className="title">Phonebook</h1>
          <ContactForm></ContactForm>
          <h2 className="title">Contacts</h2>
          <Filter></Filter>
          <ContactList></ContactList>
        </>
      )} */}
    </>
  );
};
