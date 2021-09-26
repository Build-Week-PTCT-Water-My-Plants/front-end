import React, {useState} from "react";
import { useHistory } from "react-router";
import { Typography, Button, Container, makeStyles } from "@material-ui/core/";
import TextField from "@material-ui/core/TextField";



const useStyles = makeStyles({
  input: {
    marginTop: 20,
    marginBottom: 20,
    display: "block",
  },
});

const initialCredentials = {
  firstName:"",
  lastName:"",
  email: "",
  password: "",
};

const Register = () => {

  const [signUp, setsignUp] = useState(initialCredentials)
  
  const classes = useStyles();
  
  const history = useHistory();
  const pushLogin = () => {
    history.push("/login");
  };

  const handleChanges = (e) => {
    setsignUp({
      ...signUp,
      [e.target.name]:e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }


  return (
    <Container>
    <Typography variant="h4" color="textPrimary">Sign Up</Typography>
    <form onSubmit={handleSubmit}>
      
     <TextField
      onChange={handleChanges}
      name='firstName'
      label='First Name'
      type='text'
      variant='outlined'
      color='secondary'
      className={classes.input}
      value={signUp.firstName}
      required
      />

      <TextField
      onChange={handleChanges}
      name='lastName'
      label='Last Name'
      type='text'
      variant='outlined'
      color='secondary'
      className={classes.input}
      value={signUp.lastName}
      required
      />

    <TextField
      onChange={handleChanges}
      name='email'
      label='Email'
      type='email'
      variant='outlined'
      color='secondary'
      className={classes.input}
      value={signUp.email}
      required
      />

    <TextField
      onChange={handleChanges}
      name='password'
      label='Password'
      type='Password'
      variant='outlined'
      color='secondary'
      className={classes.input}
      value={signUp.password}
      required
      />
      

      <Button
       type="submit"
       color='primary'
       variant='contained'
       >
         Sign Up
         </Button>

      <Button
       onClick={pushLogin}
       type="submit"
       color='primary'
       variant='contained'
       >
         Login
         </Button>
    </form>
  </Container>
  );
};

export default Register;
