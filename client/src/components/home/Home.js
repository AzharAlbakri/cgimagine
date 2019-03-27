import React, { Component } from "react";
import { Button } from "reactstrap";

import "./Home.css";
import BG from "./bg.jpg";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: localStorage.getItem("token")
    };
  }
  render() {
    return (
      <body>
        <container>
          <div>
            <h1 className="title">MAKE YOUR PERFECT TO DO LIST</h1>
          </div>
          <div>
            <div style={{ paddingLeft: "20%", paddingRight: "20%" }}>
              {this.state.token ? (
                <Button
                  href="todolist"
                  className="register"
                  size="lg"
                  block
                  style={{
                    marginBottom:"230px",
                    padding: "20px 50px 50px 20px",
                    backgroundColor: "rgb(132, 0, 255)",
                    color: "aliceblue"
                  }}
                >
                  <strong> Start Now</strong>
                </Button>
              ) : (
                <Button
                  href="Signup"
                  className="register"
                  size="lg"
                  block
                  style={{
                    marginBottom:"230px",
                    padding: "20px 50px 50px 20px",
                    backgroundColor: "rgb(132, 0, 255)",
                    color: "aliceblue"
                  }}
                >
                  Start Now
                </Button>
              )}
            </div>
          </div>
        </container>
      </body>
    );
  }
}

export default Home;
