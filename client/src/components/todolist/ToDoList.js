import React, { Component } from "react";
import axios from "axios";
import $ from "jquery";
import Todo from "./Todo.js";
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

class ToDoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      isAdd: false,
      owner_id: localStorage.getItem("id"),
      todos: []
    };
  }
  componentDidMount() {
    console.log("here did mount todolist");

    var owner_id = { owner_id: 3 };

    $.ajax({
      url: "http://localhost:5000/uncompletedToDos",
      type: "POST",
      data: JSON.stringify(owner_id),
      contentType: "application/json",
      success: function(data) {
        this.setState({
          todos: data
        });
        console.log("todos", this.state.todos);

        return data;
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
    
  }

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleAdd = e => {
    let obj = {
      title: this.state.title,
      description: this.state.description,
      owner_id: this.state.owner_id
    };
    axios({
      method: "post",
      url: "http://localhost:5000/addTodo",
      data: obj
    })
      .then(response => {
        console.log("added successfully");
      })
      .catch(function(error) {
        console.log(error);
      });
    console.log(this.state.isAdd);
    this.setState({
      isAdd: true
    });
    e.preventDefault();
    window.location.reload()
  };

  render() {
    return (
      <Container>
        <div className="container">
          <div className="input">
            <form action="" onSubmit={this.handleAdd}>
              <InputGroup>
                <Input
                  className="input1"
                  type="text"
                  value={this.state.title}
                  id="title"
                  onChange={e => this.setState({ title: e.target.value })}
                  placeholder="   Add a new todo"
                />
                <Input
                  className="input1"
                  type="text"
                  value={this.state.description}
                  id="description"
                  onChange={e => this.setState({ description: e.target.value })}
                  placeholder="   Add a description to your todo"
                />

                <InputGroupAddon addonType="append">
                  <Button
                    type="Submit"
                    className="btn btn-info"
                    className="btn"
                  >
                    Add
                  </Button>
                </InputGroupAddon>
              </InputGroup>
            </form>
          </div>
          {this.state.todos.map(function(todo, index) {
            return <Todo todo={todo} key={index} />;
          })}
        </div>
      </Container>
    );
  }
}
export default ToDoList;
