import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer_container">
          <div className="footer-content">
            <h3 style={{ textAlign: "center" }}>Discover</h3>
            <div style={{ textAlign: "center" }}>
              <ul>
                <li>
                  <Link to="/portfolio">Portfolio</Link>
                </li>
                <li>
                  <Link to="/experience">Experience</Link>
                </li>
                <li>
                  <Link to="/skills">Skills</Link>
                </li>
                <li>
                  <Link to="/about">About me</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-content">
            {/* <h4 style={{ textAlign: "center" }}>Francisco Torrelles</h4> */}
            <img src="navLogo.svg" alt="" />
          </div>
          <div className="footer-content">
            <h3 style={{ textAlign: "center" }}>Social media</h3>
            <div className="div_icons_contact">
              <a
                href="https://www.linkedin.com/in/francisco-torrelles-227771209/"
                target="_blank"
              >
                <i className="bx bxl-linkedin"></i>
              </a>
              <a href="https://wa.me/573043333955" target="_blank">
                <i className="bx bxl-whatsapp"></i>
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61568366147058"
                target="_blank"
              >
                <i className="bx bxl-facebook-circle"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="copy">
          <p className="footer_copy">
            © Francisco Torrelles All rigths reserved{" "}
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
