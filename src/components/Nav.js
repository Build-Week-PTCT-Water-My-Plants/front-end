import React from "react";
import { connect } from "react-redux";
import { setLoggedIn, setLoggedOut } from "../actions";
import { makeStyles } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import SpaOutlined from "@material-ui/icons/SpaOutlined";
import Button from "@material-ui/core/Button";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import { drawerWidth } from "./SideNav";
import { useHistory } from "react-router";

const useStyles = makeStyles((theme) => {
  return {
    appbar: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
    toolbar: theme.mixins.toolbar,
    nature: {
      flexGrow: 1,
    },
  };
});

const Nav = (props) => {
  const classes = useStyles();
  const history = useHistory();
  const logout = () => {
    console.log("Logging out...");
    localStorage.removeItem("token");
    props.setLoggedOut();
    history.push("/login");
  };
  const login = () => {
    console.log("Logging in...");
    props.setLoggedIn();
  };
  return (
    <AppBar className={classes.appbar} elevation={0} color="secondary">
      <Toolbar>
        <Typography className={classes.nature} color="textSecondary">
          <SpaOutlined />
          {props.isLoggedIn ? "Welcome" : "Welcome to Water My Plants"}
        </Typography>
        {props.isLoggedIn ? (
          <Button
            onClick={logout}
            color="primary"
            variant="contained"
            endIcon={<KeyboardArrowRight />}
          >
            Logout
          </Button>
        ) : (
          <Button onClick={login} color="primary" variant="contained">
            Login
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.isLoggedIn,
  };
};

export default connect(mapStateToProps, { setLoggedIn, setLoggedOut })(Nav);
