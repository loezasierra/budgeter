// import './App.css';
import React from 'react';
import AmountInput from './components/AmountInput'
import Calculator from './components/Calculator';

function Budgeter() {
  return (
    <div>
      <AmountInput name="paycheck" />
      <Calculator />
    </div>
  );
}

export default Budgeter;