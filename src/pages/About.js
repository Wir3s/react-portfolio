import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import robImg from "../assets/images/robo.png";
import "../styles/About.css";




export default function About() {
  return (
    <Container fluid>
      <h2>About Me</h2>
      <Row>
        <Col className="txtcol">
          <p>
          Personable Full-Stack Web Developer with a background in marketing. Passionate about problem-solving while supporting a team. Skills include Javascript, React, Express, jQuery, Node, and Bootstrap combined with diverse marketing experience focused on communication and the customer journey. Excited to bring a love of learning, adapting, and evolving through the continuing adventure.
          </p>
        </Col>
        <Col>
          <Image src={robImg} width="260px" />
        </Col>
      </Row>
    </Container>
  );
}
