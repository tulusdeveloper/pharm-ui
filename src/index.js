import React from "react";
import { createRoot } from "react-dom/client";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Login from "./pages/Login";
import MainComponent from "./components/MainComponent";
import { PrivateRouteNew } from "./utils/PrivateRouteNew";
import CompanyComponent from "./pages/CompanyComponent";


const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <Routes>
      <Route element={<Login />} path="/" />
      <Route element={<PrivateRouteNew />}>
        <Route element={<MainComponent />} path="/home" exact />
        <Route element={<CompanyComponent />} path="/company" exact />
      </Route>
    </Routes>
  </BrowserRouter>
);
