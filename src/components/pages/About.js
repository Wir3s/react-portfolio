import React from "react";
// import backgroundimg from "./robot-portfolio-pic.png";
import '../../styles/About.css';

// const styles = {
//   body: {
//     height: "100vh",
//   },
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
// };

export default function About() {
  return (
    <div className = "mainbody">
      {/* <img src={backgroundimg} style={styles.rimage} alt="chilling robot" width="100%" /> */}
      <div>
        <h2>About Me Page</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque
          velit, lobortis ut magna varius, blandit rhoncus sem. Morbi lacinia
          nisi ac dui fermentum, sed luctus urna tincidunt. <br />Etiam ut feugiat ex.
          Cras non risus mi. Curabitur mattis rutrum ipsum, ut aliquet urna
          imperdiet ac.<br /> Sed nec nulla aliquam, bibendum odio eget, vestibulum
          tortor. Cras rutrum ligula in tincidunt commodo. Morbi sit amet mollis
          orci, in tristique ex.<br /> Donec nec ornare elit. Donec blandit est sed
          risus feugiat porttitor. Vestibulum molestie hendrerit massa non
          consequat. Vestibulum vitae lorem tortor.<br /> In elementum ultricies
          tempus. Interdum et malesuada fames ac ante ipsum primis in faucibus.
        </p>
      </div>
    </div>
  );
}
