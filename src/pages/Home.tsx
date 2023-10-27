import React from "react";
import { Helmet } from "react-helmet";
import Welcome from "../components/Welcome/Welcome";

const Home: React.FC = () => {
  return (
    <div>
      <Helmet>
        <title>Matrix phonebook</title>
      </Helmet>
      <Welcome />
    </div>
  );
};

export default Home;
