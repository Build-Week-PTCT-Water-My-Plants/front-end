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
      .post("", loginData)
      .then(res => {
        console.log(res)
      })
      .catch(err => console.log("Error, err"))
  }

  const onChange = (e) => {
    e.preventDefault();
    console.log(loginData);
    setLoginData(initialLoginData)
  }

  useEffect(() => {

  })

  return (

    <form>
      <div className="login">
        
        <h3>Login</h3>
          <label>Username:</label>
            <input
              type = "text"
              name = "username"
              value = { loginData.username }
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
