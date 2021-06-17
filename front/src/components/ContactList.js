import React from 'react';
import ContactCard from './ContactCard';

const ContactList = (props) => {
  const renderContactList = props.contacts.map((contact) => {
    return (
      <ContactCard
        contact={contact}
        key={contact.id}
      />
    );
  });

  return <div>{renderContactList}</div>;
};
  
export default ContactList;