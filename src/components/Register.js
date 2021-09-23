import React from "react";
import { useHistory } from "react-router";

const Register = () => {
  const history = useHistory();
  const pushLogin = () => {
    history.push("/login");
  };
  return (
    <div className="register">
      <h3>Register</h3>
      <button onClick={pushLogin}>Login</button>
    </div>
  );
};

export default Register;
