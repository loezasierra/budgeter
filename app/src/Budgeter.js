import './Budgeter.css';
import React from 'react';
import AmountInput from './components/AmountInput';
import Calculator from './components/Calculator';
import Hideable from './components/Hideable';
import SubmitTextarea from './components/SubmitTextarea';


class Budgeter extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      paycheck: '',
      fixedExpenses: [
        {name: '', amount: '', id: Date.now()},
      ],
      savings: '',
      showIO: 0,
    };
  }

  handlePaycheckChange = (value) => {
    this.setState({
      paycheck: value,
    });
  }

  handleSavingsChange = (value) => {
    this.setState ({
      savings: value,
    });
  }

  handleFixedChange = (values) => {
    let sortedValues = values.sort((a, b) => {return b.amount - a.amount});
    this.setState ({
      fixedExpenses: sortedValues,
    });
  }

  handleIOVisibility = (visibility) => {
    this.setState({
      showIO: visibility,
    });
  }

  handleStateInput = (state) => {
    this.setState(JSON.parse(state));
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

        <Hideable name="Import & Export" 
        visibility={this.state.showIO} onVisibilityChange={this.handleIOVisibility}>
          <SubmitTextarea defaultValue={JSON.stringify(this.state)} onClick={this.handleStateInput} />
        </Hideable>
        
      </div>
    );
  }
}

export default Budgeter;
