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

class ToDoList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    console.log("here todo list");
  }

  render() {
    return (
      <Container>
        <div className="container">
          <div className="input">
            <InputGroup>
              <Input className="input1" placeholder="   Add a new todo" />
              <Input
                className="input1"
                placeholder="   Add a description to your todo"
              />

              <InputGroupAddon addonType="append">
                <Button className="btn btn-info" className="btn">
                  Add
                </Button>
              </InputGroupAddon>
            </InputGroup>
          </div>
          <div className="card">
            {/* <Card className="mapCardN"> */}
            <CardBody>
              <CardTitle> <strong>this.props.article.title</strong> </CardTitle>
              <CardSubtitle>this.props.article.description</CardSubtitle>
            </CardBody>
            <CardFooter>
              <Row>
                <Col xs="8" sm="8">
                  <br />
                  <span>this.props.article.source.date</span>
                </Col>
                <Col xs="4" sm="4">
                  <Row>
                    <Col xs="4" sm="4">
                      <br />
                     <a href=""><Icon small className="icon">delete</Icon>{" "}</a>

                    </Col>
                    <Col xs="4" sm="4">
                      {" "}
                      <br />
                      <a href=""> <Icon small>visibility</Icon></a>
                    </Col>
                    <Col xs="4" sm="4">
                      {" "}
                      <br />
                      <a href=""><Icon small>check_circle</Icon></a>

                    </Col>
                  </Row>
                </Col>
              </Row>
            </CardFooter>
            {/* </Card> */}
          </div>
        </div>
      </Container>
    );
  }
}
export default ToDoList;
