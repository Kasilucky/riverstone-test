import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AdminPage from "../containers/AdminPage";
import HomePage from "../containers/HomePage";
import LoginPage from "../containers/LoginPage";
import RegisterPage from "../containers/RegisterPage";
import WelcomePage from "../containers/WelcomePage";


const Routes=(props)=> {
  return (
      <Router>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/register" component={RegisterPage} />
            <Route exact path="/admin" component={AdminPage} />
            <Route exact path="/welcome" component={WelcomePage} />
          </Switch>
      </Router>
  );
}

export default Routes;
