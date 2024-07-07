import React from "react";
import Card from "react-bootstrap/Card";
import { CustomButton } from "./Button";
import PropTypes from "prop-types";

export default function Project({ title, text, image, link1, link2, link }) {
  return (
    <Card style={{ color: "black" }}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        {image && <Card.Img variant="top" src={image} />}
        <Card.Text>{text}</Card.Text>
        {link && (
          <CustomButton href={link} content={"View Project"} role="button" />
        )}
        {link1 && (
          <CustomButton
            href={link1}
            content={"GitHub Repository"}
            role="button"
          />
        )}
        {link2 && (
          <CustomButton
            href={link2}
            content={"Deployed App"}
            role="button"
          />
        )}
      </Card.Body>
    </Card>
  );
}

Project.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  image: PropTypes.string,
  link1: PropTypes.string,
  link2: PropTypes.string,
  link: PropTypes.string,
};
