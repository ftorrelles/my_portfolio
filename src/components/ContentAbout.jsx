import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "animate.css/animate.min.css";
import { useInView } from "react-intersection-observer";

const ContentAbout = () => {
    //logica libreria react-intersection-observer
    const [ref, inView] = useInView({
        threshold: 0.2,
        triggerOnce: true,
    });

    return (
        <>
            <section className="about">
                <Row xs={1} md={2} lg={2}>
                    <Col lg={9}>
                        <div className="div_infoDetail_about">
                            <h2
                                className={`animate__animated ${
                                    inView ? "animate__fadeInDown" : ""
                                } `}
                                ref={ref}
                            >
                                Acerca de mi
                            </h2>

                            <hr />
                            <p
                                className={`animate__animated ${
                                    inView ? "animate__fadeInUp" : ""
                                } `}
                                ref={ref}
                            >
                                <strong>
                                    Soy desarrollador web Full Stack{" "}
                                </strong>{" "}
                                con mas enfoque en el front-end. <br />
                                <br /> Seguir creciendo a medida que desempeño
                                mis labores en los proyectos, es lo que más me
                                apasiona; poseo conocimientos en JavaScript y
                                node.js, domino varias tecnologías del
                                Desarrollo Web como lo son, React, Redux, React
                                Router, React Hook Form, HTML, CSS, Bootstrap,
                                PostgreSQL, Express, Sequelize, GitHub, entre
                                otras. He usado gran variedad de librerias para
                                realizar tareas como mapas dinamicos,
                                contadores, efecto de escritura y muchas mas.{" "}
                                <br />
                                <br />
                                Tengo habilidades blandas como buena
                                comunicación, trabajo en equipo, adaptabilidad
                                que he desarrollado en mi carrera profesional
                                las cuales aportan un plus adicional a los
                                conocimientos tecnicos que poseo. <br />
                                <br /> Estoy en constante capacitación para
                                seguir creciendo y preparado para aportar valor
                                a tu empresa.
                            </p>
                        </div>
                    </Col>
                    <Col
                        className={`animate__animated ${
                            inView ? "animate__fadeInUp" : ""
                        } `}
                        ref={ref}
                        lg={3}
                    >
                        <div className="div_img_about">
                            <img src="/myPhoto3.png" alt="" />
                        </div>
                        <ul style={{ padding: "0", textAlign: "center" }}>
                            <li>
                                <span style={{ color: "#ef8700" }}>
                                    Nombre:{" "}
                                </span>
                                Francisco Torrelles
                            </li>

                            <li>
                                <span style={{ color: "#ef8700" }}>
                                    Email:{" "}
                                </span>
                                torrellesf93@gmail.com
                            </li>
                            <li>
                                <span style={{ color: "#ef8700" }}>
                                    telefono:
                                </span>
                                +58 4125974805
                            </li>
                        </ul>

                        <div className="div_icons_about">
                            <a
                                href="https://www.linkedin.com/in/francisco-torrelles-227771209/"
                                target="_blank"
                            >
                                <i className="bx bxl-linkedin"></i>
                            </a>

                            <a
                                href="https://wa.me/573134985415"
                                target="_blank"
                            >
                                <i className="bx bxl-whatsapp"></i>
                            </a>
                        </div>
                    </Col>
                </Row>
            </section>
        </>
    );
};

export default ContentAbout;
