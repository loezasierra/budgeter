// import './App.css';
import React from 'react';
import AmountInput from './components/AmountInput'
import Calculator from './components/Calculator';

class Budgeter extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      paycheck: '',
      fixedExpenses: {},
      savings: '',
    }
  }

  render() {
    return (
      <div>
        <AmountInput name="paycheck" />
        <Calculator />
      </div>
    );
  }
}

export default Budgeter;
