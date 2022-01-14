import React from 'react';
import Calculation from "./Calculation";
import ExpenseCategory from './ExpenseCategory';
import AmountInput from './AmountInput';
import FlexAmounts from './FlexAmounts';
import './styles/Calculator.css'


function Calculator(props) {
    const totalFixed = calculateFixed(props.fixedExpenses);
    const savings = parseInt(props.savingsAmount)
    const variableAmount = calculateVariable(props.paycheck, totalFixed, savings);

    return (
        <div className="calculator">

            <div className="calculations">
                <Calculation name="Fixed Expenses" value={totalFixed}/>
                <Calculation name="Savings" value={savings} />
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
    for (let expense of expenses) {
        let amount = parseInt(expense.amount);
        if (isNaN(amount)) {
            total += 0;
        } else {
            total += amount;
        }
    }
    return total;
}

function calculateVariable(paycheck, fixed, savings) {
    paycheck = parseInt(paycheck);
    fixed = parseInt(fixed);
    savings = parseInt(savings);

    let calculation = paycheck - (fixed + savings)
    if (isNaN(calculation)) {
        return 0;
    } else {
        return calculation;
    }
}

export default Calculator;
