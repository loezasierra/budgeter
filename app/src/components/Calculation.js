import React from 'react';
import './styles/Calculation.css';

function Calculation(props) {
    return (
        <div className="calculation">
            <span>{props.name}:</span><span>${props.value}</span>
        </div>
    );
}

export default Calculation;
