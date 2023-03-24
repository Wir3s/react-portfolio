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
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <ExternalLink content={"Go Somewhere"} link={"https://www.google.com"}/>
          <Button variant="primary">Go somewhere</Button>
          <CustomButton functionToUse={logAndre} content={"Helloo"} lightTheme={true}/>
        </Card.Body>
      </Card>
  
    );
  }
  
 