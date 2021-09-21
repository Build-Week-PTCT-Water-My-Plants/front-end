import React from "react";
import { connect } from "react-redux";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

const Nav = () => {
  return (
    <AppBar elevation={0}>
      <Toolbar></Toolbar>
    </AppBar>
  );
};

export default connect()(Nav);
