function ContactCard({ contact, onDeleteContact, onEditContact }) {
  return (
    <div className="contact-card">
      <h3>{contact.name}</h3>

      <p>Email: {contact.email}</p>
      <p>Phone: {contact.phone}</p>

      <button onClick={() => onEditContact(contact)}>
        Edit
      </button>

      <button onClick={() => onDeleteContact(contact.id)}>
        Delete
      </button>
    </div>
  );
}

export default ContactCard;