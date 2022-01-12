import PropTypes from 'prop-types';
import { Card, Info, Name, Number, DeleteButton } from './Contact.styled';
import { CgProfile } from 'react-icons/cg';
import { IoMdRemove } from 'react-icons/io';
function Contact({ name, number, id, deleteContact }) {
  return (
    <Card>
      <CgProfile size="50px" color="var(--accent-color)" />

      <Info>
        <Name>{name} </Name>
        <Number>{number}</Number>
      </Info>

      <DeleteButton
        type="button"
        onClick={() => deleteContact(id)}
        aria-label="Remove contact"
      >
        <IoMdRemove size="25px" color="#fff" />
      </DeleteButton>
    </Card>
  );
}

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default Contact;
