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


  const formSubmit = (e) => {
    e.preventDefault();
    console.log("Submit Function", regFormData);
    axios
      .post("", regFormData)
      .then(res => {
        console.log(res)
      })
      .catch(err => console.log("Error, err"))
  }

  const onChange = (e) => { 
    //console.log(regFormData);
    setRegFormData({...regFormData, [e.target.name]: e.target.value})
  }


  return (

    <form onSubmit = { formSubmit }>
      <div className="register">

        <h3>Register</h3>
          <label>First Name:</label>
          <input 
            type = "text"
            name = "firstname"
            value = { regFormData.firstname }
            onChange = { onChange }
          />
           <br/>

        <label>Last Name:</label>
          <input 
            type = "text"
            name = "lastname"
            value = { regFormData.lastname }
            onChange = { onChange }
          />
          <br/>

        <label>Username:</label>
          <input 
          type = "text"
          name = "username"
          value = { regFormData.username }
          onChange = { onChange }  
          />
           <br/>

        <label>Email:</label>
          <input 
          type = "text"
          name = "email"
          value = { regFormData.email }
          onChange = { onChange }
          />
           <br/>

        <label>Password:</label>
          <input 
          type = "text"
          name = "password"
          value = { regFormData.password}
          onChange = { onChange }
          />
           <br/>

        <div>
          <br/>
          <button
            type = "submit"
            name = "submit"
            >Submit</button>
            </div>

    </div>
    </form>
  );
};

export default Register;
