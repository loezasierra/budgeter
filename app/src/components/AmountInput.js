import React from 'react';

function AmountInput(props) {
    return (
        <input name={props.name} type="number" step="0.01" value={props.value} />
    );
}

export default AmountInput;
