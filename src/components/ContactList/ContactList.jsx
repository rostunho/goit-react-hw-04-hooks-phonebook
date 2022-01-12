import Contact from 'components/Contact/Contact';
import PropTypes from 'prop-types';
import { List, Item } from './ContactList.styled';

function ContactList({ filteredContacts, deleteContact }) {
  return (
    <List>
      {filteredContacts.map(({ id, name, number }) => (
        <Item key={id}>
          <Contact
            name={name}
            number={number}
            id={id}
            deleteContact={deleteContact}
          />
          {/* {name}: {number} */}
        </Item>
      ))}
    </List>
  );
}

ContactList.propTypes = {
  filteredContacts: PropTypes.array.isRequired,
};

export default ContactList;
