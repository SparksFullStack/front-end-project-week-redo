import React, { Component } from 'react';
import { connect } from 'react-redux';
import "./Note.css";
import { NavLink } from 'react-router-dom';
import DeleteModal from '../containers/DeleteModal';

class Note extends Component {
    constructor(props){
        super(props);

        this.state = {
            modalIsOpen: false
        }
    }

    openModal = () => {
        this.setState({ modalIsOpen: true })
    }

    closeModal = () => {
        this.setState({ modalIsOpen: false });
    }

    render(){
        if (this.props.location.state.note){
            return(
                <div className="individualNote">
                    <div className="individualNote__buttons">
                        <NavLink to={{pathname: '/editnote', state: {
                            id: this.props.location.state.note.id,
                            note: {
                                title: this.props.location.state.note.title,
                                content: this.props.location.state.note.content,
                            }
                        }}}>
                            <p>edit</p>
                        </NavLink>
                        <p onClick={this.openModal}>delete</p>
                    </div>
    
                    <div className="individualNote__title">
                        <h2>{this.props.location.state.note.title}</h2>
                    </div>
    
                    <div className="individualNote__content">
                        <p>{this.props.location.state.note.content}</p>
                    </div>

                    <DeleteModal isOpen={this.state.modalIsOpen} closeModal={this.closeModal} id={this.props.location.state.note.id} />
                </div>
            )
        }

        return(
            <div className="individualNote">
                <div className="individualNote__title">
                    <h1>No note was found!</h1>
                </div>
            </div>
        )
    }
}

export default Note;