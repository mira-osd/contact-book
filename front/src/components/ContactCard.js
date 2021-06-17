import React, {useState, useEffect } from 'react';
import api from "../api/contact";
import EditContact from './EditContact';

const ContactCard = (props) => {
    // const {id, firstname, lastname, email, birthday, infos} = props.contact;
    const [clicked, setClicked] = useState(false);
    // const [contacts, setContacts] = useState([]);
    const [id, setId] = useState(props.contact.id);
    const [firstname, setFirstname] = useState(props.contact.firstname);
    const [lastname, setLastname] = useState(props.contact.lastname);
    const [birthday, setBirthday] = useState(props.contact.birthday);
    const [email, setEmail] = useState(props.contact.email);
    const [infos, setInfos] = useState(props.contact.infos);
    
    const openContact = () => {
        setClicked({
          clicked: true,
        });
    }

    const updateContact = async (contact) => {
        const res = await api.put(`/contacts/${contact.id}`, contact);
        const {id, firstname, lastname, email, birthday, infos} = res.data;
        setFirstname(firstname);
        setLastname(lastname); 
        setBirthday(birthday);
        setEmail(email); 
        setInfos(infos);
        // contacts.push(res.data);
        // setContacts(contacts.map(contact => {
        //     return contact.id === id ? contact : {...res.data};
        // }));
        // setContacts([...contacts, res.data]);
    };

    useEffect(() => {
    }, [firstname, lastname, infos, email, birthday, id]);

    return (
        <div> 
            <div onClick={openContact}>
                <div>
                    <p>Firstname :</p> 
                    <p>{firstname}</p>
                </div>
                <div>
                    <p>Lastname :</p>
                    <p>{lastname}</p>
                </div>
                <div>
                    <p>Email :</p> 
                    <p>{email}</p>
                </div>
                <div>
                    <p>Birthday :</p>
                    <p>{birthday}</p> 
                </div>  
                <div>  
                    <p>Infos :</p>          
                    <p>{infos}</p>
                </div>
                
                {/* <div>
                    {
                        contacts.length > 0 ? contacts[contacts.length - 1].firstname : firstname 
                    }
                </div>
                <div>
                    {
                        contacts.length > 0 ? contacts[contacts.length - 1].lastname : lastname
                    }
                </div>
                <div>
                    {
                        contacts.length > 0 ? contacts[contacts.length - 1].email : email
                    }
                </div>
                <div>
                    {
                        contacts.length > 0 ?  contacts[contacts.length - 1].birthday : birthday
                    }  
                </div>  
                <div>            
                    {
                        contacts.length > 0 ? contacts[contacts.length - 1].infos : infos
                    }  
                </div> */}
            </div>
            {clicked && <EditContact firstname={firstname} lastname={lastname} infos={infos} id={id} birthday={birthday} email={email} updateContact={updateContact}/>}
        </div>
    );
}

export default ContactCard;