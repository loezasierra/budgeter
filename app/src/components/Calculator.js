import React from 'react';
import Calculation from "./Calculation";
import ExpenseCategory from './ExpenseCategory';
import AmountInput from './AmountInput';
import FlexAmounts from './FlexAmounts';


function Calculator(props) {
    return (
        <div className="calculator">

            <div className="calculations">
                <Calculation name="Fixed Expenses" />
                <Calculation name="Savings" />
                <Calculation name="Variable Allowance" />
            </div>

            <ExpenseCategory name="Fixed Expenses">
                <FlexAmounts name="Fixed Expenses" />
            </ExpenseCategory>

            <ExpenseCategory name="Savings">
                <AmountInput name="Savings" />
            </ExpenseCategory>

        </div>
    );
}

export default Calculator;
