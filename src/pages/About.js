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
              I am passionate about web development, problem solving, and
              helping businesses connect with their customers. Based in
              Stillwater, Minnesota in the midwest of the United States, I am
              available to update your website or create a new website for your
              business wherever you are located. I offer services for optimizing
              your website for SEO and engagement as well.
              <br />
              <br />I have a diverse background in marketing focused on
              communication and the customer journey and I am proficient in CRM,
              the Adobe Suite, MailChimp, WordPress, and WIX.
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
