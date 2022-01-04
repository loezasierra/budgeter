import React from 'react';

function Calculation(props) {
    return (
        <div className="calculation">
            <p>{props.name}:</p>
            <p>${props.value}</p>
        </div>
    );
}

export default Calculation;
