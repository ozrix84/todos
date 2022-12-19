import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Todos from './components/Todos';

/**
 * Bootstrap reactove aplikace
 * Vykresli top level komponentu, v nasem pripade "Todos"
 */
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Todos/>
);
