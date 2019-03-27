import React, { Component } from "react";
import $ from "jquery";

import {
  CardLink,
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
    console.log("removeBTN", e.target.id);
    const target = e.target;
    const item = JSON.parse(target.id);
    $.ajax({
      type: "PUT",
      url: "http://localhost:5000/removeTodo",
      dataType: "json",
      data: { id: item },
      success: function(response) {
        console.log("successfully deleted");
      },
      error: function() {
        console.log("error");
      }
    });
    window.location.reload();
  };

  handleUnvisibil = e => {
    console.log("unvisible btn fires");
    console.log("unvisibleBTN", e.target.id);
    const target = e.target;
    const item = JSON.parse(target.id);
    $.ajax({
      type: "PUT",
      url: "http://localhost:5000/unvisibleTodo",
      dataType: "json",
      data: { id: item },
      success: function(response) {
        console.log("successfully unvisibled");
      },
      error: function() {
        console.log("error");
      }
    });
    window.location.reload();
  };

  handleComplete = e => {
    console.log("complete btn fires");
    console.log("completeBTN", e.target.id);
    const target = e.target;
    const item = JSON.parse(target.id);
    $.ajax({
      type: "PUT",
      url: "http://localhost:5000/completeTodo",
      dataType: "json",
      data: { id: item },
      success: function(response) {
        console.log("successfully complete");
      },
      error: function() {
        console.log("error");
      }
    });
    window.location.reload();
  };

  render() {
    
    return (
      <Container>
        <div>
          <Card>
            <CardBody>
              <CardTitle>
                <strong>{this.props.todo.title}</strong>
              </CardTitle>
              <CardSubtitle>{this.props.todo.description}</CardSubtitle>
              <br />
              <CardSubtitle>{this.props.todo.date}</CardSubtitle>
            </CardBody>
            <CardBody>
              <hr />
              <CardLink
                href="#"
                id={this.props.todo.id}
                onClick={this.handleRemove}
              >
                Remove
              </CardLink>
              <CardLink
                href="#"
                id={this.props.todo.id}
                onClick={this.handleUnvisibil}
              >
                Unvisible
              </CardLink>
              <CardLink
                href="#"
                id={this.props.todo.id}
                onClick={this.handleComplete}
              >
                Complete
              </CardLink>
            </CardBody>
          </Card>
        </div>
      </Container>
    );
  }
}
export default Todo;
