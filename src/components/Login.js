import React, { useState, useEffect } from "react";
import axios from 'axios';

const initialData = {
  username: "",
  password: "",
}

const initialErrors = {
  username: "",
  password: "",
}


const Login = () => {

  const [loginData, setLoginData] = useState(initialData);
  const [loginErrors, setLoginErrors] = useState(initialErrors);
  const [loginDisabled, setLoginDisabled] = useState(true);


  const formSubmit = (e) => {
    e.preventDefault();
    console.log("Submit Function", loginData);
    
  }

  const onChange = (e) => {
    console.log(loginData);
    setLoginData({...loginData, [e.target.name]: e.target.value})
  }

  return (

    <form onSubmit = { formSubmit }>
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
            name = "submit">Submit</button>
            </div>
      </div>
    </form>

  );
};


export default Login;
