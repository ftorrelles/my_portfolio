import React from "react";
import Typewriter from "typewriter-effect";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <Row xs={1} md={2} lg={2}>
                <Col lg={4}>
                    <div className="div_img_home">
                        <img src="/my.jpeg" alt="" />
                    </div>
                </Col>
                <Col className="div_info_home" lg={7}>
                    <div className="div_infoDetail_home">
                        <h4>Mi nombre es Francisco, me especilizo en</h4>
                        <h1 style={{ color: "#EF8700" }}>
                            <Typewriter
                                options={{
                                    strings: [
                                        "Desarrollo web Full-Stack",
                                        "Javascript",
                                        "React.js",
                                        "Node.js",
                                        "HTML y CSS",
                                        "PostgreSQL",
                                        "Power BI",
                                    ],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </h1>
                    </div>
                    <div className="div_bt_home">
                        <Button as={Link} to="/about" variant="outline-warning">
                            Acerca de mi
                        </Button>
                        <Button
                            as={Link}
                            to="/portfolio"
                            variant="outline-warning"
                        >
                            Portafolio
                        </Button>
                    </div>
                    <div className="div_icons_home">
                        <a
                            href="https://www.linkedin.com/in/francisco-torrelles-227771209/"
                            target="_blank"
                        >
                            <i className="bx bxl-linkedin"></i>
                        </a>
                        <a
                            href="https://www.facebook.com/francisco.alejandro.524"
                            target="_blank"
                        >
                            <i className="bx bxl-facebook-circle"></i>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/francisco-torrelles-227771209/"
                            target="_blank"
                        >
                            <i className="bx bxl-twitter"></i>
                        </a>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default Home;
