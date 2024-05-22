import { useState, useEffect } from 'react';
import ContactForm from '../ContactForm/ContactForm';
import SearchBox from '../SearchBox/SearchBox';
import ContactList from '../ContactList/ContactList';
import initialContacts from '../contacts.json';
import css from './App.module.css';
import { nanoid } from 'nanoid';

export default function App() {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = JSON.parse(localStorage.getItem('contacts'));
    return savedContacts ? savedContacts : initialContacts;
  });
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = contact => {
    const newContact = { ...contact, id: nanoid() };
    setContacts(prevContacts => [...prevContacts, newContact]);
  };

  const deleteContact = contactId => {
    setContacts(prevContacts => prevContacts.filter(contact => contact.id !== contactId));
  };

  const resetContacts = () => {
    setContacts(initialContacts);
    localStorage.setItem('contacts', JSON.stringify(initialContacts));
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={css.appStyle}>
      <h1 className={css.titleStyle}>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <SearchBox setSearchTerm={setSearchTerm} />
      <ContactList contacts={filteredContacts} deleteContact={deleteContact} />
      <button onClick={resetContacts}>Reset Contacts</button>
    </div>
  );
}