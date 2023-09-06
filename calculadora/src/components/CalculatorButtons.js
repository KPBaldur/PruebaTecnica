import React from 'react';

import '../styles/buttons.css';

const CalculatorButtons = ({ onClick }) => {
    const buttons = [ 'C', 'Del', '/', '*', '7', '8', '9', '-', '4', '5', '6', '+', '1', '2', '3', '=', '%', '0', '.' ]

    return (
        <div className='calculator-buttons'>
            {buttons.map((button) => (
                <button key={button} onClick={() => onClick(button)}>
                    {button}
                </button>
            ))}
        </div>
    );
};

export default CalculatorButtons;