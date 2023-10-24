import React from "react";
import { Link } from "./AuthNav.styled";

const AuthNav: React.FC = () => {
  return (
    <div>
      <Link to="/login">Log In</Link>
    </div>
  );
};

export default AuthNav;
