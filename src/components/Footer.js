import React from 'react';
import Image from 'react-bootstrap/Image';
import gitLogo from "../assets/images/github-mark-white.png";
import linkLogo from "../assets/images/LI-In-Bug.png"
import '../styles/Footer.css'



function Footer() {
    return (
        <div className="footer">
            <Image src={gitLogo} width="40px" />
            <Image src={linkLogo} width="40px" />
        </div>
    );
}

export default Footer;