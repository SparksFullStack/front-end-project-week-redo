import React, { Component } from 'react';
import { connect } from 'react-redux';
import "./AllNotes.css";
import NoteForList from '../components/NoteForList';

class AllNotes extends Component {
    constructor(props){
        super(props);

        this.state = {}
    }

    renderNotes = () => {
        return this.props.notes.map(note => {
            return (
                <NoteForList key={note.id} note={note} />
            )
        })
    }

    render(){
        return (
            <div className="allNotes">
                <div className="allNotes__content">
                    <h2 className="allNotes__content__header">Your Notes:</h2>

                    <div className="allNotes__content__notes">
                        {this.renderNotes()}
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {notes: state.notes, id: state.currentId}
}

export default connect(mapStateToProps)(AllNotes);