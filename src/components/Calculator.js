import './Calculator.css';
import Button from './Button';
import Screen from './Screen';

const Calculator = () => (
  <div className="calculator">
    <Screen />
    <div className="row">
      <Button label="AC" />
      <Button label="+/-" />
      <Button label="%" />
      <Button label="÷" className="filled-btn" />
    </div>
    <div className="row">
      <Button label="7" />
      <Button label="8" />
      <Button label="9" />
      <Button label="x" className="filled-btn" />
    </div>
    <div className="row">
      <Button label="4" />
      <Button label="5" />
      <Button label="6" />
      <Button label="-" className="filled-btn" />
    </div>
    <div className="row">
      <Button label="1" />
      <Button label="2" />
      <Button label="3" />
      <Button label="+" className="filled-btn" />
    </div>
    <div className="row">
      <Button label="0" className="two-span-btn" />
      <Button label="." />
      <Button label="=" className="filled-btn" />
    </div>
  </div>
);

export default Calculator;
