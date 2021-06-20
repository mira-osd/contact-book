import React, { useState, useEffect, useCallback } from 'react';
import { uuid } from 'uuidv4';
import api from "../api/contact";
import './App.css';
import AddContact from './AddContact';
import ContactList from './ContactList';

function App() {
  const [contacts, setContacts] = useState([]);
  const [clicked, setClicked] = useState(false);
  const [search, setSearchTerm] = useState("");
  const [searchResult, setResult] = useState([]);

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

  const searchHandler = (searchTerm) => {
    setSearchTerm(searchTerm);
    if(searchTerm !== "") {
      const newList = contacts.filter((contact) => {
        return Object.values(contact)
        .join(" ")
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
      });
      setResult(newList); 
    } else {
      setResult(contacts);
    }
  }

  useEffect(() => {
    const getAllContacts = async () => {
      const allContacts = await getContacts();
      if(allContacts) setContacts(allContacts);
    }
    getAllContacts();
  }, []);

  useEffect(() => {
  }, [contacts]);

  return (
    <div>
      <div className='header'>
        <button onClick={renderForm}>
          Nouveau Contact
        </button>
      </div>
      { clicked && <AddContact contactHandler={contactHandler}/> }
      <ContactList 
        contacts={search.length < 1 ? contacts : searchResult} 
        term={search} 
        searchKey={searchHandler}
        placeholder="Rechercher un contact..."
      />
    </div>
  );
}

export default App;
