
import Contact from '../Contact/Contact';

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <div>
      {contacts.map((contact) => (
        <Contact key={contact.id} contact={contact} deleteContact={deleteContact} />
      ))}
    </div>
  );
};

export default ContactList;
