import React from 'react';
import AmountInput from './AmountInput';

function LabledAmountInput(props) {
    let handleNameChange = (e) => {
        props.onNameChange(e.target.value)
    };

    let handleAmountChange = (value) => {
        props.onAmountChange(value)
    };

    return (
        <form>
            <input name={props.name} type="text" value={props.name} onChange={handleNameChange} />
            <AmountInput name={props.name} 
            value={props.value} 
            onChange={handleAmountChange} />
        </form>
    )
}

export default LabledAmountInput;
