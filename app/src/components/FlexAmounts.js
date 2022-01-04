import React from 'react';
import LabledAmountInput from './LabledAmountInput';
import Button from './Button';

function FlexAmounts(props) {
    let handleNameChange = (index, value) => {
        const values = [...props.values];
        values[index].name = value;
        props.onChanges(values);
    }

    let handleAmountChange = (index, value) => {
        const values = [...props.values];
        values[index].amount = value;
        props.onChanges(values);
    }

    const values = props.values;
    const amounts = values.map((value, index) => 
        <LabledAmountInput key={value.id} name={value.name} value={value.amount} 
        onNameChange={(value) => handleNameChange(index, value)} onAmountChange={(value) => handleAmountChange(index, value)}/>
    );

    return (
        <div>
            {amounts}
            <Button name="+" />
        </div>
    );
}

export default FlexAmounts;
