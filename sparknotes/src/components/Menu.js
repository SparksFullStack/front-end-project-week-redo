import React from 'react';
import "./Menu.css";

const Menu = () => {
    return (
        <div className="menu">
            
            <h1 className="menu__header">Lambda Notes</h1>
            <div className="menu__buttons">
                <div className="menu__buttons__button">
                    <p>View Your Notes</p>
                </div>

                <div className="menu__buttons__button">
                    <p>+ Create New Notes</p>
                </div>
            </div>
        </div>
    )
}

export default Menu;