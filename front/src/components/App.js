import React, { useState, useEffect, useCallback } from 'react';
import { uuid } from 'uuidv4';
import api from "../api/contact";
import './App.css';
import AddContact from './AddContact';
import ContactList from './ContactList';
import SearchBar from './SearchBar';

function App() {
  // const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);
  const [clicked, setClicked] = useState(false);

  const renderForm = useCallback(() => {
    setClicked({
      clicked: true,
    });
  }, [])

  const getContacts = async () => {
    const res = await api.get("/contacts");
    return res.data;
  }

  const contactHandler = async (contact) => {
    const req = {
      id: uuid(),
      ...contact
    }

    const res = await api.post("/contacts", req);
    console.log('res', res)
    setContacts([...contacts, res.data]);
  }

  // const removeContact = (id) => {
  //   const newContactList = contacts.filter((contact) => {
  //     return contact.id !== id;
  //   });

  //   setContacts(newContactList);
  // };

  useEffect(() => {
    // const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    // if (retriveContacts) setContacts(retriveContacts);
    const getAllContacts = async () => {
      const allContacts = await getContacts();
      console.log('all', allContacts);
      if(allContacts) setContacts(allContacts);
    }

    getAllContacts();
  }, []);

  useEffect(() => {
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
