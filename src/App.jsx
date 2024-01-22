import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AddContactForm } from 'components/AddProfileForm/AddContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { addContact, deleteContact } from './redux/contactSlice'; 
import { updateFilter } from './redux/filterSlice'

export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleAddProfile = (formData) => {
    const existingContact = contacts.find(
      (contact) => contact.name.toLowerCase() === formData.name.toLowerCase()
    );

    if (existingContact) {
      alert(`${formData.name} is already in contacts!`);
      return;
    }

    dispatch(addContact({ ...formData, id: Math.random().toString() }));
  };

  const handleDeleteProfile = (contactId) => {
    dispatch(deleteContact(contactId));
  };

  const handleInputFilter = (evt) => {
    dispatch(updateFilter(evt.target.value));
  };

  const filterContacts = () => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const filteredContacts = filterContacts();

  return (
    <div className="container">
      <h2>Phonebook</h2>
      <AddContactForm handleAddProfile={handleAddProfile} />

      <h2>Contacts</h2>
      <Filter filter={filter} handleInputFilter={handleInputFilter} />

      {filteredContacts.length > 0 && (
        <ContactList
          contacts={filteredContacts}
          handleProfileDelete={handleDeleteProfile}
          title="Contacts"
        />
      )}
    </div>
  );
};
