import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import MainComponent from './components/MainComponent';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <Router>
    <Routes>
      <Route exact path="/" element={<Login />}></Route>
      <Route exact path="/home" element={<MainComponent />}></Route>
    </Routes>
  </Router>
);