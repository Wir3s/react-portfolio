import React from 'react';
import Project from '../Project';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const jate = {
    title: 'JATE',
   
};

const bReads = {
    title: 'Better Reads'
};

export default function Portfolio() {
    return (
        <Container fluid>
            <h1>Portfolio</h1>
          <Row>
            <Col md="6"><Project title={jate.title} /></Col>
            <Col md="6"><Project title={bReads.title} /></Col>
          </Row>
          <Row>
            <Col md="6"><Project /></Col>
            <Col md="6"><Project /></Col>
          </Row>
          <Row>
            <Col md="6"><Project /></Col>
            <Col md="6"><Project /></Col>
          </Row>
        </Container>
    );
}