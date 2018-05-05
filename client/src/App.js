import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Saved from "./pages/Saved";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import SplashLabel from "./components/SplashLabel";

const App = () => (
  <Router>
    <div>
      <SplashLabel />
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        {/*  <Route exact path="/saved" component={Saved} /> */}
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
);

export default App;
