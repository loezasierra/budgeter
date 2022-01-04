import React from 'react';
import LabledAmountInput from './LabledAmountInput';
import Button from './Button';

function FlexAmounts(props) {
    const values = props.values;
    return (
        <div>
            {values.map((value) =>
                <LabledAmountInput name={value.name} value={value.amount} />
            )}
            <Button name="+" />
        </div>
    );
}

export default FlexAmounts;
