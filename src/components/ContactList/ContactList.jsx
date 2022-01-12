import Contact from 'components/Contact/Contact';
import PropTypes from 'prop-types';
import { List, Item } from './ContactList.styled';

function ContactList({ filteredContacts, deleteContact }) {
  return (
    <List>
      {filteredContacts.map(contact => (
        <Item key={contact.id}>
          <Contact contact={contact} deleteContact={deleteContact} />
        </Item>
      ))}
    </List>
  );
}

ContactList.propTypes = {
  filteredContacts: PropTypes.array.isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export default ContactList;
