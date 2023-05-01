import React from "react";
import Card from "react-bootstrap/Card";
import { CustomButton } from "./Button";

export default function Project(props) {
  return (
    <Card style={{ color: "black" }}>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Img variant="top" src={props.image} />
        <Card.Text>{props.text}</Card.Text>
        <CustomButton
          href={props.link1}
          content={"GitHub Repository"}
          role="button"
        />
        {props.link2 && (
        <CustomButton
          href={props.link2}
          content={"Deployed App"}
          role="button"
        />)}
      </Card.Body>
    </Card>
  );
}
