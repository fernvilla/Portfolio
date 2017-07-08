import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home, Navbar } from "./components";

import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "./site.css";

ReactDOM.render(
  <BrowserRouter forceRefresh>
    <div>
      <Navbar />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/portfolio" component={Home} />
      </Switch>
    </div>
  </BrowserRouter>,
  document.getElementById("root")
);
