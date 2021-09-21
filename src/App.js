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

import { createTheme, ThemeProvider } from "@material-ui/core";
import { green } from "@material-ui/core/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: "#fefefe",
    },
    secondary: green,
  },
});

function App(props) {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className="App">
          <Nav />
          {props.isLoggedIn && <SideNav />}

          <Switch>
            <Route exact path="/" component={Landing} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/plants" component={PlantList} />
            <Route path="/plantform" component={PlantForm} />
          </Switch>
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
