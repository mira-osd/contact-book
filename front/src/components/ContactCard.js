import React, {useState, useEffect } from 'react';
import api from "../api/contact";
import EditContact from './EditContact';
import './App.css';

const ContactCard = (props) => {
    const [clicked, setClicked] = useState(false);
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
    };
    const deleteContact = async (contact) => {
        const res = await api.delete(`/contacts/${contact.id}`, contact);
        const {id, firstname, lastname, email, birthday, infos} = res.data;
        setFirstname(firstname);
        setLastname(lastname); 
        setBirthday(birthday);
        setEmail(email); 
        setInfos(infos);
    };

    useEffect(() => {
    }, [firstname, lastname, infos, email, birthday, id]);

    return (
        <div> 
            <div onClick={openContact} className="card">
                <div className='contactInfo'>
                    <p>Prénom :</p>
                    <p>{firstname}</p>
                </div>
                <div className='contactInfo'>
                    { lastname.length > 0 ? <p>Nom :</p> : null }
                    <p>{lastname}</p>
                </div>
                <div className='contactInfo'>
                    <p>Email :</p> 
                    <p>{email}</p>
                </div>
                <div className='contactInfo'>
                    { birthday.length > 0 ? <p>Date de naissance :</p> : null }
                    <p>{birthday}</p> 
                </div>  
                <div className='contactInfo'>  
                    <p>Infos :</p>        
                    <p>{infos}</p>
                </div>
            </div>
            {clicked && <EditContact firstname={firstname} lastname={lastname} infos={infos} id={id} birthday={birthday} email={email} updateContact={updateContact} deleteContact={deleteContact}/>}
        </div>
    );
}

export default ContactCard;