import React from "react";
import Navigation from "../compoments/Navigation";
import { Switch, Route } from "react-router-dom";
import Member from "../compoments/Member"
import Formula from "../compoments/Formula"
import Home from "../compoments/Home"
import Login from "../compoments/Login"
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