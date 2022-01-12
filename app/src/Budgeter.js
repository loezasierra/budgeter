import './Budgeter.css';
import React from 'react';
import AmountInput from './components/AmountInput'
import Calculator from './components/Calculator';

class Budgeter extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      paycheck: '1000',
      fixedExpenses: [
        {name: 'first', amount: '100.835', id: 0},
        {name: 'second', amount: '200.942', id: 1},
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
    return (
      <div className="main">
        <div className="paycheck">
          <h2>Paycheck: </h2>
          <AmountInput name="paycheck"
          value={this.state.paycheck}
          onChange={this.handlePaycheckChange} />
        </div>

        <Calculator 
        paycheck={this.state.paycheck} 
        fixedExpenses={this.state.fixedExpenses} onFixedChange={this.handleFixedChange}
        savingsAmount={this.state.savings} onSavingsChange={this.handleSavingsChange} />
      </div>
    );
  }
}

export default Budgeter;
