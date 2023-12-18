import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import AuthHandler from "./AuthHandler";

export var PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Outlet
      {...rest}
      render={(props) =>
        AuthHandler.loggedIn() ? <Component {...props} /> : <Navigate to="/" />
      }
    />
  );
};