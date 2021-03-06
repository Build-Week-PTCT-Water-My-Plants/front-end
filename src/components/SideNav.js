import React from "react";
import { connect } from "react-redux";

//MUI imports
import Typography from "@material-ui/core/Typography";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { AddCircleOutlined, LocalFloristOutlined } from "@material-ui/icons";
import { useHistory, useLocation } from "react-router";
import { makeStyles } from "@material-ui/core";
import { unsetEditing } from "../actions";

export const drawerWidth = 210;

//figure out media query to adjust side drawer width/content and card container width
const useStyles = makeStyles((theme) => {
  return {
    drawer: {
      width: drawerWidth,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    active: {
      background: "#f4f4f4",
    },
    title: {
      padding: theme.spacing(2),
    },
    "@media (max-width: 600px)": {
      drawerPaper: {
        width: drawerWidth,
      },
    },
  };
});

const SideNav = (props) => {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();
  const menuItems = [
    {
      text: "My Plants",
      icon: <LocalFloristOutlined color="secondary" />,
      path: "/plants",
    },
    {
      text: "Add A Plant",
      icon: <AddCircleOutlined color="secondary" />,
      path: "/plantform",
    },
  ];

  return (
    <Drawer
      variant="permanent"
      anchor="left"
      className={classes.drawer}
      classes={{ paper: classes.drawerPaper }}
    >
      <div>
        <Typography className={classes.title} variant="h5">
          Water My Plants
        </Typography>
      </div>

      {props.isLoggedIn && (
        <List>
          {menuItems.map((item) => (
            <ListItem
              className={
                location.pathname === item.path ? classes.active : null
              }
              key={item.text}
              button
              onClick={() => {
                props.unsetEditing();
                history.push(item.path);
              }}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      )}
    </Drawer>
  );
};

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.isLoggedIn,
  };
};

export default connect(mapStateToProps, { unsetEditing })(SideNav);
