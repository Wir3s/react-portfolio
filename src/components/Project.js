import React from "react";
import Card from "react-bootstrap/Card";
import { CustomButton } from "./Button";
import PropTypes from "prop-types";

export default function Project({
  title,
  text,
  image,
  alt,
  link1,
  link2,
  link,
}) {
  const imageLink = link1 || link || null;

  return (
    <Card style={{ color: "black" }}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        {image &&
          (imageLink ? (
            <a href={imageLink} target="_blank" rel="noopener noreferrer">
              <Card.Img variant="top" src={image} alt={alt} />
            </a>
          ) : (
            <Card.Img variant="top" src={image} alt={alt} />
          ))}
        <Card.Text>{text}</Card.Text>
        {link && (
          <CustomButton href={link} content={"View Project"} role="button" />
        )}
        {link1 && (
          <CustomButton href={link1} content={"Deployed App"} role="button" />
        )}
        {link2 && (
          <CustomButton
            href={link2}
            content={"GitHub Repository"}
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
  alt: PropTypes.string,
  link1: PropTypes.string,
  link2: PropTypes.string,
  link: PropTypes.string,
};
