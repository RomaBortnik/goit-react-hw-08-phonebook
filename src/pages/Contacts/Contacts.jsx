import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';
import Loader from 'components/Loader';
import defaultImage from '../../images/defaultImage.png';
import { fetchContacts } from 'redux/contacts/operations';
import { getIsLoading, getError } from 'redux/contacts/selectors';
import { ContactsTitle } from './Contacts.styled';

const Contacts = () => {
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
          <ContactsTitle className="title">Phonebook</ContactsTitle>
          <ContactForm />
          <ContactsTitle className="title">Contacts</ContactsTitle>
          <Filter />
          <ContactList />
        </>
      )}
    </>
  );
};

export default Contacts;
