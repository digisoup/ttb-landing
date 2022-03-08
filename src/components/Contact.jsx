import { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import logo from "../assets/ttb.PNG";

function Contact() {
  const [name, setName] = useState("");
  return (
    <Container>
      <Form className="form" action={process.env.REACT_APP_EMAIL} method="post">
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="formFirstName">
              <Form.Label className="label">First Name:</Form.Label>
              <Form.Control
                size="md"
                type="text"
                name="name"
                placeholder="Bob"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="label">Email:</Form.Label>
              <Form.Control
                size="md"
                name="email"
                type="email"
                placeholder="Enter email"
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="formLastName">
              <Form.Label className="label">Last Name:</Form.Label>
              <Form.Control
                size="md"
                name="name"
                type="text"
                placeholder="Bobster"
                onChange={(e) => {}}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formPhone">
              <Form.Label className="label">Phone#:</Form.Label>
              <Form.Control
                name="phone"
                size="md"
                type="phone"
                placeholder="555-555-555"
                onChange={(e) => {}}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button className="btn btn-primary" type="submit">
              Submit
            </Button>
          </Col>
          <Col>
            <img className="logo" src={logo} alt="band logo" />
          </Col>
        </Row>
      </Form>
      <Row></Row>
    </Container>
  );
}

export default Contact;
