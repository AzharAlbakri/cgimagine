import React, { Component } from "react";
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
    
  };
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
                    <a
                      href=""
                      id={this.props.todo.id}
                      onClick={this.handleRemove}
                    >
                      <Icon small className="icon">
                        delete
                      </Icon>{" "}
                    </a>
                  </Col>
                  <Col xs="4" sm="4">
                    {" "}
                    <br />
                    <a href="">
                      {" "}
                      <Icon small>visibility</Icon>
                    </a>
                  </Col>
                  <Col xs="4" sm="4">
                    {" "}
                    <br />
                    <a href="">
                      <Icon small>check_circle</Icon>
                    </a>
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
