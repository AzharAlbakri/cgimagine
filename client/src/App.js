import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "./components/layout/Navbar";
import Home from "./components/home/Home";
import Signup from './components/register/Signup';
import Signin from './components/register/Signin'


import "./App.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/Signup" component={Signup} />
            <Route exact path="/Signin" component={Signin} />

          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
