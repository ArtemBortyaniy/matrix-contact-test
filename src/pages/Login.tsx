import React from "react";
import { Helmet } from "react-helmet";
import LoginForm from "../components/LoginForm/LoginForm";
import Background from "../images/matrix.jpg";

const styles = {
  container: {
    height: `100vh`,
    padding: `60px`,
    backgroundImage: ` url(${Background})`,
    backgroundSize: `500px`,
  },
};
const Login: React.FC = () => {
  return (
    <div style={styles.container}>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <LoginForm />
    </div>
  );
};

export default Login;
