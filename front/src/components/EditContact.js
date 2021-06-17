import React from 'react';
import './AddContact.css';

class EditContact extends React.Component {
    constructor(props) {
        super(props);
        const {id, firstname, lastname, email, birthday} = props;
        this.state = {
            id,
            firstname,
            lastname,
            email,
            birthday,
            isModalOpen: true
        }
    }

    update = (e) => {
        e.preventDefault();
        this.props.updateContact(this.state);
        this.setState({firstname: this.state.firstname, lastname: this.state.lastname, email: this.state.email, birthday: this.state.birthday});
        console.log('edit', this.state);
    }

    closeForm = () => {
        this.setState(prevState => ({
            isModalOpen: !prevState.isModalOpen
        }))
        console.log(this.state.isModalOpen);
    }

    // deleteContact = (id) => {
    //   props.getContactId(id);
    // };

    // FAIRE MARCHER BOUTON 'NEW CONTACT' SI ON DÉCIDE DE REOUVRIR LA FENETRE NOUVEAU CONTACT

    render() {
        return (
            <div className='form-contact'>
                {
                    this.state.isModalOpen && (
                        <>
                        <form onSubmit={this.update}>
                            <button className='close-btn' onClick={this.closeForm}>close</button>
                            <input type="text" name="firstname" placeholder="Prénom"
                                value={this.state.firstname}
                                onChange={(e) => this.setState({firstname: e.target.value})}
                            />
                            <input type="text" name="lastname" placeholder="Nom" 
                                value={this.state.lastname}
                                onChange={(e) => this.setState({lastname: e.target.value})} 
                            />
            
                            <input type="email" name="email" placeholder="Email" 
                                value={this.state.email}
                                onChange={(e) => this.setState({email: e.target.value})}
                            />
                            <input type="date" name="birthday"
                                value={this.state.birthday}
                                onChange={(e) => this.setState({date: e.target.value})}
                            />
                            {/* <textarea placeholder="Informations complémentaires..."/> */}
                            <button>Modifier</button>
                        </form>
                        </>
                    )
                }
            </div>
        );
    }
}

export default EditContact;