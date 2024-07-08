import React from "react";
import Project from "../components/Project";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import projects from "../data/projectsData";
import "../styles/Portfolio.css";

export default function Portfolio() {
  // Group projects by category
  const groupedProjects = projects.reduce((acc, project) => {
    if (!acc[project.category]) {
      acc[project.category] = [];
    }
    acc[project.category].push(project);
    return acc;
  }, {});

  return (
    <Container fluid className="portfolio-container">
      <h1>Portfolio</h1>
      {Object.keys(groupedProjects).map((category, index) => (
        <div key={index}>
          <h2 className="portfolio-category-heading">{category}</h2>{" "}
          {/* Apply the new CSS class */}
          <Row className="mt-2">
            {groupedProjects[category].map((project, projectIndex) => (
              <Col md="6" className="mt-2" key={projectIndex}>
                <Project
                  title={project.title}
                  text={project.text}
                  image={project.image}
                  alt={project.alt}
                  link1={project.link1}
                  link2={project.link2}
                  link={project.link}
                />
              </Col>
            ))}
          </Row>
        </div>
      ))}
    </Container>
  );
}
