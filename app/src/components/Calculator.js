import React from 'react';
import Calculation from "./Calculation";
import ExpenseCategory from './ExpenseCategory';
import AmountInput from './AmountInput';
import FlexAmounts from './FlexAmounts';


function Calculator(props) {
    const totalFixed = calculateFixed(props.fixedExpenses);
    const variableAmount = calculateVariable(props.paycheck, totalFixed, props.savingsAmount);

    return (
        <div className="calculator">

            <div className="calculations">
                <Calculation name="Fixed Expenses" value={totalFixed}/>
                <Calculation name="Savings" value={props.savingsAmount} />
                <Calculation name="Variable Allowance" value={variableAmount} />
            </div>

            <ExpenseCategory name="Fixed Expenses">
                <FlexAmounts name="Fixed Expenses" values={props.fixedExpenses} onChanges={props.onFixedChange} />
            </ExpenseCategory>

            <ExpenseCategory name="Savings">
                <AmountInput name="Savings" value={props.savingsAmount} onChange={props.onSavingsChange} />
            </ExpenseCategory>

        </div>
    );
}

function calculateFixed(expenses) {
    let total = 0;
    for (let i = 0, n = expenses.length; i < n; i++) {
        total += parseFloat(expenses[i].amount) * 100;
    }
    return total / 100;
}

function calculateVariable(paycheck, fixed, savings) {
    paycheck = parseFloat(paycheck) * 100;
    fixed = parseFloat(fixed) * 100;
    savings = parseFloat(savings) * 100;
    return (paycheck - (fixed + savings)) / 100;
}

export default Calculator;
