import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';
import Loader from './Loader';
import defaultImage from '../images/defaultImage.png';
import { fetchContacts } from 'redux/operations';
import { getIsLoading, getError } from 'redux/selectors';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      {isLoading && !error && <Loader />}
      {error && <img src={defaultImage} alt="Something went wrong"></img>}
      {!error && (
        <>
          <h1 className="title">Phonebook</h1>
          <ContactForm></ContactForm>
          <h2 className="title">Contacts</h2>
          <Filter></Filter>
          <ContactList></ContactList>
        </>
      )}
    </>
  );
};
