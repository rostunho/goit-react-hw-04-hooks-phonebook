import React, { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

import AppTitle from 'components/AppTitile/AppTitle';
import ContactForm from 'components/ContactForm/ContactForm';
import Title from 'components/Title/Title';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';
import defaultContacts from './database/default-contacts.json';

function App() {
  const [contacts, setContacts] = useState(() => {
    const unparsedContacts = window.localStorage.getItem('contacts');
    const savedContacts = JSON.parse(unparsedContacts);

    return savedContacts ?? defaultContacts;
  });

  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  function handleFilter(event) {
    const { value } = event.target;
    setFilter(value);
  }

  function addNewContact(newContact) {
    const unUniqueContact = contacts.some(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase(),
    );

    if (unUniqueContact) {
      toast.error(`"${newContact.name}" is already in contacts`);
    } else {
      setContacts(prevContacts => [newContact, ...prevContacts]);
      toast.success(`"${newContact.name}" added to your contacts`);
    }
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

  // const filteredContacts = useMemo(() => {
  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(normalizedFilter),
  //   );
  // }, [contacts, normalizedFilter]);

  return (
    <>
      <AppTitle title="Phonebook" />
      <ContactForm addNewContact={addNewContact} />
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
