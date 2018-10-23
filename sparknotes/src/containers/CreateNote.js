import React, { Component } from 'react';
import { connect } from 'react-redux';
import "./CreateNote.css";
import { bindActionCreators } from 'redux';
import { CREATE_NOTE, createNote } from '../actions/actions';
import { NavLink } from 'react-router-dom';


class CreateNote extends Component {
    constructor(props){
        super(props);

        this.state = {
            titleForm: "",
            contentForm: "",
        }
    }

    handleUpdateTitle = (event) => {
        this.setState({ titleForm: event.target.value });
    }

    handleUpdateContent = (event) => {
        this.setState({ contentForm: event.target.value });
    }

    render(){
        return(
            <div className="createNote">
                <div className="createNote__title">
                    <h2>Create New Note:</h2>
                </div>

                <form className="createNote__form">
                    <input 
                        className="createNote__form__title" 
                        type='text' value={this.state.titleForm} 
                        placeholder="Note Title" 
                        onChange={this.handleUpdateTitle}
                        id="titleForm" />
                    <textarea 
                        className="createNote__form__content" 
                        type='text' value={this.state.contentForm} 
                        placeholder="Note Title" 
                        rows="30" 
                        onChange={this.handleUpdateContent}
                        id="contentForm" />
                </form>

                <div 
                    style={styles.buttonStyles} 
                    className="createNote__button"
                    onClick={() => this.props.createNote(this.state.titleForm, this.state.contentForm)}>
                    <NavLink to='/'>
                        <p style={{marginTop: '13px'}}>Save</p>
                    </NavLink>
                </div>
            </div>
        )
    }
}

const styles = {
    buttonStyles: {
        border: ".5px solid black",
        height: "51px",
        width: "25%",
        marginBottom: "10px",
        backgroundColor: "rgb(8, 196, 196)",
        color: "white",
        marginRight: "auto",
        marginTop: "5px",
        textAlign: "center",
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators( { createNote }, dispatch)
}

export default connect(null, mapDispatchToProps)(CreateNote);