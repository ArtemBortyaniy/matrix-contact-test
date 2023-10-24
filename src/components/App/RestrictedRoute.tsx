import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../hooks";

interface RestrictedRouteProps {
  component: React.ReactNode;
  redirectTo?: string;
}

const RestrictedRoute: React.FC<RestrictedRouteProps> = ({
  component,
  redirectTo = "/",
}) => {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? <Navigate to={redirectTo} /> : <>{component}</>;
};

export default RestrictedRoute;
