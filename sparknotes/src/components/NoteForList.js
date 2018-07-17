import React from 'react';
import "./NoteForList.css";
import { Link } from 'react-router-dom';

const NoteForList = props => {
    console.log(props.note.id)
    return (
                <div className="note">
                    <Link to={{pathname: '/note', state: {id: props.note.id}}}>
                    <h3 className="note__title">{props.note.title}</h3>
                    </Link>
                    <div className="note__conent--truncate">
                        <p className="note__content">{props.note.content}</p>
                    </div>
                </div>
    )
}
export default NoteForList;