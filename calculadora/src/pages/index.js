import React, { useState, useEffect } from 'react'
import CalculatorInput from '../components/CalculatorInput';
import CalculatorButtons from '../components/CalculatorButtons';
import History from '../components/History';
import { getHistory, updateHistory } from '../history';

import Link from 'next/link';

import '../styles/styles.css';


const Calculator = () => {
    const [input, setInput] = useState('');
    const [history, setHistory] = useState([]);
    const [currentOperation, setCurrentOperation] = useState('');
  
    useEffect(() => {
      // Cargar el historial desde localStorage cuando se monta la página
      const storedHistory = getHistory();
      setHistory(storedHistory);
    }, []);
  
    const handleInputChange = (value) => {
      setInput(value);
    };
  
    const handleButtonClick = (button) => {
      if (button === '=') {
        try {
          const result = eval(input);
          const operation = `${input} = ${result}`;
          const newHistory = [...history, operation];
          setHistory(newHistory);
          setCurrentOperation(operation);
          setInput(result.toString());
  
          // Actualizar el historial en localStorage
          updateHistory(newHistory);
        } catch (error) {
          setInput('Error');
        }
      } else if (button === 'C') {
        setInput('');
        setCurrentOperation('');
      } else {
        setInput(input + button);
        setCurrentOperation(currentOperation + button);
      }
    };
  
    const handleHistoryClick = (index) => {
      setInput(history[index].split('=')[0]);
      setCurrentOperation(history[index]);
    };

    const handleClearAll = () => {
    // Borrar todos los registros del historial
    setHistory([]);
    setCurrentOperation('');

    // Actualizar el historial en localStorage
    updateHistory([]);
  };

  const handleDelete = (index) => {
    // Borrar un registro específico del historial
    const newHistory = [...history];
    newHistory.splice(index, 1);
    setHistory(newHistory);

    // Actualizar el historial en localStorage
    updateHistory(newHistory);
  };
  
    return (
      <div className="calculator">
        <p>{currentOperation}</p>
        <CalculatorInput value={input} onChange={handleInputChange} />
        <CalculatorButtons onClick={handleButtonClick} />
        <History 
            history={history} 
            onClick={handleHistoryClick} 
            onClearAll={handleClearAll} 
            onDelete={handleDelete}
        />
      </div>
    );
  };
  
  export default Calculator;