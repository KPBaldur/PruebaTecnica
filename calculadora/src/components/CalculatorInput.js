import React from 'react';

import '../styles/input.css';

const calculatorInput = ({ value, onChange}) => {
    return (
        <div className='input'>
            <input
            type='number'
            inputMode='none'
            value={value}
            onChange={(e) => onChange(e.target.value)}
        />
        <hr></hr>
        </div>
    );
};

export default calculatorInput;