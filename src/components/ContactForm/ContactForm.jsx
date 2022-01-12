import PropTypes from 'prop-types';
import { Form, Label, Input, AddButton } from './ContactForm.styled';

function ContactForm({ newContact, onInput, onSubmit }) {
  return (
    <Form onSubmit={onSubmit}>
      <Label>
        Name
        <Input
          type="text"
          name="name"
          value={newContact.name}
          onChange={onInput}
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
          onChange={onInput}
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
  newContact: PropTypes.object.isRequired,
  onInput: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
