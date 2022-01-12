import React, { Component } from 'react';
import toast, { Toaster } from 'react-hot-toast';

import AppTitle from 'components/AppTitile/AppTitle';
import ContactForm from 'components/ContactForm/ContactForm';
import Title from 'components/Title/Title';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const storageContacts = localStorage.getItem('contacts');
    const savedContacts = JSON.parse(storageContacts);

    console.log(savedContacts);

    if (savedContacts) {
      this.setState({ contacts: savedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  handleFilter = event => {
    const { value } = event.target;

    this.setState({ filter: value });
  };

  createNewContact = newContact => {
    const { contacts } = this.state;
    const unUniqueContact = contacts.some(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase(),
    );

    unUniqueContact
      ? toast.error(`"${newContact.name}" is already in contacts`)
      : this.setState(prevState => ({
          contacts: [newContact, ...prevState.contacts],
        }));
  };

  removeContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { contacts, filter } = this.state;

    const normalizedFilter = filter.toLowerCase();
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );

    return (
      <>
        <AppTitle title="Phonebook" />
        <ContactForm createContact={this.createNewContact} />
        <Title title="Contacts" />
        <Filter
          filter={filter}
          handleFilter={this.handleFilter}
          placeholder="Find contacts by name"
        />
        <ContactList
          filteredContacts={filteredContacts}
          deleteContact={this.removeContact}
        />
        <Toaster position="top-right" />
      </>
    );
  }
}

export default App;
