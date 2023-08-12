import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const Private = () => {
  let isAuth = localStorage.getItem("access_token");

  return isAuth ? <Outlet /> : <Navigate to={"/"} />;
};

export default Private;