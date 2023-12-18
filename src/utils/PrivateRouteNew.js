import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import AuthHandler from "./AuthHandler";
import MainComponent from "../components/MainComponent";
import CompanyComponent from "../pages/HomeComponent";

export var PrivateRouteNew = ({ page,...rest}) => {
  return (
    <Outlet
    {...rest}
      render={() =>
        AuthHandler.loggedIn() ? <MainComponent page={page} /> : <Navigate to="/" />
      }
    />
  );
};