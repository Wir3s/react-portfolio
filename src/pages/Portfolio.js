import React from "react";
import Project from "../components/Project";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import jateImg from "../assets/images/jateeditor.png";
import readsImg from "../assets/images/betterreads.png";
import teamImg from "../assets/images/teamgen.png";
import taskImg from "../assets/images/taskmaster.png";
import eatImg from "../assets/images/eatdrink.png";
import apiImg from "../assets/images/socialapi.png";
import "../styles/Portfolio.css";

const jate = {
  title: "JATE",
  text: "A progressive web application (PWA) that can be installed, works offline, and utilizes Babel and Workbox. It automatically saves text when the DOM window is unfocused.",
  image: jateImg,
  link1: "https://github.com/Wir3s/progressive-text-editor",
  link2: "https://warm-badlands-75057.herokuapp.com/",
};

const bReads = {
  title: "Better Reads",
  text: "Create an account to keep up with your favorite authors and books. Search for books and save your favorites, utilizing the Google Books API.",
  image: readsImg,
  link1: "https://github.com/Wir3s/better_reads",
  link2: "https://better-readss.herokuapp.com/login",
};

const socialNet = {
  title: "Social Network API",
  text: "An API for a social network web application utilizing MongoDB, Express.js and the Mongoose ODM. Users can share thoughts, create a friend list and react to thoughts.",
  image: apiImg,
  link1: "https://github.com/Wir3s/social-network-api",
};

const teamProf = {
  title: "Team Profile Generator",
  text: "A Node.js command line application using the Inquirer package and Jest tests. The application takes infomration about employees and generates an HTML page.",
  image: teamImg,
  link1: "https://github.com/Wir3s/team-profile-generator",
};

const eatDrink = {
  title: "Eat Drink & Be Merry",
  text: "Search for food and beverage recipes when you're entertaining dinner guests. Add ingredients directly to a list for easier shopping.",
  image: eatImg,
  link1: "https://github.com/Wir3s/eat-drink-be-merry",
  link2: "https://wir3s.github.io/eat-drink-be-merry/",
};

const taskMaster = {
  title: "TaskMaster",
  text: "A task organizer, with lists and tasks to help you organize your life and productivity. Built using the MERN stack, GraphQL and Material UI",
  image: taskImg,
  link1: "https://github.com/Wir3s/taskmaster",
  link2: "https://sal-task-master.herokuapp.com/",
};

export default function Portfolio() {
  return (
    <Container fluid className="portfolio-container">
      <h1>Portfolio</h1>
      <Row className="mt-2">
        <Col md="6" className="mt-2">
          <Project
            title={taskMaster.title}
            text={taskMaster.text}
            image={taskMaster.image}
            link1={taskMaster.link1}
            link2={taskMaster.link2}
          />
        </Col>
        <Col md="6" className="mt-2">
          <Project
            title={bReads.title}
            text={bReads.text}
            image={readsImg}
            link1={bReads.link1}
            link2={bReads.link2}
          />
        </Col>
      </Row>
      <Row className="mt-4">
        <Col md="6" className="mt-2">
          <Project
            title={teamProf.title}
            text={teamProf.text}
            image={teamImg}
            link1={teamProf.link1}
          />
        </Col>
        <Col md="6" className="mt-2">
          <Project
            title={socialNet.title}
            text={socialNet.text}
            image={apiImg}
            link1={socialNet.link1}
          />
        </Col>
      </Row>
      <Row className="mt-4">
        <Col md="6" className="mt-2">
          <Project
            title={eatDrink.title}
            text={eatDrink.text}
            image={eatImg}
            link1={eatDrink.link1}
            link2={eatDrink.link2}
          />
        </Col>
        <Col md="6" className="mt-2">
          <Project
            title={jate.title}
            text={jate.text}
            image={jate.image}
            link1={jate.link1}
            link2={jate.link2}
          />
        </Col>
      </Row>
    </Container>
  );
}
