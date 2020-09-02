import React from "react";
import { Switch, Route } from "react-router-dom";


import ApplicantRegisterForm from "./components/Authentication/ApplicantRegisterForm";
import StaffRegisterForm from "./components/Authentication/StaffRegisterForm";
import LoginForm from "./components/Authentication/LoginForm"

import CreateProgrm from "./components/Program/CreateProgram"
import ProgramsList from "./components/Program/ProgramsList"

import NavBar from "./components/Navigation/NavBar"

import Welcome from "./components/HomePages/Welcome"
import Home from "./components/HomePages/Home"

const App = () => (
  <div className="content-wrapper">
    <NavBar />
    <br></br>
    <Switch>
      <Route path="/program/create/" component={CreateProgrm} />
      <Route path="/signup/applicant/" component={ApplicantRegisterForm} />
      <Route path="/signup/staff/" component={StaffRegisterForm} />
      <Route path="/login/" component={LoginForm} />
      <Route path="/programs/" component={ProgramsList} />
      <Route path="/welcome/" component={Welcome} />
      <Route component={Home} />
    </Switch>
  </div>
);

export default App;
