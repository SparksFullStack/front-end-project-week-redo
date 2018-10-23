import React from 'react';
import "./Menu.css";
import { NavLink } from 'react-router-dom';

const Menu = () => {
    return (
        <div className="menu">
            
            <h1 className="menu__header">SparkNotes</h1>
            <div className="menu__buttons">
                <div className="menu__buttons__button">
                    <NavLink to='/'>
                        <p style={{marginTop: '20px'}}>View Your Notes</p>
                    </NavLink>
                </div>

                <div className="menu__buttons__button">
                    <NavLink to='/createnote'>
                        <p style={{marginTop: '20px'}}>+ Create New Notes</p>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default Menu;