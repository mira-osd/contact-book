import React from 'react';
import './AddContact.css';

class AddContact extends React.Component {
    state = {
        firstname: "",
        lastname: "",
        email: "",
        birthday: "",
        isModalOpen: true
    }

    add = (e) => {
        e.preventDefault();
        this.props.contactHandler(this.state);
        this.setState({firstname: "", lastname: "", email: "", birthday: ""});
        console.log('add', this.state);
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

    render() {
        console.log('birth', this.state.birthday);
        return (
            <div className='form-contact'>
                {
                    this.state.isModalOpen && (
                        <>
                        <form onSubmit={this.add}>
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
                                onChange={(e) => this.setState({birthday: e.target.value})}
                            />
                            {/* <textarea placeholder="Informations complémentaires..."/> */}
                            <button>Enregistrer</button>
                        </form>
                        </>
                    )
                }
            </div>
        );
    }
}

export default AddContact;