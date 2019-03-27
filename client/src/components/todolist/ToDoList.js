import React, { Component } from "react";
import axios from "axios";
import $ from "jquery";
import Todo from "./Todo.js";
import Removed from "./Removed.js";
import Completed from "./Completed";
import Unvisible from "./Unvisible";

import classnames from "classnames";
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
  InputGroupAddon,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink
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
      todos: [],
      comTodos: [],
      RemTodos: [],
      unvTodos: [],
      activeTab: "1"
    };
  }
  componentDidMount() {
    console.log("here did mount todolist");

    var owner_id = { owner_id: this.state.owner_id };
    //Uncompleted Todos
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

    //Completed Todos
    $.ajax({
      url: "http://localhost:5000/completedToDos",
      type: "POST",
      data: JSON.stringify(owner_id),
      contentType: "application/json",
      success: function(data) {
        this.setState({
          comTodos: data
        });
        console.log("comTodos", this.state.comTodos);

        return data;
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });

    //Removed Todos
    $.ajax({
      url: "http://localhost:5000/removedToDos",
      type: "POST",
      data: JSON.stringify(owner_id),
      contentType: "application/json",
      success: function(data) {
        this.setState({
          RemTodos: data
        });
        console.log("RemTodos", this.state.RemTodos);

        return data;
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });

    //Unvisible Todos
    $.ajax({
      url: "http://localhost:5000/unvisibledToDos",
      type: "POST",
      data: JSON.stringify(owner_id),
      contentType: "application/json",
      success: function(data) {
        this.setState({
          unvTodos: data
        });
        console.log("unvTodos", this.state.unvTodos);

        return data;
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  }

  toggle = tab => {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  };

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
    window.location.reload();
  };

  render() {
    return (
      <Container>
        <div >
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
        </div>

        <div>
          <Nav className="tab-navs" tabs>
            <NavItem>
              <NavLink
                className={classnames({ active: this.state.activeTab === "1" })}
                onClick={() => {
                  this.toggle("1");
                }}
              >
               <strong>To Do</strong> 
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: this.state.activeTab === "2" })}
                onClick={() => {
                  this.toggle("2");
                }}
              >
                <strong>Completed Todos</strong> 
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: this.state.activeTab === "3" })}
                onClick={() => {
                  this.toggle("3");
                }}
              >
               <strong>Removed Todos</strong> 
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: this.state.activeTab === "4" })}
                onClick={() => {
                  this.toggle("4");
                }}
              >
              <strong>Unvisible Todos</strong>  
              </NavLink>
            </NavItem>
          </Nav>

          <TabContent activeTab={this.state.activeTab}>
            <TabPane tabId="1">
              <Row>
                {this.state.todos.length !== 0 ? (
                  <Col sm="12">
                    {this.state.todos.map(function(todo, index) {
                      return <Todo todo={todo} key={index} />;
                    })}
                  </Col>
                ) : (
                  <Col sm="12">
                    <h1 style={{ color: "grey", padding: "20px" }}>
                      there are no todos
                    </h1>
                  </Col>
                )}
              </Row>
            </TabPane>
            <TabPane tabId="2">
              <Row>
                {this.state.comTodos.length !== 0 ? (
                  <Col sm="12">
                    {this.state.comTodos.map(function(todo, index) {
                      return <Completed todo={todo} key={index} />;
                    })}
                  </Col>
                ) : (
                  <Col sm="12">
                    <h1 style={{ color: "grey", padding: "20px" }}>
                      there are no completed todos
                    </h1>
                  </Col>
                )}
              </Row>
            </TabPane>
            <TabPane tabId="3">
              <Row>
                {this.state.RemTodos.length !== 0 ? (
                  <Col sm="12">
                    {this.state.RemTodos.map(function(todo, index) {
                      return <Removed todo={todo} key={index} />;
                    })}
                  </Col>
                ) : (
                  <Col sm="12">
                    <h1 style={{ color: "grey", padding: "20px" }}>
                      there are no removed todos
                    </h1>
                  </Col>
                )}
              </Row>
            </TabPane>
            <TabPane tabId="4">
              <Row>
                

                {this.state.unvTodos.length !== 0 ? (
                  <Col sm="12">
                  {this.state.unvTodos.map(function(todo, index) {
                    return <Unvisible todo={todo} key={index} />;
                  })}
                </Col>
                ) : (
                  <Col sm="12">
                    <h1 style={{ color: "grey", padding: "20px" }}>
                      there are no unvisible todos 
                    </h1>
                  </Col>
                )}
              </Row>
            </TabPane>
          </TabContent>
        </div>
      </Container>
    );
  }
}
export default ToDoList;
