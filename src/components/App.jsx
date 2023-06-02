import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { persistor } from './store/store';
import { PersistGate } from 'redux-persist/integration/react';
import { ContactForm } from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import css from './App.module.css';

export const App = () => {
  const contacts = useSelector((state) => state.contacts.items);

  useEffect(() => {
    persistor.persist();
  }, []);

  return (
    <PersistGate loading={null} persistor={persistor}>
      <div className={css.container}>
        <h1>Phonebook</h1>

        <ContactForm />
        <h2>Contacts</h2>

        <Filter />

        {contacts.length > 0 ? (
          <ContactList />
        ) : (
          <p>No contacts found. Please add a contact.</p>
        )}
      </div>
    </PersistGate>
  );
};
