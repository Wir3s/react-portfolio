import React from "react";
import Image from "react-bootstrap/Image";
import gitLogo from "../assets/images/github-mark-white.png";
import linkLogo from "../assets/images/LI-In-Bug.png";
// import SoLogo from "../assets/images/sof.png"
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer fixed-bottom">
      <a href="https://github.com/Wir3s/">
      <Image src={gitLogo} width="40px" className="logo" /></a>
      <a href="https://www.linkedin.com/in/andre-bessette/">
      <Image src={linkLogo} width="40px" className="logo" /></a>
      {/* <a href="https://stackoverflow.com/users/19980512/andre-bessette">
      <Image src={SoLogo} width="40px" className="logo" /></a> */}
    </div>
  );
}

export default Footer;
