import { useSelector } from 'react-redux';

import ContactListItem from 'components/ContactListItem';
import { contactsListFilter } from 'redux/filter/selectors';
import { StyledContactList } from './ContactList.styled';

const ContactList = () => {
  const filteredContactsList = useSelector(contactsListFilter);

  return (
    <StyledContactList>
      {filteredContactsList.map(({ name, phone, _id }) => (
        <ContactListItem
          key={_id}
          name={name}
          phone={phone}
          id={_id}
        ></ContactListItem>
      ))}
    </StyledContactList>
  );
};

export default ContactList;
