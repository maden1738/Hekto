import React from "react";
import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";

export default function ProtectedRoute({ role }) {
  const user = useSelector((store) => store.user.value);
  if (user?.role == role) {
    console.log("am i not here");
    return <Outlet />;
  }
  console.log("why am i here");
  return <Navigate to="/login" />;
}
