import React, { Fragment } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// COMPONENTS
import { Navbar } from "./components/layout/Navbar";
import { Landing } from "./components/layout/Landing";
import { Register } from "./components/auth/Register";
import { Login } from "./components/auth/Login";

import "./App.css";

function App() {
  return (
    <Router>
      <Fragment>
        <Navbar />
        <Landing />
        <Routes>
          <Route exact path="/" component={<Landing />} />
          {/* </Routes> */}
          {/* <div className="container"> */}
          {/* <Routes> */}
          <Route exact path="/register" component={<Register />} />
          <Route exact path="/register" component={<Login />} />
        </Routes>
        {/* </div> */}
      </Fragment>
    </Router>
  );
}

export default App;
