import React, { useState } from 'react';

const Calculator = () => {
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [result, setResult] = useState('');

    const handleAdd = () => {
        if (num1 && num2) {
            const sum = parseFloat(num1) + parseFloat(num2);
            setResult(sum);
        }
    };

    const handleSubtract = () => {
        if (num1 && num2) {
            const difference = parseFloat(num1) - parseFloat(num2);
            setResult(difference);
        }
    };

    const handleMultiply = () => {
        if (num1 && num2) {
            const product = parseFloat(num1) * parseFloat(num2);
            setResult(product);
        }
    };

    const handleDivide = () => {
        if (num1 && num2) {
            const quotient = parseFloat(num1) / parseFloat(num2);
            setResult(quotient);
        }
    };

    return (
        <div className="calculator-container">
            <div className="calculator">
                <h2>Simple Calculator</h2>
                <div className="input-container">
                    <input
                        type="text"
                        value={num1}
                        onChange={(e) => setNum1(e.target.value)}
                        placeholder="Enter a number"
                    />
                    <input
                        type="text"
                        value={num2}
                        onChange={(e) => setNum2(e.target.value)}
                        placeholder="Enter a number"
                    />
                </div>
                <div className="button-container">
                    <button onClick={handleAdd}>Add</button>
                    <button onClick={handleSubtract}>Subtract</button>
                    <button onClick={handleMultiply}>Multiply</button>
                    <button onClick={handleDivide}>Divide</button>
                </div>
                <div className="result-container">
                    <h1>Result: {result}</h1>
                </div>
            </div>
        </div>
    );
};

export default Calculator;
