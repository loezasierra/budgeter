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
        {name: 'first', amount: '100', id: 0},
      ],
      savings: '200',
    }
  }

  handlePaycheckChange = (value) => {
    this.setState({
      paycheck: value,
    })
  }

  handleSavingsChange = (value) => {
    this.setState ({
      savings: value,
    })
  }

  handleFixedChange = (values) => {
    this.setState ({
      fixedExpenses: values,
    })
  }

  render() {
    {/* Debugging */}
    console.log(this.state.paycheck);
    console.log(this.state.fixedExpenses);
    console.log(this.state.savings);
    console.log('---------')
    return (
      <div>
        <AmountInput name="paycheck"
        value={this.state.paycheck}
        onChange={this.handlePaycheckChange} />

        <Calculator 
        paycheck={this.state.paycheck} 
        fixedExpenses={this.state.fixedExpenses} onFixedChange={this.handleFixedChange}
        savingsAmount={this.state.savings} onSavingsChange={this.handleSavingsChange} />
      </div>
    );
  }
}

export default Budgeter;
