import { Navigate } from "react-router-dom";
import { useAuth } from "../../hooks";
import React, { ReactNode } from "react";

interface PrivateRouteProps {
  component: ReactNode;
  redirectTo?: string;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({
  component,
  redirectTo = "/",
}) => {
  const { isLoggedIn } = useAuth();
  const shouldRedirect = !isLoggedIn;

  return shouldRedirect ? <Navigate to={redirectTo} /> : <>{component}</>;
};

export default PrivateRoute;
