import React from 'react';
import AmountInput from './AmountInput';

function LabledAmountInput(props) {
    return (
        <form>
            <input name ={props.name} type="text" value={props.name} />
            <AmountInput name ={props.name}/>
        </form>
    )
}

export default LabledAmountInput;