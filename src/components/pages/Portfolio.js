import React from "react";
import Project from "../Project";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import jateImg from "../../assets/images/jateeditor.png";
import readsImg from "../../assets/images/betterreads.png";
import teamImg from "../../assets/images/teamgen.png";
import workImg from "../../assets/images/scheduler.png";
import eatImg from "../../assets/images/eatdrink.png";

const jate = {
  title: "JATE",
  text: "A progressive web application (PWA) that can be installed, works offline, and utilizes Babel and Workbox. It automatically saves text when the DOM window is unfocused.",
  image: jateImg,
};

const bReads = {
  title: "Better Reads",
  text: "Create an account to keep up with your favorite authors and books. Search for books and save your favorites, utilizing the Google Books API.",
  image: readsImg,
};

const socialNet = {
  title: "Social Network API",
  text: "",
};

const teamProf = {
  title: "Team Profile Generator",
  text: "",
  image: teamImg,
};

const eatDrink = {
  title: "Eat Drink & Be Merry",
  text: "",
  image: eatImg,
};

const workSched = {
  title: "Workday Scheduler",
  text: "",
  image: workImg,
};

export default function Portfolio() {
  return (
    <Container fluid>
      <h1>Portfolio</h1>
      <Row>
        <Col md="6">
          <Project title={jate.title} text={jate.text} image={jate.image} />
        </Col>
        <Col md="6">
          <Project title={bReads.title} text={bReads.text} image={readsImg} />
        </Col>
      </Row>
      <Row>
        <Col md="6">
          <Project
            title={teamProf.title}
            text={teamProf.text}
            image={teamImg}
          />
        </Col>
        <Col md="6">
          <Project title={socialNet.title} text={socialNet.text} />
        </Col>
      </Row>
      <Row>
        <Col md="6">
          <Project title={eatDrink.title} text={eatDrink.text} image={eatImg} />
        </Col>
        <Col md="6">
          <Project
            title={workSched.title}
            text={workSched.text}
            image={workImg}
          />
        </Col>
      </Row>
    </Container>
  );
}
