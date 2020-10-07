import React from "react";
import logo from "./logo.svg";
import "./App.css";

import { BrowserRouter as Router } from "react-router-dom";

import { Link, Switch, Route} from "react-router-dom";
import Home from "./components/scripts/HomePage/Home";
import Task from "./components/scripts/TaskPage/Task";
import User from "./components/scripts/UserPage/User";
import Login from "./components/scripts/LoginPage/Login";


function App() {
  return (
 
    <React.Fragment>
    <Router>
    <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/home" component={Home} />
        <Route path="/task" component={Task} />
        <Route path="/user" component={User} />
        </Switch>
      </Router>
      </React.Fragment>
  );
}

export default App;
