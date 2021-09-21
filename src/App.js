import "./App.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import SideNav from "./components/SideNav";
import Landing from "./components/Landing";
import Login from "./components/Login";
import Register from "./components/Register";
import PlantList from "./components/PlantList";
import PlantForm from "./components/PlantForm";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <SideNav />

        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/plants" component={PlantList} />
          <Route path="/plantform" component={PlantForm} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
