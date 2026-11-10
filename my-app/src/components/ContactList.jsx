import ContactCard from './ContactCard';

function ContactList({ contacts, onDeleteContact, onEditContact }) {
return ( <div className="contact-list" id="contacts"> <h2>My Contacts</h2>

```
  {contacts.length === 0 ? (
    <p>No contacts added yet!</p>
  ) : (
    contacts.map((contact) => (
      <ContactCard
        key={contact.id}
        contact={contact}
        onDeleteContact={onDeleteContact}
        onEditContact={onEditContact}
      />
    ))
  )}
</div>


);
}

export default ContactList;
