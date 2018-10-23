import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import './EditNote.css';
import { updateNote } from '../actions/actions';
import { bindActionCreators } from 'redux';


class EditNote extends Component {
    constructor(props){
        super(props);

        this.state = {
            
        }
    }

    componentWillMount(){
        this.setState({
            title: this.props.location.state.note.title,
            content: this.props.location.state.note.content,
            id: this.props.location.state.id,
        });
    }

    handleUpdateTitle = event => {
        this.setState({
            title: event.target.value,
        })
    }

    handleUpdateContent = event => {
        this.setState({
            content: event.target.value,
        })
    }

    render(){
        return(
            <div className='editNote'>
                <div className="editNote__title">
                    <h2>Edit Note:</h2>
                </div>

                <form className="editNote__form">
                    <input 
                        className="editNote__form__title" 
                        type='text' 
                        value={this.state.title} 
                        placeholder="Note Title" 
                        onChange={this.handleUpdateTitle}
                        id="titleForm" />
                    <textarea 
                        className="editNote__form__content" 
                        type='text' value={this.state.content} 
                        placeholder="Note Title" 
                        rows="30" 
                        onChange={this.handleUpdateContent}
                        id="contentForm" />
                </form>

                <div 
                    style={styles.buttonStyles} 
                    className="editNote__button"
                    onClick={() => this.props.updateNote(this.state.title, this.state.content, this.state.id)}>
                    <NavLink to={{
                        pathname: '/note',
                        state: {note :{
                            title: this.state.title,
                            content: this.state.content,
                            id: this.state.id,
                        }},
                    }}>
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

const mapDispatchToProps = dispatch => {
    return bindActionCreators({ updateNote }, dispatch);
}

export default connect(null, mapDispatchToProps)(EditNote);