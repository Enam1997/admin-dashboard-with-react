import React from "react";
import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import { Topbar } from "./components/topbar/Topbar";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Users from "./pages/users/Users";

function App() {
  return (
    <Router className="App">
      <Topbar />
      <div className="container">
        <Sidebar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
