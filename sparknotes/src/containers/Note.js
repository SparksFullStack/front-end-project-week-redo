import React, { Component } from 'react';
import { connect } from 'react-redux';
import "./Note.css";
import { NavLink } from 'react-router-dom';
import DeleteModal from '../containers/DeleteModal';

class Note extends Component {
    constructor(props){
        super(props);

        this.state = {
            modalIsOpen: true
        }
    }

    openModal = () => {
        this.setState({ modalIsOpen: true })
    }

    render(){
        if (this.props.currentNote){
            return(
                <div className="individualNote">
                    <div className="individualNote__buttons">
                        <NavLink to={{pathname: '/editnote', state: {
                            id: this.props.location.state.id,
                            note: {
                                title: this.props.currentNote.title,
                                content: this.props.currentNote.content,
                            }
                        }}}>
                            <p>edit</p>
                        </NavLink>
                        <p onClick={this.openModal}>delete</p>
                    </div>
    
                    <div className="individualNote__title">
                        <h2>{this.props.currentNote.title}</h2>
                    </div>
    
                    <div className="individualNote__content">
                        <p>{this.props.currentNote.content}</p>
                    </div>

                    <DeleteModal isOpen={this.state.modalIsOpen} />
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

const mapStateToProps = ({ notes }, { location }) => {
    if (!location.state){
        return {
            currentNote: undefined
        }
    } else return {
        currentNote: notes[location.state.id]
    }
}

export default connect(mapStateToProps)(Note);