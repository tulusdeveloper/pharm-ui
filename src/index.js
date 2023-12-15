import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Login from './pages/Login';
import MainComponent from './components/MainComponent'; 
import { PrivateRoute } from './utils/PrivateRoute';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <BrowserRouter>
     <Routes>
          <Route element={<Login />} path="/" />
          <Route element={<PrivateRoute />}>
            <Route element={<MainComponent />}  path="/home" exact />
          </Route>
        </Routes>
  </BrowserRouter>
);

