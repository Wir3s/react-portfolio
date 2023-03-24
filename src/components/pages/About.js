import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import myImage from "./robo.png"
import "../../styles/About.css";

const styles = {
  body: {
    height: "100vh",
  },
//   text: {
//     position: "absolute",
//     bottom: "20px",
//     paddingRight: "160px",
//     paddingLeft: "40px",
//   },
//   rimage: {
//     position: "absolute",
//     bottom: "100px",
//   },
};

export default function About() {
  return (
    <Container fluid style={styles.body}>
      <h2>About Me Page</h2>
      <Row>
        <Col>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque
            velit, lobortis ut magna varius, blandit rhoncus sem. Morbi lacinia
            nisi ac dui fermentum, sed luctus urna tincidunt. <br />
            Etiam ut feugiat ex. Cras non risus mi. Curabitur mattis rutrum
            ipsum, ut aliquet urna imperdiet ac.
            <br /> Sed nec nulla aliquam, bibendum odio eget, vestibulum tortor.
            Cras rutrum ligula in tincidunt commodo. Morbi sit amet mollis orci,
            in tristique ex.
            <br /> Donec nec ornare elit. Donec blandit est sed risus feugiat
            porttitor. Vestibulum molestie hendrerit massa non consequat.
            Vestibulum vitae lorem tortor.
            <br /> In elementum ultricies tempus. Interdum et malesuada fames ac
            ante ipsum primis in faucibus.
          </p>
        </Col>
        <Col>
          <Image src={myImage} width="200px" />
        </Col>
      </Row>
    </Container>
  );
}
