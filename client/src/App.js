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
        {/* <Landing /> */}
        <Routes>
          {/* </Routes> */}
          <Fragment>
            <Route path="/" element={<Landing />} />
            {/* <Routes> */}
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Fragment>
        </Routes>
      </Fragment>
    </Router>
  );
}

export default App;
