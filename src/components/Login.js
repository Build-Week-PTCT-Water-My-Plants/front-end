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

  const [formData, setFormData] = useState(initialData);
  const [errors, setErrors] = useState(initialErrors);
  const [disabled, setDisabled] = useState(true);

  const onSubmit = (e) => {
    e.preventDefault();
    formSubmit();
  }

  const formSubmit = (e) => {
    e.preventDefault();
    axios
      .post("", formData)
      .then(res => {
        console.log(res)
      })
      .catch(err => console.log("Error, err"))
  }

  const onChange = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData(initialData)
  }

  useEffect(() => {

  })

  return (

    <form>
      <div className="login">
        
        <h3>Login</h3>
          <label>username:</label>
            <input
              type = "text"
              name = "username"
              value = { formData.username }
              onChange = { onChange }
              />

          <label>password:</label>
          <input
            type = "password"
            name = "pasword"
            value = { formData.password }
            onChange = { onChange }
          />

          <button
            type = "submit"
            name = "submit"
            disabled = {disabled}>submit</button>
      </div>
    </form>

  );
};


export default Login;
