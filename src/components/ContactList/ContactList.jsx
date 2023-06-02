import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../store/contactsSlice';
import css from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector((state) => state.contacts.items);
  const dispatch = useDispatch();

  const delContact = (id) => {
    dispatch(deleteContact(id));
  };
  
     return (
    <ul className={css.list}>
      {contacts.map(contact => {
        return (
          <li className={css.item} key={contact.id}>
            {contact.name}: {contact.number}
             <button onClick={() =>  delContact(contact.id)}>Delete</button>
          </li>
        );
      })}
    </ul>
  );
};


export default ContactList;
