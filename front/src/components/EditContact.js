import React from 'react';
import './Contact.css';
import MyImage from '../assets/close.svg';

class EditContact extends React.Component {
    constructor(props) {
        super(props);
        const {id, firstname, lastname, email, birthday, infos} = props;
        this.state = {
            id,
            firstname,
            lastname,
            email,
            birthday,
            infos,
            isModalOpen: true
        }
    }

    update = (e) => {
        e.preventDefault();
        this.props.updateContact(this.state);
        this.setState({firstname: this.state.firstname, lastname: this.state.lastname, email: this.state.email, birthday: this.state.birthday, infos: this.state.infos});
    }
    delete = (e) => {
        this.props.deleteContact(this.state);
        this.setState({firstname: this.state.firstname, lastname: this.state.lastname, email: this.state.email, birthday: this.state.birthday, infos: this.state.infos});
        window.location.reload();
    }

    closeForm = () => {
        this.setState(prevState => ({
            isModalOpen: !prevState.isModalOpen
        }))
    }


    render() {
        return (
            <div className='form-edit'>
                {
                    this.state.isModalOpen && (
                        <>
                        <form onSubmit={this.update}>
                            <button className='close-btn' onClick={this.closeForm}><img alt="img" src={MyImage}/></button>
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
                            <textarea type="text" value={this.state.infos} onChange={(e) => this.setState({infos: e.target.value})} placeholder="Informations complémentaires..."/>
                            <button>Modifier</button>
                            <button onClick={this.delete}>Supprimer</button>
                        </form>
                        </>
                    )
                }
            </div>
        );
    }
}

export default EditContact;