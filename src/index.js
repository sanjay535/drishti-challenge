import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { actions } from './data.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App actions={actions}/>
  </React.StrictMode>
);

