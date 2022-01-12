import React from 'react';
import LabledAmountInput from './LabledAmountInput';
import Button from './Button';
import './styles/FlexAmounts.css'

function FlexAmounts(props) {
    const handleNameChange = (index, value) => {
        const values = [...props.values];
        values[index].name = value;
        return props.onChanges(values);
    }

    const handleAmountChange = (index, value) => {
        const values = [...props.values];
        values[index].amount = value;
        return props.onChanges(values);
    }

    const handleNewAmount = () => {
        const values = [...props.values];
        values.push({name: '', amount: '', id:((values[values.length - 1].id) + 1)});
        return props.onChanges(values);
    }

    const handleDeleteAmount = (id) => {
        const values = [...props.values];
        for (let i = 0, n = values.length; i < n; i++) {
            if (values[i].id === id) {
                if (values.length == 1){
                    return props.onChanges(values);
                } else {
                    values.splice(i, 1);
                    return props.onChanges(values);
                }
            }
        }
        return props.onChanges(values);
    }

    const values = props.values;
    const amounts = values.map((value, index) => (
            <div key={value.id} className="flexamount" >
                <LabledAmountInput key={value.id} name={value.name} value={value.amount} 
                onNameChange={(value) => handleNameChange(index, value)} onAmountChange={(value) => handleAmountChange(index, value)}/> 
                <Button key={String(value.id) + 'delete'} name="-" onClick={() => handleDeleteAmount(value.id)} />
            </div>)
    );

    return (
        <div className="flexamounts">
            {amounts}
            <div className="newamount-wrapper">
                <Button name="+" onClick={handleNewAmount} />
            </div>
        </div>
    );
}

export default FlexAmounts;
