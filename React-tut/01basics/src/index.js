import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root')); // React swatahacha dom banavto jasa browser cha asto tasa called virtual dom & index.html(SPA) madhe root element ahe div madhe. mhanun te document load karnyasathi he
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// dependencies madhe je "react-scripts" asta te index.js file la index.html madhe behind the scene load karavte

