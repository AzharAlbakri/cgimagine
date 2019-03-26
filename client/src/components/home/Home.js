import React, { Component } from "react";
import { Button } from "reactstrap";

import "./Home.css";
import BG from "./bg.jpg";
class Home extends Component {
  render() {
    return (
      <body>
        <div className="container">
            <h1 className="title">MAKE YOUR PERFECT TO DO LIST</h1>
            {/* <input type="text" placeholder="what do you want to do?"/> */}
          
          </div>
          <div className="container">
            <Button href="Signup" className="register" size="lg">
              Start Now
            </Button>{" "}
        </div>
      </body>
    );
  }
}

export default Home;
