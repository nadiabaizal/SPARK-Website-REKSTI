import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
// Pastikan kamu punya file index.css, atau hapus baris di bawah ini jika belum ada
// import './index.css'; 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);