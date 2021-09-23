import "./App.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import SideNav from "./components/SideNav";
import Landing from "./components/Landing";
import Login from "./components/Login";
import Register from "./components/Register";
import PlantList from "./components/PlantList";
import PlantForm from "./components/PlantForm";
import { connect } from "react-redux";

import { createTheme, ThemeProvider, makeStyles } from "@material-ui/core";
import { green } from "@material-ui/core/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: "#fefefe",
    },
    secondary: green,
  },
});

const useStyles = makeStyles((theme) => {
  return {
    components: {
      width: "100%",
      padding: theme.spacing(3),
    },
    spacer: theme.mixins.toolbar,
  };
});

function App() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className="App">
          <Nav />
          <SideNav />

          <div className={classes.components}>
            <div className={classes.spacer}></div>

            <Switch>
              <Route exact path="/" component={Login} />
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
              <Route path="/plants" component={PlantList} />
              <Route path="/plantform" component={PlantForm} />
            </Switch>
          </div>
        </div>
      </Router>
    </ThemeProvider>
  );
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.isLoggedIn,
  };
};

export default connect(mapStateToProps, {})(App);
