import React from 'react';
import { useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ContactForm } from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import css from './App.module.css';

export const App = () => {
  const contacts = useSelector(state => state.contacts.items);

  const handleContactExist = contactName => {
    toast.warn(`${contactName} is already in contacts.`);
  };

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>

      <ContactForm onContactExist={handleContactExist} />
      <h2>Contacts</h2>

      <Filter />

      {contacts.length > 0 ? (
        <ContactList />
      ) : (
        <p>No contacts found. Please add a contact.</p>
      )}

      <ToastContainer />
    </div>
  );
};
