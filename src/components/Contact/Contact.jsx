
const Contact = ({ contact, deleteContact }) => {
  return (
    <div>
      <p>
        <span>{contact.name}</span>: <span>{contact.number}</span>
        <button onClick={() => deleteContact(contact.id)}>Delete</button>
      </p>
    </div>
  );
};

export default Contact;
