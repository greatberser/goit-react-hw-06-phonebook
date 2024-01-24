import { useDispatch, useSelector } from 'react-redux';
import { Contact } from 'components/Contact/Contact';
import { deleteContact } from '../../redux/contactSlice';
import { getFilter, getContacts } from '../../redux/selectors';
import css from './ContactList.module.css';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul className={css.list}>
      {filteredContacts.map(contact => (
        <Contact
          key={contact.id}
          contact={contact}
          onClickDelBtn={() => dispatch(deleteContact(contact.id))}
        />
      ))}
    </ul>
  );
};