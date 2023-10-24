import React from "react";
import { Link } from "./UserMenu.styled";

const UserMenu: React.FC = () => {
  return (
    <div>
      <Link to="/contacts">Contacts</Link>
    </div>
  );
};

export default UserMenu;
