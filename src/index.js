import React from 'react';
import ReactDOM from 'react-dom';
import { MultipleCustomHooks } from './Components/03-Examples/MultipleCustomHooks';
// import { FormWidthCustomHook } from './Components/02-UseEffect/FormWidthCustomHook';
// import { SimpleForm } from './Components/02-UseEffect/SimpleForm';
// import { CounterApp } from './Components/01-UseState/CounterApp';
// import { CounterWithCustomHook } from './Components/01-UseState/CounterWithCustomHook';

// import { HooksApp } from './HooksApp';


ReactDOM.render(
  <React.StrictMode>
    <MultipleCustomHooks/>
  </React.StrictMode>,
  document.getElementById('root')
);

