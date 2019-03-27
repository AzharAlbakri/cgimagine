import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./Signin.css";
import axios from "axios";
import { Alert } from "reactstrap";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      name: "",
      isNotUpload: true,
      isSignedUp: false,
      image: ""
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    let obj = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password
      // image: this.state.image
    };
    axios({
      method: "post",
      url: "http://localhost:5000/signUp",
      data: obj
    })
      .then(response => {
        console.log("response", response);
        localStorage.setItem("id", response.data.id);
        localStorage.setItem("name", response.data.name);
        localStorage.setItem("email", response.data.email);
        localStorage.setItem("token", response.data.token);
      })
      .catch(function(error) {
        console.log(error);
      });
    console.log(this.state.isSignedUp);
    this.setState({
      isSignedUp: true
    });
    e.preventDefault();
  };

  routeChange = () => {
    if (this.state.isSignedIn) {
      let path = `/UserInfo`;
      this.props.history.push(path);
    }
  };
  render() {
    return (
      <div className="container">
        <form action="" onSubmit={this.handleSubmit}>
          <h1>Sign Up</h1>
          <input
            type="text"
            placeholder="Name"
            id="name"
            value={this.state.name}
            onChange={e => this.setState({ name: e.target.value })}
          />
          <input
            id="email"
            type="email"
            className="validate"
            value={this.state.email}
            onChange={e => this.setState({ email: e.target.value })}
            placeholder="Email"
          />
          <input
            id="password"
            type="password"
            className="validate"
            value={this.state.password}
            onChange={e => this.setState({ password: e.target.value })}
            placeholder="Password"
          />

          <br />
          <button type="Submit" onClick={this.routeChange}>
            Submit
          </button>
          <br />
          <span>Already User:</span>
          <br />
          <a href="/Signin">Sign In</a>
        </form>
        {this.state.isSignedUp ? (
          <Alert color="success">
            Your acoun created successfully —{" "}
            <a href="/signin">Go to my profile</a>
          </Alert>
        ) : null}
      </div>
    );
  }
}

export default Signup;
