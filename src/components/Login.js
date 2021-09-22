import React, { useState, useEffect } from "react";
import axios from 'axios';

const initialLoginData = {
  username: "",
  password: "",
}

const initialLoginErrors = {
  username: "",
  password: "",
}


const Login = () => {

  const [loginData, setLoginData] = useState(initialLoginData);
  const [loginErrors, setLoginErrors] = useState(initialLoginErrors);
  const [loginDisabled, setLoginDisabled] = useState(true);

  const onSubmit = (e) => {
    e.preventDefault();
    formSubmit();
  }

  const formSubmit = (e) => {
    e.preventDefault();
    axios
      .post("", initialLoginData)
      .then(res => {
        console.log(res)
      })
      .catch(err => console.log("Error, err"))
  }

  const onChange = (e) => {
    e.preventDefault();
    console.log(initialLoginData);
    setLoginData(initialLoginData)
  }

  useEffect(() => {

  })

  return (

    <form onSubmit = { formSubmit }>
      <div className="login">
        
        <h3>Login</h3>
          <label>Username:</label>
            <input
              type = "text"
              name = "username"
              value = { initialLoginData.username }
              onChange = { onChange }
              />
              <br/>

          <label>Password:</label>
          <input
            type = "password"
            name = "pasword"
            value = { loginData.password }
            onChange = { onChange }
          />
          <br/>

        <div>
          <br/>
          <button
            type = "submit"
            name = "submit"
            disabled = {loginDisabled}>Submit</button>
            </div>
      </div>
    </form>

  );
};


export default Login;
