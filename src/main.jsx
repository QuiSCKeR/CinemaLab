import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; // Додайте цей імпорт
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <ToastContainer />
  </React.StrictMode>
);