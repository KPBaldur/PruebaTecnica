import React from 'react';

import '../styles/history.css';

const History = ({ history, onClick, onClearAll, onDelete }) => {
  return (
    <div className="history">
      <h2>Historial de Cálculos</h2>
      <ul>
        {history.map((item, index) => (
          <li key={index}>
            <span>{item}</span>
            <button className='button-erase' onClick={() => onDelete(index)}>Borrar</button>
            <hr className='separator-operation'></hr>
          </li>
        ))}
      </ul>
      <button className='clear-all' onClick={onClearAll}>Borrar Todo</button>
    </div>
  );
};
  
  export default History;