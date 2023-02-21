import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const About = () => {
    return (
        <div>
            <Row xs={1} md={2} lg={2}>
                <Col lg={3}>
                    <div className="div_img_about">
                        <img src="/my.jpeg" alt="" />
                    </div>

                    <div className="div_icons_about">
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
                <Col lg={9}>
                    <div className="div_infoDetail_about">
                        <h3>Acerca de mi</h3>
                        <ul style={{ padding: "0" }}>
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
                        <p>
                            <strong>Soy desarrollador web Full Stack </strong>
                            enfocado en el front-end. Seguir creciendo a medida
                            que desempeño mis labores en los proyectos, es lo
                            que más me apasiona; poseo conocimientos en
                            JavaScript y en varias tecnologías del Desarrollo
                            Web como lo son, Node Js, React, Redux, React
                            Router, React Hook Form, HTML, CSS, Bootstrap, Git y
                            GitHub. Las cuales puedo aportar junto a mis
                            habilidades blandas, para lograr el objetivo de
                            desarrollarme profesionalmente en el ámbito de TI.
                            <br />
                            <br />
                            Adicional, cuento con conocimiento amplio en manejo
                            de paquetes Office (Word, Excel, Power Point,
                            Microsoft Teams) con habilidades en el análisis de
                            datos en excel y visualización de los mismos en
                            Power BI. <br />
                            <br />
                            Cuento con estudios técnicos en administración de
                            empresas; con experiencia como analista de
                            Bienestar-Operaciones. He manejado equipos
                            regionales en Centroamérica y Latinoamérica de 8
                            personas, manejo de KPI´s, creación y ejecución de
                            planes; con capacidad de presentación de informes a
                            directivos. <br />
                            <br />
                            Con gran sentido de pertenencia, resiliencia, buena
                            comunicación y capacidad de liderazgo.
                        </p>
                    </div>
                    <div className="div_bt_about">
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
                </Col>
            </Row>
        </div>
    );
};

export default About;
