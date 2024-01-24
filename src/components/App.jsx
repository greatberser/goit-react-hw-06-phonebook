import React from 'react';
import { AddContactForm } from 'components/AddProfileForm/AddContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';

export const App = () => {
  return (
    <div className="container">
      <h1>Phonebook</h1>
      <AddContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};
