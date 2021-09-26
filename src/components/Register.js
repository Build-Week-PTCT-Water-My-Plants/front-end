import React, { useState } from "react";
import { useHistory } from "react-router";
import { Typography, Button, Container, makeStyles } from "@material-ui/core/";
import TextField from "@material-ui/core/TextField";
import axios from "axios";
import { setLoggedIn } from "../actions";
import { connect } from "react-redux";

const useStyles = makeStyles({
  input: {
    marginTop: 20,
    marginBottom: 20,
    display: "block",
  },
  btnRight: {
    marginLeft: 20,
  },
});

const initialCredentials = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
};

const Register = ({ setLoggedIn }) => {
  const [signUp, setsignUp] = useState(initialCredentials);

  const classes = useStyles();

  const history = useHistory();
  const pushLogin = () => {
    history.push("/login");
  };

  const handleChanges = (e) => {
    setsignUp({
      ...signUp,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://reqres.in/api/users", signUp)
      .then((res) => {
        console.log("Login success res: ", res.data);
        localStorage.setItem("token", res.data.id);
        setLoggedIn();
        history.push("/plants");
      })
      .catch((err) => {
        console.log("Login fail err : ", err);
      });
  };

  return (
    <Container>
      <Typography variant="h4" color="textPrimary">
        Sign Up
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          onChange={handleChanges}
          name="firstName"
          label="First Name"
          type="text"
          variant="outlined"
          color="secondary"
          className={classes.input}
          value={signUp.firstName}
          required
        />

        <TextField
          onChange={handleChanges}
          name="lastName"
          label="Last Name"
          type="text"
          variant="outlined"
          color="secondary"
          className={classes.input}
          value={signUp.lastName}
          required
        />

        <TextField
          onChange={handleChanges}
          name="email"
          label="Email"
          type="email"
          variant="outlined"
          color="secondary"
          className={classes.input}
          value={signUp.email}
          required
        />

        <TextField
          onChange={handleChanges}
          name="password"
          label="Password"
          type="Password"
          variant="outlined"
          color="secondary"
          className={classes.input}
          value={signUp.password}
          required
        />

        <Button type="submit" color="primary" variant="contained">
          Sign Up
        </Button>

        <Button
          className={classes.btnRight}
          onClick={pushLogin}
          type="submit"
          color="primary"
          variant="contained"
        >
          Login
        </Button>
      </form>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps, { setLoggedIn })(Register);
