import React, { useState, useEffect } from "react";
import axios from 'axios';


const initialState = {
  firstname: "", 
  lastname: "",
  username: "", 
  password: "", 
  email: "", 
}

const initialErrorState = {
  firstname: "", 
  lastname: "",
  username: "", 
  password: "", 
  email: "", 
}


const Register = () => {

  const [regFormData, setRegFormData] = useState(initialState);
  const [regErrors, setRegErrors] = useState(initialErrorState);
  const [regDisabled, setRegDisabled] = useState(true);

  const onSubmit = (e) => {
    e.preventDefault();
    formSubmit();
  }

  const formSubmit = (e) => {
    e.preventDefault();
    axios
      .post("", regFormData)
      .then(res => {
        console.log(res)
      })
      .catch(err => console.log("Error, err"))
  }

  const onChange = (e) => {
    e.preventDefault();
    console.log(regFormData);
    setRegFormData(initialState)
  }

  useEffect(() => {

  })

  return (
    <div className="register">

      <h3>Register</h3>
        <label>First Name:</label>
          <input 
          
          />
           <br/>

      <label>Last Name:</label>
          <input 
          

          />
           <br/>

      <label>Username:</label>
          <input 
          
          />
           <br/>

      <label>Email:</label>
          <input 
          
          />
           <br/>

      <label>Password:</label>
          <input 
          
          />
           <br/>

      <label>Confirm Password:</label>
          <input 
          
          />
           <br/>

      <div>
          <br/>
          <button
            type = "submit"
            name = "submit"
            disabled = {setRegDisabled}>Submit</button>
            </div>

    </div>
  );
};

export default Register;
