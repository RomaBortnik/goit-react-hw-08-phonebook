import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';
import Loader from 'components/Loader';
import defaultImage from '../../images/defaultImage.png';
import { fetchContacts } from 'redux/contacts/operations';
import { getIsLoading, getError, getContacts } from 'redux/contacts/selectors';
import {
  ContactsTitle,
  ContactsWrapper,
  ContactsContainer,
} from './Contacts.styled';

const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  const contacts = useSelector(getContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      {isLoading && !error && <Loader />}
      {error && <img src={defaultImage} alt="Something went wrong"></img>}
      {!error && (
        <>
          <ContactsWrapper>
            <ContactsContainer>
              <ContactsTitle>Contacts</ContactsTitle>
              <Filter />
            </ContactsContainer>

            <ContactsContainer>
              <ContactsTitle>Phonebook</ContactsTitle>
              <ContactForm />
            </ContactsContainer>
          </ContactsWrapper>

          {contacts.length !== 0 && (
            <ContactsContainer>
              <ContactsTitle>Contact list</ContactsTitle>
              <ContactList />
            </ContactsContainer>
          )}
        </>
      )}
    </>
  );
};

export default Contacts;
