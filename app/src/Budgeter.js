// import './App.css';
import React from 'react';
import AmountInput from './components/AmountInput'
import Calculator from './components/Calculator';

class Budgeter extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      paycheck: '1000',
      fixedExpenses: [
        {name: 'first', amount: '100'},
        {name: 'second', amount: '200'},
        {name: 'third', amount: '300'},
      ],
      savings: '300',
    }
  }

  render() {
    return (
      <div>
        <AmountInput name="paycheck" value={this.state.paycheck}/>
        <Calculator 
        paycheck={this.state.paycheck} 
        fixedExpenses={this.state.fixedExpenses} 
        savingsAmount={this.state.savings} />
      </div>
    );
  }
}

export default Budgeter;
