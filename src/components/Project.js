import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { CustomButton } from './Button';
import { ExternalLink } from './ExternalLink';



export default function Project(props) {
  const logAndre =() => console.log("Andre")
    return (
       
      <Card style={{  color: 'black' }}>
        
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Img variant="top" src={props.image} />
          <Card.Text>{props.text}</Card.Text>
          <ExternalLink content={"Go Somewhere"} link={"https://www.google.com"}/>
          <Button variant="primary">Go somewhere</Button>
          <CustomButton functionToUse={logAndre} content={"Helloo"} lightTheme={true}/>
        </Card.Body>
      </Card>
  
    );
  }
  
 