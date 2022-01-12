import React, { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { nanoid } from 'nanoid';

import AppTitle from 'components/AppTitile/AppTitle';
import ContactForm from 'components/ContactForm/ContactForm';
import Title from 'components/Title/Title';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';

function App() {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [newContact, setNewContact] = useState({
    name: '',
    number: '',
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const unparsedContacts = window.localStorage.getItem('contacts');
    const savedContacts = JSON.parse(unparsedContacts);

    console.log(savedContacts);

    savedContacts && setContacts(savedContacts);
  }, []);

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  function handleInput(event) {
    const { name, value } = event.target;
    const contactUpdaiting = { id: nanoid(5), [name]: value };

    setNewContact(prevContact => ({
      ...prevContact,
      ...contactUpdaiting,
    }));
  }

  function handleFilter(event) {
    const { value } = event.target;
    setFilter(value);
  }

  function addNewContact(event) {
    event.preventDefault();

    const unUniqueContact = contacts.some(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase(),
    );

    unUniqueContact
      ? toast.error(`"${newContact.name}" is already in contacts`)
      : setContacts(prevContacts => [newContact, ...prevContacts]);

    setNewContact({ name: '', number: '' });
  }

  function removeContact(contactId) {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== contactId),
    );
  }

  const normalizedFilter = filter.toLowerCase();
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter),
  );

  return (
    <>
      <AppTitle title="Phonebook" />
      <ContactForm
        newContact={newContact}
        onInput={handleInput}
        onSubmit={addNewContact}
      />
      <Title title="Contacts" />
      <Filter
        filter={filter}
        handleFilter={handleFilter}
        placeholder="Find contacts by name"
      />
      <ContactList
        filteredContacts={filteredContacts}
        deleteContact={removeContact}
      />
      <Toaster position="top-right" />
    </>
  );
}

export default App;
