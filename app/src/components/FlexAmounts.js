import React from 'react';
import LabledAmountInput from './LabledAmountInput';
import Button from './Button';

function FlexAmounts(props) {
    return (
        <div>
            <LabledAmountInput name="first" />
            <LabledAmountInput name="second" />
            <LabledAmountInput name="third" />
            <Button name="+" />
        </div>
    );
}

export default FlexAmounts;
