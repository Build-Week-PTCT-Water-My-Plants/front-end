import React from "react";

//MUI imports
import Typography from "@material-ui/core/Typography";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { AddCircleOutlined, SubjectOutlined } from "@material-ui/icons";
import { useHistory, useLocation } from "react-router";
import { makeStyles } from "@material-ui/core";

export const drawerWidth = 240;

// const useStyles = makeStyles((theme) => {
//     return {
//         drawer: {
//             width: drawerWidth,
//         },
//     }
// })

const SideNav = () => {
  const history = useHistory();
  const location = useLocation();
  const menuItems = [
    {
      text: "My Plants",
      icon: <SubjectOutlined color="secondary" />,
      path: "/plants",
    },
    {
      text: "Add A Plant",
      icon: <AddCircleOutlined color="secondary" />,
      path: "/plantform",
    },
  ];

  return (
    <Drawer variant="permanent" anchor="left">
      <div>
        <Typography variant="h5">Water My Plants</Typography>
      </div>

      <List>
        {menuItems.map((item) => (
          <ListItem
            key={item.text}
            button
            onClick={() => history.push(item.path)}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default SideNav;
