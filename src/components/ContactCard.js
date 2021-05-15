import React from 'react';

const ContactCard = (props) => {
    const {firstname, lastname, email, birthday, infos} = props.contact;
    return (
        <div> 
            <div>
                {firstname}
                {lastname}
                {email}
                {birthday}
                {infos}
            </div>
        </div>
    );
}

export default ContactCard;