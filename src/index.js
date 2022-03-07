import React from 'react';
import ReactDOM from 'react-dom';
import { Layout } from './Components/05-UseLayoutEffect/LayoutEffect';



//import { RealExampleRef } from './Components/04-UseRef/RealExampleRef';
//import { FocusScreen } from './Components/04-UseRef/FocusScreen';
//import { MultipleCustomHooks } from './Components/03-Examples/MultipleCustomHooks';
// import { FormWidthCustomHook } from './Components/02-UseEffect/FormWidthCustomHook';
// import { SimpleForm } from './Components/02-UseEffect/SimpleForm';
// import { CounterApp } from './Components/01-UseState/CounterApp';
// import { CounterWithCustomHook } from './Components/01-UseState/CounterWithCustomHook';

// import { HooksApp } from './HooksApp';


ReactDOM.render(
  <React.StrictMode>
    <Layout/>
  </React.StrictMode>,
  document.getElementById('root')
);

