import React from 'react';
import LabledAmountInput from './LabledAmountInput';
import Button from './Button';

function FlexAmounts(props) {
    const handleNameChange = (index, value) => {
        const values = [...props.values];
        values[index].name = value;
        props.onChanges(values);
    }

    const handleAmountChange = (index, value) => {
        const values = [...props.values];
        values[index].amount = value;
        props.onChanges(values);
    }

    const handleNewAmount = () => {
        const values = [...props.values];
        values.push({name: '', amount: '', id:((values[values.length - 1].id) + 1)});
        props.onChanges(values);
    }

    const handleDeleteAmount = (id) => {
        const values = [...props.values];
        for (let i = 0, n = values.length; i < n; i++) {
            if (values[i].id === id) {
                values.splice(i, 1);
            }
        }
        props.onChanges(values);
    }

    const values = props.values;
    const amounts = values.map((value, index) => (
            <div key={value.id}>
                <LabledAmountInput key={value.id} name={value.name} value={value.amount} 
                onNameChange={(value) => handleNameChange(index, value)} onAmountChange={(value) => handleAmountChange(index, value)}/> 
                <Button key={String(value.id) + 'delete'} name="-" onClick={() => handleDeleteAmount(value.id)} />
            </div>)
    );

    return (
        <div>
            {amounts}
            <Button name="+" onClick={handleNewAmount} />
        </div>
    );
}

export default FlexAmounts;
