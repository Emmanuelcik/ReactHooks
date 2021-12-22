import React from 'react';
import ReactDOM from 'react-dom';
// import { HookApp } from './HookApp';
import {CounterApp} from "./components/01-useState/CounterApp";
import { CounterAppCustom } from './components/01-useState/CounterAppCustom';

ReactDOM.render(
    // <CounterApp />,
    <CounterAppCustom />,
    
  document.getElementById('root')
);


