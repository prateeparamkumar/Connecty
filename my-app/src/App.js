import { useState } from 'react';
import './App.css';

import Header from './components/Header';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';

function App() {

  const [contacts, setContacts] = useState([]);
  const [editingContact, setEditingContact] = useState(null);

  const addContact = (newContact) => {
    const contactWithId = {
      ...newContact,
      id: Date.now()
    };

    setContacts([...contacts, contactWithId]);
  };

  const deleteContact = (id) => {
  const updatedContacts = contacts.filter(
    (contact) => contact.id !== id
  );

  setContacts(updatedContacts);
  
};
const editContact = (contact) => {
  setEditingContact(contact);
};

const updateContact = (updatedContact) => {
  const updatedContacts = contacts.map((contact) =>
    contact.id === updatedContact.id ? updatedContact : contact
  );

  setContacts(updatedContacts);
  setEditingContact(null);
};

  return (
    <div className="app">

      <Header />

      <main className="main-container">

        <div className="welcome-section">
          <h1>Manage Your Contacts</h1>
          <p>Keep all your important contacts in one place.</p>
        </div>

        <ContactForm
  onAddContact={addContact}
  editingContact={editingContact}
  onUpdateContact={updateContact}
/>

        <ContactList
  contacts={contacts}
  onDeleteContact={deleteContact}
  onEditContact={editContact}
/>

      </main>

    </div>
  );
}


export default App;