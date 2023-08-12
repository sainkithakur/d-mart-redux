import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const Public = () => {
  let isAuth = localStorage.getItem("access_token");
  return !isAuth ? <Outlet /> : <Navigate to={"/"} />;
};

export default Public;