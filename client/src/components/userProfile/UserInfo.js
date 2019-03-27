import React, { Component } from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Container
} from "reactstrap";
import img from "./img.png";
import "./userInfo.css";

class UserInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: localStorage.getItem("id"),
      name: localStorage.getItem("name"),
      email: localStorage.getItem("email")
    };
  }
  componentDidMount() {
    console.log("name:", this.state.name);
  }
  render() {
    return (
      <Container>
        <div>
          <Card className="mapCardN">
            <div>
              <br />
              <img width="30%" style={{ align: "center" }} src={img} alt="" />
            </div>
            <CardBody>
              <CardTitle className="text">
                <strong>{this.state.name}</strong>
              </CardTitle>
              <CardSubtitle className="text" style={{color:"#333333"}}>{this.state.email}</CardSubtitle>
              <Button className="btn" href="/todolist">
                My to do list
              </Button>
              <Button>My Archive</Button>
            </CardBody>
          </Card>
        </div>
      </Container>
    );
  }
}
export default UserInfo;
