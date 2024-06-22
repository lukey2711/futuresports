import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter
import App from './App';
import './index.css';

//Root from HTML doc
const rootElement = document.getElementById('root');

//Rendering point
const root = createRoot(rootElement);

//Render react within root element 
root.render(

  //Show problems
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
