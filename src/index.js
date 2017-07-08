import React from "react";
import ReactDOM from "react-dom";
import { Home, Navbar, Portfolio } from "./components";

import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "./site.css";

ReactDOM.render(
  <div>
    <Navbar />
    <Home />
    <Portfolio />
  </div>,
  document.getElementById("root")
);
