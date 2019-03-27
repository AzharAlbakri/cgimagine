import React, { Component } from "react";
import $ from "jquery";

import {
  Card,
  CardImg,
  CardBlock,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  CardFooter,
  Container,
  Row,
  Col,
  InputGroup,
  Input,
  InputGroupAddon
} from "reactstrap";
import { Icon } from "react-materialize";
import "./ToDoList.css";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleRemove = e => {
    console.log("remove btn fires");
    console.log("removeBTN",e.target.id)
    const target = e.target;
    const item = JSON.parse(target.id);
    $.ajax({
      type: "PUT",
      url: "http://localhost:5000/removeTodo",
      dataType: "json",
      data: {id:item},
      success: function(response) {
          console.log("successfully deleted");
      },
      error: function () {
          console.log("error");
      }
  });
  window.location.reload()

  };

  handleUnvisibil = e => {
    console.log("unvisible btn fires");
    console.log("unvisibleBTN",e.target.id)
    const target = e.target;
    const item = JSON.parse(target.id);
    $.ajax({
      type: "PUT",
      url: "http://localhost:5000/unvisibleTodo",
      dataType: "json",
      data: {id:item},
      success: function(response) {
          console.log("successfully unvisibled");
      },
      error: function () {
          console.log("error");
      }
  });
  window.location.reload()
  }
  

  handleComplete = e => {
    console.log("complete btn fires");
    console.log("completeBTN",e.target.id)
    const target = e.target;
    const item = JSON.parse(target.id);
    $.ajax({
      type: "PUT",
      url: "http://localhost:5000/completeTodo",
      dataType: "json",
      data: {id:item},
      success: function(response) {
          console.log("successfully completed");
      },
      error: function () {
          console.log("error");
      }
  });
  window.location.reload()
  }

  render() {
    return (
      <Container>
        <div className="card">
          {/* <Card className="mapCardN"> */}
          <CardBody>
            <CardTitle>
              {" "}
              <strong>{this.props.todo.title}</strong>{" "}
            </CardTitle>
            <CardSubtitle>{this.props.todo.description}</CardSubtitle>
          </CardBody>
          <CardFooter>
            <Row>
              <Col xs="8" sm="8">
                <br />
                <span>{this.props.todo.date}</span>
              </Col>
              <Col xs="4" sm="4">
                <Row>
                  <Col xs="4" sm="4">
                    <br />
                    <button href="#" id={this.props.todo.id} onClick={this.handleRemove}>Delete</button>
                    {/* <a
                      href=""
                      id={this.props.todo.id} onClick={this.handleRemove}
                    >
                      <Icon small className="icon">
                        delete
                      </Icon>{" "}
                    </a> */}
                  </Col>
                  <Col xs="4" sm="4">
                    {" "}
                    <br />
                   
                    <button href="#" id={this.props.todo.id} onClick={this.handleComplete}>Unremoved</button>

                    {/* <a href="">
                      <Icon small>check_circle</Icon>
                    </a> */}
                  </Col>
                </Row>
              </Col>
            </Row>
          </CardFooter>
          {/* </Card> */}
        </div>
      </Container>
    );
  }
}
export default Todo;
