import React, { Component } from 'react';
import { connect } from 'react-redux';
import "./Note.css";

class Note extends Component {
    constructor(props){
        super(props);

        this.state = {}
    }

    render(){
        if (this.props.currentNote){
            return(
                <div className="individualNote">
                    <div className="individualNote__buttons">
                        <p>edit</p>
                        <p>delete</p>
                    </div>
    
                    <div className="individualNote__title">
                        <h2>{this.props.currentNote.title}</h2>
                    </div>
    
                    <div className="individualNote__content">
                        <p>{this.props.currentNote.content}</p>
                    </div>
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