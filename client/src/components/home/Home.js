import React, { Component } from "react";
import { Button } from "reactstrap";

import "./Home.css";
import BG from "./bg.jpg";
class Home extends Component {
  constructor(props) {
    super(props);
  this.state={
    token: localStorage.getItem("token"),
  }
}
  render() {
    return (
      <body>
        <container>

        <div className="container">
            <h1 className="title">MAKE YOUR PERFECT TO DO LIST</h1>
            {/* <input type="text" placeholder="what do you want to do?"/> */}
          
          </div>
          <div className="container">
            <div className="container" style={{paddingLeft:"20%",paddingRight:"20%"}}>
               {this.state.token? <Button href=" todolist" className="register" size="lg" block style={{padding:"20px 50px 50px 20px"}}>
             <strong> Start Now</strong>
            </Button>:
            <Button href="Signup" className="register" size="lg">
              Start Now
            </Button> }
           
            </div>
           
        </div>
        </container>

      </body>
    );
  }
}

export default Home;
