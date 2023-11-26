import { useState } from 'react';

const Calculator = () => {
  const [firstNumber, setFirstNumber] = useState('');
  const [secondNumber, setSecondNumber] = useState('');
  const [operator, setOperator] = useState('');
  const [result, setResult] = useState('');

  const handleNumberClick = (number: string) => {
    if (!operator) {
      setFirstNumber(firstNumber + number);
    } else {
      setSecondNumber(secondNumber + number);
    }
  };

  const handleOperatorClick = (operator: string) => {
    setOperator(operator);
  };

  const calculate = () => {
    let result = '';
    switch (operator) {
      case '+':
        result = (Number(firstNumber) + Number(secondNumber)).toString();
        break;
      case '-':
        result = (Number(firstNumber) - Number(secondNumber)).toString();
        break;
      case '*':
        result = (Number(firstNumber) * Number(secondNumber)).toString();
        break;
      case '/':
        result = (Number(firstNumber) / Number(secondNumber)).toString();
        break;
      default:
        break;
    }
    setResult(result);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-row">
        <input type="text" value={firstNumber} readOnly className="border-2 border-gray-300 m-2 p-2" />
        <input type="text" value={operator} readOnly className="border-2 border-gray-300 m-2 p-2" />
        <input type="text" value={secondNumber} readOnly className="border-2 border-gray-300 m-2 p-2" />
      </div>
      <div className="flex flex-row">
        {['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'].map((number) => (
          <button
            key={number}
            onClick={() => handleNumberClick(number)}
            className="border-2 border-gray-300 m-2 p-2"
          >
            {number}
          </button>
        ))}
      </div>
      <div className="flex flex-row">
        {['+', '-', '*', '/'].map((operator) => (
          <button
            key={operator}
            onClick={() => handleOperatorClick(operator)}
            className="border-2 border-gray-300 m-2 p-2"
          >
            {operator}
          </button>
        ))}
      </div>
      <button onClick={calculate} className="border-2 border-gray-300 m-2 p-2">
        Calculate
      </button>
      <div className="flex flex-row">
        <input type="text" value={result} readOnly className="border-2 border-gray-300 m-2 p-2" />
      </div>
    </div>
  );
};

export default Calculator;