
import { useState, useEffect } from 'react';
function ContactForm({ onAddContact, editingContact, onUpdateContact }) {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const handleSubmit = (e) => {
  e.preventDefault();

  const newContact = {
    name: name,
    email: email,
    phone: phone
  };

  if (editingContact) {
    onUpdateContact({
      ...newContact,
      id: editingContact.id
    });
  } else {
    onAddContact(newContact);
  }

  setName('');
  setEmail('');
  setPhone('');
};
  useEffect(() => {
  if (editingContact) {
    setName(editingContact.name);
    setEmail(editingContact.email);
    setPhone(editingContact.phone);
  }
}, [editingContact]);

  return (
    <div className="contact-form">

      <h2>{editingContact ? 'Edit Contact' : 'Add New Contact'}</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="tel"
          placeholder="Enter Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />

        <button type="submit">
  {editingContact ? 'Update Contact' : 'Add Contact'}
</button>

      </form>

    </div>
  );
}

export default ContactForm;