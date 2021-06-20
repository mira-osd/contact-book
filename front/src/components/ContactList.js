import React, {useRef} from 'react';
import ContactCard from './ContactCard';
import './App.css';

const ContactList = (props) => {
  const ref = useRef(""); 

  const renderContactList = props.contacts.map((contact) => {
    return (
      <ContactCard
        contact={contact}
        key={contact.id}
      />
    );
  });

  const getTerm = () => {
    props.searchKey(ref.current.value);
  }

  return (
    <div className="contactList">
      <input
        type="text"
        placeholder={props.placeholder}
        value={props.term}
        onChange={getTerm}
        ref={ref}
        className="searchBar"
      />
      <div>
      {renderContactList.length > 0 ? renderContactList : <p className="no-contact">Aucun contact</p>}  
      </div>
    </div>
    )
};
  
export default ContactList;