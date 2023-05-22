import { useSelector } from 'react-redux';

import ContactListItem from 'components/ContactListItem';
import { contactsListFilter } from 'redux/filter/selectors';
import { StyledContactList } from './ContactList.styled';

const ContactList = () => {
  const filteredContactsList = useSelector(contactsListFilter);

  return (
    <StyledContactList>
      {filteredContactsList.map(({ name, number, id }) => (
        <ContactListItem
          key={id}
          name={name}
          number={number}
          id={id}
        ></ContactListItem>
      ))}
    </StyledContactList>
  );
};

export default ContactList;
