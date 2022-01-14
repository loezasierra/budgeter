import React from 'react';
import './styles/Button.css';


function Button(props) {
    return(
        <button onClick={props.onClick} className="button">{props.name}</button>
    );
}

export default Button;
