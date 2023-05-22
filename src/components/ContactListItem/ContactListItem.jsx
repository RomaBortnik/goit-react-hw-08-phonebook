import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { deleteContact } from 'redux/contacts/operations';
import { Contact, ContactBtn } from './ContactListItem.styled';

const ContactListItem = ({ name, number, id }) => {
  const dispatch = useDispatch();
  return (
    <>
      <Contact>
        {name}: {number}
        <ContactBtn
          onClick={() => {
            toast.success(`${name} removed from the contact list.`);
            dispatch(deleteContact(id));
          }}
          type="button"
        >
          Delete
        </ContactBtn>
      </Contact>
      <ToastContainer autoClose={2000} theme="dark" />
    </>
  );
};

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default ContactListItem;
