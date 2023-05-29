import React from 'react';
import ReactDOM from 'react-dom/client';
//import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { HashRouter as Router } from 'react-router-dom';
import App from './App';
let container = null;
document.addEventListener('DOMContentLoaded', function(event) {
  if (!container) {
    container = document.getElementById('root');
    const root = ReactDOM.createRoot(container)
    root.render(
      <Router>
        <App/>
      </Router>
    );
  }
});