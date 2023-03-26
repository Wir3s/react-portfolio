import React from 'react';
import Card from 'react-bootstrap/Card';
import { CustomButton } from './Button';
// import Button from 'react-bootstrap/Button';
// import { ExternalLink } from './ExternalLink';



export default function Project(props) {
    return (
       
      <Card style={{  color: 'black' }}>
        
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Img variant="top" src={props.image} />
          <Card.Text>{props.text}</Card.Text>
           {/* <ExternalLink content={"Go Somewhere"} link={"https://www.google.com"}/> */}
          <CustomButton href={props.link1} content={"GitHub Repository"} />
          
        </Card.Body>
      </Card>
  
    );
  }
  
 