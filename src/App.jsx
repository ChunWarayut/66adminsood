import React from "react";
import {
  BrowserRouter as Router
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/App.css';
import './assets/scss/App.scss';
import RouterNav from "./router";
export default function App() {
  return (
    <Router>
      <div className="page">
        <RouterNav/>
      </div>
    </Router>
  );
}

