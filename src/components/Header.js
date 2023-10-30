import React from 'react';

function Header(props) {
    return (
        <div className="header">
            <h1>{props.name}</h1>
            <p>{props.title}</p>
        </div>
    );
}

export default Header;
