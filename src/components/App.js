import React, { useState, useEffect, useCallback } from 'react';
import { uuid } from 'uuidv4';
import './App.css';
import AddContact from './AddContact';
import ContactList from './ContactList';
import SearchBar from './SearchBar';

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);
  const [clicked, setClicked] = useState(false);

  const renderForm = useCallback(() => {
    setClicked({
      clicked: true,
    });
  }, [])

  const contactHandler = (contact) => {
    console.log('app contatc', contact);
    setContacts([...contacts, { id : uuid(), ...contact } ]);
    console.log(uuid());
  }

  // const removeContact = (id) => {
  //   const newContactList = contacts.filter((contact) => {
  //     return contact.id !== id;
  //   });

  //   setContacts(newContactList);
  // };

  useEffect(() => {
    const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retriveContacts) setContacts(retriveContacts);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div>
      <div className='header'>
        <SearchBar />
        <button onClick={renderForm}>
          New Contact
        </button>
      </div>
      { clicked && <AddContact contactHandler={contactHandler}/> }
      <ContactList contacts={contacts}/>
    </div>
  );
}

export default App;
