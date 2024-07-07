import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import dreImg2 from "../assets/images/headshot1.jpg";
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
              I am passionate about problem-solving, web development and
              supporting a team. My web development skills include React,
              MongoDB, GraphQL, Express, SQL and Node.js.
              <br />
              <br />I have a diverse background in marketing focused on
              communication and the customer journey and I am proficient in CRM, the Adobe Suite,
              MailChimp, and WordPress.
              <br /><br />
              My current work in IT focuses on PCI compliance, database management and support.
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
