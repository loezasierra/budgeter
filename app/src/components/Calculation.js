import React from 'react';

function Calculation(props) {
    return (
        <div className="calculation">
            <p>Calculation for {props.name}:</p>
            <p>$1000</p>
        </div>
    );
}

export default Calculation;
