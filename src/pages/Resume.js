import React from 'react';
import myResume from '../assets/andre_bessette_resume2.docx';

const styles = {
    divStyle: {
      height: '400px',
    },
  };

export default function Resume() {
    return (
        <div style={styles.divStyle}>
            <h1>Resume</h1>
            <p>
           <a href={myResume} download="andre_bessette_resume2.docx">Click here to download my resume.</a>
            </p>
        </div>
    );
}