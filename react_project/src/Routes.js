import React from "react";
import { Switch } from "react-router-dom";
import LoginForm from "./containers/LoginForm";
import Buy from "./containers/Buy";
import AppliedRoute from "./components/AppliedRoute";
import MyFlights from "./containers/MyFlights";

export default ({ childProps }) =>
  <Switch>
    <AppliedRoute path="/" exact component={LoginForm} props={childProps} />
    <AppliedRoute path="/login" exact component={LoginForm} props={childProps} />
    <AppliedRoute path="/buy" exact component={Buy} props={childProps} />
    <AppliedRoute path="/myflights" exact component={MyFlights} props={childProps} />
  </Switch>;
