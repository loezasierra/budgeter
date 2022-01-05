import React from 'react';

function AmountInput(props) {
    const handleChange = (e) => {
        props.onChange(e.target.value);
    }
    
    return (
        <input name={props.name} type="number" onChange={handleChange} value={props.value} />
    );
}

export default AmountInput;
