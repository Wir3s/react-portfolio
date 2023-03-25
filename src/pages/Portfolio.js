import React from "react";
import Project from "../components/Project";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import jateImg from "../assets/images/jateeditor.png";
import readsImg from "../assets/images/betterreads.png";
import teamImg from "../assets/images/teamgen.png";
import techImg from "../assets/images/techblog.png";
import eatImg from "../assets/images/eatdrink.png";
import apiImg from "../assets/images/socialapi.png";

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
  text: "An API for a social network web application utilizing MongoDB, Express.js and the Mongoose ODM. Users can share thoughts, create a friend list and react to thoughts.",
  image: apiImg,
};

const teamProf = {
  title: "Team Profile Generator",
  text: "A Node.js command line application using the Inquirer package and Jest tests. The application takes infomration about employees and generates an HTML page.",
  image: teamImg,
};

const eatDrink = {
  title: "Eat Drink & Be Merry",
  text: "Search for food and beverage recipes when you're entertaining dinner guests. Add ingredients directly to a list for easier shopping.",
  image: eatImg,
};

const techBlog = {
  title: "Tech Blog",
  text: "A CMS-style blog app following the MVC paradigm, using Handlebars.js, Sequelize as the ORM, and the express-session npm package for authentication.",
  image: techImg,
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
          <Project
            title={socialNet.title}
            text={socialNet.text}
            image={apiImg}
          />
        </Col>
      </Row>
      <Row>
        <Col md="6">
          <Project title={eatDrink.title} text={eatDrink.text} image={eatImg} />
        </Col>
        <Col md="6">
          <Project
            title={techBlog.title}
            text={techBlog.text}
            image={techImg}
          />
        </Col>
      </Row>
    </Container>
  );
}
