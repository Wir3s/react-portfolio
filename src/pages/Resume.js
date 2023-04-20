import React from "react";
import myResume from "../assets/andre_bessette_resume2.docx";

const styles = {
  divStyle: {
    height: "400px",
    listStyleType: "none",
  },
  ul: {
    listStyleType: "none",
  },
};

export default function Resume() {
  return (
    <div style={styles.divStyle}>
      <h1>Resume</h1>
      <p>
        <a href={myResume} download="andre_bessette_resume2.docx">
          Click here to download my resume.
        </a>
      </p>
      <h2>Proficiencies:</h2>
      <ul style={styles.ul}>
        <li>React</li>
        <li>MongoDB</li>
        <li>GraphQL</li>
        <li>NodeJS</li>
        <li>RESTful API</li>
      </ul>
    </div>
  );
}
