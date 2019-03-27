import React, { Component } from "react";
import { withRouter } from 'react-router-dom';
import "./Signin.css";
import axios from "axios";

class Signin extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      email: "",
      password: "",
      isSignedIn: false,
    }
  }

  

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    let obj = {
      email: this.state.email,
      password: this.state.password
    };
    axios({
      method: "post",
      url: "http://localhost:5000/signIn",
      data: obj
    })
      .then(response => {
        console.log('response',response);
        localStorage.setItem("id",response.data.id)
        localStorage.setItem("name",response.data.name)
        localStorage.setItem("email",response.data.email)
        localStorage.setItem("token",response.data.token)
      })
      .catch(function(error) {
        console.log(error);
      });
    console.log(this.state.isSignedUp);
    this.setState({
      isSignedIn: true
    });
    e.preventDefault();
    
  };

  routeChange = () => {
    if(this.state.isSignedIn) {
        let path = `/UserInfo`;
  this.props.history.push(path);
    }
  
}
  
  render() {
    return (
  <div className="container">
  <form action="" onSubmit={this.handleSubmit}>
<h1>Sign In</h1>
<input id="email"
            type="email"
            className="validate"
            value={this.state.email}
            onChange={e => this.setState({ email: e.target.value })}
            placeholder="Email"/>
<input id="password"
                  type="password"
                  className="validate"
                  value={this.state.password}
                  onChange={e => this.setState({ password: e.target.value })} placeholder="Password" />
<button type="Submit" onClick={this.routeChange} >Submit</button>

</form>
<br/>
<span>Don't Have An Acount:</span>
<br/>
<a href="/Signup">Sign Up</a>
  </div>
    );
  }
}

export default Signin;
