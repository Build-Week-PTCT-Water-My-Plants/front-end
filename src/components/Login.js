import React, { useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router";
import { Typography, Button, Container } from "@material-ui/core/";
import { KeyboardArrowRight } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/";
import TextField from "@material-ui/core/TextField";
import axios from "axios";
import { setLoggedIn } from "../actions";

const useStyles = makeStyles({
  input: {
    marginTop: 20,
    marginBottom: 20,
    display: "block",
  },
});

const initialCredentials = {
  email: "",
  password: "",
};

const Login = ({ setLoggedIn }) => {
  const [credentials, setCredentials] = useState(initialCredentials);

  //still need validation from yup
  const classes = useStyles();

  const handleChanges = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://reqres.in/api/login", credentials)
      .then((res) => {
        console.log("Login success res: ", res.data.token);
        localStorage.setItem("token", res.data.token);
        setLoggedIn();
        history.push("/plants");
      })
      .catch((err) => {
        console.log("Login fail err : ", err);
      });
  };

  return (
    <Container>
      <Typography variant="h4" color="textPrimary" gutterBottom>
        Login
      </Typography>
      <Typography variant="subtitle1" color="textSecondary" gutterBottom>
        test credentials - email: eve.holt@reqres.in | password: cityslicka
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          onChange={handleChanges}
          name="email"
          label="email"
          type="email"
          value={credentials.email}
          className={classes.input}
          variant="outlined"
          color="secondary"
          required
        />
        <TextField
          onChange={handleChanges}
          name="password"
          label="Password"
          type="password"
          value={credentials.password}
          className={classes.input}
          variant="outlined"
          color="secondary"
          required
        />
        <Button
          type="submit"
          color="primary"
          variant="contained"
          endIcon={<KeyboardArrowRight />}
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

export default connect(mapStateToProps, { setLoggedIn })(Login);
