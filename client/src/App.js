import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "./components/layout/Navbar";

import logo from './logo.svg';
import "./App.css";



class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
         <NavBar />
         <h1>hiiiiiii</h1>

         
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
