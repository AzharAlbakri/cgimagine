import React, { Component } from "react";
import $ from "jquery";

import {
  Card,
  CardLink,
  CardBody,
  CardTitle,
  CardSubtitle,
  Container
} from "reactstrap";
import "./ToDoList.css";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleDelete = e => {
    console.log("remove btn fires");
    console.log("removeBTN", e.target.id);
    const target = e.target;
    const item = JSON.parse(target.id);
    $.ajax({
      type: "DELETE",
      url: "http://localhost:5000/deleteTodo",
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

  handleUncompleted = e => {
    console.log("unvisible btn fires");
    console.log("unvisibleBTN", e.target.id);
    const target = e.target;
    const item = JSON.parse(target.id);
    $.ajax({
      type: "PUT",
      url: "http://localhost:5000/unCompletedTodo",
      dataType: "json",
      data: { id: item },
      success: function(response) {
        console.log("successfully uncompleted");
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
                onClick={this.handleDelete}
              >
                Delete
              </CardLink>
              <CardLink
                href="#"
                id={this.props.todo.id}
                onClick={this.handleUncompleted}
              >
                UnCompleted
              </CardLink>
            </CardBody>
          </Card>
        </div>
      </Container>
    );
  }
}
export default Todo;
