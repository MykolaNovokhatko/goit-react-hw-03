import css from './ContactList.module.css'
import Contact from '../Contact/Contact';

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ul  className={css.listStyle}>
      {contacts.map((contact) => (
        <li className={css.itemStyle} key={contact.id}>
        <Contact  contact={contact} deleteContact={deleteContact} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
