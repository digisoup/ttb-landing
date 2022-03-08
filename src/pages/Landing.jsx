import React from "react";
import image from "../assets/bandPic.jpg";
import logo from "../assets/ttb.PNG";
import Contact from "../components/Contact";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import {
  FaInstagramSquare,
  FaFacebookSquare,
  FaTwitterSquare,
} from "react-icons/fa";
function Landing() {
  return (
    <div>
      <img className="background-image" src={image} alt="band pic" />

      <Row className="text-center pt-3 icon-row">
        <Col></Col>
        <Col></Col>
        <Col></Col>
        <Col>
          <FaInstagramSquare className="icon-i" />
        </Col>
        <Col>
          <FaFacebookSquare className="icon-f" />
        </Col>
        <Col>
          <FaTwitterSquare className="icon-t" />
        </Col>
      </Row>
      <Row className="text-center">
        <p className="text center p-3">
          Fill out our form so we can send you our monthly news letter and give
          you guys the chance to get the scoop on TTB first!{" "}
        </p>
        {/* <h1 className=" text-over-image pt-5">The Tommy Tucker Band</h1> */}
      </Row>
      <Row className="m-2">
        <Contact />
      </Row>
    </div>
  );
}

export default Landing;
