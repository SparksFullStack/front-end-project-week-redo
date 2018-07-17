import React from 'react';
import "./NoteForList.css";
import { NavLink } from 'react-router-dom';

const NoteForList = props => {
    return (
                <div className="note">
                    <NavLink to={{pathname: '/note', state: {id: props.note.id}}}>
                        <h3 className="note__title">{props.note.title}</h3>
                    </NavLink>
                    <div className="note__conent--truncate">
                        <p className="note__content">{props.note.content}</p>
                    </div>
                </div>
    )
}
export default NoteForList;