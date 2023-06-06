import React from 'react';
import './styles/reset.css';
import ReactDOM from 'react-dom/client';
import AppRoute from './AppRoute';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <AppRoute />
  </React.StrictMode>
);
