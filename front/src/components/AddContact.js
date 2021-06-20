import React from 'react';
import './Contact.css';
import MyImage from '../assets/close.svg';

class AddContact extends React.Component {
    state = {
        firstname: "",
        lastname: "",
        email: "",
        birthday: "",
        infos: "",
        isModalOpen: true
    }

    add = (e) => {
        e.preventDefault();
        this.props.contactHandler(this.state);
        this.setState({firstname: "", lastname: "", email: "", birthday: "", infos: ""});
    }

    closeForm = () => {
        console.log('1', this.state.isModalOpen);
        this.setState(prevState => ({
            isModalOpen: !prevState.isModalOpen
        }))
    }
    
    render() {
        console.log('2', this.state.isModalOpen);
        return (
            <div className='form-contact'>
                {
                    this.state.isModalOpen && (
                        <>
                        <form onSubmit={this.add}>
                            <button className='close-btn' onClick={this.closeForm}><img alt="img" src={MyImage}/></button>
                            <input type="text" name="firstname" placeholder="Prénom"
                                value={this.state.firstname}
                                onChange={(e) => this.setState({firstname: e.target.value})}
                                required
                            />
                            <input type="text" name="lastname" placeholder="Nom" 
                                value={this.state.lastname}
                                onChange={(e) => this.setState({lastname: e.target.value})} 
                            />
            
                            <input type="email" name="email" placeholder="Email" 
                                value={this.state.email}
                                onChange={(e) => this.setState({email: e.target.value})}
                                required
                            />
                            <input type="date" name="birthday"
                                value={this.state.birthday}
                                onChange={(e) => this.setState({birthday: e.target.value})}
                            />
                            <textarea type="text" value={this.state.infos} 
                                onChange={(e) => this.setState({infos: e.target.value})} placeholder="Informations complémentaires..."/>
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