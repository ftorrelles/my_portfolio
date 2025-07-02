import React from "react";
import Typewriter from "typewriter-effect";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const ContentHome = () => {
  return (
    <section className="home">
      <Row xs={1} md={1} lg={2}>
        <Col lg={4}>
          <div className="div_img_home">
            <img src="logoHome.png" alt="" />
          </div>
        </Col>
        <Col className="div_info_home" lg={7}>
          <div className="div_infoDetail_home">
            <h4>My name is Francisco, I specialize in</h4>
            <h1 style={{ color: "#78A083" }}>
              <Typewriter
                options={{
                  strings: [
                    "Frontend Web Development",
                    "JavaScript",
                    "React.js",
                    "Node.js with Express.js",
                    "WordPress and Elementor",
                    "HTML and CSS",
                    "Sequelize, PostgreSQL, and MySQL",
                    "Power BI",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
          </div>
          <div className="div_bt_home">
            <Button as={Link} to="/skills" variant="outline-light">
              Skills
            </Button>
            <Button as={Link} to="/experience" variant="outline-light">
              Experience
            </Button>
            <Button as={Link} to="/portfolio" variant="outline-light">
              Portfolio
            </Button>
          </div>
          <div className="div_icons_home">
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
        </Col>
      </Row>
    </section>
  );
};

export default ContentHome;
