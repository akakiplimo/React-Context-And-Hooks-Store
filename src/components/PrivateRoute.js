import React from "react";
import { Navigate } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthContext";

export default function PrivateRoute({ children }) {
  const { auth } = useAuthContext();
  return (
        auth.isLoggedIn ? (
          children
        ) : (
          <Navigate to="/todos" />
        )
  );
}