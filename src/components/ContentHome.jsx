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
                        <img src="/myPhoto.png" alt="" />
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
                                        "HTML y CSS",
                                        "Node.js con Express.js",
                                        "Sequelize, PostgreSQL y MySQL",
                                        "Power BI",
                                    ],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </h1>
                    </div>
                    <div className="div_bt_home">
                        <Button
                            as={Link}
                            to="/skills"
                            variant="outline-warning"
                        >
                            Habilidades
                        </Button>
                        <Button
                            as={Link}
                            to="/experience"
                            variant="outline-warning"
                        >
                            Experiencia
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
                        <a href="https://wa.me/573203510452" target="_blank">
                            <i className="bx bxl-whatsapp"></i>
                        </a>
                    </div>
                </Col>
            </Row>
        </section>
    );
};

export default ContentHome;
