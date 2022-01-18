import { useState } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { Form, Label, Input, AddButton } from './ContactForm.styled';

function ContactForm({ addNewContact }) {
  const [newContact, setNewContact] = useState({
    name: '',
    number: '',
  });

  function handleInput(event) {
    const { name, value } = event.target;
    setNewContact(prevContact => ({ ...prevContact, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    const { name, number } = newContact;
    const contactUpdating = {
      id: nanoid(5),
      name,
      number,
    };

    addNewContact(contactUpdating);
    setNewContact({ name: '', number: '' });
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        Name
        <Input
          type="text"
          name="name"
          value={newContact.name}
          onChange={handleInput}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Label>
      <Label>
        Number
        <Input
          type="tel"
          name="number"
          value={newContact.number}
          onChange={handleInput}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </Label>

      <AddButton type="submit">Add contact</AddButton>
    </Form>
  );
}

ContactForm.propTypes = {
  addNewContact: PropTypes.func.isRequired,
};

export default ContactForm;
