import React from 'react';
import ReactDOM from 'react-dom';
import { CounterApp } from './Components/01-UseState/CounterApp';
// import { HooksApp } from './HooksApp';


ReactDOM.render(
  <React.StrictMode>
    <CounterApp/>
  </React.StrictMode>,
  document.getElementById('root')
);

