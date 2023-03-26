import React from 'react';
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// import { CustomButton } from './Button';
import Button from 'react-bootstrap/Button';
// import { ExternalLink } from './ExternalLink';



export default function Project(props) {
    return (
       
      <Card style={{  color: 'black' }}>
        
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Img variant="top" src={props.image} />
          <Card.Text>{props.text}</Card.Text>
           {/* <ExternalLink content={"Go Somewhere"} link={"https://www.google.com"}/> */}
          <Button variant="primary" href={props.link1}>GitHub Repository</Button>
          
        </Card.Body>
      </Card>
  
    );
  }
  
 