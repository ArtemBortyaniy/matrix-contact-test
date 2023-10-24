import React from "react";
import Navigation from "../Navigation/Navigation";
import { Header } from "./AppBar.styled";
import AuthNav from "../AuthNav/AuthNav";
import UserMenu from "../UserMenu/UserMenu";
import { useAuth } from "../../hooks";

const AppBar: React.FC = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Header>
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
      <Navigation />
    </Header>
  );
};

export default AppBar;
