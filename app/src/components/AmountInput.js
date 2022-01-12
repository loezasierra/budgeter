import React from 'react';
import './styles/Input.css';


function AmountInput(props) {
    const handleChange = (e) => {
        props.onChange(e.target.value);
    }
    
    return (
        <div className="input-wrapper">
            <span>$</span>
            <input 
                name={props.name} type="number" 
                onChange={handleChange} 
                value={props.value} 
                className="amountinput input" 
            />
        </div>
    );
}

export default AmountInput;
