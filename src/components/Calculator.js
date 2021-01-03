import React, { useState } from "react";

const Calculator = () => {
    const [result, setResult] = useState('')
    const [display, setDisplay] = useState('0')

    const handleClear = () => {
        setResult('')
        setDisplay('0')
    }

    const handleInput = e => {
        if (result === '' || result === '0') {
            setResult(e.target.innerText);
        } else {
            setResult(`${result + e.target.innerText}`)
        }
        if (['0', '/', '*', '-', '+'].some(i => i === display)) {
            setDisplay(e.target.innerText);
        } else {
            setDisplay(`${display + e.target.innerText}`)
        }
    }

    const handleOperations = e => {
        setDisplay(e.target.innerText);
        if (result !== '' && !['/', '-', '*', '+'].some(i => result[result.length - 1] === i)) {
            setResult(`${result + e.target.innerText}`);
        } else if (result !== '' && ['/', '*', '+'].some(i => result[result.length - 1] === i)) {
            setResult(`${result.slice(0, -1) + e.target.innerText}`);
        } else if (result.length > 1 && result[result.length - 1] === '-' && ['/', '*', '+'].some(i => result[result.length - 2] === i)) {
            setResult(`${result.slice(0, -2) + e.target.innerText}`)
        }
    }

    const handleSubtract = () => {
        setDisplay('-');
        setResult(`${result}-`);
    }

    const handleDecimal = () => {
        if (!display.split('').some(i => i === '.')) {
            if (result === '') {
                setResult('0.');
            } else {
                setResult(`${result}.`)
            }
            if (['/', '*', '-', '+'].some(i => i === display)) {
                setDisplay('0.');
            } else {
                setDisplay(`${display}.`)
            }
        }
    }

    const handleEqual = () => {
        setResult(eval(result));
        setDisplay(eval(result));
    }

    return (
        <div className="calculator">
            <div className="screen">
                <div className="result">
                    <p>{result}</p>
                </div>
                <div className="display">
                    <p>{display}</p>
                </div>
            </div>
            <div className="buttons">
                <div onClick={handleClear} id="clear">AC</div>
                <div onClick={handleOperations} id="divide">/</div>
                <div onClick={handleOperations} id="multiply">*</div>
                <div onClick={handleInput} id='seven' className="number">7</div>
                <div onClick={handleInput} id='eight' className="number">8</div>
                <div onClick={handleInput} id='nine' className="number">9</div>
                <div onClick={handleSubtract} id="subtract">-</div>
                <div onClick={handleInput} id='four' className="number">4</div>
                <div onClick={handleInput} id='five' className="number">5</div>
                <div onClick={handleInput} id='six' className="number">6</div>
                <div onClick={handleOperations} id="add">+</div>
                <div onClick={handleInput} id='one' className="number">1</div>
                <div onClick={handleInput} id='two' className="number">2</div>
                <div onClick={handleInput} id='three' className="number">3</div>
                <div onClick={handleEqual} id="equals">=</div>
                <div onClick={handleInput} id="zero" className="number">0</div>
                <div onClick={handleDecimal} id="decimal" className="number">.</div>
            </div>
        </div>
    )
}

export default Calculator;