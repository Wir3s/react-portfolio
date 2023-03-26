import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
// import robImg from "../assets/images/robo.png";
import dreImg from "../assets/images/andreabout.png";
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
            <h2> Full-Stack Web Developer</h2>
          </FadeA>
          <br />
          <FadeB>
            {" "}
            with a background in marketing. Passionate about problem-solving
            while supporting a team. Skills include Javascript, React, Express,
            jQuery, Node, and Bootstrap combined with diverse marketing
            experience focused on communication and the customer journey.
          </FadeB>
        </Col>
        <Col md="6">
          <Image src={dreImg} width="200px" className="bio-img" />
          {/* <Image src={robImg} width="260px" className="robo-img" /> */}
        </Col>
      </Row>
    </Container>
  );
}
