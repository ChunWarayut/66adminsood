import React from "react";
import Navigation from "../components/Navigation";
import { Switch, Route } from "react-router-dom";
import Member from "../components/Member"
import Formula from "../components/Formula"
import Home from "../components/Home"
import Login from "../components/Login"
export default function RouterNav() {
    return <Switch>
    <Route path="/login">
      <Login />
    </Route>
    <Route path="/home">
      <Navigation/>
      <Home />
    </Route>
    <Route path="/member">
      <Navigation/>
      <Member />
    </Route>
    <Route path="/formula">
      <Navigation/>
      <Formula />
    </Route>
    <Route path="/">
      <Navigation/>
      <Home />
    </Route>

  </Switch>

}