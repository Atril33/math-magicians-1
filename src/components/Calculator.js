/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import styles from '../styles/Calculator.module.css';
import Button from './Button';
import Screen from './Screen';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [total, setTotal] = useState(null);
  const [next, setNext] = useState(null);
  const [operation, setOperation] = useState(null);
  const [screenValue, setScreenValue] = useState('0');

  const handleCalc = (e) => {
    const value = e.target.textContent;
    const newCalcObj = calculate({ total, next, operation }, value);
    setTotal(newCalcObj.total);
    setNext(newCalcObj.next);
    setOperation(newCalcObj.operation);
    setScreenValue(newCalcObj.next || newCalcObj.total || '0');
  };

  const buttonLabels = [
    ['AC', '+/-', '%', '÷'],
    ['7', '8', '9', 'x'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['0', '.', '='],
  ];

  const getButtonClassName = (label) => {
    if (label === '÷' || label === 'x' || label === '-' || label === '+') {
      return styles['filled-btn'];
    } if (label === '0') {
      return styles['two-span-btn'];
    }
    return '';
  };

  return (
    <div className={styles.wrapper}>
      <h1>Let&apos;s do some maths!</h1>
      <div className={styles.calculator}>
        <Screen value={screenValue} onValueChange={setScreenValue} className={styles.screen} />
        {buttonLabels.map((row, index) => (
          <div key={index} className={styles.row}>
            {row.map((label) => (
              <Button
                key={label}
                label={label}
                onClick={handleCalc}
                className={getButtonClassName(label)}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calculator;
