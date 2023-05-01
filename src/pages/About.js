import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import dreImg2 from "../assets/images/andre_bio_bw.png";
import "../styles/About.css";
import styled, { keyframes } from "styled-components";
import { fadeIn } from "react-animations";

const FadeA = styled.div`
  animation: 8s ${keyframes`${fadeIn}`};
`;
const FadeB = styled.div`
  animation: 12s ${keyframes`${fadeIn}`};
`;

export default function About() {
  return (
    <Container fluid>
      <Row>
        <Col md="6" className="txtcol">
          <FadeA>
            <h1> Full-Stack Web Developer</h1>
          </FadeA>
          <br />
          <FadeB>
            <p>
              Passionate about problem-solving and working as a team. Skills include React, MongoDB, GraphQL,
              Express, mySQL, jQuery, Node.js, and Bootstrap combined with diverse
              marketing experience focused on the customer
              journey.
            </p>
          </FadeB>
        </Col>
        <Col md="6" className="imgcol">
          <Image fluid src={dreImg2} className="bio-img" />
        </Col>
      </Row>
    </Container>
  );
}
