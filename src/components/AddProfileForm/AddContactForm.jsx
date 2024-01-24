import React from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactSlice';
import css from './AddContactForm.module.css';

export const AddContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmitForm = evt => {
    evt.preventDefault();
    const name = evt.target.elements.name.value;
    const number = evt.target.elements.number.value;

    dispatch(addContact(name, number));

    evt.target.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmitForm}>
      <label className={css.label}>
        <span>Name: </span>
        <input
          type="text"
          placeholder="Name"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          required
        />
      </label>

      <label className={css.label}>
        <span>Number: </span>
        <input
          type="tel"
          placeholder="111-11-11"
          name="number"
          title="Number may contain only numbers and dashes. For example 111-11-11"
          required
        />
      </label>
      <button className={css.submit} type="submit">
        Add New Profile
      </button>
    </form>
  );
};
