import { FaUser, FaPhone } from 'react-icons/fa';
import css from './Contact.module.css';

const Contact = ({ contact, deleteContact }) => {
  return (
    <div>
      <p className={css.infoStyle}>
        <span><FaUser /> {contact.name}</span> <span><FaPhone /> {contact.number}</span>
        <button className={css.btn} onClick={() => deleteContact(contact.id)}>Delete</button>
      </p>
    </div>
  );
};

export default Contact;