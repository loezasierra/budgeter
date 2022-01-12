import React from 'react';
import AmountInput from './AmountInput';
import './styles/LabledAmountInput.css'

function LabledAmountInput(props) {
    const handleNameChange = (e) => {
        props.onNameChange(e.target.value)
    };

    const handleAmountChange = (value) => {
        props.onAmountChange(value)
    };

    return (
        <div className="labledamountinput">
            <input name={props.name} type="text" value={props.name} onChange={handleNameChange} className="input"/>
            <AmountInput name={props.name} 
            value={props.value} 
            onChange={handleAmountChange} />
        </div>
    )
}

export default LabledAmountInput;
